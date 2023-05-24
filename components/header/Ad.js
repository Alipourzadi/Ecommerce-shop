import Link from "next/link";

function Ad() {
  return (
    <Link href="/shop">
      <div className="h-[40px] w-full bg-center bg-cover bg-no-repeat bg-[url('../public/img/ad.png')]" />
    </Link>
  );
}

export default Ad;
