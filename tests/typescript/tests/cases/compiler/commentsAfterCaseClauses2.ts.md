__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSecurity",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "level",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 26
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "level",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 46
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 62,
                  "end": 63
                },
                "consequent": [],
                "start": 57,
                "end": 64
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 86,
                  "end": 87
                },
                "consequent": [],
                "start": 81,
                "end": 88
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 109,
                  "end": 110
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "Hi",
                      "raw": "\"Hi\"",
                      "start": 170,
                      "end": 174
                    },
                    "start": 163,
                    "end": 175
                  }
                ],
                "start": 104,
                "end": 175
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 189,
                  "end": 190
                },
                "consequent": [],
                "start": 184,
                "end": 191
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 214,
                  "end": 215
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 244,
                      "end": 251
                    },
                    "start": 237,
                    "end": 252
                  }
                ],
                "start": 209,
                "end": 252
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 266,
                  "end": 267
                },
                "consequent": [],
                "start": 261,
                "end": 268
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 324,
                      "end": 331
                    },
                    "start": 317,
                    "end": 332
                  }
                ],
                "start": 285,
                "end": 332
              }
            ],
            "start": 34,
            "end": 363
          }
        ],
        "start": 28,
        "end": 421
      },
      "expression": false,
      "start": 0,
      "end": 421
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 421
}
```
