import './index.css';
import Header from "./components/Header.js";
import CreateBlog from "./components/CreateBlog.js"
import AllBlogs from './components/AllBlogs';
import CreateBlogButton from './components/CreateBlogButton';
function App() {
  return (
		<div className="min-h-screen bg-[#19194f]">
			<Header />
			<div className="pt-20 flex gap-2 h-screen">
				<CreateBlog />
				<AllBlogs />
			</div>
			<CreateBlogButton />
		</div>
	);
}

export default App;
