__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 526,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "SymbolConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "obs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 116,
            "name": "observable",
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
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 116,
                    "name": "obs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 119,
            "end": 129,
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 125,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 129,
              "name": "obs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "id": {
          "type": "Identifier",
          "start": 144,
          "end": 156,
          "name": "MyObservable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 160,
          "end": 318,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 166,
              "end": 197,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 166,
                "end": 177,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 177,
                "end": 197,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
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
                      "name": "_val",
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
                            "name": "T",
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
                    "readonly": false,
                    "static": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 195,
                  "end": 197,
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
            },
            {
              "type": "MethodDefinition",
              "start": 203,
              "end": 268,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 203,
                "end": 212,
                "name": "subscribe",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 212,
                "end": 268,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 213,
                    "end": 235,
                    "name": "next",
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
                            "name": "val",
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
                                  "name": "T",
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "name": "next",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                              "name": "_val",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
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
            },
            {
              "type": "MethodDefinition",
              "start": 274,
              "end": 316,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 275,
                "end": 285,
                "name": "observable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 286,
                "end": 316,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
      "type": "TSTypeAliasDeclaration",
      "start": 320,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 342,
        "name": "InteropObservable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 365,
                "name": "obs",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                          "name": "subscribe",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "next",
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
                                    "name": "val",
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
                                          "name": "T",
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
                            },
                            "decorators": [],
                            "optional": false
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
        "name": "from",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 438,
          "end": 463,
          "name": "obs",
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
                "name": "InteropObservable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "obs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "MemberExpression",
                  "start": 482,
                  "end": 492,
                  "object": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 488,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 492,
                    "name": "obs",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "computed": true,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "name": "from",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 504,
            "end": 524,
            "callee": {
              "type": "Identifier",
              "start": 508,
              "end": 520,
              "name": "MyObservable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 521,
                "end": 523,
                "value": 42,
                "raw": "42"
              }
            ],
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
