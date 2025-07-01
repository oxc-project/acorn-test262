__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 23
          }
        ],
        "start": 12,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 49
          }
        ],
        "start": 38,
        "end": 51
      },
      "declare": false,
      "start": 26,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "accessibility": null,
            "static": false,
            "start": 66,
            "end": 75
          }
        ],
        "start": 64,
        "end": 77
      },
      "declare": false,
      "start": 52,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 86
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 99,
                "end": 103
              },
              "start": 97,
              "end": 103
            },
            "start": 95,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "typeArguments": null,
                "start": 120,
                "end": 121
              },
              "start": 118,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 122
          }
        ],
        "start": 89,
        "end": 124
      },
      "declare": false,
      "start": 79,
      "end": 124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
                },
                "typeArguments": null,
                "start": 149,
                "end": 150
              },
              "start": 147,
              "end": 150
            },
            "start": 142,
            "end": 151
          }
        ],
        "start": 136,
        "end": 153
      },
      "declare": false,
      "start": 126,
      "end": 153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 172
                  },
                  "typeArguments": null,
                  "start": 171,
                  "end": 172
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 176
                  },
                  "typeArguments": null,
                  "start": 175,
                  "end": 176
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 180
                  },
                  "typeArguments": null,
                  "start": 179,
                  "end": 180
                }
              ],
              "start": 171,
              "end": 180
            },
            "start": 169,
            "end": 180
          },
          "start": 168,
          "end": 180
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 187
              },
              "typeArguments": null,
              "start": 185,
              "end": 187
            },
            "start": 183,
            "end": 187
          },
          "start": 182,
          "end": 187
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BB",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 194
              },
              "typeArguments": null,
              "start": 192,
              "end": 194
            },
            "start": 190,
            "end": 194
          },
          "start": 189,
          "end": 194
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "AB",
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
                    "name": "AA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 202
                  },
                  "typeArguments": null,
                  "start": 200,
                  "end": 202
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 207
                  },
                  "typeArguments": null,
                  "start": 205,
                  "end": 207
                }
              ],
              "start": 200,
              "end": 207
            },
            "start": 198,
            "end": 207
          },
          "start": 196,
          "end": 207
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "start": 219,
              "end": 233
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 246
                  },
                  "directive": null,
                  "start": 245,
                  "end": 247
                }
              ],
              "start": 235,
              "end": 259
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 280
                  },
                  "directive": null,
                  "start": 279,
                  "end": 281
                }
              ],
              "start": 269,
              "end": 297
            },
            "start": 215,
            "end": 297
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 320
              },
              "start": 306,
              "end": 320
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 333
                  },
                  "directive": null,
                  "start": 332,
                  "end": 334
                }
              ],
              "start": 322,
              "end": 346
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "directive": null,
                  "start": 366,
                  "end": 368
                }
              ],
              "start": 356,
              "end": 384
            },
            "start": 302,
            "end": 384
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 394
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 408
              },
              "start": 393,
              "end": 408
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 421
                  },
                  "directive": null,
                  "start": 420,
                  "end": 422
                }
              ],
              "start": 410,
              "end": 438
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 459
                  },
                  "directive": null,
                  "start": 458,
                  "end": 460
                }
              ],
              "start": 448,
              "end": 480
            },
            "start": 389,
            "end": 480
          }
        ],
        "start": 209,
        "end": 482
      },
      "expression": false,
      "start": 155,
      "end": 482
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 496
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 505,
              "end": 508
            },
            "start": 503,
            "end": 508
          },
          "start": 497,
          "end": 508
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 519,
              "end": 522
            },
            "start": 517,
            "end": 522
          },
          "start": 510,
          "end": 522
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
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 540
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 559
              },
              "start": 534,
              "end": 559
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 571,
                        "end": 577
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "__then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 584
                      },
                      "optional": false,
                      "computed": false,
                      "start": 571,
                      "end": 584
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 571,
                    "end": 586
                  },
                  "directive": null,
                  "start": 571,
                  "end": 587
                }
              ],
              "start": 561,
              "end": 593
            },
            "alternate": null,
            "start": 530,
            "end": 593
          }
        ],
        "start": 524,
        "end": 595
      },
      "expression": false,
      "start": 484,
      "end": 595
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 625,
        "end": 636
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 653
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "check",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 672
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 676,
                      "end": 679
                    },
                    "start": 674,
                    "end": 679
                  },
                  "start": 673,
                  "end": 679
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 705,
                              "end": 706
                            },
                            "prefix": true,
                            "start": 698,
                            "end": 706
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "object",
                            "raw": "\"object\"",
                            "start": 711,
                            "end": 719
                          },
                          "start": 698,
                          "end": 719
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 723,
                            "end": 724
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 729,
                            "end": 733
                          },
                          "start": 723,
                          "end": 733
                        },
                        "start": 698,
                        "end": 733
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 737,
                          "end": 738
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Person",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 750,
                          "end": 756
                        },
                        "start": 737,
                        "end": 756
                      },
                      "start": 698,
                      "end": 756
                    },
                    "start": 691,
                    "end": 757
                  }
                ],
                "start": 681,
                "end": 763
              },
              "expression": false,
              "start": 672,
              "end": 763
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 660,
            "end": 763
          }
        ],
        "start": 654,
        "end": 769
      },
      "abstract": false,
      "declare": false,
      "start": 619,
      "end": 769
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 780
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "PersonMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 798
            },
            "typeArguments": null,
            "arguments": [],
            "start": 783,
            "end": 800
          },
          "definite": false,
          "start": 777,
          "end": 800
        }
      ],
      "declare": false,
      "start": 771,
      "end": 801
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 809,
        "end": 815
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "work",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 826
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 830,
                  "end": 834
                },
                "start": 828,
                "end": 834
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 837,
                          "end": 844
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 845,
                          "end": 848
                        },
                        "optional": false,
                        "computed": false,
                        "start": 837,
                        "end": 848
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "work",
                          "raw": "\"work\"",
                          "start": 849,
                          "end": 855
                        }
                      ],
                      "optional": false,
                      "start": 837,
                      "end": 856
                    },
                    "directive": null,
                    "start": 837,
                    "end": 856
                  }
                ],
                "start": 835,
                "end": 858
              },
              "expression": false,
              "start": 826,
              "end": 858
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 822,
            "end": 858
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sayHi",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 868
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 872,
                  "end": 876
                },
                "start": 870,
                "end": 876
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 879,
                          "end": 886
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 887,
                          "end": 890
                        },
                        "optional": false,
                        "computed": false,
                        "start": 879,
                        "end": 890
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Hi",
                          "raw": "\"Hi\"",
                          "start": 891,
                          "end": 895
                        }
                      ],
                      "optional": false,
                      "start": 879,
                      "end": 896
                    },
                    "directive": null,
                    "start": 879,
                    "end": 896
                  }
                ],
                "start": 877,
                "end": 898
              },
              "expression": false,
              "start": 868,
              "end": 898
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 863,
            "end": 898
          }
        ],
        "start": 816,
        "end": 900
      },
      "abstract": false,
      "declare": false,
      "start": 803,
      "end": 900
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Car",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 911
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sayHi",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 923
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 927,
                  "end": 931
                },
                "start": 925,
                "end": 931
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 934,
                          "end": 941
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 942,
                          "end": 945
                        },
                        "optional": false,
                        "computed": false,
                        "start": 934,
                        "end": 945
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Wof Wof",
                          "raw": "\"Wof Wof\"",
                          "start": 946,
                          "end": 955
                        }
                      ],
                      "optional": false,
                      "start": 934,
                      "end": 956
                    },
                    "directive": null,
                    "start": 934,
                    "end": 956
                  }
                ],
                "start": 932,
                "end": 958
              },
              "expression": false,
              "start": 923,
              "end": 958
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 918,
            "end": 958
          }
        ],
        "start": 912,
        "end": 960
      },
      "abstract": false,
      "declare": false,
      "start": 902,
      "end": 960
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 971,
        "end": 975
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "Person",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 979,
                    "end": 985
                  },
                  "typeArguments": null,
                  "start": 979,
                  "end": 985
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Car",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 988,
                    "end": 991
                  },
                  "typeArguments": null,
                  "start": 988,
                  "end": 991
                }
              ],
              "start": 979,
              "end": 991
            },
            "start": 977,
            "end": 991
          },
          "start": 976,
          "end": 991
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
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1004
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1019
              },
              "start": 1003,
              "end": 1019
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1038
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1039,
                        "end": 1042
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1031,
                      "end": 1042
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Is Person",
                        "raw": "\"Is Person\"",
                        "start": 1043,
                        "end": 1054
                      }
                    ],
                    "optional": false,
                    "start": 1031,
                    "end": 1055
                  },
                  "directive": null,
                  "start": 1031,
                  "end": 1056
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1066,
                          "end": 1067
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Person",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1071,
                            "end": 1077
                          },
                          "typeArguments": null,
                          "start": 1071,
                          "end": 1077
                        },
                        "start": 1066,
                        "end": 1077
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "work",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1083
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1065,
                      "end": 1083
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1065,
                    "end": 1085
                  },
                  "directive": null,
                  "start": 1065,
                  "end": 1085
                }
              ],
              "start": 1021,
              "end": 1091
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1111,
                        "end": 1118
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1119,
                        "end": 1122
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1111,
                      "end": 1122
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Is Car",
                        "raw": "\"Is Car\"",
                        "start": 1123,
                        "end": 1131
                      }
                    ],
                    "optional": false,
                    "start": 1111,
                    "end": 1132
                  },
                  "directive": null,
                  "start": 1111,
                  "end": 1132
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1141,
                        "end": 1142
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sayHi",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1143,
                        "end": 1148
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1141,
                      "end": 1148
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1141,
                    "end": 1150
                  },
                  "directive": null,
                  "start": 1141,
                  "end": 1151
                }
              ],
              "start": 1101,
              "end": 1157
            },
            "start": 999,
            "end": 1157
          }
        ],
        "start": 993,
        "end": 1159
      },
      "expression": false,
      "start": 962,
      "end": 1159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1159
}
```
