import React from "react";
import { Dialogflow_V2 } from "react-native-dialogflow";

//
// {
// 	"type": "service_account",
// 	"project_id": "pickytalk",
// 	"private_key_id": "e320ece964f28433f0032d2abdbb13eecd1ee93a",
// 	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2TNWrOVB7WEAs\noE5G4CVnyalwabIpOkYFrJGKlxWy11773gcoluKMjW+uVQ+Sq2FcA8K38BOu4ZtV\npe2yRF6PnNNg09S+r7FFGqTSy6EVC/oeDcx+op3DeGGxry3JQCCXhttdftIvuaAz\nSv3kxdfBo3stgnoh2BDZFezE/E5Rnxdzc8gdloHrW3+pqIuM5AVH0wxK0mC6tmis\nUlak1bpliczwIi2Rul+/qtOyFEodrcXjr4+RLonQl2sptdzrXdq2ORpAZfP9SBFE\nIXF7RL3dGJmvD0c9h7PvA2L9myjeh9ekJXGFCU0kcDI1+RZpcGRRReYFTfef3LyG\nDfEuAr5hAgMBAAECggEAAN+/WQEu93kXIqz4lG/+lz/WZADKZGv1pLvncpAySo+W\n3R3bBS5BrbiVCoi4yMRb/23QWnh9pwBI0elCyYYOJCxgGjtdw7XHg5bYJ4oSI+3m\nerZ9zorJ90NTHZUtos9qcJY1DvP8vug/YkDnv3fAMXBEFuC5+Zelz11Na62Ffxrs\n8QHvyWOy/45osUJGBzsMDHOacMb4/daFuiXvhSpMqZGPLVVOinGHZV4z4YwsMDQU\nNHjescght+OI+Drjj+3CGQMxF5FtFMkAO9SqDS+OQXGksga7x0LlKKhG6tai/50H\nyhBQPAl9VOu1htxt9/djygjPn4C8owDkInEL6KWmaQKBgQD6CFEWEvhHWbDemh4I\ntdKiJ7UAItssmc6JMDoLyQQk44Je4ye9mftPvjNCoG9wWtEwSjg73hDg2+fGxpqo\n4V0Rp0awtcC+Sm2IdqiXhW+PR/DFyG+7cjampdaSuI+KQlsuG0qMAkbRKN+twlYZ\n/wwylpaXAhkWltwsq3HCV7y0eQKBgQC6pq1nZXCXt5gG3nr3ey2KPAAgJZeXaQiL\nqiGXvG2cz/ZS4NNL4Y49nRrj3giZxNEMgsMQfs7msKbuWNVfTSDYLqfp49hiGZSe\n3ruWOI35LuKqG9fjhPimLX30q2NFDkiCwefKk4Rdb1O5y1v4ZIgsoYQIYhGhHpH7\nxjrOkrzPKQKBgQCdvZV6ealNSlZ9eXmtQRiL2MUmOtdPghF9F4HnYYBNzYK4XlL6\nGSUln/cy94iWt5T2BD0J+AVp9xJ4o197YAKZWpEMdv4Mj2QfDc07GqHRIS/Td6qV\n9W5pIIMIuYtFTKu9oNYdEmqfFkxXkR1E9VU6rSqARoCRcceiHt98HmIc8QKBgEwe\ng2NCbEuDVR2gB9f7xRO16nsxuYPHEvQaWv7Nmoo0CYm9JI6ymtanxnqdZzaGnJaU\nkUad4HUWH83eLo5iHv3q8RGimPFQ61prDWdzAvtXUpr7Je0kol7q+I4agy57Z7jj\nqUrlJDsSlruToptHLH2/FOByViw2EmTyb7MlBpkZAoGAFk7OWsSaMeI0YS2A8hM/\nxAvl7MCukExgV+SZMW2WwxrqG917r8WcLxvPJjogi8Dr87kXNNulKKGfipiT5EDo\n72Egmyr7HflZW/BfYE0+lMceMRcwSq3MOqe58rcC/GBZjo5SPYUsnWjPIS+VeDlu\n84eMPDqDhNa1JgROz8H+wgc=\n-----END PRIVATE KEY-----\n",
// 	"client_email": "client-access@pickytalk.iam.gserviceaccount.com",
// 	"client_id": "108120536930979504286",
// 	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
// 	"token_uri": "https://oauth2.googleapis.com/token",
// 	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
// 	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/client-access%40pickytalk.iam.gserviceaccount.com"
// }

