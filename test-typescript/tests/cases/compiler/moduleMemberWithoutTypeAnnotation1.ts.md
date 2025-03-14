moduleMemberWithoutTypeAnnotation1.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 138,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 32,
            "end": 136,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 51,
              "end": 136,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 61,
                  "end": 130,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 79,
                    "decorators": [],
                    "name": "currentNode",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 79,
                    "end": 130,
                    "async": false,
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
                          "decorators": [],
                          "name": "SyntaxNode",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 50,
              "decorators": [],
              "name": "SyntaxCursor",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 8,
        "end": 25,
        "left": {
          "type": "Identifier",
          "start": 8,
          "end": 18,
          "decorators": [],
          "name": "TypeScript",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 19,
          "end": 25,
          "decorators": [],
          "name": "Parser",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 140,
      "end": 527,
      "body": {
        "type": "TSModuleBlock",
        "start": 158,
        "end": 527,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 164,
            "end": 199,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 171,
              "end": 199,
              "body": {
                "type": "TSInterfaceBody",
                "start": 196,
                "end": 199,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 181,
                "end": 195,
                "decorators": [],
                "name": "ISyntaxElement",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
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
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 212,
              "end": 238,
              "body": {
                "type": "TSInterfaceBody",
                "start": 235,
                "end": 238,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 222,
                "end": 234,
                "decorators": [],
                "name": "ISyntaxToken",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
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
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 252,
              "end": 384,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 276,
                "end": 384,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 286,
                    "end": 378,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 303,
                      "decorators": [],
                      "name": "childIndex",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 303,
                      "end": 378,
                      "async": false,
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
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 348,
                                "end": 365,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 348,
                                  "end": 354,
                                  "decorators": [],
                                  "name": "Syntax",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 355,
                                  "end": 365,
                                  "decorators": [],
                                  "name": "childIndex",
                                  "optional": false
                                }
                              },
                              "optional": false
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
                          "start": 304,
                          "end": 325,
                          "decorators": [],
                          "name": "child",
                          "optional": false,
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
                                "decorators": [],
                                "name": "ISyntaxElement",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 258,
                "end": 275,
                "decorators": [],
                "name": "PositionedElement",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 390,
            "end": 525,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 397,
              "end": 525,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 419,
                "end": 525,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 429,
                    "end": 519,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 429,
                      "end": 440,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 440,
                      "end": 519,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 508,
                        "end": 519,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 441,
                          "end": 466,
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
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
                                "decorators": [],
                                "name": "PositionedElement",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 468,
                          "end": 487,
                          "decorators": [],
                          "name": "token",
                          "optional": false,
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
                                "decorators": [],
                                "name": "ISyntaxToken",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 489,
                          "end": 506,
                          "decorators": [],
                          "name": "fullStart",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 498,
                            "end": 506,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 500,
                              "end": 506
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 403,
                "end": 418,
                "decorators": [],
                "name": "PositionedToken",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 147,
        "end": 157,
        "decorators": [],
        "name": "TypeScript",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 529,
      "end": 871,
      "body": {
        "type": "TSModuleBlock",
        "start": 547,
        "end": 871,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 553,
            "end": 869,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 560,
              "end": 869,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 577,
                "end": 869,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 587,
                    "end": 791,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 603,
                      "decorators": [],
                      "name": "findToken",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 603,
                      "end": 791,
                      "async": false,
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
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 696,
                                  "end": 711,
                                  "decorators": [],
                                  "name": "positionedToken",
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 714,
                                  "end": 755,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 737,
                                      "end": 741,
                                      "raw": "null",
                                      "value": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 743,
                                      "end": 751,
                                      "decorators": [],
                                      "name": "position",
                                      "optional": false
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 753,
                                      "end": 754,
                                      "raw": "0",
                                      "value": 0
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 714,
                                    "end": 736,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 714,
                                      "end": 718
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 719,
                                      "end": 736,
                                      "decorators": [],
                                      "name": "findTokenInternal",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 769,
                            "end": 781,
                            "argument": {
                              "type": "Literal",
                              "start": 776,
                              "end": 780,
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
                          "start": 604,
                          "end": 620,
                          "decorators": [],
                          "name": "position",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 612,
                            "end": 620,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 614,
                              "end": 620
                            }
                          }
                        },
                        {
                          "type": "AssignmentPattern",
                          "start": 622,
                          "end": 659,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 622,
                            "end": 651,
                            "decorators": [],
                            "name": "includeSkippedTokens",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 642,
                              "end": 651,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 644,
                                "end": 651
                              }
                            }
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 654,
                            "end": 659,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ],
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
                            "decorators": [],
                            "name": "PositionedToken",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 800,
                    "end": 863,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 800,
                      "end": 817,
                      "decorators": [],
                      "name": "findTokenInternal",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 817,
                      "end": 863,
                      "async": false,
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
                          "start": 818,
                          "end": 819,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 821,
                          "end": 822,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 824,
                          "end": 825,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 566,
                "end": 576,
                "decorators": [],
                "name": "SyntaxNode",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 536,
        "end": 546,
        "decorators": [],
        "name": "TypeScript",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 873,
      "end": 1200,
      "body": {
        "type": "TSModuleBlock",
        "start": 898,
        "end": 1200,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 904,
            "end": 936,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 911,
              "end": 936,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 933,
                "end": 936,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 920,
                "end": 930,
                "decorators": [],
                "name": "childIndex",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 942,
            "end": 1198,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 949,
              "end": 1198,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1016,
                "end": 1198,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1026,
                    "end": 1192,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1034,
                      "end": 1051,
                      "decorators": [],
                      "name": "findTokenInternal",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1051,
                      "end": 1192,
                      "async": false,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1157,
                                  "end": 1163,
                                  "decorators": [],
                                  "name": "parent",
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
                                  "decorators": [],
                                  "name": "fullStart",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 1141,
                                "end": 1156,
                                "decorators": [],
                                "name": "PositionedToken",
                                "optional": false
                              }
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
                          "start": 1052,
                          "end": 1077,
                          "decorators": [],
                          "name": "parent",
                          "optional": false,
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
                                "decorators": [],
                                "name": "PositionedElement",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1079,
                          "end": 1095,
                          "decorators": [],
                          "name": "position",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1087,
                            "end": 1095,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1089,
                              "end": 1095
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1097,
                          "end": 1114,
                          "decorators": [],
                          "name": "fullStart",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1106,
                            "end": 1114,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1108,
                              "end": 1114
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 955,
                "end": 991,
                "decorators": [],
                "name": "VariableWidthTokenWithTrailingTrivia",
                "optional": false
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1003,
                  "end": 1015,
                  "expression": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1015,
                    "decorators": [],
                    "name": "ISyntaxToken",
                    "optional": false
                  }
                }
              ],
              "superClass": null
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
        "start": 880,
        "end": 897,
        "left": {
          "type": "Identifier",
          "start": 880,
          "end": 890,
          "decorators": [],
          "name": "TypeScript",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 891,
          "end": 897,
          "decorators": [],
          "name": "Syntax",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
