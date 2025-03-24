__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 387,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 110,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 43,
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 74,
        "end": 109,
        "params": [
          {
            "type": "RestElement",
            "start": 75,
            "end": 88,
            "argument": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 88,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 88,
                  "decorators": [],
                  "name": "Args",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 90,
          "end": 109,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 93,
            "end": 109,
            "params": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 100,
                    "end": 103,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 103,
                      "decorators": [],
                      "name": "Out",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 71,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 62,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 57,
              "end": 62,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 67,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "Out",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 70,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 111,
      "end": 226,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 135,
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 142,
        "end": 225,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 144,
          "end": 225,
          "params": [
            {
              "type": "Identifier",
              "start": 168,
              "end": 200,
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 176,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 178,
                  "end": 200,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 186,
                    "end": 200,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 187,
                        "end": 191,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 191,
                          "decorators": [],
                          "name": "Args",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 193,
                        "end": 196,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 196,
                          "decorators": [],
                          "name": "Out",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 198,
                        "end": 199,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 186,
                    "decorators": [],
                    "name": "Callback",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 225,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 205,
              "end": 225,
              "params": [
                {
                  "type": "RestElement",
                  "start": 206,
                  "end": 219,
                  "argument": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 213,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 213,
                    "end": 219,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 215,
                      "end": 219,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 219,
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 221,
                "end": 225,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 224,
                  "end": 225,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 225,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 144,
            "end": 167,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 145,
                "end": 163,
                "const": false,
                "constraint": {
                  "type": "TSArrayType",
                  "start": 158,
                  "end": 163,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 158,
                    "end": 161
                  }
                },
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 149,
                  "decorators": [],
                  "name": "Args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
              },
              {
                "type": "TSTypeParameter",
                "start": 165,
                "end": 166,
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
              }
            ]
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 135,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 136,
            "end": 139,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "decorators": [],
              "name": "Out",
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
      "start": 228,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 238,
            "decorators": [],
            "name": "make",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 241,
            "end": 279,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 241,
              "end": 248,
              "decorators": [],
              "name": "factory",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 248,
              "end": 277,
              "params": [
                {
                  "type": "TSArrayType",
                  "start": 249,
                  "end": 276,
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "start": 249,
                    "end": 274,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 250,
                        "end": 261,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 252,
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 260,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 254,
                            "end": 260
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 262,
                        "end": 273,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 262,
                          "end": 265,
                          "decorators": [],
                          "name": "age",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 265,
                          "end": 273,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 267,
                            "end": 273
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 386,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 300,
            "decorators": [],
            "name": "usersOverAge",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 386,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 308,
                "end": 385,
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 325,
                  "end": 385,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 333,
                    "end": 385,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 339,
                        "end": 383,
                        "argument": {
                          "type": "CallExpression",
                          "start": 346,
                          "end": 382,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 358,
                              "end": 381,
                              "async": false,
                              "body": {
                                "type": "BinaryExpression",
                                "start": 366,
                                "end": 381,
                                "operator": ">=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 366,
                                  "end": 374,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 366,
                                    "end": 370,
                                    "decorators": [],
                                    "name": "user",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 371,
                                    "end": 374,
                                    "decorators": [],
                                    "name": "age",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 378,
                                  "end": 381,
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 358,
                                  "end": 362,
                                  "decorators": [],
                                  "name": "user",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "typeParameters": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 346,
                            "end": 357,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 346,
                              "end": 350,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 351,
                              "end": 357,
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 325,
                      "end": 329,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 309,
                    "end": 320,
                    "decorators": [],
                    "name": "age",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 312,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "decorators": [],
              "name": "make",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
