
import mongoose from 'mongoose';

const dbUser = 'bd177795';
const dbPassword = 'aSIegqmvhdC2noM7';
const dbName = 'adocaoPet';

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@adocaopet.dfqhshi.mongodb.net/${dbName}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('Conectado ao MongoDB com sucesso');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error.message);
  }
};

connect();



export default connect