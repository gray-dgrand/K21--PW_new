import { test, expect, request, APIRequestContext } from '@playwright/test';

const BASE_URL = 'https://material.playwrightvn.com/api/user-management/v1';

const ADMIN_CREDENTIALS = {
  email: 'admin@example.com',
  password: 'password',
};

const USER_CREDENTIALS = {
  email: 'john@example.com',
  password: 'password',
};

async function login(
  apiContext: APIRequestContext,
  credentials: { email: string; password: string }
) {
  const response = await apiContext.post(`${BASE_URL}/login.php`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: credentials,
  });

  const body = await response.json();

  return {
    response,
    body,
    token: body?.data?.token as string | undefined,
  };
}

test.describe('Lesson 11 - User Management API', () => {
  test('Test 1: Login success', async () => {
    const apiContext = await request.newContext();

    await test.step('Step 1: Login admin success', async () => {
      const { response, body, token } = await login(apiContext, ADMIN_CREDENTIALS);
      expect(response.status()).toBe(200);
      expect(body.success).toBeTruthy();
      expect(token).toBeTruthy();
    });

    await test.step('Step 2: Login normal user success', async () => {
      const { response, body, token } = await login(apiContext, USER_CREDENTIALS);
      expect(response.status()).toBe(200);
      expect(body.success).toBeTruthy();
      expect(token).toBeTruthy();
    });

    await apiContext.dispose();
  });

  test('Test 2: Create user success', async () => {
    const apiContext = await request.newContext();
    let adminApiContext: APIRequestContext | null = null;
    let createdUserId: number | null = null;

    const uniqueEmail = `namnv_${Date.now()}@example.com`;
    const userPayload = {
      name: 'Nam NV',
      email: uniqueEmail,
      password: 'password',
      role: 'user',
    };

    await test.step('Pre-condition: Login admin', async () => {
      const { response, token } = await login(apiContext, ADMIN_CREDENTIALS);
      expect(response.status()).toBe(200);
      expect(token).toBeTruthy();

      adminApiContext = await request.newContext({
        baseURL: BASE_URL,
        extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        },
      });
    });

    await test.step('Step 1: Create user and verify 201', async () => {
      const createResponse = await adminApiContext!.post(`/users.php`, {
        data: userPayload,
      });
      const createBody = await createResponse.json();

      expect(createResponse.status()).toBe(201);
      expect(createBody.success).toBeTruthy();
      expect(createBody.user.email).toBe(uniqueEmail);
      createdUserId = createBody.user.id;
      expect(createdUserId).toBeTruthy();
    });

    await test.step('Step 2: Get users list and verify created user exists', async () => {
      const listResponse = await adminApiContext!.get(`/users.php`);
      const listBody = await listResponse.json();

      expect(listResponse.status()).toBe(200);
      expect(listBody.success).toBeTruthy();

      const foundUser = listBody.users.find((u: { email: string }) => u.email === uniqueEmail);
      expect(foundUser).toBeTruthy();
    });

    await test.step('Post-condition: Delete created user', async () => {
      if (!createdUserId) return;

      const deleteResponse = await adminApiContext!.delete(`/users.php`, {
        data: { id: createdUserId },
      });
      const deleteBody = await deleteResponse.json();

      expect(deleteResponse.status()).toBe(200);
      expect(deleteBody.success).toBeTruthy();
    });

    await apiContext.dispose();
    if (adminApiContext) await adminApiContext.dispose();
  });
});

