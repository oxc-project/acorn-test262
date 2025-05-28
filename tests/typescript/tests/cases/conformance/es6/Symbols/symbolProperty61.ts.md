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
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 79,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 19,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 46,
              "decorators": [],
              "name": "SymbolConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 47,
              "end": 77,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 73,
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 65,
                    "decorators": [],
                    "name": "obs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 67,
                      "end": 73
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 129,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 129,
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
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 125,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "decorators": [],
              "name": "obs",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 318,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 138,
        "end": 318,
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 156,
          "end": 159,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 157,
              "end": 158,
              "name": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
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
          "start": 160,
          "end": 318,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 166,
              "end": 197,
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
              "value": {
                "type": "FunctionExpression",
                "start": 177,
                "end": 197,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 192,
                            "end": 193,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 195,
                  "end": 197,
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
              "start": 203,
              "end": 268,
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
              "value": {
                "type": "FunctionExpression",
                "start": 212,
                "end": 268,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                        "typeParameters": null,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 225,
                                  "end": 226,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
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
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 237,
                  "end": 268,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 247,
                      "end": 262,
                      "expression": {
                        "type": "CallExpression",
                        "start": 247,
                        "end": 262,
                        "callee": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 251,
                          "decorators": [],
                          "name": "next",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 252,
                            "end": 261,
                            "object": {
                              "type": "ThisExpression",
                              "start": 252,
                              "end": 256
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 257,
                              "end": 261,
                              "decorators": [],
                              "name": "_val",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        ],
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
            },
            {
              "type": "MethodDefinition",
              "start": 274,
              "end": 316,
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
              "value": {
                "type": "FunctionExpression",
                "start": 286,
                "end": 316,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "expression": false
              },
              "kind": "method",
              "computed": true,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 320,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 342,
        "decorators": [],
        "name": "InteropObservable",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "start": 355,
              "end": 365,
              "object": {
                "type": "Identifier",
                "start": 355,
                "end": 361,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 365,
                "decorators": [],
                "name": "obs",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 417,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 368,
                "end": 417,
                "typeParameters": null,
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
                        "key": {
                          "type": "Identifier",
                          "start": 376,
                          "end": 385,
                          "decorators": [],
                          "name": "subscribe",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
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
                                "typeParameters": null,
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
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 398,
                                          "end": 399,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
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
                                }
                              }
                            }
                          }
                        ],
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
                        "accessibility": null,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 497,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 434,
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 434,
        "end": 437,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 435,
            "end": 436,
            "name": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 443,
                "end": 460,
                "decorators": [],
                "name": "InteropObservable",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 460,
                "end": 463,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 461,
                    "end": 462,
                    "typeName": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
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
        }
      ],
      "returnType": null,
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
              "callee": {
                "type": "MemberExpression",
                "start": 478,
                "end": 493,
                "object": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 481,
                  "decorators": [],
                  "name": "obs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "MemberExpression",
                  "start": 482,
                  "end": 492,
                  "object": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 488,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 492,
                    "decorators": [],
                    "name": "obs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "optional": false,
                "computed": true
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 499,
      "end": 525,
      "expression": {
        "type": "CallExpression",
        "start": 499,
        "end": 525,
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 503,
          "decorators": [],
          "name": "from",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 504,
            "end": 524,
            "callee": {
              "type": "Identifier",
              "start": 508,
              "end": 520,
              "decorators": [],
              "name": "MyObservable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 521,
                "end": 523,
                "value": 42,
                "raw": "42"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
