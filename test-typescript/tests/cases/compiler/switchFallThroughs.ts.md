__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "R1",
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
          "start": 12,
          "end": 25,
          "name": "index",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 25,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 19,
              "end": 25
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "index",
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
                "start": 74,
                "end": 81,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 90,
                "end": 144,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 110,
                    "end": 122,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 114,
                        "end": 121,
                        "id": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 95,
                  "end": 96,
                  "value": 2,
                  "raw": "2"
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
                  "value": 3,
                  "raw": "3"
                }
              },
              {
                "type": "SwitchCase",
                "start": 169,
                "end": 212,
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
                ],
                "test": {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "value": 4,
                  "raw": "4"
                }
              },
              {
                "type": "SwitchCase",
                "start": 215,
                "end": 222,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 220,
                  "end": 221,
                  "value": 5,
                  "raw": "5"
                }
              },
              {
                "type": "SwitchCase",
                "start": 225,
                "end": 248,
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
