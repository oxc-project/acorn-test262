__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 350,
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
        "end": 350,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 34,
            "end": 343,
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
                "start": 82,
                "end": 89,
                "test": {
                  "type": "Literal",
                  "start": 87,
                  "end": 88,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 107,
                "end": 179,
                "test": {
                  "type": "Literal",
                  "start": 112,
                  "end": 113,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 167,
                    "end": 179,
                    "argument": {
                      "type": "Literal",
                      "start": 174,
                      "end": 178,
                      "value": "Hi",
                      "raw": "\"Hi\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 188,
                "end": 195,
                "test": {
                  "type": "Literal",
                  "start": 193,
                  "end": 194,
                  "value": 3,
                  "raw": "3"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 214,
                "end": 258,
                "test": {
                  "type": "Literal",
                  "start": 219,
                  "end": 220,
                  "value": 4,
                  "raw": "4"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 243,
                    "end": 258,
                    "argument": {
                      "type": "Literal",
                      "start": 250,
                      "end": 257,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 267,
                "end": 274,
                "test": {
                  "type": "Literal",
                  "start": 272,
                  "end": 273,
                  "value": 5,
                  "raw": "5"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 292,
                "end": 337,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 322,
                    "end": 337,
                    "argument": {
                      "type": "Literal",
                      "start": 329,
                      "end": 336,
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
