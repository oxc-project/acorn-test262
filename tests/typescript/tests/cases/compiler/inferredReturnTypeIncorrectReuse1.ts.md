__ESTREE_TEST__:PASS:
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
