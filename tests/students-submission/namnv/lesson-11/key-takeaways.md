# Lesson 11 - Key takeaways

## API testing with Playwright
- Dung `request.newContext()` hoac `request` fixture de goi API.
- Tach test theo flow: login -> call API can auth -> assert response.
- Luon verify `status code`, `success flag`, va cac field quan trong.

## Headers trong API request
- Dung `Content-Type: application/json` cho body JSON.
- Dung `Authorization: Bearer <token>` cho endpoint can login.
- Nen dat header trong helper de tai su dung cho nhieu test.

## Test design
- Co pre-condition va post-condition ro rang.
- Data test nen unique (email co timestamp) de tranh trung.
- Sau test create, nen cleanup data (delete user) de tranh ban du lieu test.

