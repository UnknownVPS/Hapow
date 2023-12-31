import { config } from 'dotenv'; 
import { createApp } from './utils/createApp';
config();
import { connectDb } from './database'

const PORT = process.env.PORT || 3001;
const ENV = process.env.ENVIRONMENT || 'PRODUCTION';
async function main() {
    console.log(`Running in ${ENV} mode.`)
    try {
        await connectDb();
        const app = createApp();
        app.listen(PORT, () => console.log(`Running on Port ${process.env.PORT}`));
    } catch (err) {
        console.log('An error occured!: '+ err)
    }
}

main()
