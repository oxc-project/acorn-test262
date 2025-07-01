__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 22
              },
              "typeArguments": null,
              "start": 21,
              "end": 22
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 22
          }
        ],
        "start": 7,
        "end": 23
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 24,
        "end": 27
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 27
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
        "start": 34,
        "end": 35
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
              "start": 36,
              "end": 37
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 52
              },
              "typeArguments": null,
              "start": 46,
              "end": 52
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 52
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
              },
              "typeArguments": null,
              "start": 64,
              "end": 65
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 54,
            "end": 65
          }
        ],
        "start": 35,
        "end": 66
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 80
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 81,
                      "end": 87
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 89,
                      "end": 95
                    }
                  ],
                  "start": 80,
                  "end": 96
                },
                "start": 79,
                "end": 96
              },
              "start": 77,
              "end": 96
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
            "start": 73,
            "end": 97
          }
        ],
        "start": 67,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 28,
      "end": 99
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 155
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 157,
                              "end": 163
                            },
                            "start": 155,
                            "end": 163
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 154,
                          "end": 163
                        }
                      ],
                      "start": 152,
                      "end": 165
                    },
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 169,
                            "end": 170
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 172,
                              "end": 178
                            },
                            "start": 170,
                            "end": 178
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 169,
                          "end": 179
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 181
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 183,
                              "end": 189
                            },
                            "start": 181,
                            "end": 189
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 180,
                          "end": 189
                        }
                      ],
                      "start": 167,
                      "end": 191
                    }
                  ],
                  "start": 150,
                  "end": 192
                },
                "start": 149,
                "end": 192
              },
              "start": 147,
              "end": 192
            },
            "start": 146,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 146,
          "end": 192
        }
      ],
      "declare": false,
      "start": 142,
      "end": 193
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 202
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 206,
                            "end": 207
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 209,
                              "end": 215
                            },
                            "start": 207,
                            "end": 215
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 206,
                          "end": 215
                        }
                      ],
                      "start": 204,
                      "end": 217
                    },
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 222
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 224,
                              "end": 230
                            },
                            "start": 222,
                            "end": 230
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 221,
                          "end": 231
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 232,
                            "end": 233
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 235,
                              "end": 241
                            },
                            "start": 233,
                            "end": 241
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 232,
                          "end": 241
                        }
                      ],
                      "start": 219,
                      "end": 243
                    }
                  ],
                  "start": 202,
                  "end": 244
                },
                "start": 201,
                "end": 244
              },
              "start": 199,
              "end": 244
            },
            "start": 198,
            "end": 244
          },
          "init": null,
          "definite": false,
          "start": 198,
          "end": 244
        }
      ],
      "declare": false,
      "start": 194,
      "end": 245
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 285
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 288,
                            "end": 289
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 291,
                              "end": 297
                            },
                            "start": 289,
                            "end": 297
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 288,
                          "end": 298
                        }
                      ],
                      "start": 286,
                      "end": 299
                    },
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 304
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 306,
                              "end": 312
                            },
                            "start": 304,
                            "end": 312
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 303,
                          "end": 312
                        }
                      ],
                      "start": 301,
                      "end": 314
                    }
                  ],
                  "start": 285,
                  "end": 315
                },
                "start": 284,
                "end": 315
              },
              "start": 282,
              "end": 315
            },
            "start": 280,
            "end": 315
          },
          "init": null,
          "definite": false,
          "start": 280,
          "end": 315
        }
      ],
      "declare": false,
      "start": 276,
      "end": 316
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 326
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 330
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 332,
                              "end": 338
                            },
                            "start": 330,
                            "end": 338
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 329,
                          "end": 339
                        }
                      ],
                      "start": 327,
                      "end": 340
                    },
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 345
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 347,
                              "end": 353
                            },
                            "start": 345,
                            "end": 353
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 344,
                          "end": 353
                        }
                      ],
                      "start": 342,
                      "end": 355
                    }
                  ],
                  "start": 326,
                  "end": 356
                },
                "start": 325,
                "end": 356
              },
              "start": 323,
              "end": 356
            },
            "start": 321,
            "end": 356
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 356
        }
      ],
      "declare": false,
      "start": 317,
      "end": 357
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 370,
                            "end": 371
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 373,
                              "end": 379
                            },
                            "start": 371,
                            "end": 379
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 370,
                          "end": 380
                        }
                      ],
                      "start": 368,
                      "end": 381
                    },
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 385,
                            "end": 386
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 388,
                              "end": 394
                            },
                            "start": 386,
                            "end": 394
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 385,
                          "end": 394
                        }
                      ],
                      "start": 383,
                      "end": 396
                    }
                  ],
                  "start": 367,
                  "end": 397
                },
                "start": 366,
                "end": 397
              },
              "start": 364,
              "end": 397
            },
            "start": 362,
            "end": 397
          },
          "init": null,
          "definite": false,
          "start": 362,
          "end": 397
        }
      ],
      "declare": false,
      "start": 358,
      "end": 398
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 408
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 411,
                            "end": 412
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 414,
                              "end": 420
                            },
                            "start": 412,
                            "end": 420
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 411,
                          "end": 421
                        }
                      ],
                      "start": 409,
                      "end": 422
                    },
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 426,
                            "end": 427
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 429,
                              "end": 435
                            },
                            "start": 427,
                            "end": 435
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 426,
                          "end": 435
                        }
                      ],
                      "start": 424,
                      "end": 437
                    }
                  ],
                  "start": 408,
                  "end": 438
                },
                "start": 407,
                "end": 438
              },
              "start": 405,
              "end": 438
            },
            "start": 403,
            "end": 438
          },
          "init": null,
          "definite": false,
          "start": 403,
          "end": 438
        }
      ],
      "declare": false,
      "start": 399,
      "end": 439
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 449
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 452,
                            "end": 453
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 455,
                              "end": 461
                            },
                            "start": 453,
                            "end": 461
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 452,
                          "end": 462
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 464
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 466,
                              "end": 472
                            },
                            "start": 464,
                            "end": 472
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 463,
                          "end": 472
                        }
                      ],
                      "start": 450,
                      "end": 474
                    },
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 478,
                            "end": 479
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 481,
                              "end": 487
                            },
                            "start": 479,
                            "end": 487
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 478,
                          "end": 487
                        }
                      ],
                      "start": 476,
                      "end": 489
                    }
                  ],
                  "start": 449,
                  "end": 490
                },
                "start": 448,
                "end": 490
              },
              "start": 446,
              "end": 490
            },
            "start": 444,
            "end": 490
          },
          "init": null,
          "definite": false,
          "start": 444,
          "end": 490
        }
      ],
      "declare": false,
      "start": 440,
      "end": 491
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
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 501
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 504,
                            "end": 505
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 507,
                              "end": 513
                            },
                            "start": 505,
                            "end": 513
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 504,
                          "end": 514
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 516
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 518,
                              "end": 524
                            },
                            "start": 516,
                            "end": 524
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 515,
                          "end": 524
                        }
                      ],
                      "start": 502,
                      "end": 526
                    },
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 530,
                            "end": 531
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 533,
                              "end": 539
                            },
                            "start": 531,
                            "end": 539
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 530,
                          "end": 539
                        }
                      ],
                      "start": 528,
                      "end": 541
                    }
                  ],
                  "start": 501,
                  "end": 542
                },
                "start": 500,
                "end": 542
              },
              "start": 498,
              "end": 542
            },
            "start": 496,
            "end": 542
          },
          "init": null,
          "definite": false,
          "start": 496,
          "end": 542
        }
      ],
      "declare": false,
      "start": 492,
      "end": 543
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 555,
        "end": 557
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 565
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 567,
                "end": 573
              },
              "start": 565,
              "end": 573
            },
            "accessibility": null,
            "static": false,
            "start": 564,
            "end": 574
          }
        ],
        "start": 558,
        "end": 576
      },
      "declare": false,
      "start": 545,
      "end": 576
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 588,
        "end": 590
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 600,
                "end": 606
              },
              "start": 598,
              "end": 606
            },
            "accessibility": null,
            "static": false,
            "start": 597,
            "end": 607
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 613
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 615,
                "end": 621
              },
              "start": 613,
              "end": 621
            },
            "accessibility": null,
            "static": false,
            "start": 612,
            "end": 622
          }
        ],
        "start": 591,
        "end": 624
      },
      "declare": false,
      "start": 578,
      "end": 624
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
            "name": "x7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 635
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 636,
                        "end": 638
                      },
                      "typeArguments": null,
                      "start": 636,
                      "end": 638
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 640,
                        "end": 642
                      },
                      "typeArguments": null,
                      "start": 640,
                      "end": 642
                    }
                  ],
                  "start": 635,
                  "end": 643
                },
                "start": 634,
                "end": 643
              },
              "start": 632,
              "end": 643
            },
            "start": 630,
            "end": 643
          },
          "init": null,
          "definite": false,
          "start": 630,
          "end": 643
        }
      ],
      "declare": false,
      "start": 626,
      "end": 644
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
            "name": "x8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 654
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 655,
                        "end": 657
                      },
                      "typeArguments": null,
                      "start": 655,
                      "end": 657
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 659,
                        "end": 661
                      },
                      "typeArguments": null,
                      "start": 659,
                      "end": 661
                    }
                  ],
                  "start": 654,
                  "end": 662
                },
                "start": 653,
                "end": 662
              },
              "start": 651,
              "end": 662
            },
            "start": 649,
            "end": 662
          },
          "init": null,
          "definite": false,
          "start": 649,
          "end": 662
        }
      ],
      "declare": false,
      "start": 645,
      "end": 663
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 663
}
```
