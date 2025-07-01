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
                  "start": 87,
                  "end": 88
                },
                "consequent": [],
                "start": 82,
                "end": 89
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 112,
                  "end": 113
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "Hi",
                      "raw": "\"Hi\"",
                      "start": 174,
                      "end": 178
                    },
                    "start": 167,
                    "end": 179
                  }
                ],
                "start": 107,
                "end": 179
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 193,
                  "end": 194
                },
                "consequent": [],
                "start": 188,
                "end": 195
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 219,
                  "end": 220
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 250,
                      "end": 257
                    },
                    "start": 243,
                    "end": 258
                  }
                ],
                "start": 214,
                "end": 258
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 272,
                  "end": 273
                },
                "consequent": [],
                "start": 267,
                "end": 274
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
                      "start": 329,
                      "end": 336
                    },
                    "start": 322,
                    "end": 337
                  }
                ],
                "start": 292,
                "end": 337
              }
            ],
            "start": 34,
            "end": 343
          }
        ],
        "start": 28,
        "end": 350
      },
      "expression": false,
      "start": 0,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 350
}
```
