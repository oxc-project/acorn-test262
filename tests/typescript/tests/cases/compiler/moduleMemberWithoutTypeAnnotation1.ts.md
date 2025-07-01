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
          "start": 7,
          "end": 17
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parser",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 24
        },
        "start": 7,
        "end": 24
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
              "start": 37,
              "end": 49
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
                    "start": 67,
                    "end": 78
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
                          "start": 82,
                          "end": 92
                        },
                        "typeArguments": null,
                        "start": 82,
                        "end": 92
                      },
                      "start": 80,
                      "end": 92
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
                            "start": 114,
                            "end": 118
                          },
                          "start": 107,
                          "end": 119
                        }
                      ],
                      "start": 93,
                      "end": 129
                    },
                    "expression": false,
                    "start": 78,
                    "end": 129
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 60,
                  "end": 129
                }
              ],
              "start": 50,
              "end": 135
            },
            "abstract": false,
            "declare": false,
            "start": 31,
            "end": 135
          }
        ],
        "start": 25,
        "end": 137
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 137
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 156
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
                "start": 180,
                "end": 194
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 195,
                "end": 198
              },
              "declare": false,
              "start": 170,
              "end": 198
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 163,
            "end": 198
          },
          {
            "type": "EmptyStatement",
            "start": 198,
            "end": 199
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
                "start": 221,
                "end": 233
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 234,
                "end": 237
              },
              "declare": false,
              "start": 211,
              "end": 237
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 204,
            "end": 237
          },
          {
            "type": "EmptyStatement",
            "start": 237,
            "end": 238
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
                "start": 257,
                "end": 274
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
                      "start": 292,
                      "end": 302
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
                                "start": 310,
                                "end": 324
                              },
                              "typeArguments": null,
                              "start": 310,
                              "end": 324
                            },
                            "start": 308,
                            "end": 324
                          },
                          "start": 303,
                          "end": 324
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
                                  "start": 347,
                                  "end": 353
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "childIndex",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 354,
                                  "end": 364
                                },
                                "optional": false,
                                "computed": false,
                                "start": 347,
                                "end": 364
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 347,
                              "end": 366
                            },
                            "start": 340,
                            "end": 367
                          }
                        ],
                        "start": 326,
                        "end": 377
                      },
                      "expression": false,
                      "start": 302,
                      "end": 377
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 285,
                    "end": 377
                  }
                ],
                "start": 275,
                "end": 383
              },
              "abstract": false,
              "declare": false,
              "start": 251,
              "end": 383
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 244,
            "end": 383
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
                "start": 402,
                "end": 417
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
                      "start": 428,
                      "end": 439
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
                                "start": 448,
                                "end": 465
                              },
                              "typeArguments": null,
                              "start": 448,
                              "end": 465
                            },
                            "start": 446,
                            "end": 465
                          },
                          "start": 440,
                          "end": 465
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
                                "start": 474,
                                "end": 486
                              },
                              "typeArguments": null,
                              "start": 474,
                              "end": 486
                            },
                            "start": 472,
                            "end": 486
                          },
                          "start": 467,
                          "end": 486
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
                              "start": 499,
                              "end": 505
                            },
                            "start": 497,
                            "end": 505
                          },
                          "start": 488,
                          "end": 505
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 507,
                        "end": 518
                      },
                      "expression": false,
                      "start": 439,
                      "end": 518
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 428,
                    "end": 518
                  }
                ],
                "start": 418,
                "end": 524
              },
              "abstract": false,
              "declare": false,
              "start": 396,
              "end": 524
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 389,
            "end": 524
          }
        ],
        "start": 157,
        "end": 526
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 139,
      "end": 526
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 545
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
                "start": 565,
                "end": 575
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
                      "start": 593,
                      "end": 602
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
                              "start": 613,
                              "end": 619
                            },
                            "start": 611,
                            "end": 619
                          },
                          "start": 603,
                          "end": 619
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
                                "start": 643,
                                "end": 650
                              },
                              "start": 641,
                              "end": 650
                            },
                            "start": 621,
                            "end": 650
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 653,
                            "end": 658
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 658
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
                            "start": 661,
                            "end": 676
                          },
                          "typeArguments": null,
                          "start": 661,
                          "end": 676
                        },
                        "start": 659,
                        "end": 676
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
                                  "start": 695,
                                  "end": 710
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 713,
                                      "end": 717
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "findTokenInternal",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 718,
                                      "end": 735
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 713,
                                    "end": 735
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 736,
                                      "end": 740
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "position",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 742,
                                      "end": 750
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 752,
                                      "end": 753
                                    }
                                  ],
                                  "optional": false,
                                  "start": 713,
                                  "end": 754
                                },
                                "definite": false,
                                "start": 695,
                                "end": 754
                              }
                            ],
                            "declare": false,
                            "start": 691,
                            "end": 755
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 775,
                              "end": 779
                            },
                            "start": 768,
                            "end": 780
                          }
                        ],
                        "start": 677,
                        "end": 790
                      },
                      "expression": false,
                      "start": 602,
                      "end": 790
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 586,
                    "end": 790
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
                      "start": 799,
                      "end": 816
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
                          "start": 817,
                          "end": 818
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 820,
                          "end": 821
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 823,
                          "end": 824
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
                              "start": 847,
                              "end": 851
                            },
                            "start": 840,
                            "end": 852
                          }
                        ],
                        "start": 826,
                        "end": 862
                      },
                      "expression": false,
                      "start": 816,
                      "end": 862
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 799,
                    "end": 862
                  }
                ],
                "start": 576,
                "end": 868
              },
              "abstract": false,
              "declare": false,
              "start": 559,
              "end": 868
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 552,
            "end": 868
          }
        ],
        "start": 546,
        "end": 870
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 528,
      "end": 870
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
          "start": 879,
          "end": 889
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Syntax",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 896
        },
        "start": 879,
        "end": 896
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
                "start": 919,
                "end": 929
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
                "start": 932,
                "end": 935
              },
              "expression": false,
              "start": 910,
              "end": 935
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 903,
            "end": 935
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
                "start": 954,
                "end": 990
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
                    "start": 1002,
                    "end": 1014
                  },
                  "typeArguments": null,
                  "start": 1002,
                  "end": 1014
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
                      "start": 1033,
                      "end": 1050
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
                                "start": 1059,
                                "end": 1076
                              },
                              "typeArguments": null,
                              "start": 1059,
                              "end": 1076
                            },
                            "start": 1057,
                            "end": 1076
                          },
                          "start": 1051,
                          "end": 1076
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
                              "start": 1088,
                              "end": 1094
                            },
                            "start": 1086,
                            "end": 1094
                          },
                          "start": 1078,
                          "end": 1094
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
                              "start": 1107,
                              "end": 1113
                            },
                            "start": 1105,
                            "end": 1113
                          },
                          "start": 1096,
                          "end": 1113
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
                                "start": 1140,
                                "end": 1155
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "parent",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1156,
                                  "end": 1162
                                },
                                {
                                  "type": "ThisExpression",
                                  "start": 1164,
                                  "end": 1168
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fullStart",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1170,
                                  "end": 1179
                                }
                              ],
                              "start": 1136,
                              "end": 1180
                            },
                            "start": 1129,
                            "end": 1181
                          }
                        ],
                        "start": 1115,
                        "end": 1191
                      },
                      "expression": false,
                      "start": 1050,
                      "end": 1191
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1025,
                    "end": 1191
                  }
                ],
                "start": 1015,
                "end": 1197
              },
              "abstract": false,
              "declare": false,
              "start": 948,
              "end": 1197
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 941,
            "end": 1197
          }
        ],
        "start": 897,
        "end": 1199
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 872,
      "end": 1199
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1199
}
```
