import React from "react";
import { Dialogflow_V2 } from "react-native-dialogflow";


Dialogflow_V2.setConfiguration(
    "dialogflow-lftjkn@pickytalk.iam.gserviceaccount.com",
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCv8bWpu2LHxzXe\nE/PGU0LujZhuyQwzyF2UJykQZERSnYchsMDbw38TKs5ferBBLxQryRiXhEShM9+u\n/cGBhCj9KpRSukiKOmXluWTnIEfwpAbYr1P3bqWmLgSg6tCaHu7KEQiuBCcErOiy\n1/HvgJ6t8xGEvA5Fsex7t/l5llM0W0hwwObqlnxLIgg7kk0qJBBwENXf2hxCY9i7\n1hoMGQlrSrS/HS+84yIo8sI+RQd3zJkdQTpwMqd9XWoIo4ECrWGNdCFhBFpiPns3\nxhVSSoIBz7mQMe+hA5Vr3Y2Gpa2UwU3QVLx0DGqsIQB/yK3DLRICCxO9XUN2QcSf\nzg9OzlihAgMBAAECggEADN405vWKsMl77JfxT9N+Goa7m8/+IaQUCAZh2qONWwIk\nxHeHcMCYa3/0I7KMRTAwHaWxs+nbanN/TBlIt57BWrFsXgKRf0lByO6UF9Kvau+s\nL9k0NG1gwHSEJ9AUsqOe26N+9YSIkAR6E753IN5Q0gXBhb+KnFlPePBIgYvXiQV2\n7sr86+xoyKvohoifilG8A6bdevNAzXv/tdHcznClEiMsQgRqsCA0H0P3VgcF38m+\nBkSnLJEoP+F79dp6kLdgIUeYEKR5/0JoNlIvCeF6+W442bqgPeVMP+dRQr9Aaz35\nljfNkJleaJaaTurNb+/tkAoV+gvDb2z1SBL/Cnw3OQKBgQDnzC+5XXG7mPd9o6aR\ni4LBLvdwIhAHJxcJVaD4ojcG8xvoie9iH4wbeE1ZJAADMFzfhiPW8VtZKepNgzvu\nyiruZcvBR23IeJjKp9eZAX4Eh3yOCKVM+le0ll4tXDNOhEB8wY/+SZjC6P3YO9jD\nXbrFEUl/uQun1tJN024uUNSTVQKBgQDCUJgQsDT6ZD2Uh9q+qHy98T/vI07hVxx/\n+K3I0Wkd8UH6LJRfsiPIztpzFORFWcR1xMwKVadT0zpdEOwH3wQ1ClnIbCptJUHX\np5RmgNt4ZlkjCj5LVaEk5Ll8M8ipwf9BMHLy91n5UhY/JC3sOeFrMteiqWvHjQGH\nEZQG56MIHQKBgQDPrtvHqpi/a7O7h0gzuZsCubELcAmKTxTN0UHz42uIN4P22rd3\n5ColZqlux9mXAdsEjuxHpmKhRfPfVUj6j3rdtKlV2EjdyGelk7KRLYwaRMZtgAOT\nL+4rKFrjK2vw2n/pB4ibXpeXcygVeLGjgbRY4z9GR6bQz6IIBvr+Vn/QLQKBgQCm\n2O8JfVOwIHxj2hcwmJmrusfr/YRQpyzYkV4fTfiVdj/xoW+xj9N8LGmUYT70cXTo\nrpeI1C0+I+Q8XzhcNdl19bJMDtyLJW+YzdL2BPTuN+uX08bThu48MI04IXrOkL4t\nan15NHy0QRDLHLS13qk5E8nmaNUb3m6OXMCfASyS3QKBgQC+2Re3gDfpTI83MMOf\nhIDoUJl7Dv7kb9SsQPF8/i1nL/SlDR2z5phSexkUgeOnKMJ63sAM2OZv3d3XpwE4\nBHDEehEKxdt8shDBibbFFUqcD/kYdNNWmWz9a3vqr84IRJbzVabiUzEcAZPAi2Fh\nCv8XTlBgAZBgCjjzA2SF5OGUTQ==\n-----END PRIVATE KEY-----\n",
    Dialogflow_V2.LANG_KOREAN,
    'pickytalk'
);

function sendDialogFlow(message, onSuccess, onError) {
    Dialogflow_V2.requestQuery(message, onSuccess, onError);
}

export function getBotResponse(message) {
    return new Promise((resolve, reject) => {
        sendDialogFlow(message, (result) => {
            resolve(result);
        }, error => {
            reject(error);
        });
    });

}