// {
// 	"type": "service_account",
// 	"project_id": "pickytalk",
// 	"private_key_id": "ea1de110a1d2358f22f5aea0b2582a473de45b9e",
// 	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCv8bWpu2LHxzXe\nE/PGU0LujZhuyQwzyF2UJykQZERSnYchsMDbw38TKs5ferBBLxQryRiXhEShM9+u\n/cGBhCj9KpRSukiKOmXluWTnIEfwpAbYr1P3bqWmLgSg6tCaHu7KEQiuBCcErOiy\n1/HvgJ6t8xGEvA5Fsex7t/l5llM0W0hwwObqlnxLIgg7kk0qJBBwENXf2hxCY9i7\n1hoMGQlrSrS/HS+84yIo8sI+RQd3zJkdQTpwMqd9XWoIo4ECrWGNdCFhBFpiPns3\nxhVSSoIBz7mQMe+hA5Vr3Y2Gpa2UwU3QVLx0DGqsIQB/yK3DLRICCxO9XUN2QcSf\nzg9OzlihAgMBAAECggEADN405vWKsMl77JfxT9N+Goa7m8/+IaQUCAZh2qONWwIk\nxHeHcMCYa3/0I7KMRTAwHaWxs+nbanN/TBlIt57BWrFsXgKRf0lByO6UF9Kvau+s\nL9k0NG1gwHSEJ9AUsqOe26N+9YSIkAR6E753IN5Q0gXBhb+KnFlPePBIgYvXiQV2\n7sr86+xoyKvohoifilG8A6bdevNAzXv/tdHcznClEiMsQgRqsCA0H0P3VgcF38m+\nBkSnLJEoP+F79dp6kLdgIUeYEKR5/0JoNlIvCeF6+W442bqgPeVMP+dRQr9Aaz35\nljfNkJleaJaaTurNb+/tkAoV+gvDb2z1SBL/Cnw3OQKBgQDnzC+5XXG7mPd9o6aR\ni4LBLvdwIhAHJxcJVaD4ojcG8xvoie9iH4wbeE1ZJAADMFzfhiPW8VtZKepNgzvu\nyiruZcvBR23IeJjKp9eZAX4Eh3yOCKVM+le0ll4tXDNOhEB8wY/+SZjC6P3YO9jD\nXbrFEUl/uQun1tJN024uUNSTVQKBgQDCUJgQsDT6ZD2Uh9q+qHy98T/vI07hVxx/\n+K3I0Wkd8UH6LJRfsiPIztpzFORFWcR1xMwKVadT0zpdEOwH3wQ1ClnIbCptJUHX\np5RmgNt4ZlkjCj5LVaEk5Ll8M8ipwf9BMHLy91n5UhY/JC3sOeFrMteiqWvHjQGH\nEZQG56MIHQKBgQDPrtvHqpi/a7O7h0gzuZsCubELcAmKTxTN0UHz42uIN4P22rd3\n5ColZqlux9mXAdsEjuxHpmKhRfPfVUj6j3rdtKlV2EjdyGelk7KRLYwaRMZtgAOT\nL+4rKFrjK2vw2n/pB4ibXpeXcygVeLGjgbRY4z9GR6bQz6IIBvr+Vn/QLQKBgQCm\n2O8JfVOwIHxj2hcwmJmrusfr/YRQpyzYkV4fTfiVdj/xoW+xj9N8LGmUYT70cXTo\nrpeI1C0+I+Q8XzhcNdl19bJMDtyLJW+YzdL2BPTuN+uX08bThu48MI04IXrOkL4t\nan15NHy0QRDLHLS13qk5E8nmaNUb3m6OXMCfASyS3QKBgQC+2Re3gDfpTI83MMOf\nhIDoUJl7Dv7kb9SsQPF8/i1nL/SlDR2z5phSexkUgeOnKMJ63sAM2OZv3d3XpwE4\nBHDEehEKxdt8shDBibbFFUqcD/kYdNNWmWz9a3vqr84IRJbzVabiUzEcAZPAi2Fh\nCv8XTlBgAZBgCjjzA2SF5OGUTQ==\n-----END PRIVATE KEY-----\n",
// 	"client_email": "dialogflow-lftjkn@pickytalk.iam.gserviceaccount.com",
// 	"client_id": "115458240025415057906",
// 	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
// 	"token_uri": "https://oauth2.googleapis.com/token",
// 	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
// 	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-lftjkn%40pickytalk.iam.gserviceaccount.com"
// }



