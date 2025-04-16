__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 351,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "getSecurity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 27,
          "name": "level",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 351,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 35,
            "end": 344,
            "discriminant": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "name": "level",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": 0,
                  "raw": "0"
                }
              },
              {
                "type": "SwitchCase",
                "start": 83,
                "end": 90,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 88,
                  "end": 89,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 108,
                "end": 180,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 168,
                    "end": 180,
                    "argument": {
                      "type": "Literal",
                      "start": 175,
                      "end": 179,
                      "value": "Hi",
                      "raw": "\"Hi\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 113,
                  "end": 114,
                  "value": 2,
                  "raw": "2"
                }
              },
              {
                "type": "SwitchCase",
                "start": 189,
                "end": 196,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 194,
                  "end": 195,
                  "value": 3,
                  "raw": "3"
                }
              },
              {
                "type": "SwitchCase",
                "start": 215,
                "end": 259,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 244,
                    "end": 259,
                    "argument": {
                      "type": "Literal",
                      "start": 251,
                      "end": 258,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 220,
                  "end": 221,
                  "value": 4,
                  "raw": "4"
                }
              },
              {
                "type": "SwitchCase",
                "start": 268,
                "end": 275,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 273,
                  "end": 274,
                  "value": 5,
                  "raw": "5"
                }
              },
              {
                "type": "SwitchCase",
                "start": 293,
                "end": 338,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 323,
                    "end": 338,
                    "argument": {
                      "type": "Literal",
                      "start": 330,
                      "end": 337,
                      "value": "world",
                      "raw": "\"world\""
                    }
                  }
                ],
                "test": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
