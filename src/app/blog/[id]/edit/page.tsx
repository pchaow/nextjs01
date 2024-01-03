import { PageParamId } from "@/types/params";

export default function BlogEditById({params} : PageParamId){
    let id = params.id;

    return (
        <div>
            <h1>EDIT BLOG ID = {id}</h1>
        </div>
    )
} 