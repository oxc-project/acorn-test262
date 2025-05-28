__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 978,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 41,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 41,
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 43,
      "end": 61,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 60,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 71,
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
          "value": null,
          "raw": "/a/",
          "regex": {
            "flags": "",
            "pattern": "a"
          }
        }
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 72,
      "end": 176,
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
              "value": true,
              "raw": "true"
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
            "expression": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 128,
            "end": 135,
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
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 143,
        "end": 176,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 149,
            "end": 151,
            "expression": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 167,
            "end": 174,
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
                "value": 42,
                "raw": "42"
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 179,
      "expression": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 200,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "decorators": [],
        "name": "a",
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
        "start": 213,
        "end": 348,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 242,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 223,
                "end": 241,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 247,
            "end": 329,
            "test": {
              "type": "Identifier",
              "start": 251,
              "end": 255,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
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
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 290,
              "end": 329,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 300,
                  "end": 307,
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
                      "value": "",
                      "raw": "\"\""
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 316,
                  "end": 323,
                  "argument": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 334,
            "end": 336,
            "expression": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 349,
      "end": 499,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 359,
        "decorators": [],
        "name": "b",
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
        "start": 362,
        "end": 499,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 368,
            "end": 391,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 372,
                "end": 390,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 396,
            "end": 480,
            "test": {
              "type": "Identifier",
              "start": 400,
              "end": 404,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
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
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ThrowStatement",
                  "start": 432,
                  "end": 441,
                  "argument": {
                    "type": "Literal",
                    "start": 438,
                    "end": 440,
                    "value": "",
                    "raw": "\"\""
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 457,
              "end": 480,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 467,
                  "end": 474,
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
                      "value": "",
                      "raw": "\"\""
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 485,
            "end": 487,
            "expression": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 500,
      "end": 651,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 510,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 510,
        "end": 513,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 511,
            "end": 512,
            "name": {
              "type": "Identifier",
              "start": 511,
              "end": 512,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 530,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 533,
            "end": 534,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 535,
        "end": 651,
        "body": [
          {
            "type": "IfStatement",
            "start": 541,
            "end": 649,
            "test": {
              "type": "BinaryExpression",
              "start": 545,
              "end": 569,
              "left": {
                "type": "UnaryExpression",
                "start": 545,
                "end": 556,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 556,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 561,
                "end": 569,
                "value": "string",
                "raw": "'string'"
              }
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 588,
                      "end": 598,
                      "object": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 592,
                        "decorators": [],
                        "name": "JSON",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 598,
                        "decorators": [],
                        "name": "parse",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
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
                    "optional": false
                  }
                }
              ]
            },
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
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 652,
      "end": 836,
      "id": {
        "type": "Identifier",
        "start": 661,
        "end": 662,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 662,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 663,
            "end": 679,
            "name": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 673,
              "end": 679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "body": {
        "type": "BlockStatement",
        "start": 706,
        "end": 836,
        "body": [
          {
            "type": "IfStatement",
            "start": 712,
            "end": 834,
            "test": {
              "type": "BinaryExpression",
              "start": 716,
              "end": 740,
              "left": {
                "type": "UnaryExpression",
                "start": 716,
                "end": 727,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 727,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 732,
                "end": 740,
                "value": "string",
                "raw": "'string'"
              }
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
                    "callee": {
                      "type": "Identifier",
                      "start": 762,
                      "end": 767,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 768,
                        "end": 788,
                        "value": "will always happen",
                        "raw": "'will always happen'"
                      }
                    ]
                  }
                }
              ]
            },
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
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 838,
      "end": 864,
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
            "name": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 853,
        "end": 864,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 857,
            "end": 862,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 857,
              "end": 858,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 858,
              "end": 861,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 860,
                "end": 861,
                "typeName": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 861,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 865,
      "end": 978,
      "id": {
        "type": "Identifier",
        "start": 874,
        "end": 875,
        "decorators": [],
        "name": "e",
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
              "typeName": {
                "type": "Identifier",
                "start": 879,
                "end": 880,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
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
                          "value": "A",
                          "raw": "\"A\""
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
                          "value": "B",
                          "raw": "\"B\""
                        }
                      }
                    ]
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
        "start": 893,
        "end": 978,
        "body": [
          {
            "type": "IfStatement",
            "start": 899,
            "end": 976,
            "test": {
              "type": "BinaryExpression",
              "start": 903,
              "end": 914,
              "left": {
                "type": "MemberExpression",
                "start": 903,
                "end": 906,
                "object": {
                  "type": "Identifier",
                  "start": 903,
                  "end": 904,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 906,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 911,
                "end": 914,
                "value": "A",
                "raw": "\"A\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 916,
              "end": 976,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 926,
                  "end": 970,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 930,
                      "end": 970,
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
                              "value": "A",
                              "raw": "\"A\""
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
                            "value": null,
                            "raw": "null"
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
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
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
