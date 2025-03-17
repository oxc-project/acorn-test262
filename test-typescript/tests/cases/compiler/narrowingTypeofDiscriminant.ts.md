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
          "end": 72,
          "name": "obj",
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 23,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 30,
                      "end": 42,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 34,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 34,
                        "end": 42,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 36,
                          "end": 42
                        }
                      },
                      "accessibility": null,
                      "static": false
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 53,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 58,
                      "end": 70,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 62,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 62,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 64,
                          "end": 70
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
        "start": 74,
        "end": 228,
        "body": [
          {
            "type": "IfStatement",
            "start": 80,
            "end": 226,
            "test": {
              "type": "BinaryExpression",
              "start": 84,
              "end": 112,
              "left": {
                "type": "UnaryExpression",
                "start": 84,
                "end": 99,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 91,
                  "end": 99,
                  "object": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 94,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 99,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 104,
                "end": 112,
                "value": "string",
                "raw": "\"string\""
              }
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
                    "name": "obj",
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
                    "name": "obj",
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
      "start": 230,
      "end": 483,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 241,
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
          "start": 242,
          "end": 314,
          "name": "obj",
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 253,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "value": "a",
                            "raw": "'a'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 260,
                      "end": 272,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 264,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 264,
                        "end": 272,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 266,
                          "end": 272
                        }
                      },
                      "accessibility": null,
                      "static": false
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 279,
                        "end": 283,
                        "name": "kind",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 288,
                      "end": 300,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 292,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 292,
                        "end": 300,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 294,
                          "end": 300
                        }
                      },
                      "accessibility": null,
                      "static": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 316,
        "end": 483,
        "body": [
          {
            "type": "IfStatement",
            "start": 322,
            "end": 481,
            "test": {
              "type": "BinaryExpression",
              "start": 326,
              "end": 355,
              "left": {
                "type": "UnaryExpression",
                "start": 326,
                "end": 342,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 333,
                  "end": 342,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 333,
                    "end": 342,
                    "object": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 336,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 342,
                      "name": "kind",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 347,
                "end": 355,
                "value": "string",
                "raw": "\"string\""
              }
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
                    "name": "obj",
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
                    "name": "obj",
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
      "type": "TSTypeAliasDeclaration",
      "start": 507,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 527,
        "name": "WrappedStringOr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 528,
              "end": 529,
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
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 540,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 541,
                  "end": 549,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  }
                },
                "accessibility": null,
                "static": false
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
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 561,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 570,
      "end": 731,
      "id": {
        "type": "Identifier",
        "start": 579,
        "end": 587,
        "name": "numberOk",
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
          "start": 588,
          "end": 627,
          "name": "wrapped",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 612,
                    "name": "WrappedStringOr",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 623,
                  "end": 627
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
        "start": 629,
        "end": 731,
        "body": [
          {
            "type": "IfStatement",
            "start": 635,
            "end": 703,
            "test": {
              "type": "BinaryExpression",
              "start": 639,
              "end": 673,
              "left": {
                "type": "UnaryExpression",
                "start": 639,
                "end": 660,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 646,
                  "end": 660,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 646,
                    "end": 660,
                    "object": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 653,
                      "name": "wrapped",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 660,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 665,
                "end": 673,
                "value": "string",
                "raw": "'string'"
              }
            },
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
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 708,
            "end": 729,
            "argument": {
              "type": "MemberExpression",
              "start": 715,
              "end": 728,
              "object": {
                "type": "Identifier",
                "start": 715,
                "end": 722,
                "name": "wrapped",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 723,
                "end": 728,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "start": 733,
      "end": 897,
      "id": {
        "type": "Identifier",
        "start": 742,
        "end": 752,
        "name": "booleanBad",
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
          "start": 753,
          "end": 793,
          "name": "wrapped",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 777,
                    "name": "WrappedStringOr",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 789,
                  "end": 793
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
        "start": 795,
        "end": 897,
        "body": [
          {
            "type": "IfStatement",
            "start": 801,
            "end": 869,
            "test": {
              "type": "BinaryExpression",
              "start": 805,
              "end": 839,
              "left": {
                "type": "UnaryExpression",
                "start": 805,
                "end": 826,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 812,
                  "end": 826,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 812,
                    "end": 826,
                    "object": {
                      "type": "Identifier",
                      "start": 812,
                      "end": 819,
                      "name": "wrapped",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 821,
                      "end": 826,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 831,
                "end": 839,
                "value": "string",
                "raw": "'string'"
              }
            },
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
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 874,
            "end": 895,
            "argument": {
              "type": "MemberExpression",
              "start": 881,
              "end": 894,
              "object": {
                "type": "Identifier",
                "start": 881,
                "end": 888,
                "name": "wrapped",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 889,
                "end": 894,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
      "start": 899,
      "end": 1067,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 920,
        "name": "booleanFixed",
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
          "start": 921,
          "end": 961,
          "name": "wrapped",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 930,
                    "end": 945,
                    "name": "WrappedStringOr",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 957,
                  "end": 961
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
        "start": 963,
        "end": 1067,
        "body": [
          {
            "type": "IfStatement",
            "start": 969,
            "end": 1039,
            "test": {
              "type": "BinaryExpression",
              "start": 973,
              "end": 1009,
              "left": {
                "type": "UnaryExpression",
                "start": 973,
                "end": 996,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 981,
                  "end": 995,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 981,
                    "end": 995,
                    "object": {
                      "type": "Identifier",
                      "start": 981,
                      "end": 988,
                      "name": "wrapped",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 990,
                      "end": 995,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 1001,
                "end": 1009,
                "value": "string",
                "raw": "'string'"
              }
            },
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
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 1044,
            "end": 1065,
            "argument": {
              "type": "MemberExpression",
              "start": 1051,
              "end": 1064,
              "object": {
                "type": "Identifier",
                "start": 1051,
                "end": 1058,
                "name": "wrapped",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1059,
                "end": 1064,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
