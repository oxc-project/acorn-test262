__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 19,
                        "end": 23
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 25,
                            "end": 28
                          },
                          "start": 25,
                          "end": 28
                        },
                        "start": 23,
                        "end": 28
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 19,
                      "end": 29
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 30,
                        "end": 34
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 36,
                          "end": 42
                        },
                        "start": 34,
                        "end": 42
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 30,
                      "end": 42
                    }
                  ],
                  "start": 17,
                  "end": 44
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 49,
                        "end": 53
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 55,
                            "end": 56
                          },
                          "start": 55,
                          "end": 56
                        },
                        "start": 53,
                        "end": 56
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 49,
                      "end": 57
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 62
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 64,
                          "end": 70
                        },
                        "start": 62,
                        "end": 70
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 58,
                      "end": 70
                    }
                  ],
                  "start": 47,
                  "end": 72
                }
              ],
              "start": 17,
              "end": 72
            },
            "start": 15,
            "end": 72
          },
          "start": 12,
          "end": 72
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 94
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 99
                  },
                  "optional": false,
                  "computed": false,
                  "start": 91,
                  "end": 99
                },
                "prefix": true,
                "start": 84,
                "end": 99
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 104,
                "end": 112
              },
              "start": 84,
              "end": 112
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 127
                  },
                  "directive": null,
                  "start": 124,
                  "end": 128
                }
              ],
              "start": 114,
              "end": 166
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 189
                  },
                  "directive": null,
                  "start": 186,
                  "end": 190
                }
              ],
              "start": 176,
              "end": 226
            },
            "start": 80,
            "end": 226
          }
        ],
        "start": 74,
        "end": 228
      },
      "expression": false,
      "start": 0,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 241
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 253
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 255,
                            "end": 258
                          },
                          "start": 255,
                          "end": 258
                        },
                        "start": 253,
                        "end": 258
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 249,
                      "end": 259
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 264
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 266,
                          "end": 272
                        },
                        "start": 264,
                        "end": 272
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 260,
                      "end": 272
                    }
                  ],
                  "start": 247,
                  "end": 274
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 279,
                        "end": 283
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 285,
                            "end": 286
                          },
                          "start": 285,
                          "end": 286
                        },
                        "start": 283,
                        "end": 286
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 279,
                      "end": 287
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 292
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 294,
                          "end": 300
                        },
                        "start": 292,
                        "end": 300
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 288,
                      "end": 300
                    }
                  ],
                  "start": 277,
                  "end": 302
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 305,
                  "end": 314
                }
              ],
              "start": 247,
              "end": 314
            },
            "start": 245,
            "end": 314
          },
          "start": 242,
          "end": 314
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 336
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 342
                    },
                    "optional": true,
                    "computed": false,
                    "start": 333,
                    "end": 342
                  },
                  "start": 333,
                  "end": 342
                },
                "prefix": true,
                "start": 326,
                "end": 342
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 347,
                "end": 355
              },
              "start": 326,
              "end": 355
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 370
                  },
                  "directive": null,
                  "start": 367,
                  "end": 371
                }
              ],
              "start": 357,
              "end": 409
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 432
                  },
                  "directive": null,
                  "start": 429,
                  "end": 433
                }
              ],
              "start": 419,
              "end": 481
            },
            "start": 322,
            "end": 481
          }
        ],
        "start": 316,
        "end": 483
      },
      "expression": false,
      "start": 230,
      "end": 483
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrappedStringOr",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 527
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 529
          }
        ],
        "start": 527,
        "end": 530
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 540
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  },
                  "start": 541,
                  "end": 549
                },
                "accessibility": null,
                "static": false,
                "start": 535,
                "end": 549
              }
            ],
            "start": 533,
            "end": 551
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 561
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 565
                    },
                    "typeArguments": null,
                    "start": 564,
                    "end": 565
                  },
                  "start": 562,
                  "end": 565
                },
                "accessibility": null,
                "static": false,
                "start": 556,
                "end": 565
              }
            ],
            "start": 554,
            "end": 567
          }
        ],
        "start": 533,
        "end": 567
      },
      "declare": false,
      "start": 507,
      "end": 568
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "numberOk",
        "optional": false,
        "typeAnnotation": null,
        "start": 579,
        "end": 587
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 597,
                    "end": 612
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 613,
                        "end": 619
                      }
                    ],
                    "start": 612,
                    "end": 620
                  },
                  "start": 597,
                  "end": 620
                },
                {
                  "type": "TSNullKeyword",
                  "start": 623,
                  "end": 627
                }
              ],
              "start": 597,
              "end": 627
            },
            "start": 595,
            "end": 627
          },
          "start": 588,
          "end": 627
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 646,
                      "end": 653
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 655,
                      "end": 660
                    },
                    "optional": true,
                    "computed": false,
                    "start": 646,
                    "end": 660
                  },
                  "start": 646,
                  "end": 660
                },
                "prefix": true,
                "start": 639,
                "end": 660
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 665,
                "end": 673
              },
              "start": 639,
              "end": 673
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 692,
                    "end": 696
                  },
                  "start": 685,
                  "end": 697
                }
              ],
              "start": 675,
              "end": 703
            },
            "alternate": null,
            "start": 635,
            "end": 703
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 722
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 728
              },
              "optional": false,
              "computed": false,
              "start": 715,
              "end": 728
            },
            "start": 708,
            "end": 729
          }
        ],
        "start": 629,
        "end": 731
      },
      "expression": false,
      "start": 570,
      "end": 731
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "booleanBad",
        "optional": false,
        "typeAnnotation": null,
        "start": 742,
        "end": 752
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 777
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 778,
                        "end": 785
                      }
                    ],
                    "start": 777,
                    "end": 786
                  },
                  "start": 762,
                  "end": 786
                },
                {
                  "type": "TSNullKeyword",
                  "start": 789,
                  "end": 793
                }
              ],
              "start": 762,
              "end": 793
            },
            "start": 760,
            "end": 793
          },
          "start": 753,
          "end": 793
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 819
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 821,
                      "end": 826
                    },
                    "optional": true,
                    "computed": false,
                    "start": 812,
                    "end": 826
                  },
                  "start": 812,
                  "end": 826
                },
                "prefix": true,
                "start": 805,
                "end": 826
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 831,
                "end": 839
              },
              "start": 805,
              "end": 839
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 858,
                    "end": 862
                  },
                  "start": 851,
                  "end": 863
                }
              ],
              "start": 841,
              "end": 869
            },
            "alternate": null,
            "start": 801,
            "end": 869
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 881,
                "end": 888
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 894
              },
              "optional": false,
              "computed": false,
              "start": 881,
              "end": 894
            },
            "start": 874,
            "end": 895
          }
        ],
        "start": 795,
        "end": 897
      },
      "expression": false,
      "start": 733,
      "end": 897
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "booleanFixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 920
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapped",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrappedStringOr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 930,
                    "end": 945
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 946,
                        "end": 953
                      }
                    ],
                    "start": 945,
                    "end": 954
                  },
                  "start": 930,
                  "end": 954
                },
                {
                  "type": "TSNullKeyword",
                  "start": 957,
                  "end": 961
                }
              ],
              "start": 930,
              "end": 961
            },
            "start": 928,
            "end": 961
          },
          "start": 921,
          "end": 961
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 981,
                      "end": 988
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 990,
                      "end": 995
                    },
                    "optional": true,
                    "computed": false,
                    "start": 981,
                    "end": 995
                  },
                  "start": 981,
                  "end": 995
                },
                "prefix": true,
                "start": 973,
                "end": 996
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 1001,
                "end": 1009
              },
              "start": 973,
              "end": 1009
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1028,
                    "end": 1032
                  },
                  "start": 1021,
                  "end": 1033
                }
              ],
              "start": 1011,
              "end": 1039
            },
            "alternate": null,
            "start": 969,
            "end": 1039
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "wrapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1058
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1064
              },
              "optional": false,
              "computed": false,
              "start": 1051,
              "end": 1064
            },
            "start": 1044,
            "end": 1065
          }
        ],
        "start": 963,
        "end": 1067
      },
      "expression": false,
      "start": 899,
      "end": 1067
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1067
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 19,
    "end": 23,
    "range": [
      19,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 25,
    "end": 28,
    "range": [
      25,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 30,
    "end": 34,
    "range": [
      30,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 49,
    "end": 53,
    "range": [
      49,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 58,
    "end": 62,
    "range": [
      58,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 80,
    "end": 82,
    "range": [
      80,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 95,
    "end": 99,
    "range": [
      95,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 100,
    "end": 103,
    "range": [
      100,
      103
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 104,
    "end": 112,
    "range": [
      104,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 124,
    "end": 127,
    "range": [
      124,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 171,
    "end": 175,
    "range": [
      171,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238,
    "range": [
      230,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 239,
    "end": 241,
    "range": [
      239,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 242,
    "end": 245,
    "range": [
      242,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 249,
    "end": 253,
    "range": [
      249,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 255,
    "end": 258,
    "range": [
      255,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 260,
    "end": 264,
    "range": [
      260,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 279,
    "end": 283,
    "range": [
      279,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 288,
    "end": 292,
    "range": [
      288,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 294,
    "end": 300,
    "range": [
      294,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 305,
    "end": 314,
    "range": [
      305,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 322,
    "end": 324,
    "range": [
      322,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 326,
    "end": 332,
    "range": [
      326,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 333,
    "end": 336,
    "range": [
      333,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 336,
    "end": 338,
    "range": [
      336,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 338,
    "end": 342,
    "range": [
      338,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 343,
    "end": 346,
    "range": [
      343,
      346
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 347,
    "end": 355,
    "range": [
      347,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 367,
    "end": 370,
    "range": [
      367,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 414,
    "end": 418,
    "range": [
      414,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 429,
    "end": 432,
    "range": [
      429,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 507,
    "end": 511,
    "range": [
      507,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedStringOr",
    "start": 512,
    "end": 527,
    "range": [
      512,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 535,
    "end": 540,
    "range": [
      535,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 556,
    "end": 561,
    "range": [
      556,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 570,
    "end": 578,
    "range": [
      570,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "numberOk",
    "start": 579,
    "end": 587,
    "range": [
      579,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 588,
    "end": 595,
    "range": [
      588,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedStringOr",
    "start": 597,
    "end": 612,
    "range": [
      597,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 623,
    "end": 627,
    "range": [
      623,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 635,
    "end": 637,
    "range": [
      635,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 639,
    "end": 645,
    "range": [
      639,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 646,
    "end": 653,
    "range": [
      646,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 655,
    "end": 660,
    "range": [
      655,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 661,
    "end": 664,
    "range": [
      661,
      664
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 665,
    "end": 673,
    "range": [
      665,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 685,
    "end": 691,
    "range": [
      685,
      691
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 692,
    "end": 696,
    "range": [
      692,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 708,
    "end": 714,
    "range": [
      708,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 715,
    "end": 722,
    "range": [
      715,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 723,
    "end": 728,
    "range": [
      723,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 733,
    "end": 741,
    "range": [
      733,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanBad",
    "start": 742,
    "end": 752,
    "range": [
      742,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 753,
    "end": 760,
    "range": [
      753,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedStringOr",
    "start": 762,
    "end": 777,
    "range": [
      762,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 778,
    "end": 785,
    "range": [
      778,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 789,
    "end": 793,
    "range": [
      789,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 801,
    "end": 803,
    "range": [
      801,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 805,
    "end": 811,
    "range": [
      805,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 812,
    "end": 819,
    "range": [
      812,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 819,
    "end": 821,
    "range": [
      819,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 821,
    "end": 826,
    "range": [
      821,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 827,
    "end": 830,
    "range": [
      827,
      830
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 831,
    "end": 839,
    "range": [
      831,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 851,
    "end": 857,
    "range": [
      851,
      857
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 858,
    "end": 862,
    "range": [
      858,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 874,
    "end": 880,
    "range": [
      874,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 881,
    "end": 888,
    "range": [
      881,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 889,
    "end": 894,
    "range": [
      889,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 899,
    "end": 907,
    "range": [
      899,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "booleanFixed",
    "start": 908,
    "end": 920,
    "range": [
      908,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 921,
    "end": 928,
    "range": [
      921,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "WrappedStringOr",
    "start": 930,
    "end": 945,
    "range": [
      930,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 946,
    "end": 953,
    "range": [
      946,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 957,
    "end": 961,
    "range": [
      957,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 969,
    "end": 971,
    "range": [
      969,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 973,
    "end": 979,
    "range": [
      973,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 981,
    "end": 988,
    "range": [
      981,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 988,
    "end": 990,
    "range": [
      988,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 990,
    "end": 995,
    "range": [
      990,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 997,
    "end": 1000,
    "range": [
      997,
      1000
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1001,
    "end": 1009,
    "range": [
      1001,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1021,
    "end": 1027,
    "range": [
      1021,
      1027
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1028,
    "end": 1032,
    "range": [
      1028,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1044,
    "end": 1050,
    "range": [
      1044,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "wrapped",
    "start": 1051,
    "end": 1058,
    "range": [
      1051,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1059,
    "end": 1064,
    "range": [
      1059,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  }
]
```
