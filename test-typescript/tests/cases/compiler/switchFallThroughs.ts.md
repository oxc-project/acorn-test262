switchFallThroughs.ts
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 256,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 33,
            "end": 254,
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
                "start": 74,
                "end": 81,
                "consequent": [],
                "test": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "raw": "1",
                  "value": 1
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 118,
                          "end": 121,
                          "raw": "'a'",
                          "value": "a"
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                      "optional": false
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 95,
                  "end": 96,
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
                          "raw": "'b'",
                          "value": "b"
                        }
                      }
                    ]
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "raw": "4",
                  "value": 4
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
                  "raw": "5",
                  "value": 5
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
                      "raw": "'c'",
                      "value": "c"
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 41,
              "end": 46,
              "decorators": [],
              "name": "index",
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
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "R1",
        "optional": false
      },
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
      ]
    }
  ],
  "sourceType": "script"
}
```
