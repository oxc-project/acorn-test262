__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 734,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 105,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 104,
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 8,
          "decorators": [],
          "name": "describe",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 9,
            "end": 24,
            "value": "my test suite",
            "raw": "\"my test suite\""
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 26,
            "end": 103,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 103,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 38,
                  "end": 101,
                  "expression": {
                    "type": "CallExpression",
                    "start": 38,
                    "end": 100,
                    "callee": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 40,
                      "decorators": [],
                      "name": "it",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 41,
                        "end": 53,
                        "value": "should run",
                        "raw": "\"should run\""
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 55,
                        "end": 99,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 61,
                          "end": 99,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 71,
                              "end": 93,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 77,
                                  "end": 92,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 77,
                                    "end": 78,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 81,
                                    "end": 92,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 81,
                                      "end": 82,
                                      "decorators": [],
                                      "name": "$",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 83,
                                        "end": 91,
                                        "value": ".thing",
                                        "raw": "\".thing\""
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 734,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 733,
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 112,
          "decorators": [],
          "name": "suite",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 113,
            "end": 128,
            "value": "another suite",
            "raw": "\"another suite\""
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 130,
            "end": 732,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 136,
              "end": 732,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 142,
                  "end": 730,
                  "expression": {
                    "type": "CallExpression",
                    "start": 142,
                    "end": 729,
                    "callee": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 146,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 147,
                        "end": 164,
                        "value": "everything else",
                        "raw": "\"everything else\""
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 166,
                        "end": 728,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 172,
                          "end": 728,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 182,
                              "end": 207,
                              "expression": {
                                "type": "CallExpression",
                                "start": 182,
                                "end": 206,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 182,
                                  "end": 193,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 182,
                                    "end": 189,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 190,
                                    "end": 193,
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 194,
                                    "end": 205,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 194,
                                      "end": 201,
                                      "decorators": [],
                                      "name": "process",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 202,
                                      "end": 205,
                                      "decorators": [],
                                      "name": "env",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 216,
                              "end": 246,
                              "expression": {
                                "type": "CallExpression",
                                "start": 216,
                                "end": 245,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 216,
                                  "end": 238,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 216,
                                    "end": 224,
                                    "decorators": [],
                                    "name": "document",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 225,
                                    "end": 238,
                                    "decorators": [],
                                    "name": "createElement",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 239,
                                    "end": 244,
                                    "value": "div",
                                    "raw": "\"div\""
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 256,
                              "end": 280,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 262,
                                  "end": 279,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 262,
                                    "end": 263,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 266,
                                    "end": 279,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 266,
                                      "end": 273,
                                      "decorators": [],
                                      "name": "require",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 274,
                                        "end": 278,
                                        "value": "fs",
                                        "raw": "\"fs\""
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 289,
                              "end": 315,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 295,
                                  "end": 314,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 295,
                                    "end": 296,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 299,
                                    "end": 314,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 299,
                                      "end": 310,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 299,
                                        "end": 305,
                                        "decorators": [],
                                        "name": "Buffer",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 306,
                                        "end": 310,
                                        "decorators": [],
                                        "name": "from",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ArrayExpression",
                                        "start": 311,
                                        "end": 313,
                                        "elements": []
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 324,
                              "end": 349,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 330,
                                  "end": 348,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 330,
                                    "end": 331,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "start": 334,
                                    "end": 348,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 334,
                                      "end": 340,
                                      "decorators": [],
                                      "name": "module",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 341,
                                      "end": 348,
                                      "decorators": [],
                                      "name": "exports",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 359,
                              "end": 379,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 365,
                                  "end": 378,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 365,
                                    "end": 366,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 369,
                                    "end": 378,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 373,
                                      "end": 376,
                                      "decorators": [],
                                      "name": "Map",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": []
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 388,
                              "end": 408,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 394,
                                  "end": 407,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 394,
                                    "end": 395,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 398,
                                    "end": 407,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 402,
                                      "end": 405,
                                      "decorators": [],
                                      "name": "Set",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": []
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 417,
                              "end": 441,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 423,
                                  "end": 440,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 423,
                                    "end": 424,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 427,
                                    "end": 440,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 431,
                                      "end": 438,
                                      "decorators": [],
                                      "name": "WeakMap",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": []
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 450,
                              "end": 474,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 456,
                                  "end": 473,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 456,
                                    "end": 457,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 460,
                                    "end": 473,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 464,
                                      "end": 471,
                                      "decorators": [],
                                      "name": "WeakSet",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": []
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 483,
                              "end": 502,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 489,
                                  "end": 501,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 489,
                                    "end": 490,
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 493,
                                    "end": 501,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 493,
                                      "end": 499,
                                      "decorators": [],
                                      "name": "Symbol",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 511,
                              "end": 540,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 517,
                                  "end": 539,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 517,
                                    "end": 518,
                                    "decorators": [],
                                    "name": "f",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 521,
                                    "end": 539,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 521,
                                      "end": 536,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 521,
                                        "end": 528,
                                        "decorators": [],
                                        "name": "Promise",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 529,
                                        "end": 536,
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 537,
                                        "end": 538,
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 550,
                              "end": 587,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 556,
                                  "end": 586,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 556,
                                    "end": 572,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 557,
                                      "end": 572,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 559,
                                        "end": 572,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 559,
                                          "end": 567,
                                          "decorators": [],
                                          "name": "Iterator",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 567,
                                          "end": 572,
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 568,
                                              "end": 571
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "start": 575,
                                    "end": 586,
                                    "expression": {
                                      "type": "Literal",
                                      "start": 575,
                                      "end": 579,
                                      "value": null,
                                      "raw": "null"
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 583,
                                      "end": 586
                                    }
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 596,
                              "end": 638,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 602,
                                  "end": 637,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 602,
                                    "end": 623,
                                    "decorators": [],
                                    "name": "j",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 603,
                                      "end": 623,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 605,
                                        "end": 623,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 605,
                                          "end": 618,
                                          "decorators": [],
                                          "name": "AsyncIterator",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 618,
                                          "end": 623,
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 619,
                                              "end": 622
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "start": 626,
                                    "end": 637,
                                    "expression": {
                                      "type": "Literal",
                                      "start": 626,
                                      "end": 630,
                                      "value": null,
                                      "raw": "null"
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 634,
                                      "end": 637
                                    }
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 647,
                              "end": 677,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 653,
                                  "end": 676,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 653,
                                    "end": 662,
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 654,
                                      "end": 662,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 656,
                                        "end": 662,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 656,
                                          "end": 662,
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "start": 665,
                                    "end": 676,
                                    "expression": {
                                      "type": "Literal",
                                      "start": 665,
                                      "end": 669,
                                      "value": null,
                                      "raw": "null"
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 673,
                                      "end": 676
                                    }
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 686,
                              "end": 722,
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 692,
                                  "end": 721,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 692,
                                    "end": 707,
                                    "decorators": [],
                                    "name": "l",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 693,
                                      "end": 707,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 695,
                                        "end": 707,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 695,
                                          "end": 702,
                                          "decorators": [],
                                          "name": "Promise",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 702,
                                          "end": 707,
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 703,
                                              "end": 706
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "start": 710,
                                    "end": 721,
                                    "expression": {
                                      "type": "Literal",
                                      "start": 710,
                                      "end": 714,
                                      "value": null,
                                      "raw": "null"
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 718,
                                      "end": 721
                                    }
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
