__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferPipe",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 21
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 23
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 22,
              "end": 23
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "pipe",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 29
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 25,
              "end": 29
            }
          ],
          "start": 21,
          "end": 30
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 41
            },
            "typeArguments": null,
            "start": 37,
            "end": 41
          },
          "extendsType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 56
                    },
                    "typeArguments": null,
                    "start": 55,
                    "end": 56
                  },
                  "start": 53,
                  "end": 56
                },
                "start": 51,
                "end": 56
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 61,
                "end": 68
              },
              "start": 58,
              "end": 68
            },
            "start": 50,
            "end": 68
          },
          "trueType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "typeArguments": null,
                    "start": 76,
                    "end": 77
                  },
                  "start": 74,
                  "end": 77
                },
                "start": 72,
                "end": 77
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 92
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pipe",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 97
                      },
                      "typeArguments": null,
                      "start": 93,
                      "end": 97
                    }
                  ],
                  "start": 92,
                  "end": 98
                },
                "start": 82,
                "end": 98
              },
              "start": 79,
              "end": 98
            },
            "start": 71,
            "end": 98
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 101,
            "end": 106
          },
          "start": 37,
          "end": 106
        },
        "declare": false,
        "start": 7,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 122
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 124
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 123,
            "end": 124
          }
        ],
        "start": 122,
        "end": 125
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
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 136
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
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 139
                  },
                  "constraint": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "In",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 153,
                              "end": 154
                            },
                            "typeArguments": null,
                            "start": 153,
                            "end": 154
                          },
                          "start": 151,
                          "end": 154
                        },
                        "start": 149,
                        "end": 154
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 159,
                        "end": 166
                      },
                      "start": 156,
                      "end": 166
                    },
                    "start": 148,
                    "end": 166
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 137,
                  "end": 166
                }
              ],
              "start": 136,
              "end": 167
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 174
                    },
                    "typeArguments": null,
                    "start": 172,
                    "end": 174
                  },
                  "start": 170,
                  "end": 174
                },
                "start": 168,
                "end": 174
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 181
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "inferPipe",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 191
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 192,
                              "end": 193
                            },
                            "typeArguments": null,
                            "start": 192,
                            "end": 193
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 195,
                              "end": 197
                            },
                            "typeArguments": null,
                            "start": 195,
                            "end": 197
                          }
                        ],
                        "start": 191,
                        "end": 198
                      },
                      "start": 182,
                      "end": 198
                    }
                  ],
                  "start": 181,
                  "end": 199
                },
                "start": 177,
                "end": 199
              },
              "start": 175,
              "end": 199
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 132,
            "end": 199
          }
        ],
        "start": 126,
        "end": 201
      },
      "declare": false,
      "start": 108,
      "end": 201
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 224
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 225,
                      "end": 231
                    }
                  ],
                  "start": 224,
                  "end": 232
                },
                "start": 220,
                "end": 232
              },
              "start": 218,
              "end": 232
            },
            "start": 217,
            "end": 232
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 232
        }
      ],
      "declare": true,
      "start": 203,
      "end": 232
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 286
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 290
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 295
                },
                "optional": false,
                "computed": false,
                "start": 289,
                "end": 295
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 297
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parseInt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 301,
                      "end": 309
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 311
                      }
                    ],
                    "optional": false,
                    "start": 301,
                    "end": 312
                  },
                  "id": null,
                  "generator": false,
                  "start": 296,
                  "end": 312
                }
              ],
              "optional": false,
              "start": 289,
              "end": 313
            },
            "definite": false,
            "start": 283,
            "end": 313
          }
        ],
        "declare": false,
        "start": 277,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 270,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferPipe2",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 337
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 338,
              "end": 339
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "pipe",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 345
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 341,
              "end": 345
            }
          ],
          "start": 337,
          "end": 346
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 354
            },
            "typeArguments": null,
            "start": 350,
            "end": 354
          },
          "extendsType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 368,
                      "end": 369
                    },
                    "typeArguments": null,
                    "start": 368,
                    "end": 369
                  },
                  "start": 366,
                  "end": 369
                },
                "start": 364,
                "end": 369
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 374,
                "end": 381
              },
              "start": 371,
              "end": 381
            },
            "start": 363,
            "end": 381
          },
          "trueType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 392
                    },
                    "typeArguments": null,
                    "start": 391,
                    "end": 392
                  },
                  "start": 389,
                  "end": 392
                },
                "start": 387,
                "end": 392
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReturnType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 407
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pipe",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 408,
                          "end": 412
                        },
                        "typeArguments": null,
                        "start": 408,
                        "end": 412
                      }
                    ],
                    "start": 407,
                    "end": 413
                  },
                  "start": 397,
                  "end": 413
                },
                "extendsType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 429
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 438,
                      "end": 444
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 428,
                    "end": 444
                  },
                  "start": 422,
                  "end": 444
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 448
                  },
                  "typeArguments": null,
                  "start": 447,
                  "end": 448
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 453,
                      "end": 463
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pipe",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 464,
                            "end": 468
                          },
                          "typeArguments": null,
                          "start": 464,
                          "end": 468
                        }
                      ],
                      "start": 463,
                      "end": 469
                    },
                    "start": 453,
                    "end": 469
                  },
                  "extendsType": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 484,
                        "end": 485
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 494,
                        "end": 500
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 484,
                      "end": 500
                    },
                    "start": 478,
                    "end": 500
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 504
                    },
                    "typeArguments": null,
                    "start": 503,
                    "end": 504
                  },
                  "falseType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReturnType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 519
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pipe",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 520,
                              "end": 524
                            },
                            "typeArguments": null,
                            "start": 520,
                            "end": 524
                          }
                        ],
                        "start": 519,
                        "end": 525
                      },
                      "start": 509,
                      "end": 525
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 540,
                          "end": 541
                        },
                        "constraint": {
                          "type": "TSBooleanKeyword",
                          "start": 550,
                          "end": 557
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 540,
                        "end": 557
                      },
                      "start": 534,
                      "end": 557
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 560,
                        "end": 561
                      },
                      "typeArguments": null,
                      "start": 560,
                      "end": 561
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 566,
                      "end": 571
                    },
                    "start": 509,
                    "end": 571
                  },
                  "start": 453,
                  "end": 571
                },
                "start": 397,
                "end": 571
              },
              "start": 394,
              "end": 571
            },
            "start": 386,
            "end": 571
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 575,
            "end": 580
          },
          "start": 350,
          "end": 580
        },
        "declare": false,
        "start": 322,
        "end": 580
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 315,
      "end": 580
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type2",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 597
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 599
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 598,
            "end": 599
          }
        ],
        "start": 597,
        "end": 600
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
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 608
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
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 609,
                    "end": 611
                  },
                  "constraint": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "In",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 625,
                              "end": 626
                            },
                            "typeArguments": null,
                            "start": 625,
                            "end": 626
                          },
                          "start": 623,
                          "end": 626
                        },
                        "start": 621,
                        "end": 626
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 631,
                        "end": 638
                      },
                      "start": 628,
                      "end": 638
                    },
                    "start": 620,
                    "end": 638
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 609,
                  "end": 638
                }
              ],
              "start": 608,
              "end": 639
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 646
                    },
                    "typeArguments": null,
                    "start": 644,
                    "end": 646
                  },
                  "start": 642,
                  "end": 646
                },
                "start": 640,
                "end": 646
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 653
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "inferPipe2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 654,
                        "end": 664
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 665,
                              "end": 666
                            },
                            "typeArguments": null,
                            "start": 665,
                            "end": 666
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 668,
                              "end": 670
                            },
                            "typeArguments": null,
                            "start": 668,
                            "end": 670
                          }
                        ],
                        "start": 664,
                        "end": 671
                      },
                      "start": 654,
                      "end": 671
                    }
                  ],
                  "start": 653,
                  "end": 672
                },
                "start": 649,
                "end": 672
              },
              "start": 647,
              "end": 672
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 604,
            "end": 672
          }
        ],
        "start": 601,
        "end": 674
      },
      "declare": false,
      "start": 582,
      "end": 674
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 699
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 700,
                      "end": 706
                    }
                  ],
                  "start": 699,
                  "end": 707
                },
                "start": 694,
                "end": 707
              },
              "start": 692,
              "end": 707
            },
            "start": 690,
            "end": 707
          },
          "init": null,
          "definite": false,
          "start": 690,
          "end": 707
        }
      ],
      "declare": true,
      "start": 676,
      "end": 707
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "out2",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 762
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 772
                },
                "optional": false,
                "computed": false,
                "start": 765,
                "end": 772
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 773,
                      "end": 774
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parseInt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 778,
                      "end": 786
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 788
                      }
                    ],
                    "optional": false,
                    "start": 778,
                    "end": 789
                  },
                  "id": null,
                  "generator": false,
                  "start": 773,
                  "end": 789
                }
              ],
              "optional": false,
              "start": 765,
              "end": 790
            },
            "definite": false,
            "start": 758,
            "end": 790
          }
        ],
        "declare": false,
        "start": 752,
        "end": 790
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 745,
      "end": 790
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 790
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "inferPipe",
    "start": 12,
    "end": 21,
    "range": [
      12,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 25,
    "end": 29,
    "range": [
      25,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 42,
    "end": 49,
    "range": [
      42,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 51,
    "end": 53,
    "range": [
      51,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 58,
    "end": 60,
    "range": [
      58,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 61,
    "end": 68,
    "range": [
      61,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 79,
    "end": 81,
    "range": [
      79,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 82,
    "end": 92,
    "range": [
      82,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 93,
    "end": 97,
    "range": [
      93,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 101,
    "end": 106,
    "range": [
      101,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 108,
    "end": 117,
    "range": [
      108,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 118,
    "end": 122,
    "range": [
      118,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 132,
    "end": 136,
    "range": [
      132,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 137,
    "end": 139,
    "range": [
      137,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
    "end": 147,
    "range": [
      140,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 156,
    "end": 158,
    "range": [
      156,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 159,
    "end": 166,
    "range": [
      159,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 168,
    "end": 170,
    "range": [
      168,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 172,
    "end": 174,
    "range": [
      172,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 177,
    "end": 181,
    "range": [
      177,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "inferPipe",
    "start": 182,
    "end": 191,
    "range": [
      182,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 203,
    "end": 210,
    "range": [
      203,
      210
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 211,
    "end": 216,
    "range": [
      211,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 220,
    "end": 224,
    "range": [
      220,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 225,
    "end": 231,
    "range": [
      225,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 270,
    "end": 276,
    "range": [
      270,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 277,
    "end": 282,
    "range": [
      277,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 283,
    "end": 286,
    "range": [
      283,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 291,
    "end": 295,
    "range": [
      291,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 298,
    "end": 300,
    "range": [
      298,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "parseInt",
    "start": 301,
    "end": 309,
    "range": [
      301,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 315,
    "end": 321,
    "range": [
      315,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 322,
    "end": 326,
    "range": [
      322,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "inferPipe2",
    "start": 327,
    "end": 337,
    "range": [
      327,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 341,
    "end": 345,
    "range": [
      341,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 350,
    "end": 354,
    "range": [
      350,
      354
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 355,
    "end": 362,
    "range": [
      355,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 364,
    "end": 366,
    "range": [
      364,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 371,
    "end": 373,
    "range": [
      371,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 374,
    "end": 381,
    "range": [
      374,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 387,
    "end": 389,
    "range": [
      387,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 394,
    "end": 396,
    "range": [
      394,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 397,
    "end": 407,
    "range": [
      397,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 408,
    "end": 412,
    "range": [
      408,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 414,
    "end": 421,
    "range": [
      414,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 422,
    "end": 427,
    "range": [
      422,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 430,
    "end": 437,
    "range": [
      430,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 438,
    "end": 444,
    "range": [
      438,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 453,
    "end": 463,
    "range": [
      453,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 464,
    "end": 468,
    "range": [
      464,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 470,
    "end": 477,
    "range": [
      470,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 478,
    "end": 483,
    "range": [
      478,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 486,
    "end": 493,
    "range": [
      486,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 494,
    "end": 500,
    "range": [
      494,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 509,
    "end": 519,
    "range": [
      509,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 520,
    "end": 524,
    "range": [
      520,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 526,
    "end": 533,
    "range": [
      526,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 534,
    "end": 539,
    "range": [
      534,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 542,
    "end": 549,
    "range": [
      542,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 550,
    "end": 557,
    "range": [
      550,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 566,
    "end": 571,
    "range": [
      566,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 575,
    "end": 580,
    "range": [
      575,
      580
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 582,
    "end": 591,
    "range": [
      582,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "Type2",
    "start": 592,
    "end": 597,
    "range": [
      592,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 604,
    "end": 608,
    "range": [
      604,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 609,
    "end": 611,
    "range": [
      609,
      611
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 612,
    "end": 619,
    "range": [
      612,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 621,
    "end": 623,
    "range": [
      621,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 628,
    "end": 630,
    "range": [
      628,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 631,
    "end": 638,
    "range": [
      631,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 640,
    "end": 642,
    "range": [
      640,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 644,
    "end": 646,
    "range": [
      644,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 649,
    "end": 653,
    "range": [
      649,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "inferPipe2",
    "start": 654,
    "end": 664,
    "range": [
      654,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 668,
    "end": 670,
    "range": [
      668,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 676,
    "end": 683,
    "range": [
      676,
      683
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 684,
    "end": 689,
    "range": [
      684,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 690,
    "end": 692,
    "range": [
      690,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "Type2",
    "start": 694,
    "end": 699,
    "range": [
      694,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 700,
    "end": 706,
    "range": [
      700,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 745,
    "end": 751,
    "range": [
      745,
      751
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 752,
    "end": 757,
    "range": [
      752,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "out2",
    "start": 758,
    "end": 762,
    "range": [
      758,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 765,
    "end": 767,
    "range": [
      765,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 768,
    "end": 772,
    "range": [
      768,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 775,
    "end": 777,
    "range": [
      775,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "parseInt",
    "start": 778,
    "end": 786,
    "range": [
      778,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  }
]
```
