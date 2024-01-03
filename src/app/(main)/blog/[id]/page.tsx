import { PageParamId } from "@/types/params";

export default function BlogViewPageById({params} : PageParamId){
    let id = params.id

    return (
        <section>
            BLOG VIWE BY ID {id}
        </section>
    )
}