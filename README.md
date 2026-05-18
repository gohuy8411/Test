# My Portfolio Template

Một template Portfolio chuyên nghiệp được xây dựng bằng HTML thuần, CSS và JavaScript. 

## 📋 Tính năng

✅ Responsive design (hoạt động trên tất cả thiết bị)
✅ Smooth animations và transitions
✅ Mobile-friendly hamburger menu
✅ Contact form với validation
✅ Social media links
✅ Projects showcase
✅ Skills section
✅ About section
✅ Scroll animations

## 📁 Cấu trúc thư mục

```
my-portfolio/
├── index.html      # File HTML chính
├── style.css       # File CSS styling
├── script.js       # File JavaScript
└── README.md       # File hướng dẫn này
```

## 🚀 Cách sử dụng

### Bước 1: Mở file HTML
1. Tải các file về máy
2. Mở file `index.html` bằng trình duyệt web

### Bước 2: Sửa thông tin cá nhân

#### Trong `index.html`, tìm và sửa:

1. **Tên của bạn** (tìm "Tên của bạn")
   - Dòng 35, 48, 244

2. **Email** 
   - Dòng 96: `your.email@example.com`

3. **Địa chỉ**
   - Dòng 101: `Thành phố, Quốc gia`

4. **Hình ảnh đại diện**
   - Dòng 54: Thay link `https://via.placeholder.com/300` bằng link ảnh của bạn

5. **Về bạn**
   - Dòng 70-74: Sửa mô tả về bạn

6. **Kỹ năng**
   - Dòng 114-142: Sửa các kỹ năng của bạn

7. **Dự án**
   - Dòng 154-210: Sửa thông tin dự án của bạn
   - Thay hình ảnh, tiêu đề, mô tả, công nghệ sử dụng

### Bước 3: Sửa liên kết

- **Social Media** (dòng 232-258): Thay các link `#` bằng link thực của bạn
  - GitHub
  - LinkedIn
  - Twitter

- **Demo & GitHub links** (dòng 200, 206): Sửa link dự án của bạn

### Bước 4: Tùy chỉnh màu sắc (Tuỳ chọn)

Trong `style.css`, tìm phần `:root` và sửa:
```css
:root {
    --primary-color: #667eea;      /* Màu chính */
    --secondary-color: #764ba2;    /* Màu phụ */
    --text-color: #333;            /* Màu chữ */
    --bg-color: #f8f9fa;           /* Màu nền */
}
```

## 📸 Lưu ý về hình ảnh

1. **Thay ảnh đại diện**
   - Tìm dòng 54: `<img src="https://via.placeholder.com/300" alt="Avatar">`
   - Thay URL bằng link ảnh của bạn

2. **Thay ảnh dự án**
   - Tìm các dòng có `https://via.placeholder.com/300x200`
   - Thay bằng link ảnh của dự án bạn

3. **Hosting ảnh miễn phí:**
   - Imgur.com
   - Cloudinary.com
   - Imgbb.com

## 🎨 Tuỳ chỉnh thêm

### Thêm section mới
Copy và sửa các section như `<section class="about">...</section>`

### Thay đổi font chữ
Trong `style.css`, sửa:
```css
body {
    font-family: 'Tên font của bạn', sans-serif;
}
```

### Thêm dark mode
Bỏ comment những dòng trong `script.js` (dòng 117-126)

## 📱 Kiểm tra responsive

1. Mở file HTML trong trình duyệt
2. Nhấn F12 hoặc Ctrl+Shift+I để mở Developer Tools
3. Nhấn Ctrl+Shift+M để kiểm tra mobile view

## 🌐 Chuẩn bị đẩy lên GitHub

1. Tạo folder `my-portfolio` chứa 3 file: `index.html`, `style.css`, `script.js`
2. Khởi tạo git repository
3. Commit và push lên GitHub

## 🚀 Triển khai lên Vercel

1. Đăng nhập Vercel bằng tài khoản GitHub
2. Chọn "Import Git Repository"
3. Chọn repository `my-portfolio` của bạn
4. Bấm "Deploy"
5. Chờ 30 giây để nhận URL trang web của bạn

## 💡 Mẹo

- Lấy ảnh đẹp từ: pexels.com, unsplash.com, pixabay.com
- Tạo GitHub token tại: github.com/settings/tokens
- Kiểm tra website trên nhiều thiết bị trước khi deploy
- Dùng Google Fonts để thêm font đẹp

## 📞 Cần giúp?

- Xem lại mã HTML, CSS, JS để hiểu cấu trúc
- Tham khảo documentation tại MDN (developer.mozilla.org)
- Test form bằng cách mở console (F12) để xem thông báo

---

**Chúc bạn thành công! 🎉**
