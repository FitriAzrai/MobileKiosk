import * as React from "react";
//import ScrollPicker from "react-native-wheel-scrollview-picker";

interface MenuItemProps {
  imageSrc: string;
  altText: string;
  name: string;
  singlePrice: string;
  setPrice: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  imageSrc,
  altText,
  name,
  singlePrice,
  setPrice,
}) => {
  return (
    <div className="flex gap-3 mt-4">
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className="shrink-0 max-w-full aspect-[1.33] w-[138px]"
      />
      <div className="flex flex-col my-auto">
        <div className="text-xl font-bold">{name}</div>
        <div className="flex gap-5 mt-3.5">
          <div className="flex flex-1 gap-1">
            <div className="justify-center px-2 py-1.5 text-xs font-semibold bg-white rounded-md border-2 border-solid border-black border-opacity-80">
              단품
            </div>
            <div className="my-auto text-sm font-medium">{singlePrice}</div>
          </div>
          <div className="flex flex-1 gap-1">
            <div className="justify-center px-2 py-1.5 text-xs font-semibold bg-white rounded-md border-2 border-black border-solid">
              세트
            </div>
            <div className="my-auto text-sm font-medium">{setPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyComponent: React.FC = () => {
  const menuItems = [
    {
      imageSrc: "public/image4.png",
      altText: "불불불불싸이버거",
      name: "불불불불싸이버거",
      singlePrice: "7,000",
      setPrice: "9,000",
    },
    {
      imageSrc: "public/image6.png",
      altText: "골든맥앤치즈비프버거",
      name: "골든맥앤치즈비프버거",
      singlePrice: "8,000",
      setPrice: "10,000",
    },
  ];

  const showAlert = () => {
    alert(
      "서빙 서비스를 제공하는 매장입니다. 테이블에 적혀있는 테이블 번호를 입력해주세요."
    );
    // <ScrollPicker
    //     dataSource={["1", "2", "3", "4", "5", "6"]}
    //     selectedIndex={1}
    //     wrapperHeight={180}
    //     wrapperBackground="#FFFFFF"
    //     itemHeight={60}
    //     highlightColor="#d8d8d8"
    //     highlightBorderWidth={2}
  };

  const handleItemClick = () => {};

  return (
    <div className="flex flex-col bg-white max-w-[360px] rounded-[30px]">
      <div className="flex flex-col px-5 w-full">
        <section className="flex overflow-hidden relative flex-col gap-3.5 items-start pt-0.5 pr-4 pb-20 pl-20 aspect-[2.21]">
          <img
            loading="lazy"
            src="/image5.png"
            alt="restaurant"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="/cart.png"
            alt="cart"
            className="shrink-0 aspect-square w-[53px]"
          />
          <img
            loading="lazy"
            src="/setting.png"
            alt="setting"
            className="shrink-0 mt-1 w-10 aspect-square"
          />
        </section>
        <header className="self-center mt-3 text-3xl font-extrabold text-black">
          맘스터치 - 건대점
        </header>
        <img
          loading="lazy"
          src="/ads.png"
          alt="ads"
          className="mt-2.5 w-full aspect-[4.55]"
        />
        <section className="flex flex-col pl-2.5 mt-6 w-full text-black whitespace-nowrap">
          <nav className="flex gap-5 justify-between items-center self-center ml-3 text-xl font-medium">
            <div
              role="button"
              tabIndex={0}
              className="justify-center self-stretch px-3 py-2 font-semibold text-white rounded-2xl bg-zinc-500"
            >
              대표메뉴
            </div>
            <div className="self-stretch my-auto">버거메뉴</div>
            <div className="self-stretch my-auto">사이드메뉴</div>
          </nav>
          <hr className="shrink-0 mt-2.5 mr-3.5 ml-3.5 max-w-full h-px border border-solid bg-zinc-500 border-zinc-500 w-[323px]" onClick={handleItemClick}/>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </section>
      </div>
      <section className="flex flex-col px-5 py-px w-full">
        <div>
          <article className="flex z-10 flex-col mt-0">
            <div className="flex gap-0 mt-3">
              {/* <button className="grow justify-center px-10 py-1.5 text-xl font-bold text-white bg-amber-500 rounded-xl w-fit">
                총 12,000원 주문하기
              </button> */}
            </div>
          </article>
          <img
            loading="lazy"
            src="/home.png"
            alt="home"
            className="z-10 self-end mt-1.5 aspect-square w-[57px]"
          />
          <div
            tabIndex={0}
            className="flex justify-center items-center self-center px-9 py-2 mt-0 max-w-full bg-amber-500 w-[114px]"
            onClick={showAlert}
          >
            <img
              loading="lazy"
              src="/logo.png"
              alt="logo"
              className="w-full aspect-square"
            />
          </div>
          <img
            loading="lazy"
            src="/user.png"
            alt="user"
            className="z-10 self-end mt-1.5 aspect-square w-[57px]"
          />
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
