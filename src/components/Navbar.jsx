function Navbar() {
  return (
    <nav className=" bg-bgSecondary py-6 text-[#c6c9d8bf] px-5">
      <div className="flex items-center justify-between container mx-auto">
        <h1 className="text-3xl text-[#d73131] ">
          <a href="">Samiul Islam.</a>
        </h1>
        <ul className="hidden navlinks transition text-lg md:flex gap-10 flex-col md:flex-row">
          <li>
            <a href="" className="hover:text-[#FD4766] ">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#FD4766]">
              About
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#FD4766]">
              Services
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#FD4766]">
              Portfolio
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#FD4766]">
              Blog
            </a>
          </li>
        </ul>
        <div className="flex  text-xl  gap-10">
          <a
            href="https://www.facebook.com/profile.php?id=61554268983428"
            target="_blank"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