Dialogflow_V2.setConfiguration(
	"dialogflow-lftjkn@pickytalk.iam.gserviceaccount.com",
	"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCv8bWpu2LHxzXe\nE/PGU0LujZhuyQwzyF2UJykQZERSnYchsMDbw38TKs5ferBBLxQryRiXhEShM9+u\n/cGBhCj9KpRSukiKOmXluWTnIEfwpAbYr1P3bqWmLgSg6tCaHu7KEQiuBCcErOiy\n1/HvgJ6t8xGEvA5Fsex7t/l5llM0W0hwwObqlnxLIgg7kk0qJBBwENXf2hxCY9i7\n1hoMGQlrSrS/HS+84yIo8sI+RQd3zJkdQTpwMqd9XWoIo4ECrWGNdCFhBFpiPns3\nxhVSSoIBz7mQMe+hA5Vr3Y2Gpa2UwU3QVLx0DGqsIQB/yK3DLRICCxO9XUN2QcSf\nzg9OzlihAgMBAAECggEADN405vWKsMl77JfxT9N+Goa7m8/+IaQUCAZh2qONWwIk\nxHeHcMCYa3/0I7KMRTAwHaWxs+nbanN/TBlIt57BWrFsXgKRf0lByO6UF9Kvau+s\nL9k0NG1gwHSEJ9AUsqOe26N+9YSIkAR6E753IN5Q0gXBhb+KnFlPePBIgYvXiQV2\n7sr86+xoyKvohoifilG8A6bdevNAzXv/tdHcznClEiMsQgRqsCA0H0P3VgcF38m+\nBkSnLJEoP+F79dp6kLdgIUeYEKR5/0JoNlIvCeF6+W442bqgPeVMP+dRQr9Aaz35\nljfNkJleaJaaTurNb+/tkAoV+gvDb2z1SBL/Cnw3OQKBgQDnzC+5XXG7mPd9o6aR\ni4LBLvdwIhAHJxcJVaD4ojcG8xvoie9iH4wbeE1ZJAADMFzfhiPW8VtZKepNgzvu\nyiruZcvBR23IeJjKp9eZAX4Eh3yOCKVM+le0ll4tXDNOhEB8wY/+SZjC6P3YO9jD\nXbrFEUl/uQun1tJN024uUNSTVQKBgQDCUJgQsDT6ZD2Uh9q+qHy98T/vI07hVxx/\n+K3I0Wkd8UH6LJRfsiPIztpzFORFWcR1xMwKVadT0zpdEOwH3wQ1ClnIbCptJUHX\np5RmgNt4ZlkjCj5LVaEk5Ll8M8ipwf9BMHLy91n5UhY/JC3sOeFrMteiqWvHjQGH\nEZQG56MIHQKBgQDPrtvHqpi/a7O7h0gzuZsCubELcAmKTxTN0UHz42uIN4P22rd3\n5ColZqlux9mXAdsEjuxHpmKhRfPfVUj6j3rdtKlV2EjdyGelk7KRLYwaRMZtgAOT\nL+4rKFrjK2vw2n/pB4ibXpeXcygVeLGjgbRY4z9GR6bQz6IIBvr+Vn/QLQKBgQCm\n2O8JfVOwIHxj2hcwmJmrusfr/YRQpyzYkV4fTfiVdj/xoW+xj9N8LGmUYT70cXTo\nrpeI1C0+I+Q8XzhcNdl19bJMDtyLJW+YzdL2BPTuN+uX08bThu48MI04IXrOkL4t\nan15NHy0QRDLHLS13qk5E8nmaNUb3m6OXMCfASyS3QKBgQC+2Re3gDfpTI83MMOf\nhIDoUJl7Dv7kb9SsQPF8/i1nL/SlDR2z5phSexkUgeOnKMJ63sAM2OZv3d3XpwE4\nBHDEehEKxdt8shDBibbFFUqcD/kYdNNWmWz9a3vqr84IRJbzVabiUzEcAZPAi2Fh\nCv8XTlBgAZBgCjjzA2SF5OGUTQ==\n-----END PRIVATE KEY-----\n",
	Dialogflow_V2.LANG_KOREAN,
	'pickytalk'
);

function suggestDeal() {

}

function onSucessDialogFlow(result) {
	let res = result;
	console.log('SUCESS DialogFlow: ', result);

	let intentName = result.queryResult.intent.displayName;
	console.log('Intent Name: ', intentName);
	// 딜 제안일 시 처리를 위하여 추가
	switch(intentName) {
		case '':
			suggestDeal();
			break;
		default:
			res = result.queryResult.fulfillmentMessages;
			break;
	}

	console.log('fulfillmentMessages : ', res);
	return res;
}

function onErrorDialogFlow(error) {
	let res = error;
	console.log('ERROR DialogFlow: ' + error);
	return res;
}

function sendDialogFlow(message, onSuccess, onError) {
	Dialogflow_V2.requestQuery(message, onSuccess, onError);
}

export default function getBotResponse(message, onUserSuccess, onUserError) {
	console.log('message : ' + message);

	// sendDialogFlow(message, onSucessDialogFlow, onErrorDialogFlow);
	sendDialogFlow(message, result => {
		let res = onSucessDialogFlow( result );
		onUserSuccess(res);
	}, error => {
		let err = onErrorDialogFlow( error );
		onUserError(err);
	});

	return true;
}