__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncIterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 42
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  ],
                  "start": 42,
                  "end": 50
                },
                "start": 29,
                "end": 50
              },
              "start": 27,
              "end": 50
            },
            "start": 14,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 84
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    }
                  ],
                  "start": 84,
                  "end": 92
                },
                "start": 76,
                "end": 92
              },
              "start": 74,
              "end": 92
            },
            "start": 66,
            "end": 92
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 92
        }
      ],
      "declare": true,
      "start": 52,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterableOfPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 135
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 143
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 144,
                            "end": 150
                          }
                        ],
                        "start": 143,
                        "end": 151
                      },
                      "start": 136,
                      "end": 151
                    }
                  ],
                  "start": 135,
                  "end": 152
                },
                "start": 127,
                "end": 152
              },
              "start": 125,
              "end": 152
            },
            "start": 108,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 152
        }
      ],
      "declare": true,
      "start": 94,
      "end": 153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 171
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 187,
                      "end": 193
                    },
                    "start": 185,
                    "end": 193
                  },
                  "start": 184,
                  "end": 193
                },
                "init": null,
                "definite": false,
                "start": 184,
                "end": 193
              }
            ],
            "declare": false,
            "start": 180,
            "end": 194
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "init": null,
                  "definite": false,
                  "start": 216,
                  "end": 217
                }
              ],
              "declare": false,
              "start": 210,
              "end": 217
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 234
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 236,
              "end": 243
            },
            "start": 199,
            "end": 243
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 266
                  },
                  "init": null,
                  "definite": false,
                  "start": 265,
                  "end": 266
                }
              ],
              "declare": false,
              "start": 259,
              "end": 266
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 278
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 280,
              "end": 287
            },
            "start": 248,
            "end": 287
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 310
                  },
                  "init": null,
                  "definite": false,
                  "start": 309,
                  "end": 310
                }
              ],
              "declare": false,
              "start": 303,
              "end": 310
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 331
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 333,
              "end": 340
            },
            "start": 292,
            "end": 340
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 374
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 376,
              "end": 383
            },
            "start": 345,
            "end": 383
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 400
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 412
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 414,
              "end": 421
            },
            "start": 388,
            "end": 421
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 438
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 459
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 461,
              "end": 468
            },
            "start": 426,
            "end": 468
          }
        ],
        "start": 174,
        "end": 470
      },
      "expression": false,
      "start": 154,
      "end": 470
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 490
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 506,
                      "end": 512
                    },
                    "start": 504,
                    "end": 512
                  },
                  "start": 503,
                  "end": 512
                },
                "init": null,
                "definite": false,
                "start": 503,
                "end": 512
              }
            ],
            "declare": false,
            "start": 499,
            "end": 513
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 536
                  },
                  "init": null,
                  "definite": false,
                  "start": 535,
                  "end": 536
                }
              ],
              "declare": false,
              "start": 529,
              "end": 536
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 553
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 555,
              "end": 562
            },
            "start": 518,
            "end": 562
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 584,
                    "end": 585
                  },
                  "init": null,
                  "definite": false,
                  "start": 584,
                  "end": 585
                }
              ],
              "declare": false,
              "start": 578,
              "end": 585
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 597
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 599,
              "end": 606
            },
            "start": 567,
            "end": 606
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 629
                  },
                  "init": null,
                  "definite": false,
                  "start": 628,
                  "end": 629
                }
              ],
              "declare": false,
              "start": 622,
              "end": 629
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 650
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 652,
              "end": 659
            },
            "start": 611,
            "end": 659
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 693
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 695,
              "end": 702
            },
            "start": 664,
            "end": 702
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 719
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 731
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 733,
              "end": 740
            },
            "start": 707,
            "end": 740
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 756,
              "end": 757
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 778
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 780,
              "end": 787
            },
            "start": 745,
            "end": 787
          }
        ],
        "start": 493,
        "end": 789
      },
      "expression": false,
      "start": 471,
      "end": 789
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 789
}
```
