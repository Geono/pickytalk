import React from "react";
import {View, Text, Button} from 'react-native';
import { Dialogflow_V2 } from "react-native-dialogflow"

// {
// 	"type": "service_account",
// 	"project_id": "pickytalk",
// 	"private_key_id": "011936b0bca1e8f682c03ab9a29af20dc37c1ace",
// 	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIXR8SBNRcGvK+\nrV48J2Re2RN7aySkGHYFDv49Pii+LZhc7/EicEvPEu72i7E8s/m2bx0Ak/bKcFHP\nN24ZgJXd5A6DBKP4q73Hix3qQbXOM5x7o7IwijWK4Rm31lWGMT3HIXw2PKNKSwEm\n6fkTkZn37HV85qGfQdSv47UFnt3Iztg4klpK0oLXIFFJc3SmEAlzorF4zry5et6V\n16CX0+klIqUP4eEdnRJGIycewmcvleTQ+1Qb74FEEW4Bq9Qw/YIEP9RVPWwfSRG6\nApz0ilIb7tYkAnJoDnV8agHQarpwxmo4p5YjwMPFTWpEsO+9ooPZaTXUhqUMPE6k\nI7RAa7rFAgMBAAECggEAKJlR4+VNoHIncMKRXy/+MwfaXj46GPQJ6gF9O6yeNdbo\nUiCeZEOL4OQtvpBUs/+l4DUIk+bncWKr+Qh6yzkWZPVCiYLFtOwb0tSaFa8F50fm\n89iaESLYMZFmFC2ee8f7hB+BWz4TOkkTbS6otTHiGG316n6TDkGZFqDVu9NSjk8b\nhlrRB9AfJa1D3DneIks4iTro7s3XjfPuUEiFlbBpkMt6iY7LALd67O/4ZozQlzXA\nUT28g/NHzDBDutdZdi8ey0cvirSXMv9TCGFQCAK9FsXETod/6jBAtPwqXDVj+WEo\nOWYDm0mOAj75ZvvJRTZfdRCtkvY8D3Kr2eCaj9RpOwKBgQDpkyicHZMqZVYUlzwj\naQ6BU4+fPK9wzf36teG5k+Ig3JJ7j5WW1OF/WMrR5cf2Z1xUpM6Sd2JdhlsDc6hz\nrVa6dPPdlldoEssRyFYlUfto1i3xS6ri/cWbubXLoWfqlWK4o9C/Dfi+uT/pl2d4\nThhpM14Wkpxt0oSV/31oLu5i+wKBgQDbmbH4MN5l5QjZzRDSe8IU/78h5NsYJMDA\nq105eOc0HCpZdrXnEg+kTsSBAwP2Cih5DId7i4NrNtf4iyiWR40fA/7YqiwaKx1U\nm7xw0t0A+W9xjFy31lB3pq0rKL2oqPJKMXx+mBFFEB7l5V9IvqwWcAY7hB5hkNHx\nZ+MBFC3tPwKBgQDhln9iSC4ahETfHjG3AYBA57OO182Z5VmnCoM3+NwtYNsY+1Q+\nmNwxYlCA6Kx4Dtvd5E6epy8ZpOnCK7JGBuP8sXfWS52fpob6ZcLNyKBIYJN+uNYS\n5YY1IOe0A++ZYS43pf+2hof3rHNN6CzGxKZO9I2qv27VorzrIha8yJb0gQKBgFGZ\nKqgugHUcRc2ohTexBM0Iuty9TSwLfBQbmOhiJIcYcCQOGElkTKuhGSNXG4GxBJj2\nLuGZVZvhJR8Vll9A9w8vTOL1WK3gl2V4+OxzbeuOw/pNTaaB3CSZqn7/BHpHTMCE\n4t2nY8Nl2hVSxbUiJI+x0J8M2L0oMtqg35jnBqnBAoGAT/ihifqce0Zxq9T32OGB\nslyQRrlPAlH7O5d/2jLpO4pZcQQZw2kjRTNiX5EBJuH6vpx5Nvhk+lQMlfRQkYxu\nkBM66y1ge+nJvHEwJM+nf9b68kLzwHG5inkcjkF271yLl8HfJKldnak3dqAtQiq7\n3GoJPfZt6KU+LW5C3+Mu4I0=\n-----END PRIVATE KEY-----\n",
// 	"client_email": "dialogflow-lftjkn@pickytalk.iam.gserviceaccount.com",
// 	"client_id": "115458240025415057906",
// 	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
// 	"token_uri": "https://oauth2.googleapis.com/token",
// 	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
// 	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-lftjkn%40pickytalk.iam.gserviceaccount.com"
// }

