__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1199,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 137,
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 137,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 31,
            "end": 135,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 50,
              "end": 135,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 60,
                  "end": 129,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 78,
                    "decorators": [],
                    "name": "currentNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 78,
                    "end": 129,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 93,
                      "end": 129,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 107,
                          "end": 119,
                          "argument": {
                            "type": "Literal",
                            "start": 114,
                            "end": 118,
                            "raw": "null",
                            "value": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 80,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 82,
                        "end": 92,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 92,
                          "decorators": [],
                          "name": "SyntaxNode",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 49,
              "decorators": [],
              "name": "SyntaxCursor",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 24,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 17,
          "decorators": [],
          "name": "TypeScript",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 18,
          "end": 24,
          "decorators": [],
          "name": "Parser",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 139,
      "end": 526,
      "body": {
        "type": "TSModuleBlock",
        "start": 157,
        "end": 526,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 163,
            "end": 198,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 170,
              "end": 198,
              "body": {
                "type": "TSInterfaceBody",
                "start": 195,
                "end": 198,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 180,
                "end": 194,
                "decorators": [],
                "name": "ISyntaxElement",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 198,
            "end": 199
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 204,
            "end": 237,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 211,
              "end": 237,
              "body": {
                "type": "TSInterfaceBody",
                "start": 234,
                "end": 237,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 221,
                "end": 233,
                "decorators": [],
                "name": "ISyntaxToken",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 237,
            "end": 238
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 244,
            "end": 383,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 251,
              "end": 383,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 275,
                "end": 383,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 285,
                    "end": 377,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 302,
                      "decorators": [],
                      "name": "childIndex",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 302,
                      "end": 377,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 326,
                        "end": 377,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 340,
                            "end": 367,
                            "argument": {
                              "type": "CallExpression",
                              "start": 347,
                              "end": 366,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 347,
                                "end": 364,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 347,
                                  "end": 353,
                                  "decorators": [],
                                  "name": "Syntax",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 354,
                                  "end": 364,
                                  "decorators": [],
                                  "name": "childIndex",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 303,
                          "end": 324,
                          "decorators": [],
                          "name": "child",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 308,
                            "end": 324,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 310,
                              "end": 324,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 310,
                                "end": 324,
                                "decorators": [],
                                "name": "ISyntaxElement",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 257,
                "end": 274,
                "decorators": [],
                "name": "PositionedElement",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 389,
            "end": 524,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 396,
              "end": 524,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 418,
                "end": 524,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 428,
                    "end": 518,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 439,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 439,
                      "end": 518,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 507,
                        "end": 518,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 440,
                          "end": 465,
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 446,
                            "end": 465,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 448,
                              "end": 465,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 448,
                                "end": 465,
                                "decorators": [],
                                "name": "PositionedElement",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 467,
                          "end": 486,
                          "decorators": [],
                          "name": "token",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 472,
                            "end": 486,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 474,
                              "end": 486,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 474,
                                "end": 486,
                                "decorators": [],
                                "name": "ISyntaxToken",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 488,
                          "end": 505,
                          "decorators": [],
                          "name": "fullStart",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 497,
                            "end": 505,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 499,
                              "end": 505
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 402,
                "end": 417,
                "decorators": [],
                "name": "PositionedToken",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 156,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 528,
      "end": 870,
      "body": {
        "type": "TSModuleBlock",
        "start": 546,
        "end": 870,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 552,
            "end": 868,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 559,
              "end": 868,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 576,
                "end": 868,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 586,
                    "end": 790,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 602,
                      "decorators": [],
                      "name": "findToken",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 602,
                      "end": 790,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 677,
                        "end": 790,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 691,
                            "end": 755,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 695,
                                "end": 754,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 695,
                                  "end": 710,
                                  "decorators": [],
                                  "name": "positionedToken",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 713,
                                  "end": 754,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 736,
                                      "end": 740,
                                      "raw": "null",
                                      "value": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 742,
                                      "end": 750,
                                      "decorators": [],
                                      "name": "position",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 752,
                                      "end": 753,
                                      "raw": "0",
                                      "value": 0
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 713,
                                    "end": 735,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 713,
                                      "end": 717
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 718,
                                      "end": 735,
                                      "decorators": [],
                                      "name": "findTokenInternal",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 768,
                            "end": 780,
                            "argument": {
                              "type": "Literal",
                              "start": 775,
                              "end": 779,
                              "raw": "null",
                              "value": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 603,
                          "end": 619,
                          "decorators": [],
                          "name": "position",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 611,
                            "end": 619,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 613,
                              "end": 619
                            }
                          }
                        },
                        {
                          "type": "AssignmentPattern",
                          "start": 621,
                          "end": 658,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 621,
                            "end": 650,
                            "decorators": [],
                            "name": "includeSkippedTokens",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 641,
                              "end": 650,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 643,
                                "end": 650
                              }
                            }
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 653,
                            "end": 658,
                            "raw": "false",
                            "value": false
                          },
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 659,
                        "end": 676,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 661,
                          "end": 676,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 661,
                            "end": 676,
                            "decorators": [],
                            "name": "PositionedToken",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 799,
                    "end": 862,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 799,
                      "end": 816,
                      "decorators": [],
                      "name": "findTokenInternal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 816,
                      "end": 862,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 826,
                        "end": 862,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 840,
                            "end": 852,
                            "argument": {
                              "type": "Literal",
                              "start": 847,
                              "end": 851,
                              "raw": "null",
                              "value": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 817,
                          "end": 818,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 820,
                          "end": 821,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 823,
                          "end": 824,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 565,
                "end": 575,
                "decorators": [],
                "name": "SyntaxNode",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 545,
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 872,
      "end": 1199,
      "body": {
        "type": "TSModuleBlock",
        "start": 897,
        "end": 1199,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 903,
            "end": 935,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 910,
              "end": 935,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 932,
                "end": 935,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 919,
                "end": 929,
                "decorators": [],
                "name": "childIndex",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 941,
            "end": 1197,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 948,
              "end": 1197,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1015,
                "end": 1197,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1025,
                    "end": 1191,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1033,
                      "end": 1050,
                      "decorators": [],
                      "name": "findTokenInternal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1050,
                      "end": 1191,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1115,
                        "end": 1191,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1129,
                            "end": 1181,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1136,
                              "end": 1180,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1156,
                                  "end": 1162,
                                  "decorators": [],
                                  "name": "parent",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "ThisExpression",
                                  "start": 1164,
                                  "end": 1168
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1170,
                                  "end": 1179,
                                  "decorators": [],
                                  "name": "fullStart",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 1140,
                                "end": 1155,
                                "decorators": [],
                                "name": "PositionedToken",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1051,
                          "end": 1076,
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1057,
                            "end": 1076,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1059,
                              "end": 1076,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1059,
                                "end": 1076,
                                "decorators": [],
                                "name": "PositionedElement",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1078,
                          "end": 1094,
                          "decorators": [],
                          "name": "position",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1086,
                            "end": 1094,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1088,
                              "end": 1094
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1096,
                          "end": 1113,
                          "decorators": [],
                          "name": "fullStart",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1105,
                            "end": 1113,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1107,
                              "end": 1113
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 954,
                "end": 990,
                "decorators": [],
                "name": "VariableWidthTokenWithTrailingTrivia",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1002,
                  "end": 1014,
                  "expression": {
                    "type": "Identifier",
                    "start": 1002,
                    "end": 1014,
                    "decorators": [],
                    "name": "ISyntaxToken",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 879,
        "end": 896,
        "left": {
          "type": "Identifier",
          "start": 879,
          "end": 889,
          "decorators": [],
          "name": "TypeScript",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 890,
          "end": 896,
          "decorators": [],
          "name": "Syntax",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
