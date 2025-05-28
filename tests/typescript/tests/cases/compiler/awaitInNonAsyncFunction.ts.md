__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 757,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 76,
        "decorators": [],
        "name": "normalFunc",
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
          "start": 77,
          "end": 95,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 95,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 87,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 87,
                "end": 95,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 88,
                    "end": 94
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 147,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 101,
            "end": 127,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 112,
              "end": 119,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 119,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "_",
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
              "type": "ArrayExpression",
              "start": 123,
              "end": 125,
              "elements": []
            },
            "body": {
              "type": "EmptyStatement",
              "start": 126,
              "end": 127
            }
          },
          {
            "type": "ReturnStatement",
            "start": 130,
            "end": 145,
            "argument": {
              "type": "AwaitExpression",
              "start": 137,
              "end": 144,
              "argument": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 149,
      "end": 248,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 156,
        "end": 248,
        "id": {
          "type": "Identifier",
          "start": 165,
          "end": 177,
          "decorators": [],
          "name": "exportedFunc",
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
            "start": 178,
            "end": 196,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 188,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 188,
                  "end": 196,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 189,
                      "end": 195
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 198,
          "end": 248,
          "body": [
            {
              "type": "ForOfStatement",
              "start": 202,
              "end": 228,
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "start": 213,
                "end": 220,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 219,
                    "end": 220,
                    "id": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "decorators": [],
                      "name": "_",
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
                "type": "ArrayExpression",
                "start": 224,
                "end": 226,
                "elements": []
              },
              "body": {
                "type": "EmptyStatement",
                "start": 227,
                "end": 228
              }
            },
            {
              "type": "ReturnStatement",
              "start": 231,
              "end": 246,
              "argument": {
                "type": "AwaitExpression",
                "start": 238,
                "end": 245,
                "argument": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 349,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 274,
            "decorators": [],
            "name": "functionExpression",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 277,
            "end": 349,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 286,
                "end": 304,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 304,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 289,
                    "end": 304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 296,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 296,
                      "end": 304,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 297,
                          "end": 303
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 306,
              "end": 349,
              "body": [
                {
                  "type": "ForOfStatement",
                  "start": 310,
                  "end": 336,
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 321,
                    "end": 328,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 327,
                        "end": 328,
                        "id": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 328,
                          "decorators": [],
                          "name": "_",
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
                    "type": "ArrayExpression",
                    "start": 332,
                    "end": 334,
                    "elements": []
                  },
                  "body": {
                    "type": "EmptyStatement",
                    "start": 335,
                    "end": 336
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 339,
                  "end": 347,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 339,
                    "end": 346,
                    "argument": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 444,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 366,
            "decorators": [],
            "name": "arrowFunc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 369,
            "end": 443,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 388,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 371,
                  "end": 388,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 373,
                    "end": 388,
                    "typeName": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 380,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 380,
                      "end": 388,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 381,
                          "end": 387
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 393,
              "end": 443,
              "body": [
                {
                  "type": "ForOfStatement",
                  "start": 397,
                  "end": 423,
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 408,
                    "end": 415,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 414,
                        "end": 415,
                        "id": {
                          "type": "Identifier",
                          "start": 414,
                          "end": 415,
                          "decorators": [],
                          "name": "_",
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
                    "type": "ArrayExpression",
                    "start": 419,
                    "end": 421,
                    "elements": []
                  },
                  "body": {
                    "type": "EmptyStatement",
                    "start": 422,
                    "end": 423
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 426,
                  "end": 441,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 433,
                    "end": 440,
                    "argument": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 440,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 446,
      "end": 539,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 469,
        "decorators": [],
        "name": "generatorFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 470,
          "end": 488,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 471,
            "end": 488,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 473,
              "end": 488,
              "typeName": {
                "type": "Identifier",
                "start": 473,
                "end": 480,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 480,
                "end": 488,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 481,
                    "end": 487
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 490,
        "end": 539,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 494,
            "end": 520,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 505,
              "end": 512,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 511,
                  "end": 512,
                  "id": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 512,
                    "decorators": [],
                    "name": "_",
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
              "type": "ArrayExpression",
              "start": 516,
              "end": 518,
              "elements": []
            },
            "body": {
              "type": "EmptyStatement",
              "start": 519,
              "end": 520
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 537,
            "expression": {
              "type": "YieldExpression",
              "start": 523,
              "end": 536,
              "delegate": false,
              "argument": {
                "type": "AwaitExpression",
                "start": 529,
                "end": 536,
                "argument": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 541,
      "end": 717,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 552,
        "decorators": [],
        "name": "clazz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 553,
        "end": 717,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 557,
            "end": 638,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 557,
              "end": 568,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 568,
              "end": 638,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 569,
                  "end": 587,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 570,
                    "end": 587,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 572,
                      "end": 587,
                      "typeName": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 579,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 579,
                        "end": 587,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 580,
                            "end": 586
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 589,
                "end": 638,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 595,
                    "end": 621,
                    "await": true,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 606,
                      "end": 613,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 612,
                          "end": 613,
                          "id": {
                            "type": "Identifier",
                            "start": 612,
                            "end": 613,
                            "decorators": [],
                            "name": "_",
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
                      "type": "ArrayExpression",
                      "start": 617,
                      "end": 619,
                      "elements": []
                    },
                    "body": {
                      "type": "EmptyStatement",
                      "start": 620,
                      "end": 621
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 626,
                    "end": 634,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 626,
                      "end": 633,
                      "argument": {
                        "type": "Identifier",
                        "start": 632,
                        "end": 633,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 641,
            "end": 715,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 641,
              "end": 647,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 647,
              "end": 715,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 648,
                  "end": 666,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 649,
                    "end": 666,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 651,
                      "end": 666,
                      "typeName": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 658,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 658,
                        "end": 666,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 659,
                            "end": 665
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 668,
                "end": 715,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 672,
                    "end": 698,
                    "await": true,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 683,
                      "end": 690,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 689,
                          "end": 690,
                          "id": {
                            "type": "Identifier",
                            "start": 689,
                            "end": 690,
                            "decorators": [],
                            "name": "_",
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
                      "type": "ArrayExpression",
                      "start": 694,
                      "end": 696,
                      "elements": []
                    },
                    "body": {
                      "type": "EmptyStatement",
                      "start": 697,
                      "end": 698
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 703,
                    "end": 711,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 703,
                      "end": 710,
                      "argument": {
                        "type": "Identifier",
                        "start": 709,
                        "end": 710,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 719,
      "end": 745,
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "start": 730,
        "end": 737,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 736,
            "end": 737,
            "id": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "decorators": [],
              "name": "_",
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
        "type": "ArrayExpression",
        "start": 741,
        "end": 743,
        "elements": []
      },
      "body": {
        "type": "EmptyStatement",
        "start": 744,
        "end": 745
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 746,
      "end": 757,
      "expression": {
        "type": "AwaitExpression",
        "start": 746,
        "end": 756,
        "argument": {
          "type": "Literal",
          "start": 752,
          "end": 756,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
