
import Contact from "./components/contact";
import UserAvater from "./components/userAvater";
function App() {
  return <div className="bg-[#F5F7FB] w-screen h-screen">Tex Messenger
  {/* <UserAvater/> */}
  
  <div class="flex flex-row">
  <div class="basis-1/3 p-5" ><Contact/></div>
  <div class="basis-2/3">03</div>
  
</div>

  </div>;
}

export default App;
