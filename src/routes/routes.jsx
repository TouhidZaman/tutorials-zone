import { createBrowserRouter } from "react-router-dom";
import AuthorLayout from "../layout/AuthorLayout";
import Layout from "../layout/layout";
import BrowsingHistory from "../pages/BrowsingHistory";
import AddCourse from "../pages/course-author/AddCourse";
import AllCourses from "../pages/course-author/AllCourses";
import CourseView from "../pages/CourseView";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/course-view/:courseId",
                element: <CourseView />,
            },
            {
                path: "/history",
                element: <BrowsingHistory />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <AuthorLayout />,
        children: [
          {
            path: "/dashboard",
            element: <AllCourses />,
          },
          {
            path: "add-course",
            element: <AddCourse />,
          },
        ],
      },
])

export default routes;