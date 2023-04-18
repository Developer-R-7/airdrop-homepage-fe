import { FiLink } from "react-icons/fi";
import { useAccount } from "wagmi";
import { enrollUser } from "../../services/apiservices";
import Link from "next/link";

export type cmp_details = {
  display_name: string;
  user_name: string;
  password: string;
  company_task_list: number[];
  company_description: string;
  joined_at?: string;
  enrolled_users: number[]; // array of source_id of users joined,
  social_links: string[];
  company_website: string;
};

export type cmp = {
  details: cmp_details[];
};

type forCard = {
  display_name: string;
  company_description: string;
  company_website: string;
  _id: string;
};

const Card = ({
  display_name,
  company_description,
  company_website,
  _id,
}: forCard) => {
  const { address } = useAccount();

  const handleEnrollUser = async () => {
    const res = await enrollUser({
      wallet_address: address,
      company_id: _id,
    });
    console.log(res);
  };

  return (
    <Link href={`/${display_name}`} className="w-1/3">
      <div className="flex flex-col mt-4 mr-10 p-4 bg-primary-pink border-primary-text bg-opacity-30 border-2 rounded-xl  gap-3 ">
        <div className="flex gap-2">
          <div className=" w-10 h-10">
            <img
              src="data:image/png;base64,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"
              alt=""
              className=" rounded-lg"
            />
          </div>
          <div className=" text-3xl font-semibold">{display_name}</div>
        </div>
        <div className=" text-neutral-400 text-xl">{company_description}</div>
        <div className=" w-full justify-between p-2 rounded-lg flex items-center">
          <a className="bg-white p-2 rounded" href={`${company_website}`}>
            <FiLink size={20} />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default Card;
