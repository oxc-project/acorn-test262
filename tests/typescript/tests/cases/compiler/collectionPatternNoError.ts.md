__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 947,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "MsgConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 24,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 42,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 35,
              "end": 42,
              "typeName": {
                "type": "Identifier",
                "start": 35,
                "end": 42,
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 74,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 48,
            "end": 72,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 67,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 67,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 63,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 63,
                      "end": 67,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 64,
                          "end": 66,
                          "members": []
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 131,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 88,
        "decorators": [],
        "name": "Message",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 131,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 129,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 98,
              "decorators": [],
              "name": "clone",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 129,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 100,
                "end": 106,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 102,
                  "end": 106
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 129,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 113,
                    "end": 125,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 120,
                      "end": 124
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 132,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 153,
        "decorators": [],
        "name": "MessageList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 172,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 171,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 171,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 171,
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 181,
          "end": 188,
          "expression": {
            "type": "Identifier",
            "start": 181,
            "end": 188,
            "decorators": [],
            "name": "Message",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 189,
        "end": 222,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 193,
            "end": 220,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 212,
              "decorators": [],
              "name": "methodOnMessageList",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 219,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 216,
                "end": 219,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 216,
                  "end": 217,
                  "typeName": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 224,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 241,
        "decorators": [],
        "name": "fetchMsg",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 241,
        "end": 260,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 242,
            "end": 259,
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 259,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 261,
          "end": 289,
          "decorators": [],
          "name": "protoCtor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 270,
            "end": 289,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 272,
              "end": 289,
              "typeName": {
                "type": "Identifier",
                "start": 272,
                "end": 286,
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 286,
                "end": 289,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 287,
                    "end": 288,
                    "typeName": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 290,
        "end": 293,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 292,
          "end": 293,
          "typeName": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 294,
        "end": 313,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 298,
            "end": 311,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 305,
              "end": 310,
              "expression": {
                "type": "Literal",
                "start": 305,
                "end": 309,
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 615,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 333,
        "decorators": [],
        "name": "DataProvider",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 333,
        "end": 378,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 334,
            "end": 351,
            "name": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 344,
              "end": 351,
              "typeName": {
                "type": "Identifier",
                "start": 344,
                "end": 351,
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 353,
            "end": 377,
            "name": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 363,
              "end": 377,
              "typeName": {
                "type": "Identifier",
                "start": 363,
                "end": 374,
                "decorators": [],
                "name": "MessageList",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 374,
                "end": 377,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 375,
                    "end": 376,
                    "typeName": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 379,
        "end": 615,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 383,
            "end": 505,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 394,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 394,
              "end": 505,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 400,
                  "end": 443,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 443,
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 424,
                      "end": 443,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 426,
                        "end": 443,
                        "typeName": {
                          "type": "Identifier",
                          "start": 426,
                          "end": 440,
                          "decorators": [],
                          "name": "MsgConstructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 440,
                          "end": 443,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 441,
                              "end": 442,
                              "typeName": {
                                "type": "Identifier",
                                "start": 441,
                                "end": 442,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 449,
                  "end": 496,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 496,
                    "decorators": [],
                    "name": "messageList",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 477,
                      "end": 496,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 479,
                        "end": 496,
                        "typeName": {
                          "type": "Identifier",
                          "start": 479,
                          "end": 493,
                          "decorators": [],
                          "name": "MsgConstructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 493,
                          "end": 496,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 494,
                              "end": 495,
                              "typeName": {
                                "type": "Identifier",
                                "start": 494,
                                "end": 495,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 502,
                "end": 505,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 509,
            "end": 613,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 509,
              "end": 514,
              "decorators": [],
              "name": "fetch",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 514,
              "end": 613,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 517,
                "end": 613,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 523,
                    "end": 570,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 529,
                        "end": 569,
                        "id": {
                          "type": "Identifier",
                          "start": 529,
                          "end": 540,
                          "decorators": [],
                          "name": "messageList",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 543,
                          "end": 569,
                          "callee": {
                            "type": "Identifier",
                            "start": 543,
                            "end": 551,
                            "decorators": [],
                            "name": "fetchMsg",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 552,
                              "end": 568,
                              "object": {
                                "type": "ThisExpression",
                                "start": 552,
                                "end": 556
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 557,
                                "end": 568,
                                "decorators": [],
                                "name": "messageList",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 575,
                    "end": 609,
                    "expression": {
                      "type": "CallExpression",
                      "start": 575,
                      "end": 608,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 575,
                        "end": 606,
                        "object": {
                          "type": "Identifier",
                          "start": 575,
                          "end": 586,
                          "decorators": [],
                          "name": "messageList",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 587,
                          "end": 606,
                          "decorators": [],
                          "name": "methodOnMessageList",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 757,
      "end": 947,
      "id": {
        "type": "Identifier",
        "start": 766,
        "end": 767,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 767,
        "end": 827,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 771,
            "end": 804,
            "name": {
              "type": "Identifier",
              "start": 771,
              "end": 772,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 781,
              "end": 804,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 782,
                  "end": 803,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 782,
                    "end": 787,
                    "decorators": [],
                    "name": "TType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 787,
                    "end": 803,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 789,
                      "end": 803,
                      "typeName": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 800,
                        "decorators": [],
                        "name": "MessageList",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 800,
                        "end": 803,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 801,
                            "end": 802,
                            "typeName": {
                              "type": "Identifier",
                              "start": 801,
                              "end": 802,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 808,
            "end": 825,
            "name": {
              "type": "Identifier",
              "start": 808,
              "end": 809,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 818,
              "end": 825,
              "typeName": {
                "type": "Identifier",
                "start": 818,
                "end": 825,
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 828,
          "end": 854,
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 835,
            "end": 854,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 837,
              "end": 854,
              "typeName": {
                "type": "Identifier",
                "start": 837,
                "end": 851,
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 851,
                "end": 854,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 852,
                    "end": 853,
                    "typeName": {
                      "type": "Identifier",
                      "start": 852,
                      "end": 853,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 856,
          "end": 895,
          "decorators": [],
          "name": "messageList",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 867,
            "end": 895,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 869,
              "end": 895,
              "typeName": {
                "type": "Identifier",
                "start": 869,
                "end": 883,
                "decorators": [],
                "name": "MsgConstructor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 883,
                "end": 895,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 884,
                    "end": 894,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 884,
                      "end": 885,
                      "typeName": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 885,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 886,
                      "end": 893,
                      "literal": {
                        "type": "Literal",
                        "start": 886,
                        "end": 893,
                        "value": "TType",
                        "raw": "\"TType\""
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 897,
        "end": 947,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 901,
            "end": 945,
            "expression": {
              "type": "CallExpression",
              "start": 901,
              "end": 944,
              "callee": {
                "type": "MemberExpression",
                "start": 901,
                "end": 942,
                "object": {
                  "type": "CallExpression",
                  "start": 901,
                  "end": 922,
                  "callee": {
                    "type": "Identifier",
                    "start": 901,
                    "end": 909,
                    "decorators": [],
                    "name": "fetchMsg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 910,
                      "end": 921,
                      "decorators": [],
                      "name": "messageList",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 923,
                  "end": 942,
                  "decorators": [],
                  "name": "methodOnMessageList",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
