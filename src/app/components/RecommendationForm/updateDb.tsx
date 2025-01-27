import { CreatorProps } from "@/app/types/searchResults";
import { createClient } from "@/app/utils/apiServer";

export default async function addRecommendationQuery(data: CreatorProps) {

    const supabase = await createClient();
    const { error } = await supabase
    .from("creators")
    .insert(data)

  
    return (
      <>
      {error && 
      <p>
        mama mia a big big big error
        </p>}
        <div>
            <span> lilililil lad</span>
        </div>
      </>
    )
  }