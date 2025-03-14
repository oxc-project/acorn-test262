__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1068,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 228,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 228,
        "body": [
          {
            "type": "IfStatement",
            "start": 80,
            "end": 226,
            "alternate": {
              "type": "BlockStatement",
              "start": 176,
              "end": 226,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 186,
                  "end": 190,
                  "expression": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 189,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 114,
              "end": 166,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 124,
                  "end": 128,
                  "expression": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 127,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 84,
              "end": 112,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 84,
                "end": 99,
                "argument": {
                  "type": "MemberExpression",
                  "start": 91,
                  "end": 99,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 94,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 99,
                    "decorators": [],
                    "name": "kind",
                    "optional": false
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 104,
                "end": 112,
                "raw": "\"string\"",
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
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 72,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 72,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 17,
              "end": 72,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 17,
                  "end": 44,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 19,
                      "end": 29,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 23,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 23,
                        "end": 28,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 25,
                          "end": 28,
                          "literal": {
                            "type": "Literal",
                            "start": 25,
                            "end": 28,
                            "raw": "'a'",
                            "value": "a"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 30,
                      "end": 42,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 34,
                        "decorators": [],
                        "name": "data",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 34,
                        "end": 42,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 36,
                          "end": 42
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 47,
                  "end": 72,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 49,
                      "end": 57,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 53,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 53,
                        "end": 56,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 55,
                          "end": 56,
                          "literal": {
                            "type": "Literal",
                            "start": 55,
                            "end": 56,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 58,
                      "end": 70,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 62,
                        "decorators": [],
                        "name": "data",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 62,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 64,
                          "end": 70
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 483,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 316,
        "end": 483,
        "body": [
          {
            "type": "IfStatement",
            "start": 322,
            "end": 481,
            "alternate": {
              "type": "BlockStatement",
              "start": 419,
              "end": 481,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 429,
                  "end": 433,
                  "expression": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 432,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 357,
              "end": 409,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 367,
                  "end": 371,
                  "expression": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 370,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 326,
              "end": 355,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 326,
                "end": 342,
                "argument": {
                  "type": "ChainExpression",
                  "start": 333,
                  "end": 342,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 333,
                    "end": 342,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 336,
                      "decorators": [],
                      "name": "obj",
                      "optional": false
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 342,
                      "decorators": [],
                      "name": "kind",
                      "optional": false
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 347,
                "end": 355,
                "raw": "\"string\"",
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
        "start": 239,
        "end": 241,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 242,
          "end": 314,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 314,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 247,
              "end": 314,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 247,
                  "end": 274,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 249,
                      "end": 259,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 253,
                        "end": 258,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 255,
                          "end": 258,
                          "literal": {
                            "type": "Literal",
                            "start": 255,
                            "end": 258,
                            "raw": "'a'",
                            "value": "a"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 260,
                      "end": 272,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 264,
                        "decorators": [],
                        "name": "data",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 264,
                        "end": 272,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 266,
                          "end": 272
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 277,
                  "end": 302,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 279,
                      "end": 287,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 279,
                        "end": 283,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 283,
                        "end": 286,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 285,
                          "end": 286,
                          "literal": {
                            "type": "Literal",
                            "start": 285,
                            "end": 286,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 288,
                      "end": 300,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 292,
                        "decorators": [],
                        "name": "data",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 292,
                        "end": 300,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 294,
                          "end": 300
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 305,
                  "end": 314
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 507,
      "end": 568,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 527,
        "decorators": [],
        "name": "WrappedStringOr",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 533,
        "end": 567,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 533,
            "end": 551,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 535,
                "end": 549,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 540,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 541,
                  "end": 549,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 554,
            "end": 567,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 556,
                "end": 565,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 561,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 562,
                  "end": 565,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 564,
                    "end": 565,
                    "typeName": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 565,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 527,
        "end": 530,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 528,
            "end": 529,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 528,
              "end": 529,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 570,
      "end": 731,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 629,
        "end": 731,
        "body": [
          {
            "type": "IfStatement",
            "start": 635,
            "end": 703,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 675,
              "end": 703,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 685,
                  "end": 697,
                  "argument": {
                    "type": "Literal",
                    "start": 692,
                    "end": 696,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 639,
              "end": 673,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 639,
                "end": 660,
                "argument": {
                  "type": "ChainExpression",
                  "start": 646,
                  "end": 660,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 646,
                    "end": 660,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 653,
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 660,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 665,
                "end": 673,
                "raw": "'string'",
                "value": "string"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 708,
            "end": 729,
            "argument": {
              "type": "MemberExpression",
              "start": 715,
              "end": 728,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 715,
                "end": 722,
                "decorators": [],
                "name": "wrapped",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 723,
                "end": 728,
                "decorators": [],
                "name": "value",
                "optional": false
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
        "start": 579,
        "end": 587,
        "decorators": [],
        "name": "numberOk",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 588,
          "end": 627,
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 595,
            "end": 627,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 597,
              "end": 627,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 597,
                  "end": 620,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 612,
                    "end": 620,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 613,
                        "end": 619
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 612,
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 623,
                  "end": 627
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 733,
      "end": 897,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 795,
        "end": 897,
        "body": [
          {
            "type": "IfStatement",
            "start": 801,
            "end": 869,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 841,
              "end": 869,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 851,
                  "end": 863,
                  "argument": {
                    "type": "Literal",
                    "start": 858,
                    "end": 862,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 805,
              "end": 839,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 805,
                "end": 826,
                "argument": {
                  "type": "ChainExpression",
                  "start": 812,
                  "end": 826,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 812,
                    "end": 826,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 812,
                      "end": 819,
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 821,
                      "end": 826,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 831,
                "end": 839,
                "raw": "'string'",
                "value": "string"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 874,
            "end": 895,
            "argument": {
              "type": "MemberExpression",
              "start": 881,
              "end": 894,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 881,
                "end": 888,
                "decorators": [],
                "name": "wrapped",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 889,
                "end": 894,
                "decorators": [],
                "name": "value",
                "optional": false
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
        "start": 742,
        "end": 752,
        "decorators": [],
        "name": "booleanBad",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 753,
          "end": 793,
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 760,
            "end": 793,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 762,
              "end": 793,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 762,
                  "end": 786,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 777,
                    "end": 786,
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 778,
                        "end": 785
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 777,
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 789,
                  "end": 793
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 899,
      "end": 1067,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 963,
        "end": 1067,
        "body": [
          {
            "type": "IfStatement",
            "start": 969,
            "end": 1039,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1011,
              "end": 1039,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1021,
                  "end": 1033,
                  "argument": {
                    "type": "Literal",
                    "start": 1028,
                    "end": 1032,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 973,
              "end": 1009,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 973,
                "end": 996,
                "argument": {
                  "type": "ChainExpression",
                  "start": 981,
                  "end": 995,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 981,
                    "end": 995,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 981,
                      "end": 988,
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 990,
                      "end": 995,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1001,
                "end": 1009,
                "raw": "'string'",
                "value": "string"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1044,
            "end": 1065,
            "argument": {
              "type": "MemberExpression",
              "start": 1051,
              "end": 1064,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1051,
                "end": 1058,
                "decorators": [],
                "name": "wrapped",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1059,
                "end": 1064,
                "decorators": [],
                "name": "value",
                "optional": false
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
        "start": 908,
        "end": 920,
        "decorators": [],
        "name": "booleanFixed",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 921,
          "end": 961,
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 928,
            "end": 961,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 930,
              "end": 961,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 930,
                  "end": 954,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 945,
                    "end": 954,
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 946,
                        "end": 953
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 930,
                    "end": 945,
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 957,
                  "end": 961
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
