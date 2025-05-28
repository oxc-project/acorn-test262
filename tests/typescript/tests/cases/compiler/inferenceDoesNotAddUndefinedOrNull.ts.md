__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 965,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "NodeArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 34,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 30,
              "end": 34,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 34,
                "decorators": [],
                "name": "Node",
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
          "start": 44,
          "end": 60,
          "expression": {
            "type": "Identifier",
            "start": 44,
            "end": 57,
            "decorators": [],
            "name": "ReadonlyArray",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 57,
            "end": 60,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 58,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
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
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 63,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 65,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 79,
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 80,
        "end": 215,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 86,
            "end": 213,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 98,
              "decorators": [],
              "name": "forEachChild",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 98,
              "end": 101,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 99,
                  "end": 100,
                  "name": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
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
                "start": 102,
                "end": 139,
                "decorators": [],
                "name": "cbNode",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 110,
                    "end": 139,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 111,
                        "end": 121,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 115,
                          "end": 121,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 117,
                            "end": 121,
                            "typeName": {
                              "type": "Identifier",
                              "start": 117,
                              "end": 121,
                              "decorators": [],
                              "name": "Node",
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
                      "start": 123,
                      "end": 139,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 126,
                        "end": 139,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 126,
                            "end": 127,
                            "typeName": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 130,
                            "end": 139
                          }
                        ]
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 141,
                "end": 196,
                "decorators": [],
                "name": "cbNodeArray",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 155,
                    "end": 196,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 156,
                        "end": 178,
                        "decorators": [],
                        "name": "nodes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 161,
                          "end": 178,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 163,
                            "end": 178,
                            "typeName": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 172,
                              "decorators": [],
                              "name": "NodeArray",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 172,
                              "end": 178,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 173,
                                  "end": 177,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 173,
                                    "end": 177,
                                    "decorators": [],
                                    "name": "Node",
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
                      "start": 180,
                      "end": 196,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 183,
                        "end": 196,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 183,
                            "end": 184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 184,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 187,
                            "end": 196
                          }
                        ]
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 212,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 199,
                "end": 212,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 199,
                    "end": 200,
                    "typeName": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 203,
                    "end": 212
                  }
                ]
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
      "type": "TSDeclareFunction",
      "start": 217,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 241,
        "decorators": [],
        "name": "toArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 241,
        "end": 244,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 242,
            "end": 243,
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
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
          "start": 245,
          "end": 259,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 259,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 252,
              "end": 259,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 252,
                  "end": 253,
                  "typeName": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSArrayType",
                  "start": 256,
                  "end": 259,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 256,
                    "end": 257,
                    "typeName": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 257,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 260,
        "end": 265,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 262,
          "end": 265,
          "elementType": {
            "type": "TSTypeReference",
            "start": 262,
            "end": 263,
            "typeName": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 267,
      "end": 334,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 291,
        "decorators": [],
        "name": "toArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 291,
        "end": 294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 292,
            "end": 293,
            "name": {
              "type": "Identifier",
              "start": 292,
              "end": 293,
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
          "start": 295,
          "end": 318,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 300,
            "end": 318,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 302,
              "end": 318,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 302,
                  "end": 303,
                  "typeName": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeOperator",
                  "start": 306,
                  "end": 318,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 315,
                    "end": 318,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 315,
                      "end": 316,
                      "typeName": {
                        "type": "Identifier",
                        "start": 315,
                        "end": 316,
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
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 319,
        "end": 333,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 321,
          "end": 333,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 330,
            "end": 333,
            "elementType": {
              "type": "TSTypeReference",
              "start": 330,
              "end": 331,
              "typeName": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 336,
      "end": 654,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 360,
        "decorators": [],
        "name": "flatMapChildren",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 360,
        "end": 363,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 361,
            "end": 362,
            "name": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
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
          "start": 364,
          "end": 374,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 368,
            "end": 374,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 370,
              "end": 374,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 374,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 376,
          "end": 425,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 378,
            "end": 425,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 380,
              "end": 425,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 381,
                  "end": 392,
                  "decorators": [],
                  "name": "child",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 386,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 392,
                      "typeName": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 392,
                        "decorators": [],
                        "name": "Node",
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
                "start": 394,
                "end": 425,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 397,
                  "end": 425,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 397,
                      "end": 409,
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 406,
                        "end": 409,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 406,
                          "end": 407,
                          "typeName": {
                            "type": "Identifier",
                            "start": 406,
                            "end": 407,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 412,
                      "end": 413,
                      "typeName": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 413,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 416,
                      "end": 425
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 426,
        "end": 440,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 428,
          "end": 440,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 437,
            "end": 440,
            "elementType": {
              "type": "TSTypeReference",
              "start": 437,
              "end": 438,
              "typeName": {
                "type": "Identifier",
                "start": 437,
                "end": 438,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 441,
        "end": 654,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 447,
            "end": 470,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 453,
                "end": 469,
                "id": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 464,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 464,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 461,
                      "end": 464,
                      "elementType": {
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
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 467,
                  "end": 469,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 475,
            "end": 633,
            "expression": {
              "type": "CallExpression",
              "start": 475,
              "end": 632,
              "callee": {
                "type": "MemberExpression",
                "start": 475,
                "end": 492,
                "object": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 479,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 492,
                  "decorators": [],
                  "name": "forEachChild",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 493,
                  "end": 631,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 493,
                      "end": 498,
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 502,
                    "end": 631,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 512,
                        "end": 536,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 518,
                            "end": 535,
                            "id": {
                              "type": "Identifier",
                              "start": 518,
                              "end": 523,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 526,
                              "end": 535,
                              "callee": {
                                "type": "Identifier",
                                "start": 526,
                                "end": 528,
                                "decorators": [],
                                "name": "cb",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 529,
                                  "end": 534,
                                  "decorators": [],
                                  "name": "child",
                                  "optional": false,
                                  "typeAnnotation": null
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
                        "type": "IfStatement",
                        "start": 545,
                        "end": 625,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 549,
                          "end": 568,
                          "left": {
                            "type": "Identifier",
                            "start": 549,
                            "end": 554,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Identifier",
                            "start": 559,
                            "end": 568,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 570,
                          "end": 625,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 584,
                              "end": 615,
                              "expression": {
                                "type": "CallExpression",
                                "start": 584,
                                "end": 614,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 584,
                                  "end": 595,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 584,
                                    "end": 590,
                                    "decorators": [],
                                    "name": "result",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 591,
                                    "end": 595,
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 596,
                                    "end": 613,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 599,
                                      "end": 613,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 599,
                                        "end": 606,
                                        "decorators": [],
                                        "name": "toArray",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 607,
                                          "end": 612,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    }
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 638,
            "end": 652,
            "argument": {
              "type": "Identifier",
              "start": 645,
              "end": 651,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 656,
      "end": 965,
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 681,
        "decorators": [],
        "name": "flatMapChildren2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 681,
        "end": 684,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 682,
            "end": 683,
            "name": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
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
          "start": 685,
          "end": 695,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 689,
            "end": 695,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 691,
              "end": 695,
              "typeName": {
                "type": "Identifier",
                "start": 691,
                "end": 695,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 697,
          "end": 741,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 699,
            "end": 741,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 701,
              "end": 741,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 702,
                  "end": 713,
                  "decorators": [],
                  "name": "child",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 707,
                    "end": 713,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 709,
                      "end": 713,
                      "typeName": {
                        "type": "Identifier",
                        "start": 709,
                        "end": 713,
                        "decorators": [],
                        "name": "Node",
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
                "start": 715,
                "end": 741,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 718,
                  "end": 741,
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "start": 718,
                      "end": 730,
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 727,
                        "end": 730,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 727,
                          "end": 728,
                          "typeName": {
                            "type": "Identifier",
                            "start": 727,
                            "end": 728,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 733,
                      "end": 734,
                      "typeName": {
                        "type": "Identifier",
                        "start": 733,
                        "end": 734,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 737,
                      "end": 741
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 742,
        "end": 756,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 744,
          "end": 756,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 753,
            "end": 756,
            "elementType": {
              "type": "TSTypeReference",
              "start": 753,
              "end": 754,
              "typeName": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 757,
        "end": 965,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 763,
            "end": 786,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 769,
                "end": 785,
                "id": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 780,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 775,
                    "end": 780,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 777,
                      "end": 780,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 777,
                        "end": 778,
                        "typeName": {
                          "type": "Identifier",
                          "start": 777,
                          "end": 778,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 783,
                  "end": 785,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 791,
            "end": 944,
            "expression": {
              "type": "CallExpression",
              "start": 791,
              "end": 943,
              "callee": {
                "type": "MemberExpression",
                "start": 791,
                "end": 808,
                "object": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 795,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 796,
                  "end": 808,
                  "decorators": [],
                  "name": "forEachChild",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 809,
                  "end": 942,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 809,
                      "end": 814,
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 818,
                    "end": 942,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 828,
                        "end": 852,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 834,
                            "end": 851,
                            "id": {
                              "type": "Identifier",
                              "start": 834,
                              "end": 839,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 842,
                              "end": 851,
                              "callee": {
                                "type": "Identifier",
                                "start": 842,
                                "end": 844,
                                "decorators": [],
                                "name": "cb",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 845,
                                  "end": 850,
                                  "decorators": [],
                                  "name": "child",
                                  "optional": false,
                                  "typeAnnotation": null
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
                        "type": "IfStatement",
                        "start": 861,
                        "end": 936,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 865,
                          "end": 879,
                          "left": {
                            "type": "Identifier",
                            "start": 865,
                            "end": 870,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Literal",
                            "start": 875,
                            "end": 879,
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 881,
                          "end": 936,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 895,
                              "end": 926,
                              "expression": {
                                "type": "CallExpression",
                                "start": 895,
                                "end": 925,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 895,
                                  "end": 906,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 895,
                                    "end": 901,
                                    "decorators": [],
                                    "name": "result",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 902,
                                    "end": 906,
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "start": 907,
                                    "end": 924,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 910,
                                      "end": 924,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 910,
                                        "end": 917,
                                        "decorators": [],
                                        "name": "toArray",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 918,
                                          "end": 923,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    }
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 949,
            "end": 963,
            "argument": {
              "type": "Identifier",
              "start": 956,
              "end": 962,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
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
