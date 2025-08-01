import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskInput from "./components/Taskinput";
import TaskCard from "./components/TaskCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar username="Suphaserd" type="admin" />
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className="col-12 m-2 p-0">
              <TaskInput />
              <TaskCard title="Read a book" description="Vite + React + Bootstrap + TS" />
              <TaskCard title="Write code" description="Finish project for class" />
              <TaskCard title="Deploy app" description="Push project to GitHub Pages" />
            </div>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year={2026} fullName="ศุภเศรษฐ์ ไชยลังกา" studentId="670612132" />
    </div>
  );
}

export default App;
