
import userRouter from './userRouter.js'
import roadMapRouter from './roadmapRouter.js';
import chatRouter from './chatRouter.js'

export default(app) => {

    app.use('/user',userRouter);
    app.use('/roadmap',roadMapRouter);
    app.use('/chat',chatRouter);
}
