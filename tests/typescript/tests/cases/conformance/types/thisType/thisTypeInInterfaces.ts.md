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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
              "start": 19,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 22,
                "end": 26
              },
              "start": 20,
              "end": 26
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 27
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "computed": false,
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
                    "type": "TSThisType",
                    "start": 37,
                    "end": 41
                  },
                  "start": 35,
                  "end": 41
                },
                "start": 34,
                "end": 41
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 44,
                "end": 48
              },
              "start": 42,
              "end": 48
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 32,
            "end": 49
          }
        ],
        "start": 13,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 65
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "type": "TSThisType",
                    "start": 76,
                    "end": 80
                  },
                  "start": 74,
                  "end": 80
                },
                "start": 73,
                "end": 80
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 83,
                "end": 87
              },
              "start": 81,
              "end": 87
            },
            "start": 72,
            "end": 88
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "type": "TSThisType",
                    "start": 101,
                    "end": 105
                  },
                  "start": 99,
                  "end": 105
                },
                "start": 98,
                "end": 105
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 108,
                "end": 112
              },
              "start": 106,
              "end": 112
            },
            "start": 93,
            "end": 113
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 122,
                    "end": 128
                  },
                  "start": 120,
                  "end": 128
                },
                "start": 119,
                "end": 128
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 131,
                "end": 135
              },
              "start": 129,
              "end": 135
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 118,
            "end": 136
          }
        ],
        "start": 66,
        "end": 138
      },
      "declare": false,
      "start": 53,
      "end": 138
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 153
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
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          }
        ],
        "start": 153,
        "end": 156
      },
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
              "start": 163,
              "end": 164
            },
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
                  "start": 166,
                  "end": 167
                },
                "typeArguments": null,
                "start": 166,
                "end": 167
              },
              "start": 164,
              "end": 167
            },
            "accessibility": null,
            "static": false,
            "start": 163,
            "end": 168
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
              "start": 173,
              "end": 174
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 176,
                "end": 180
              },
              "start": 174,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 173,
            "end": 181
          }
        ],
        "start": 157,
        "end": 183
      },
      "declare": false,
      "start": 140,
      "end": 183
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 197
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
              "start": 204,
              "end": 205
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSThisType",
                  "start": 207,
                  "end": 211
                },
                "start": 207,
                "end": 213
              },
              "start": 205,
              "end": 213
            },
            "accessibility": null,
            "static": false,
            "start": 204,
            "end": 214
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
              "start": 219,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSThisType",
                    "start": 223,
                    "end": 227
                  },
                  {
                    "type": "TSThisType",
                    "start": 229,
                    "end": 233
                  }
                ],
                "start": 222,
                "end": 234
              },
              "start": 220,
              "end": 234
            },
            "accessibility": null,
            "static": false,
            "start": 219,
            "end": 235
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 241
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSThisType",
                    "start": 243,
                    "end": 247
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 254
                    },
                    "typeArguments": null,
                    "start": 250,
                    "end": 254
                  }
                ],
                "start": 243,
                "end": 254
              },
              "start": 241,
              "end": 254
            },
            "accessibility": null,
            "static": false,
            "start": 240,
            "end": 255
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSThisType",
                    "start": 263,
                    "end": 267
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 270,
                    "end": 274
                  }
                ],
                "start": 263,
                "end": 274
              },
              "start": 261,
              "end": 274
            },
            "accessibility": null,
            "static": false,
            "start": 260,
            "end": 275
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 281
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 286,
                "end": 290
              },
              "start": 281,
              "end": 293
            },
            "accessibility": null,
            "static": false,
            "start": 280,
            "end": 294
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
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
                        "type": "TSThisType",
                        "start": 306,
                        "end": 310
                      },
                      "start": 304,
                      "end": 310
                    },
                    "start": 303,
                    "end": 310
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 315,
                    "end": 319
                  },
                  "start": 312,
                  "end": 319
                },
                "start": 302,
                "end": 319
              },
              "start": 300,
              "end": 319
            },
            "accessibility": null,
            "static": false,
            "start": 299,
            "end": 320
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "type": "TSThisType",
                        "start": 336,
                        "end": 340
                      },
                      "start": 334,
                      "end": 340
                    },
                    "start": 333,
                    "end": 340
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 345,
                    "end": 349
                  },
                  "start": 342,
                  "end": 349
                },
                "start": 328,
                "end": 349
              },
              "start": 326,
              "end": 349
            },
            "accessibility": null,
            "static": false,
            "start": 325,
            "end": 350
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 361
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 362,
                      "end": 366
                    }
                  ],
                  "start": 361,
                  "end": 367
                },
                "start": 358,
                "end": 367
              },
              "start": 356,
              "end": 367
            },
            "accessibility": null,
            "static": false,
            "start": 355,
            "end": 368
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 374
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 379
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSThisType",
                          "start": 380,
                          "end": 384
                        },
                        {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSThisType",
                              "start": 394,
                              "end": 398
                            },
                            "start": 391,
                            "end": 398
                          },
                          "start": 388,
                          "end": 398
                        }
                      ],
                      "start": 380,
                      "end": 399
                    }
                  ],
                  "start": 379,
                  "end": 400
                },
                "start": 376,
                "end": 400
              },
              "start": 374,
              "end": 400
            },
            "accessibility": null,
            "static": false,
            "start": 373,
            "end": 401
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 406,
              "end": 407
            },
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
                        "start": 413,
                        "end": 416
                      },
                      "start": 411,
                      "end": 416
                    },
                    "start": 410,
                    "end": 416
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
                      "start": 421,
                      "end": 422
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 426,
                        "end": 430
                      },
                      "start": 426,
                      "end": 430
                    },
                    "start": 421,
                    "end": 430
                  },
                  "start": 418,
                  "end": 430
                },
                "start": 409,
                "end": 430
              },
              "start": 407,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 406,
            "end": 431
          }
        ],
        "start": 198,
        "end": 433
      },
      "declare": false,
      "start": 185,
      "end": 433
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 433
}
```
