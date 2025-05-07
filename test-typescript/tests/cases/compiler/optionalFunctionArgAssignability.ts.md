__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 408,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 109,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 109,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 27,
            "end": 107,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 62,
                "decorators": [],
                "name": "onFulfill",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 62,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 47,
                    "end": 62,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 48,
                        "end": 56,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 53,
                          "end": 56,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 55,
                            "end": 56,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 55,
                              "end": 56,
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
                      "start": 58,
                      "end": 62,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 61,
                        "end": 62,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 64,
                "end": 93,
                "decorators": [],
                "name": "onReject",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 73,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 75,
                    "end": 93,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 76,
                        "end": 87,
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 82,
                          "end": 87,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 84,
                            "end": 87
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 92,
                        "end": 93,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 93,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "start": 94,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 106,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 103,
                  "end": 106,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 104,
                      "end": 105,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 105,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 103,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 31,
              "end": 34,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 32,
                  "end": 33,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 19,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
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
      "type": "VariableDeclaration",
      "start": 112,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 229,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 120,
            "end": 229,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 214,
              "end": 229,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 216,
                  "end": 227,
                  "argument": {
                    "type": "Literal",
                    "start": 223,
                    "end": 227,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 133,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 137,
                "end": 169,
                "decorators": [],
                "name": "onFulfill",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 147,
                  "end": 169,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 149,
                    "end": 169,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 150,
                        "end": 163,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 155,
                          "end": 163,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 157,
                            "end": 163
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 165,
                      "end": 169,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 168,
                        "end": 169,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 171,
                "end": 200,
                "decorators": [],
                "name": "onReject",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 180,
                  "end": 200,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 182,
                    "end": 200,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 183,
                        "end": 194,
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 189,
                          "end": 194,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 191,
                            "end": 194
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 196,
                      "end": 200,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 199,
                        "end": 200,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 200,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 213,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 210,
                  "end": 213,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 212,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 212,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 210,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 133,
              "end": 136,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 134,
                  "end": 135,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 135,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 348,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 236,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 239,
            "end": 348,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 333,
              "end": 348,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 335,
                  "end": 346,
                  "argument": {
                    "type": "Literal",
                    "start": 342,
                    "end": 346,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 248,
              "end": 252,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 256,
                "end": 288,
                "decorators": [],
                "name": "onFulFill",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 266,
                  "end": 288,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 268,
                    "end": 288,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 269,
                        "end": 282,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 274,
                          "end": 282,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 276,
                            "end": 282
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 284,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 287,
                        "end": 288,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 287,
                          "end": 288,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 290,
                "end": 319,
                "decorators": [],
                "name": "onReject",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 299,
                  "end": 319,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 301,
                    "end": 319,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 302,
                        "end": 313,
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 308,
                          "end": 313,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 310,
                            "end": 313
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 315,
                      "end": 319,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 318,
                        "end": 319,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 318,
                          "end": 319,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 322,
                "end": 332,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 329,
                  "end": 332,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 330,
                      "end": 331,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 331,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 329,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 252,
              "end": 255,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 253,
                  "end": 254,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 350,
      "end": 356,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 350,
        "end": 355,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 350,
          "end": 351,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 354,
          "end": 355,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
