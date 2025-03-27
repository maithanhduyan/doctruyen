Trong các trình quản lý gói Node.js phổ biến (`npm`, `yarn`, `pnpm`), tốc độ cài đặt thường như sau:

**Nhanh nhất:**  
✅ **`pnpm`** (nhanh nhất)

**Trung bình:**  
🔸 **`yarn`** (phiên bản yarn berry/yarn 2, 3 tương đối nhanh, yarn classic nhanh vừa phải)

**Chậm nhất:**  
🔹 **`npm`** (thường chậm hơn 2 cái còn lại, đặc biệt khi số lượng gói nhiều)

---

### Vì sao `pnpm` nhanh nhất?

- **Caching hiệu quả**: `pnpm` sử dụng một kho lưu trữ nội dung (content-addressable storage), tránh việc tải lại nhiều lần cùng một thư viện.  
- **Symlinks**: Thay vì sao chép từng gói vào mỗi dự án, `pnpm` dùng liên kết tượng trưng, tiết kiệm rất nhiều dung lượng ổ đĩa, từ đó giảm đáng kể thời gian ghi đĩa và tốc độ cài đặt.
- **Cài đặt song song tối ưu hơn** so với npm hay yarn.

---

### So sánh tốc độ tương đối khi cài đặt

| Trình quản lý | Tốc độ cài đặt | Mức dùng ổ đĩa |
|---------------|----------------|----------------|
| `pnpm`        | 🟢 **Nhanh nhất** | 🟢 **Ít nhất** |
| `yarn berry`  | 🟡 Nhanh         | 🟡 Trung bình  |
| `npm`         | 🔴 Chậm nhất     | 🔴 Nhiều nhất  |

---

### Kết luận:

👉 Nếu ưu tiên về tốc độ, dung lượng ổ đĩa và hiệu suất tối đa, **`pnpm` là lựa chọn hàng đầu hiện nay**.


Dưới đây là cách sử dụng cơ bản của **`pnpm`** – một trình quản lý gói Node.js nhanh và hiệu quả nhất hiện nay.

---

## 🚀 **1. Cài đặt `pnpm`**

### Qua npm:

```bash
npm install -g pnpm
```

### Hoặc qua script cài đặt chính thức (khuyến nghị):

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

> Sau khi cài xong, kiểm tra bằng:
```bash
pnpm -v
```

---

## 🚀 **2. Các câu lệnh cơ bản**

### 📦 **Cài đặt tất cả dependencies từ `package.json`**

```bash
pnpm install
# hoặc ngắn gọn
pnpm i
```

### ➕ **Cài đặt một package mới**

- Cài đặt vào dependencies:

```bash
pnpm add <package-name>
```

- Cài đặt vào dev dependencies:

```bash
pnpm add -D <package-name>
```

- Cài phiên bản cụ thể:

```bash
pnpm add <package-name>@<version>
```

### 🗑️ **Xoá một package**

```bash
pnpm remove <package-name>
```

### 🔄 **Cập nhật các dependencies**

```bash
pnpm update
```

- Cập nhật một package cụ thể:

```bash
pnpm update <package-name>
```

---

## 🚀 **3. Chạy script**

Chạy scripts được định nghĩa trong file `package.json`:

```bash
pnpm run <script-name>
```

Ví dụ, chạy `dev`:

```bash
pnpm run dev
# hoặc ngắn hơn
pnpm dev
```

---

## 🚀 **4. Khởi tạo một dự án Node.js mới**

Tạo file `package.json`:

```bash
pnpm init
```

hoặc dùng mặc định, không cần hỏi đáp:

```bash
pnpm init -y
```

---

## 🚀 **5. Workspace (Monorepo)**

`pnpm` mạnh mẽ trong việc hỗ trợ workspace để quản lý nhiều packages trong một dự án lớn:

### Thiết lập workspace:

```bash
pnpm init
```

Rồi tạo file `pnpm-workspace.yaml`:

```yaml
packages:
  - "packages/*"
```

Sau đó, cài đặt toàn bộ workspace bằng lệnh:

```bash
pnpm install
```

---

## 🚀 **6. Các lệnh hữu ích khác**

- **Kiểm tra dependencies đã cài đặt**

```bash
pnpm list
```

- **Dọn dẹp cache**

```bash
pnpm store prune
```

- **Kiểm tra dung lượng cache đang sử dụng**

```bash
pnpm store status
```

---

## 🚀 **7. Một ví dụ tổng quan nhanh về workflow**

```bash
# Tạo dự án mới
pnpm init -y

# Cài đặt các thư viện
pnpm add express
pnpm add -D typescript @types/express

# Chạy project
pnpm run start
```

---

## ⚡ **Tổng kết:**

Dùng `pnpm` giống như bạn sử dụng `npm` hoặc `yarn`, chỉ thay thế tên lệnh là `pnpm` và hưởng lợi từ tốc độ vượt trội và tiết kiệm dung lượng ổ đĩa.

Chúc bạn thành công! 🎯