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
        "name": "R1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "index",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 19,
              "end": 25
            },
            "start": 17,
            "end": 25
          },
          "start": 12,
          "end": 25
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
              "name": "index",
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
                  "start": 63,
                  "end": 64
                },
                "consequent": [],
                "start": 58,
                "end": 65
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 79,
                  "end": 80
                },
                "consequent": [],
                "start": 74,
                "end": 81
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 95,
                  "end": 96
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 114,
                          "end": 115
                        },
                        "init": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 118,
                          "end": 121
                        },
                        "definite": false,
                        "start": 114,
                        "end": 121
                      }
                    ],
                    "declare": false,
                    "start": 110,
                    "end": 122
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    },
                    "start": 135,
                    "end": 144
                  }
                ],
                "start": 90,
                "end": 144
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 158,
                  "end": 159
                },
                "consequent": [],
                "start": 153,
                "end": 160
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 174,
                  "end": 175
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 198,
                          "end": 201
                        },
                        "start": 191,
                        "end": 202
                      }
                    ],
                    "start": 177,
                    "end": 212
                  }
                ],
                "start": 169,
                "end": 212
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 220,
                  "end": 221
                },
                "consequent": [],
                "start": 215,
                "end": 222
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "'c'",
                      "start": 244,
                      "end": 247
                    },
                    "start": 237,
                    "end": 248
                  }
                ],
                "start": 225,
                "end": 248
              }
            ],
            "start": 33,
            "end": 254
          }
        ],
        "start": 27,
        "end": 256
      },
      "expression": false,
      "start": 0,
      "end": 256
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 256
}
```
