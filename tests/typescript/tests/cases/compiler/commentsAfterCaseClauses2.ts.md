__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 421,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "decorators": [],
        "name": "getSecurity",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 26,
          "decorators": [],
          "name": "level",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 421,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 34,
            "end": 363,
            "discriminant": {
              "type": "Identifier",
              "start": 41,
              "end": 46,
              "decorators": [],
              "name": "level",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 57,
                "end": 64,
                "test": {
                  "type": "Literal",
                  "start": 62,
                  "end": 63,
                  "value": 0,
                  "raw": "0"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 81,
                "end": 88,
                "test": {
                  "type": "Literal",
                  "start": 86,
                  "end": 87,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 104,
                "end": 175,
                "test": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 163,
                    "end": 175,
                    "argument": {
                      "type": "Literal",
                      "start": 170,
                      "end": 174,
                      "value": "Hi",
                      "raw": "\"Hi\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 184,
                "end": 191,
                "test": {
                  "type": "Literal",
                  "start": 189,
                  "end": 190,
                  "value": 3,
                  "raw": "3"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 209,
                "end": 252,
                "test": {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "value": 4,
                  "raw": "4"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 237,
                    "end": 252,
                    "argument": {
                      "type": "Literal",
                      "start": 244,
                      "end": 251,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 261,
                "end": 268,
                "test": {
                  "type": "Literal",
                  "start": 266,
                  "end": 267,
                  "value": 5,
                  "raw": "5"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 285,
                "end": 332,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 317,
                    "end": 332,
                    "argument": {
                      "type": "Literal",
                      "start": 324,
                      "end": 331,
                      "value": "world",
                      "raw": "\"world\""
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
