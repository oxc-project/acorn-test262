__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 884,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 25,
      "end": 82,
      "test": {
        "type": "BinaryExpression",
        "start": 29,
        "end": 46,
        "left": {
          "type": "Identifier",
          "start": 29,
          "end": 36,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 41,
          "end": 46,
          "value": "foo",
          "raw": "\"foo\""
        }
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
            "expression": {
              "type": "Identifier",
              "start": 52,
              "end": 59,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 68,
        "end": 82,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 80,
            "expression": {
              "type": "Identifier",
              "start": 72,
              "end": 79,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 115,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 114,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 106,
                        "end": 112
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "IfStatement",
      "start": 116,
      "end": 171,
      "test": {
        "type": "BinaryExpression",
        "start": 120,
        "end": 135,
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 127,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 132,
          "end": 135,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
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
            "expression": {
              "type": "Identifier",
              "start": 141,
              "end": 148,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 157,
        "end": 171,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 169,
            "expression": {
              "type": "Identifier",
              "start": 161,
              "end": 168,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 186,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
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
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 263,
        "body": [
          {
            "type": "IfStatement",
            "start": 198,
            "end": 261,
            "test": {
              "type": "BinaryExpression",
              "start": 202,
              "end": 215,
              "left": {
                "type": "Identifier",
                "start": 202,
                "end": 209,
                "decorators": [],
                "name": "nonNull",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 214,
                "end": 215,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
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
                  "expression": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 230,
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 243,
              "end": 261,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 249,
                  "end": 257,
                  "expression": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 256,
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
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
      "start": 265,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 276,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 276,
        "end": 294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 277,
            "end": 293,
            "name": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 287,
              "end": 293
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
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 370,
        "body": [
          {
            "type": "IfStatement",
            "start": 305,
            "end": 368,
            "test": {
              "type": "BinaryExpression",
              "start": 309,
              "end": 322,
              "left": {
                "type": "Identifier",
                "start": 309,
                "end": 316,
                "decorators": [],
                "name": "nonNull",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
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
                  "expression": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 337,
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 350,
              "end": 368,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 356,
                  "end": 364,
                  "expression": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 363,
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 425,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 424,
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
                      "value": "xyz",
                      "raw": "\"xyz\""
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 401,
                          "end": 402,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 402,
                          "end": 410,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 404,
                            "end": 410
                          }
                        },
                        "accessibility": null,
                        "static": false
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 426,
      "end": 483,
      "test": {
        "type": "BinaryExpression",
        "start": 430,
        "end": 447,
        "left": {
          "type": "Identifier",
          "start": 430,
          "end": 437,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 442,
          "end": 447,
          "decorators": [],
          "name": "union",
          "optional": false,
          "typeAnnotation": null
        }
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
            "expression": {
              "type": "Identifier",
              "start": 453,
              "end": 460,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 469,
        "end": 483,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 473,
            "end": 481,
            "expression": {
              "type": "Identifier",
              "start": 473,
              "end": 480,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 485,
      "end": 546,
      "test": {
        "type": "BinaryExpression",
        "start": 489,
        "end": 510,
        "left": {
          "type": "Identifier",
          "start": 489,
          "end": 496,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 501,
          "end": 510,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
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
            "expression": {
              "type": "Identifier",
              "start": 516,
              "end": 523,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 532,
        "end": 546,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 536,
            "end": 544,
            "expression": {
              "type": "Identifier",
              "start": 536,
              "end": 543,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 548,
      "end": 604,
      "test": {
        "type": "BinaryExpression",
        "start": 552,
        "end": 568,
        "left": {
          "type": "Identifier",
          "start": 552,
          "end": 559,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 564,
          "end": 568,
          "value": null,
          "raw": "null"
        }
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
            "expression": {
              "type": "Identifier",
              "start": 574,
              "end": 581,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 590,
        "end": 604,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 594,
            "end": 602,
            "expression": {
              "type": "Identifier",
              "start": 594,
              "end": 601,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 606,
      "end": 666,
      "test": {
        "type": "BinaryExpression",
        "start": 610,
        "end": 630,
        "left": {
          "type": "Identifier",
          "start": 610,
          "end": 617,
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 621,
          "end": 630,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
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
            "expression": {
              "type": "Identifier",
              "start": 636,
              "end": 643,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 652,
        "end": 666,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 656,
            "end": 664,
            "expression": {
              "type": "Identifier",
              "start": 656,
              "end": 663,
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 689,
      "end": 884,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 883,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 729,
              "end": 883,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 733,
                  "end": 770,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 737,
                    "end": 743,
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "start": 738,
                      "end": 743,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
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
                          "value": "foo",
                          "raw": "'foo'"
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 773,
                  "end": 868,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 777,
                    "end": 792,
                    "left": {
                      "type": "Identifier",
                      "start": 777,
                      "end": 782,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 787,
                      "end": 792,
                      "value": "xyz",
                      "raw": "'xyz'"
                    }
                  },
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
                  "alternate": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 871,
                  "end": 881,
                  "argument": {
                    "type": "Literal",
                    "start": 878,
                    "end": 880,
                    "value": "",
                    "raw": "''"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