Dialogflow_V2.setConfiguration(
	"dialogflow-lftjkn@pickytalk.iam.gserviceaccount.com",
	"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIXR8SBNRcGvK+\nrV48J2Re2RN7aySkGHYFDv49Pii+LZhc7/EicEvPEu72i7E8s/m2bx0Ak/bKcFHP\nN24ZgJXd5A6DBKP4q73Hix3qQbXOM5x7o7IwijWK4Rm31lWGMT3HIXw2PKNKSwEm\n6fkTkZn37HV85qGfQdSv47UFnt3Iztg4klpK0oLXIFFJc3SmEAlzorF4zry5et6V\n16CX0+klIqUP4eEdnRJGIycewmcvleTQ+1Qb74FEEW4Bq9Qw/YIEP9RVPWwfSRG6\nApz0ilIb7tYkAnJoDnV8agHQarpwxmo4p5YjwMPFTWpEsO+9ooPZaTXUhqUMPE6k\nI7RAa7rFAgMBAAECggEAKJlR4+VNoHIncMKRXy/+MwfaXj46GPQJ6gF9O6yeNdbo\nUiCeZEOL4OQtvpBUs/+l4DUIk+bncWKr+Qh6yzkWZPVCiYLFtOwb0tSaFa8F50fm\n89iaESLYMZFmFC2ee8f7hB+BWz4TOkkTbS6otTHiGG316n6TDkGZFqDVu9NSjk8b\nhlrRB9AfJa1D3DneIks4iTro7s3XjfPuUEiFlbBpkMt6iY7LALd67O/4ZozQlzXA\nUT28g/NHzDBDutdZdi8ey0cvirSXMv9TCGFQCAK9FsXETod/6jBAtPwqXDVj+WEo\nOWYDm0mOAj75ZvvJRTZfdRCtkvY8D3Kr2eCaj9RpOwKBgQDpkyicHZMqZVYUlzwj\naQ6BU4+fPK9wzf36teG5k+Ig3JJ7j5WW1OF/WMrR5cf2Z1xUpM6Sd2JdhlsDc6hz\nrVa6dPPdlldoEssRyFYlUfto1i3xS6ri/cWbubXLoWfqlWK4o9C/Dfi+uT/pl2d4\nThhpM14Wkpxt0oSV/31oLu5i+wKBgQDbmbH4MN5l5QjZzRDSe8IU/78h5NsYJMDA\nq105eOc0HCpZdrXnEg+kTsSBAwP2Cih5DId7i4NrNtf4iyiWR40fA/7YqiwaKx1U\nm7xw0t0A+W9xjFy31lB3pq0rKL2oqPJKMXx+mBFFEB7l5V9IvqwWcAY7hB5hkNHx\nZ+MBFC3tPwKBgQDhln9iSC4ahETfHjG3AYBA57OO182Z5VmnCoM3+NwtYNsY+1Q+\nmNwxYlCA6Kx4Dtvd5E6epy8ZpOnCK7JGBuP8sXfWS52fpob6ZcLNyKBIYJN+uNYS\n5YY1IOe0A++ZYS43pf+2hof3rHNN6CzGxKZO9I2qv27VorzrIha8yJb0gQKBgFGZ\nKqgugHUcRc2ohTexBM0Iuty9TSwLfBQbmOhiJIcYcCQOGElkTKuhGSNXG4GxBJj2\nLuGZVZvhJR8Vll9A9w8vTOL1WK3gl2V4+OxzbeuOw/pNTaaB3CSZqn7/BHpHTMCE\n4t2nY8Nl2hVSxbUiJI+x0J8M2L0oMtqg35jnBqnBAoGAT/ihifqce0Zxq9T32OGB\nslyQRrlPAlH7O5d/2jLpO4pZcQQZw2kjRTNiX5EBJuH6vpx5Nvhk+lQMlfRQkYxu\nkBM66y1ge+nJvHEwJM+nf9b68kLzwHG5inkcjkF271yLl8HfJKldnak3dqAtQiq7\n3GoJPfZt6KU+LW5C3+Mu4I0=\n-----END PRIVATE KEY-----\n",
	Dialogflow_V2.LANG_KOREAN,
	"pickytalk"
);

export default sendChat(senderName, receiverName, message, isAutoGen, messageType) {
	var res = "";
	var err = "";
	Dialogflow_V2.requestQuery(message, result=>{ res = result; }, error=>{ err = error; });
	Dialogflow_V2.requestEvent()
	if(res === "")
		return err;
	return res;
}

// 15:50:42: Object {
// 	15:50:42:   "queryResult": Object {
// 		15:50:42:     "action": "input.unknown",
// 			15:50:42:     "allRequiredParamsPresent": true,
// 			15:50:42:     "fulfillmentMessages": Array [
// 			15:50:42:       Object {
// 			15:50:42:         "text": Object {
// 				15:50:42:           "text": Array [
// 					15:50:42:             "제가 제대로 이해하지 못한것 같아요. 죄송해요.",
// 					15:50:42:           ],
// 				15:50:42:         },
// 			15:50:42:       },
// 		15:50:42:     ],
// 		15:50:42:     "fulfillmentText": "죄송해요. 다시 들려 주실래요?",
// 			15:50:42:     "intent": Object {
// 			15:50:42:       "displayName": "Default Fallback Intent",
// 				15:50:42:       "isFallback": true,
// 				15:50:42:       "name": "projects/pickytalk/agent/intents/b9375097-e599-42ea-92b
// 			0-95154b1c1347",
// 			15:50:42:     },
// 		15:50:42:     "intentDetectionConfidence": 1,
// 			15:50:42:     "languageCode": "ko",
// 			15:50:42:     "parameters": Object {},
// 		15:50:42:     "queryText": "Some text for your Dialogflow agent",
// 			15:50:42:   },
// 	15:50:42:   "responseId": "371b1be1-2a7b-4d67-bb08-0ca3a416e7a5",
// 		15:50:42: }

