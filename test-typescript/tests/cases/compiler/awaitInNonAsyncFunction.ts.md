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
        "name": "normalFunc",
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
          "start": 77,
          "end": 95,
          "name": "p",
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
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 119,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
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
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "exportedFunc",
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
            "start": 178,
            "end": 196,
            "name": "p",
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 219,
                    "end": 220,
                    "id": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "const",
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
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 274,
            "name": "functionExpression",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 277,
            "end": 349,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 286,
                "end": 304,
                "name": "p",
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
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 327,
                        "end": 328,
                        "id": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 328,
                          "name": "_",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 366,
            "name": "arrowFunc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 369,
            "end": 443,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 388,
                "name": "p",
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
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 414,
                        "end": 415,
                        "id": {
                          "type": "Identifier",
                          "start": 414,
                          "end": 415,
                          "name": "_",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "generatorFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 470,
          "end": 488,
          "name": "p",
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
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 511,
                  "end": 512,
                  "id": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 512,
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
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
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 541,
      "end": 717,
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 552,
        "name": "clazz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 553,
        "end": 717,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 557,
            "end": 638,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 557,
              "end": 568,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 568,
              "end": 638,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 569,
                  "end": 587,
                  "name": "p",
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
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 612,
                          "end": 613,
                          "id": {
                            "type": "Identifier",
                            "start": 612,
                            "end": 613,
                            "name": "_",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "const",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 641,
            "end": 715,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 641,
              "end": 647,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 647,
              "end": 715,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 648,
                  "end": 666,
                  "name": "p",
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
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 689,
                          "end": 690,
                          "id": {
                            "type": "Identifier",
                            "start": 689,
                            "end": 690,
                            "name": "_",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "const",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 736,
            "end": 737,
            "id": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
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
  "sourceType": "script",
  "hashbang": null
}
```
