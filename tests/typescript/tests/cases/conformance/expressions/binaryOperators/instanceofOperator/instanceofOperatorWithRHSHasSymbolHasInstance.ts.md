__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 38
          }
        ],
        "start": 16,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point3D",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 58
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 71
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 82
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 83,
            "end": 92
          }
        ],
        "start": 59,
        "end": 94
      },
      "declare": false,
      "start": 41,
      "end": 94
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point3D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 113
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 127
          },
          "typeArguments": null,
          "start": 122,
          "end": 127
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 139
          }
        ],
        "start": 128,
        "end": 141
      },
      "declare": false,
      "start": 95,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Line",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 156
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "start",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 171
                },
                "typeArguments": null,
                "start": 166,
                "end": 171
              },
              "start": 164,
              "end": 171
            },
            "accessibility": null,
            "static": false,
            "start": 159,
            "end": 172
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "end",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 183
                },
                "typeArguments": null,
                "start": 178,
                "end": 183
              },
              "start": 176,
              "end": 183
            },
            "accessibility": null,
            "static": false,
            "start": 173,
            "end": 183
          }
        ],
        "start": 157,
        "end": 185
      },
      "declare": false,
      "start": 142,
      "end": 185
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
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 214
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 226
                      },
                      "optional": false,
                      "computed": false,
                      "start": 208,
                      "end": 226
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSUnknownKeyword",
                            "start": 235,
                            "end": 242
                          },
                          "start": 233,
                          "end": 242
                        },
                        "start": 228,
                        "end": 242
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 245,
                        "end": 252
                      },
                      "start": 243,
                      "end": 252
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 207,
                    "end": 253
                  }
                ],
                "start": 205,
                "end": 255
              },
              "start": 203,
              "end": 255
            },
            "start": 199,
            "end": 255
          },
          "init": null,
          "definite": false,
          "start": 199,
          "end": 255
        }
      ],
      "declare": true,
      "start": 187,
      "end": 256
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
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 284
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 296
                      },
                      "optional": false,
                      "computed": false,
                      "start": 278,
                      "end": 296
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSAnyKeyword",
                            "start": 305,
                            "end": 308
                          },
                          "start": 303,
                          "end": 308
                        },
                        "start": 298,
                        "end": 308
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 311,
                        "end": 318
                      },
                      "start": 309,
                      "end": 318
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 277,
                    "end": 319
                  }
                ],
                "start": 275,
                "end": 321
              },
              "start": 273,
              "end": 321
            },
            "start": 269,
            "end": 321
          },
          "init": null,
          "definite": false,
          "start": 269,
          "end": 321
        }
      ],
      "declare": true,
      "start": 257,
      "end": 322
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
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 362
                      },
                      "optional": false,
                      "computed": false,
                      "start": 344,
                      "end": 362
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSAnyKeyword",
                            "start": 371,
                            "end": 374
                          },
                          "start": 369,
                          "end": 374
                        },
                        "start": 364,
                        "end": 374
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 382
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 386,
                              "end": 391
                            },
                            "typeArguments": null,
                            "start": 386,
                            "end": 391
                          },
                          "start": 386,
                          "end": 391
                        },
                        "start": 377,
                        "end": 391
                      },
                      "start": 375,
                      "end": 391
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 343,
                    "end": 392
                  }
                ],
                "start": 341,
                "end": 394
              },
              "start": 339,
              "end": 394
            },
            "start": 335,
            "end": 394
          },
          "init": null,
          "definite": false,
          "start": 335,
          "end": 394
        }
      ],
      "declare": true,
      "start": 323,
      "end": 395
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
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 417,
                        "end": 423
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 435
                      },
                      "optional": false,
                      "computed": false,
                      "start": 417,
                      "end": 435
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 444,
                                  "end": 449
                                },
                                "typeArguments": null,
                                "start": 444,
                                "end": 449
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 452,
                                  "end": 456
                                },
                                "typeArguments": null,
                                "start": 452,
                                "end": 456
                              }
                            ],
                            "start": 444,
                            "end": 456
                          },
                          "start": 442,
                          "end": 456
                        },
                        "start": 437,
                        "end": 456
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 464
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 468,
                              "end": 473
                            },
                            "typeArguments": null,
                            "start": 468,
                            "end": 473
                          },
                          "start": 468,
                          "end": 473
                        },
                        "start": 459,
                        "end": 473
                      },
                      "start": 457,
                      "end": 473
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 416,
                    "end": 474
                  }
                ],
                "start": 414,
                "end": 476
              },
              "start": 412,
              "end": 476
            },
            "start": 408,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 408,
          "end": 476
        }
      ],
      "declare": true,
      "start": 396,
      "end": 477
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
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 505
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 517
                      },
                      "optional": false,
                      "computed": false,
                      "start": 499,
                      "end": 517
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 526,
                                  "end": 531
                                },
                                "typeArguments": null,
                                "start": 526,
                                "end": 531
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 534,
                                  "end": 538
                                },
                                "typeArguments": null,
                                "start": 534,
                                "end": 538
                              }
                            ],
                            "start": 526,
                            "end": 538
                          },
                          "start": 524,
                          "end": 538
                        },
                        "start": 519,
                        "end": 538
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 546
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Line",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 550,
                              "end": 554
                            },
                            "typeArguments": null,
                            "start": 550,
                            "end": 554
                          },
                          "start": 550,
                          "end": 554
                        },
                        "start": 541,
                        "end": 554
                      },
                      "start": 539,
                      "end": 554
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 498,
                    "end": 555
                  }
                ],
                "start": 496,
                "end": 557
              },
              "start": 494,
              "end": 557
            },
            "start": 490,
            "end": 557
          },
          "init": null,
          "definite": false,
          "start": 490,
          "end": 557
        }
      ],
      "declare": true,
      "start": 478,
      "end": 558
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
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 586
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 598
                      },
                      "optional": false,
                      "computed": false,
                      "start": 580,
                      "end": 598
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 607,
                                  "end": 612
                                },
                                "typeArguments": null,
                                "start": 607,
                                "end": 612
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point3D",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 615,
                                  "end": 622
                                },
                                "typeArguments": null,
                                "start": 615,
                                "end": 622
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 625,
                                  "end": 629
                                },
                                "typeArguments": null,
                                "start": 625,
                                "end": 629
                              }
                            ],
                            "start": 607,
                            "end": 629
                          },
                          "start": 605,
                          "end": 629
                        },
                        "start": 600,
                        "end": 629
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 632,
                          "end": 637
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point3D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 641,
                              "end": 648
                            },
                            "typeArguments": null,
                            "start": 641,
                            "end": 648
                          },
                          "start": 641,
                          "end": 648
                        },
                        "start": 632,
                        "end": 648
                      },
                      "start": 630,
                      "end": 648
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 579,
                    "end": 649
                  }
                ],
                "start": 577,
                "end": 651
              },
              "start": 575,
              "end": 651
            },
            "start": 571,
            "end": 651
          },
          "init": null,
          "definite": false,
          "start": 571,
          "end": 651
        }
      ],
      "declare": true,
      "start": 559,
      "end": 652
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
            "name": "rhs6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 674,
                        "end": 680
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 681,
                        "end": 692
                      },
                      "optional": false,
                      "computed": false,
                      "start": 674,
                      "end": 692
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point3D",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 701,
                                  "end": 708
                                },
                                "typeArguments": null,
                                "start": 701,
                                "end": 708
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 711,
                                  "end": 715
                                },
                                "typeArguments": null,
                                "start": 711,
                                "end": 715
                              }
                            ],
                            "start": 701,
                            "end": 715
                          },
                          "start": 699,
                          "end": 715
                        },
                        "start": 694,
                        "end": 715
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 718,
                          "end": 723
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point3D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 727,
                              "end": 734
                            },
                            "typeArguments": null,
                            "start": 727,
                            "end": 734
                          },
                          "start": 727,
                          "end": 734
                        },
                        "start": 718,
                        "end": 734
                      },
                      "start": 716,
                      "end": 734
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 673,
                    "end": 735
                  }
                ],
                "start": 671,
                "end": 737
              },
              "start": 669,
              "end": 737
            },
            "start": 665,
            "end": 737
          },
          "init": null,
          "definite": false,
          "start": 665,
          "end": 737
        }
      ],
      "declare": true,
      "start": 653,
      "end": 738
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs7",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 758
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 775
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 787
              },
              "optional": false,
              "computed": false,
              "start": 769,
              "end": 787
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSUnknownKeyword",
                      "start": 796,
                      "end": 803
                    },
                    "start": 794,
                    "end": 803
                  },
                  "start": 789,
                  "end": 803
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 806,
                  "end": 813
                },
                "start": 804,
                "end": 813
              },
              "body": null,
              "expression": false,
              "start": 788,
              "end": 814
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 761,
            "end": 814
          }
        ],
        "start": 759,
        "end": 816
      },
      "abstract": false,
      "declare": true,
      "start": 740,
      "end": 816
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs8",
        "optional": false,
        "typeAnnotation": null,
        "start": 831,
        "end": 835
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 852
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 853,
                "end": 864
              },
              "optional": false,
              "computed": false,
              "start": 846,
              "end": 864
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSAnyKeyword",
                      "start": 873,
                      "end": 876
                    },
                    "start": 871,
                    "end": 876
                  },
                  "start": 866,
                  "end": 876
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 879,
                  "end": 886
                },
                "start": 877,
                "end": 886
              },
              "body": null,
              "expression": false,
              "start": 865,
              "end": 887
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 838,
            "end": 887
          }
        ],
        "start": 836,
        "end": 889
      },
      "abstract": false,
      "declare": true,
      "start": 817,
      "end": 889
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs9",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 908
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 919,
                "end": 925
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 937
              },
              "optional": false,
              "computed": false,
              "start": 919,
              "end": 937
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSAnyKeyword",
                      "start": 946,
                      "end": 949
                    },
                    "start": 944,
                    "end": 949
                  },
                  "start": 939,
                  "end": 949
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 952,
                    "end": 957
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 961,
                        "end": 966
                      },
                      "typeArguments": null,
                      "start": 961,
                      "end": 966
                    },
                    "start": 961,
                    "end": 966
                  },
                  "start": 952,
                  "end": 966
                },
                "start": 950,
                "end": 966
              },
              "body": null,
              "expression": false,
              "start": 938,
              "end": 967
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 911,
            "end": 967
          }
        ],
        "start": 909,
        "end": 969
      },
      "abstract": false,
      "declare": true,
      "start": 890,
      "end": 969
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs10",
        "optional": false,
        "typeAnnotation": null,
        "start": 984,
        "end": 989
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1000,
                "end": 1006
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1018
              },
              "optional": false,
              "computed": false,
              "start": 1000,
              "end": 1018
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1027,
                            "end": 1032
                          },
                          "typeArguments": null,
                          "start": 1027,
                          "end": 1032
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1039
                          },
                          "typeArguments": null,
                          "start": 1035,
                          "end": 1039
                        }
                      ],
                      "start": 1027,
                      "end": 1039
                    },
                    "start": 1025,
                    "end": 1039
                  },
                  "start": 1020,
                  "end": 1039
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1042,
                    "end": 1047
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1051,
                        "end": 1056
                      },
                      "typeArguments": null,
                      "start": 1051,
                      "end": 1056
                    },
                    "start": 1051,
                    "end": 1056
                  },
                  "start": 1042,
                  "end": 1056
                },
                "start": 1040,
                "end": 1056
              },
              "body": null,
              "expression": false,
              "start": 1019,
              "end": 1057
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 992,
            "end": 1057
          }
        ],
        "start": 990,
        "end": 1059
      },
      "abstract": false,
      "declare": true,
      "start": 970,
      "end": 1059
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1074,
        "end": 1079
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1090,
                "end": 1096
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1097,
                "end": 1108
              },
              "optional": false,
              "computed": false,
              "start": 1090,
              "end": 1108
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1117,
                            "end": 1122
                          },
                          "typeArguments": null,
                          "start": 1117,
                          "end": 1122
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1125,
                            "end": 1129
                          },
                          "typeArguments": null,
                          "start": 1125,
                          "end": 1129
                        }
                      ],
                      "start": 1117,
                      "end": 1129
                    },
                    "start": 1115,
                    "end": 1129
                  },
                  "start": 1110,
                  "end": 1129
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1132,
                    "end": 1137
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Line",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1141,
                        "end": 1145
                      },
                      "typeArguments": null,
                      "start": 1141,
                      "end": 1145
                    },
                    "start": 1141,
                    "end": 1145
                  },
                  "start": 1132,
                  "end": 1145
                },
                "start": 1130,
                "end": 1145
              },
              "body": null,
              "expression": false,
              "start": 1109,
              "end": 1146
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1082,
            "end": 1146
          }
        ],
        "start": 1080,
        "end": 1148
      },
      "abstract": false,
      "declare": true,
      "start": 1060,
      "end": 1148
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1163,
        "end": 1168
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1186,
                "end": 1197
              },
              "optional": false,
              "computed": false,
              "start": 1179,
              "end": 1197
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1206,
                            "end": 1211
                          },
                          "typeArguments": null,
                          "start": 1206,
                          "end": 1211
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point3D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1214,
                            "end": 1221
                          },
                          "typeArguments": null,
                          "start": 1214,
                          "end": 1221
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1224,
                            "end": 1228
                          },
                          "typeArguments": null,
                          "start": 1224,
                          "end": 1228
                        }
                      ],
                      "start": 1206,
                      "end": 1228
                    },
                    "start": 1204,
                    "end": 1228
                  },
                  "start": 1199,
                  "end": 1228
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1231,
                    "end": 1236
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point3D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1240,
                        "end": 1247
                      },
                      "typeArguments": null,
                      "start": 1240,
                      "end": 1247
                    },
                    "start": 1240,
                    "end": 1247
                  },
                  "start": 1231,
                  "end": 1247
                },
                "start": 1229,
                "end": 1247
              },
              "body": null,
              "expression": false,
              "start": 1198,
              "end": 1248
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1171,
            "end": 1248
          }
        ],
        "start": 1169,
        "end": 1250
      },
      "abstract": false,
      "declare": true,
      "start": 1149,
      "end": 1250
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1265,
        "end": 1270
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1287
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1299
              },
              "optional": false,
              "computed": false,
              "start": 1281,
              "end": 1299
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point3D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1308,
                            "end": 1315
                          },
                          "typeArguments": null,
                          "start": 1308,
                          "end": 1315
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1318,
                            "end": 1322
                          },
                          "typeArguments": null,
                          "start": 1318,
                          "end": 1322
                        }
                      ],
                      "start": 1308,
                      "end": 1322
                    },
                    "start": 1306,
                    "end": 1322
                  },
                  "start": 1301,
                  "end": 1322
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1325,
                    "end": 1330
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point3D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1334,
                        "end": 1341
                      },
                      "typeArguments": null,
                      "start": 1334,
                      "end": 1341
                    },
                    "start": 1334,
                    "end": 1341
                  },
                  "start": 1325,
                  "end": 1341
                },
                "start": 1323,
                "end": 1341
              },
              "body": null,
              "expression": false,
              "start": 1300,
              "end": 1342
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1273,
            "end": 1342
          }
        ],
        "start": 1271,
        "end": 1344
      },
      "abstract": false,
      "declare": true,
      "start": 1251,
      "end": 1344
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
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1364,
                "end": 1367
              },
              "start": 1362,
              "end": 1367
            },
            "start": 1358,
            "end": 1367
          },
          "init": null,
          "definite": false,
          "start": 1358,
          "end": 1367
        }
      ],
      "declare": true,
      "start": 1346,
      "end": 1368
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
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 1387,
                "end": 1393
              },
              "start": 1385,
              "end": 1393
            },
            "start": 1381,
            "end": 1393
          },
          "init": null,
          "definite": false,
          "start": 1381,
          "end": 1393
        }
      ],
      "declare": true,
      "start": 1369,
      "end": 1394
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
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1413,
                      "end": 1418
                    },
                    "typeArguments": null,
                    "start": 1413,
                    "end": 1418
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point3D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1421,
                      "end": 1428
                    },
                    "typeArguments": null,
                    "start": 1421,
                    "end": 1428
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1431,
                      "end": 1435
                    },
                    "typeArguments": null,
                    "start": 1431,
                    "end": 1435
                  }
                ],
                "start": 1413,
                "end": 1435
              },
              "start": 1411,
              "end": 1435
            },
            "start": 1407,
            "end": 1435
          },
          "init": null,
          "definite": false,
          "start": 1407,
          "end": 1435
        }
      ],
      "declare": true,
      "start": 1395,
      "end": 1436
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
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point3D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1455,
                      "end": 1462
                    },
                    "typeArguments": null,
                    "start": 1455,
                    "end": 1462
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1465,
                      "end": 1469
                    },
                    "typeArguments": null,
                    "start": 1465,
                    "end": 1469
                  }
                ],
                "start": 1455,
                "end": 1469
              },
              "start": 1453,
              "end": 1469
            },
            "start": 1449,
            "end": 1469
          },
          "init": null,
          "definite": false,
          "start": 1449,
          "end": 1469
        }
      ],
      "declare": true,
      "start": 1437,
      "end": 1470
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
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1489,
                      "end": 1494
                    },
                    "typeArguments": null,
                    "start": 1489,
                    "end": 1494
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point3D2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1497,
                      "end": 1505
                    },
                    "typeArguments": null,
                    "start": 1497,
                    "end": 1505
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1512
                    },
                    "typeArguments": null,
                    "start": 1508,
                    "end": 1512
                  }
                ],
                "start": 1489,
                "end": 1512
              },
              "start": 1487,
              "end": 1512
            },
            "start": 1483,
            "end": 1512
          },
          "init": null,
          "definite": false,
          "start": 1483,
          "end": 1512
        }
      ],
      "declare": true,
      "start": 1471,
      "end": 1513
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1515,
            "end": 1519
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1531,
            "end": 1535
          },
          "start": 1515,
          "end": 1535
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1539,
          "end": 1543
        },
        "start": 1515,
        "end": 1543
      },
      "directive": null,
      "start": 1515,
      "end": 1544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1545,
            "end": 1549
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1565
          },
          "start": 1545,
          "end": 1565
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1569,
          "end": 1573
        },
        "start": 1545,
        "end": 1573
      },
      "directive": null,
      "start": 1545,
      "end": 1574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1575,
            "end": 1579
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1591,
            "end": 1595
          },
          "start": 1575,
          "end": 1595
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1599,
          "end": 1603
        },
        "start": 1575,
        "end": 1603
      },
      "directive": null,
      "start": 1575,
      "end": 1604
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1605,
            "end": 1609
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1621,
            "end": 1625
          },
          "start": 1605,
          "end": 1625
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1633
        },
        "start": 1605,
        "end": 1633
      },
      "directive": null,
      "start": 1605,
      "end": 1634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1635,
            "end": 1639
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1651,
            "end": 1655
          },
          "start": 1635,
          "end": 1655
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1659,
          "end": 1663
        },
        "start": 1635,
        "end": 1663
      },
      "directive": null,
      "start": 1635,
      "end": 1664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1665,
            "end": 1669
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1681,
            "end": 1685
          },
          "start": 1665,
          "end": 1685
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1689,
          "end": 1693
        },
        "start": 1665,
        "end": 1693
      },
      "directive": null,
      "start": 1665,
      "end": 1694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1699
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1711,
            "end": 1715
          },
          "start": 1695,
          "end": 1715
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1719,
          "end": 1723
        },
        "start": 1695,
        "end": 1723
      },
      "directive": null,
      "start": 1695,
      "end": 1724
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1725,
            "end": 1729
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1741,
            "end": 1745
          },
          "start": 1725,
          "end": 1745
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1753
        },
        "start": 1725,
        "end": 1753
      },
      "directive": null,
      "start": 1725,
      "end": 1754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1755,
            "end": 1759
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1771,
            "end": 1775
          },
          "start": 1755,
          "end": 1775
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1779,
          "end": 1783
        },
        "start": 1755,
        "end": 1783
      },
      "directive": null,
      "start": 1755,
      "end": 1784
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1785,
            "end": 1789
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1801,
            "end": 1805
          },
          "start": 1785,
          "end": 1805
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1809,
          "end": 1813
        },
        "start": 1785,
        "end": 1813
      },
      "directive": null,
      "start": 1785,
      "end": 1814
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1815,
            "end": 1819
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1831,
            "end": 1836
          },
          "start": 1815,
          "end": 1836
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1840,
          "end": 1844
        },
        "start": 1815,
        "end": 1844
      },
      "directive": null,
      "start": 1815,
      "end": 1845
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1846,
            "end": 1850
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1862,
            "end": 1867
          },
          "start": 1846,
          "end": 1867
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1871,
          "end": 1875
        },
        "start": 1846,
        "end": 1875
      },
      "directive": null,
      "start": 1846,
      "end": 1876
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1877,
            "end": 1881
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1893,
            "end": 1898
          },
          "start": 1877,
          "end": 1898
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1902,
          "end": 1906
        },
        "start": 1877,
        "end": 1906
      },
      "directive": null,
      "start": 1877,
      "end": 1907
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1908,
            "end": 1912
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1924,
            "end": 1929
          },
          "start": 1908,
          "end": 1929
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1933,
          "end": 1937
        },
        "start": 1908,
        "end": 1937
      },
      "directive": null,
      "start": 1908,
      "end": 1938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1940,
            "end": 1944
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1956,
            "end": 1960
          },
          "start": 1940,
          "end": 1960
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1964,
          "end": 1968
        },
        "start": 1940,
        "end": 1968
      },
      "directive": null,
      "start": 1940,
      "end": 1969
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1970,
            "end": 1974
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1986,
            "end": 1990
          },
          "start": 1970,
          "end": 1990
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1994,
          "end": 1998
        },
        "start": 1970,
        "end": 1998
      },
      "directive": null,
      "start": 1970,
      "end": 1999
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2000,
            "end": 2004
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2016,
            "end": 2020
          },
          "start": 2000,
          "end": 2020
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2024,
          "end": 2028
        },
        "start": 2000,
        "end": 2028
      },
      "directive": null,
      "start": 2000,
      "end": 2029
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2030,
            "end": 2034
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2046,
            "end": 2050
          },
          "start": 2030,
          "end": 2050
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2054,
          "end": 2058
        },
        "start": 2030,
        "end": 2058
      },
      "directive": null,
      "start": 2030,
      "end": 2059
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2060,
            "end": 2064
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2076,
            "end": 2080
          },
          "start": 2060,
          "end": 2080
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2084,
          "end": 2088
        },
        "start": 2060,
        "end": 2088
      },
      "directive": null,
      "start": 2060,
      "end": 2089
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2090,
            "end": 2094
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2106,
            "end": 2110
          },
          "start": 2090,
          "end": 2110
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2114,
          "end": 2118
        },
        "start": 2090,
        "end": 2118
      },
      "directive": null,
      "start": 2090,
      "end": 2119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2121,
            "end": 2125
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2137,
            "end": 2141
          },
          "start": 2121,
          "end": 2141
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2145,
          "end": 2149
        },
        "start": 2121,
        "end": 2149
      },
      "directive": null,
      "start": 2121,
      "end": 2150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2151,
            "end": 2155
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2167,
            "end": 2171
          },
          "start": 2151,
          "end": 2171
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2175,
          "end": 2179
        },
        "start": 2151,
        "end": 2179
      },
      "directive": null,
      "start": 2151,
      "end": 2180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2181,
            "end": 2185
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2197,
            "end": 2201
          },
          "start": 2181,
          "end": 2201
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2205,
          "end": 2209
        },
        "start": 2181,
        "end": 2209
      },
      "directive": null,
      "start": 2181,
      "end": 2210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2211,
            "end": 2215
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2227,
            "end": 2231
          },
          "start": 2211,
          "end": 2231
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2235,
          "end": 2239
        },
        "start": 2211,
        "end": 2239
      },
      "directive": null,
      "start": 2211,
      "end": 2240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2241,
            "end": 2245
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2257,
            "end": 2261
          },
          "start": 2241,
          "end": 2261
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2265,
          "end": 2269
        },
        "start": 2241,
        "end": 2269
      },
      "directive": null,
      "start": 2241,
      "end": 2270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2271,
            "end": 2275
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2287,
            "end": 2291
          },
          "start": 2271,
          "end": 2291
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2295,
          "end": 2299
        },
        "start": 2271,
        "end": 2299
      },
      "directive": null,
      "start": 2271,
      "end": 2300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2301,
            "end": 2305
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2317,
            "end": 2321
          },
          "start": 2301,
          "end": 2321
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2325,
          "end": 2329
        },
        "start": 2301,
        "end": 2329
      },
      "directive": null,
      "start": 2301,
      "end": 2330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2331,
            "end": 2335
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2347,
            "end": 2351
          },
          "start": 2331,
          "end": 2351
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2355,
          "end": 2359
        },
        "start": 2331,
        "end": 2359
      },
      "directive": null,
      "start": 2331,
      "end": 2360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2361,
            "end": 2365
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2377,
            "end": 2381
          },
          "start": 2361,
          "end": 2381
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2385,
          "end": 2389
        },
        "start": 2361,
        "end": 2389
      },
      "directive": null,
      "start": 2361,
      "end": 2390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2391,
            "end": 2395
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs10",
            "optional": false,
            "typeAnnotation": null,
            "start": 2407,
            "end": 2412
          },
          "start": 2391,
          "end": 2412
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2416,
          "end": 2420
        },
        "start": 2391,
        "end": 2420
      },
      "directive": null,
      "start": 2391,
      "end": 2421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2422,
            "end": 2426
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs11",
            "optional": false,
            "typeAnnotation": null,
            "start": 2438,
            "end": 2443
          },
          "start": 2422,
          "end": 2443
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2447,
          "end": 2451
        },
        "start": 2422,
        "end": 2451
      },
      "directive": null,
      "start": 2422,
      "end": 2452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2453,
            "end": 2457
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs12",
            "optional": false,
            "typeAnnotation": null,
            "start": 2469,
            "end": 2474
          },
          "start": 2453,
          "end": 2474
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2478,
          "end": 2482
        },
        "start": 2453,
        "end": 2482
      },
      "directive": null,
      "start": 2453,
      "end": 2483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2485,
            "end": 2489
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2501,
            "end": 2505
          },
          "start": 2485,
          "end": 2505
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2509,
          "end": 2513
        },
        "start": 2485,
        "end": 2513
      },
      "directive": null,
      "start": 2485,
      "end": 2514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2515,
            "end": 2519
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2531,
            "end": 2535
          },
          "start": 2515,
          "end": 2535
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2539,
          "end": 2543
        },
        "start": 2515,
        "end": 2543
      },
      "directive": null,
      "start": 2515,
      "end": 2544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2545,
            "end": 2549
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2561,
            "end": 2565
          },
          "start": 2545,
          "end": 2565
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2569,
          "end": 2573
        },
        "start": 2545,
        "end": 2573
      },
      "directive": null,
      "start": 2545,
      "end": 2574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2575,
            "end": 2579
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2591,
            "end": 2595
          },
          "start": 2575,
          "end": 2595
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2599,
          "end": 2603
        },
        "start": 2575,
        "end": 2603
      },
      "directive": null,
      "start": 2575,
      "end": 2604
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2605,
            "end": 2609
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2621,
            "end": 2625
          },
          "start": 2605,
          "end": 2625
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2629,
          "end": 2633
        },
        "start": 2605,
        "end": 2633
      },
      "directive": null,
      "start": 2605,
      "end": 2634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2635,
            "end": 2639
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2651,
            "end": 2655
          },
          "start": 2635,
          "end": 2655
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2659,
          "end": 2663
        },
        "start": 2635,
        "end": 2663
      },
      "directive": null,
      "start": 2635,
      "end": 2664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2665,
            "end": 2669
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2681,
            "end": 2685
          },
          "start": 2665,
          "end": 2685
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2689,
          "end": 2693
        },
        "start": 2665,
        "end": 2693
      },
      "directive": null,
      "start": 2665,
      "end": 2694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2695,
            "end": 2699
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2711,
            "end": 2715
          },
          "start": 2695,
          "end": 2715
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2719,
          "end": 2723
        },
        "start": 2695,
        "end": 2723
      },
      "directive": null,
      "start": 2695,
      "end": 2724
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2725,
            "end": 2729
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2741,
            "end": 2745
          },
          "start": 2725,
          "end": 2745
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2749,
          "end": 2753
        },
        "start": 2725,
        "end": 2753
      },
      "directive": null,
      "start": 2725,
      "end": 2754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2755,
            "end": 2759
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2771,
            "end": 2775
          },
          "start": 2755,
          "end": 2775
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2779,
          "end": 2783
        },
        "start": 2755,
        "end": 2783
      },
      "directive": null,
      "start": 2755,
      "end": 2784
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2785,
            "end": 2789
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs10",
            "optional": false,
            "typeAnnotation": null,
            "start": 2801,
            "end": 2806
          },
          "start": 2785,
          "end": 2806
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2810,
          "end": 2814
        },
        "start": 2785,
        "end": 2814
      },
      "directive": null,
      "start": 2785,
      "end": 2815
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2816,
            "end": 2820
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs11",
            "optional": false,
            "typeAnnotation": null,
            "start": 2832,
            "end": 2837
          },
          "start": 2816,
          "end": 2837
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2841,
          "end": 2845
        },
        "start": 2816,
        "end": 2845
      },
      "directive": null,
      "start": 2816,
      "end": 2846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2847,
            "end": 2851
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs12",
            "optional": false,
            "typeAnnotation": null,
            "start": 2863,
            "end": 2868
          },
          "start": 2847,
          "end": 2868
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2872,
          "end": 2876
        },
        "start": 2847,
        "end": 2876
      },
      "directive": null,
      "start": 2847,
      "end": 2877
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2878,
            "end": 2882
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs13",
            "optional": false,
            "typeAnnotation": null,
            "start": 2894,
            "end": 2899
          },
          "start": 2878,
          "end": 2899
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2903,
          "end": 2907
        },
        "start": 2878,
        "end": 2907
      },
      "directive": null,
      "start": 2878,
      "end": 2908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2910,
            "end": 2914
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2926,
            "end": 2930
          },
          "start": 2910,
          "end": 2930
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2934,
          "end": 2938
        },
        "start": 2910,
        "end": 2938
      },
      "directive": null,
      "start": 2910,
      "end": 2939
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2940,
            "end": 2944
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2956,
            "end": 2960
          },
          "start": 2940,
          "end": 2960
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2964,
          "end": 2968
        },
        "start": 2940,
        "end": 2968
      },
      "directive": null,
      "start": 2940,
      "end": 2969
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2970,
            "end": 2974
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2986,
            "end": 2990
          },
          "start": 2970,
          "end": 2990
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2994,
          "end": 2998
        },
        "start": 2970,
        "end": 2998
      },
      "directive": null,
      "start": 2970,
      "end": 2999
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3000,
            "end": 3004
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3016,
            "end": 3020
          },
          "start": 3000,
          "end": 3020
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3024,
          "end": 3028
        },
        "start": 3000,
        "end": 3028
      },
      "directive": null,
      "start": 3000,
      "end": 3029
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3030,
            "end": 3034
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3046,
            "end": 3050
          },
          "start": 3030,
          "end": 3050
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3054,
          "end": 3058
        },
        "start": 3030,
        "end": 3058
      },
      "directive": null,
      "start": 3030,
      "end": 3059
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3060,
            "end": 3064
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3076,
            "end": 3080
          },
          "start": 3060,
          "end": 3080
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3084,
          "end": 3088
        },
        "start": 3060,
        "end": 3088
      },
      "directive": null,
      "start": 3060,
      "end": 3089
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3090,
            "end": 3094
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3106,
            "end": 3110
          },
          "start": 3090,
          "end": 3110
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3114,
          "end": 3118
        },
        "start": 3090,
        "end": 3118
      },
      "directive": null,
      "start": 3090,
      "end": 3119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3120,
            "end": 3124
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3136,
            "end": 3140
          },
          "start": 3120,
          "end": 3140
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3144,
          "end": 3148
        },
        "start": 3120,
        "end": 3148
      },
      "directive": null,
      "start": 3120,
      "end": 3149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3150,
            "end": 3154
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs9",
            "optional": false,
            "typeAnnotation": null,
            "start": 3166,
            "end": 3170
          },
          "start": 3150,
          "end": 3170
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3174,
          "end": 3178
        },
        "start": 3150,
        "end": 3178
      },
      "directive": null,
      "start": 3150,
      "end": 3179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3180,
            "end": 3184
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs10",
            "optional": false,
            "typeAnnotation": null,
            "start": 3196,
            "end": 3201
          },
          "start": 3180,
          "end": 3201
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3205,
          "end": 3209
        },
        "start": 3180,
        "end": 3209
      },
      "directive": null,
      "start": 3180,
      "end": 3210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3211,
            "end": 3215
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs11",
            "optional": false,
            "typeAnnotation": null,
            "start": 3227,
            "end": 3232
          },
          "start": 3211,
          "end": 3232
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3236,
          "end": 3240
        },
        "start": 3211,
        "end": 3240
      },
      "directive": null,
      "start": 3211,
      "end": 3241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3242,
            "end": 3246
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rhs12",
            "optional": false,
            "typeAnnotation": null,
            "start": 3258,
            "end": 3263
          },
          "start": 3242,
          "end": 3263
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3267,
          "end": 3271
        },
        "start": 3242,
        "end": 3271
      },
      "directive": null,
      "start": 3242,
      "end": 3272
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 3288,
        "end": 3289
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 3296,
              "end": 3298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3300,
                "end": 3306
              },
              "start": 3298,
              "end": 3306
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3296,
            "end": 3307
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3549,
                "end": 3555
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 3556,
                "end": 3567
              },
              "optional": false,
              "computed": false,
              "start": 3549,
              "end": 3567
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 3569,
                      "end": 3570
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3569,
                    "end": 3570
                  }
                ],
                "start": 3568,
                "end": 3571
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
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
                        "start": 3578,
                        "end": 3579
                      },
                      "typeArguments": null,
                      "start": 3578,
                      "end": 3579
                    },
                    "start": 3576,
                    "end": 3579
                  },
                  "start": 3572,
                  "end": 3579
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3588,
                      "end": 3595
                    },
                    "start": 3586,
                    "end": 3595
                  },
                  "start": 3581,
                  "end": 3595
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3598,
                    "end": 3603
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3617,
                          "end": 3618
                        },
                        "typeArguments": null,
                        "start": 3617,
                        "end": 3618
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "globalThis",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3627,
                            "end": 3637
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3638,
                            "end": 3646
                          },
                          "start": 3627,
                          "end": 3646
                        },
                        "typeArguments": null,
                        "start": 3627,
                        "end": 3646
                      },
                      "trueType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3661,
                            "end": 3662
                          },
                          "typeArguments": null,
                          "start": 3661,
                          "end": 3662
                        },
                        "extendsType": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": true,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prototype",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3682,
                                "end": 3691
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSInferType",
                                  "typeParameter": {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3699,
                                      "end": 3700
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3699,
                                    "end": 3700
                                  },
                                  "start": 3693,
                                  "end": 3700
                                },
                                "start": 3691,
                                "end": 3700
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3673,
                              "end": 3700
                            }
                          ],
                          "start": 3671,
                          "end": 3702
                        },
                        "trueType": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSBooleanKeyword",
                            "start": 3721,
                            "end": 3728
                          },
                          "extendsType": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3738,
                                "end": 3739
                              },
                              "typeArguments": null,
                              "start": 3738,
                              "end": 3739
                            },
                            "extendsType": {
                              "type": "TSNeverKeyword",
                              "start": 3748,
                              "end": 3753
                            },
                            "trueType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 3756,
                                "end": 3760
                              },
                              "start": 3756,
                              "end": 3760
                            },
                            "falseType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 3763,
                                "end": 3768
                              },
                              "start": 3763,
                              "end": 3768
                            },
                            "start": 3738,
                            "end": 3768
                          },
                          "trueType": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3825,
                                "end": 3826
                              },
                              "typeArguments": null,
                              "start": 3825,
                              "end": 3826
                            },
                            "extendsType": {
                              "type": "TSConstructorType",
                              "abstract": true,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3853,
                                    "end": 3857
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 3859,
                                      "end": 3862
                                    },
                                    "start": 3857,
                                    "end": 3862
                                  },
                                  "value": null,
                                  "start": 3850,
                                  "end": 3862
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSInferType",
                                  "typeParameter": {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3873,
                                      "end": 3874
                                    },
                                    "constraint": null,
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 3873,
                                    "end": 3874
                                  },
                                  "start": 3867,
                                  "end": 3874
                                },
                                "start": 3864,
                                "end": 3874
                              },
                              "start": 3836,
                              "end": 3874
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3878,
                                "end": 3879
                              },
                              "typeArguments": null,
                              "start": 3878,
                              "end": 3879
                            },
                            "falseType": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 3882,
                              "end": 3884
                            },
                            "start": 3825,
                            "end": 3884
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3903,
                              "end": 3904
                            },
                            "typeArguments": null,
                            "start": 3903,
                            "end": 3904
                          },
                          "start": 3721,
                          "end": 3904
                        },
                        "falseType": {
                          "type": "TSNeverKeyword",
                          "start": 3919,
                          "end": 3924
                        },
                        "start": 3661,
                        "end": 3924
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 3935,
                        "end": 3940
                      },
                      "start": 3617,
                      "end": 3940
                    },
                    "start": 3617,
                    "end": 3940
                  },
                  "start": 3598,
                  "end": 3946
                },
                "start": 3596,
                "end": 3946
              },
              "body": null,
              "expression": false,
              "start": 3568,
              "end": 3947
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3541,
            "end": 3947
          }
        ],
        "start": 3290,
        "end": 3949
      },
      "abstract": false,
      "declare": true,
      "start": 3274,
      "end": 3949
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 3965,
        "end": 3966
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 3975,
        "end": 3976
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "y",
              "start": 3979,
              "end": 3981
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3983,
                "end": 3989
              },
              "start": 3981,
              "end": 3989
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3979,
            "end": 3990
          }
        ],
        "start": 3977,
        "end": 3992
      },
      "abstract": false,
      "declare": true,
      "start": 3951,
      "end": 3992
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 4013,
                "end": 4020
              },
              "start": 4011,
              "end": 4020
            },
            "start": 4008,
            "end": 4020
          },
          "init": null,
          "definite": false,
          "start": 4008,
          "end": 4020
        }
      ],
      "declare": true,
      "start": 3994,
      "end": 4021
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 4026,
          "end": 4029
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 4041,
          "end": 4042
        },
        "start": 4026,
        "end": 4042
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 4050,
              "end": 4053
            },
            "directive": null,
            "start": 4050,
            "end": 4054
          }
        ],
        "start": 4044,
        "end": 4061
      },
      "alternate": null,
      "start": 4022,
      "end": 4061
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 4066,
          "end": 4069
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 4081,
          "end": 4082
        },
        "start": 4066,
        "end": 4082
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 4090,
              "end": 4093
            },
            "directive": null,
            "start": 4090,
            "end": 4094
          }
        ],
        "start": 4084,
        "end": 4101
      },
      "alternate": null,
      "start": 4062,
      "end": 4101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasInstanceOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 4187,
        "end": 4200
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 4204,
                "end": 4210
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 4211,
                "end": 4222
              },
              "optional": false,
              "computed": false,
              "start": 4204,
              "end": 4222
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 4227,
                    "end": 4234
                  },
                  "start": 4225,
                  "end": 4234
                },
                "start": 4224,
                "end": 4234
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4237,
                "end": 4244
              },
              "start": 4235,
              "end": 4244
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4203,
            "end": 4244
          }
        ],
        "start": 4201,
        "end": 4246
      },
      "declare": false,
      "start": 4177,
      "end": 4246
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs14",
        "optional": false,
        "typeAnnotation": null,
        "start": 4252,
        "end": 4257
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasInstanceOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 4260,
              "end": 4273
            },
            "typeArguments": null,
            "start": 4260,
            "end": 4273
          },
          {
            "type": "TSObjectKeyword",
            "start": 4276,
            "end": 4282
          }
        ],
        "start": 4260,
        "end": 4282
      },
      "declare": false,
      "start": 4247,
      "end": 4283
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
            "name": "rhs14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rhs14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4305,
                  "end": 4310
                },
                "typeArguments": null,
                "start": 4305,
                "end": 4310
              },
              "start": 4303,
              "end": 4310
            },
            "start": 4298,
            "end": 4310
          },
          "init": null,
          "definite": false,
          "start": 4298,
          "end": 4310
        }
      ],
      "declare": true,
      "start": 4284,
      "end": 4311
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 4312,
            "end": 4316
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs14",
            "optional": false,
            "typeAnnotation": null,
            "start": 4328,
            "end": 4333
          },
          "start": 4312,
          "end": 4333
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 4337,
          "end": 4341
        },
        "start": 4312,
        "end": 4341
      },
      "directive": null,
      "start": 4312,
      "end": 4342
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasInstanceOf1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4365,
        "end": 4379
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 4383,
                "end": 4389
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 4390,
                "end": 4401
              },
              "optional": false,
              "computed": false,
              "start": 4383,
              "end": 4401
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 4406,
                    "end": 4413
                  },
                  "start": 4404,
                  "end": 4413
                },
                "start": 4403,
                "end": 4413
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4416,
                  "end": 4417
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4421,
                      "end": 4426
                    },
                    "typeArguments": null,
                    "start": 4421,
                    "end": 4426
                  },
                  "start": 4421,
                  "end": 4426
                },
                "start": 4416,
                "end": 4426
              },
              "start": 4414,
              "end": 4426
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4382,
            "end": 4426
          }
        ],
        "start": 4380,
        "end": 4428
      },
      "declare": false,
      "start": 4355,
      "end": 4428
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasInstanceOf2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4439,
        "end": 4453
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 4457,
                "end": 4463
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 4464,
                "end": 4475
              },
              "optional": false,
              "computed": false,
              "start": 4457,
              "end": 4475
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 4480,
                    "end": 4487
                  },
                  "start": 4478,
                  "end": 4487
                },
                "start": 4477,
                "end": 4487
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4490,
                  "end": 4491
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4495,
                      "end": 4499
                    },
                    "typeArguments": null,
                    "start": 4495,
                    "end": 4499
                  },
                  "start": 4495,
                  "end": 4499
                },
                "start": 4490,
                "end": 4499
              },
              "start": 4488,
              "end": 4499
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4456,
            "end": 4499
          }
        ],
        "start": 4454,
        "end": 4501
      },
      "declare": false,
      "start": 4429,
      "end": 4501
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rhs15",
        "optional": false,
        "typeAnnotation": null,
        "start": 4507,
        "end": 4512
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasInstanceOf1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4515,
              "end": 4529
            },
            "typeArguments": null,
            "start": 4515,
            "end": 4529
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasInstanceOf2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4532,
              "end": 4546
            },
            "typeArguments": null,
            "start": 4532,
            "end": 4546
          }
        ],
        "start": 4515,
        "end": 4546
      },
      "declare": false,
      "start": 4502,
      "end": 4547
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
            "name": "rhs15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rhs15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4569,
                  "end": 4574
                },
                "typeArguments": null,
                "start": 4569,
                "end": 4574
              },
              "start": 4567,
              "end": 4574
            },
            "start": 4562,
            "end": 4574
          },
          "init": null,
          "definite": false,
          "start": 4562,
          "end": 4574
        }
      ],
      "declare": true,
      "start": 4548,
      "end": 4575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": null,
            "start": 4576,
            "end": 4580
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "rhs15",
            "optional": false,
            "typeAnnotation": null,
            "start": 4592,
            "end": 4597
          },
          "start": 4576,
          "end": 4597
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "lhs0",
          "optional": false,
          "typeAnnotation": null,
          "start": 4601,
          "end": 4605
        },
        "start": 4576,
        "end": 4605
      },
      "directive": null,
      "start": 4576,
      "end": 4606
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4606
}
```
