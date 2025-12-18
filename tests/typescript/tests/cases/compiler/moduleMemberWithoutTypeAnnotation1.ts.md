__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 10,
    "end": 20,
    "range": [
      10,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "Parser",
    "start": 21,
    "end": 27,
    "range": [
      21,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 34,
    "end": 39,
    "range": [
      34,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxCursor",
    "start": 40,
    "end": 52,
    "range": [
      40,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "currentNode",
    "start": 70,
    "end": 81,
    "range": [
      70,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxNode",
    "start": 85,
    "end": 95,
    "range": [
      85,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 117,
    "end": 121,
    "range": [
      117,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 142,
    "end": 151,
    "range": [
      142,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 152,
    "end": 162,
    "range": [
      152,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 169,
    "end": 175,
    "range": [
      169,
      175
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 176,
    "end": 185,
    "range": [
      176,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "ISyntaxElement",
    "start": 186,
    "end": 200,
    "range": [
      186,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 210,
    "end": 216,
    "range": [
      210,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 217,
    "end": 226,
    "range": [
      217,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "ISyntaxToken",
    "start": 227,
    "end": 239,
    "range": [
      227,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 250,
    "end": 256,
    "range": [
      250,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 257,
    "end": 262,
    "range": [
      257,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "PositionedElement",
    "start": 263,
    "end": 280,
    "range": [
      263,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 291,
    "end": 297,
    "range": [
      291,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "childIndex",
    "start": 298,
    "end": 308,
    "range": [
      298,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 309,
    "end": 314,
    "range": [
      309,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "ISyntaxElement",
    "start": 316,
    "end": 330,
    "range": [
      316,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 346,
    "end": 352,
    "range": [
      346,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "Syntax",
    "start": 353,
    "end": 359,
    "range": [
      353,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "childIndex",
    "start": 360,
    "end": 370,
    "range": [
      360,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 402,
    "end": 407,
    "range": [
      402,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "PositionedToken",
    "start": 408,
    "end": 423,
    "range": [
      408,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 434,
    "end": 445,
    "range": [
      434,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 446,
    "end": 452,
    "range": [
      446,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "PositionedElement",
    "start": 454,
    "end": 471,
    "range": [
      454,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "token",
    "start": 473,
    "end": 478,
    "range": [
      473,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "ISyntaxToken",
    "start": 480,
    "end": 492,
    "range": [
      480,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "fullStart",
    "start": 494,
    "end": 503,
    "range": [
      494,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 505,
    "end": 511,
    "range": [
      505,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 534,
    "end": 543,
    "range": [
      534,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 544,
    "end": 554,
    "range": [
      544,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 561,
    "end": 567,
    "range": [
      561,
      567
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 568,
    "end": 573,
    "range": [
      568,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "SyntaxNode",
    "start": 574,
    "end": 584,
    "range": [
      574,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 595,
    "end": 601,
    "range": [
      595,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "findToken",
    "start": 602,
    "end": 611,
    "range": [
      602,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 612,
    "end": 620,
    "range": [
      612,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 622,
    "end": 628,
    "range": [
      622,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "includeSkippedTokens",
    "start": 630,
    "end": 650,
    "range": [
      630,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 652,
    "end": 659,
    "range": [
      652,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 662,
    "end": 667,
    "range": [
      662,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "PositionedToken",
    "start": 670,
    "end": 685,
    "range": [
      670,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 700,
    "end": 703,
    "range": [
      700,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "positionedToken",
    "start": 704,
    "end": 719,
    "range": [
      704,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 722,
    "end": 726,
    "range": [
      722,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "findTokenInternal",
    "start": 727,
    "end": 744,
    "range": [
      727,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 745,
    "end": 749,
    "range": [
      745,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 751,
    "end": 759,
    "range": [
      751,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 777,
    "end": 783,
    "range": [
      777,
      783
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 784,
    "end": 788,
    "range": [
      784,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "findTokenInternal",
    "start": 808,
    "end": 825,
    "range": [
      808,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 849,
    "end": 855,
    "range": [
      849,
      855
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 856,
    "end": 860,
    "range": [
      856,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 881,
    "end": 890,
    "range": [
      881,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 891,
    "end": 901,
    "range": [
      891,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "Syntax",
    "start": 902,
    "end": 908,
    "range": [
      902,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 915,
    "end": 921,
    "range": [
      915,
      921
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 922,
    "end": 930,
    "range": [
      922,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "childIndex",
    "start": 931,
    "end": 941,
    "range": [
      931,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 953,
    "end": 959,
    "range": [
      953,
      959
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 960,
    "end": 965,
    "range": [
      960,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "VariableWidthTokenWithTrailingTrivia",
    "start": 966,
    "end": 1002,
    "range": [
      966,
      1002
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1003,
    "end": 1013,
    "range": [
      1003,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "ISyntaxToken",
    "start": 1014,
    "end": 1026,
    "range": [
      1014,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1037,
    "end": 1044,
    "range": [
      1037,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "findTokenInternal",
    "start": 1045,
    "end": 1062,
    "range": [
      1045,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1063,
    "end": 1069,
    "range": [
      1063,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "PositionedElement",
    "start": 1071,
    "end": 1088,
    "range": [
      1071,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "position",
    "start": 1090,
    "end": 1098,
    "range": [
      1090,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1100,
    "end": 1106,
    "range": [
      1100,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "fullStart",
    "start": 1108,
    "end": 1117,
    "range": [
      1108,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1119,
    "end": 1125,
    "range": [
      1119,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1141,
    "end": 1147,
    "range": [
      1141,
      1147
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1148,
    "end": 1151,
    "range": [
      1148,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "PositionedToken",
    "start": 1152,
    "end": 1167,
    "range": [
      1152,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1168,
    "end": 1174,
    "range": [
      1168,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1176,
    "end": 1180,
    "range": [
      1176,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "fullStart",
    "start": 1182,
    "end": 1191,
    "range": [
      1182,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  }
]
```
