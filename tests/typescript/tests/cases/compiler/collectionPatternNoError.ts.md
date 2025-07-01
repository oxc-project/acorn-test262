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
        "name": "MsgConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
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
              "start": 25,
              "end": 26
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 42
              },
              "typeArguments": null,
              "start": 35,
              "end": 42
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 42
          }
        ],
        "start": 24,
        "end": 43
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 63
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 64,
                          "end": 66
                        }
                      ],
                      "start": 63,
                      "end": 67
                    },
                    "start": 58,
                    "end": 67
                  },
                  "start": 56,
                  "end": 67
                },
                "start": 52,
                "end": 67
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 71
                },
                "typeArguments": null,
                "start": 70,
                "end": 71
              },
              "start": 68,
              "end": 71
            },
            "start": 48,
            "end": 72
          }
        ],
        "start": 44,
        "end": 74
      },
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Message",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 88
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
              "name": "clone",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 98
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
                  "type": "TSThisType",
                  "start": 102,
                  "end": 106
                },
                "start": 100,
                "end": 106
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 120,
                      "end": 124
                    },
                    "start": 113,
                    "end": 125
                  }
                ],
                "start": 107,
                "end": 129
              },
              "expression": false,
              "start": 98,
              "end": 129
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 93,
            "end": 129
          }
        ],
        "start": 89,
        "end": 131
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 131
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MessageList",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 153
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
              "start": 154,
              "end": 155
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 171
              },
              "typeArguments": null,
              "start": 164,
              "end": 171
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 171
          }
        ],
        "start": 153,
        "end": 172
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Message",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 188
          },
          "typeArguments": null,
          "start": 181,
          "end": 188
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodOnMessageList",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 212
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
                    "start": 216,
                    "end": 217
                  },
                  "typeArguments": null,
                  "start": 216,
                  "end": 217
                },
                "start": 216,
                "end": 219
              },
              "start": 214,
              "end": 219
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 193,
            "end": 220
          }
        ],
        "start": 189,
        "end": 222
      },
      "declare": false,
      "start": 132,
      "end": 222
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fetchMsg",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 241
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 243
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 259
              },
              "typeArguments": null,
              "start": 252,
              "end": 259
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 242,
            "end": 259
          }
        ],
        "start": 241,
        "end": 260
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "protoCtor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 286
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 287,
                    "end": 288
                  }
                ],
                "start": 286,
                "end": 289
              },
              "start": 272,
              "end": 289
            },
            "start": 270,
            "end": 289
          },
          "start": 261,
          "end": 289
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 293
          },
          "typeArguments": null,
          "start": 292,
          "end": 293
        },
        "start": 290,
        "end": 293
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 305,
                "end": 309
              },
              "start": 305,
              "end": 310
            },
            "start": 298,
            "end": 311
          }
        ],
        "start": 294,
        "end": 313
      },
      "expression": false,
      "start": 224,
      "end": 313
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataProvider",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 333
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
              "start": 334,
              "end": 335
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 351
              },
              "typeArguments": null,
              "start": 344,
              "end": 351
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 334,
            "end": 351
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 354
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MessageList",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 374
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 376
                    },
                    "typeArguments": null,
                    "start": 375,
                    "end": 376
                  }
                ],
                "start": 374,
                "end": 377
              },
              "start": 363,
              "end": 377
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 353,
            "end": 377
          }
        ],
        "start": 333,
        "end": 378
      },
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
              "start": 383,
              "end": 394
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MsgConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 426,
                          "end": 440
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 441,
                                "end": 442
                              },
                              "typeArguments": null,
                              "start": 441,
                              "end": 442
                            }
                          ],
                          "start": 440,
                          "end": 443
                        },
                        "start": 426,
                        "end": 443
                      },
                      "start": 424,
                      "end": 443
                    },
                    "start": 417,
                    "end": 443
                  },
                  "readonly": true,
                  "static": false,
                  "start": 400,
                  "end": 443
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "messageList",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MsgConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 479,
                          "end": 493
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 494,
                                "end": 495
                              },
                              "typeArguments": null,
                              "start": 494,
                              "end": 495
                            }
                          ],
                          "start": 493,
                          "end": 496
                        },
                        "start": 479,
                        "end": 496
                      },
                      "start": 477,
                      "end": 496
                    },
                    "start": 466,
                    "end": 496
                  },
                  "readonly": true,
                  "static": false,
                  "start": 449,
                  "end": 496
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 502,
                "end": 505
              },
              "expression": false,
              "start": 394,
              "end": 505
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 383,
            "end": 505
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fetch",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 514
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "messageList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 529,
                          "end": 540
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fetchMsg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 543,
                            "end": 551
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 552,
                                "end": 556
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "messageList",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 557,
                                "end": 568
                              },
                              "optional": false,
                              "computed": false,
                              "start": 552,
                              "end": 568
                            }
                          ],
                          "optional": false,
                          "start": 543,
                          "end": 569
                        },
                        "definite": false,
                        "start": 529,
                        "end": 569
                      }
                    ],
                    "declare": false,
                    "start": 523,
                    "end": 570
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
                          "name": "messageList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 575,
                          "end": 586
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "methodOnMessageList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 587,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 575,
                        "end": 606
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 575,
                      "end": 608
                    },
                    "directive": null,
                    "start": 575,
                    "end": 609
                  }
                ],
                "start": 517,
                "end": 613
              },
              "expression": false,
              "start": 514,
              "end": 613
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 509,
            "end": 613
          }
        ],
        "start": 379,
        "end": 615
      },
      "abstract": false,
      "declare": false,
      "start": 315,
      "end": 615
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 766,
        "end": 767
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 772
            },
            "constraint": {
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
                    "name": "TType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 782,
                    "end": 787
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MessageList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 800
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 801,
                              "end": 802
                            },
                            "typeArguments": null,
                            "start": 801,
                            "end": 802
                          }
                        ],
                        "start": 800,
                        "end": 803
                      },
                      "start": 789,
                      "end": 803
                    },
                    "start": 787,
                    "end": 803
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 782,
                  "end": 803
                }
              ],
              "start": 781,
              "end": 804
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 771,
            "end": 804
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 809
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 825
              },
              "typeArguments": null,
              "start": 818,
              "end": 825
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 808,
            "end": 825
          }
        ],
        "start": 767,
        "end": 827
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 851
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 852,
                      "end": 853
                    },
                    "typeArguments": null,
                    "start": 852,
                    "end": 853
                  }
                ],
                "start": 851,
                "end": 854
              },
              "start": 837,
              "end": 854
            },
            "start": 835,
            "end": 854
          },
          "start": 828,
          "end": 854
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "messageList",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 869,
                "end": 883
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 884,
                        "end": 885
                      },
                      "typeArguments": null,
                      "start": 884,
                      "end": 885
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "TType",
                        "raw": "\"TType\"",
                        "start": 886,
                        "end": 893
                      },
                      "start": 886,
                      "end": 893
                    },
                    "start": 884,
                    "end": 894
                  }
                ],
                "start": 883,
                "end": 895
              },
              "start": 869,
              "end": 895
            },
            "start": 867,
            "end": 895
          },
          "start": 856,
          "end": 895
        }
      ],
      "returnType": null,
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
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fetchMsg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 901,
                    "end": 909
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "messageList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 921
                    }
                  ],
                  "optional": false,
                  "start": 901,
                  "end": 922
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methodOnMessageList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 942
                },
                "optional": false,
                "computed": false,
                "start": 901,
                "end": 942
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 901,
              "end": 944
            },
            "directive": null,
            "start": 901,
            "end": 945
          }
        ],
        "start": 897,
        "end": 947
      },
      "expression": false,
      "start": 757,
      "end": 947
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 947
}
```
