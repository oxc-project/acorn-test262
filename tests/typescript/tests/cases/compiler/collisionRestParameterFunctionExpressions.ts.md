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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "decorators": [],
              "name": "f1",
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
                "start": 33,
                "end": 43,
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 45,
                "end": 62,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 62,
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 64,
              "end": 118,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 88,
                  "end": 100,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 92,
                      "end": 99,
                      "id": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 94,
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null
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
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 123,
            "end": 206,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 141,
              "decorators": [],
              "name": "f1NoError",
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
                "start": 142,
                "end": 152,
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 144,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 154,
              "end": 206,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 176,
                  "end": 188,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 180,
                      "end": 187,
                      "id": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 182,
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null
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
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 211,
            "end": 282,
            "id": {
              "type": "Identifier",
              "start": 220,
              "end": 222,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 223,
                "end": 240,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 240,
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 242,
              "end": 282,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 252,
                  "end": 264,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 256,
                      "end": 263,
                      "id": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 258,
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null
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
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 287,
            "end": 348,
            "id": {
              "type": "Identifier",
              "start": 296,
              "end": 305,
              "decorators": [],
              "name": "f3NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 308,
              "end": 348,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 318,
                  "end": 330,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 322,
                      "end": 329,
                      "id": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 324,
                        "decorators": [],
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null
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
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 354,
            "end": 387,
            "id": {
              "type": "Identifier",
              "start": 363,
              "end": 365,
              "decorators": [],
              "name": "f4",
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
                "start": 366,
                "end": 376,
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 368,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 370,
                    "end": 376
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 378,
                "end": 385,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 385,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 415,
            "end": 448,
            "id": {
              "type": "Identifier",
              "start": 424,
              "end": 426,
              "decorators": [],
              "name": "f4",
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
                "start": 427,
                "end": 437,
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 429,
                  "end": 437,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 439,
                "end": 446,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 446,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 476,
            "end": 522,
            "id": {
              "type": "Identifier",
              "start": 485,
              "end": 487,
              "decorators": [],
              "name": "f4",
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
                "start": 488,
                "end": 495,
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 490,
                  "end": 495,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 492,
                    "end": 495
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 497,
                "end": 504,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 504,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 506,
              "end": 522,
              "body": []
            },
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 528,
            "end": 559,
            "id": {
              "type": "Identifier",
              "start": 537,
              "end": 546,
              "decorators": [],
              "name": "f4NoError",
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
                "start": 547,
                "end": 557,
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 549,
                  "end": 557,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 551,
                    "end": 557
                  }
                }
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 576,
            "end": 607,
            "id": {
              "type": "Identifier",
              "start": 585,
              "end": 594,
              "decorators": [],
              "name": "f4NoError",
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
                "start": 595,
                "end": 605,
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 597,
                  "end": 605,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 599,
                    "end": 605
                  }
                }
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 624,
            "end": 671,
            "id": {
              "type": "Identifier",
              "start": 633,
              "end": 642,
              "decorators": [],
              "name": "f4NoError",
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
                "start": 643,
                "end": 650,
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 645,
                  "end": 650,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 647,
                    "end": 650
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 652,
              "end": 671,
              "body": []
            },
            "expression": false
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
