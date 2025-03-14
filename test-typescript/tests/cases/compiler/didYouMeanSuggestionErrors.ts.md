didYouMeanSuggestionErrors.ts
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
        "arguments": [
          {
            "type": "Literal",
            "start": 9,
            "end": 24,
            "raw": "\"my test suite\"",
            "value": "my test suite"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 26,
            "end": 103,
            "async": false,
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
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 41,
                        "end": 53,
                        "raw": "\"should run\"",
                        "value": "should run"
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 55,
                        "end": 99,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 61,
                          "end": 99,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 71,
                              "end": 93,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 77,
                                  "end": 92,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 77,
                                    "end": 78,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 81,
                                    "end": 92,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 83,
                                        "end": 91,
                                        "raw": "\".thing\"",
                                        "value": ".thing"
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 81,
                                      "end": 82,
                                      "decorators": [],
                                      "name": "$",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 40,
                      "decorators": [],
                      "name": "it",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 8,
          "decorators": [],
          "name": "describe",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 734,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 733,
        "arguments": [
          {
            "type": "Literal",
            "start": 113,
            "end": 128,
            "raw": "\"another suite\"",
            "value": "another suite"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 130,
            "end": 732,
            "async": false,
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
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 147,
                        "end": 164,
                        "raw": "\"everything else\"",
                        "value": "everything else"
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 166,
                        "end": 728,
                        "async": false,
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
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 194,
                                    "end": 205,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 194,
                                      "end": 201,
                                      "decorators": [],
                                      "name": "process",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 202,
                                      "end": 205,
                                      "decorators": [],
                                      "name": "env",
                                      "optional": false
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 182,
                                  "end": 193,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 182,
                                    "end": 189,
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 190,
                                    "end": 193,
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 216,
                              "end": 246,
                              "expression": {
                                "type": "CallExpression",
                                "start": 216,
                                "end": 245,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 239,
                                    "end": 244,
                                    "raw": "\"div\"",
                                    "value": "div"
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 216,
                                  "end": 238,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 216,
                                    "end": 224,
                                    "decorators": [],
                                    "name": "document",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 225,
                                    "end": 238,
                                    "decorators": [],
                                    "name": "createElement",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 256,
                              "end": 280,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 262,
                                  "end": 279,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 262,
                                    "end": 263,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 266,
                                    "end": 279,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 274,
                                        "end": 278,
                                        "raw": "\"fs\"",
                                        "value": "fs"
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 266,
                                      "end": 273,
                                      "decorators": [],
                                      "name": "require",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 289,
                              "end": 315,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 295,
                                  "end": 314,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 295,
                                    "end": 296,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 299,
                                    "end": 314,
                                    "arguments": [
                                      {
                                        "type": "ArrayExpression",
                                        "start": 311,
                                        "end": 313,
                                        "elements": []
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 299,
                                      "end": 310,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 299,
                                        "end": 305,
                                        "decorators": [],
                                        "name": "Buffer",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 306,
                                        "end": 310,
                                        "decorators": [],
                                        "name": "from",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 324,
                              "end": 349,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 330,
                                  "end": 348,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 330,
                                    "end": 331,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "start": 334,
                                    "end": 348,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 334,
                                      "end": 340,
                                      "decorators": [],
                                      "name": "module",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 341,
                                      "end": 348,
                                      "decorators": [],
                                      "name": "exports",
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 359,
                              "end": 379,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 365,
                                  "end": 378,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 365,
                                    "end": 366,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 369,
                                    "end": 378,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 373,
                                      "end": 376,
                                      "decorators": [],
                                      "name": "Map",
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 388,
                              "end": 408,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 394,
                                  "end": 407,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 394,
                                    "end": 395,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 398,
                                    "end": 407,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 402,
                                      "end": 405,
                                      "decorators": [],
                                      "name": "Set",
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 417,
                              "end": 441,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 423,
                                  "end": 440,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 423,
                                    "end": 424,
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 427,
                                    "end": 440,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 431,
                                      "end": 438,
                                      "decorators": [],
                                      "name": "WeakMap",
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 450,
                              "end": 474,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 456,
                                  "end": 473,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 456,
                                    "end": 457,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 460,
                                    "end": 473,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 464,
                                      "end": 471,
                                      "decorators": [],
                                      "name": "WeakSet",
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 483,
                              "end": 502,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 489,
                                  "end": 501,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 489,
                                    "end": 490,
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 493,
                                    "end": 501,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 493,
                                      "end": 499,
                                      "decorators": [],
                                      "name": "Symbol",
                                      "optional": false
                                    },
                                    "optional": false
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 511,
                              "end": 540,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 517,
                                  "end": 539,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 517,
                                    "end": 518,
                                    "decorators": [],
                                    "name": "f",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 521,
                                    "end": 539,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 537,
                                        "end": 538,
                                        "raw": "0",
                                        "value": 0
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 521,
                                      "end": 536,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 521,
                                        "end": 528,
                                        "decorators": [],
                                        "name": "Promise",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 529,
                                        "end": 536,
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 550,
                              "end": 587,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 556,
                                  "end": 586,
                                  "definite": false,
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
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 559,
                                          "end": 567,
                                          "decorators": [],
                                          "name": "Iterator",
                                          "optional": false
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
                                      "raw": "null",
                                      "value": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 583,
                                      "end": 586
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 596,
                              "end": 638,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 602,
                                  "end": 637,
                                  "definite": false,
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
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 605,
                                          "end": 618,
                                          "decorators": [],
                                          "name": "AsyncIterator",
                                          "optional": false
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
                                      "raw": "null",
                                      "value": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 634,
                                      "end": 637
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 647,
                              "end": 677,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 653,
                                  "end": 676,
                                  "definite": false,
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
                                          "optional": false
                                        }
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
                                      "raw": "null",
                                      "value": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 673,
                                      "end": 676
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 686,
                              "end": 722,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 692,
                                  "end": 721,
                                  "definite": false,
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
                                        },
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 695,
                                          "end": 702,
                                          "decorators": [],
                                          "name": "Promise",
                                          "optional": false
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
                                      "raw": "null",
                                      "value": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 718,
                                      "end": 721
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 146,
                      "decorators": [],
                      "name": "test",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 112,
          "decorators": [],
          "name": "suite",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
