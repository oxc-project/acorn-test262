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
      "async": false,
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
            "body": {
              "type": "EmptyStatement",
              "start": 126,
              "end": 127
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 112,
              "end": 119,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 119,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 123,
              "end": 125,
              "elements": []
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 76,
        "decorators": [],
        "name": "normalFunc",
        "optional": false,
        "typeAnnotation": null
      },
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 87,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 149,
      "end": 248,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 156,
        "end": 248,
        "async": false,
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
              "body": {
                "type": "EmptyStatement",
                "start": 227,
                "end": 228
              },
              "left": {
                "type": "VariableDeclaration",
                "start": 213,
                "end": 220,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 219,
                    "end": 220,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "right": {
                "type": "ArrayExpression",
                "start": 224,
                "end": 226,
                "elements": []
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
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 165,
          "end": 177,
          "decorators": [],
          "name": "exportedFunc",
          "optional": false,
          "typeAnnotation": null
        },
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 188,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
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
            "async": false,
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
                  "body": {
                    "type": "EmptyStatement",
                    "start": 335,
                    "end": 336
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 321,
                    "end": 328,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 327,
                        "end": 328,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 328,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 332,
                    "end": 334,
                    "elements": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 339,
                  "end": 347,
                  "directive": null,
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
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 296,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "async": false,
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
                  "body": {
                    "type": "EmptyStatement",
                    "start": 422,
                    "end": 423
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 408,
                    "end": 415,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 414,
                        "end": 415,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 414,
                          "end": 415,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 419,
                    "end": 421,
                    "elements": []
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
            "expression": false,
            "generator": false,
            "id": null,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 380,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 446,
      "end": 539,
      "async": false,
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
            "body": {
              "type": "EmptyStatement",
              "start": 519,
              "end": 520
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 505,
              "end": 512,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 511,
                  "end": 512,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 512,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 516,
              "end": 518,
              "elements": []
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 537,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 523,
              "end": 536,
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
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 469,
        "decorators": [],
        "name": "generatorFunc",
        "optional": false,
        "typeAnnotation": null
      },
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 473,
                "end": 480,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 541,
      "end": 717,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 553,
        "end": 717,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 557,
            "end": 638,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 568,
              "end": 638,
              "async": false,
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
                    "body": {
                      "type": "EmptyStatement",
                      "start": 620,
                      "end": 621
                    },
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 606,
                      "end": 613,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 612,
                          "end": 613,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 612,
                            "end": 613,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 617,
                      "end": 619,
                      "elements": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 626,
                    "end": 634,
                    "directive": null,
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
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 579,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 641,
            "end": 715,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 647,
              "end": 715,
              "async": false,
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
                    "body": {
                      "type": "EmptyStatement",
                      "start": 697,
                      "end": 698
                    },
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 683,
                      "end": 690,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 689,
                          "end": 690,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 689,
                            "end": 690,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 694,
                      "end": 696,
                      "elements": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 703,
                    "end": 711,
                    "directive": null,
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
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 658,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ForOfStatement",
      "start": 719,
      "end": 745,
      "await": true,
      "body": {
        "type": "EmptyStatement",
        "start": 744,
        "end": 745
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 730,
        "end": 737,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 736,
            "end": 737,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 741,
        "end": 743,
        "elements": []
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 746,
      "end": 757,
      "directive": null,
      "expression": {
        "type": "AwaitExpression",
        "start": 746,
        "end": 756,
        "argument": {
          "type": "Literal",
          "start": 752,
          "end": 756,
          "raw": "null",
          "value": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
