__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 312,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 312,
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
        "end": 312,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 34,
            "end": 310,
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
                "end": 143,
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
                    "start": 131,
                    "end": 143,
                    "argument": {
                      "type": "Literal",
                      "start": 138,
                      "end": 142,
                      "value": "Hi",
                      "raw": "\"Hi\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 152,
                "end": 159,
                "test": {
                  "type": "Literal",
                  "start": 157,
                  "end": 158,
                  "value": 3,
                  "raw": "3"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 177,
                "end": 223,
                "test": {
                  "type": "Literal",
                  "start": 182,
                  "end": 183,
                  "value": 4,
                  "raw": "4"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 208,
                    "end": 223,
                    "argument": {
                      "type": "Literal",
                      "start": 215,
                      "end": 222,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 232,
                "end": 239,
                "test": {
                  "type": "Literal",
                  "start": 237,
                  "end": 238,
                  "value": 5,
                  "raw": "5"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 256,
                "end": 304,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 289,
                    "end": 304,
                    "argument": {
                      "type": "Literal",
                      "start": 296,
                      "end": 303,
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
