__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "R1",
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
          "start": 12,
          "end": 25,
          "decorators": [],
          "name": "index",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 25,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 19,
              "end": 25
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 256,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 33,
            "end": 254,
            "discriminant": {
              "type": "Identifier",
              "start": 41,
              "end": 46,
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 58,
                "end": 65,
                "test": {
                  "type": "Literal",
                  "start": 63,
                  "end": 64,
                  "value": 0,
                  "raw": "0"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 74,
                "end": 81,
                "test": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 90,
                "end": 144,
                "test": {
                  "type": "Literal",
                  "start": 95,
                  "end": 96,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 110,
                    "end": 122,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 114,
                        "end": 121,
                        "id": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 118,
                          "end": 121,
                          "value": "a",
                          "raw": "'a'"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 135,
                    "end": 144,
                    "argument": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 153,
                "end": 160,
                "test": {
                  "type": "Literal",
                  "start": 158,
                  "end": 159,
                  "value": 3,
                  "raw": "3"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 169,
                "end": 212,
                "test": {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "value": 4,
                  "raw": "4"
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "start": 177,
                    "end": 212,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 191,
                        "end": 202,
                        "argument": {
                          "type": "Literal",
                          "start": 198,
                          "end": 201,
                          "value": "b",
                          "raw": "'b'"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 215,
                "end": 222,
                "test": {
                  "type": "Literal",
                  "start": 220,
                  "end": 221,
                  "value": 5,
                  "raw": "5"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 225,
                "end": 248,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 237,
                    "end": 248,
                    "argument": {
                      "type": "Literal",
                      "start": 244,
                      "end": 247,
                      "value": "c",
                      "raw": "'c'"
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
