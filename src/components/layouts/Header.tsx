import Image from 'next/image';
import logo from '@/assets/Icon.svg';
const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-[31px] mb-[54px]">
      <div className="border border-white w-[110px] h-[28px] p-[7px] gap-[10px]">
        <h1 className="text-white text-[12px] font-[500] text-center">
          ПОКЕМОНЫ API
        </h1>
      </div>
      <div className="flex flex-row justify-between items-center w-[150px] h-[30px]">
        <Image src={logo} alt="logo" width={24} height={30} />
        <h1 className="text-[12px] text-white font-[600] ml-[10px]">
          Нажмите на нужного Покемона
        </h1>
      </div>
    </div>
  );
};

export default Header;
