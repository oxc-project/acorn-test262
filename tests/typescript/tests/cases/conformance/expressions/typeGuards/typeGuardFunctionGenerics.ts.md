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
              "type": "Identifier",
              "decorators": [],
              "name": "propA",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 28
          }
        ],
        "start": 8,
        "end": 30
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 30
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
        "start": 38,
        "end": 39
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
              "type": "Identifier",
              "decorators": [],
              "name": "propB",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
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
            "start": 46,
            "end": 60
          }
        ],
        "start": 40,
        "end": 62
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 62
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 81
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
              "type": "Identifier",
              "decorators": [],
              "name": "propC",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 95,
                "end": 101
              },
              "start": 93,
              "end": 101
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
            "start": 88,
            "end": 102
          }
        ],
        "start": 82,
        "end": 104
      },
      "abstract": false,
      "declare": false,
      "start": 64,
      "end": 104
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isB",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 129
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 134
          },
          "asserts": false,
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
                "start": 138,
                "end": 139
              },
              "typeArguments": null,
              "start": 138,
              "end": 139
            },
            "start": 138,
            "end": 139
          },
          "start": 132,
          "end": 139
        },
        "start": 130,
        "end": 139
      },
      "body": null,
      "expression": false,
      "start": 106,
      "end": 140
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 161
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 164
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 169
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 174
              },
              "typeArguments": null,
              "start": 173,
              "end": 174
            },
            "start": 173,
            "end": 174
          },
          "start": 167,
          "end": 174
        },
        "start": 165,
        "end": 174
      },
      "body": null,
      "expression": false,
      "start": 141,
      "end": 175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "retC",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 197
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
          "typeAnnotation": null,
          "start": 198,
          "end": 199
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 203
          },
          "typeArguments": null,
          "start": 202,
          "end": 203
        },
        "start": 200,
        "end": 203
      },
      "body": null,
      "expression": false,
      "start": 176,
      "end": 204
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funA",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 228
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
              "start": 229,
              "end": 230
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 229,
            "end": 230
          }
        ],
        "start": 228,
        "end": 231
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 239
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
                    "start": 244,
                    "end": 245
                  },
                  "typeArguments": null,
                  "start": 244,
                  "end": 245
                },
                "start": 241,
                "end": 245
              },
              "start": 236,
              "end": 245
            },
            "start": 234,
            "end": 245
          },
          "start": 232,
          "end": 245
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
            "start": 248,
            "end": 249
          },
          "typeArguments": null,
          "start": 248,
          "end": 249
        },
        "start": 246,
        "end": 249
      },
      "body": null,
      "expression": false,
      "start": 207,
      "end": 250
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funB",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 272
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
              "start": 273,
              "end": 274
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 273,
            "end": 274
          }
        ],
        "start": 272,
        "end": 275
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 283
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
                    "start": 288,
                    "end": 289
                  },
                  "typeArguments": null,
                  "start": 288,
                  "end": 289
                },
                "start": 285,
                "end": 289
              },
              "start": 280,
              "end": 289
            },
            "start": 278,
            "end": 289
          },
          "start": 276,
          "end": 289
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 295,
              "end": 298
            },
            "start": 293,
            "end": 298
          },
          "start": 291,
          "end": 298
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 303
          },
          "asserts": false,
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
                "start": 307,
                "end": 308
              },
              "typeArguments": null,
              "start": 307,
              "end": 308
            },
            "start": 307,
            "end": 308
          },
          "start": 301,
          "end": 308
        },
        "start": 299,
        "end": 308
      },
      "body": null,
      "expression": false,
      "start": 251,
      "end": 309
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funC",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 331
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
              "start": 332,
              "end": 333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 333
          }
        ],
        "start": 331,
        "end": 334
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 342
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 349
                  },
                  "asserts": false,
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
                        "start": 353,
                        "end": 354
                      },
                      "typeArguments": null,
                      "start": 353,
                      "end": 354
                    },
                    "start": 353,
                    "end": 354
                  },
                  "start": 347,
                  "end": 354
                },
                "start": 344,
                "end": 354
              },
              "start": 339,
              "end": 354
            },
            "start": 337,
            "end": 354
          },
          "start": 335,
          "end": 354
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
            "start": 357,
            "end": 358
          },
          "typeArguments": null,
          "start": 357,
          "end": 358
        },
        "start": 355,
        "end": 358
      },
      "body": null,
      "expression": false,
      "start": 310,
      "end": 359
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funD",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 381
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
              "start": 382,
              "end": 383
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 382,
            "end": 383
          }
        ],
        "start": 381,
        "end": 384
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 392
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 399
                  },
                  "asserts": false,
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
                        "start": 403,
                        "end": 404
                      },
                      "typeArguments": null,
                      "start": 403,
                      "end": 404
                    },
                    "start": 403,
                    "end": 404
                  },
                  "start": 397,
                  "end": 404
                },
                "start": 394,
                "end": 404
              },
              "start": 389,
              "end": 404
            },
            "start": 387,
            "end": 404
          },
          "start": 385,
          "end": 404
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 410,
              "end": 413
            },
            "start": 408,
            "end": 413
          },
          "start": 406,
          "end": 413
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 418
          },
          "asserts": false,
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
                "start": 422,
                "end": 423
              },
              "typeArguments": null,
              "start": 422,
              "end": 423
            },
            "start": 422,
            "end": 423
          },
          "start": 416,
          "end": 423
        },
        "start": 414,
        "end": 423
      },
      "body": null,
      "expression": false,
      "start": 360,
      "end": 424
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funE",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 446
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
              "start": 447,
              "end": 448
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 447,
            "end": 448
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 451
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 450,
            "end": 451
          }
        ],
        "start": 446,
        "end": 452
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 460
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 467
                  },
                  "asserts": false,
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
                        "start": 471,
                        "end": 472
                      },
                      "typeArguments": null,
                      "start": 471,
                      "end": 472
                    },
                    "start": 471,
                    "end": 472
                  },
                  "start": 465,
                  "end": 472
                },
                "start": 462,
                "end": 472
              },
              "start": 457,
              "end": 472
            },
            "start": 455,
            "end": 472
          },
          "start": 453,
          "end": 472
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
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
                "start": 478,
                "end": 479
              },
              "typeArguments": null,
              "start": 478,
              "end": 479
            },
            "start": 476,
            "end": 479
          },
          "start": 474,
          "end": 479
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
            "start": 482,
            "end": 483
          },
          "typeArguments": null,
          "start": 482,
          "end": 483
        },
        "start": 480,
        "end": 483
      },
      "body": null,
      "expression": false,
      "start": 425,
      "end": 484
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 494
                },
                "typeArguments": null,
                "start": 493,
                "end": 494
              },
              "start": 491,
              "end": 494
            },
            "start": 490,
            "end": 494
          },
          "init": null,
          "definite": false,
          "start": 490,
          "end": 494
        }
      ],
      "declare": false,
      "start": 486,
      "end": 495
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 507,
                "end": 514
              },
              "start": 505,
              "end": 514
            },
            "start": 500,
            "end": 514
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "funA",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 521
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isB",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 525
              }
            ],
            "optional": false,
            "start": 517,
            "end": 526
          },
          "definite": false,
          "start": 500,
          "end": 526
        }
      ],
      "declare": false,
      "start": 496,
      "end": 527
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "funB",
          "optional": false,
          "typeAnnotation": null,
          "start": 532,
          "end": 536
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "retC",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 541
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 544
          }
        ],
        "optional": false,
        "start": 532,
        "end": 545
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 554
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "propC",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 560
              },
              "optional": false,
              "computed": false,
              "start": 553,
              "end": 560
            },
            "directive": null,
            "start": 553,
            "end": 561
          }
        ],
        "start": 547,
        "end": 563
      },
      "alternate": null,
      "start": 528,
      "end": 563
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
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
                  "start": 575,
                  "end": 576
                },
                "typeArguments": null,
                "start": 575,
                "end": 576
              },
              "start": 573,
              "end": 576
            },
            "start": 568,
            "end": 576
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "funC",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 583
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isB",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 587
              }
            ],
            "optional": false,
            "start": 579,
            "end": 588
          },
          "definite": false,
          "start": 568,
          "end": 588
        }
      ],
      "declare": false,
      "start": 564,
      "end": 589
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "funD",
          "optional": false,
          "typeAnnotation": null,
          "start": 594,
          "end": 598
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isC",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 602
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 605
          }
        ],
        "optional": false,
        "start": 594,
        "end": 606
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 615
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "propC",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 621
              },
              "optional": false,
              "computed": false,
              "start": 614,
              "end": 621
            },
            "directive": null,
            "start": 614,
            "end": 622
          }
        ],
        "start": 608,
        "end": 624
      },
      "alternate": null,
      "start": 590,
      "end": 624
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test3",
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
                  "start": 636,
                  "end": 637
                },
                "typeArguments": null,
                "start": 636,
                "end": 637
              },
              "start": 634,
              "end": 637
            },
            "start": 629,
            "end": 637
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "funE",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 644
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isB",
                "optional": false,
                "typeAnnotation": null,
                "start": 645,
                "end": 648
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 650,
                "end": 651
              }
            ],
            "optional": false,
            "start": 640,
            "end": 652
          },
          "definite": false,
          "start": 629,
          "end": 652
        }
      ],
      "declare": false,
      "start": 625,
      "end": 653
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 653
}
```
