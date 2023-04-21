import express, {Express} from "express";
import logger from "morgan";
import {personRouters} from "./routes/personRouters";
import FirebaseAuthService from "./auth/FirebaseAuthService";

FirebaseAuthService.initializeFirebase();

const app: Express = express();

const PORT = 3000;

/**
 * Express middleware.
 */
// parses incoming requests with JSON payloads
app.use(express.json());

// Logger middleware
app.use(logger('dev'));

app.use(FirebaseAuthService.verifyFirebaseIdToken);

// Add this after the middleware part
app.use(personRouters);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export default app;