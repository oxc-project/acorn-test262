commentsAfterCaseClauses1.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 313,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 313,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 313,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 35,
            "end": 311,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 58,
                "end": 65,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 63,
                  "end": 64,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "SwitchCase",
                "start": 82,
                "end": 89,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 87,
                  "end": 88,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SwitchCase",
                "start": 105,
                "end": 144,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 132,
                    "end": 144,
                    "argument": {
                      "type": "Literal",
                      "start": 139,
                      "end": 143,
                      "raw": "\"Hi\"",
                      "value": "Hi"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 110,
                  "end": 111,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "SwitchCase",
                "start": 153,
                "end": 160,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 158,
                  "end": 159,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "SwitchCase",
                "start": 178,
                "end": 224,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 209,
                    "end": 224,
                    "argument": {
                      "type": "Literal",
                      "start": 216,
                      "end": 223,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 183,
                  "end": 184,
                  "raw": "4",
                  "value": 4
                }
              },
              {
                "type": "SwitchCase",
                "start": 233,
                "end": 240,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 238,
                  "end": 239,
                  "raw": "5",
                  "value": 5
                }
              },
              {
                "type": "SwitchCase",
                "start": 257,
                "end": 305,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 305,
                    "argument": {
                      "type": "Literal",
                      "start": 297,
                      "end": 304,
                      "raw": "\"world\"",
                      "value": "world"
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "decorators": [],
              "name": "level",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "getSecurity",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 27,
          "decorators": [],
          "name": "level",
          "optional": false
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
