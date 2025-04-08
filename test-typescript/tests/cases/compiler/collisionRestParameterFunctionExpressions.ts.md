__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 673,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 673,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 673,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 21,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 32,
              "name": "f1",
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
                "start": 33,
                "end": 43,
                "name": "_i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 45,
                "end": 62,
                "argument": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 62,
                  "name": "restParameters",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 64,
              "end": 118,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 88,
                  "end": 100,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 92,
                      "end": 99,
                      "id": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 94,
                        "name": "_i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 97,
                        "end": 99,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 123,
            "end": 206,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 141,
              "name": "f1NoError",
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
                "start": 142,
                "end": 152,
                "name": "_i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 144,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 154,
              "end": 206,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 176,
                  "end": 188,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 180,
                      "end": 187,
                      "id": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 182,
                        "name": "_i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 185,
                        "end": 187,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 211,
            "end": 282,
            "id": {
              "type": "Identifier",
              "start": 220,
              "end": 222,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 223,
                "end": 240,
                "argument": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 240,
                  "name": "restParameters",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 242,
              "end": 282,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 252,
                  "end": 264,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 256,
                      "end": 263,
                      "id": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 258,
                        "name": "_i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 261,
                        "end": 263,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 287,
            "end": 348,
            "id": {
              "type": "Identifier",
              "start": 296,
              "end": 305,
              "name": "f3NoError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 308,
              "end": 348,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 318,
                  "end": 330,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 322,
                      "end": 329,
                      "id": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 324,
                        "name": "_i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 327,
                        "end": 329,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 354,
            "end": 387,
            "id": {
              "type": "Identifier",
              "start": 363,
              "end": 365,
              "name": "f4",
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
                "start": 366,
                "end": 376,
                "name": "_i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 368,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 370,
                    "end": 376
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 378,
                "end": 385,
                "argument": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 385,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 415,
            "end": 448,
            "id": {
              "type": "Identifier",
              "start": 424,
              "end": 426,
              "name": "f4",
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
                "start": 427,
                "end": 437,
                "name": "_i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 429,
                  "end": 437,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 439,
                "end": 446,
                "argument": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 446,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 476,
            "end": 522,
            "id": {
              "type": "Identifier",
              "start": 485,
              "end": 487,
              "name": "f4",
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
                "start": 488,
                "end": 495,
                "name": "_i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 490,
                  "end": 495,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 492,
                    "end": 495
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 497,
                "end": 504,
                "argument": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 506,
              "end": 522,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 528,
            "end": 559,
            "id": {
              "type": "Identifier",
              "start": 537,
              "end": 546,
              "name": "f4NoError",
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
                "start": 547,
                "end": 557,
                "name": "_i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 549,
                  "end": 557,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 551,
                    "end": 557
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 576,
            "end": 607,
            "id": {
              "type": "Identifier",
              "start": 585,
              "end": 594,
              "name": "f4NoError",
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
                "start": 595,
                "end": 605,
                "name": "_i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 597,
                  "end": 605,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 599,
                    "end": 605
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 624,
            "end": 671,
            "id": {
              "type": "Identifier",
              "start": 633,
              "end": 642,
              "name": "f4NoError",
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
                "start": 643,
                "end": 650,
                "name": "_i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 645,
                  "end": 650,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 647,
                    "end": 650
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 652,
              "end": 671,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
