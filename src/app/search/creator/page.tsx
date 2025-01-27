// import SearchBox from "@/app/components/SearchBox";
// import Table from "@/app/components/Table/Table";

import { createClient } from "@/app/utils/apiServer";

export default async function searchCreator() {
  const supabase = await createClient();
  const { data: creators } = await supabase.from("creators").select();

  return <pre>{JSON.stringify(creators, null, 2)}</pre>
}

// const searchCreator: React.FC = () => {

//     return (
//         <>
//             <SearchBox type='creator'/>
//             <Table type='creator'/>
//         </>
//     );
// }

// export default searchCreator;