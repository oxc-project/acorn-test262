__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 525,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 79,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 19,
            "end": 77,
            "body": {
              "type": "TSInterfaceBody",
              "start": 47,
              "end": 77,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 73,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 65,
                    "decorators": [],
                    "name": "obs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 67,
                      "end": 73
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 46,
              "decorators": [],
              "name": "SymbolConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 116,
            "decorators": [],
            "name": "observable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 99,
                "end": 116,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 106,
                  "end": 116,
                  "left": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 112,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 116,
                    "decorators": [],
                    "name": "obs",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 119,
            "end": 129,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 125,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "obs",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 318,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 138,
        "end": 318,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 160,
          "end": 318,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 166,
              "end": 197,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 166,
                "end": 177,
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
                "start": 177,
                "end": 197,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 195,
                  "end": 197,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 178,
                    "end": 193,
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 193,
                      "decorators": [],
                      "name": "_val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 190,
                        "end": 193,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 192,
                          "end": 193,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 193,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 203,
              "end": 268,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 203,
                "end": 212,
                "decorators": [],
                "name": "subscribe",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 212,
                "end": 268,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 237,
                  "end": 268,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 247,
                      "end": 262,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 247,
                        "end": 262,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 252,
                            "end": 261,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 252,
                              "end": 256
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 257,
                              "end": 261,
                              "decorators": [],
                              "name": "_val",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 251,
                          "decorators": [],
                          "name": "next",
                          "optional": false,
                          "typeAnnotation": null
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
                    "start": 213,
                    "end": 235,
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 217,
                      "end": 235,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 219,
                        "end": 235,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 220,
                            "end": 226,
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 223,
                              "end": 226,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 225,
                                "end": 226,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 225,
                                  "end": 226,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 228,
                          "end": 235,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 231,
                            "end": 235
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 274,
              "end": 316,
              "accessibility": null,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 275,
                "end": 285,
                "decorators": [],
                "name": "observable",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 286,
                "end": 316,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 289,
                  "end": 316,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 299,
                      "end": 310,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 306,
                        "end": 310
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
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
          "start": 144,
          "end": 156,
          "decorators": [],
          "name": "MyObservable",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 156,
          "end": 159,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 157,
              "end": 158,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 320,
      "end": 419,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 342,
        "decorators": [],
        "name": "InteropObservable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 348,
        "end": 419,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 354,
            "end": 417,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 355,
              "end": 365,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 355,
                "end": 361,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 365,
                "decorators": [],
                "name": "obs",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 417,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 368,
                "end": 417,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 371,
                  "end": 417,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 374,
                    "end": 417,
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "start": 376,
                        "end": 415,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 376,
                          "end": 385,
                          "decorators": [],
                          "name": "subscribe",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 386,
                            "end": 408,
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 390,
                              "end": 408,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 392,
                                "end": 408,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 393,
                                    "end": 399,
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 396,
                                      "end": 399,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 398,
                                        "end": 399,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 398,
                                          "end": 399,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 401,
                                  "end": 408,
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 404,
                                    "end": 408
                                  }
                                },
                                "typeParameters": null
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 409,
                          "end": 415,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 411,
                            "end": 415
                          }
                        },
                        "static": false,
                        "typeParameters": null
                      }
                    ]
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 342,
        "end": 345,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 343,
            "end": 344,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 497,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 465,
        "end": 497,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 471,
            "end": 495,
            "argument": {
              "type": "CallExpression",
              "start": 478,
              "end": 495,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 478,
                "end": 493,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 481,
                  "decorators": [],
                  "name": "obs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "MemberExpression",
                  "start": 482,
                  "end": 492,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 488,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 492,
                    "decorators": [],
                    "name": "obs",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 434,
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 438,
          "end": 463,
          "decorators": [],
          "name": "obs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 441,
            "end": 463,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 443,
              "end": 463,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 460,
                "end": 463,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 461,
                    "end": 462,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 443,
                "end": 460,
                "decorators": [],
                "name": "InteropObservable",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 434,
        "end": 437,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 435,
            "end": 436,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 499,
      "end": 525,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 499,
        "end": 525,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 504,
            "end": 524,
            "arguments": [
              {
                "type": "Literal",
                "start": 521,
                "end": 523,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 508,
              "end": 520,
              "decorators": [],
              "name": "MyObservable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 503,
          "decorators": [],
          "name": "from",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
