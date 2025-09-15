__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeScript",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 20
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parser",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 27
        },
        "start": 10,
        "end": 27
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SyntaxCursor",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 52
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
                    "name": "currentNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 81
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SyntaxNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 95
                        },
                        "typeArguments": null,
                        "start": 85,
                        "end": 95
                      },
                      "start": 83,
                      "end": 95
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 117,
                            "end": 121
                          },
                          "start": 110,
                          "end": 122
                        }
                      ],
                      "start": 96,
                      "end": 132
                    },
                    "expression": false,
                    "start": 81,
                    "end": 132
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 63,
                  "end": 132
                }
              ],
              "start": 53,
              "end": 138
            },
            "abstract": false,
            "declare": false,
            "start": 34,
            "end": 138
          }
        ],
        "start": 28,
        "end": 140
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 140
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 162
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ISyntaxElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 200
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 201,
                "end": 204
              },
              "declare": false,
              "start": 176,
              "end": 204
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 169,
            "end": 204
          },
          {
            "type": "EmptyStatement",
            "start": 204,
            "end": 205
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ISyntaxToken",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 239
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 240,
                "end": 243
              },
              "declare": false,
              "start": 217,
              "end": 243
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 210,
            "end": 243
          },
          {
            "type": "EmptyStatement",
            "start": 243,
            "end": 244
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositionedElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 280
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
                      "name": "childIndex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 308
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
                          "name": "child",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ISyntaxElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 330
                              },
                              "typeArguments": null,
                              "start": 316,
                              "end": 330
                            },
                            "start": 314,
                            "end": 330
                          },
                          "start": 309,
                          "end": 330
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Syntax",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 353,
                                  "end": 359
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "childIndex",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 360,
                                  "end": 370
                                },
                                "optional": false,
                                "computed": false,
                                "start": 353,
                                "end": 370
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 353,
                              "end": 372
                            },
                            "start": 346,
                            "end": 373
                          }
                        ],
                        "start": 332,
                        "end": 383
                      },
                      "expression": false,
                      "start": 308,
                      "end": 383
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 291,
                    "end": 383
                  }
                ],
                "start": 281,
                "end": 389
              },
              "abstract": false,
              "declare": false,
              "start": 257,
              "end": 389
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 250,
            "end": 389
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositionedToken",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 423
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 434,
                      "end": 445
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
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PositionedElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 454,
                                "end": 471
                              },
                              "typeArguments": null,
                              "start": 454,
                              "end": 471
                            },
                            "start": 452,
                            "end": 471
                          },
                          "start": 446,
                          "end": 471
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "token",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ISyntaxToken",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 480,
                                "end": 492
                              },
                              "typeArguments": null,
                              "start": 480,
                              "end": 492
                            },
                            "start": 478,
                            "end": 492
                          },
                          "start": 473,
                          "end": 492
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fullStart",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 505,
                              "end": 511
                            },
                            "start": 503,
                            "end": 511
                          },
                          "start": 494,
                          "end": 511
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 513,
                        "end": 524
                      },
                      "expression": false,
                      "start": 445,
                      "end": 524
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 434,
                    "end": 524
                  }
                ],
                "start": 424,
                "end": 530
              },
              "abstract": false,
              "declare": false,
              "start": 402,
              "end": 530
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 395,
            "end": 530
          }
        ],
        "start": 163,
        "end": 532
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 142,
      "end": 532
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 554
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SyntaxNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 584
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
                      "name": "findToken",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 602,
                      "end": 611
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
                          "name": "position",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 622,
                              "end": 628
                            },
                            "start": 620,
                            "end": 628
                          },
                          "start": 612,
                          "end": 628
                        },
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "includeSkippedTokens",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 652,
                                "end": 659
                              },
                              "start": 650,
                              "end": 659
                            },
                            "start": 630,
                            "end": 659
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 662,
                            "end": 667
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 630,
                          "end": 667
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PositionedToken",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 670,
                            "end": 685
                          },
                          "typeArguments": null,
                          "start": 670,
                          "end": 685
                        },
                        "start": 668,
                        "end": 685
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "positionedToken",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 704,
                                  "end": 719
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 722,
                                      "end": 726
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "findTokenInternal",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 727,
                                      "end": 744
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 722,
                                    "end": 744
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 745,
                                      "end": 749
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "position",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 751,
                                      "end": 759
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 761,
                                      "end": 762
                                    }
                                  ],
                                  "optional": false,
                                  "start": 722,
                                  "end": 763
                                },
                                "definite": false,
                                "start": 704,
                                "end": 763
                              }
                            ],
                            "declare": false,
                            "start": 700,
                            "end": 764
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 784,
                              "end": 788
                            },
                            "start": 777,
                            "end": 789
                          }
                        ],
                        "start": 686,
                        "end": 799
                      },
                      "expression": false,
                      "start": 611,
                      "end": 799
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 595,
                    "end": 799
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findTokenInternal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 808,
                      "end": 825
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 826,
                          "end": 827
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 829,
                          "end": 830
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 832,
                          "end": 833
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 856,
                              "end": 860
                            },
                            "start": 849,
                            "end": 861
                          }
                        ],
                        "start": 835,
                        "end": 871
                      },
                      "expression": false,
                      "start": 825,
                      "end": 871
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 808,
                    "end": 871
                  }
                ],
                "start": 585,
                "end": 877
              },
              "abstract": false,
              "declare": false,
              "start": 568,
              "end": 877
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 561,
            "end": 877
          }
        ],
        "start": 555,
        "end": 879
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 534,
      "end": 879
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeScript",
          "optional": false,
          "typeAnnotation": null,
          "start": 891,
          "end": 901
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Syntax",
          "optional": false,
          "typeAnnotation": null,
          "start": 902,
          "end": 908
        },
        "start": 891,
        "end": 908
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "childIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 941
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 944,
                "end": 947
              },
              "expression": false,
              "start": 922,
              "end": 947
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 915,
            "end": 947
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "VariableWidthTokenWithTrailingTrivia",
                "optional": false,
                "typeAnnotation": null,
                "start": 966,
                "end": 1002
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ISyntaxToken",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1014,
                    "end": 1026
                  },
                  "typeArguments": null,
                  "start": 1014,
                  "end": 1026
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findTokenInternal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1045,
                      "end": 1062
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
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PositionedElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1071,
                                "end": 1088
                              },
                              "typeArguments": null,
                              "start": 1071,
                              "end": 1088
                            },
                            "start": 1069,
                            "end": 1088
                          },
                          "start": 1063,
                          "end": 1088
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "position",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1100,
                              "end": 1106
                            },
                            "start": 1098,
                            "end": 1106
                          },
                          "start": 1090,
                          "end": 1106
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fullStart",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1119,
                              "end": 1125
                            },
                            "start": 1117,
                            "end": 1125
                          },
                          "start": 1108,
                          "end": 1125
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PositionedToken",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1152,
                                "end": 1167
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "parent",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1168,
                                  "end": 1174
                                },
                                {
                                  "type": "ThisExpression",
                                  "start": 1176,
                                  "end": 1180
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fullStart",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1182,
                                  "end": 1191
                                }
                              ],
                              "start": 1148,
                              "end": 1192
                            },
                            "start": 1141,
                            "end": 1193
                          }
                        ],
                        "start": 1127,
                        "end": 1203
                      },
                      "expression": false,
                      "start": 1062,
                      "end": 1203
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1037,
                    "end": 1203
                  }
                ],
                "start": 1027,
                "end": 1209
              },
              "abstract": false,
              "declare": false,
              "start": 960,
              "end": 1209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 953,
            "end": 1209
          }
        ],
        "start": 909,
        "end": 1211
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 881,
      "end": 1211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1211
}
```
