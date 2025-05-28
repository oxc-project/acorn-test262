__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 347,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 103,
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
              "name": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 30,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "V",
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
          "start": 32,
          "end": 103,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 38,
              "end": 101,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 42,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 42,
                "end": 48,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 43,
                    "end": 44,
                    "name": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 46,
                    "end": 47,
                    "name": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "W",
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
                      "typeParameters": null,
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
                        "start": 66,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 69,
                          "end": 83,
                          "typeName": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 77,
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
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
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 86,
                  "end": 100,
                  "typeName": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 94,
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 212,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 111,
        "end": 212,
        "id": {
          "type": "Identifier",
          "start": 121,
          "end": 128,
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 132,
              "end": 133,
              "name": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "V",
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
          "start": 135,
          "end": 212,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 141,
              "end": 210,
              "key": {
                "type": "Identifier",
                "start": 141,
                "end": 145,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 145,
                "end": 151,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 146,
                    "end": 147,
                    "name": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 149,
                    "end": 150,
                    "name": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "W",
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
                  "start": 152,
                  "end": 189,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 162,
                      "end": 189,
                      "typeParameters": null,
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
                        "start": 169,
                        "end": 189,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 172,
                          "end": 189,
                          "typeName": {
                            "type": "Identifier",
                            "start": 172,
                            "end": 179,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 179,
                            "end": 189,
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 180,
                                "end": 183
                              },
                              {
                                "type": "TSAnyKeyword",
                                "start": 185,
                                "end": 188
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 190,
                "end": 209,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 192,
                  "end": 209,
                  "typeName": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 199,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 199,
                    "end": 209,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 200,
                        "end": 203
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 205,
                        "end": 208
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 314,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 313,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 313,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 289,
                "end": 313,
                "typeName": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 297,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 297,
                  "end": 313,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 298,
                      "end": 304
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 306,
                      "end": 312
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
      "start": 315,
      "end": 347,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 346,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 322,
                "end": 346,
                "typeName": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 329,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 329,
                  "end": 346,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 330,
                      "end": 336
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 338,
                      "end": 345
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
