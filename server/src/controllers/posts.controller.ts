
// export class PostController {
//   // Post service
//   constructor() {

//   }

//   public getAll = async (req, res) => {
//     try {
//     } catch (error) {
//       next(error);
//     }
//   };

//   public getById = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const postId = Number(req.params.id);

//       const foundPost: Post = await this.postService.findByPostId(postId);

//       res.status(200).json({ data: foundPost, message: 'findOne' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public create = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const postData: CreatePostDto = req.body;

//       const createdPost: Post = await this.postService.createPost(postData);

//       res.status(201).json({ data: createdPost, message: 'created' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public update = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const postId = Number(req.params.id);
//       const postData: UpdatePostDto = req.body;

//       const updatedPost: Post = await this.postService.updatePost(postId, postData);

//       res.status(200).json({ data: updatedPost, message: 'updated' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public delete = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const postId = Number(req.params.id);

//       const deletedPost = await this.postService.deletePost(postId);

//       res.status(200).json({ data: deletedPost, message: 'deleted' });
//     } catch (error) {
//       next(error);
//     }
//   };
// }
