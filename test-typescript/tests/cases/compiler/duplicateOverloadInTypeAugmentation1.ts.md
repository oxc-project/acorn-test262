duplicateOverloadInTypeAugmentation1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 340,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 282,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 282,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 149,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "reduce",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 32,
                "end": 118,
                "decorators": [],
                "name": "callbackfn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 44,
                    "end": 118,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 45,
                        "end": 61,
                        "decorators": [],
                        "name": "previousValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 58,
                          "end": 61,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 60,
                            "end": 61,
                            "typeName": {
                              "type": "Identifier",
                              "start": 60,
                              "end": 61,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 78,
                        "decorators": [],
                        "name": "currentValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 75,
                          "end": 78,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 77,
                            "end": 78,
                            "typeName": {
                              "type": "Identifier",
                              "start": 77,
                              "end": 78,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 100,
                        "decorators": [],
                        "name": "currentIndex",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 92,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 94,
                            "end": 100
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 102,
                        "end": 112,
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 107,
                          "end": 112,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 109,
                            "end": 112,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 109,
                              "end": 110,
                              "typeName": {
                                "type": "Identifier",
                                "start": 109,
                                "end": 110,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 114,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 117,
                        "end": 118,
                        "typeName": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 128,
                "end": 144,
                "decorators": [],
                "name": "initialValue",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 141,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 143,
                    "end": 144,
                    "typeName": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 154,
            "end": 280,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 160,
              "decorators": [],
              "name": "reduce",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 250,
                "decorators": [],
                "name": "callbackfn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 176,
                    "end": 250,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 177,
                        "end": 193,
                        "decorators": [],
                        "name": "previousValue",
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
                              "name": "U",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 195,
                        "end": 210,
                        "decorators": [],
                        "name": "currentValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 210,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 209,
                            "end": 210,
                            "typeName": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 210,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 212,
                        "end": 232,
                        "decorators": [],
                        "name": "currentIndex",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 224,
                          "end": 232,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 226,
                            "end": 232
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 234,
                        "end": 244,
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 239,
                          "end": 244,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 241,
                            "end": 244,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 241,
                              "end": 242,
                              "typeName": {
                                "type": "Identifier",
                                "start": 241,
                                "end": 242,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 250,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 249,
                        "end": 250,
                        "typeName": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 260,
                "end": 275,
                "decorators": [],
                "name": "initialValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 272,
                  "end": 275,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 274,
                    "end": 275,
                    "typeName": {
                      "type": "Identifier",
                      "start": 274,
                      "end": 275,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 279,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 160,
              "end": 163,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 161,
                  "end": 162,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
                    "decorators": [],
                    "name": "U",
                    "optional": false
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
        "end": 15,
        "decorators": [],
        "name": "Array",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 283,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 303,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 303,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 295,
                  "end": 303,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 296,
                      "end": 302
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 295,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 311,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 314,
            "end": 339,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 323,
                "end": 338,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 333,
                  "end": 338,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 327,
                    "end": 328,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 314,
              "end": 322,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 316,
                "end": 322,
                "decorators": [],
                "name": "reduce",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
