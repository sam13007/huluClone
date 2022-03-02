/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import HeaderItem from './Headeritem';
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 h-auto justify-between items-center">
      <div className="flex justify-evenly flex-grow max-w-xl">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderItem Icon={CollectionIcon} title="COLLECTION" />
        <HeaderItem Icon={SearchIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <Image
        className="object-contain ml-2"
        src="/Daco_4368816.png"
        height={50}
        width={100}
      />
    </header>
  );
}

export default Header;
