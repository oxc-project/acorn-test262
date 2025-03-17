__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 1201,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 138,
      "id": {
        "type": "TSQualifiedName",
        "start": 8,
        "end": 25,
        "left": {
          "type": "Identifier",
          "start": 8,
          "end": 18,
          "name": "TypeScript",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 19,
          "end": 25,
          "name": "Parser",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 138,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 32,
            "end": 136,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 50,
              "name": "SyntaxCursor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 51,
              "end": 136,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 61,
                  "end": 130,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 79,
                    "name": "currentNode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 79,
                    "end": 130,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 94,
                      "end": 130,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 108,
                          "end": 120,
                          "argument": {
                            "type": "Literal",
                            "start": 115,
                            "end": 119,
                            "value": null,
                            "raw": "null"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 83,
                        "end": 93,
                        "typeName": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 93,
                          "name": "SyntaxNode",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 140,
      "end": 527,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 157,
        "name": "TypeScript",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 158,
        "end": 527,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 164,
            "end": 199,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 171,
              "end": 199,
              "id": {
                "type": "Identifier",
                "start": 181,
                "end": 195,
                "name": "ISyntaxElement",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 196,
                "end": 199,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "EmptyStatement",
            "start": 199,
            "end": 200
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 205,
            "end": 238,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 212,
              "end": 238,
              "id": {
                "type": "Identifier",
                "start": 222,
                "end": 234,
                "name": "ISyntaxToken",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 235,
                "end": 238,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "EmptyStatement",
            "start": 238,
            "end": 239
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 245,
            "end": 384,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 252,
              "end": 384,
              "id": {
                "type": "Identifier",
                "start": 258,
                "end": 275,
                "name": "PositionedElement",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 276,
                "end": 384,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 286,
                    "end": 378,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 303,
                      "name": "childIndex",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 303,
                      "end": 378,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 304,
                          "end": 325,
                          "name": "child",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 309,
                            "end": 325,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 311,
                              "end": 325,
                              "typeName": {
                                "type": "Identifier",
                                "start": 311,
                                "end": 325,
                                "name": "ISyntaxElement",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 327,
                        "end": 378,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 341,
                            "end": 368,
                            "argument": {
                              "type": "CallExpression",
                              "start": 348,
                              "end": 367,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 348,
                                "end": 365,
                                "object": {
                                  "type": "Identifier",
                                  "start": 348,
                                  "end": 354,
                                  "name": "Syntax",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 355,
                                  "end": 365,
                                  "name": "childIndex",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 390,
            "end": 525,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 397,
              "end": 525,
              "id": {
                "type": "Identifier",
                "start": 403,
                "end": 418,
                "name": "PositionedToken",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 419,
                "end": 525,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 429,
                    "end": 519,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 429,
                      "end": 440,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 440,
                      "end": 519,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 441,
                          "end": 466,
                          "name": "parent",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 447,
                            "end": 466,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 449,
                              "end": 466,
                              "typeName": {
                                "type": "Identifier",
                                "start": 449,
                                "end": 466,
                                "name": "PositionedElement",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 468,
                          "end": 487,
                          "name": "token",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 473,
                            "end": 487,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 475,
                              "end": 487,
                              "typeName": {
                                "type": "Identifier",
                                "start": 475,
                                "end": 487,
                                "name": "ISyntaxToken",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 489,
                          "end": 506,
                          "name": "fullStart",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 498,
                            "end": 506,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 500,
                              "end": 506
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 508,
                        "end": 519,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 529,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 536,
        "end": 546,
        "name": "TypeScript",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 547,
        "end": 871,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 553,
            "end": 869,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 560,
              "end": 869,
              "id": {
                "type": "Identifier",
                "start": 566,
                "end": 576,
                "name": "SyntaxNode",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 577,
                "end": 869,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 587,
                    "end": 791,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 603,
                      "name": "findToken",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 603,
                      "end": 791,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 604,
                          "end": 620,
                          "name": "position",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 612,
                            "end": 620,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 614,
                              "end": 620
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "AssignmentPattern",
                          "start": 622,
                          "end": 659,
                          "left": {
                            "type": "Identifier",
                            "start": 622,
                            "end": 651,
                            "name": "includeSkippedTokens",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 642,
                              "end": 651,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 644,
                                "end": 651
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 654,
                            "end": 659,
                            "value": false,
                            "raw": "false"
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 678,
                        "end": 791,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 692,
                            "end": 756,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 696,
                                "end": 755,
                                "id": {
                                  "type": "Identifier",
                                  "start": 696,
                                  "end": 711,
                                  "name": "positionedToken",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 714,
                                  "end": 755,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 714,
                                    "end": 736,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 714,
                                      "end": 718
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 719,
                                      "end": 736,
                                      "name": "findTokenInternal",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 737,
                                      "end": 741,
                                      "value": null,
                                      "raw": "null"
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 743,
                                      "end": 751,
                                      "name": "position",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 753,
                                      "end": 754,
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 769,
                            "end": 781,
                            "argument": {
                              "type": "Literal",
                              "start": 776,
                              "end": 780,
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 660,
                        "end": 677,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 662,
                          "end": 677,
                          "typeName": {
                            "type": "Identifier",
                            "start": 662,
                            "end": 677,
                            "name": "PositionedToken",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 800,
                    "end": 863,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 800,
                      "end": 817,
                      "name": "findTokenInternal",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 817,
                      "end": 863,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 818,
                          "end": 819,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 821,
                          "end": 822,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 824,
                          "end": 825,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 827,
                        "end": 863,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 841,
                            "end": 853,
                            "argument": {
                              "type": "Literal",
                              "start": 848,
                              "end": 852,
                              "value": null,
                              "raw": "null"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 873,
      "end": 1200,
      "id": {
        "type": "TSQualifiedName",
        "start": 880,
        "end": 897,
        "left": {
          "type": "Identifier",
          "start": 880,
          "end": 890,
          "name": "TypeScript",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 891,
          "end": 897,
          "name": "Syntax",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 898,
        "end": 1200,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 904,
            "end": 936,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 911,
              "end": 936,
              "id": {
                "type": "Identifier",
                "start": 920,
                "end": 930,
                "name": "childIndex",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 933,
                "end": 936,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 942,
            "end": 1198,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 949,
              "end": 1198,
              "id": {
                "type": "Identifier",
                "start": 955,
                "end": 991,
                "name": "VariableWidthTokenWithTrailingTrivia",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1016,
                "end": 1198,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1026,
                    "end": 1192,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1034,
                      "end": 1051,
                      "name": "findTokenInternal",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1051,
                      "end": 1192,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1052,
                          "end": 1077,
                          "name": "parent",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1058,
                            "end": 1077,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1060,
                              "end": 1077,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1060,
                                "end": 1077,
                                "name": "PositionedElement",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1079,
                          "end": 1095,
                          "name": "position",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1087,
                            "end": 1095,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1089,
                              "end": 1095
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1097,
                          "end": 1114,
                          "name": "fullStart",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1106,
                            "end": 1114,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1108,
                              "end": 1114
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1116,
                        "end": 1192,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1130,
                            "end": 1182,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1137,
                              "end": 1181,
                              "callee": {
                                "type": "Identifier",
                                "start": 1141,
                                "end": 1156,
                                "name": "PositionedToken",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1157,
                                  "end": 1163,
                                  "name": "parent",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "ThisExpression",
                                  "start": 1165,
                                  "end": 1169
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1171,
                                  "end": 1180,
                                  "name": "fullStart",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1003,
                  "end": 1015,
                  "expression": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1015,
                    "name": "ISyntaxToken",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
