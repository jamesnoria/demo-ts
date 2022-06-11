import express from "express";
import morgan from "morgan";

// Routes
import indexRoutes from './routes'
import taskroutes from './routes/tasks'

class Application {
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middleware();
    this.routes();
  }

  settings() {
    this.app.set('port', 3000);
  }

  middleware() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use('/tasks', taskroutes);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log("Server running...");
    });
  }
}

export default Application;
