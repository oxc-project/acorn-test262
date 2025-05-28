__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 715,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 91,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 91,
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
          "end": 28,
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
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 29,
          "end": 91,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 35,
              "end": 89,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 39,
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
                "start": 39,
                "end": 42,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 40,
                    "end": 41,
                    "name": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
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
                  "start": 43,
                  "end": 74,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 51,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 53,
                      "end": 74,
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
                        "start": 60,
                        "end": 74,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 63,
                          "end": 74,
                          "typeName": {
                            "type": "Identifier",
                            "start": 63,
                            "end": 71,
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 71,
                            "end": 74,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 72,
                                "end": 73,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 72,
                                  "end": 73,
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
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 77,
                  "end": 88,
                  "typeName": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 85,
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 85,
                    "end": 88,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 86,
                        "end": 87,
                        "typeName": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
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
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 109,
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
        "start": 113,
        "end": 173,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 119,
            "end": 171,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 123,
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
              "start": 123,
              "end": 126,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 124,
                  "end": 125,
                  "name": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
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
                "start": 127,
                "end": 157,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 157,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 137,
                    "end": 157,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 138,
                        "end": 142,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 139,
                          "end": 142,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 141,
                            "end": 142,
                            "typeName": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
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
                      "start": 144,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 147,
                        "end": 157,
                        "typeName": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 154,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 154,
                          "end": 157,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 155,
                              "end": 156,
                              "typeName": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 156,
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
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 160,
                "end": 170,
                "typeName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 167,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 167,
                  "end": 170,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 168,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 198,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 197,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 197,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 189,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 189,
                  "end": 197,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 190,
                      "end": 196
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
      "start": 199,
      "end": 222,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 221,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 221,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 213,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 213,
                  "end": 221,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 214,
                      "end": 220
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
      "type": "TSInterfaceDeclaration",
      "start": 225,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 244,
        "decorators": [],
        "name": "IPromise2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 244,
        "end": 250,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 245,
            "end": 246,
            "name": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
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
            "start": 248,
            "end": 249,
            "name": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
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
        "start": 251,
        "end": 324,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 257,
            "end": 322,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 261,
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
              "start": 261,
              "end": 267,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 262,
                  "end": 263,
                  "name": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
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
                  "start": 265,
                  "end": 266,
                  "name": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 266,
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
                "start": 268,
                "end": 303,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 276,
                  "end": 303,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 278,
                    "end": 303,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 279,
                        "end": 283,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 280,
                          "end": 283,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 282,
                            "end": 283,
                            "typeName": {
                              "type": "Identifier",
                              "start": 282,
                              "end": 283,
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
                      "start": 285,
                      "end": 303,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 288,
                        "end": 303,
                        "typeName": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 297,
                          "decorators": [],
                          "name": "IPromise2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 297,
                          "end": 303,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 298,
                              "end": 299,
                              "typeName": {
                                "type": "Identifier",
                                "start": 298,
                                "end": 299,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 301,
                              "end": 302,
                              "typeName": {
                                "type": "Identifier",
                                "start": 301,
                                "end": 302,
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
              "start": 304,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 306,
                "end": 321,
                "typeName": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 315,
                  "decorators": [],
                  "name": "IPromise2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 315,
                  "end": 321,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 316,
                      "end": 317,
                      "typeName": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 317,
                        "decorators": [],
                        "name": "W",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 319,
                      "end": 320,
                      "typeName": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 320,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 325,
      "end": 468,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 343,
        "decorators": [],
        "name": "Promise2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 343,
        "end": 349,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 344,
            "end": 345,
            "name": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
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
            "start": 347,
            "end": 348,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
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
        "start": 350,
        "end": 468,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 356,
            "end": 419,
            "key": {
              "type": "Identifier",
              "start": 356,
              "end": 360,
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
              "start": 360,
              "end": 366,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 361,
                  "end": 362,
                  "name": {
                    "type": "Identifier",
                    "start": 361,
                    "end": 362,
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
                  "start": 364,
                  "end": 365,
                  "name": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 365,
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
                "start": 367,
                "end": 401,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 401,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 377,
                    "end": 401,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 378,
                        "end": 382,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 379,
                          "end": 382,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 381,
                            "end": 382,
                            "typeName": {
                              "type": "Identifier",
                              "start": 381,
                              "end": 382,
                              "decorators": [],
                              "name": "V",
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
                      "start": 384,
                      "end": 401,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 387,
                        "end": 401,
                        "typeName": {
                          "type": "Identifier",
                          "start": 387,
                          "end": 395,
                          "decorators": [],
                          "name": "Promise2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 395,
                          "end": 401,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 396,
                              "end": 397,
                              "typeName": {
                                "type": "Identifier",
                                "start": 396,
                                "end": 397,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 399,
                              "end": 400,
                              "typeName": {
                                "type": "Identifier",
                                "start": 399,
                                "end": 400,
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
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 402,
              "end": 418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 404,
                "end": 418,
                "typeName": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 412,
                  "decorators": [],
                  "name": "Promise2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 412,
                  "end": 418,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 413,
                      "end": 414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 416,
                      "end": 417,
                      "typeName": {
                        "type": "Identifier",
                        "start": 416,
                        "end": 417,
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
    {
      "type": "VariableDeclaration",
      "start": 652,
      "end": 685,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 656,
          "end": 684,
          "id": {
            "type": "Identifier",
            "start": 656,
            "end": 684,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 657,
              "end": 684,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 659,
                "end": 684,
                "typeName": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 668,
                  "decorators": [],
                  "name": "IPromise2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 668,
                  "end": 684,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 669,
                      "end": 675
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 677,
                      "end": 683
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
      "start": 686,
      "end": 715,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 714,
          "id": {
            "type": "Identifier",
            "start": 690,
            "end": 714,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 691,
              "end": 714,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 693,
                "end": 714,
                "typeName": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 701,
                  "decorators": [],
                  "name": "Promise2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 701,
                  "end": 714,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 702,
                      "end": 705
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 707,
                      "end": 713
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
