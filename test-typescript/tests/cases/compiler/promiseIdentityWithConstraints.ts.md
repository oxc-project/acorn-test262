__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 355,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 123,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 123,
        "body": {
          "type": "TSInterfaceBody",
          "start": 32,
          "end": 123,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 38,
              "end": 121,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 42,
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
                  "start": 69,
                  "end": 103,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 79,
                      "end": 103,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 80,
                          "end": 84,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 81,
                            "end": 84,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 83,
                              "end": 84,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 83,
                                "end": 84,
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
                        "start": 86,
                        "end": 103,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 89,
                          "end": 103,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 97,
                            "end": 103,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 98,
                                "end": 99,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 98,
                                  "end": 99,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 101,
                                "end": 102,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 101,
                                  "end": 102,
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 97,
                            "decorators": [],
                            "name": "IPromise",
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
                "start": 104,
                "end": 120,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 106,
                  "end": 120,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 114,
                    "end": 120,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 115,
                        "end": 116,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 118,
                        "end": 119,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 114,
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 42,
                "end": 68,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 43,
                    "end": 54,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 53,
                      "end": 54,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 56,
                    "end": 67,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 67,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "W",
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
          "start": 17,
          "end": 25,
          "decorators": [],
          "name": "IPromise",
          "optional": false,
          "typeAnnotation": null
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
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 30,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
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
      "start": 124,
      "end": 244,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 131,
        "end": 244,
        "body": {
          "type": "TSInterfaceBody",
          "start": 155,
          "end": 244,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 161,
              "end": 242,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 161,
                "end": 165,
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
                  "start": 192,
                  "end": 225,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 200,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 202,
                      "end": 225,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 203,
                          "end": 207,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 204,
                            "end": 207,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 206,
                              "end": 207,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 206,
                                "end": 207,
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
                        "start": 209,
                        "end": 225,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 212,
                          "end": 225,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 219,
                            "end": 225,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 220,
                                "end": 221,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 220,
                                  "end": 221,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 223,
                                "end": 224,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 223,
                                  "end": 224,
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 219,
                            "decorators": [],
                            "name": "Promise",
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
                "start": 226,
                "end": 241,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 228,
                  "end": 241,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 235,
                    "end": 241,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 236,
                        "end": 237,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 237,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 239,
                        "end": 240,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 235,
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
                "start": 165,
                "end": 191,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 166,
                    "end": 177,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 176,
                      "end": 177,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 179,
                    "end": 190,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 189,
                      "end": 190,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "W",
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
          "start": 141,
          "end": 148,
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 148,
          "end": 154,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 149,
              "end": 150,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 152,
              "end": 153,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
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
      "start": 290,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 321,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 321,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 305,
                  "end": 321,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 306,
                      "end": 312
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 314,
                      "end": 320
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 305,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 323,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 354,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 330,
                "end": 354,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 337,
                  "end": 354,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 338,
                      "end": 344
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 346,
                      "end": 353
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 337,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
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
  "sourceType": "script",
  "hashbang": null
}
```
