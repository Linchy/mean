import { PipeTransform, Pipe } from '@angular/core';
import { IPost } from '../post.interface';
@Pipe({
    name: 'myPostsFilter'
})
export class PostsFilterPipe implements PipeTransform {
    public transform(value: IPost[], filtetBy: string): IPost[] {
         // search in each product if is the same
        filtetBy = filtetBy ? filtetBy.toLocaleLowerCase() : null;
        return filtetBy ?
            value.filter((post: IPost) => post.title.toLocaleLowerCase().indexOf(filtetBy) !== -1)
            : value;
    }
}
