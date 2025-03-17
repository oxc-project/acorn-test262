__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "Sequence",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 271,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 70,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 32,
              "name": "each",
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
                "start": 33,
                "end": 61,
                "name": "iterator",
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
                        "name": "value",
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
                      "start": 54,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 57,
                        "end": 61
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
              "start": 63,
              "end": 69,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 65,
                "end": 69
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 75,
            "end": 122,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 78,
              "end": 81,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 79,
                  "end": 80,
                  "name": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "U",
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
                "start": 82,
                "end": 107,
                "name": "iterator",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 92,
                    "end": 107,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 101,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 98,
                          "end": 101,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 100,
                            "end": 101,
                            "typeName": {
                              "type": "Identifier",
                              "start": 100,
                              "end": 101,
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
                      "start": 103,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 106,
                        "end": 107,
                        "typeName": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 107,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
              "start": 108,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 118,
                  "name": "Sequence",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 118,
                  "end": 121,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 119,
                      "end": 120,
                      "typeName": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 120,
                        "name": "U",
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 127,
            "end": 180,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 133,
              "name": "filter",
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
                "start": 134,
                "end": 165,
                "name": "iterator",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 142,
                  "end": 165,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 144,
                    "end": 165,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 145,
                        "end": 153,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 150,
                          "end": 153,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 152,
                            "end": 153,
                            "typeName": {
                              "type": "Identifier",
                              "start": 152,
                              "end": 153,
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
                      "start": 155,
                      "end": 165,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 158,
                        "end": 165
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
              "start": 166,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 179,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 176,
                  "name": "Sequence",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 176,
                  "end": 179,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 185,
            "end": 269,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 192,
              "name": "groupBy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 192,
              "end": 195,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 193,
                  "end": 194,
                  "name": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "name": "K",
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
                "start": 196,
                "end": 224,
                "name": "keySelector",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 207,
                  "end": 224,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 209,
                    "end": 224,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 210,
                        "end": 218,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 215,
                          "end": 218,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 217,
                            "end": 218,
                            "typeName": {
                              "type": "Identifier",
                              "start": 217,
                              "end": 218,
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
                      "start": 220,
                      "end": 224,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 223,
                        "end": 224,
                        "typeName": {
                          "type": "Identifier",
                          "start": 223,
                          "end": 224,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
              "start": 225,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 227,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 235,
                  "name": "Sequence",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 235,
                  "end": 268,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 236,
                      "end": 267,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 238,
                          "end": 245,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 238,
                            "end": 241,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 241,
                            "end": 244,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 243,
                              "end": 244,
                              "typeName": {
                                "type": "Identifier",
                                "start": 243,
                                "end": 244,
                                "name": "K",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 246,
                          "end": 265,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 251,
                            "name": "items",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 251,
                            "end": 264,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 253,
                              "end": 264,
                              "typeName": {
                                "type": "Identifier",
                                "start": 253,
                                "end": 261,
                                "name": "Sequence",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 261,
                                "end": 264,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 262,
                                    "end": 263,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 262,
                                      "end": 263,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
