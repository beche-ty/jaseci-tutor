

# 📚 LearnPlatform - Smart Learning Management System

**LearnPlatform** is a modern, Jaseci-based web application designed for tutors and students to create, share, and interact with structured educational content. It provides a seamless experience for content creation, student progress tracking, and interactive learning.

## ✨ Features

### 👨‍🏫 **For Tutors**
*   **Book & Chapter Management**: Create and organize educational books into chapters with custom ordering.
*   **Rich Content Creation**: Add titles, descriptions, and structured content to each chapter.
*   **Student Access Control**: Grant specific students access to books and track their progress.
*   **Visual Dashboard**: Manage all educational materials from an intuitive tutor dashboard.

### 🎓 **For Students**
*   **Interactive Dashboard**: View progress statistics, active streaks, and completion rates.
*   **Organized Learning**: Access all assigned books and chapters in a clean, card-based interface.
*   **Progress Tracking**: See completion status and scores for each lesson.
*   **Continue Learning**: Quickly resume recent lessons from the dashboard.

### 🛠️ **Technical Features**
*   **Jaseci-Powered Backend**: Built with Jaseci's graph-based architecture for flexible data modeling.
*   **Role-Based Authentication**: Separate login flows and dashboards for tutors and students.
*   **Responsive Frontend**: Modern UI with clean navigation and sidebar layouts.
*   **RESTful API**: Walkers provide endpoints for all platform operations.

## 📁 Project Structure

```
learning_platform/
├── app.jac                  # Main Jaseci application file
├── frontend/                # Frontend components (JSX-like syntax)
│   ├── components/
│   │   ├── Navigation.jac
│   │   ├── Sidebar.jac
│   │   └── Modal.jac
│   ├── pages/
│   │   ├── Login.jac
│   │   ├── Dashboard.jac
│   │   ├── TutorDashboard.jac
│   │   └── BookManager.jac
│   └── styles/              # Inline style definitions
├── walkers/                 # Jaseci walkers
│   ├── auth_walkers.jac    # Authentication & session management
│   ├── book_walkers.jac    # Book & chapter CRUD operations
│   ├── student_walkers.jac # Student progress tracking
│   └── user_walkers.jac    # User management
└── nodes/                  # Jaseci node architectures
    ├── book_node.jac
    ├── chapter_node.jac
    ├── user_node.jac
    └── student_access_node.jac
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- [Jaseci](https://github.com/Jaseci-Labs/jaseci) installed
- Git (for version control)

### Installation
1. **Clone the repository**
   ```bash
   [git clone https://github.com/beche-ty/jaseci-tutor.git
   cd learning_platform
   ```

2. **Set up Jaseci environment**
   ```bash
   # Install Jaseci if not already installed
   pip install jac-client

   
   # Initialize Jaseci
   jac run app.jac
   ```

3. **Load the application**
   ```bash
   # From within 
   jac run app.jac
   ```

4. **Run the development server**
   ```bash
   # Start the Jaseci server
   jac serve app.jac
   ```

5. **Access the application**
   - Open your browser to `http://localhost:8000/page/app`
   - Default credentials can be set in the authentication walkers

## 📖 Usage Guide

### Creating Your First Book (Tutor)
1. Log in with tutor credentials
2. Navigate to the Tutor Dashboard
3. Click "Create New Book"
4. Fill in book details (title, description, subject, color)
5. Add chapters with content and ordering
6. Grant student access to the book

### Student Learning Flow
1. Log in with student credentials
2. View dashboard with progress statistics
3. Browse available books from "My Books" tab
4. Click on a book to view chapters
5. Complete chapters and track progress

### API Endpoints
The platform exposes several walkers as API endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/walker/list_books` | POST | List all books for current user |
| `/walker/create_book` | POST | Create a new book (tutor only) |
| `/walker/list_chapters` | POST | List chapters for a specific book |
| `/walker/create_chapter` | POST | Create a new chapter (tutor only) |
| `/walker/get_student_progress` | POST | Get student progress summary |

Example API call:
```bash
curl -X POST http://localhost:8000/walker/list_chapters \
  -H "Content-Type: application/json" \
  -d '{"book_id": "your-book-id", "user_email": "student@example.com"}'
```

## 🔧 Key Jaseci Walkers

### Authentication Walkers
- `login`: Handle user authentication
- `get_session_user`: Validate and retrieve session data
- `logout`: End user session

### Book Management Walkers
- `create_book`: Create new educational books
- `list_books`: Retrieve books for current user
- `create_chapter`: Add chapters to books
- `list_chapters`: Get all chapters for a book


## 🎨 UI Components

### Navigation Components
- `StudentNavigation`: Top navigation bar for students
- `TutorNavigation`: Top navigation bar for tutors
- `StudentSidebar`: Sidebar with menu options for students

### Page Components
- `LoginPage`: User authentication interface
- `DashboardPage`: Student dashboard with stats
- `TutorDashboardPage`: Tutor management interface
- `BookManagerPage`: Book and chapter creation/editing

### Modal Components
- `ChapterModal`: Form for creating/editing chapters
- `BookModal`: Form for creating/editing books







## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.



## 🙏 Acknowledgments

- Built with [Jaseci](https://github.com/Jaseci-Labs/jaseci)
- Inspired by modern LMS platforms
- Thanks to all contributors who have helped shape this project

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers directly.

---

This README provides a comprehensive overview of your learning platform project. Would you like me to elaborate on any specific section or create additional documentation for particular components?
