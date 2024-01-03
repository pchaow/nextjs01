import { PageParamId } from "@/types/params";

export default function BlogViewById({params} : PageParamId){
    let id = params.id;

    return (
        <div>
            <h1>BLOG ID = {id}</h1>
        </div>
    )
}