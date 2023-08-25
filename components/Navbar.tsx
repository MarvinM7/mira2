import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 border-b border-gray-100 bg-slate-100">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link className="flex justify-center items-center"
          href={'/'}
        >
          <Image className="object-contain"
            alt="Logo"
            height={18}
            src='/logo.png'
            width={118}
          />
        </Link>

        <Link
          href={'/login'}
        >
          <CustomButton
            containerStyles="custom-btn text-white rounded-full bg-primary-blue min-w-[130px]"
            title="Entrar"
            type="button"
          />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar;