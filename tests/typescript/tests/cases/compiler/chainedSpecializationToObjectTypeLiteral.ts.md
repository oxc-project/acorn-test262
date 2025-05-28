__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 391,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Sequence",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 262,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 69,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 32,
              "decorators": [],
              "name": "each",
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
                "start": 33,
                "end": 61,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 43,
                    "end": 61,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 44,
                        "end": 52,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 49,
                          "end": 52,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 51,
                            "end": 52,
                            "typeName": {
                              "type": "Identifier",
                              "start": 51,
                              "end": 52,
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
                      "start": 54,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 57,
                        "end": 61
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 68,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 64,
                "end": 68
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 74,
            "end": 121,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 77,
              "end": 80,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 78,
                  "end": 79,
                  "name": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "U",
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
                "start": 81,
                "end": 106,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 91,
                    "end": 106,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 92,
                        "end": 100,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 97,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 99,
                            "end": 100,
                            "typeName": {
                              "type": "Identifier",
                              "start": 99,
                              "end": 100,
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
                      "start": 102,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 105,
                        "end": 106,
                        "typeName": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 106,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 117,
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 117,
                  "end": 120,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 118,
                      "end": 119,
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
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
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 126,
            "end": 179,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 132,
              "decorators": [],
              "name": "filter",
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
                "start": 133,
                "end": 164,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 141,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 143,
                    "end": 164,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 144,
                        "end": 152,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 149,
                          "end": 152,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 151,
                            "end": 152,
                            "typeName": {
                              "type": "Identifier",
                              "start": 151,
                              "end": 152,
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
                      "start": 154,
                      "end": 164,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 157,
                        "end": 164
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 175,
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 175,
                  "end": 178,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 176,
                      "end": 177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
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
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 184,
            "end": 260,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 191,
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 191,
              "end": 194,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 192,
                  "end": 193,
                  "name": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 193,
                    "decorators": [],
                    "name": "K",
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
                "start": 195,
                "end": 223,
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 206,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 208,
                    "end": 223,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 209,
                        "end": 217,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 214,
                          "end": 217,
                          "typeAnnotation": {
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 219,
                      "end": 223,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 222,
                        "end": 223,
                        "typeName": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 223,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 234,
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 234,
                  "end": 259,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 235,
                      "end": 258,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 237,
                          "end": 244,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 240,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 240,
                            "end": 243,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 242,
                              "end": 243,
                              "typeName": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 243,
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 245,
                          "end": 256,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 250,
                            "decorators": [],
                            "name": "items",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 250,
                            "end": 255,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 252,
                              "end": 255,
                              "elementType": {
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
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
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
      "type": "VariableDeclaration",
      "start": 264,
      "end": 288,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 287,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 287,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 287,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 279,
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 279,
                  "end": 287,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 323,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 295,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 298,
            "end": 322,
            "callee": {
              "type": "MemberExpression",
              "start": 298,
              "end": 307,
              "object": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 300,
                "end": 307,
                "decorators": [],
                "name": "groupBy",
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
                "start": 308,
                "end": 321,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 308,
                    "end": 309,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 313,
                  "end": 321,
                  "object": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 314,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 321,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
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
      "type": "VariableDeclaration",
      "start": 324,
      "end": 391,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 330,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 333,
            "end": 390,
            "callee": {
              "type": "MemberExpression",
              "start": 333,
              "end": 340,
              "object": {
                "type": "Identifier",
                "start": 333,
                "end": 335,
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 336,
                "end": 340,
                "decorators": [],
                "name": "each",
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
                "start": 341,
                "end": 389,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 346,
                  "end": 389,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 348,
                      "end": 353,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 348,
                        "end": 353,
                        "object": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 353,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "directive": null
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
