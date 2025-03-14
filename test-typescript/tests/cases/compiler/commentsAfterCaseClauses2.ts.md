commentsAfterCaseClauses2.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 422,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 422,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 422,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 35,
            "end": 364,
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
                "end": 176,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 164,
                    "end": 176,
                    "argument": {
                      "type": "Literal",
                      "start": 171,
                      "end": 175,
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
                "start": 185,
                "end": 192,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 190,
                  "end": 191,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "SwitchCase",
                "start": 210,
                "end": 253,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 238,
                    "end": 253,
                    "argument": {
                      "type": "Literal",
                      "start": 245,
                      "end": 252,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 215,
                  "end": 216,
                  "raw": "4",
                  "value": 4
                }
              },
              {
                "type": "SwitchCase",
                "start": 262,
                "end": 269,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 267,
                  "end": 268,
                  "raw": "5",
                  "value": 5
                }
              },
              {
                "type": "SwitchCase",
                "start": 286,
                "end": 333,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 318,
                    "end": 333,
                    "argument": {
                      "type": "Literal",
                      "start": 325,
                      "end": 332,
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
