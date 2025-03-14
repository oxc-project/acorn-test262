promiseIdentity2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 444,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 103,
        "body": {
          "type": "TSInterfaceBody",
          "start": 32,
          "end": 103,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 38,
              "end": 101,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 42,
                "decorators": [],
                "name": "then",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 83,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 59,
                      "end": 83,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 60,
                          "end": 64,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 61,
                            "end": 64,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 63,
                              "end": 64,
                              "typeName": {
                                "type": "Identifier",
                                "start": 63,
                                "end": 64,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 66,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 83,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 77,
                            "end": 83,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 78,
                                "end": 79,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 78,
                                  "end": 79,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 81,
                                "end": 82,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 81,
                                  "end": 82,
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 77,
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 86,
                  "end": 100,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 94,
                    "end": 100,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 96,
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "decorators": [],
                          "name": "W",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 94,
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 42,
                "end": 48,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 43,
                    "end": 44,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 46,
                    "end": 47,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "W",
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
          "start": 17,
          "end": 25,
          "decorators": [],
          "name": "IPromise",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 25,
          "end": 31,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 26,
              "end": 27,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 30,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "V",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 204,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 111,
        "end": 204,
        "body": {
          "type": "TSInterfaceBody",
          "start": 135,
          "end": 204,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 141,
              "end": 202,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 141,
                "end": 145,
                "decorators": [],
                "name": "then",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 152,
                  "end": 185,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 162,
                      "end": 185,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 163,
                          "end": 167,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 164,
                            "end": 167,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 166,
                              "end": 167,
                              "typeName": {
                                "type": "Identifier",
                                "start": 166,
                                "end": 167,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 169,
                        "end": 185,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 172,
                          "end": 185,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 179,
                            "end": 185,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 180,
                                "end": 181,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 180,
                                  "end": 181,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 183,
                                "end": 184,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 183,
                                  "end": 184,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 172,
                            "end": 179,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 186,
                "end": 201,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 188,
                  "end": 201,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 195,
                    "end": 201,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 196,
                        "end": 197,
                        "typeName": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 197,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 199,
                        "end": 200,
                        "typeName": {
                          "type": "Identifier",
                          "start": 199,
                          "end": 200,
                          "decorators": [],
                          "name": "W",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 195,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 145,
                "end": 151,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 146,
                    "end": 147,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 149,
                    "end": 150,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "W",
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
          "start": 121,
          "end": 128,
          "decorators": [],
          "name": "Promise",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 128,
          "end": 134,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 129,
              "end": 130,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 132,
              "end": 133,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "V",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 414,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 414,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 390,
                "end": 414,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 398,
                  "end": 414,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 399,
                      "end": 405
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 407,
                      "end": 413
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 398,
                  "decorators": [],
                  "name": "IPromise",
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
      "start": 416,
      "end": 444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 443,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 443,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 443,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 423,
                "end": 443,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 430,
                  "end": 443,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 431,
                      "end": 434
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 436,
                      "end": 442
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 430,
                  "decorators": [],
                  "name": "Promise",
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
    }
  ],
  "sourceType": "script"
}
```
