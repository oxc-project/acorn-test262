__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 388,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 43,
        "name": "Callback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "name": "Args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 67,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "name": "Out",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 70,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "R",
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
        "type": "TSFunctionType",
        "start": 74,
        "end": 109,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 75,
            "end": 88,
            "argument": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 88,
                  "name": "Args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "name": "data",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 100,
                    "end": 103,
                    "typeName": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 103,
                      "name": "Out",
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
              "start": 105,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "name": "R",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 111,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 135,
        "name": "factory",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 135,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 136,
            "end": 139,
            "name": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "name": "Out",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 142,
        "end": 225,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 144,
          "end": 225,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 144,
            "end": 167,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 145,
                "end": 163,
                "name": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 149,
                  "name": "Args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                "out": false,
                "const": false
              },
              {
                "type": "TSTypeParameter",
                "start": 165,
                "end": 166,
                "name": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "R",
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
          "params": [
            {
              "type": "Identifier",
              "start": 168,
              "end": 200,
              "name": "callback",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 176,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 178,
                  "end": 200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 186,
                    "name": "Callback",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 186,
                    "end": 200,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 187,
                        "end": 191,
                        "typeName": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 191,
                          "name": "Args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 193,
                        "end": 196,
                        "typeName": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 196,
                          "name": "Out",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 198,
                        "end": 199,
                        "typeName": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 199,
                          "name": "R",
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
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 225,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 205,
              "end": 225,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 206,
                  "end": 219,
                  "argument": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 213,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 219,
                        "name": "Args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 225,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 238,
            "name": "make",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 241,
            "end": 279,
            "callee": {
              "type": "Identifier",
              "start": 241,
              "end": 248,
              "name": "factory",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 252,
                          "name": "id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 260,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 254,
                            "end": 260
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 262,
                        "end": 273,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 262,
                          "end": 265,
                          "name": "age",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 265,
                          "end": 273,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 267,
                            "end": 273
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 300,
            "name": "usersOverAge",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 303,
            "end": 386,
            "callee": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "name": "make",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 308,
                "end": 385,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 309,
                    "end": 320,
                    "name": "age",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 312,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 325,
                  "end": 385,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 325,
                      "end": 329,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 346,
                            "end": 357,
                            "object": {
                              "type": "Identifier",
                              "start": 346,
                              "end": 350,
                              "name": "data",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 351,
                              "end": 357,
                              "name": "filter",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 358,
                              "end": 381,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 358,
                                  "end": 362,
                                  "name": "user",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "BinaryExpression",
                                "start": 366,
                                "end": 381,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 366,
                                  "end": 374,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 366,
                                    "end": 370,
                                    "name": "user",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 371,
                                    "end": 374,
                                    "name": "age",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "operator": ">=",
                                "right": {
                                  "type": "Identifier",
                                  "start": 378,
                                  "end": 381,
                                  "name": "age",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
