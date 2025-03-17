__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 885,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "nonNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 23,
                "members": []
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 25,
      "end": 82,
      "alternate": {
        "type": "BlockStatement",
        "start": 68,
        "end": 82,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 80,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 72,
              "end": 79,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 48,
        "end": 62,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 52,
            "end": 60,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 52,
              "end": 59,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 29,
        "end": 46,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 29,
          "end": 36,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 41,
          "end": 46,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 114,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 114,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 103,
                    "end": 112,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 106,
                        "end": 112
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 116,
      "end": 171,
      "alternate": {
        "type": "BlockStatement",
        "start": 157,
        "end": 171,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 169,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 161,
              "end": 168,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 137,
        "end": 151,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 149,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 141,
              "end": 148,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 120,
        "end": 135,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 127,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 132,
          "end": 135,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 263,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 263,
        "body": [
          {
            "type": "IfStatement",
            "start": 198,
            "end": 261,
            "alternate": {
              "type": "BlockStatement",
              "start": 243,
              "end": 261,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 249,
                  "end": 257,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 256,
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 217,
              "end": 235,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 223,
                  "end": 231,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 230,
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 202,
              "end": 215,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 202,
                "end": 209,
                "decorators": [],
                "name": "nonNull",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 214,
                "end": 215,
                "decorators": [],
                "name": "x",
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
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 188,
          "end": 192,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 186,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
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
      "start": 265,
      "end": 370,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 370,
        "body": [
          {
            "type": "IfStatement",
            "start": 305,
            "end": 368,
            "alternate": {
              "type": "BlockStatement",
              "start": 350,
              "end": 368,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 356,
                  "end": 364,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 363,
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 324,
              "end": 342,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 330,
                  "end": 338,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 337,
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 309,
              "end": 322,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 309,
                "end": 316,
                "decorators": [],
                "name": "nonNull",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "decorators": [],
                "name": "x",
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
        "start": 274,
        "end": 276,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 299,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 299,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 276,
        "end": 294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 277,
            "end": 293,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 287,
              "end": 293
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
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
      "type": "VariableDeclaration",
      "start": 372,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 424,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 424,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 424,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 391,
                "end": 424,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 391,
                    "end": 396,
                    "literal": {
                      "type": "Literal",
                      "start": 391,
                      "end": 396,
                      "raw": "\"xyz\"",
                      "value": "xyz"
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 399,
                    "end": 412,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 401,
                        "end": 410,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 401,
                          "end": 402,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 402,
                          "end": 410,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 404,
                            "end": 410
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 415,
                    "end": 424
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 426,
      "end": 483,
      "alternate": {
        "type": "BlockStatement",
        "start": 469,
        "end": 483,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 473,
            "end": 481,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 473,
              "end": 480,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 449,
        "end": 463,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 453,
            "end": 461,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 453,
              "end": 460,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 430,
        "end": 447,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 430,
          "end": 437,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 442,
          "end": 447,
          "decorators": [],
          "name": "union",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 485,
      "end": 546,
      "alternate": {
        "type": "BlockStatement",
        "start": 532,
        "end": 546,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 536,
            "end": 544,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 536,
              "end": 543,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 512,
        "end": 526,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 516,
            "end": 524,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 516,
              "end": 523,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 489,
        "end": 510,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 489,
          "end": 496,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 501,
          "end": 510,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 548,
      "end": 604,
      "alternate": {
        "type": "BlockStatement",
        "start": 590,
        "end": 604,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 594,
            "end": 602,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 594,
              "end": 601,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 570,
        "end": 584,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 574,
            "end": 582,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 574,
              "end": 581,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 552,
        "end": 568,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 552,
          "end": 559,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 564,
          "end": 568,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 606,
      "end": 666,
      "alternate": {
        "type": "BlockStatement",
        "start": 652,
        "end": 666,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 656,
            "end": 664,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 656,
              "end": 663,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 632,
        "end": 646,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 636,
            "end": 644,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 636,
              "end": 643,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 610,
        "end": 630,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 610,
          "end": 617,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 621,
          "end": 630,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 689,
      "end": 884,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 883,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 695,
            "end": 698,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 701,
            "end": 883,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 729,
              "end": 883,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 733,
                  "end": 770,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 745,
                    "end": 770,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 753,
                        "end": 766,
                        "argument": {
                          "type": "Literal",
                          "start": 760,
                          "end": 765,
                          "raw": "'foo'",
                          "value": "foo"
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 737,
                    "end": 743,
                    "argument": {
                      "type": "Identifier",
                      "start": 738,
                      "end": 743,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 773,
                  "end": 868,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 794,
                    "end": 868,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 802,
                        "end": 815,
                        "argument": {
                          "type": "Identifier",
                          "start": 809,
                          "end": 814,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 777,
                    "end": 792,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 777,
                      "end": 782,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 787,
                      "end": 792,
                      "raw": "'xyz'",
                      "value": "xyz"
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 871,
                  "end": 881,
                  "argument": {
                    "type": "Literal",
                    "start": 878,
                    "end": 880,
                    "raw": "''",
                    "value": ""
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
                "start": 702,
                "end": 716,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 707,
                  "end": 716,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 709,
                    "end": 716
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 717,
              "end": 725,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 719,
                "end": 725
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
