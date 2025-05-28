__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 789,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 50,
            "decorators": [],
            "name": "asyncIterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 42,
                  "decorators": [],
                  "name": "AsyncIterable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 42,
                  "end": 50,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 93,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 92,
            "decorators": [],
            "name": "iterable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 84,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 84,
                  "end": 92,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 85,
                      "end": 91
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 153,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 152,
            "decorators": [],
            "name": "iterableOfPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 135,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 135,
                  "end": 152,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 151,
                      "typeName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 143,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 143,
                        "end": 151,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 144,
                            "end": 150
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 154,
      "end": 470,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 171,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 470,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 180,
            "end": 194,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 184,
                "end": 193,
                "id": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 193,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 185,
                    "end": 193,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 187,
                      "end": 193
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 199,
            "end": 243,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 210,
              "end": 217,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 216,
                  "end": 217,
                  "id": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 221,
              "end": 234,
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 236,
              "end": 243,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 248,
            "end": 287,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 259,
              "end": 266,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 265,
                  "end": 266,
                  "id": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 266,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 270,
              "end": 278,
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 280,
              "end": 287,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 292,
            "end": 340,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 303,
              "end": 310,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 309,
                  "end": 310,
                  "id": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 310,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 314,
              "end": 331,
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 333,
              "end": 340,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 345,
            "end": 383,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 361,
              "end": 374,
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 376,
              "end": 383,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 388,
            "end": 421,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 404,
              "end": 412,
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 414,
              "end": 421,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 426,
            "end": 468,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 437,
              "end": 438,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 442,
              "end": 459,
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 461,
              "end": 468,
              "body": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 471,
      "end": 789,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 490,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 493,
        "end": 789,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 499,
            "end": 513,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 503,
                "end": 512,
                "id": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 512,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 504,
                    "end": 512,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 506,
                      "end": 512
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 518,
            "end": 562,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 529,
              "end": 536,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 535,
                  "end": 536,
                  "id": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 536,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 540,
              "end": 553,
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 555,
              "end": 562,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 567,
            "end": 606,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 578,
              "end": 585,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 584,
                  "end": 585,
                  "id": {
                    "type": "Identifier",
                    "start": 584,
                    "end": 585,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 589,
              "end": 597,
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 599,
              "end": 606,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 611,
            "end": 659,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 622,
              "end": 629,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 628,
                  "end": 629,
                  "id": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 629,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 633,
              "end": 650,
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 652,
              "end": 659,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 664,
            "end": 702,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 680,
              "end": 693,
              "decorators": [],
              "name": "asyncIterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 695,
              "end": 702,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 707,
            "end": 740,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 718,
              "end": 719,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 723,
              "end": 731,
              "decorators": [],
              "name": "iterable",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 733,
              "end": 740,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 745,
            "end": 787,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 756,
              "end": 757,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 761,
              "end": 778,
              "decorators": [],
              "name": "iterableOfPromise",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 780,
              "end": 787,
              "body": []
            }
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
