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
        "start": 754,
        "end": 755
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
                    "start": 773,
                    "end": 774
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
                        "start": 778,
                        "end": 779
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 784,
                      "end": 786
                    },
                    "id": null,
                    "generator": false,
                    "start": 777,
                    "end": 786
                  },
                  "definite": false,
                  "start": 773,
                  "end": 786
                }
              ],
              "declare": false,
              "start": 769,
              "end": 787
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 762,
            "end": 787
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
                  "start": 796,
                  "end": 797
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
                      "start": 801,
                      "end": 802
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 807,
                    "end": 808
                  },
                  "id": null,
                  "generator": false,
                  "start": 800,
                  "end": 808
                },
                "definite": false,
                "start": 796,
                "end": 808
              }
            ],
            "declare": false,
            "start": 792,
            "end": 809
          }
        ],
        "start": 756,
        "end": 811
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 744,
      "end": 811
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 913
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
              "start": 971,
              "end": 977
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
                        "start": 993,
                        "end": 994
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
                          "start": 1003,
                          "end": 1007
                        },
                        "id": null,
                        "generator": false,
                        "start": 997,
                        "end": 1007
                      },
                      "definite": false,
                      "start": 993,
                      "end": 1007
                    }
                  ],
                  "declare": false,
                  "start": 989,
                  "end": 1008
                }
              ],
              "start": 979,
              "end": 1014
            },
            "start": 965,
            "end": 1014
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
              "start": 1074,
              "end": 1078
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
                    "start": 1089,
                    "end": 1100
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
                            "start": 1104,
                            "end": 1107
                          },
                          "start": 1102,
                          "end": 1107
                        },
                        "start": 1101,
                        "end": 1107
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1109,
                      "end": 1112
                    },
                    "expression": false,
                    "start": 1100,
                    "end": 1112
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1089,
                  "end": 1112
                }
              ],
              "start": 1079,
              "end": 1118
            },
            "abstract": false,
            "declare": false,
            "start": 1068,
            "end": 1118
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
              "start": 1130,
              "end": 1137
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1150
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
                    "start": 1161,
                    "end": 1172
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
                              "start": 1189,
                              "end": 1194
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
                                  "start": 1201,
                                  "end": 1205
                                },
                                "id": null,
                                "generator": false,
                                "start": 1195,
                                "end": 1205
                              }
                            ],
                            "optional": false,
                            "start": 1189,
                            "end": 1206
                          },
                          "directive": null,
                          "start": 1189,
                          "end": 1207
                        }
                      ],
                      "start": 1175,
                      "end": 1217
                    },
                    "expression": false,
                    "start": 1172,
                    "end": 1217
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1161,
                  "end": 1217
                }
              ],
              "start": 1151,
              "end": 1223
            },
            "abstract": false,
            "declare": false,
            "start": 1124,
            "end": 1223
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
                  "start": 1272,
                  "end": 1278
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setTimeout",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1279,
                  "end": 1289
                },
                "optional": false,
                "computed": false,
                "start": 1272,
                "end": 1289
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
                    "start": 1296,
                    "end": 1300
                  },
                  "id": null,
                  "generator": false,
                  "start": 1290,
                  "end": 1300
                },
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 1302,
                  "end": 1305
                }
              ],
              "optional": false,
              "start": 1272,
              "end": 1306
            },
            "directive": null,
            "start": 1272,
            "end": 1307
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
                  "start": 1366,
                  "end": 1369
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
                          "start": 1376,
                          "end": 1382
                        },
                        "start": 1374,
                        "end": 1382
                      },
                      "start": 1373,
                      "end": 1382
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1387,
                    "end": 1389
                  },
                  "id": null,
                  "generator": false,
                  "start": 1372,
                  "end": 1389
                },
                "definite": false,
                "start": 1366,
                "end": 1389
              }
            ],
            "declare": false,
            "start": 1362,
            "end": 1390
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
                                  "start": 1410,
                                  "end": 1416
                                },
                                "start": 1408,
                                "end": 1416
                              },
                              "start": 1407,
                              "end": 1416
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1419,
                              "end": 1425
                            },
                            "start": 1417,
                            "end": 1425
                          },
                          "start": 1406,
                          "end": 1426
                        }
                      ],
                      "start": 1404,
                      "end": 1428
                    },
                    "start": 1402,
                    "end": 1428
                  },
                  "start": 1399,
                  "end": 1428
                },
                "init": null,
                "definite": false,
                "start": 1399,
                "end": 1428
              }
            ],
            "declare": false,
            "start": 1395,
            "end": 1429
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
                  "start": 1445,
                  "end": 1448
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
                              "start": 1456,
                              "end": 1462
                            },
                            "start": 1454,
                            "end": 1462
                          },
                          "start": 1453,
                          "end": 1462
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1467,
                        "end": 1469
                      },
                      "id": null,
                      "generator": false,
                      "start": 1452,
                      "end": 1469
                    }
                  ],
                  "start": 1451,
                  "end": 1470
                },
                "definite": false,
                "start": 1445,
                "end": 1470
              }
            ],
            "declare": false,
            "start": 1441,
            "end": 1471
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
                                    "start": 1491,
                                    "end": 1497
                                  },
                                  "start": 1489,
                                  "end": 1497
                                },
                                "start": 1488,
                                "end": 1497
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1500,
                                "end": 1506
                              },
                              "start": 1498,
                              "end": 1506
                            },
                            "start": 1487,
                            "end": 1507
                          }
                        ],
                        "start": 1485,
                        "end": 1509
                      },
                      "start": 1485,
                      "end": 1511
                    },
                    "start": 1483,
                    "end": 1511
                  },
                  "start": 1480,
                  "end": 1511
                },
                "init": null,
                "definite": false,
                "start": 1480,
                "end": 1511
              }
            ],
            "declare": false,
            "start": 1476,
            "end": 1512
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1596,
              "end": 1597
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
                    "start": 1608,
                    "end": 1609
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
                      "start": 1618,
                      "end": 1619
                    },
                    "id": null,
                    "generator": false,
                    "start": 1612,
                    "end": 1619
                  },
                  "computed": false,
                  "start": 1608,
                  "end": 1619
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1647,
                    "end": 1648
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
                        "start": 1658,
                        "end": 1662
                      },
                      "id": null,
                      "generator": false,
                      "start": 1652,
                      "end": 1662
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1664,
                      "end": 1670
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1651,
                    "end": 1670
                  },
                  "computed": false,
                  "start": 1647,
                  "end": 1670
                }
              ],
              "start": 1598,
              "end": 1676
            },
            "const": false,
            "declare": false,
            "start": 1591,
            "end": 1676
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1746
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
                          "start": 1768,
                          "end": 1769
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
                              "start": 1773,
                              "end": 1774
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 1779,
                            "end": 1781
                          },
                          "id": null,
                          "generator": false,
                          "start": 1772,
                          "end": 1781
                        },
                        "definite": false,
                        "start": 1768,
                        "end": 1781
                      }
                    ],
                    "declare": false,
                    "start": 1764,
                    "end": 1782
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1757,
                  "end": 1782
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
                        "start": 1795,
                        "end": 1796
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
                            "start": 1800,
                            "end": 1801
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1806,
                          "end": 1807
                        },
                        "id": null,
                        "generator": false,
                        "start": 1799,
                        "end": 1807
                      },
                      "definite": false,
                      "start": 1795,
                      "end": 1807
                    }
                  ],
                  "declare": false,
                  "start": 1791,
                  "end": 1808
                }
              ],
              "start": 1747,
              "end": 1814
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1735,
            "end": 1814
          }
        ],
        "start": 914,
        "end": 1817
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 901,
      "end": 1817
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
            "start": 1889,
            "end": 1897
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
                    "start": 1901,
                    "end": 1902
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1901,
                  "end": 1902
                }
              ],
              "start": 1900,
              "end": 1903
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
                      "start": 1907,
                      "end": 1908
                    },
                    "typeArguments": null,
                    "start": 1907,
                    "end": 1908
                  },
                  "start": 1905,
                  "end": 1908
                },
                "start": 1904,
                "end": 1908
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
                  "start": 1914,
                  "end": 1915
                }
              ],
              "start": 1913,
              "end": 1916
            },
            "id": null,
            "generator": false,
            "start": 1900,
            "end": 1916
          },
          "definite": false,
          "start": 1889,
          "end": 1916
        }
      ],
      "declare": false,
      "start": 1885,
      "end": 1917
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
                            "start": 1935,
                            "end": 1936
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1935,
                          "end": 1936
                        }
                      ],
                      "start": 1934,
                      "end": 1937
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
                              "start": 1941,
                              "end": 1942
                            },
                            "typeArguments": null,
                            "start": 1941,
                            "end": 1942
                          },
                          "start": 1939,
                          "end": 1942
                        },
                        "start": 1938,
                        "end": 1942
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
                            "start": 1945,
                            "end": 1946
                          },
                          "typeArguments": null,
                          "start": 1945,
                          "end": 1946
                        },
                        "start": 1945,
                        "end": 1948
                      },
                      "start": 1943,
                      "end": 1948
                    },
                    "start": 1934,
                    "end": 1948
                  }
                ],
                "start": 1932,
                "end": 1950
              },
              "start": 1930,
              "end": 1950
            },
            "start": 1922,
            "end": 1950
          },
          "init": null,
          "definite": false,
          "start": 1922,
          "end": 1950
        }
      ],
      "declare": false,
      "start": 1918,
      "end": 1951
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
            "start": 1987,
            "end": 1995
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
                    "start": 1999,
                    "end": 2000
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1999,
                  "end": 2000
                }
              ],
              "start": 1998,
              "end": 2001
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
                      "start": 2005,
                      "end": 2006
                    },
                    "typeArguments": null,
                    "start": 2005,
                    "end": 2006
                  },
                  "start": 2003,
                  "end": 2006
                },
                "start": 2002,
                "end": 2006
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
                        "start": 2021,
                        "end": 2022
                      }
                    ],
                    "start": 2020,
                    "end": 2023
                  },
                  "start": 2013,
                  "end": 2024
                }
              ],
              "start": 2011,
              "end": 2026
            },
            "id": null,
            "generator": false,
            "start": 1998,
            "end": 2026
          },
          "definite": false,
          "start": 1987,
          "end": 2026
        }
      ],
      "declare": false,
      "start": 1983,
      "end": 2027
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
                            "start": 2045,
                            "end": 2046
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2045,
                          "end": 2046
                        }
                      ],
                      "start": 2044,
                      "end": 2047
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
                              "start": 2051,
                              "end": 2052
                            },
                            "typeArguments": null,
                            "start": 2051,
                            "end": 2052
                          },
                          "start": 2049,
                          "end": 2052
                        },
                        "start": 2048,
                        "end": 2052
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
                            "start": 2055,
                            "end": 2056
                          },
                          "typeArguments": null,
                          "start": 2055,
                          "end": 2056
                        },
                        "start": 2055,
                        "end": 2058
                      },
                      "start": 2053,
                      "end": 2058
                    },
                    "start": 2044,
                    "end": 2058
                  }
                ],
                "start": 2042,
                "end": 2060
              },
              "start": 2040,
              "end": 2060
            },
            "start": 2032,
            "end": 2060
          },
          "init": null,
          "definite": false,
          "start": 2032,
          "end": 2060
        }
      ],
      "declare": false,
      "start": 2028,
      "end": 2061
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
            "start": 2150,
            "end": 2159
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2163,
              "end": 2166
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
                  "start": 2169,
                  "end": 2170
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
                    "start": 2176,
                    "end": 2177
                  }
                ],
                "start": 2175,
                "end": 2178
              },
              "id": null,
              "generator": false,
              "start": 2168,
              "end": 2178
            },
            "start": 2162,
            "end": 2179
          },
          "definite": false,
          "start": 2150,
          "end": 2179
        }
      ],
      "declare": false,
      "start": 2146,
      "end": 2180
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
                "start": 2196,
                "end": 2199
              },
              "start": 2194,
              "end": 2199
            },
            "start": 2185,
            "end": 2199
          },
          "init": null,
          "definite": false,
          "start": 2185,
          "end": 2199
        }
      ],
      "declare": false,
      "start": 2181,
      "end": 2200
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
            "start": 2205,
            "end": 2214
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2218,
              "end": 2221
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
                  "start": 2224,
                  "end": 2225
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
                      "start": 2239,
                      "end": 2240
                    },
                    "start": 2232,
                    "end": 2241
                  }
                ],
                "start": 2230,
                "end": 2243
              },
              "id": null,
              "generator": false,
              "start": 2223,
              "end": 2243
            },
            "start": 2217,
            "end": 2244
          },
          "definite": false,
          "start": 2205,
          "end": 2244
        }
      ],
      "declare": false,
      "start": 2201,
      "end": 2245
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
                "start": 2261,
                "end": 2264
              },
              "start": 2259,
              "end": 2264
            },
            "start": 2250,
            "end": 2264
          },
          "init": null,
          "definite": false,
          "start": 2250,
          "end": 2264
        }
      ],
      "declare": false,
      "start": 2246,
      "end": 2265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 2266
}
```
