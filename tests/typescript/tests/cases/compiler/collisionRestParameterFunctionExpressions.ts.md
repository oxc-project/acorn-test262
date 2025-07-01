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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 32
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  },
                  "start": 35,
                  "end": 43
                },
                "start": 33,
                "end": 43
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 62
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 45,
                "end": 62
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 94
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 97,
                        "end": 99
                      },
                      "definite": false,
                      "start": 92,
                      "end": 99
                    }
                  ],
                  "declare": false,
                  "start": 88,
                  "end": 100
                }
              ],
              "start": 64,
              "end": 118
            },
            "expression": false,
            "start": 21,
            "end": 118
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 141
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  },
                  "start": 144,
                  "end": 152
                },
                "start": 142,
                "end": 152
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 182
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 185,
                        "end": 187
                      },
                      "definite": false,
                      "start": 180,
                      "end": 187
                    }
                  ],
                  "declare": false,
                  "start": 176,
                  "end": 188
                }
              ],
              "start": 154,
              "end": 206
            },
            "expression": false,
            "start": 123,
            "end": 206
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 222
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 240
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 223,
                "end": 240
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 258
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 261,
                        "end": 263
                      },
                      "definite": false,
                      "start": 256,
                      "end": 263
                    }
                  ],
                  "declare": false,
                  "start": 252,
                  "end": 264
                }
              ],
              "start": 242,
              "end": 282
            },
            "expression": false,
            "start": 211,
            "end": 282
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 305
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 324
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 327,
                        "end": 329
                      },
                      "definite": false,
                      "start": 322,
                      "end": 329
                    }
                  ],
                  "declare": false,
                  "start": 318,
                  "end": 330
                }
              ],
              "start": 308,
              "end": 348
            },
            "expression": false,
            "start": 287,
            "end": 348
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 365
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 370,
                    "end": 376
                  },
                  "start": 368,
                  "end": 376
                },
                "start": 366,
                "end": 376
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 385
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 378,
                "end": 385
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 354,
            "end": 387
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 426
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  },
                  "start": 429,
                  "end": 437
                },
                "start": 427,
                "end": 437
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 446
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 439,
                "end": 446
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 415,
            "end": 448
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 487
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 492,
                    "end": 495
                  },
                  "start": 490,
                  "end": 495
                },
                "start": 488,
                "end": 495
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 504
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 497,
                "end": 504
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 506,
              "end": 522
            },
            "expression": false,
            "start": 476,
            "end": 522
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 546
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 551,
                    "end": 557
                  },
                  "start": 549,
                  "end": 557
                },
                "start": 547,
                "end": 557
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 528,
            "end": 559
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 594
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 599,
                    "end": 605
                  },
                  "start": 597,
                  "end": 605
                },
                "start": 595,
                "end": 605
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 576,
            "end": 607
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 642
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 647,
                    "end": 650
                  },
                  "start": 645,
                  "end": 650
                },
                "start": 643,
                "end": 650
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 652,
              "end": 671
            },
            "expression": false,
            "start": 624,
            "end": 671
          }
        ],
        "start": 15,
        "end": 673
      },
      "expression": false,
      "start": 0,
      "end": 673
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 673
}
```
