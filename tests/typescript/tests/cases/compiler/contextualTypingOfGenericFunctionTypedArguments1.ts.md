__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 450,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
        "start": 24,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 36,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 50,
            "end": 66,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "add",
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
                "start": 54,
                "end": 58,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 58,
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
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
              "start": 59,
              "end": 65,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 93,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 77,
              "decorators": [],
              "name": "remove",
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
                "start": 78,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 81,
                    "end": 82,
                    "typeName": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
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
              "start": 83,
              "end": 92,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 85,
                "end": 92
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
      "type": "TSInterfaceDeclaration",
      "start": 97,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 118,
        "decorators": [],
        "name": "Combinators",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 181,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 125,
            "end": 179,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 132,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 132,
              "end": 135,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 133,
                  "end": 134,
                  "name": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
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
                "start": 136,
                "end": 152,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 137,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 152,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 149,
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 149,
                      "end": 152,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 150,
                          "end": 151,
                          "typeName": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 151,
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
                "start": 154,
                "end": 171,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 171,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 157,
                    "end": 171,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 158,
                        "end": 162,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 159,
                          "end": 162,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 161,
                            "end": 162,
                            "typeName": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 162,
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
                      "start": 164,
                      "end": 171,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 171,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 171,
                          "decorators": [],
                          "name": "Date",
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
              "start": 172,
              "end": 178,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 174,
                "end": 178
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
      "start": 183,
      "end": 210,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 209,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 209,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 201,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 201,
                  "end": 209,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 202,
                      "end": 208
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
      "start": 211,
      "end": 230,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 229,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 229,
                  "decorators": [],
                  "name": "Combinators",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 304,
      "end": 350,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 312,
            "end": 349,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 313,
                "end": 322,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 314,
                  "end": 322,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 316,
                    "end": 322
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 327,
              "end": 349,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 329,
                  "end": 347,
                  "argument": {
                    "type": "CallExpression",
                    "start": 336,
                    "end": 347,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 336,
                      "end": 345,
                      "object": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 337,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 345,
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 385,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 357,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 360,
            "end": 384,
            "callee": {
              "type": "MemberExpression",
              "start": 360,
              "end": 369,
              "object": {
                "type": "Identifier",
                "start": 360,
                "end": 361,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 369,
                "decorators": [],
                "name": "forEach",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 369,
              "end": 377,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 370,
                  "end": 376
                }
              ]
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 378,
                "end": 380,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "decorators": [],
                "name": "f",
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
      "type": "VariableDeclaration",
      "start": 387,
      "end": 449,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 448,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 393,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 396,
            "end": 448,
            "callee": {
              "type": "MemberExpression",
              "start": 396,
              "end": 405,
              "object": {
                "type": "Identifier",
                "start": 396,
                "end": 397,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 398,
                "end": 405,
                "decorators": [],
                "name": "forEach",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 405,
              "end": 413,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 406,
                  "end": 412
                }
              ]
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 414,
                "end": 416,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 418,
                "end": 447,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 425,
                  "end": 447,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 427,
                      "end": 445,
                      "argument": {
                        "type": "CallExpression",
                        "start": 434,
                        "end": 445,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 434,
                          "end": 443,
                          "object": {
                            "type": "Identifier",
                            "start": 434,
                            "end": 435,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 443,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
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
