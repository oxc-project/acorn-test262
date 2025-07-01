__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "window",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 53
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 66
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ThisExpression",
                    "start": 75,
                    "end": 79
                  },
                  "id": null,
                  "generator": false,
                  "start": 69,
                  "end": 79
                },
                "definite": false,
                "start": 65,
                "end": 79
              }
            ],
            "declare": false,
            "start": 61,
            "end": 80
          }
        ],
        "start": 55,
        "end": 82
      },
      "start": 41,
      "end": 82
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 138
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
              "start": 145,
              "end": 156
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 160,
                      "end": 163
                    },
                    "start": 158,
                    "end": 163
                  },
                  "start": 157,
                  "end": 163
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 165,
                "end": 168
              },
              "expression": false,
              "start": 156,
              "end": 168
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 168
          }
        ],
        "start": 139,
        "end": 170
      },
      "abstract": false,
      "declare": false,
      "start": 128,
      "end": 170
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 185
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 198
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 216
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 229,
                        "end": 234
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ThisExpression",
                            "start": 241,
                            "end": 245
                          },
                          "id": null,
                          "generator": false,
                          "start": 235,
                          "end": 245
                        }
                      ],
                      "optional": false,
                      "start": 229,
                      "end": 246
                    },
                    "directive": null,
                    "start": 229,
                    "end": 247
                  }
                ],
                "start": 219,
                "end": 253
              },
              "expression": false,
              "start": 216,
              "end": 253
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 205,
            "end": 253
          }
        ],
        "start": 199,
        "end": 255
      },
      "abstract": false,
      "declare": false,
      "start": 172,
      "end": 255
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
            "name": "window",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 302
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setTimeout",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 313
          },
          "optional": false,
          "computed": false,
          "start": 296,
          "end": 313
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 320,
              "end": 324
            },
            "id": null,
            "generator": false,
            "start": 314,
            "end": 324
          },
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 326,
            "end": 329
          }
        ],
        "optional": false,
        "start": 296,
        "end": 330
      },
      "directive": null,
      "start": 296,
      "end": 331
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 385
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 392,
                    "end": 398
                  },
                  "start": 390,
                  "end": 398
                },
                "start": 389,
                "end": 398
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 403,
              "end": 405
            },
            "id": null,
            "generator": false,
            "start": 388,
            "end": 405
          },
          "definite": false,
          "start": 382,
          "end": 405
        }
      ],
      "declare": false,
      "start": 378,
      "end": 406
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 422,
                            "end": 428
                          },
                          "start": 420,
                          "end": 428
                        },
                        "start": 419,
                        "end": 428
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 431,
                        "end": 437
                      },
                      "start": 429,
                      "end": 437
                    },
                    "start": 418,
                    "end": 438
                  }
                ],
                "start": 416,
                "end": 440
              },
              "start": 414,
              "end": 440
            },
            "start": 411,
            "end": 440
          },
          "init": null,
          "definite": false,
          "start": 411,
          "end": 440
        }
      ],
      "declare": false,
      "start": 407,
      "end": 441
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 456
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 464,
                        "end": 470
                      },
                      "start": 462,
                      "end": 470
                    },
                    "start": 461,
                    "end": 470
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 475,
                  "end": 477
                },
                "id": null,
                "generator": false,
                "start": 460,
                "end": 477
              }
            ],
            "start": 459,
            "end": 478
          },
          "definite": false,
          "start": 453,
          "end": 478
        }
      ],
      "declare": false,
      "start": 449,
      "end": 479
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 495,
                              "end": 501
                            },
                            "start": 493,
                            "end": 501
                          },
                          "start": 492,
                          "end": 501
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 504,
                          "end": 510
                        },
                        "start": 502,
                        "end": 510
                      },
                      "start": 491,
                      "end": 511
                    }
                  ],
                  "start": 489,
                  "end": 513
                },
                "start": 489,
                "end": 515
              },
              "start": 487,
              "end": 515
            },
            "start": 484,
            "end": 515
          },
          "init": null,
          "definite": false,
          "start": 484,
          "end": 515
        }
      ],
      "declare": false,
      "start": 480,
      "end": 516
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 593
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 601
            },
            "initializer": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 610,
                "end": 611
              },
              "id": null,
              "generator": false,
              "start": 604,
              "end": 611
            },
            "computed": false,
            "start": 600,
            "end": 611
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 636
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ThisExpression",
                  "start": 646,
                  "end": 650
                },
                "id": null,
                "generator": false,
                "start": 640,
                "end": 650
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 658
              },
              "optional": false,
              "computed": false,
              "start": 639,
              "end": 658
            },
            "computed": false,
            "start": 635,
            "end": 658
          }
        ],
        "start": 594,
        "end": 693
      },
      "const": false,
      "declare": false,
      "start": 587,
      "end": 693
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 751,
        "end": 752
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 770,
                    "end": 771
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 775,
                        "end": 776
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 781,
                      "end": 783
                    },
                    "id": null,
                    "generator": false,
                    "start": 774,
                    "end": 783
                  },
                  "definite": false,
                  "start": 770,
                  "end": 783
                }
              ],
              "declare": false,
              "start": 766,
              "end": 784
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 759,
            "end": 784
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 794
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 798,
                      "end": 799
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
                  "id": null,
                  "generator": false,
                  "start": 797,
                  "end": 805
                },
                "definite": false,
                "start": 793,
                "end": 805
              }
            ],
            "declare": false,
            "start": 789,
            "end": 806
          }
        ],
        "start": 753,
        "end": 808
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 744,
      "end": 808
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 905,
        "end": 907
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "WithStatement",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 971
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 987,
                        "end": 988
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "ThisExpression",
                          "start": 997,
                          "end": 1001
                        },
                        "id": null,
                        "generator": false,
                        "start": 991,
                        "end": 1001
                      },
                      "definite": false,
                      "start": 987,
                      "end": 1001
                    }
                  ],
                  "declare": false,
                  "start": 983,
                  "end": 1002
                }
              ],
              "start": 973,
              "end": 1008
            },
            "start": 959,
            "end": 1008
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1072
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
                    "start": 1083,
                    "end": 1094
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1098,
                            "end": 1101
                          },
                          "start": 1096,
                          "end": 1101
                        },
                        "start": 1095,
                        "end": 1101
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1103,
                      "end": 1106
                    },
                    "expression": false,
                    "start": 1094,
                    "end": 1106
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1083,
                  "end": 1106
                }
              ],
              "start": 1073,
              "end": 1112
            },
            "abstract": false,
            "declare": false,
            "start": 1062,
            "end": 1112
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 1124,
              "end": 1131
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1140,
              "end": 1144
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1155,
                    "end": 1166
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 1183,
                              "end": 1188
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 1195,
                                  "end": 1199
                                },
                                "id": null,
                                "generator": false,
                                "start": 1189,
                                "end": 1199
                              }
                            ],
                            "optional": false,
                            "start": 1183,
                            "end": 1200
                          },
                          "directive": null,
                          "start": 1183,
                          "end": 1201
                        }
                      ],
                      "start": 1169,
                      "end": 1211
                    },
                    "expression": false,
                    "start": 1166,
                    "end": 1211
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1155,
                  "end": 1211
                }
              ],
              "start": 1145,
              "end": 1217
            },
            "abstract": false,
            "declare": false,
            "start": 1118,
            "end": 1217
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
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1272
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setTimeout",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1283
                },
                "optional": false,
                "computed": false,
                "start": 1266,
                "end": 1283
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1290,
                    "end": 1294
                  },
                  "id": null,
                  "generator": false,
                  "start": 1284,
                  "end": 1294
                },
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 1296,
                  "end": 1299
                }
              ],
              "optional": false,
              "start": 1266,
              "end": 1300
            },
            "directive": null,
            "start": 1266,
            "end": 1301
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1363
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1370,
                          "end": 1376
                        },
                        "start": 1368,
                        "end": 1376
                      },
                      "start": 1367,
                      "end": 1376
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1381,
                    "end": 1383
                  },
                  "id": null,
                  "generator": false,
                  "start": 1366,
                  "end": 1383
                },
                "definite": false,
                "start": 1360,
                "end": 1383
              }
            ],
            "declare": false,
            "start": 1356,
            "end": 1384
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1404,
                                  "end": 1410
                                },
                                "start": 1402,
                                "end": 1410
                              },
                              "start": 1401,
                              "end": 1410
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1413,
                              "end": 1419
                            },
                            "start": 1411,
                            "end": 1419
                          },
                          "start": 1400,
                          "end": 1420
                        }
                      ],
                      "start": 1398,
                      "end": 1422
                    },
                    "start": 1396,
                    "end": 1422
                  },
                  "start": 1393,
                  "end": 1422
                },
                "init": null,
                "definite": false,
                "start": 1393,
                "end": 1422
              }
            ],
            "declare": false,
            "start": 1389,
            "end": 1423
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1439,
                  "end": 1442
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1450,
                              "end": 1456
                            },
                            "start": 1448,
                            "end": 1456
                          },
                          "start": 1447,
                          "end": 1456
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1461,
                        "end": 1463
                      },
                      "id": null,
                      "generator": false,
                      "start": 1446,
                      "end": 1463
                    }
                  ],
                  "start": 1445,
                  "end": 1464
                },
                "definite": false,
                "start": 1439,
                "end": 1464
              }
            ],
            "declare": false,
            "start": 1435,
            "end": 1465
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1485,
                                    "end": 1491
                                  },
                                  "start": 1483,
                                  "end": 1491
                                },
                                "start": 1482,
                                "end": 1491
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1494,
                                "end": 1500
                              },
                              "start": 1492,
                              "end": 1500
                            },
                            "start": 1481,
                            "end": 1501
                          }
                        ],
                        "start": 1479,
                        "end": 1503
                      },
                      "start": 1479,
                      "end": 1505
                    },
                    "start": 1477,
                    "end": 1505
                  },
                  "start": 1474,
                  "end": 1505
                },
                "init": null,
                "definite": false,
                "start": 1474,
                "end": 1505
              }
            ],
            "declare": false,
            "start": 1470,
            "end": 1506
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1590,
              "end": 1591
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1602,
                    "end": 1603
                  },
                  "initializer": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1612,
                      "end": 1613
                    },
                    "id": null,
                    "generator": false,
                    "start": 1606,
                    "end": 1613
                  },
                  "computed": false,
                  "start": 1602,
                  "end": 1613
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1641,
                    "end": 1642
                  },
                  "initializer": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "ThisExpression",
                        "start": 1652,
                        "end": 1656
                      },
                      "id": null,
                      "generator": false,
                      "start": 1646,
                      "end": 1656
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1658,
                      "end": 1664
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1645,
                    "end": 1664
                  },
                  "computed": false,
                  "start": 1641,
                  "end": 1664
                }
              ],
              "start": 1592,
              "end": 1670
            },
            "const": false,
            "declare": false,
            "start": 1585,
            "end": 1670
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1736,
              "end": 1737
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1759,
                          "end": 1760
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1764,
                              "end": 1765
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 1770,
                            "end": 1772
                          },
                          "id": null,
                          "generator": false,
                          "start": 1763,
                          "end": 1772
                        },
                        "definite": false,
                        "start": 1759,
                        "end": 1772
                      }
                    ],
                    "declare": false,
                    "start": 1755,
                    "end": 1773
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1748,
                  "end": 1773
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1786,
                        "end": 1787
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1791,
                            "end": 1792
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1797,
                          "end": 1798
                        },
                        "id": null,
                        "generator": false,
                        "start": 1790,
                        "end": 1798
                      },
                      "definite": false,
                      "start": 1786,
                      "end": 1798
                    }
                  ],
                  "declare": false,
                  "start": 1782,
                  "end": 1799
                }
              ],
              "start": 1738,
              "end": 1805
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 1729,
            "end": 1805
          }
        ],
        "start": 908,
        "end": 1808
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 898,
      "end": 1808
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "generic1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1880,
            "end": 1888
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1892,
                    "end": 1893
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1892,
                  "end": 1893
                }
              ],
              "start": 1891,
              "end": 1894
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
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
                      "start": 1898,
                      "end": 1899
                    },
                    "typeArguments": null,
                    "start": 1898,
                    "end": 1899
                  },
                  "start": 1896,
                  "end": 1899
                },
                "start": 1895,
                "end": 1899
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1905,
                  "end": 1906
                }
              ],
              "start": 1904,
              "end": 1907
            },
            "id": null,
            "generator": false,
            "start": 1891,
            "end": 1907
          },
          "definite": false,
          "start": 1880,
          "end": 1907
        }
      ],
      "declare": false,
      "start": 1876,
      "end": 1908
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "generic1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 1926,
                            "end": 1927
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1926,
                          "end": 1927
                        }
                      ],
                      "start": 1925,
                      "end": 1928
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
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
                              "start": 1932,
                              "end": 1933
                            },
                            "typeArguments": null,
                            "start": 1932,
                            "end": 1933
                          },
                          "start": 1930,
                          "end": 1933
                        },
                        "start": 1929,
                        "end": 1933
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1936,
                            "end": 1937
                          },
                          "typeArguments": null,
                          "start": 1936,
                          "end": 1937
                        },
                        "start": 1936,
                        "end": 1939
                      },
                      "start": 1934,
                      "end": 1939
                    },
                    "start": 1925,
                    "end": 1939
                  }
                ],
                "start": 1923,
                "end": 1941
              },
              "start": 1921,
              "end": 1941
            },
            "start": 1913,
            "end": 1941
          },
          "init": null,
          "definite": false,
          "start": 1913,
          "end": 1941
        }
      ],
      "declare": false,
      "start": 1909,
      "end": 1942
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "generic2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1978,
            "end": 1986
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 1990,
                    "end": 1991
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1990,
                  "end": 1991
                }
              ],
              "start": 1989,
              "end": 1992
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
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
                      "start": 1996,
                      "end": 1997
                    },
                    "typeArguments": null,
                    "start": 1996,
                    "end": 1997
                  },
                  "start": 1994,
                  "end": 1997
                },
                "start": 1993,
                "end": 1997
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2012,
                        "end": 2013
                      }
                    ],
                    "start": 2011,
                    "end": 2014
                  },
                  "start": 2004,
                  "end": 2015
                }
              ],
              "start": 2002,
              "end": 2017
            },
            "id": null,
            "generator": false,
            "start": 1989,
            "end": 2017
          },
          "definite": false,
          "start": 1978,
          "end": 2017
        }
      ],
      "declare": false,
      "start": 1974,
      "end": 2018
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "generic2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 2036,
                            "end": 2037
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2036,
                          "end": 2037
                        }
                      ],
                      "start": 2035,
                      "end": 2038
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
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
                              "start": 2042,
                              "end": 2043
                            },
                            "typeArguments": null,
                            "start": 2042,
                            "end": 2043
                          },
                          "start": 2040,
                          "end": 2043
                        },
                        "start": 2039,
                        "end": 2043
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2046,
                            "end": 2047
                          },
                          "typeArguments": null,
                          "start": 2046,
                          "end": 2047
                        },
                        "start": 2046,
                        "end": 2049
                      },
                      "start": 2044,
                      "end": 2049
                    },
                    "start": 2035,
                    "end": 2049
                  }
                ],
                "start": 2033,
                "end": 2051
              },
              "start": 2031,
              "end": 2051
            },
            "start": 2023,
            "end": 2051
          },
          "init": null,
          "definite": false,
          "start": 2023,
          "end": 2051
        }
      ],
      "declare": false,
      "start": 2019,
      "end": 2052
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asserted1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2141,
            "end": 2150
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2154,
              "end": 2157
            },
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2160,
                  "end": 2161
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2167,
                    "end": 2168
                  }
                ],
                "start": 2166,
                "end": 2169
              },
              "id": null,
              "generator": false,
              "start": 2159,
              "end": 2169
            },
            "start": 2153,
            "end": 2170
          },
          "definite": false,
          "start": 2141,
          "end": 2170
        }
      ],
      "declare": false,
      "start": 2137,
      "end": 2171
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asserted1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2187,
                "end": 2190
              },
              "start": 2185,
              "end": 2190
            },
            "start": 2176,
            "end": 2190
          },
          "init": null,
          "definite": false,
          "start": 2176,
          "end": 2190
        }
      ],
      "declare": false,
      "start": 2172,
      "end": 2191
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asserted2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2196,
            "end": 2205
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2209,
              "end": 2212
            },
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2215,
                  "end": 2216
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2230,
                      "end": 2231
                    },
                    "start": 2223,
                    "end": 2232
                  }
                ],
                "start": 2221,
                "end": 2234
              },
              "id": null,
              "generator": false,
              "start": 2214,
              "end": 2234
            },
            "start": 2208,
            "end": 2235
          },
          "definite": false,
          "start": 2196,
          "end": 2235
        }
      ],
      "declare": false,
      "start": 2192,
      "end": 2236
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asserted2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2252,
                "end": 2255
              },
              "start": 2250,
              "end": 2255
            },
            "start": 2241,
            "end": 2255
          },
          "init": null,
          "definite": false,
          "start": 2241,
          "end": 2255
        }
      ],
      "declare": false,
      "start": 2237,
      "end": 2256
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 2257
}
```
