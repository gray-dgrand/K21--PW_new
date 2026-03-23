# Bài tập buổi 5 - Key takeaways

## DOM và XPath
- Dùng XPath tuyệt đối khi cần đi theo cấu trúc cố định toàn cây DOM.
- Dùng XPath tương đối để selector linh hoạt, dễ bảo trì hơn.
- `text()` giúp match đúng text node.
- `contains(text(), "...")` giúp match text không cố định hoặc có khoảng trắng.

## Playwright Actions
- `goto`, `locator`, `click`, `fill`, `check`, `selectOption`, `setInputFiles`.
- Làm việc với danh sách phần tử bằng `nth()`, `first()`, `filter()`.
- Lặp (`for`) để thao tác nhiều lần như thêm nhiều sản phẩm/todo.
- Viết test rõ ràng theo từng bước: arrange -> act -> assert.

