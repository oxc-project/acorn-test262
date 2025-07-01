__ESTREE_TEST__:PASS:
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
