/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rawListeners } from "process";
import { NOMEM } from "dns";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
	class Aluno{
		nome : string = '';
		nota : number = 0;
	}
app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	const readline = require('readline-sync')

	const qntdAluno = readline.question('Quantidade de Alunos?\n')
	
	let i = 0;
	let listaDeAlunos: Aluno[] = [];

	for(i= 0; i < qntdAluno; i++){
		const aluno = new Aluno();
		aluno.nome = readline.question('Nome do Aluno?\n');
		aluno.nota = readline.question('Nota do Aluno?\n');
		listaDeAlunos.push(aluno);
		console.log(listaDeAlunos)
	} 
	let alunoMaiorNota: Aluno = new Aluno ;

	listaDeAlunos.forEach(function(aluno){
		if(typeof alunoMaiorNota == 'undefined'){
		alunoMaiorNota= aluno;
		}
		if(aluno.nota > alunoMaiorNota.nota){
			alunoMaiorNota= aluno;

		}		
	})
	console.log('O Aluno com a maior nota e:',alunoMaiorNota)
	
})