import {Request, Response, NextFunction} from "express";
import admin, {ServiceAccount} from "firebase-admin";
import serviceAccount from "./firebase-config.json";

namespace FirebaseAuthService {
    export const initializeFirebase = () => {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as ServiceAccount),
            databaseURL: 'https://fsse2212-project-max.firebaseio.com'
        });
    }

    export const verifyFirebaseIdToken = async (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).send('Missing or invalid authorization header');
        }

        const token = authHeader.split(' ')[1];
        if (token) {
            try {
                const decodedToken = await admin.auth().verifyIdToken(token);
                const firebaseUser = await admin.auth().getUser(decodedToken.uid);
                next();
            } catch (error) {
                console.log(error);
                return res.status(401).send('Invalid token');
            }
        } else {
            res.status(403).send('Unauthorized')
        }
    }
}

export default FirebaseAuthService;