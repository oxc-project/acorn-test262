__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 979,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 41,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 41,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 41,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 35,
                    "end": 41,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 41,
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 60,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 60,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 53,
                "end": 60
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 71,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 63,
        "end": 70,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 67,
          "end": 70,
          "raw": "/a/",
          "regex": {
            "flags": "",
            "pattern": "a"
          },
          "value": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 72,
      "end": 176,
      "alternate": {
        "type": "BlockStatement",
        "start": 143,
        "end": 176,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 151,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 167,
            "end": 174,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 167,
              "end": 173,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 171,
                "end": 173,
                "raw": "42",
                "value": 42
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 104,
        "end": 137,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 112,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 128,
            "end": 135,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 128,
              "end": 134,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 132,
                "end": 134,
                "raw": "\"\"",
                "value": ""
              }
            }
          }
        ]
      },
      "test": {
        "type": "SequenceExpression",
        "start": 76,
        "end": 102,
        "expressions": [
          {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentExpression",
            "start": 93,
            "end": 101,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 97,
              "end": 101,
              "raw": "true",
              "value": true
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 179,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 200,
      "end": 348,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 213,
        "end": 348,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 242,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 223,
                "end": 241,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 241,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 226,
                      "end": 241,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 226,
                          "end": 232
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 235,
                          "end": 241
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 247,
            "end": 329,
            "alternate": {
              "type": "BlockStatement",
              "start": 290,
              "end": 329,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 300,
                  "end": 307,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 300,
                    "end": 306,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 301,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 304,
                      "end": 306,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 316,
                  "end": 323,
                  "argument": null
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 257,
              "end": 280,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 267,
                  "end": 274,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 267,
                    "end": 273,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 268,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 271,
                      "end": 273,
                      "raw": "42",
                      "value": 42
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 251,
              "end": 255,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 334,
            "end": 336,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 349,
      "end": 499,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 362,
        "end": 499,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 368,
            "end": 391,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 372,
                "end": 390,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 390,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 373,
                    "end": 390,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 375,
                      "end": 390,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 375,
                          "end": 381
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 384,
                          "end": 390
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 396,
            "end": 480,
            "alternate": {
              "type": "BlockStatement",
              "start": 457,
              "end": 480,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 467,
                  "end": 474,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 467,
                    "end": 473,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 471,
                      "end": 473,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 406,
              "end": 447,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 416,
                  "end": 423,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 416,
                    "end": 422,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 420,
                      "end": 422,
                      "raw": "42",
                      "value": 42
                    }
                  }
                },
                {
                  "type": "ThrowStatement",
                  "start": 432,
                  "end": 441,
                  "argument": {
                    "type": "Literal",
                    "start": 438,
                    "end": 440,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 400,
              "end": 404,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 485,
            "end": 487,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 359,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 500,
      "end": 651,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 535,
        "end": 651,
        "body": [
          {
            "type": "IfStatement",
            "start": 541,
            "end": 649,
            "alternate": {
              "type": "BlockStatement",
              "start": 621,
              "end": 649,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 631,
                  "end": 643,
                  "argument": {
                    "type": "Identifier",
                    "start": 638,
                    "end": 642,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 571,
              "end": 611,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 581,
                  "end": 605,
                  "argument": {
                    "type": "CallExpression",
                    "start": 588,
                    "end": 604,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 599,
                        "end": 603,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 588,
                      "end": 598,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 592,
                        "decorators": [],
                        "name": "JSON",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 598,
                        "decorators": [],
                        "name": "parse",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 545,
              "end": 569,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 545,
                "end": 556,
                "argument": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 556,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 561,
                "end": 569,
                "raw": "'string'",
                "value": "string"
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
        "start": 509,
        "end": 510,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 514,
          "end": 530,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 518,
            "end": 530,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 520,
              "end": 530,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 520,
                  "end": 526
                },
                {
                  "type": "TSTypeReference",
                  "start": 529,
                  "end": 530,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 530,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 531,
        "end": 534,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 533,
          "end": 534,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 533,
            "end": 534,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 510,
        "end": 513,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 511,
            "end": 512,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 511,
              "end": 512,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 652,
      "end": 836,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 706,
        "end": 836,
        "body": [
          {
            "type": "IfStatement",
            "start": 712,
            "end": 834,
            "alternate": {
              "type": "BlockStatement",
              "start": 806,
              "end": 834,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 816,
                  "end": 828,
                  "argument": {
                    "type": "Identifier",
                    "start": 823,
                    "end": 827,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 742,
              "end": 796,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 752,
                  "end": 790,
                  "argument": {
                    "type": "NewExpression",
                    "start": 758,
                    "end": 789,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 768,
                        "end": 788,
                        "raw": "'will always happen'",
                        "value": "will always happen"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 762,
                      "end": 767,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 716,
              "end": 740,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 716,
                "end": 727,
                "argument": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 727,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 732,
                "end": 740,
                "raw": "'string'",
                "value": "string"
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
        "start": 661,
        "end": 662,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 681,
          "end": 697,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 685,
            "end": 697,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 687,
              "end": 697,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 687,
                  "end": 693
                },
                {
                  "type": "TSTypeReference",
                  "start": 696,
                  "end": 697,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 698,
        "end": 705,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 700,
          "end": 705
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 662,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 663,
            "end": 679,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 673,
              "end": 679
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 838,
      "end": 864,
      "body": {
        "type": "TSInterfaceBody",
        "start": 853,
        "end": 864,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 857,
            "end": 862,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 857,
              "end": 858,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 858,
              "end": 861,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 860,
                "end": 861,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 861,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 849,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 849,
        "end": 852,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 850,
            "end": 851,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 865,
      "end": 978,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 893,
        "end": 978,
        "body": [
          {
            "type": "IfStatement",
            "start": 899,
            "end": 976,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 916,
              "end": 976,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 926,
                  "end": 970,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 930,
                      "end": 970,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 930,
                        "end": 936,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 931,
                          "end": 936,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 933,
                            "end": 936,
                            "literal": {
                              "type": "Literal",
                              "start": 933,
                              "end": 936,
                              "raw": "\"A\"",
                              "value": "A"
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 940,
                        "end": 969,
                        "expression": {
                          "type": "TSAsExpression",
                          "start": 940,
                          "end": 955,
                          "expression": {
                            "type": "Literal",
                            "start": 940,
                            "end": 944,
                            "raw": "null",
                            "value": null
                          },
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 948,
                            "end": 955
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 959,
                          "end": 969,
                          "exprName": {
                            "type": "TSQualifiedName",
                            "start": 966,
                            "end": 969,
                            "left": {
                              "type": "Identifier",
                              "start": 966,
                              "end": 967,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 968,
                              "end": 969,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 903,
              "end": 914,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 903,
                "end": 906,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 903,
                  "end": 904,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 906,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 911,
                "end": 914,
                "raw": "\"A\"",
                "value": "A"
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
        "start": 874,
        "end": 875,
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 876,
          "end": 891,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 877,
            "end": 891,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 879,
              "end": 891,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 880,
                "end": 891,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 881,
                    "end": 890,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 881,
                        "end": 884,
                        "literal": {
                          "type": "Literal",
                          "start": 881,
                          "end": 884,
                          "raw": "\"A\"",
                          "value": "A"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 887,
                        "end": 890,
                        "literal": {
                          "type": "Literal",
                          "start": 887,
                          "end": 890,
                          "raw": "\"B\"",
                          "value": "B"
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 879,
                "end": 880,
                "decorators": [],
                "name": "I",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
