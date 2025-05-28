# Employee Management System  

**Phiên bản:**  
- Node.js: `v22.14.0`  
- Next.js: `next@15.3.2`  
- Tailwind CSS: `tailwindcss@4.1.7`  

##  Cài đặt và chạy dự án  

### Clone Git Repository  
1. clone git repo
2. cài node và npm nếu chưa có ( v22.14.0 )
3. mở terminal, chạy "npm install" để cài thư viện
4. mở terminal và gõ "cd server" để sử dụng folder server, chạy "npm start" kiểm tra port đã hoạt động chưa
5. mở terminal và gõ "cd frontend" để sử dụng folder frontend, chạy project bằng "npm run dev" sẽ ra localhost

```bash
git clone <repo-url>
cd Employee-Management-System

npm install

cd server
npm start

cd frontend
npm run dev

Employee-Management-System/
│── server/        # API backend (Express.js)
│── frontend/      # Frontend (Next.js + TailwindCSS)
│── .env           # Biến môi trường
│── README.md      # Tài liệu hướng dẫn