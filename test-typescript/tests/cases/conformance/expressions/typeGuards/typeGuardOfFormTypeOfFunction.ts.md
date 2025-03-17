__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1612,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
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
          "start": 12,
          "end": 18,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 18,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 15,
              "end": 18
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 83,
        "body": [
          {
            "type": "IfStatement",
            "start": 26,
            "end": 81,
            "test": {
              "type": "BinaryExpression",
              "start": 30,
              "end": 53,
              "left": {
                "type": "UnaryExpression",
                "start": 30,
                "end": 38,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 43,
                "end": 53,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 55,
              "end": 81,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 65,
                  "end": 67,
                  "expression": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "name": "f2",
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
          "start": 97,
          "end": 107,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 107,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 100,
              "end": 107
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 177,
        "body": [
          {
            "type": "IfStatement",
            "start": 115,
            "end": 175,
            "test": {
              "type": "BinaryExpression",
              "start": 119,
              "end": 142,
              "left": {
                "type": "UnaryExpression",
                "start": 119,
                "end": 127,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 132,
                "end": 142,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 144,
              "end": 175,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 154,
                  "end": 156,
                  "expression": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 179,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 190,
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
          "type": "Identifier",
          "start": 191,
          "end": 196,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 192,
            "end": 196,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 194,
              "end": 196,
              "members": []
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 198,
        "end": 266,
        "body": [
          {
            "type": "IfStatement",
            "start": 204,
            "end": 264,
            "test": {
              "type": "BinaryExpression",
              "start": 208,
              "end": 231,
              "left": {
                "type": "UnaryExpression",
                "start": 208,
                "end": 216,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 221,
                "end": 231,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 233,
              "end": 264,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 243,
                  "end": 245,
                  "expression": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 268,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 279,
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
          "start": 283,
          "end": 287,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 284,
            "end": 287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 286,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 361,
        "body": [
          {
            "type": "IfStatement",
            "start": 295,
            "end": 359,
            "test": {
              "type": "BinaryExpression",
              "start": 299,
              "end": 322,
              "left": {
                "type": "UnaryExpression",
                "start": 299,
                "end": 307,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 307,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 312,
                "end": 322,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 324,
              "end": 359,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 334,
                  "end": 336,
                  "expression": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 335,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 279,
        "end": 282,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 280,
            "end": 281,
            "name": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 363,
      "end": 458,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 374,
        "name": "f5",
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
          "start": 375,
          "end": 391,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 391,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 378,
              "end": 391,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 380,
                  "end": 389,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 381,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 383,
                      "end": 389
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 393,
        "end": 458,
        "body": [
          {
            "type": "IfStatement",
            "start": 399,
            "end": 456,
            "test": {
              "type": "BinaryExpression",
              "start": 403,
              "end": 426,
              "left": {
                "type": "UnaryExpression",
                "start": 403,
                "end": 411,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 416,
                "end": 426,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 428,
              "end": 456,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 438,
                  "end": 440,
                  "expression": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 439,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 460,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 471,
        "name": "f6",
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
          "start": 472,
          "end": 487,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 473,
            "end": 487,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 475,
              "end": 487,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 478,
                "end": 487,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 481,
                  "end": 487
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 489,
        "end": 561,
        "body": [
          {
            "type": "IfStatement",
            "start": 495,
            "end": 559,
            "test": {
              "type": "BinaryExpression",
              "start": 499,
              "end": 522,
              "left": {
                "type": "UnaryExpression",
                "start": 499,
                "end": 507,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 512,
                "end": 522,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 524,
              "end": 559,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 534,
                  "end": 536,
                  "expression": {
                    "type": "Identifier",
                    "start": 534,
                    "end": 535,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 563,
      "end": 715,
      "id": {
        "type": "Identifier",
        "start": 572,
        "end": 575,
        "name": "f10",
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
          "start": 576,
          "end": 602,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 577,
            "end": 602,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 579,
              "end": 602,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 579,
                  "end": 585
                },
                {
                  "type": "TSFunctionType",
                  "start": 589,
                  "end": 601,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 592,
                    "end": 601,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 595,
                      "end": 601
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 604,
        "end": 715,
        "body": [
          {
            "type": "IfStatement",
            "start": 610,
            "end": 713,
            "test": {
              "type": "BinaryExpression",
              "start": 614,
              "end": 637,
              "left": {
                "type": "UnaryExpression",
                "start": 614,
                "end": 622,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 627,
                "end": 637,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 639,
              "end": 674,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 649,
                  "end": 651,
                  "expression": {
                    "type": "Identifier",
                    "start": 649,
                    "end": 650,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 684,
              "end": 713,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 694,
                  "end": 696,
                  "expression": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 695,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 717,
      "end": 883,
      "id": {
        "type": "Identifier",
        "start": 726,
        "end": 729,
        "name": "f11",
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
          "start": 730,
          "end": 763,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 731,
            "end": 763,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 733,
              "end": 763,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 733,
                  "end": 746,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 735,
                      "end": 744,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 735,
                        "end": 736,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 736,
                        "end": 744,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 738,
                          "end": 744
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSFunctionType",
                  "start": 750,
                  "end": 762,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 753,
                    "end": 762,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 756,
                      "end": 762
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 765,
        "end": 883,
        "body": [
          {
            "type": "IfStatement",
            "start": 771,
            "end": 881,
            "test": {
              "type": "BinaryExpression",
              "start": 775,
              "end": 798,
              "left": {
                "type": "UnaryExpression",
                "start": 775,
                "end": 783,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 783,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 788,
                "end": 798,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 800,
              "end": 835,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 810,
                  "end": 812,
                  "expression": {
                    "type": "Identifier",
                    "start": 810,
                    "end": 811,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 845,
              "end": 881,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 855,
                  "end": 857,
                  "expression": {
                    "type": "Identifier",
                    "start": 855,
                    "end": 856,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 885,
      "end": 1059,
      "id": {
        "type": "Identifier",
        "start": 894,
        "end": 897,
        "name": "f12",
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
          "start": 898,
          "end": 930,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 899,
            "end": 930,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 901,
              "end": 930,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 901,
                  "end": 914,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 903,
                      "end": 912,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 903,
                        "end": 904,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 904,
                        "end": 912,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 906,
                          "end": 912
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 917,
                  "end": 930,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 919,
                      "end": 928,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 919,
                        "end": 920,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 920,
                        "end": 928,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 922,
                          "end": 928
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 932,
        "end": 1059,
        "body": [
          {
            "type": "IfStatement",
            "start": 938,
            "end": 1057,
            "test": {
              "type": "BinaryExpression",
              "start": 942,
              "end": 965,
              "left": {
                "type": "UnaryExpression",
                "start": 942,
                "end": 950,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 950,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 955,
                "end": 965,
                "value": "function",
                "raw": "\"function\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 967,
              "end": 995,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 977,
                  "end": 979,
                  "expression": {
                    "type": "Identifier",
                    "start": 977,
                    "end": 978,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1005,
              "end": 1057,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1015,
                  "end": 1017,
                  "expression": {
                    "type": "Identifier",
                    "start": 1015,
                    "end": 1016,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1083,
      "end": 1278,
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1096,
        "name": "f100",
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
          "start": 1119,
          "end": 1125,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1122,
            "end": 1125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1124,
              "end": 1125,
              "typeName": {
                "type": "Identifier",
                "start": 1124,
                "end": 1125,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1127,
          "end": 1136,
          "name": "keys",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1131,
            "end": 1136,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1133,
              "end": 1136,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1133,
                "end": 1134,
                "typeName": {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1134,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1145,
        "end": 1278,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1151,
            "end": 1276,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 1156,
              "end": 1163,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1162,
                  "end": 1163,
                  "id": {
                    "type": "Identifier",
                    "start": 1162,
                    "end": 1163,
                    "name": "k",
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
              "type": "Identifier",
              "start": 1167,
              "end": 1171,
              "name": "keys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 1173,
              "end": 1276,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1183,
                  "end": 1203,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1189,
                      "end": 1202,
                      "id": {
                        "type": "Identifier",
                        "start": 1189,
                        "end": 1193,
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1196,
                        "end": 1202,
                        "object": {
                          "type": "Identifier",
                          "start": 1196,
                          "end": 1199,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1200,
                          "end": 1201,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 1212,
                  "end": 1270,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1216,
                    "end": 1241,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1216,
                      "end": 1227,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 1223,
                        "end": 1227,
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 1231,
                      "end": 1241,
                      "value": "function",
                      "raw": "'function'"
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 1255,
                    "end": 1270,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1255,
                      "end": 1269,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1255,
                        "end": 1264,
                        "object": {
                          "type": "Identifier",
                          "start": 1255,
                          "end": 1259,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1260,
                          "end": 1264,
                          "name": "call",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1265,
                          "end": 1268,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1096,
        "end": 1118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1097,
            "end": 1098,
            "name": {
              "type": "Identifier",
              "start": 1097,
              "end": 1098,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1100,
            "end": 1117,
            "name": {
              "type": "Identifier",
              "start": 1100,
              "end": 1101,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1110,
              "end": 1117,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1116,
                "end": 1117,
                "typeName": {
                  "type": "Identifier",
                  "start": 1116,
                  "end": 1117,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1138,
        "end": 1144,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1140,
          "end": 1144
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1302,
      "end": 1511,
      "id": {
        "type": "Identifier",
        "start": 1311,
        "end": 1325,
        "name": "configureStore",
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
          "start": 1344,
          "end": 1395,
          "name": "reducer",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1351,
            "end": 1395,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1353,
              "end": 1395,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 1354,
                  "end": 1364,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1357,
                    "end": 1364,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1360,
                      "end": 1364
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1368,
                  "end": 1395,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1368,
                    "end": 1374,
                    "name": "Record",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1374,
                    "end": 1395,
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "start": 1375,
                        "end": 1382,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1381,
                          "end": 1382,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1381,
                            "end": 1382,
                            "name": "S",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSFunctionType",
                        "start": 1384,
                        "end": 1394,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1387,
                          "end": 1394,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1390,
                            "end": 1394
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1397,
        "end": 1511,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1403,
            "end": 1431,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1407,
                "end": 1430,
                "id": {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1430,
                  "name": "rootReducer",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1418,
                    "end": 1430,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1420,
                      "end": 1430,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1423,
                        "end": 1430,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1426,
                          "end": 1430
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1436,
            "end": 1509,
            "test": {
              "type": "BinaryExpression",
              "start": 1440,
              "end": 1469,
              "left": {
                "type": "UnaryExpression",
                "start": 1440,
                "end": 1454,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1447,
                  "end": 1454,
                  "name": "reducer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1459,
                "end": 1469,
                "value": "function",
                "raw": "'function'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1471,
              "end": 1509,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1481,
                  "end": 1503,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1481,
                    "end": 1502,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1481,
                      "end": 1492,
                      "name": "rootReducer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1495,
                      "end": 1502,
                      "name": "reducer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1325,
        "end": 1343,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1326,
            "end": 1342,
            "name": {
              "type": "Identifier",
              "start": 1326,
              "end": 1327,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1336,
              "end": 1342
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1513,
      "end": 1611,
      "id": {
        "type": "Identifier",
        "start": 1522,
        "end": 1526,
        "name": "f101",
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
          "start": 1527,
          "end": 1558,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1528,
            "end": 1558,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1530,
              "end": 1558,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1530,
                  "end": 1536
                },
                {
                  "type": "TSTypeReference",
                  "start": 1539,
                  "end": 1558,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1539,
                    "end": 1545,
                    "name": "Record",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1545,
                    "end": 1558,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1546,
                        "end": 1552
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1554,
                        "end": 1557
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1560,
        "end": 1611,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1566,
            "end": 1609,
            "argument": {
              "type": "LogicalExpression",
              "start": 1573,
              "end": 1608,
              "left": {
                "type": "BinaryExpression",
                "start": 1573,
                "end": 1594,
                "left": {
                  "type": "UnaryExpression",
                  "start": 1573,
                  "end": 1581,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 1580,
                    "end": 1581,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1586,
                  "end": 1594,
                  "value": "object",
                  "raw": "\"object\""
                }
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 1598,
                "end": 1608,
                "object": {
                  "type": "Identifier",
                  "start": 1598,
                  "end": 1599,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1600,
                  "end": 1608,
                  "name": "anything",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
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
