__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 19
          }
        ],
        "start": 17,
        "end": 20
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 32,
                  "end": 33
                }
              ],
              "start": 31,
              "end": 34
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 53,
                              "end": 54
                            },
                            "typeArguments": null,
                            "start": 53,
                            "end": 54
                          },
                          "start": 51,
                          "end": 54
                        },
                        "start": 46,
                        "end": 54
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 59,
                          "end": 66
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 67,
                                "end": 68
                              },
                              "typeArguments": null,
                              "start": 67,
                              "end": 68
                            }
                          ],
                          "start": 66,
                          "end": 69
                        },
                        "start": 59,
                        "end": 69
                      },
                      "start": 56,
                      "end": 69
                    },
                    "start": 45,
                    "end": 69
                  },
                  "start": 43,
                  "end": 69
                },
                "start": 35,
                "end": 69
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 87,
                            "end": 90
                          },
                          "start": 85,
                          "end": 90
                        },
                        "start": 80,
                        "end": 90
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 102
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 103,
                                "end": 104
                              },
                              "typeArguments": null,
                              "start": 103,
                              "end": 104
                            }
                          ],
                          "start": 102,
                          "end": 105
                        },
                        "start": 95,
                        "end": 105
                      },
                      "start": 92,
                      "end": 105
                    },
                    "start": 79,
                    "end": 105
                  },
                  "start": 77,
                  "end": 105
                },
                "start": 71,
                "end": 105
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 129,
                            "end": 132
                          },
                          "start": 127,
                          "end": 132
                        },
                        "start": 119,
                        "end": 132
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 137,
                        "end": 141
                      },
                      "start": 134,
                      "end": 141
                    },
                    "start": 118,
                    "end": 141
                  },
                  "start": 116,
                  "end": 141
                },
                "start": 107,
                "end": 141
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 151
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 153
                      },
                      "typeArguments": null,
                      "start": 152,
                      "end": 153
                    }
                  ],
                  "start": 151,
                  "end": 154
                },
                "start": 144,
                "end": 154
              },
              "start": 142,
              "end": 154
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 27,
            "end": 155
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 164
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 165,
                  "end": 166
                }
              ],
              "start": 164,
              "end": 167
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "typeArguments": null,
                            "start": 186,
                            "end": 187
                          },
                          "start": 184,
                          "end": 187
                        },
                        "start": 179,
                        "end": 187
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 192,
                          "end": 199
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 200,
                                "end": 201
                              },
                              "typeArguments": null,
                              "start": 200,
                              "end": 201
                            }
                          ],
                          "start": 199,
                          "end": 202
                        },
                        "start": 192,
                        "end": 202
                      },
                      "start": 189,
                      "end": 202
                    },
                    "start": 178,
                    "end": 202
                  },
                  "start": 176,
                  "end": 202
                },
                "start": 168,
                "end": 202
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 220,
                            "end": 223
                          },
                          "start": 218,
                          "end": 223
                        },
                        "start": 213,
                        "end": 223
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 228,
                          "end": 229
                        },
                        "typeArguments": null,
                        "start": 228,
                        "end": 229
                      },
                      "start": 225,
                      "end": 229
                    },
                    "start": 212,
                    "end": 229
                  },
                  "start": 210,
                  "end": 229
                },
                "start": 204,
                "end": 229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 253,
                            "end": 256
                          },
                          "start": 251,
                          "end": 256
                        },
                        "start": 243,
                        "end": 256
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 261,
                        "end": 265
                      },
                      "start": 258,
                      "end": 265
                    },
                    "start": 242,
                    "end": 265
                  },
                  "start": 240,
                  "end": 265
                },
                "start": 231,
                "end": 265
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 275
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 277
                      },
                      "typeArguments": null,
                      "start": 276,
                      "end": 277
                    }
                  ],
                  "start": 275,
                  "end": 278
                },
                "start": 268,
                "end": 278
              },
              "start": 266,
              "end": 278
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 160,
            "end": 279
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 288
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 290
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 289,
                  "end": 290
                }
              ],
              "start": 288,
              "end": 291
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 310,
                              "end": 311
                            },
                            "typeArguments": null,
                            "start": 310,
                            "end": 311
                          },
                          "start": 308,
                          "end": 311
                        },
                        "start": 303,
                        "end": 311
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 317
                        },
                        "typeArguments": null,
                        "start": 316,
                        "end": 317
                      },
                      "start": 313,
                      "end": 317
                    },
                    "start": 302,
                    "end": 317
                  },
                  "start": 300,
                  "end": 317
                },
                "start": 292,
                "end": 317
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 335,
                            "end": 338
                          },
                          "start": 333,
                          "end": 338
                        },
                        "start": 328,
                        "end": 338
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 343,
                          "end": 350
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 351,
                                "end": 352
                              },
                              "typeArguments": null,
                              "start": 351,
                              "end": 352
                            }
                          ],
                          "start": 350,
                          "end": 353
                        },
                        "start": 343,
                        "end": 353
                      },
                      "start": 340,
                      "end": 353
                    },
                    "start": 327,
                    "end": 353
                  },
                  "start": 325,
                  "end": 353
                },
                "start": 319,
                "end": 353
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 377,
                            "end": 380
                          },
                          "start": 375,
                          "end": 380
                        },
                        "start": 367,
                        "end": 380
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 385,
                        "end": 389
                      },
                      "start": 382,
                      "end": 389
                    },
                    "start": 366,
                    "end": 389
                  },
                  "start": 364,
                  "end": 389
                },
                "start": 355,
                "end": 389
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 399
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 401
                      },
                      "typeArguments": null,
                      "start": 400,
                      "end": 401
                    }
                  ],
                  "start": 399,
                  "end": 402
                },
                "start": 392,
                "end": 402
              },
              "start": 390,
              "end": 402
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 284,
            "end": 403
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 412
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 414
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 413,
                  "end": 414
                }
              ],
              "start": 412,
              "end": 415
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 434,
                              "end": 435
                            },
                            "typeArguments": null,
                            "start": 434,
                            "end": 435
                          },
                          "start": 432,
                          "end": 435
                        },
                        "start": 427,
                        "end": 435
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 441
                        },
                        "typeArguments": null,
                        "start": 440,
                        "end": 441
                      },
                      "start": 437,
                      "end": 441
                    },
                    "start": 426,
                    "end": 441
                  },
                  "start": 424,
                  "end": 441
                },
                "start": 416,
                "end": 441
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 459,
                            "end": 462
                          },
                          "start": 457,
                          "end": 462
                        },
                        "start": 452,
                        "end": 462
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 468
                        },
                        "typeArguments": null,
                        "start": 467,
                        "end": 468
                      },
                      "start": 464,
                      "end": 468
                    },
                    "start": 451,
                    "end": 468
                  },
                  "start": 449,
                  "end": 468
                },
                "start": 443,
                "end": 468
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 492,
                            "end": 495
                          },
                          "start": 490,
                          "end": 495
                        },
                        "start": 482,
                        "end": 495
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 500,
                        "end": 504
                      },
                      "start": 497,
                      "end": 504
                    },
                    "start": 481,
                    "end": 504
                  },
                  "start": 479,
                  "end": 504
                },
                "start": 470,
                "end": 504
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 514
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 515,
                        "end": 516
                      },
                      "typeArguments": null,
                      "start": 515,
                      "end": 516
                    }
                  ],
                  "start": 514,
                  "end": 517
                },
                "start": 507,
                "end": 517
              },
              "start": 505,
              "end": 517
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 408,
            "end": 518
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 527
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 528,
                    "end": 529
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 528,
                  "end": 529
                }
              ],
              "start": 527,
              "end": 530
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 549,
                              "end": 550
                            },
                            "typeArguments": null,
                            "start": 549,
                            "end": 550
                          },
                          "start": 547,
                          "end": 550
                        },
                        "start": 542,
                        "end": 550
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 555,
                        "end": 558
                      },
                      "start": 552,
                      "end": 558
                    },
                    "start": 541,
                    "end": 558
                  },
                  "start": 539,
                  "end": 558
                },
                "start": 531,
                "end": 558
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 576,
                            "end": 579
                          },
                          "start": 574,
                          "end": 579
                        },
                        "start": 569,
                        "end": 579
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 584,
                        "end": 587
                      },
                      "start": 581,
                      "end": 587
                    },
                    "start": 568,
                    "end": 587
                  },
                  "start": 566,
                  "end": 587
                },
                "start": 560,
                "end": 587
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 611,
                            "end": 614
                          },
                          "start": 609,
                          "end": 614
                        },
                        "start": 601,
                        "end": 614
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 619,
                        "end": 623
                      },
                      "start": 616,
                      "end": 623
                    },
                    "start": 600,
                    "end": 623
                  },
                  "start": 598,
                  "end": 623
                },
                "start": 589,
                "end": 623
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 626,
                "end": 630
              },
              "start": 624,
              "end": 630
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 523,
            "end": 631
          }
        ],
        "start": 21,
        "end": 633
      },
      "declare": false,
      "start": 0,
      "end": 633
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 653
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 655
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 654,
            "end": 655
          }
        ],
        "start": 653,
        "end": 656
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 667
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 669
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 668,
                  "end": 669
                }
              ],
              "start": 667,
              "end": 670
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 689,
                              "end": 690
                            },
                            "typeArguments": null,
                            "start": 689,
                            "end": 690
                          },
                          "start": 687,
                          "end": 690
                        },
                        "start": 682,
                        "end": 690
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 703
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 704,
                                "end": 705
                              },
                              "typeArguments": null,
                              "start": 704,
                              "end": 705
                            }
                          ],
                          "start": 703,
                          "end": 706
                        },
                        "start": 695,
                        "end": 706
                      },
                      "start": 692,
                      "end": 706
                    },
                    "start": 681,
                    "end": 706
                  },
                  "start": 679,
                  "end": 706
                },
                "start": 671,
                "end": 706
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 724,
                            "end": 727
                          },
                          "start": 722,
                          "end": 727
                        },
                        "start": 717,
                        "end": 727
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 732,
                          "end": 740
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 741,
                                "end": 742
                              },
                              "typeArguments": null,
                              "start": 741,
                              "end": 742
                            }
                          ],
                          "start": 740,
                          "end": 743
                        },
                        "start": 732,
                        "end": 743
                      },
                      "start": 729,
                      "end": 743
                    },
                    "start": 716,
                    "end": 743
                  },
                  "start": 714,
                  "end": 743
                },
                "start": 708,
                "end": 743
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 767,
                            "end": 770
                          },
                          "start": 765,
                          "end": 770
                        },
                        "start": 757,
                        "end": 770
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 775,
                        "end": 779
                      },
                      "start": 772,
                      "end": 779
                    },
                    "start": 756,
                    "end": 779
                  },
                  "start": 754,
                  "end": 779
                },
                "start": 745,
                "end": 779
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 790
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 791,
                        "end": 792
                      },
                      "typeArguments": null,
                      "start": 791,
                      "end": 792
                    }
                  ],
                  "start": 790,
                  "end": 793
                },
                "start": 782,
                "end": 793
              },
              "start": 780,
              "end": 793
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 663,
            "end": 794
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 803
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 804,
                  "end": 805
                }
              ],
              "start": 803,
              "end": 806
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 825,
                              "end": 826
                            },
                            "typeArguments": null,
                            "start": 825,
                            "end": 826
                          },
                          "start": 823,
                          "end": 826
                        },
                        "start": 818,
                        "end": 826
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 831,
                          "end": 839
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 840,
                                "end": 841
                              },
                              "typeArguments": null,
                              "start": 840,
                              "end": 841
                            }
                          ],
                          "start": 839,
                          "end": 842
                        },
                        "start": 831,
                        "end": 842
                      },
                      "start": 828,
                      "end": 842
                    },
                    "start": 817,
                    "end": 842
                  },
                  "start": 815,
                  "end": 842
                },
                "start": 807,
                "end": 842
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 860,
                            "end": 863
                          },
                          "start": 858,
                          "end": 863
                        },
                        "start": 853,
                        "end": 863
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 868,
                          "end": 869
                        },
                        "typeArguments": null,
                        "start": 868,
                        "end": 869
                      },
                      "start": 865,
                      "end": 869
                    },
                    "start": 852,
                    "end": 869
                  },
                  "start": 850,
                  "end": 869
                },
                "start": 844,
                "end": 869
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 893,
                            "end": 896
                          },
                          "start": 891,
                          "end": 896
                        },
                        "start": 883,
                        "end": 896
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 901,
                        "end": 905
                      },
                      "start": 898,
                      "end": 905
                    },
                    "start": 882,
                    "end": 905
                  },
                  "start": 880,
                  "end": 905
                },
                "start": 871,
                "end": 905
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 916
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 917,
                        "end": 918
                      },
                      "typeArguments": null,
                      "start": 917,
                      "end": 918
                    }
                  ],
                  "start": 916,
                  "end": 919
                },
                "start": 908,
                "end": 919
              },
              "start": 906,
              "end": 919
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 799,
            "end": 920
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 929
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 930,
                    "end": 931
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 930,
                  "end": 931
                }
              ],
              "start": 929,
              "end": 932
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 951,
                              "end": 952
                            },
                            "typeArguments": null,
                            "start": 951,
                            "end": 952
                          },
                          "start": 949,
                          "end": 952
                        },
                        "start": 944,
                        "end": 952
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 957,
                          "end": 958
                        },
                        "typeArguments": null,
                        "start": 957,
                        "end": 958
                      },
                      "start": 954,
                      "end": 958
                    },
                    "start": 943,
                    "end": 958
                  },
                  "start": 941,
                  "end": 958
                },
                "start": 933,
                "end": 958
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 976,
                            "end": 979
                          },
                          "start": 974,
                          "end": 979
                        },
                        "start": 969,
                        "end": 979
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 984,
                          "end": 992
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 993,
                                "end": 994
                              },
                              "typeArguments": null,
                              "start": 993,
                              "end": 994
                            }
                          ],
                          "start": 992,
                          "end": 995
                        },
                        "start": 984,
                        "end": 995
                      },
                      "start": 981,
                      "end": 995
                    },
                    "start": 968,
                    "end": 995
                  },
                  "start": 966,
                  "end": 995
                },
                "start": 960,
                "end": 995
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1019,
                            "end": 1022
                          },
                          "start": 1017,
                          "end": 1022
                        },
                        "start": 1009,
                        "end": 1022
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1027,
                        "end": 1031
                      },
                      "start": 1024,
                      "end": 1031
                    },
                    "start": 1008,
                    "end": 1031
                  },
                  "start": 1006,
                  "end": 1031
                },
                "start": 997,
                "end": 1031
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1034,
                  "end": 1042
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1043,
                        "end": 1044
                      },
                      "typeArguments": null,
                      "start": 1043,
                      "end": 1044
                    }
                  ],
                  "start": 1042,
                  "end": 1045
                },
                "start": 1034,
                "end": 1045
              },
              "start": 1032,
              "end": 1045
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 925,
            "end": 1046
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 1051,
              "end": 1055
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1056,
                    "end": 1057
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1056,
                  "end": 1057
                }
              ],
              "start": 1055,
              "end": 1058
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1077,
                              "end": 1078
                            },
                            "typeArguments": null,
                            "start": 1077,
                            "end": 1078
                          },
                          "start": 1075,
                          "end": 1078
                        },
                        "start": 1070,
                        "end": 1078
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1083,
                          "end": 1084
                        },
                        "typeArguments": null,
                        "start": 1083,
                        "end": 1084
                      },
                      "start": 1080,
                      "end": 1084
                    },
                    "start": 1069,
                    "end": 1084
                  },
                  "start": 1067,
                  "end": 1084
                },
                "start": 1059,
                "end": 1084
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1102,
                            "end": 1105
                          },
                          "start": 1100,
                          "end": 1105
                        },
                        "start": 1095,
                        "end": 1105
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1110,
                          "end": 1111
                        },
                        "typeArguments": null,
                        "start": 1110,
                        "end": 1111
                      },
                      "start": 1107,
                      "end": 1111
                    },
                    "start": 1094,
                    "end": 1111
                  },
                  "start": 1092,
                  "end": 1111
                },
                "start": 1086,
                "end": 1111
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1135,
                            "end": 1138
                          },
                          "start": 1133,
                          "end": 1138
                        },
                        "start": 1125,
                        "end": 1138
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1143,
                        "end": 1147
                      },
                      "start": 1140,
                      "end": 1147
                    },
                    "start": 1124,
                    "end": 1147
                  },
                  "start": 1122,
                  "end": 1147
                },
                "start": 1113,
                "end": 1147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1150,
                  "end": 1158
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1159,
                        "end": 1160
                      },
                      "typeArguments": null,
                      "start": 1159,
                      "end": 1160
                    }
                  ],
                  "start": 1158,
                  "end": 1161
                },
                "start": 1150,
                "end": 1161
              },
              "start": 1148,
              "end": 1161
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1051,
            "end": 1162
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1171
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1174,
                    "end": 1175
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1174,
                  "end": 1175
                }
              ],
              "start": 1173,
              "end": 1176
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1195,
                              "end": 1196
                            },
                            "typeArguments": null,
                            "start": 1195,
                            "end": 1196
                          },
                          "start": 1193,
                          "end": 1196
                        },
                        "start": 1188,
                        "end": 1196
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1201,
                        "end": 1204
                      },
                      "start": 1198,
                      "end": 1204
                    },
                    "start": 1187,
                    "end": 1204
                  },
                  "start": 1185,
                  "end": 1204
                },
                "start": 1177,
                "end": 1204
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1222,
                            "end": 1225
                          },
                          "start": 1220,
                          "end": 1225
                        },
                        "start": 1215,
                        "end": 1225
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1230,
                        "end": 1233
                      },
                      "start": 1227,
                      "end": 1233
                    },
                    "start": 1214,
                    "end": 1233
                  },
                  "start": 1212,
                  "end": 1233
                },
                "start": 1206,
                "end": 1233
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1257,
                            "end": 1260
                          },
                          "start": 1255,
                          "end": 1260
                        },
                        "start": 1247,
                        "end": 1260
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1265,
                        "end": 1269
                      },
                      "start": 1262,
                      "end": 1269
                    },
                    "start": 1246,
                    "end": 1269
                  },
                  "start": 1244,
                  "end": 1269
                },
                "start": 1235,
                "end": 1269
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1272,
                "end": 1276
              },
              "start": 1270,
              "end": 1276
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1167,
            "end": 1277
          }
        ],
        "start": 657,
        "end": 1279
      },
      "declare": false,
      "start": 635,
      "end": 1279
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1298,
        "end": 1310
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1314,
            "end": 1322
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1323,
                "end": 1329
              }
            ],
            "start": 1322,
            "end": 1330
          },
          "start": 1314,
          "end": 1330
        },
        "start": 1312,
        "end": 1330
      },
      "body": null,
      "expression": false,
      "start": 1281,
      "end": 1331
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionP",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1362
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1366,
            "end": 1373
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1374,
                "end": 1380
              }
            ],
            "start": 1373,
            "end": 1381
          },
          "start": 1366,
          "end": 1381
        },
        "start": 1364,
        "end": 1381
      },
      "body": null,
      "expression": false,
      "start": 1332,
      "end": 1382
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1400,
        "end": 1413
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1417,
            "end": 1425
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1428,
                      "end": 1429
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1431,
                        "end": 1437
                      },
                      "start": 1429,
                      "end": 1437
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1428,
                    "end": 1437
                  }
                ],
                "start": 1426,
                "end": 1439
              }
            ],
            "start": 1425,
            "end": 1440
          },
          "start": 1417,
          "end": 1440
        },
        "start": 1415,
        "end": 1440
      },
      "body": null,
      "expression": false,
      "start": 1383,
      "end": 1441
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1473
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1484
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1487,
                      "end": 1488
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1490,
                        "end": 1496
                      },
                      "start": 1488,
                      "end": 1496
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1487,
                    "end": 1496
                  }
                ],
                "start": 1485,
                "end": 1498
              }
            ],
            "start": 1484,
            "end": 1499
          },
          "start": 1477,
          "end": 1499
        },
        "start": 1475,
        "end": 1499
      },
      "body": null,
      "expression": false,
      "start": 1442,
      "end": 1500
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1518,
        "end": 1531
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1535,
              "end": 1541
            },
            "start": 1533,
            "end": 1541
          },
          "start": 1532,
          "end": 1541
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1544,
            "end": 1552
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1553,
                "end": 1559
              }
            ],
            "start": 1552,
            "end": 1560
          },
          "start": 1544,
          "end": 1560
        },
        "start": 1542,
        "end": 1560
      },
      "body": null,
      "expression": false,
      "start": 1501,
      "end": 1561
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1579,
        "end": 1593
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1597,
              "end": 1603
            },
            "start": 1595,
            "end": 1603
          },
          "start": 1594,
          "end": 1603
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1606,
            "end": 1613
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1614,
                "end": 1620
              }
            ],
            "start": 1613,
            "end": 1621
          },
          "start": 1606,
          "end": 1621
        },
        "start": 1604,
        "end": 1621
      },
      "body": null,
      "expression": false,
      "start": 1562,
      "end": 1622
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1640,
        "end": 1653
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1657,
              "end": 1663
            },
            "start": 1655,
            "end": 1663
          },
          "start": 1654,
          "end": 1663
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1669,
              "end": 1675
            },
            "start": 1667,
            "end": 1675
          },
          "start": 1665,
          "end": 1675
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1678,
            "end": 1686
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1687,
                "end": 1693
              }
            ],
            "start": 1686,
            "end": 1694
          },
          "start": 1678,
          "end": 1694
        },
        "start": 1676,
        "end": 1694
      },
      "body": null,
      "expression": false,
      "start": 1623,
      "end": 1695
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1713,
        "end": 1727
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1731,
              "end": 1737
            },
            "start": 1729,
            "end": 1737
          },
          "start": 1728,
          "end": 1737
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1743,
              "end": 1749
            },
            "start": 1741,
            "end": 1749
          },
          "start": 1739,
          "end": 1749
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1752,
            "end": 1759
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1760,
                "end": 1766
              }
            ],
            "start": 1759,
            "end": 1767
          },
          "start": 1752,
          "end": 1767
        },
        "start": 1750,
        "end": 1767
      },
      "body": null,
      "expression": false,
      "start": 1696,
      "end": 1768
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1786,
        "end": 1799
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1803,
              "end": 1809
            },
            "start": 1801,
            "end": 1809
          },
          "start": 1800,
          "end": 1809
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1819,
                      "end": 1825
                    },
                    "start": 1817,
                    "end": 1825
                  },
                  "start": 1816,
                  "end": 1825
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1830,
                  "end": 1836
                },
                "start": 1827,
                "end": 1836
              },
              "start": 1815,
              "end": 1836
            },
            "start": 1813,
            "end": 1836
          },
          "start": 1811,
          "end": 1836
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1839,
            "end": 1847
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1848,
                "end": 1854
              }
            ],
            "start": 1847,
            "end": 1855
          },
          "start": 1839,
          "end": 1855
        },
        "start": 1837,
        "end": 1855
      },
      "body": null,
      "expression": false,
      "start": 1769,
      "end": 1856
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1874,
        "end": 1888
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1892,
              "end": 1898
            },
            "start": 1890,
            "end": 1898
          },
          "start": 1889,
          "end": 1898
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1908,
                      "end": 1914
                    },
                    "start": 1906,
                    "end": 1914
                  },
                  "start": 1905,
                  "end": 1914
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1919,
                  "end": 1925
                },
                "start": 1916,
                "end": 1925
              },
              "start": 1904,
              "end": 1925
            },
            "start": 1902,
            "end": 1925
          },
          "start": 1900,
          "end": 1925
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1928,
            "end": 1935
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1936,
                "end": 1942
              }
            ],
            "start": 1935,
            "end": 1943
          },
          "start": 1928,
          "end": 1943
        },
        "start": 1926,
        "end": 1943
      },
      "body": null,
      "expression": false,
      "start": 1857,
      "end": 1944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1962,
        "end": 1975
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1979,
              "end": 1985
            },
            "start": 1977,
            "end": 1985
          },
          "start": 1976,
          "end": 1985
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1992,
                      "end": 1993
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1992,
                    "end": 1993
                  }
                ],
                "start": 1991,
                "end": 1994
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1998,
                        "end": 1999
                      },
                      "typeArguments": null,
                      "start": 1998,
                      "end": 1999
                    },
                    "start": 1996,
                    "end": 1999
                  },
                  "start": 1995,
                  "end": 1999
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2004,
                    "end": 2005
                  },
                  "typeArguments": null,
                  "start": 2004,
                  "end": 2005
                },
                "start": 2001,
                "end": 2005
              },
              "start": 1991,
              "end": 2005
            },
            "start": 1989,
            "end": 2005
          },
          "start": 1987,
          "end": 2005
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2008,
            "end": 2016
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2017,
                "end": 2023
              }
            ],
            "start": 2016,
            "end": 2024
          },
          "start": 2008,
          "end": 2024
        },
        "start": 2006,
        "end": 2024
      },
      "body": null,
      "expression": false,
      "start": 1945,
      "end": 2025
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2057
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2061,
              "end": 2067
            },
            "start": 2059,
            "end": 2067
          },
          "start": 2058,
          "end": 2067
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2074,
                      "end": 2075
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2074,
                    "end": 2075
                  }
                ],
                "start": 2073,
                "end": 2076
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2080,
                        "end": 2081
                      },
                      "typeArguments": null,
                      "start": 2080,
                      "end": 2081
                    },
                    "start": 2078,
                    "end": 2081
                  },
                  "start": 2077,
                  "end": 2081
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2086,
                    "end": 2087
                  },
                  "typeArguments": null,
                  "start": 2086,
                  "end": 2087
                },
                "start": 2083,
                "end": 2087
              },
              "start": 2073,
              "end": 2087
            },
            "start": 2071,
            "end": 2087
          },
          "start": 2069,
          "end": 2087
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2090,
            "end": 2097
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2098,
                "end": 2104
              }
            ],
            "start": 2097,
            "end": 2105
          },
          "start": 2090,
          "end": 2105
        },
        "start": 2088,
        "end": 2105
      },
      "body": null,
      "expression": false,
      "start": 2026,
      "end": 2106
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2124,
        "end": 2137
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2143,
                      "end": 2144
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2143,
                    "end": 2144
                  }
                ],
                "start": 2142,
                "end": 2145
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2149,
                        "end": 2150
                      },
                      "typeArguments": null,
                      "start": 2149,
                      "end": 2150
                    },
                    "start": 2147,
                    "end": 2150
                  },
                  "start": 2146,
                  "end": 2150
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2155,
                    "end": 2156
                  },
                  "typeArguments": null,
                  "start": 2155,
                  "end": 2156
                },
                "start": 2152,
                "end": 2156
              },
              "start": 2142,
              "end": 2156
            },
            "start": 2140,
            "end": 2156
          },
          "start": 2138,
          "end": 2156
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2159,
            "end": 2167
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2168,
                "end": 2174
              }
            ],
            "start": 2167,
            "end": 2175
          },
          "start": 2159,
          "end": 2175
        },
        "start": 2157,
        "end": 2175
      },
      "body": null,
      "expression": false,
      "start": 2107,
      "end": 2176
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2194,
        "end": 2208
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2214,
                      "end": 2215
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2214,
                    "end": 2215
                  }
                ],
                "start": 2213,
                "end": 2216
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2220,
                        "end": 2221
                      },
                      "typeArguments": null,
                      "start": 2220,
                      "end": 2221
                    },
                    "start": 2218,
                    "end": 2221
                  },
                  "start": 2217,
                  "end": 2221
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2226,
                    "end": 2227
                  },
                  "typeArguments": null,
                  "start": 2226,
                  "end": 2227
                },
                "start": 2223,
                "end": 2227
              },
              "start": 2213,
              "end": 2227
            },
            "start": 2211,
            "end": 2227
          },
          "start": 2209,
          "end": 2227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2230,
            "end": 2237
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2238,
                "end": 2244
              }
            ],
            "start": 2237,
            "end": 2245
          },
          "start": 2230,
          "end": 2245
        },
        "start": 2228,
        "end": 2245
      },
      "body": null,
      "expression": false,
      "start": 2177,
      "end": 2246
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2264,
        "end": 2277
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2278,
              "end": 2279
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2278,
            "end": 2279
          }
        ],
        "start": 2277,
        "end": 2280
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2284,
                "end": 2285
              },
              "typeArguments": null,
              "start": 2284,
              "end": 2285
            },
            "start": 2282,
            "end": 2285
          },
          "start": 2281,
          "end": 2285
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2295,
                        "end": 2296
                      },
                      "typeArguments": null,
                      "start": 2295,
                      "end": 2296
                    },
                    "start": 2293,
                    "end": 2296
                  },
                  "start": 2292,
                  "end": 2296
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2301,
                    "end": 2302
                  },
                  "typeArguments": null,
                  "start": 2301,
                  "end": 2302
                },
                "start": 2298,
                "end": 2302
              },
              "start": 2291,
              "end": 2302
            },
            "start": 2289,
            "end": 2302
          },
          "start": 2287,
          "end": 2302
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2305,
            "end": 2313
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2314,
                  "end": 2315
                },
                "typeArguments": null,
                "start": 2314,
                "end": 2315
              }
            ],
            "start": 2313,
            "end": 2316
          },
          "start": 2305,
          "end": 2316
        },
        "start": 2303,
        "end": 2316
      },
      "body": null,
      "expression": false,
      "start": 2247,
      "end": 2317
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2335,
        "end": 2349
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2350,
              "end": 2351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2350,
            "end": 2351
          }
        ],
        "start": 2349,
        "end": 2352
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2356,
                "end": 2357
              },
              "typeArguments": null,
              "start": 2356,
              "end": 2357
            },
            "start": 2354,
            "end": 2357
          },
          "start": 2353,
          "end": 2357
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2367,
                        "end": 2368
                      },
                      "typeArguments": null,
                      "start": 2367,
                      "end": 2368
                    },
                    "start": 2365,
                    "end": 2368
                  },
                  "start": 2364,
                  "end": 2368
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2373,
                    "end": 2374
                  },
                  "typeArguments": null,
                  "start": 2373,
                  "end": 2374
                },
                "start": 2370,
                "end": 2374
              },
              "start": 2363,
              "end": 2374
            },
            "start": 2361,
            "end": 2374
          },
          "start": 2359,
          "end": 2374
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2377,
            "end": 2384
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2385,
                  "end": 2386
                },
                "typeArguments": null,
                "start": 2385,
                "end": 2386
              }
            ],
            "start": 2384,
            "end": 2387
          },
          "start": 2377,
          "end": 2387
        },
        "start": 2375,
        "end": 2387
      },
      "body": null,
      "expression": false,
      "start": 2318,
      "end": 2388
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2406,
        "end": 2419
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2420,
              "end": 2421
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2420,
            "end": 2421
          }
        ],
        "start": 2419,
        "end": 2422
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2426,
                "end": 2427
              },
              "typeArguments": null,
              "start": 2426,
              "end": 2427
            },
            "start": 2424,
            "end": 2427
          },
          "start": 2423,
          "end": 2427
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2434,
                      "end": 2435
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2434,
                    "end": 2435
                  }
                ],
                "start": 2433,
                "end": 2436
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2440,
                        "end": 2441
                      },
                      "typeArguments": null,
                      "start": 2440,
                      "end": 2441
                    },
                    "start": 2438,
                    "end": 2441
                  },
                  "start": 2437,
                  "end": 2441
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2446,
                    "end": 2447
                  },
                  "typeArguments": null,
                  "start": 2446,
                  "end": 2447
                },
                "start": 2443,
                "end": 2447
              },
              "start": 2433,
              "end": 2447
            },
            "start": 2431,
            "end": 2447
          },
          "start": 2429,
          "end": 2447
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2450,
            "end": 2458
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2459,
                  "end": 2460
                },
                "typeArguments": null,
                "start": 2459,
                "end": 2460
              }
            ],
            "start": 2458,
            "end": 2461
          },
          "start": 2450,
          "end": 2461
        },
        "start": 2448,
        "end": 2461
      },
      "body": null,
      "expression": false,
      "start": 2389,
      "end": 2462
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2480,
        "end": 2494
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2495,
              "end": 2496
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2495,
            "end": 2496
          }
        ],
        "start": 2494,
        "end": 2497
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2501,
                "end": 2502
              },
              "typeArguments": null,
              "start": 2501,
              "end": 2502
            },
            "start": 2499,
            "end": 2502
          },
          "start": 2498,
          "end": 2502
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2509,
                      "end": 2510
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2509,
                    "end": 2510
                  }
                ],
                "start": 2508,
                "end": 2511
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2515,
                        "end": 2516
                      },
                      "typeArguments": null,
                      "start": 2515,
                      "end": 2516
                    },
                    "start": 2513,
                    "end": 2516
                  },
                  "start": 2512,
                  "end": 2516
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2521,
                    "end": 2522
                  },
                  "typeArguments": null,
                  "start": 2521,
                  "end": 2522
                },
                "start": 2518,
                "end": 2522
              },
              "start": 2508,
              "end": 2522
            },
            "start": 2506,
            "end": 2522
          },
          "start": 2504,
          "end": 2522
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2525,
            "end": 2532
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2533,
                  "end": 2534
                },
                "typeArguments": null,
                "start": 2533,
                "end": 2534
              }
            ],
            "start": 2532,
            "end": 2535
          },
          "start": 2525,
          "end": 2535
        },
        "start": 2523,
        "end": 2535
      },
      "body": null,
      "expression": false,
      "start": 2463,
      "end": 2536
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2554,
        "end": 2568
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2569,
              "end": 2570
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2569,
            "end": 2570
          }
        ],
        "start": 2568,
        "end": 2571
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2577,
                      "end": 2578
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2577,
                    "end": 2578
                  }
                ],
                "start": 2576,
                "end": 2579
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2583,
                        "end": 2584
                      },
                      "typeArguments": null,
                      "start": 2583,
                      "end": 2584
                    },
                    "start": 2581,
                    "end": 2584
                  },
                  "start": 2580,
                  "end": 2584
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2589,
                    "end": 2590
                  },
                  "typeArguments": null,
                  "start": 2589,
                  "end": 2590
                },
                "start": 2586,
                "end": 2590
              },
              "start": 2576,
              "end": 2590
            },
            "start": 2574,
            "end": 2590
          },
          "start": 2572,
          "end": 2590
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2593,
            "end": 2601
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2602,
                  "end": 2603
                },
                "typeArguments": null,
                "start": 2602,
                "end": 2603
              }
            ],
            "start": 2601,
            "end": 2604
          },
          "start": 2593,
          "end": 2604
        },
        "start": 2591,
        "end": 2604
      },
      "body": null,
      "expression": false,
      "start": 2537,
      "end": 2605
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2623,
        "end": 2638
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2639,
              "end": 2640
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2639,
            "end": 2640
          }
        ],
        "start": 2638,
        "end": 2641
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2647,
                      "end": 2648
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2647,
                    "end": 2648
                  }
                ],
                "start": 2646,
                "end": 2649
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2653,
                        "end": 2654
                      },
                      "typeArguments": null,
                      "start": 2653,
                      "end": 2654
                    },
                    "start": 2651,
                    "end": 2654
                  },
                  "start": 2650,
                  "end": 2654
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2659,
                    "end": 2660
                  },
                  "typeArguments": null,
                  "start": 2659,
                  "end": 2660
                },
                "start": 2656,
                "end": 2660
              },
              "start": 2646,
              "end": 2660
            },
            "start": 2644,
            "end": 2660
          },
          "start": 2642,
          "end": 2660
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2663,
            "end": 2670
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2671,
                  "end": 2672
                },
                "typeArguments": null,
                "start": 2671,
                "end": 2672
              }
            ],
            "start": 2670,
            "end": 2673
          },
          "start": 2663,
          "end": 2673
        },
        "start": 2661,
        "end": 2673
      },
      "body": null,
      "expression": false,
      "start": 2606,
      "end": 2674
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2693,
        "end": 2707
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2711,
              "end": 2717
            },
            "start": 2709,
            "end": 2717
          },
          "start": 2708,
          "end": 2717
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2720,
            "end": 2728
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2729,
                "end": 2735
              }
            ],
            "start": 2728,
            "end": 2736
          },
          "start": 2720,
          "end": 2736
        },
        "start": 2718,
        "end": 2736
      },
      "body": null,
      "expression": false,
      "start": 2676,
      "end": 2737
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2755,
        "end": 2769
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2773,
              "end": 2779
            },
            "start": 2771,
            "end": 2779
          },
          "start": 2770,
          "end": 2779
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2782,
            "end": 2790
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2791,
                "end": 2797
              }
            ],
            "start": 2790,
            "end": 2798
          },
          "start": 2782,
          "end": 2798
        },
        "start": 2780,
        "end": 2798
      },
      "body": null,
      "expression": false,
      "start": 2738,
      "end": 2799
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2817,
        "end": 2832
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2836,
              "end": 2842
            },
            "start": 2834,
            "end": 2842
          },
          "start": 2833,
          "end": 2842
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2845,
            "end": 2852
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2853,
                "end": 2859
              }
            ],
            "start": 2852,
            "end": 2860
          },
          "start": 2845,
          "end": 2860
        },
        "start": 2843,
        "end": 2860
      },
      "body": null,
      "expression": false,
      "start": 2800,
      "end": 2861
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2879,
        "end": 2894
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2898,
              "end": 2904
            },
            "start": 2896,
            "end": 2904
          },
          "start": 2895,
          "end": 2904
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2907,
            "end": 2914
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2915,
                "end": 2921
              }
            ],
            "start": 2914,
            "end": 2922
          },
          "start": 2907,
          "end": 2922
        },
        "start": 2905,
        "end": 2922
      },
      "body": null,
      "expression": false,
      "start": 2862,
      "end": 2923
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2942,
        "end": 2956
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2957,
              "end": 2958
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2957,
            "end": 2958
          }
        ],
        "start": 2956,
        "end": 2959
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2963,
                "end": 2964
              },
              "typeArguments": null,
              "start": 2963,
              "end": 2964
            },
            "start": 2961,
            "end": 2964
          },
          "start": 2960,
          "end": 2964
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2967,
            "end": 2975
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2976,
                  "end": 2977
                },
                "typeArguments": null,
                "start": 2976,
                "end": 2977
              }
            ],
            "start": 2975,
            "end": 2978
          },
          "start": 2967,
          "end": 2978
        },
        "start": 2965,
        "end": 2978
      },
      "body": null,
      "expression": false,
      "start": 2925,
      "end": 2979
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2997,
        "end": 3011
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3012,
              "end": 3013
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3012,
            "end": 3013
          }
        ],
        "start": 3011,
        "end": 3014
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3018,
                "end": 3019
              },
              "typeArguments": null,
              "start": 3018,
              "end": 3019
            },
            "start": 3016,
            "end": 3019
          },
          "start": 3015,
          "end": 3019
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3024,
                "end": 3025
              },
              "typeArguments": null,
              "start": 3024,
              "end": 3025
            },
            "start": 3022,
            "end": 3025
          },
          "start": 3021,
          "end": 3025
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 3028,
            "end": 3036
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3037,
                  "end": 3038
                },
                "typeArguments": null,
                "start": 3037,
                "end": 3038
              }
            ],
            "start": 3036,
            "end": 3039
          },
          "start": 3028,
          "end": 3039
        },
        "start": 3026,
        "end": 3039
      },
      "body": null,
      "expression": false,
      "start": 2980,
      "end": 3040
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 3058,
        "end": 3073
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3074,
              "end": 3075
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3074,
            "end": 3075
          }
        ],
        "start": 3073,
        "end": 3076
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3080,
                "end": 3081
              },
              "typeArguments": null,
              "start": 3080,
              "end": 3081
            },
            "start": 3078,
            "end": 3081
          },
          "start": 3077,
          "end": 3081
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 3084,
            "end": 3092
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3093,
                  "end": 3094
                },
                "typeArguments": null,
                "start": 3093,
                "end": 3094
              }
            ],
            "start": 3092,
            "end": 3095
          },
          "start": 3084,
          "end": 3095
        },
        "start": 3082,
        "end": 3095
      },
      "body": null,
      "expression": false,
      "start": 3041,
      "end": 3096
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 3114,
        "end": 3129
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3130,
              "end": 3131
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3130,
            "end": 3131
          }
        ],
        "start": 3129,
        "end": 3132
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3136,
                "end": 3137
              },
              "typeArguments": null,
              "start": 3136,
              "end": 3137
            },
            "start": 3134,
            "end": 3137
          },
          "start": 3133,
          "end": 3137
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3142,
                "end": 3143
              },
              "typeArguments": null,
              "start": 3142,
              "end": 3143
            },
            "start": 3140,
            "end": 3143
          },
          "start": 3139,
          "end": 3143
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 3146,
            "end": 3153
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3154,
                  "end": 3155
                },
                "typeArguments": null,
                "start": 3154,
                "end": 3155
              }
            ],
            "start": 3153,
            "end": 3156
          },
          "start": 3146,
          "end": 3156
        },
        "start": 3144,
        "end": 3156
      },
      "body": null,
      "expression": false,
      "start": 3097,
      "end": 3157
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3167,
                  "end": 3175
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3176,
                      "end": 3182
                    }
                  ],
                  "start": 3175,
                  "end": 3183
                },
                "start": 3167,
                "end": 3183
              },
              "start": 3165,
              "end": 3183
            },
            "start": 3163,
            "end": 3183
          },
          "init": null,
          "definite": false,
          "start": 3163,
          "end": 3183
        }
      ],
      "declare": false,
      "start": 3159,
      "end": 3184
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3189,
            "end": 3192
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3195,
                "end": 3197
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3198,
                "end": 3202
              },
              "optional": false,
              "computed": false,
              "start": 3195,
              "end": 3202
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3203,
                "end": 3215
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3217,
                "end": 3229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3231,
                "end": 3243
              }
            ],
            "optional": false,
            "start": 3195,
            "end": 3244
          },
          "definite": false,
          "start": 3189,
          "end": 3244
        }
      ],
      "declare": false,
      "start": 3185,
      "end": 3245
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3250,
            "end": 3253
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3256,
                    "end": 3258
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3259,
                    "end": 3263
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3256,
                  "end": 3263
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3264,
                    "end": 3276
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3278,
                    "end": 3290
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3292,
                    "end": 3304
                  }
                ],
                "optional": false,
                "start": 3256,
                "end": 3305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3306,
                "end": 3310
              },
              "optional": false,
              "computed": false,
              "start": 3256,
              "end": 3310
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3311,
                "end": 3323
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3325,
                "end": 3337
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3339,
                "end": 3351
              }
            ],
            "optional": false,
            "start": 3256,
            "end": 3352
          },
          "definite": false,
          "start": 3250,
          "end": 3352
        }
      ],
      "declare": false,
      "start": 3246,
      "end": 3353
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3358,
            "end": 3361
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3364,
                "end": 3366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3367,
                "end": 3371
              },
              "optional": false,
              "computed": false,
              "start": 3364,
              "end": 3371
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3372,
                "end": 3385
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3387,
                "end": 3400
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3402,
                "end": 3415
              }
            ],
            "optional": false,
            "start": 3364,
            "end": 3416
          },
          "definite": false,
          "start": 3358,
          "end": 3416
        }
      ],
      "declare": false,
      "start": 3354,
      "end": 3417
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3426,
                  "end": 3433
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3434,
                      "end": 3440
                    }
                  ],
                  "start": 3433,
                  "end": 3441
                },
                "start": 3426,
                "end": 3441
              },
              "start": 3424,
              "end": 3441
            },
            "start": 3422,
            "end": 3441
          },
          "init": null,
          "definite": false,
          "start": 3422,
          "end": 3441
        }
      ],
      "declare": false,
      "start": 3418,
      "end": 3442
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3447,
            "end": 3450
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3453,
                "end": 3455
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3456,
                "end": 3460
              },
              "optional": false,
              "computed": false,
              "start": 3453,
              "end": 3460
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3461,
                "end": 3473
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3475,
                "end": 3487
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3489,
                "end": 3501
              }
            ],
            "optional": false,
            "start": 3453,
            "end": 3502
          },
          "definite": false,
          "start": 3447,
          "end": 3502
        }
      ],
      "declare": false,
      "start": 3443,
      "end": 3503
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3508,
            "end": 3511
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3514,
                "end": 3516
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3517,
                "end": 3521
              },
              "optional": false,
              "computed": false,
              "start": 3514,
              "end": 3521
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3522,
                "end": 3535
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3537,
                "end": 3550
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3552,
                "end": 3565
              }
            ],
            "optional": false,
            "start": 3514,
            "end": 3566
          },
          "definite": false,
          "start": 3508,
          "end": 3566
        }
      ],
      "declare": false,
      "start": 3504,
      "end": 3567
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3572,
            "end": 3575
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3578,
                "end": 3580
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3581,
                "end": 3585
              },
              "optional": false,
              "computed": false,
              "start": 3578,
              "end": 3585
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3586,
                "end": 3599
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3601,
                "end": 3613
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3615,
                "end": 3627
              }
            ],
            "optional": false,
            "start": 3578,
            "end": 3628
          },
          "definite": false,
          "start": 3572,
          "end": 3628
        }
      ],
      "declare": false,
      "start": 3568,
      "end": 3629
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1d",
            "optional": false,
            "typeAnnotation": null,
            "start": 3634,
            "end": 3637
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3640,
                    "end": 3642
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3643,
                    "end": 3647
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3640,
                  "end": 3647
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3648,
                    "end": 3661
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3663,
                    "end": 3675
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3677,
                    "end": 3689
                  }
                ],
                "optional": false,
                "start": 3640,
                "end": 3690
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3691,
                "end": 3695
              },
              "optional": false,
              "computed": false,
              "start": 3640,
              "end": 3695
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3696,
                "end": 3708
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3710,
                "end": 3722
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3724,
                "end": 3736
              }
            ],
            "optional": false,
            "start": 3640,
            "end": 3737
          },
          "definite": false,
          "start": 3634,
          "end": 3737
        }
      ],
      "declare": false,
      "start": 3630,
      "end": 3738
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3748,
                  "end": 3756
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3759,
                            "end": 3760
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3762,
                              "end": 3768
                            },
                            "start": 3760,
                            "end": 3768
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3759,
                          "end": 3769
                        }
                      ],
                      "start": 3757,
                      "end": 3771
                    }
                  ],
                  "start": 3756,
                  "end": 3772
                },
                "start": 3748,
                "end": 3772
              },
              "start": 3746,
              "end": 3772
            },
            "start": 3744,
            "end": 3772
          },
          "init": null,
          "definite": false,
          "start": 3744,
          "end": 3772
        }
      ],
      "declare": false,
      "start": 3740,
      "end": 3773
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3778,
            "end": 3781
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3784,
                "end": 3786
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3787,
                "end": 3791
              },
              "optional": false,
              "computed": false,
              "start": 3784,
              "end": 3791
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3792,
                "end": 3805
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3807,
                "end": 3820
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3822,
                "end": 3835
              }
            ],
            "optional": false,
            "start": 3784,
            "end": 3836
          },
          "definite": false,
          "start": 3778,
          "end": 3836
        }
      ],
      "declare": false,
      "start": 3774,
      "end": 3837
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3842,
            "end": 3845
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3848,
                    "end": 3850
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3851,
                    "end": 3855
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3848,
                  "end": 3855
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3856,
                    "end": 3869
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3871,
                    "end": 3884
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3886,
                    "end": 3899
                  }
                ],
                "optional": false,
                "start": 3848,
                "end": 3900
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3901,
                "end": 3905
              },
              "optional": false,
              "computed": false,
              "start": 3848,
              "end": 3905
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3906,
                "end": 3919
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3921,
                "end": 3934
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3936,
                "end": 3949
              }
            ],
            "optional": false,
            "start": 3848,
            "end": 3950
          },
          "definite": false,
          "start": 3842,
          "end": 3950
        }
      ],
      "declare": false,
      "start": 3838,
      "end": 3951
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3960,
                  "end": 3967
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3970,
                            "end": 3971
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3973,
                              "end": 3979
                            },
                            "start": 3971,
                            "end": 3979
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3970,
                          "end": 3980
                        }
                      ],
                      "start": 3968,
                      "end": 3982
                    }
                  ],
                  "start": 3967,
                  "end": 3983
                },
                "start": 3960,
                "end": 3983
              },
              "start": 3958,
              "end": 3983
            },
            "start": 3956,
            "end": 3983
          },
          "init": null,
          "definite": false,
          "start": 3956,
          "end": 3983
        }
      ],
      "declare": false,
      "start": 3952,
      "end": 3984
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3989,
            "end": 3992
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3995,
                "end": 3997
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3998,
                "end": 4002
              },
              "optional": false,
              "computed": false,
              "start": 3995,
              "end": 4002
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4003,
                "end": 4016
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4018,
                "end": 4031
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4033,
                "end": 4046
              }
            ],
            "optional": false,
            "start": 3995,
            "end": 4047
          },
          "definite": false,
          "start": 3989,
          "end": 4047
        }
      ],
      "declare": false,
      "start": 3985,
      "end": 4048
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4053,
            "end": 4056
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4059,
                "end": 4061
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4062,
                "end": 4066
              },
              "optional": false,
              "computed": false,
              "start": 4059,
              "end": 4066
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4067,
                "end": 4081
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4083,
                "end": 4097
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4099,
                "end": 4113
              }
            ],
            "optional": false,
            "start": 4059,
            "end": 4114
          },
          "definite": false,
          "start": 4053,
          "end": 4114
        }
      ],
      "declare": false,
      "start": 4049,
      "end": 4115
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4120,
            "end": 4123
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4126,
                "end": 4128
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4129,
                "end": 4133
              },
              "optional": false,
              "computed": false,
              "start": 4126,
              "end": 4133
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4134,
                "end": 4148
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4150,
                "end": 4163
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4165,
                "end": 4178
              }
            ],
            "optional": false,
            "start": 4126,
            "end": 4179
          },
          "definite": false,
          "start": 4120,
          "end": 4179
        }
      ],
      "declare": false,
      "start": 4116,
      "end": 4180
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2d",
            "optional": false,
            "typeAnnotation": null,
            "start": 4185,
            "end": 4188
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4191,
                    "end": 4193
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4194,
                    "end": 4198
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4191,
                  "end": 4198
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4199,
                    "end": 4213
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4215,
                    "end": 4228
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4230,
                    "end": 4243
                  }
                ],
                "optional": false,
                "start": 4191,
                "end": 4244
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4245,
                "end": 4249
              },
              "optional": false,
              "computed": false,
              "start": 4191,
              "end": 4249
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4250,
                "end": 4263
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4265,
                "end": 4278
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4280,
                "end": 4293
              }
            ],
            "optional": false,
            "start": 4191,
            "end": 4294
          },
          "definite": false,
          "start": 4185,
          "end": 4294
        }
      ],
      "declare": false,
      "start": 4181,
      "end": 4295
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4305,
                  "end": 4313
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4314,
                      "end": 4320
                    }
                  ],
                  "start": 4313,
                  "end": 4321
                },
                "start": 4305,
                "end": 4321
              },
              "start": 4303,
              "end": 4321
            },
            "start": 4301,
            "end": 4321
          },
          "init": null,
          "definite": false,
          "start": 4301,
          "end": 4321
        }
      ],
      "declare": false,
      "start": 4297,
      "end": 4322
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4327,
            "end": 4330
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4333,
                "end": 4335
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4336,
                "end": 4340
              },
              "optional": false,
              "computed": false,
              "start": 4333,
              "end": 4340
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4341,
                "end": 4354
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4356,
                "end": 4369
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4371,
                "end": 4384
              }
            ],
            "optional": false,
            "start": 4333,
            "end": 4385
          },
          "definite": false,
          "start": 4327,
          "end": 4385
        }
      ],
      "declare": false,
      "start": 4323,
      "end": 4386
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4391,
            "end": 4394
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4397,
                    "end": 4399
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4400,
                    "end": 4404
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4397,
                  "end": 4404
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4405,
                    "end": 4418
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4420,
                    "end": 4433
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4435,
                    "end": 4448
                  }
                ],
                "optional": false,
                "start": 4397,
                "end": 4449
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4450,
                "end": 4454
              },
              "optional": false,
              "computed": false,
              "start": 4397,
              "end": 4454
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4455,
                "end": 4468
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4470,
                "end": 4483
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4485,
                "end": 4498
              }
            ],
            "optional": false,
            "start": 4397,
            "end": 4499
          },
          "definite": false,
          "start": 4391,
          "end": 4499
        }
      ],
      "declare": false,
      "start": 4387,
      "end": 4500
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4509,
                  "end": 4516
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4517,
                      "end": 4523
                    }
                  ],
                  "start": 4516,
                  "end": 4524
                },
                "start": 4509,
                "end": 4524
              },
              "start": 4507,
              "end": 4524
            },
            "start": 4505,
            "end": 4524
          },
          "init": null,
          "definite": false,
          "start": 4505,
          "end": 4524
        }
      ],
      "declare": false,
      "start": 4501,
      "end": 4525
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4530,
            "end": 4533
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4536,
                "end": 4538
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4539,
                "end": 4543
              },
              "optional": false,
              "computed": false,
              "start": 4536,
              "end": 4543
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4544,
                "end": 4557
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4559,
                "end": 4572
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4574,
                "end": 4587
              }
            ],
            "optional": false,
            "start": 4536,
            "end": 4588
          },
          "definite": false,
          "start": 4530,
          "end": 4588
        }
      ],
      "declare": false,
      "start": 4526,
      "end": 4589
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4594,
            "end": 4597
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4600,
                "end": 4602
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4603,
                "end": 4607
              },
              "optional": false,
              "computed": false,
              "start": 4600,
              "end": 4607
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4608,
                "end": 4622
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4624,
                "end": 4638
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4640,
                "end": 4654
              }
            ],
            "optional": false,
            "start": 4600,
            "end": 4655
          },
          "definite": false,
          "start": 4594,
          "end": 4655
        }
      ],
      "declare": false,
      "start": 4590,
      "end": 4656
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4661,
            "end": 4664
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4667,
                "end": 4669
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4670,
                "end": 4674
              },
              "optional": false,
              "computed": false,
              "start": 4667,
              "end": 4674
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4675,
                "end": 4689
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4691,
                "end": 4704
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4706,
                "end": 4719
              }
            ],
            "optional": false,
            "start": 4667,
            "end": 4720
          },
          "definite": false,
          "start": 4661,
          "end": 4720
        }
      ],
      "declare": false,
      "start": 4657,
      "end": 4721
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3d",
            "optional": false,
            "typeAnnotation": null,
            "start": 4726,
            "end": 4729
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4732,
                    "end": 4734
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4735,
                    "end": 4739
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4732,
                  "end": 4739
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4740,
                    "end": 4754
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4756,
                    "end": 4769
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4771,
                    "end": 4784
                  }
                ],
                "optional": false,
                "start": 4732,
                "end": 4785
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4786,
                "end": 4790
              },
              "optional": false,
              "computed": false,
              "start": 4732,
              "end": 4790
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4791,
                "end": 4804
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4806,
                "end": 4819
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4821,
                "end": 4834
              }
            ],
            "optional": false,
            "start": 4732,
            "end": 4835
          },
          "definite": false,
          "start": 4726,
          "end": 4835
        }
      ],
      "declare": false,
      "start": 4722,
      "end": 4836
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4855,
                  "end": 4863
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4864,
                      "end": 4870
                    }
                  ],
                  "start": 4863,
                  "end": 4871
                },
                "start": 4855,
                "end": 4871
              },
              "start": 4853,
              "end": 4871
            },
            "start": 4851,
            "end": 4871
          },
          "init": null,
          "definite": false,
          "start": 4851,
          "end": 4871
        }
      ],
      "declare": false,
      "start": 4847,
      "end": 4872
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sIPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4892,
                        "end": 4895
                      },
                      "start": 4890,
                      "end": 4895
                    },
                    "start": 4889,
                    "end": 4895
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4900,
                      "end": 4908
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4909,
                          "end": 4915
                        }
                      ],
                      "start": 4908,
                      "end": 4916
                    },
                    "start": 4900,
                    "end": 4916
                  },
                  "start": 4897,
                  "end": 4916
                },
                "start": 4888,
                "end": 4916
              },
              "start": 4886,
              "end": 4916
            },
            "start": 4877,
            "end": 4916
          },
          "init": null,
          "definite": false,
          "start": 4877,
          "end": 4916
        }
      ],
      "declare": false,
      "start": 4873,
      "end": 4917
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4936,
                        "end": 4939
                      },
                      "start": 4934,
                      "end": 4939
                    },
                    "start": 4933,
                    "end": 4939
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4944,
                      "end": 4951
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4952,
                          "end": 4958
                        }
                      ],
                      "start": 4951,
                      "end": 4959
                    },
                    "start": 4944,
                    "end": 4959
                  },
                  "start": 4941,
                  "end": 4959
                },
                "start": 4932,
                "end": 4959
              },
              "start": 4930,
              "end": 4959
            },
            "start": 4922,
            "end": 4959
          },
          "init": null,
          "definite": false,
          "start": 4922,
          "end": 4959
        }
      ],
      "declare": false,
      "start": 4918,
      "end": 4960
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4965,
            "end": 4968
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4971,
                "end": 4973
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4974,
                "end": 4978
              },
              "optional": false,
              "computed": false,
              "start": 4971,
              "end": 4978
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4979,
                "end": 4992
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4994,
                "end": 5007
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5009,
                "end": 5022
              }
            ],
            "optional": false,
            "start": 4971,
            "end": 5023
          },
          "definite": false,
          "start": 4965,
          "end": 5023
        }
      ],
      "declare": false,
      "start": 4961,
      "end": 5024
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5038,
            "end": 5041
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5044,
                    "end": 5046
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5047,
                    "end": 5051
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5044,
                  "end": 5051
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5052,
                    "end": 5061
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5063,
                    "end": 5076
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5078,
                    "end": 5091
                  }
                ],
                "optional": false,
                "start": 5044,
                "end": 5092
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5093,
                "end": 5097
              },
              "optional": false,
              "computed": false,
              "start": 5044,
              "end": 5097
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5098,
                "end": 5107
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5109,
                "end": 5122
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5124,
                "end": 5137
              }
            ],
            "optional": false,
            "start": 5044,
            "end": 5138
          },
          "definite": false,
          "start": 5038,
          "end": 5138
        }
      ],
      "declare": false,
      "start": 5034,
      "end": 5139
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5154,
                  "end": 5161
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5162,
                      "end": 5168
                    }
                  ],
                  "start": 5161,
                  "end": 5169
                },
                "start": 5154,
                "end": 5169
              },
              "start": 5152,
              "end": 5169
            },
            "start": 5150,
            "end": 5169
          },
          "init": null,
          "definite": false,
          "start": 5150,
          "end": 5169
        }
      ],
      "declare": false,
      "start": 5146,
      "end": 5170
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5175,
            "end": 5178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5181,
                "end": 5183
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5184,
                "end": 5188
              },
              "optional": false,
              "computed": false,
              "start": 5181,
              "end": 5188
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5189,
                "end": 5202
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5204,
                "end": 5217
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5219,
                "end": 5232
              }
            ],
            "optional": false,
            "start": 5181,
            "end": 5233
          },
          "definite": false,
          "start": 5175,
          "end": 5233
        }
      ],
      "declare": false,
      "start": 5171,
      "end": 5234
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5248,
            "end": 5251
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5254,
                "end": 5256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5257,
                "end": 5261
              },
              "optional": false,
              "computed": false,
              "start": 5254,
              "end": 5261
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5262,
                "end": 5276
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5278,
                "end": 5292
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5294,
                "end": 5308
              }
            ],
            "optional": false,
            "start": 5254,
            "end": 5309
          },
          "definite": false,
          "start": 5248,
          "end": 5309
        }
      ],
      "declare": false,
      "start": 5244,
      "end": 5310
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5325,
            "end": 5328
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5331,
                "end": 5333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5334,
                "end": 5338
              },
              "optional": false,
              "computed": false,
              "start": 5331,
              "end": 5338
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5339,
                "end": 5353
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5355,
                "end": 5368
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5370,
                "end": 5383
              }
            ],
            "optional": false,
            "start": 5331,
            "end": 5384
          },
          "definite": false,
          "start": 5325,
          "end": 5384
        }
      ],
      "declare": false,
      "start": 5321,
      "end": 5385
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4d",
            "optional": false,
            "typeAnnotation": null,
            "start": 5399,
            "end": 5402
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5405,
                    "end": 5407
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5408,
                    "end": 5412
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5405,
                  "end": 5412
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5413,
                    "end": 5422
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5424,
                    "end": 5438
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5440,
                    "end": 5453
                  }
                ],
                "optional": false,
                "start": 5405,
                "end": 5454
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5455,
                "end": 5459
              },
              "optional": false,
              "computed": false,
              "start": 5405,
              "end": 5459
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5460,
                "end": 5469
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5471,
                "end": 5485
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5487,
                "end": 5500
              }
            ],
            "optional": false,
            "start": 5405,
            "end": 5501
          },
          "definite": false,
          "start": 5399,
          "end": 5501
        }
      ],
      "declare": false,
      "start": 5395,
      "end": 5502
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5512,
                  "end": 5520
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5521,
                      "end": 5527
                    }
                  ],
                  "start": 5520,
                  "end": 5528
                },
                "start": 5512,
                "end": 5528
              },
              "start": 5510,
              "end": 5528
            },
            "start": 5508,
            "end": 5528
          },
          "init": null,
          "definite": false,
          "start": 5508,
          "end": 5528
        }
      ],
      "declare": false,
      "start": 5504,
      "end": 5529
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5534,
            "end": 5537
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5540,
                "end": 5542
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5543,
                "end": 5547
              },
              "optional": false,
              "computed": false,
              "start": 5540,
              "end": 5547
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5548,
                "end": 5561
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5563,
                "end": 5576
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5578,
                "end": 5591
              }
            ],
            "optional": false,
            "start": 5540,
            "end": 5592
          },
          "definite": false,
          "start": 5534,
          "end": 5592
        }
      ],
      "declare": false,
      "start": 5530,
      "end": 5593
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5607,
            "end": 5610
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5613,
                    "end": 5615
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5616,
                    "end": 5620
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5613,
                  "end": 5620
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5621,
                    "end": 5630
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5632,
                    "end": 5641
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5643,
                    "end": 5652
                  }
                ],
                "optional": false,
                "start": 5613,
                "end": 5653
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5654,
                "end": 5658
              },
              "optional": false,
              "computed": false,
              "start": 5613,
              "end": 5658
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5659,
                "end": 5668
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5670,
                "end": 5679
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5681,
                "end": 5690
              }
            ],
            "optional": false,
            "start": 5613,
            "end": 5691
          },
          "definite": false,
          "start": 5607,
          "end": 5691
        }
      ],
      "declare": false,
      "start": 5603,
      "end": 5692
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5707,
                  "end": 5714
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5715,
                      "end": 5721
                    }
                  ],
                  "start": 5714,
                  "end": 5722
                },
                "start": 5707,
                "end": 5722
              },
              "start": 5705,
              "end": 5722
            },
            "start": 5703,
            "end": 5722
          },
          "init": null,
          "definite": false,
          "start": 5703,
          "end": 5722
        }
      ],
      "declare": false,
      "start": 5699,
      "end": 5723
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5728,
            "end": 5731
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5734,
                "end": 5736
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5737,
                "end": 5741
              },
              "optional": false,
              "computed": false,
              "start": 5734,
              "end": 5741
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5742,
                "end": 5755
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5757,
                "end": 5770
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5772,
                "end": 5785
              }
            ],
            "optional": false,
            "start": 5734,
            "end": 5786
          },
          "definite": false,
          "start": 5728,
          "end": 5786
        }
      ],
      "declare": false,
      "start": 5724,
      "end": 5787
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5801,
            "end": 5804
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5807,
                "end": 5809
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5810,
                "end": 5814
              },
              "optional": false,
              "computed": false,
              "start": 5807,
              "end": 5814
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5815,
                "end": 5829
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5831,
                "end": 5845
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5847,
                "end": 5861
              }
            ],
            "optional": false,
            "start": 5807,
            "end": 5862
          },
          "definite": false,
          "start": 5801,
          "end": 5862
        }
      ],
      "declare": false,
      "start": 5797,
      "end": 5863
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5877,
            "end": 5880
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5883,
                "end": 5885
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5886,
                "end": 5890
              },
              "optional": false,
              "computed": false,
              "start": 5883,
              "end": 5890
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5891,
                "end": 5905
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5907,
                "end": 5920
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5922,
                "end": 5935
              }
            ],
            "optional": false,
            "start": 5883,
            "end": 5936
          },
          "definite": false,
          "start": 5877,
          "end": 5936
        }
      ],
      "declare": false,
      "start": 5873,
      "end": 5937
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5d",
            "optional": false,
            "typeAnnotation": null,
            "start": 5951,
            "end": 5954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5957,
                    "end": 5959
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5960,
                    "end": 5964
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5957,
                  "end": 5964
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5965,
                    "end": 5973
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5975,
                    "end": 5983
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5985,
                    "end": 5993
                  }
                ],
                "optional": false,
                "start": 5957,
                "end": 5994
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5995,
                "end": 5999
              },
              "optional": false,
              "computed": false,
              "start": 5957,
              "end": 5999
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6000,
                "end": 6009
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6011,
                "end": 6020
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6022,
                "end": 6031
              }
            ],
            "optional": false,
            "start": 5957,
            "end": 6032
          },
          "definite": false,
          "start": 5951,
          "end": 6032
        }
      ],
      "declare": false,
      "start": 5947,
      "end": 6033
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6049,
                  "end": 6057
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6058,
                      "end": 6064
                    }
                  ],
                  "start": 6057,
                  "end": 6065
                },
                "start": 6049,
                "end": 6065
              },
              "start": 6047,
              "end": 6065
            },
            "start": 6045,
            "end": 6065
          },
          "init": null,
          "definite": false,
          "start": 6045,
          "end": 6065
        }
      ],
      "declare": false,
      "start": 6041,
      "end": 6066
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6071,
            "end": 6074
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6077,
                "end": 6079
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6080,
                "end": 6084
              },
              "optional": false,
              "computed": false,
              "start": 6077,
              "end": 6084
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6085,
                "end": 6098
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6100,
                "end": 6113
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6115,
                "end": 6128
              }
            ],
            "optional": false,
            "start": 6077,
            "end": 6129
          },
          "definite": false,
          "start": 6071,
          "end": 6129
        }
      ],
      "declare": false,
      "start": 6067,
      "end": 6130
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6144,
            "end": 6147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6150,
                    "end": 6152
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6153,
                    "end": 6157
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6150,
                  "end": 6157
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6158,
                    "end": 6167
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6169,
                    "end": 6178
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6180,
                    "end": 6189
                  }
                ],
                "optional": false,
                "start": 6150,
                "end": 6190
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6191,
                "end": 6195
              },
              "optional": false,
              "computed": false,
              "start": 6150,
              "end": 6195
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6196,
                "end": 6205
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6207,
                "end": 6216
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6218,
                "end": 6227
              }
            ],
            "optional": false,
            "start": 6150,
            "end": 6228
          },
          "definite": false,
          "start": 6144,
          "end": 6228
        }
      ],
      "declare": false,
      "start": 6140,
      "end": 6229
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6244,
                  "end": 6251
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6252,
                      "end": 6258
                    }
                  ],
                  "start": 6251,
                  "end": 6259
                },
                "start": 6244,
                "end": 6259
              },
              "start": 6242,
              "end": 6259
            },
            "start": 6240,
            "end": 6259
          },
          "init": null,
          "definite": false,
          "start": 6240,
          "end": 6259
        }
      ],
      "declare": false,
      "start": 6236,
      "end": 6260
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6265,
            "end": 6268
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6271,
                "end": 6273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6274,
                "end": 6278
              },
              "optional": false,
              "computed": false,
              "start": 6271,
              "end": 6278
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6279,
                "end": 6292
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6294,
                "end": 6307
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6309,
                "end": 6322
              }
            ],
            "optional": false,
            "start": 6271,
            "end": 6323
          },
          "definite": false,
          "start": 6265,
          "end": 6323
        }
      ],
      "declare": false,
      "start": 6261,
      "end": 6324
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6338,
            "end": 6341
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6344,
                "end": 6346
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6347,
                "end": 6351
              },
              "optional": false,
              "computed": false,
              "start": 6344,
              "end": 6351
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6352,
                "end": 6366
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6368,
                "end": 6382
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6384,
                "end": 6398
              }
            ],
            "optional": false,
            "start": 6344,
            "end": 6399
          },
          "definite": false,
          "start": 6338,
          "end": 6399
        }
      ],
      "declare": false,
      "start": 6334,
      "end": 6400
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6c",
            "optional": false,
            "typeAnnotation": null,
            "start": 6414,
            "end": 6417
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6420,
                "end": 6422
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6423,
                "end": 6427
              },
              "optional": false,
              "computed": false,
              "start": 6420,
              "end": 6427
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6428,
                "end": 6442
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6444,
                "end": 6457
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6459,
                "end": 6472
              }
            ],
            "optional": false,
            "start": 6420,
            "end": 6473
          },
          "definite": false,
          "start": 6414,
          "end": 6473
        }
      ],
      "declare": false,
      "start": 6410,
      "end": 6474
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6d",
            "optional": false,
            "typeAnnotation": null,
            "start": 6488,
            "end": 6491
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6494,
                    "end": 6496
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6497,
                    "end": 6501
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6494,
                  "end": 6501
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6502,
                    "end": 6510
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6512,
                    "end": 6520
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6522,
                    "end": 6530
                  }
                ],
                "optional": false,
                "start": 6494,
                "end": 6531
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6532,
                "end": 6536
              },
              "optional": false,
              "computed": false,
              "start": 6494,
              "end": 6536
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6537,
                "end": 6546
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6548,
                "end": 6557
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6559,
                "end": 6568
              }
            ],
            "optional": false,
            "start": 6494,
            "end": 6569
          },
          "definite": false,
          "start": 6488,
          "end": 6569
        }
      ],
      "declare": false,
      "start": 6484,
      "end": 6570
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6586,
                  "end": 6594
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6595,
                      "end": 6601
                    }
                  ],
                  "start": 6594,
                  "end": 6602
                },
                "start": 6586,
                "end": 6602
              },
              "start": 6584,
              "end": 6602
            },
            "start": 6582,
            "end": 6602
          },
          "init": null,
          "definite": false,
          "start": 6582,
          "end": 6602
        }
      ],
      "declare": false,
      "start": 6578,
      "end": 6603
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6608,
            "end": 6611
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6614,
                "end": 6616
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6617,
                "end": 6621
              },
              "optional": false,
              "computed": false,
              "start": 6614,
              "end": 6621
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6622,
                "end": 6635
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6637,
                "end": 6650
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6652,
                "end": 6665
              }
            ],
            "optional": false,
            "start": 6614,
            "end": 6666
          },
          "definite": false,
          "start": 6608,
          "end": 6666
        }
      ],
      "declare": false,
      "start": 6604,
      "end": 6667
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6681,
            "end": 6684
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6687,
                    "end": 6689
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6690,
                    "end": 6694
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6687,
                  "end": 6694
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6695,
                    "end": 6704
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6706,
                    "end": 6715
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6717,
                    "end": 6726
                  }
                ],
                "optional": false,
                "start": 6687,
                "end": 6727
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6728,
                "end": 6732
              },
              "optional": false,
              "computed": false,
              "start": 6687,
              "end": 6732
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6733,
                "end": 6742
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6744,
                "end": 6753
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6755,
                "end": 6764
              }
            ],
            "optional": false,
            "start": 6687,
            "end": 6765
          },
          "definite": false,
          "start": 6681,
          "end": 6765
        }
      ],
      "declare": false,
      "start": 6677,
      "end": 6766
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6781,
                  "end": 6788
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6789,
                      "end": 6795
                    }
                  ],
                  "start": 6788,
                  "end": 6796
                },
                "start": 6781,
                "end": 6796
              },
              "start": 6779,
              "end": 6796
            },
            "start": 6777,
            "end": 6796
          },
          "init": null,
          "definite": false,
          "start": 6777,
          "end": 6796
        }
      ],
      "declare": false,
      "start": 6773,
      "end": 6797
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6802,
            "end": 6805
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6808,
                "end": 6810
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6811,
                "end": 6815
              },
              "optional": false,
              "computed": false,
              "start": 6808,
              "end": 6815
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6816,
                "end": 6829
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6831,
                "end": 6844
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6846,
                "end": 6859
              }
            ],
            "optional": false,
            "start": 6808,
            "end": 6860
          },
          "definite": false,
          "start": 6802,
          "end": 6860
        }
      ],
      "declare": false,
      "start": 6798,
      "end": 6861
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6875,
            "end": 6878
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6881,
                "end": 6883
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6884,
                "end": 6888
              },
              "optional": false,
              "computed": false,
              "start": 6881,
              "end": 6888
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6889,
                "end": 6903
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6905,
                "end": 6919
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6921,
                "end": 6935
              }
            ],
            "optional": false,
            "start": 6881,
            "end": 6936
          },
          "definite": false,
          "start": 6875,
          "end": 6936
        }
      ],
      "declare": false,
      "start": 6871,
      "end": 6937
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7c",
            "optional": false,
            "typeAnnotation": null,
            "start": 6951,
            "end": 6954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6957,
                "end": 6959
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6960,
                "end": 6964
              },
              "optional": false,
              "computed": false,
              "start": 6957,
              "end": 6964
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6965,
                "end": 6979
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6981,
                "end": 6994
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6996,
                "end": 7009
              }
            ],
            "optional": false,
            "start": 6957,
            "end": 7010
          },
          "definite": false,
          "start": 6951,
          "end": 7010
        }
      ],
      "declare": false,
      "start": 6947,
      "end": 7011
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7025,
            "end": 7028
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7031,
                    "end": 7033
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7034,
                    "end": 7038
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7031,
                  "end": 7038
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7039,
                    "end": 7047
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7049,
                    "end": 7057
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7059,
                    "end": 7067
                  }
                ],
                "optional": false,
                "start": 7031,
                "end": 7068
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7069,
                "end": 7073
              },
              "optional": false,
              "computed": false,
              "start": 7031,
              "end": 7073
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7074,
                "end": 7082
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7084,
                "end": 7092
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7094,
                "end": 7102
              }
            ],
            "optional": false,
            "start": 7031,
            "end": 7103
          },
          "definite": false,
          "start": 7025,
          "end": 7103
        }
      ],
      "declare": false,
      "start": 7021,
      "end": 7104
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7121,
                  "end": 7129
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7130,
                      "end": 7136
                    }
                  ],
                  "start": 7129,
                  "end": 7137
                },
                "start": 7121,
                "end": 7137
              },
              "start": 7119,
              "end": 7137
            },
            "start": 7117,
            "end": 7137
          },
          "init": null,
          "definite": false,
          "start": 7117,
          "end": 7137
        }
      ],
      "declare": false,
      "start": 7113,
      "end": 7138
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nIPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 7158,
                        "end": 7161
                      },
                      "start": 7156,
                      "end": 7161
                    },
                    "start": 7155,
                    "end": 7161
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7166,
                      "end": 7174
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7175,
                          "end": 7181
                        }
                      ],
                      "start": 7174,
                      "end": 7182
                    },
                    "start": 7166,
                    "end": 7182
                  },
                  "start": 7163,
                  "end": 7182
                },
                "start": 7154,
                "end": 7182
              },
              "start": 7152,
              "end": 7182
            },
            "start": 7143,
            "end": 7182
          },
          "init": null,
          "definite": false,
          "start": 7143,
          "end": 7182
        }
      ],
      "declare": false,
      "start": 7139,
      "end": 7183
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nPromise",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 7202,
                        "end": 7205
                      },
                      "start": 7200,
                      "end": 7205
                    },
                    "start": 7199,
                    "end": 7205
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7210,
                      "end": 7217
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7218,
                          "end": 7224
                        }
                      ],
                      "start": 7217,
                      "end": 7225
                    },
                    "start": 7210,
                    "end": 7225
                  },
                  "start": 7207,
                  "end": 7225
                },
                "start": 7198,
                "end": 7225
              },
              "start": 7196,
              "end": 7225
            },
            "start": 7188,
            "end": 7225
          },
          "init": null,
          "definite": false,
          "start": 7188,
          "end": 7225
        }
      ],
      "declare": false,
      "start": 7184,
      "end": 7226
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7231,
            "end": 7234
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7237,
                "end": 7239
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7240,
                "end": 7244
              },
              "optional": false,
              "computed": false,
              "start": 7237,
              "end": 7244
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7245,
                "end": 7258
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7260,
                "end": 7273
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7275,
                "end": 7288
              }
            ],
            "optional": false,
            "start": 7237,
            "end": 7289
          },
          "definite": false,
          "start": 7231,
          "end": 7289
        }
      ],
      "declare": false,
      "start": 7227,
      "end": 7290
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7304,
            "end": 7307
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7310,
                    "end": 7312
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7313,
                    "end": 7317
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7310,
                  "end": 7317
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7318,
                    "end": 7327
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7329,
                    "end": 7338
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7340,
                    "end": 7349
                  }
                ],
                "optional": false,
                "start": 7310,
                "end": 7350
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7351,
                "end": 7355
              },
              "optional": false,
              "computed": false,
              "start": 7310,
              "end": 7355
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7356,
                "end": 7365
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7367,
                "end": 7376
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7378,
                "end": 7387
              }
            ],
            "optional": false,
            "start": 7310,
            "end": 7388
          },
          "definite": false,
          "start": 7304,
          "end": 7388
        }
      ],
      "declare": false,
      "start": 7300,
      "end": 7389
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7404,
                  "end": 7411
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7412,
                      "end": 7418
                    }
                  ],
                  "start": 7411,
                  "end": 7419
                },
                "start": 7404,
                "end": 7419
              },
              "start": 7402,
              "end": 7419
            },
            "start": 7400,
            "end": 7419
          },
          "init": null,
          "definite": false,
          "start": 7400,
          "end": 7419
        }
      ],
      "declare": false,
      "start": 7396,
      "end": 7420
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7425,
            "end": 7428
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7431,
                "end": 7433
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7434,
                "end": 7438
              },
              "optional": false,
              "computed": false,
              "start": 7431,
              "end": 7438
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7439,
                "end": 7452
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7454,
                "end": 7467
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7469,
                "end": 7482
              }
            ],
            "optional": false,
            "start": 7431,
            "end": 7483
          },
          "definite": false,
          "start": 7425,
          "end": 7483
        }
      ],
      "declare": false,
      "start": 7421,
      "end": 7484
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7498,
            "end": 7501
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7504,
                "end": 7506
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7507,
                "end": 7511
              },
              "optional": false,
              "computed": false,
              "start": 7504,
              "end": 7511
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7512,
                "end": 7526
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7528,
                "end": 7542
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7544,
                "end": 7558
              }
            ],
            "optional": false,
            "start": 7504,
            "end": 7559
          },
          "definite": false,
          "start": 7498,
          "end": 7559
        }
      ],
      "declare": false,
      "start": 7494,
      "end": 7560
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8c",
            "optional": false,
            "typeAnnotation": null,
            "start": 7574,
            "end": 7577
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7580,
                "end": 7582
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7583,
                "end": 7587
              },
              "optional": false,
              "computed": false,
              "start": 7580,
              "end": 7587
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7588,
                "end": 7602
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7604,
                "end": 7617
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7619,
                "end": 7632
              }
            ],
            "optional": false,
            "start": 7580,
            "end": 7633
          },
          "definite": false,
          "start": 7574,
          "end": 7633
        }
      ],
      "declare": false,
      "start": 7570,
      "end": 7634
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7648,
            "end": 7651
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7654,
                    "end": 7656
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7657,
                    "end": 7661
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7654,
                  "end": 7661
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7662,
                    "end": 7671
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7673,
                    "end": 7682
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7684,
                    "end": 7693
                  }
                ],
                "optional": false,
                "start": 7654,
                "end": 7694
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7695,
                "end": 7699
              },
              "optional": false,
              "computed": false,
              "start": 7654,
              "end": 7699
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7700,
                "end": 7709
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7711,
                "end": 7720
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7722,
                "end": 7731
              }
            ],
            "optional": false,
            "start": 7654,
            "end": 7732
          },
          "definite": false,
          "start": 7648,
          "end": 7732
        }
      ],
      "declare": false,
      "start": 7644,
      "end": 7733
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7749,
                  "end": 7757
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7758,
                      "end": 7764
                    }
                  ],
                  "start": 7757,
                  "end": 7765
                },
                "start": 7749,
                "end": 7765
              },
              "start": 7747,
              "end": 7765
            },
            "start": 7745,
            "end": 7765
          },
          "init": null,
          "definite": false,
          "start": 7745,
          "end": 7765
        }
      ],
      "declare": false,
      "start": 7741,
      "end": 7766
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7771,
            "end": 7774
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7777,
                "end": 7779
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7780,
                "end": 7784
              },
              "optional": false,
              "computed": false,
              "start": 7777,
              "end": 7784
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7785,
                "end": 7798
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7800,
                "end": 7813
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7815,
                "end": 7828
              }
            ],
            "optional": false,
            "start": 7777,
            "end": 7829
          },
          "definite": false,
          "start": 7771,
          "end": 7829
        }
      ],
      "declare": false,
      "start": 7767,
      "end": 7830
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7844,
            "end": 7847
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7850,
                "end": 7852
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7853,
                "end": 7857
              },
              "optional": false,
              "computed": false,
              "start": 7850,
              "end": 7857
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7858,
                "end": 7867
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7869,
                "end": 7878
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7880,
                "end": 7889
              }
            ],
            "optional": false,
            "start": 7850,
            "end": 7890
          },
          "definite": false,
          "start": 7844,
          "end": 7890
        }
      ],
      "declare": false,
      "start": 7840,
      "end": 7891
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9c",
            "optional": false,
            "typeAnnotation": null,
            "start": 7902,
            "end": 7905
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7908,
                "end": 7910
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7911,
                "end": 7915
              },
              "optional": false,
              "computed": false,
              "start": 7908,
              "end": 7915
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7916,
                "end": 7925
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7927,
                "end": 7936
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7938,
                "end": 7947
              }
            ],
            "optional": false,
            "start": 7908,
            "end": 7948
          },
          "definite": false,
          "start": 7902,
          "end": 7948
        }
      ],
      "declare": false,
      "start": 7898,
      "end": 7949
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7960,
            "end": 7963
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7966,
                "end": 7968
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7969,
                "end": 7973
              },
              "optional": false,
              "computed": false,
              "start": 7966,
              "end": 7973
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 7974,
                "end": 7986
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7988,
                "end": 7997
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7999,
                "end": 8008
              }
            ],
            "optional": false,
            "start": 7966,
            "end": 8009
          },
          "definite": false,
          "start": 7960,
          "end": 8009
        }
      ],
      "declare": false,
      "start": 7956,
      "end": 8010
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8021,
            "end": 8024
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8027,
                    "end": 8029
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8030,
                    "end": 8034
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8027,
                  "end": 8034
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8035,
                    "end": 8047
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8049,
                    "end": 8058
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8060,
                    "end": 8069
                  }
                ],
                "optional": false,
                "start": 8027,
                "end": 8070
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8071,
                "end": 8075
              },
              "optional": false,
              "computed": false,
              "start": 8027,
              "end": 8075
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8076,
                "end": 8085
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8087,
                "end": 8096
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8098,
                "end": 8107
              }
            ],
            "optional": false,
            "start": 8027,
            "end": 8108
          },
          "definite": false,
          "start": 8021,
          "end": 8108
        }
      ],
      "declare": false,
      "start": 8017,
      "end": 8109
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8124,
                  "end": 8131
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 8132,
                      "end": 8138
                    }
                  ],
                  "start": 8131,
                  "end": 8139
                },
                "start": 8124,
                "end": 8139
              },
              "start": 8122,
              "end": 8139
            },
            "start": 8120,
            "end": 8139
          },
          "init": null,
          "definite": false,
          "start": 8120,
          "end": 8139
        }
      ],
      "declare": false,
      "start": 8116,
      "end": 8140
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8145,
            "end": 8148
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8151,
                "end": 8153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8154,
                "end": 8158
              },
              "optional": false,
              "computed": false,
              "start": 8151,
              "end": 8158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8159,
                "end": 8172
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8174,
                "end": 8187
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8189,
                "end": 8202
              }
            ],
            "optional": false,
            "start": 8151,
            "end": 8203
          },
          "definite": false,
          "start": 8145,
          "end": 8203
        }
      ],
      "declare": false,
      "start": 8141,
      "end": 8204
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8218,
            "end": 8221
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8224,
                "end": 8226
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8227,
                "end": 8231
              },
              "optional": false,
              "computed": false,
              "start": 8224,
              "end": 8231
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8232,
                "end": 8246
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8248,
                "end": 8262
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8264,
                "end": 8278
              }
            ],
            "optional": false,
            "start": 8224,
            "end": 8279
          },
          "definite": false,
          "start": 8218,
          "end": 8279
        }
      ],
      "declare": false,
      "start": 8214,
      "end": 8280
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8294,
            "end": 8297
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8300,
                "end": 8302
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8303,
                "end": 8307
              },
              "optional": false,
              "computed": false,
              "start": 8300,
              "end": 8307
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8308,
                "end": 8322
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8324,
                "end": 8337
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8339,
                "end": 8352
              }
            ],
            "optional": false,
            "start": 8300,
            "end": 8353
          },
          "definite": false,
          "start": 8294,
          "end": 8353
        }
      ],
      "declare": false,
      "start": 8290,
      "end": 8354
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 8368,
            "end": 8371
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8374,
                "end": 8376
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8377,
                "end": 8381
              },
              "optional": false,
              "computed": false,
              "start": 8374,
              "end": 8381
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8382,
                "end": 8390
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8392,
                "end": 8400
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8402,
                "end": 8410
              }
            ],
            "optional": false,
            "start": 8374,
            "end": 8411
          },
          "definite": false,
          "start": 8368,
          "end": 8411
        }
      ],
      "declare": false,
      "start": 8364,
      "end": 8412
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8423,
            "end": 8426
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8429,
                "end": 8431
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8432,
                "end": 8436
              },
              "optional": false,
              "computed": false,
              "start": 8429,
              "end": 8436
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8437,
                "end": 8445
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8447,
                "end": 8455
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8457,
                "end": 8465
              }
            ],
            "optional": false,
            "start": 8429,
            "end": 8466
          },
          "definite": false,
          "start": 8423,
          "end": 8466
        }
      ],
      "declare": false,
      "start": 8419,
      "end": 8467
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9f",
            "optional": false,
            "typeAnnotation": null,
            "start": 8478,
            "end": 8481
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8484,
                "end": 8486
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8487,
                "end": 8491
              },
              "optional": false,
              "computed": false,
              "start": 8484,
              "end": 8491
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8492,
                "end": 8504
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8506,
                "end": 8515
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8517,
                "end": 8526
              }
            ],
            "optional": false,
            "start": 8484,
            "end": 8527
          },
          "definite": false,
          "start": 8478,
          "end": 8527
        }
      ],
      "declare": false,
      "start": 8474,
      "end": 8528
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9g",
            "optional": false,
            "typeAnnotation": null,
            "start": 8542,
            "end": 8545
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8548,
                    "end": 8550
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8551,
                    "end": 8555
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8548,
                  "end": 8555
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8556,
                    "end": 8568
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8570,
                    "end": 8579
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8581,
                    "end": 8590
                  }
                ],
                "optional": false,
                "start": 8548,
                "end": 8591
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8592,
                "end": 8596
              },
              "optional": false,
              "computed": false,
              "start": 8548,
              "end": 8596
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8597,
                "end": 8606
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8608,
                "end": 8617
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8619,
                "end": 8628
              }
            ],
            "optional": false,
            "start": 8548,
            "end": 8629
          },
          "definite": false,
          "start": 8542,
          "end": 8629
        }
      ],
      "declare": false,
      "start": 8538,
      "end": 8630
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 8642,
            "end": 8645
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10",
              "optional": false,
              "typeAnnotation": null,
              "start": 8648,
              "end": 8662
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8663,
                    "end": 8664
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8668,
                  "end": 8669
                },
                "id": null,
                "generator": false,
                "start": 8663,
                "end": 8669
              }
            ],
            "optional": false,
            "start": 8648,
            "end": 8670
          },
          "definite": false,
          "start": 8642,
          "end": 8670
        }
      ],
      "declare": false,
      "start": 8638,
      "end": 8671
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8676,
            "end": 8680
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8683,
                "end": 8686
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8687,
                "end": 8691
              },
              "optional": false,
              "computed": false,
              "start": 8683,
              "end": 8691
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8692,
                "end": 8706
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8708,
                "end": 8722
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8724,
                "end": 8738
              }
            ],
            "optional": false,
            "start": 8683,
            "end": 8739
          },
          "definite": false,
          "start": 8676,
          "end": 8739
        }
      ],
      "declare": false,
      "start": 8672,
      "end": 8740
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8751,
            "end": 8755
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8758,
                "end": 8761
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8762,
                "end": 8766
              },
              "optional": false,
              "computed": false,
              "start": 8758,
              "end": 8766
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8767,
                "end": 8776
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8778,
                "end": 8787
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8789,
                "end": 8798
              }
            ],
            "optional": false,
            "start": 8758,
            "end": 8799
          },
          "definite": false,
          "start": 8751,
          "end": 8799
        }
      ],
      "declare": false,
      "start": 8747,
      "end": 8800
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8811,
            "end": 8815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8818,
                "end": 8821
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8822,
                "end": 8826
              },
              "optional": false,
              "computed": false,
              "start": 8818,
              "end": 8826
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8827,
                "end": 8836
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8838,
                "end": 8847
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8849,
                "end": 8858
              }
            ],
            "optional": false,
            "start": 8818,
            "end": 8859
          },
          "definite": false,
          "start": 8811,
          "end": 8859
        }
      ],
      "declare": false,
      "start": 8807,
      "end": 8860
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10d",
            "optional": false,
            "typeAnnotation": null,
            "start": 8871,
            "end": 8875
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8878,
                "end": 8881
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8882,
                "end": 8886
              },
              "optional": false,
              "computed": false,
              "start": 8878,
              "end": 8886
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8887,
                "end": 8899
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8901,
                "end": 8910
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8912,
                "end": 8921
              }
            ],
            "optional": false,
            "start": 8878,
            "end": 8922
          },
          "definite": false,
          "start": 8871,
          "end": 8922
        }
      ],
      "declare": false,
      "start": 8867,
      "end": 8923
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8934,
            "end": 8938
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8941,
                    "end": 8944
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8945,
                    "end": 8949
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8941,
                  "end": 8949
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8950,
                    "end": 8962
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8964,
                    "end": 8973
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8975,
                    "end": 8984
                  }
                ],
                "optional": false,
                "start": 8941,
                "end": 8985
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8986,
                "end": 8990
              },
              "optional": false,
              "computed": false,
              "start": 8941,
              "end": 8990
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8991,
                "end": 9000
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9002,
                "end": 9011
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9013,
                "end": 9022
              }
            ],
            "optional": false,
            "start": 8941,
            "end": 9023
          },
          "definite": false,
          "start": 8934,
          "end": 9023
        }
      ],
      "declare": false,
      "start": 8930,
      "end": 9024
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10",
            "optional": false,
            "typeAnnotation": null,
            "start": 9035,
            "end": 9038
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10P",
              "optional": false,
              "typeAnnotation": null,
              "start": 9041,
              "end": 9056
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9057,
                    "end": 9058
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9062,
                  "end": 9063
                },
                "id": null,
                "generator": false,
                "start": 9057,
                "end": 9063
              }
            ],
            "optional": false,
            "start": 9041,
            "end": 9064
          },
          "definite": false,
          "start": 9035,
          "end": 9064
        }
      ],
      "declare": false,
      "start": 9031,
      "end": 9065
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9070,
            "end": 9074
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9077,
                "end": 9080
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9081,
                "end": 9085
              },
              "optional": false,
              "computed": false,
              "start": 9077,
              "end": 9085
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9086,
                "end": 9100
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9102,
                "end": 9116
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9118,
                "end": 9132
              }
            ],
            "optional": false,
            "start": 9077,
            "end": 9133
          },
          "definite": false,
          "start": 9070,
          "end": 9133
        }
      ],
      "declare": false,
      "start": 9066,
      "end": 9134
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9145,
            "end": 9149
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9152,
                "end": 9155
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9156,
                "end": 9160
              },
              "optional": false,
              "computed": false,
              "start": 9152,
              "end": 9160
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9161,
                "end": 9176
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9178,
                "end": 9193
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9195,
                "end": 9210
              }
            ],
            "optional": false,
            "start": 9152,
            "end": 9211
          },
          "definite": false,
          "start": 9145,
          "end": 9211
        }
      ],
      "declare": false,
      "start": 9141,
      "end": 9212
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9223,
            "end": 9227
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9230,
                "end": 9233
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9234,
                "end": 9238
              },
              "optional": false,
              "computed": false,
              "start": 9230,
              "end": 9238
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9239,
                "end": 9254
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9256,
                "end": 9270
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9272,
                "end": 9286
              }
            ],
            "optional": false,
            "start": 9230,
            "end": 9287
          },
          "definite": false,
          "start": 9223,
          "end": 9287
        }
      ],
      "declare": false,
      "start": 9219,
      "end": 9288
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10d",
            "optional": false,
            "typeAnnotation": null,
            "start": 9299,
            "end": 9303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9306,
                "end": 9309
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9310,
                "end": 9314
              },
              "optional": false,
              "computed": false,
              "start": 9306,
              "end": 9314
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9315,
                "end": 9323
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9325,
                "end": 9333
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9335,
                "end": 9343
              }
            ],
            "optional": false,
            "start": 9306,
            "end": 9344
          },
          "definite": false,
          "start": 9299,
          "end": 9344
        }
      ],
      "declare": false,
      "start": 9295,
      "end": 9345
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10e",
            "optional": false,
            "typeAnnotation": null,
            "start": 9356,
            "end": 9360
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9363,
                "end": 9366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9367,
                "end": 9371
              },
              "optional": false,
              "computed": false,
              "start": 9363,
              "end": 9371
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9372,
                "end": 9381
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9383,
                "end": 9391
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9393,
                "end": 9402
              }
            ],
            "optional": false,
            "start": 9363,
            "end": 9403
          },
          "definite": false,
          "start": 9356,
          "end": 9403
        }
      ],
      "declare": false,
      "start": 9352,
      "end": 9404
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10f",
            "optional": false,
            "typeAnnotation": null,
            "start": 9415,
            "end": 9419
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9422,
                "end": 9425
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9426,
                "end": 9430
              },
              "optional": false,
              "computed": false,
              "start": 9422,
              "end": 9430
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 9431,
                "end": 9444
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9446,
                "end": 9455
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9457,
                "end": 9466
              }
            ],
            "optional": false,
            "start": 9422,
            "end": 9467
          },
          "definite": false,
          "start": 9415,
          "end": 9467
        }
      ],
      "declare": false,
      "start": 9411,
      "end": 9468
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10g",
            "optional": false,
            "typeAnnotation": null,
            "start": 9482,
            "end": 9486
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9489,
                    "end": 9492
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9493,
                    "end": 9497
                  },
                  "optional": false,
                  "computed": false,
                  "start": 9489,
                  "end": 9497
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9498,
                    "end": 9511
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9513,
                    "end": 9522
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9524,
                    "end": 9533
                  }
                ],
                "optional": false,
                "start": 9489,
                "end": 9534
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9535,
                "end": 9539
              },
              "optional": false,
              "computed": false,
              "start": 9489,
              "end": 9539
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9540,
                "end": 9548
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9550,
                "end": 9559
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9561,
                "end": 9570
              }
            ],
            "optional": false,
            "start": 9489,
            "end": 9571
          },
          "definite": false,
          "start": 9482,
          "end": 9571
        }
      ],
      "declare": false,
      "start": 9478,
      "end": 9572
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9589,
                  "end": 9597
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9598,
                      "end": 9604
                    }
                  ],
                  "start": 9597,
                  "end": 9605
                },
                "start": 9589,
                "end": 9605
              },
              "start": 9587,
              "end": 9605
            },
            "start": 9584,
            "end": 9605
          },
          "init": null,
          "definite": false,
          "start": 9584,
          "end": 9605
        }
      ],
      "declare": false,
      "start": 9580,
      "end": 9606
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9611,
            "end": 9615
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9618,
                "end": 9621
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9622,
                "end": 9626
              },
              "optional": false,
              "computed": false,
              "start": 9618,
              "end": 9626
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9627,
                "end": 9641
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9643,
                "end": 9657
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9659,
                "end": 9673
              }
            ],
            "optional": false,
            "start": 9618,
            "end": 9674
          },
          "definite": false,
          "start": 9611,
          "end": 9674
        }
      ],
      "declare": false,
      "start": 9607,
      "end": 9675
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9694,
                  "end": 9701
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9702,
                      "end": 9708
                    }
                  ],
                  "start": 9701,
                  "end": 9709
                },
                "start": 9694,
                "end": 9709
              },
              "start": 9692,
              "end": 9709
            },
            "start": 9689,
            "end": 9709
          },
          "init": null,
          "definite": false,
          "start": 9689,
          "end": 9709
        }
      ],
      "declare": false,
      "start": 9685,
      "end": 9710
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9715,
            "end": 9719
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9722,
                "end": 9725
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9726,
                "end": 9730
              },
              "optional": false,
              "computed": false,
              "start": 9722,
              "end": 9730
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9731,
                "end": 9745
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9747,
                "end": 9761
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9763,
                "end": 9777
              }
            ],
            "optional": false,
            "start": 9722,
            "end": 9778
          },
          "definite": false,
          "start": 9715,
          "end": 9778
        }
      ],
      "declare": false,
      "start": 9711,
      "end": 9779
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9790,
            "end": 9794
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9797,
                "end": 9800
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9801,
                "end": 9805
              },
              "optional": false,
              "computed": false,
              "start": 9797,
              "end": 9805
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9806,
                "end": 9821
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9823,
                "end": 9838
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9840,
                "end": 9855
              }
            ],
            "optional": false,
            "start": 9797,
            "end": 9856
          },
          "definite": false,
          "start": 9790,
          "end": 9856
        }
      ],
      "declare": false,
      "start": 9786,
      "end": 9857
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9871,
            "end": 9875
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9878,
                "end": 9881
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9882,
                "end": 9886
              },
              "optional": false,
              "computed": false,
              "start": 9878,
              "end": 9886
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9887,
                "end": 9902
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9904,
                "end": 9918
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9920,
                "end": 9934
              }
            ],
            "optional": false,
            "start": 9878,
            "end": 9935
          },
          "definite": false,
          "start": 9871,
          "end": 9935
        }
      ],
      "declare": false,
      "start": 9867,
      "end": 9936
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 9951,
            "end": 9954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9957,
              "end": 9971
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9972,
                    "end": 9973
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9977,
                  "end": 9978
                },
                "id": null,
                "generator": false,
                "start": 9972,
                "end": 9978
              }
            ],
            "optional": false,
            "start": 9957,
            "end": 9979
          },
          "definite": false,
          "start": 9951,
          "end": 9979
        }
      ],
      "declare": false,
      "start": 9947,
      "end": 9980
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9985,
            "end": 9989
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9992,
                "end": 9995
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9996,
                "end": 10000
              },
              "optional": false,
              "computed": false,
              "start": 9992,
              "end": 10000
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10001,
                "end": 10015
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10017,
                "end": 10031
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10033,
                "end": 10047
              }
            ],
            "optional": false,
            "start": 9992,
            "end": 10048
          },
          "definite": false,
          "start": 9985,
          "end": 10048
        }
      ],
      "declare": false,
      "start": 9981,
      "end": 10049
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12",
            "optional": false,
            "typeAnnotation": null,
            "start": 10060,
            "end": 10063
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 10066,
              "end": 10080
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10081,
                    "end": 10082
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10086,
                  "end": 10087
                },
                "id": null,
                "generator": false,
                "start": 10081,
                "end": 10087
              }
            ],
            "optional": false,
            "start": 10066,
            "end": 10088
          },
          "definite": false,
          "start": 10060,
          "end": 10088
        }
      ],
      "declare": false,
      "start": 10056,
      "end": 10089
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 10094,
            "end": 10098
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10101,
                "end": 10104
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10105,
                "end": 10109
              },
              "optional": false,
              "computed": false,
              "start": 10101,
              "end": 10109
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10110,
                "end": 10124
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10126,
                "end": 10140
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10142,
                "end": 10156
              }
            ],
            "optional": false,
            "start": 10101,
            "end": 10157
          },
          "definite": false,
          "start": 10094,
          "end": 10157
        }
      ],
      "declare": false,
      "start": 10090,
      "end": 10158
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12b",
            "optional": false,
            "typeAnnotation": null,
            "start": 10169,
            "end": 10173
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10176,
                "end": 10179
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10180,
                "end": 10184
              },
              "optional": false,
              "computed": false,
              "start": 10176,
              "end": 10184
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10185,
                "end": 10200
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10202,
                "end": 10217
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10219,
                "end": 10234
              }
            ],
            "optional": false,
            "start": 10176,
            "end": 10235
          },
          "definite": false,
          "start": 10169,
          "end": 10235
        }
      ],
      "declare": false,
      "start": 10165,
      "end": 10236
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12c",
            "optional": false,
            "typeAnnotation": null,
            "start": 10247,
            "end": 10251
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10254,
                "end": 10257
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10258,
                "end": 10262
              },
              "optional": false,
              "computed": false,
              "start": 10254,
              "end": 10262
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10263,
                "end": 10278
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10280,
                "end": 10294
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10296,
                "end": 10310
              }
            ],
            "optional": false,
            "start": 10254,
            "end": 10311
          },
          "definite": false,
          "start": 10247,
          "end": 10311
        }
      ],
      "declare": false,
      "start": 10243,
      "end": 10312
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 10318
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 56,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 107,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 119,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 134,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 144,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 189,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 225,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 231,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 268,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 292,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 335,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 340,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 343,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 355,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 367,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 382,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 416,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 437,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 464,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 470,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 482,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 497,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 531,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 560,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 581,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 589,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 601,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 616,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 635,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 671,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 682,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 692,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 695,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 708,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 717,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 729,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 732,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 745,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 757,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 772,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 782,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 799,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 807,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 828,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 831,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 844,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 853,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 865,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 871,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 883,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 893,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 898,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 901,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 908,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 925,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 933,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 944,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 954,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 969,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 976,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 981,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 984,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 997,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1009,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1024,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1027,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1034,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1051,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1059,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1070,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1080,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1095,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1107,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1125,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1140,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1143,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1150,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 1177,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1188,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1215,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1227,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1235,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 1247,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1262,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1265,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1272,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1281,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1289,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 1298,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1314,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1323,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1332,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1340,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 1349,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1366,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1374,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1383,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1391,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 1400,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1417,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1431,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1442,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1450,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 1459,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1477,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1490,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1501,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1509,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 1518,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1535,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1544,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1553,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1562,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1570,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 1579,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1597,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1606,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1614,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1623,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1631,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 1640,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1657,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1669,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1678,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1687,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1696,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1704,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 1713,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1731,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1743,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1752,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1760,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1769,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1777,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 1786,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1803,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1811,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1819,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1827,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1830,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1839,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1848,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1857,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1865,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 1874,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1892,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1900,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1908,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1916,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1919,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1928,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1936,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1945,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1953,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 1962,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1979,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1987,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2001,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2008,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2017,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2026,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2034,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 2043,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2061,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2069,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2083,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2090,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2107,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2115,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 2124,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2138,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2152,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2159,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2168,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2177,
    "end": 2184
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2185,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 2194,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2209,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2223,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2230,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2238,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2247,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2255,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 2264,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2287,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2298,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2305,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2318,
    "end": 2325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2326,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 2335,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2359,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2370,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2377,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2389,
    "end": 2396
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2397,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 2406,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2429,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2443,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2450,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2463,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2471,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 2480,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2504,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2518,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2525,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2537,
    "end": 2544
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2545,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 2554,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2572,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2586,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2593,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2606,
    "end": 2613
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2614,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 2623,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2642,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2656,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2663,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2676,
    "end": 2683
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2684,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2693,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2711,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2720,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2729,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2738,
    "end": 2745
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2746,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2755,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2773,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2782,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2791,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2800,
    "end": 2807
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2808,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2817,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2836,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2845,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2853,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2862,
    "end": 2869
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2870,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2879,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2898,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2907,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2915,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2925,
    "end": 2932
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2933,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2942,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2967,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2980,
    "end": 2987
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2988,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2997,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3028,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3041,
    "end": 3048
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3049,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 3058,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3084,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3097,
    "end": 3104
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3105,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 3114,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3146,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3159,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3163,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3167,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3176,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3185,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 3189,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3195,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3198,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3203,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3217,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3231,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3246,
    "end": 3249
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 3250,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3256,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3259,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3264,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3278,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3292,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3306,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3311,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3325,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3339,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3354,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "r1c",
    "start": 3358,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3364,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3367,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3372,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3387,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3402,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3418,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3422,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3426,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3434,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3443,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "s1a",
    "start": 3447,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3453,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3456,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3461,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3475,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3489,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3504,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "s1b",
    "start": 3508,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3514,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3517,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3522,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3537,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3552,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3568,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "s1c",
    "start": 3572,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3578,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3581,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3586,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3601,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3615,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3627,
    "end": 3628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3630,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "s1d",
    "start": 3634,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3640,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3643,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3648,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3663,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3677,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3691,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3696,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3710,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3722,
    "end": 3723
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3724,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3740,
    "end": 3743
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3744,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3748,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3762,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3774,
    "end": 3777
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3778,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3784,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3787,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3792,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3807,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3822,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3838,
    "end": 3841
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3842,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3848,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3851,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3856,
    "end": 3869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3871,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3886,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3901,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3906,
    "end": 3919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3921,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3936,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3952,
    "end": 3955
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3956,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3960,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3973,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3985,
    "end": 3988
  },
  {
    "type": "Identifier",
    "value": "s2a",
    "start": 3989,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3995,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3998,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4003,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4018,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4033,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4049,
    "end": 4052
  },
  {
    "type": "Identifier",
    "value": "s2b",
    "start": 4053,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4059,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4062,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4067,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4081,
    "end": 4082
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4083,
    "end": 4097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4099,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4116,
    "end": 4119
  },
  {
    "type": "Identifier",
    "value": "s2c",
    "start": 4120,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4126,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4129,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4134,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4150,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4165,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4181,
    "end": 4184
  },
  {
    "type": "Identifier",
    "value": "s2d",
    "start": 4185,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4191,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4194,
    "end": 4198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 4199,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4215,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4230,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4245,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4250,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4265,
    "end": 4278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4280,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4297,
    "end": 4300
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4301,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4305,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4314,
    "end": 4320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4320,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4323,
    "end": 4326
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 4327,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4333,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4336,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4341,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4356,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4371,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4387,
    "end": 4390
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 4391,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4395,
    "end": 4396
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4397,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4400,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4405,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4420,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4435,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4450,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4455,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4470,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4485,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4501,
    "end": 4504
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4505,
    "end": 4507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4509,
    "end": 4516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4516,
    "end": 4517
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4517,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4526,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "s3a",
    "start": 4530,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4536,
    "end": 4538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4539,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4544,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4559,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4574,
    "end": 4587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4590,
    "end": 4593
  },
  {
    "type": "Identifier",
    "value": "s3b",
    "start": 4594,
    "end": 4597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4600,
    "end": 4602
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4602,
    "end": 4603
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4603,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4608,
    "end": 4622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4622,
    "end": 4623
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4624,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4640,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4657,
    "end": 4660
  },
  {
    "type": "Identifier",
    "value": "s3c",
    "start": 4661,
    "end": 4664
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4667,
    "end": 4669
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4669,
    "end": 4670
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4670,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4674,
    "end": 4675
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4675,
    "end": 4689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4689,
    "end": 4690
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4691,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4706,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4719,
    "end": 4720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4722,
    "end": 4725
  },
  {
    "type": "Identifier",
    "value": "s3d",
    "start": 4726,
    "end": 4729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4732,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4735,
    "end": 4739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4740,
    "end": 4754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4756,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4771,
    "end": 4784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4784,
    "end": 4785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4785,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4786,
    "end": 4790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4791,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4806,
    "end": 4819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4819,
    "end": 4820
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4821,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4834,
    "end": 4835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4835,
    "end": 4836
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4847,
    "end": 4850
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4851,
    "end": 4853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4853,
    "end": 4854
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4855,
    "end": 4863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4863,
    "end": 4864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4864,
    "end": 4870
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4870,
    "end": 4871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4873,
    "end": 4876
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4877,
    "end": 4886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4886,
    "end": 4887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4889,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4890,
    "end": 4891
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4892,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4897,
    "end": 4899
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4900,
    "end": 4908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4908,
    "end": 4909
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4909,
    "end": 4915
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4915,
    "end": 4916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4916,
    "end": 4917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4918,
    "end": 4921
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 4922,
    "end": 4930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4936,
    "end": 4939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4941,
    "end": 4943
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4944,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4952,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4959,
    "end": 4960
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4961,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 4965,
    "end": 4968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4969,
    "end": 4970
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4971,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4974,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4979,
    "end": 4992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4994,
    "end": 5007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5007,
    "end": 5008
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5009,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5034,
    "end": 5037
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 5038,
    "end": 5041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5042,
    "end": 5043
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 5044,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5047,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5052,
    "end": 5061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5061,
    "end": 5062
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5063,
    "end": 5076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5076,
    "end": 5077
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5078,
    "end": 5091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5093,
    "end": 5097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5097,
    "end": 5098
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5098,
    "end": 5107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5107,
    "end": 5108
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5109,
    "end": 5122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5122,
    "end": 5123
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5124,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5138,
    "end": 5139
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5146,
    "end": 5149
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5150,
    "end": 5152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5152,
    "end": 5153
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5154,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5162,
    "end": 5168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5168,
    "end": 5169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5169,
    "end": 5170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5171,
    "end": 5174
  },
  {
    "type": "Identifier",
    "value": "s4a",
    "start": 5175,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5181,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5184,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5189,
    "end": 5202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5204,
    "end": 5217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5217,
    "end": 5218
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5219,
    "end": 5232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5232,
    "end": 5233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5233,
    "end": 5234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5244,
    "end": 5247
  },
  {
    "type": "Identifier",
    "value": "s4b",
    "start": 5248,
    "end": 5251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5254,
    "end": 5256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5256,
    "end": 5257
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5257,
    "end": 5261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5261,
    "end": 5262
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5262,
    "end": 5276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5276,
    "end": 5277
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5278,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5294,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5308,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5321,
    "end": 5324
  },
  {
    "type": "Identifier",
    "value": "s4c",
    "start": 5325,
    "end": 5328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5331,
    "end": 5333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5334,
    "end": 5338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5338,
    "end": 5339
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5339,
    "end": 5353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5353,
    "end": 5354
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5355,
    "end": 5368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5368,
    "end": 5369
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5370,
    "end": 5383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5383,
    "end": 5384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5384,
    "end": 5385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5395,
    "end": 5398
  },
  {
    "type": "Identifier",
    "value": "s4d",
    "start": 5399,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5403,
    "end": 5404
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5405,
    "end": 5407
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5407,
    "end": 5408
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5408,
    "end": 5412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5412,
    "end": 5413
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5413,
    "end": 5422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5422,
    "end": 5423
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5424,
    "end": 5438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5438,
    "end": 5439
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5440,
    "end": 5453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5453,
    "end": 5454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5454,
    "end": 5455
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5455,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5459,
    "end": 5460
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5460,
    "end": 5469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5469,
    "end": 5470
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5471,
    "end": 5485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5485,
    "end": 5486
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5487,
    "end": 5500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5500,
    "end": 5501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5504,
    "end": 5507
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5508,
    "end": 5510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5510,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5512,
    "end": 5520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5520,
    "end": 5521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5521,
    "end": 5527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5527,
    "end": 5528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5528,
    "end": 5529
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5530,
    "end": 5533
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 5534,
    "end": 5537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5538,
    "end": 5539
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5540,
    "end": 5542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5542,
    "end": 5543
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5543,
    "end": 5547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5547,
    "end": 5548
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5548,
    "end": 5561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5561,
    "end": 5562
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5563,
    "end": 5576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5576,
    "end": 5577
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5578,
    "end": 5591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5591,
    "end": 5592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5592,
    "end": 5593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5603,
    "end": 5606
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 5607,
    "end": 5610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5611,
    "end": 5612
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5613,
    "end": 5615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5615,
    "end": 5616
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5616,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5620,
    "end": 5621
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5621,
    "end": 5630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5632,
    "end": 5641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5641,
    "end": 5642
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5643,
    "end": 5652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5652,
    "end": 5653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5653,
    "end": 5654
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5654,
    "end": 5658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5658,
    "end": 5659
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5659,
    "end": 5668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5668,
    "end": 5669
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5670,
    "end": 5679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5679,
    "end": 5680
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5681,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5691,
    "end": 5692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5699,
    "end": 5702
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5703,
    "end": 5705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5705,
    "end": 5706
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5707,
    "end": 5714
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5714,
    "end": 5715
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5715,
    "end": 5721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5722,
    "end": 5723
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5724,
    "end": 5727
  },
  {
    "type": "Identifier",
    "value": "s5a",
    "start": 5728,
    "end": 5731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5732,
    "end": 5733
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5734,
    "end": 5736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5736,
    "end": 5737
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5737,
    "end": 5741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5741,
    "end": 5742
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5742,
    "end": 5755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5755,
    "end": 5756
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5757,
    "end": 5770
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5770,
    "end": 5771
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5772,
    "end": 5785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5785,
    "end": 5786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5786,
    "end": 5787
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5797,
    "end": 5800
  },
  {
    "type": "Identifier",
    "value": "s5b",
    "start": 5801,
    "end": 5804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5805,
    "end": 5806
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5807,
    "end": 5809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5809,
    "end": 5810
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5810,
    "end": 5814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5814,
    "end": 5815
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5815,
    "end": 5829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5829,
    "end": 5830
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5831,
    "end": 5845
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5845,
    "end": 5846
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5847,
    "end": 5861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5861,
    "end": 5862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5862,
    "end": 5863
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5873,
    "end": 5876
  },
  {
    "type": "Identifier",
    "value": "s5c",
    "start": 5877,
    "end": 5880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5883,
    "end": 5885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5885,
    "end": 5886
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5886,
    "end": 5890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5891,
    "end": 5905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5905,
    "end": 5906
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5907,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5920,
    "end": 5921
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5922,
    "end": 5935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5935,
    "end": 5936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5936,
    "end": 5937
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5947,
    "end": 5950
  },
  {
    "type": "Identifier",
    "value": "s5d",
    "start": 5951,
    "end": 5954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5955,
    "end": 5956
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5957,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5959,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5960,
    "end": 5964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5965,
    "end": 5973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5975,
    "end": 5983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5983,
    "end": 5984
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5985,
    "end": 5993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5993,
    "end": 5994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5994,
    "end": 5995
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5995,
    "end": 5999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5999,
    "end": 6000
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6000,
    "end": 6009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6009,
    "end": 6010
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6011,
    "end": 6020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6020,
    "end": 6021
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6022,
    "end": 6031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6031,
    "end": 6032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6032,
    "end": 6033
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6041,
    "end": 6044
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 6045,
    "end": 6047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6047,
    "end": 6048
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6049,
    "end": 6057
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6057,
    "end": 6058
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6058,
    "end": 6064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6064,
    "end": 6065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6065,
    "end": 6066
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6067,
    "end": 6070
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 6071,
    "end": 6074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6075,
    "end": 6076
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 6077,
    "end": 6079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6079,
    "end": 6080
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6080,
    "end": 6084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6084,
    "end": 6085
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6085,
    "end": 6098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6098,
    "end": 6099
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6100,
    "end": 6113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6113,
    "end": 6114
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6115,
    "end": 6128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6128,
    "end": 6129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6129,
    "end": 6130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6140,
    "end": 6143
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 6144,
    "end": 6147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6148,
    "end": 6149
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 6150,
    "end": 6152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6152,
    "end": 6153
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6153,
    "end": 6157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6157,
    "end": 6158
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6158,
    "end": 6167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6167,
    "end": 6168
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6169,
    "end": 6178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6178,
    "end": 6179
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6180,
    "end": 6189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6189,
    "end": 6190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6190,
    "end": 6191
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6191,
    "end": 6195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6195,
    "end": 6196
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6196,
    "end": 6205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6205,
    "end": 6206
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6207,
    "end": 6216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6216,
    "end": 6217
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6218,
    "end": 6227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6227,
    "end": 6228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6228,
    "end": 6229
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6236,
    "end": 6239
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6240,
    "end": 6242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6242,
    "end": 6243
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6244,
    "end": 6251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6251,
    "end": 6252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6252,
    "end": 6258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6258,
    "end": 6259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6259,
    "end": 6260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6261,
    "end": 6264
  },
  {
    "type": "Identifier",
    "value": "s6a",
    "start": 6265,
    "end": 6268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6269,
    "end": 6270
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6271,
    "end": 6273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6273,
    "end": 6274
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6274,
    "end": 6278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6278,
    "end": 6279
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6279,
    "end": 6292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6292,
    "end": 6293
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6294,
    "end": 6307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6307,
    "end": 6308
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6309,
    "end": 6322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6322,
    "end": 6323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6323,
    "end": 6324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6334,
    "end": 6337
  },
  {
    "type": "Identifier",
    "value": "s6b",
    "start": 6338,
    "end": 6341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6342,
    "end": 6343
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6344,
    "end": 6346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6346,
    "end": 6347
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6347,
    "end": 6351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6351,
    "end": 6352
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6352,
    "end": 6366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6366,
    "end": 6367
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6368,
    "end": 6382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6382,
    "end": 6383
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6384,
    "end": 6398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6398,
    "end": 6399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6399,
    "end": 6400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6410,
    "end": 6413
  },
  {
    "type": "Identifier",
    "value": "s6c",
    "start": 6414,
    "end": 6417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6418,
    "end": 6419
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6420,
    "end": 6422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6422,
    "end": 6423
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6423,
    "end": 6427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6427,
    "end": 6428
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6428,
    "end": 6442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6442,
    "end": 6443
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6444,
    "end": 6457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6457,
    "end": 6458
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6459,
    "end": 6472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6472,
    "end": 6473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6473,
    "end": 6474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6484,
    "end": 6487
  },
  {
    "type": "Identifier",
    "value": "s6d",
    "start": 6488,
    "end": 6491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6492,
    "end": 6493
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6494,
    "end": 6496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6496,
    "end": 6497
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6497,
    "end": 6501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6501,
    "end": 6502
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6502,
    "end": 6510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6510,
    "end": 6511
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6512,
    "end": 6520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6520,
    "end": 6521
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6522,
    "end": 6530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6530,
    "end": 6531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6531,
    "end": 6532
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6532,
    "end": 6536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6536,
    "end": 6537
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6537,
    "end": 6546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6546,
    "end": 6547
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6548,
    "end": 6557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6557,
    "end": 6558
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6559,
    "end": 6568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6568,
    "end": 6569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6569,
    "end": 6570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6578,
    "end": 6581
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6582,
    "end": 6584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6584,
    "end": 6585
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6586,
    "end": 6594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6594,
    "end": 6595
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6595,
    "end": 6601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6601,
    "end": 6602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6602,
    "end": 6603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6604,
    "end": 6607
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 6608,
    "end": 6611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6612,
    "end": 6613
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6614,
    "end": 6616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6616,
    "end": 6617
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6617,
    "end": 6621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6621,
    "end": 6622
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6622,
    "end": 6635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6635,
    "end": 6636
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6637,
    "end": 6650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6650,
    "end": 6651
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6652,
    "end": 6665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6665,
    "end": 6666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6666,
    "end": 6667
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6677,
    "end": 6680
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 6681,
    "end": 6684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6685,
    "end": 6686
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6687,
    "end": 6689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6689,
    "end": 6690
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6690,
    "end": 6694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6694,
    "end": 6695
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6695,
    "end": 6704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6704,
    "end": 6705
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6706,
    "end": 6715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6715,
    "end": 6716
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6717,
    "end": 6726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6726,
    "end": 6727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6727,
    "end": 6728
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6728,
    "end": 6732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6732,
    "end": 6733
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6733,
    "end": 6742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6742,
    "end": 6743
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6744,
    "end": 6753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6753,
    "end": 6754
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6755,
    "end": 6764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6764,
    "end": 6765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6765,
    "end": 6766
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6773,
    "end": 6776
  },
  {
    "type": "Identifier",
    "value": "s7",
    "start": 6777,
    "end": 6779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6779,
    "end": 6780
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6781,
    "end": 6788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6788,
    "end": 6789
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6789,
    "end": 6795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6795,
    "end": 6796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6796,
    "end": 6797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6798,
    "end": 6801
  },
  {
    "type": "Identifier",
    "value": "s7a",
    "start": 6802,
    "end": 6805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6806,
    "end": 6807
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6808,
    "end": 6810
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6810,
    "end": 6811
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6811,
    "end": 6815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6815,
    "end": 6816
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6816,
    "end": 6829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6829,
    "end": 6830
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6831,
    "end": 6844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6844,
    "end": 6845
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6846,
    "end": 6859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6859,
    "end": 6860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6860,
    "end": 6861
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6871,
    "end": 6874
  },
  {
    "type": "Identifier",
    "value": "s7b",
    "start": 6875,
    "end": 6878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6879,
    "end": 6880
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6881,
    "end": 6883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6883,
    "end": 6884
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6884,
    "end": 6888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6888,
    "end": 6889
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6889,
    "end": 6903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6903,
    "end": 6904
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6905,
    "end": 6919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6919,
    "end": 6920
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6921,
    "end": 6935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6935,
    "end": 6936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6936,
    "end": 6937
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6947,
    "end": 6950
  },
  {
    "type": "Identifier",
    "value": "s7c",
    "start": 6951,
    "end": 6954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6955,
    "end": 6956
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6957,
    "end": 6959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6959,
    "end": 6960
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6960,
    "end": 6964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6964,
    "end": 6965
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6965,
    "end": 6979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6979,
    "end": 6980
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6981,
    "end": 6994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6994,
    "end": 6995
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6996,
    "end": 7009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7009,
    "end": 7010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7010,
    "end": 7011
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7021,
    "end": 7024
  },
  {
    "type": "Identifier",
    "value": "s7d",
    "start": 7025,
    "end": 7028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7029,
    "end": 7030
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 7031,
    "end": 7033
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7033,
    "end": 7034
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7034,
    "end": 7038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7038,
    "end": 7039
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7039,
    "end": 7047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7047,
    "end": 7048
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7049,
    "end": 7057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7057,
    "end": 7058
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7059,
    "end": 7067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7067,
    "end": 7068
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7068,
    "end": 7069
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7069,
    "end": 7073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7073,
    "end": 7074
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7074,
    "end": 7082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7082,
    "end": 7083
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7084,
    "end": 7092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7092,
    "end": 7093
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 7094,
    "end": 7102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7102,
    "end": 7103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7103,
    "end": 7104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7113,
    "end": 7116
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7117,
    "end": 7119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7119,
    "end": 7120
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7121,
    "end": 7129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7129,
    "end": 7130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7130,
    "end": 7136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7137,
    "end": 7138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7139,
    "end": 7142
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7143,
    "end": 7152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7152,
    "end": 7153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7154,
    "end": 7155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7155,
    "end": 7156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7156,
    "end": 7157
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7158,
    "end": 7161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7161,
    "end": 7162
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7163,
    "end": 7165
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7166,
    "end": 7174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7174,
    "end": 7175
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7175,
    "end": 7181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7181,
    "end": 7182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7182,
    "end": 7183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7184,
    "end": 7187
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 7188,
    "end": 7196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7196,
    "end": 7197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7198,
    "end": 7199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7199,
    "end": 7200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7200,
    "end": 7201
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7202,
    "end": 7205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7205,
    "end": 7206
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7207,
    "end": 7209
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7210,
    "end": 7217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7217,
    "end": 7218
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7218,
    "end": 7224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7224,
    "end": 7225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7225,
    "end": 7226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7227,
    "end": 7230
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 7231,
    "end": 7234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7235,
    "end": 7236
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7237,
    "end": 7239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7239,
    "end": 7240
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7240,
    "end": 7244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7244,
    "end": 7245
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7245,
    "end": 7258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7258,
    "end": 7259
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7260,
    "end": 7273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7273,
    "end": 7274
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7275,
    "end": 7288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7288,
    "end": 7289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7289,
    "end": 7290
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7300,
    "end": 7303
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 7304,
    "end": 7307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7308,
    "end": 7309
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7310,
    "end": 7312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7312,
    "end": 7313
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7313,
    "end": 7317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7317,
    "end": 7318
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7318,
    "end": 7327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7327,
    "end": 7328
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7329,
    "end": 7338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7338,
    "end": 7339
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7340,
    "end": 7349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7349,
    "end": 7350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7350,
    "end": 7351
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7351,
    "end": 7355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7355,
    "end": 7356
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7356,
    "end": 7365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7365,
    "end": 7366
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7367,
    "end": 7376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7376,
    "end": 7377
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7378,
    "end": 7387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7387,
    "end": 7388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7388,
    "end": 7389
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7396,
    "end": 7399
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7400,
    "end": 7402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7402,
    "end": 7403
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7404,
    "end": 7411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7411,
    "end": 7412
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7412,
    "end": 7418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7418,
    "end": 7419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7419,
    "end": 7420
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7421,
    "end": 7424
  },
  {
    "type": "Identifier",
    "value": "s8a",
    "start": 7425,
    "end": 7428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7429,
    "end": 7430
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7431,
    "end": 7433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7433,
    "end": 7434
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7434,
    "end": 7438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7438,
    "end": 7439
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7439,
    "end": 7452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7452,
    "end": 7453
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7454,
    "end": 7467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7467,
    "end": 7468
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7469,
    "end": 7482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7482,
    "end": 7483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7483,
    "end": 7484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7494,
    "end": 7497
  },
  {
    "type": "Identifier",
    "value": "s8b",
    "start": 7498,
    "end": 7501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7502,
    "end": 7503
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7504,
    "end": 7506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7506,
    "end": 7507
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7507,
    "end": 7511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7511,
    "end": 7512
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7512,
    "end": 7526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7526,
    "end": 7527
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7528,
    "end": 7542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7542,
    "end": 7543
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7544,
    "end": 7558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7558,
    "end": 7559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7559,
    "end": 7560
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7570,
    "end": 7573
  },
  {
    "type": "Identifier",
    "value": "s8c",
    "start": 7574,
    "end": 7577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7578,
    "end": 7579
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7580,
    "end": 7582
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7582,
    "end": 7583
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7583,
    "end": 7587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7587,
    "end": 7588
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7588,
    "end": 7602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7602,
    "end": 7603
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7604,
    "end": 7617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7617,
    "end": 7618
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7619,
    "end": 7632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7632,
    "end": 7633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7633,
    "end": 7634
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7644,
    "end": 7647
  },
  {
    "type": "Identifier",
    "value": "s8d",
    "start": 7648,
    "end": 7651
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7652,
    "end": 7653
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7654,
    "end": 7656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7656,
    "end": 7657
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7657,
    "end": 7661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7661,
    "end": 7662
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7662,
    "end": 7671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7671,
    "end": 7672
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7673,
    "end": 7682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7682,
    "end": 7683
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7684,
    "end": 7693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7693,
    "end": 7694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7694,
    "end": 7695
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7695,
    "end": 7699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7699,
    "end": 7700
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7700,
    "end": 7709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7709,
    "end": 7710
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7711,
    "end": 7720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7720,
    "end": 7721
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7722,
    "end": 7731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7731,
    "end": 7732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7732,
    "end": 7733
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7741,
    "end": 7744
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7745,
    "end": 7747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7747,
    "end": 7748
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7749,
    "end": 7757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7757,
    "end": 7758
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7758,
    "end": 7764
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7764,
    "end": 7765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7765,
    "end": 7766
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7767,
    "end": 7770
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 7771,
    "end": 7774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7775,
    "end": 7776
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7777,
    "end": 7779
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7779,
    "end": 7780
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7780,
    "end": 7784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7784,
    "end": 7785
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7785,
    "end": 7798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7798,
    "end": 7799
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7800,
    "end": 7813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7813,
    "end": 7814
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7815,
    "end": 7828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7828,
    "end": 7829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7829,
    "end": 7830
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7840,
    "end": 7843
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 7844,
    "end": 7847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7848,
    "end": 7849
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7850,
    "end": 7852
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7852,
    "end": 7853
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7853,
    "end": 7857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7857,
    "end": 7858
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7858,
    "end": 7867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7867,
    "end": 7868
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7869,
    "end": 7878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7878,
    "end": 7879
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7880,
    "end": 7889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7889,
    "end": 7890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7890,
    "end": 7891
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7898,
    "end": 7901
  },
  {
    "type": "Identifier",
    "value": "r9c",
    "start": 7902,
    "end": 7905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7906,
    "end": 7907
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7908,
    "end": 7910
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7910,
    "end": 7911
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7911,
    "end": 7915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7915,
    "end": 7916
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7916,
    "end": 7925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7925,
    "end": 7926
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7927,
    "end": 7936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7936,
    "end": 7937
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7938,
    "end": 7947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7947,
    "end": 7948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7948,
    "end": 7949
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7956,
    "end": 7959
  },
  {
    "type": "Identifier",
    "value": "r9d",
    "start": 7960,
    "end": 7963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7964,
    "end": 7965
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7966,
    "end": 7968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7968,
    "end": 7969
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7969,
    "end": 7973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7973,
    "end": 7974
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7974,
    "end": 7986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7986,
    "end": 7987
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7988,
    "end": 7997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7997,
    "end": 7998
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7999,
    "end": 8008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8008,
    "end": 8009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8009,
    "end": 8010
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8017,
    "end": 8020
  },
  {
    "type": "Identifier",
    "value": "r9e",
    "start": 8021,
    "end": 8024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8025,
    "end": 8026
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 8027,
    "end": 8029
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8029,
    "end": 8030
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8030,
    "end": 8034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8034,
    "end": 8035
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8035,
    "end": 8047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8047,
    "end": 8048
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8049,
    "end": 8058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8058,
    "end": 8059
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8060,
    "end": 8069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8069,
    "end": 8070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8070,
    "end": 8071
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8071,
    "end": 8075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8075,
    "end": 8076
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8076,
    "end": 8085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8085,
    "end": 8086
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8087,
    "end": 8096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8096,
    "end": 8097
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8098,
    "end": 8107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8107,
    "end": 8108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8108,
    "end": 8109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8116,
    "end": 8119
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8120,
    "end": 8122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8122,
    "end": 8123
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8124,
    "end": 8131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8131,
    "end": 8132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8132,
    "end": 8138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8138,
    "end": 8139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8139,
    "end": 8140
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8141,
    "end": 8144
  },
  {
    "type": "Identifier",
    "value": "s9a",
    "start": 8145,
    "end": 8148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8149,
    "end": 8150
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8151,
    "end": 8153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8153,
    "end": 8154
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8154,
    "end": 8158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8158,
    "end": 8159
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8159,
    "end": 8172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8172,
    "end": 8173
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8174,
    "end": 8187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8187,
    "end": 8188
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8189,
    "end": 8202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8202,
    "end": 8203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8203,
    "end": 8204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8214,
    "end": 8217
  },
  {
    "type": "Identifier",
    "value": "s9b",
    "start": 8218,
    "end": 8221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8222,
    "end": 8223
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8224,
    "end": 8226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8226,
    "end": 8227
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8227,
    "end": 8231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8231,
    "end": 8232
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8232,
    "end": 8246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8246,
    "end": 8247
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8248,
    "end": 8262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8262,
    "end": 8263
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8264,
    "end": 8278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8278,
    "end": 8279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8279,
    "end": 8280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8290,
    "end": 8293
  },
  {
    "type": "Identifier",
    "value": "s9c",
    "start": 8294,
    "end": 8297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8298,
    "end": 8299
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8300,
    "end": 8302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8302,
    "end": 8303
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8303,
    "end": 8307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8307,
    "end": 8308
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8308,
    "end": 8322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8322,
    "end": 8323
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8324,
    "end": 8337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8337,
    "end": 8338
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8339,
    "end": 8352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8352,
    "end": 8353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8353,
    "end": 8354
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8364,
    "end": 8367
  },
  {
    "type": "Identifier",
    "value": "s9d",
    "start": 8368,
    "end": 8371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8372,
    "end": 8373
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8374,
    "end": 8376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8376,
    "end": 8377
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8377,
    "end": 8381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8381,
    "end": 8382
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8382,
    "end": 8390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8390,
    "end": 8391
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8392,
    "end": 8400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8400,
    "end": 8401
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8402,
    "end": 8410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8410,
    "end": 8411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8411,
    "end": 8412
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8419,
    "end": 8422
  },
  {
    "type": "Identifier",
    "value": "s9e",
    "start": 8423,
    "end": 8426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8427,
    "end": 8428
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8429,
    "end": 8431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8431,
    "end": 8432
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8432,
    "end": 8436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8436,
    "end": 8437
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8437,
    "end": 8445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8445,
    "end": 8446
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8447,
    "end": 8455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8455,
    "end": 8456
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8457,
    "end": 8465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8465,
    "end": 8466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8466,
    "end": 8467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8474,
    "end": 8477
  },
  {
    "type": "Identifier",
    "value": "s9f",
    "start": 8478,
    "end": 8481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8482,
    "end": 8483
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8484,
    "end": 8486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8486,
    "end": 8487
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8487,
    "end": 8491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8491,
    "end": 8492
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8492,
    "end": 8504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8504,
    "end": 8505
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8506,
    "end": 8515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8515,
    "end": 8516
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8517,
    "end": 8526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8526,
    "end": 8527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8527,
    "end": 8528
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8538,
    "end": 8541
  },
  {
    "type": "Identifier",
    "value": "s9g",
    "start": 8542,
    "end": 8545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8546,
    "end": 8547
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8548,
    "end": 8550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8550,
    "end": 8551
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8551,
    "end": 8555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8555,
    "end": 8556
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8556,
    "end": 8568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8568,
    "end": 8569
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8570,
    "end": 8579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8579,
    "end": 8580
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8581,
    "end": 8590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8590,
    "end": 8591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8591,
    "end": 8592
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8592,
    "end": 8596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8596,
    "end": 8597
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8597,
    "end": 8606
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8606,
    "end": 8607
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8608,
    "end": 8617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8617,
    "end": 8618
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8619,
    "end": 8628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8628,
    "end": 8629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8629,
    "end": 8630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8638,
    "end": 8641
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8642,
    "end": 8645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8646,
    "end": 8647
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8648,
    "end": 8662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8662,
    "end": 8663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8663,
    "end": 8664
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8665,
    "end": 8667
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8668,
    "end": 8669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8669,
    "end": 8670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8670,
    "end": 8671
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8672,
    "end": 8675
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 8676,
    "end": 8680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8681,
    "end": 8682
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8683,
    "end": 8686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8686,
    "end": 8687
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8687,
    "end": 8691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8691,
    "end": 8692
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8692,
    "end": 8706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8706,
    "end": 8707
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8708,
    "end": 8722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8722,
    "end": 8723
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8724,
    "end": 8738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8738,
    "end": 8739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8739,
    "end": 8740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8747,
    "end": 8750
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 8751,
    "end": 8755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8756,
    "end": 8757
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8758,
    "end": 8761
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8761,
    "end": 8762
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8762,
    "end": 8766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8766,
    "end": 8767
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8767,
    "end": 8776
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8776,
    "end": 8777
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8778,
    "end": 8787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8787,
    "end": 8788
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8789,
    "end": 8798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8798,
    "end": 8799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8799,
    "end": 8800
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8807,
    "end": 8810
  },
  {
    "type": "Identifier",
    "value": "r10c",
    "start": 8811,
    "end": 8815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8816,
    "end": 8817
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8818,
    "end": 8821
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8821,
    "end": 8822
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8822,
    "end": 8826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8826,
    "end": 8827
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8827,
    "end": 8836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8836,
    "end": 8837
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8838,
    "end": 8847
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8847,
    "end": 8848
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8849,
    "end": 8858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8858,
    "end": 8859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8859,
    "end": 8860
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8867,
    "end": 8870
  },
  {
    "type": "Identifier",
    "value": "r10d",
    "start": 8871,
    "end": 8875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8876,
    "end": 8877
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8878,
    "end": 8881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8881,
    "end": 8882
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8882,
    "end": 8886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8886,
    "end": 8887
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8887,
    "end": 8899
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8899,
    "end": 8900
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8901,
    "end": 8910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8910,
    "end": 8911
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8912,
    "end": 8921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8921,
    "end": 8922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8922,
    "end": 8923
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8930,
    "end": 8933
  },
  {
    "type": "Identifier",
    "value": "r10e",
    "start": 8934,
    "end": 8938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8939,
    "end": 8940
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8941,
    "end": 8944
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8944,
    "end": 8945
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8945,
    "end": 8949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8949,
    "end": 8950
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8950,
    "end": 8962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8962,
    "end": 8963
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8964,
    "end": 8973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8973,
    "end": 8974
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8975,
    "end": 8984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8984,
    "end": 8985
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8985,
    "end": 8986
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8986,
    "end": 8990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8990,
    "end": 8991
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8991,
    "end": 9000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9000,
    "end": 9001
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9002,
    "end": 9011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9011,
    "end": 9012
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9013,
    "end": 9022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9022,
    "end": 9023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9023,
    "end": 9024
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9031,
    "end": 9034
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9035,
    "end": 9038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9039,
    "end": 9040
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9041,
    "end": 9056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9056,
    "end": 9057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9057,
    "end": 9058
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9059,
    "end": 9061
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9062,
    "end": 9063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9063,
    "end": 9064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9064,
    "end": 9065
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9066,
    "end": 9069
  },
  {
    "type": "Identifier",
    "value": "s10a",
    "start": 9070,
    "end": 9074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9075,
    "end": 9076
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9077,
    "end": 9080
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9080,
    "end": 9081
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9081,
    "end": 9085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9085,
    "end": 9086
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9086,
    "end": 9100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9100,
    "end": 9101
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9102,
    "end": 9116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9116,
    "end": 9117
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9118,
    "end": 9132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9132,
    "end": 9133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9133,
    "end": 9134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9141,
    "end": 9144
  },
  {
    "type": "Identifier",
    "value": "s10b",
    "start": 9145,
    "end": 9149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9150,
    "end": 9151
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9152,
    "end": 9155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9155,
    "end": 9156
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9156,
    "end": 9160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9160,
    "end": 9161
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9161,
    "end": 9176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9176,
    "end": 9177
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9178,
    "end": 9193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9193,
    "end": 9194
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9195,
    "end": 9210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9210,
    "end": 9211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9211,
    "end": 9212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9219,
    "end": 9222
  },
  {
    "type": "Identifier",
    "value": "s10c",
    "start": 9223,
    "end": 9227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9228,
    "end": 9229
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9230,
    "end": 9233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9233,
    "end": 9234
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9234,
    "end": 9238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9238,
    "end": 9239
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9239,
    "end": 9254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9254,
    "end": 9255
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9256,
    "end": 9270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9270,
    "end": 9271
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9272,
    "end": 9286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9286,
    "end": 9287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9287,
    "end": 9288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9295,
    "end": 9298
  },
  {
    "type": "Identifier",
    "value": "s10d",
    "start": 9299,
    "end": 9303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9304,
    "end": 9305
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9306,
    "end": 9309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9309,
    "end": 9310
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9310,
    "end": 9314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9314,
    "end": 9315
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9315,
    "end": 9323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9323,
    "end": 9324
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9325,
    "end": 9333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9333,
    "end": 9334
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9335,
    "end": 9343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9343,
    "end": 9344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9344,
    "end": 9345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9352,
    "end": 9355
  },
  {
    "type": "Identifier",
    "value": "s10e",
    "start": 9356,
    "end": 9360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9361,
    "end": 9362
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9363,
    "end": 9366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9366,
    "end": 9367
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9367,
    "end": 9371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9371,
    "end": 9372
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9372,
    "end": 9381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9381,
    "end": 9382
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 9383,
    "end": 9391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9391,
    "end": 9392
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9393,
    "end": 9402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9402,
    "end": 9403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9403,
    "end": 9404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9411,
    "end": 9414
  },
  {
    "type": "Identifier",
    "value": "s10f",
    "start": 9415,
    "end": 9419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9420,
    "end": 9421
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9422,
    "end": 9425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9425,
    "end": 9426
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9426,
    "end": 9430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9430,
    "end": 9431
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9431,
    "end": 9444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9444,
    "end": 9445
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9446,
    "end": 9455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9455,
    "end": 9456
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9457,
    "end": 9466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9466,
    "end": 9467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9467,
    "end": 9468
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9478,
    "end": 9481
  },
  {
    "type": "Identifier",
    "value": "s10g",
    "start": 9482,
    "end": 9486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9487,
    "end": 9488
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9489,
    "end": 9492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9492,
    "end": 9493
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9493,
    "end": 9497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9497,
    "end": 9498
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9498,
    "end": 9511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9511,
    "end": 9512
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9513,
    "end": 9522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9522,
    "end": 9523
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9524,
    "end": 9533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9533,
    "end": 9534
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9534,
    "end": 9535
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9535,
    "end": 9539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9539,
    "end": 9540
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9540,
    "end": 9548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9548,
    "end": 9549
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9550,
    "end": 9559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9559,
    "end": 9560
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9561,
    "end": 9570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9570,
    "end": 9571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9571,
    "end": 9572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9580,
    "end": 9583
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9584,
    "end": 9587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9587,
    "end": 9588
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 9589,
    "end": 9597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9597,
    "end": 9598
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9598,
    "end": 9604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9604,
    "end": 9605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9605,
    "end": 9606
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9607,
    "end": 9610
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 9611,
    "end": 9615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9616,
    "end": 9617
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9618,
    "end": 9621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9621,
    "end": 9622
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9622,
    "end": 9626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9626,
    "end": 9627
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9627,
    "end": 9641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9641,
    "end": 9642
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9643,
    "end": 9657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9657,
    "end": 9658
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9659,
    "end": 9673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9673,
    "end": 9674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9674,
    "end": 9675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9685,
    "end": 9688
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9689,
    "end": 9692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9692,
    "end": 9693
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9694,
    "end": 9701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9701,
    "end": 9702
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9702,
    "end": 9708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9708,
    "end": 9709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9709,
    "end": 9710
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9711,
    "end": 9714
  },
  {
    "type": "Identifier",
    "value": "s11a",
    "start": 9715,
    "end": 9719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9720,
    "end": 9721
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9722,
    "end": 9725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9725,
    "end": 9726
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9726,
    "end": 9730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9730,
    "end": 9731
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9731,
    "end": 9745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9745,
    "end": 9746
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9747,
    "end": 9761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9761,
    "end": 9762
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9763,
    "end": 9777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9777,
    "end": 9778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9778,
    "end": 9779
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9786,
    "end": 9789
  },
  {
    "type": "Identifier",
    "value": "s11b",
    "start": 9790,
    "end": 9794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9795,
    "end": 9796
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9797,
    "end": 9800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9800,
    "end": 9801
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9801,
    "end": 9805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9805,
    "end": 9806
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9806,
    "end": 9821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9821,
    "end": 9822
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9823,
    "end": 9838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9838,
    "end": 9839
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9840,
    "end": 9855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9855,
    "end": 9856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9856,
    "end": 9857
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9867,
    "end": 9870
  },
  {
    "type": "Identifier",
    "value": "s11c",
    "start": 9871,
    "end": 9875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9876,
    "end": 9877
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9878,
    "end": 9881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9881,
    "end": 9882
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9882,
    "end": 9886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9886,
    "end": 9887
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9887,
    "end": 9902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9902,
    "end": 9903
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9904,
    "end": 9918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9918,
    "end": 9919
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9920,
    "end": 9934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9934,
    "end": 9935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9935,
    "end": 9936
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9947,
    "end": 9950
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9951,
    "end": 9954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9955,
    "end": 9956
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9957,
    "end": 9971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9971,
    "end": 9972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9972,
    "end": 9973
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9974,
    "end": 9976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9977,
    "end": 9978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9978,
    "end": 9979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9979,
    "end": 9980
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9981,
    "end": 9984
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 9985,
    "end": 9989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9990,
    "end": 9991
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9992,
    "end": 9995
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9995,
    "end": 9996
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9996,
    "end": 10000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10000,
    "end": 10001
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10001,
    "end": 10015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10015,
    "end": 10016
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10017,
    "end": 10031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10031,
    "end": 10032
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10033,
    "end": 10047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10047,
    "end": 10048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10048,
    "end": 10049
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10056,
    "end": 10059
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10060,
    "end": 10063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10064,
    "end": 10065
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10066,
    "end": 10080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10080,
    "end": 10081
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 10081,
    "end": 10082
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10083,
    "end": 10085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 10086,
    "end": 10087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10087,
    "end": 10088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10088,
    "end": 10089
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10090,
    "end": 10093
  },
  {
    "type": "Identifier",
    "value": "s12a",
    "start": 10094,
    "end": 10098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10099,
    "end": 10100
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10101,
    "end": 10104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10104,
    "end": 10105
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10105,
    "end": 10109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10109,
    "end": 10110
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10110,
    "end": 10124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10124,
    "end": 10125
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10126,
    "end": 10140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10140,
    "end": 10141
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10142,
    "end": 10156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10156,
    "end": 10157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10157,
    "end": 10158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10165,
    "end": 10168
  },
  {
    "type": "Identifier",
    "value": "s12b",
    "start": 10169,
    "end": 10173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10174,
    "end": 10175
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10176,
    "end": 10179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10179,
    "end": 10180
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10180,
    "end": 10184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10184,
    "end": 10185
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10185,
    "end": 10200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10200,
    "end": 10201
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10202,
    "end": 10217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10217,
    "end": 10218
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10219,
    "end": 10234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10234,
    "end": 10235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10235,
    "end": 10236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10243,
    "end": 10246
  },
  {
    "type": "Identifier",
    "value": "s12c",
    "start": 10247,
    "end": 10251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10252,
    "end": 10253
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10254,
    "end": 10257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10257,
    "end": 10258
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10258,
    "end": 10262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10262,
    "end": 10263
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10263,
    "end": 10278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10278,
    "end": 10279
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10280,
    "end": 10294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10294,
    "end": 10295
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10296,
    "end": 10310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10310,
    "end": 10311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10311,
    "end": 10312
  }
]
```
