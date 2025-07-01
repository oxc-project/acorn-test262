__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
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
              "start": 12,
              "end": 13
            },
            "constraint": {
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
                    "start": 24,
                    "end": 25
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    },
                    "start": 25,
                    "end": 33
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 24,
                  "end": 34
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
                    "start": 35,
                    "end": 36
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 35,
                  "end": 44
                }
              ],
              "start": 22,
              "end": 46
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 46
          }
        ],
        "start": 11,
        "end": 47
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 57
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
                      "start": 58,
                      "end": 59
                    },
                    "typeArguments": null,
                    "start": 58,
                    "end": 59
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 68
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 75,
                              "end": 76
                            },
                            "typeArguments": null,
                            "start": 75,
                            "end": 76
                          },
                          "start": 69,
                          "end": 76
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "'b'",
                            "start": 78,
                            "end": 81
                          },
                          "start": 78,
                          "end": 81
                        }
                      ],
                      "start": 68,
                      "end": 82
                    },
                    "start": 61,
                    "end": 82
                  }
                ],
                "start": 57,
                "end": 83
              },
              "start": 53,
              "end": 83
            },
            "start": 51,
            "end": 83
          },
          "start": 48,
          "end": 83
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 94
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 96
              },
              "optional": false,
              "computed": false,
              "start": 91,
              "end": 96
            },
            "directive": null,
            "start": 91,
            "end": 97
          }
        ],
        "start": 85,
        "end": 99
      },
      "expression": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 112
      },
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
              "start": 113,
              "end": 114
            },
            "constraint": {
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
                    "start": 125,
                    "end": 126
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
                    },
                    "start": 126,
                    "end": 134
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 125,
                  "end": 135
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
                    "start": 136,
                    "end": 137
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 139,
                      "end": 145
                    },
                    "start": 137,
                    "end": 145
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 136,
                  "end": 145
                }
              ],
              "start": 123,
              "end": 147
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 147
          }
        ],
        "start": 112,
        "end": 148
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 158
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
                      "start": 159,
                      "end": 160
                    },
                    "typeArguments": null,
                    "start": 159,
                    "end": 160
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 169
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 176,
                              "end": 177
                            },
                            "typeArguments": null,
                            "start": 176,
                            "end": 177
                          },
                          "start": 170,
                          "end": 177
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 179,
                            "end": 182
                          },
                          "start": 179,
                          "end": 182
                        }
                      ],
                      "start": 169,
                      "end": 183
                    },
                    "start": 162,
                    "end": 183
                  }
                ],
                "start": 158,
                "end": 184
              },
              "start": 154,
              "end": 184
            },
            "start": 152,
            "end": 184
          },
          "start": 149,
          "end": 184
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 195
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "optional": false,
              "computed": false,
              "start": 192,
              "end": 197
            },
            "directive": null,
            "start": 192,
            "end": 198
          }
        ],
        "start": 186,
        "end": 200
      },
      "expression": false,
      "start": 101,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
      },
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
              "start": 214,
              "end": 215
            },
            "constraint": {
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
                    "start": 226,
                    "end": 227
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 229,
                      "end": 235
                    },
                    "start": 227,
                    "end": 235
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 226,
                  "end": 236
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
                    "start": 237,
                    "end": 238
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 240,
                      "end": 246
                    },
                    "start": 238,
                    "end": 246
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 237,
                  "end": 246
                }
              ],
              "start": 224,
              "end": 248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 248
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 251
            },
            "constraint": {
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
                    "start": 262,
                    "end": 263
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 265,
                      "end": 271
                    },
                    "start": 263,
                    "end": 271
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 262,
                  "end": 272
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
                    "start": 273,
                    "end": 274
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
                    },
                    "start": 274,
                    "end": 282
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 273,
                  "end": 282
                }
              ],
              "start": 260,
              "end": 284
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 250,
            "end": 284
          }
        ],
        "start": 213,
        "end": 285
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 295
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 296,
                          "end": 297
                        },
                        "typeArguments": null,
                        "start": 296,
                        "end": 297
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 301
                        },
                        "typeArguments": null,
                        "start": 300,
                        "end": 301
                      }
                    ],
                    "start": 296,
                    "end": 301
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
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
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 314,
                            "end": 315
                          },
                          "typeArguments": null,
                          "start": 314,
                          "end": 315
                        }
                      ],
                      "start": 310,
                      "end": 315
                    },
                    "start": 303,
                    "end": 316
                  }
                ],
                "start": 295,
                "end": 317
              },
              "start": 291,
              "end": 317
            },
            "start": 289,
            "end": 317
          },
          "start": 286,
          "end": 317
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 328
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 330
              },
              "optional": false,
              "computed": false,
              "start": 325,
              "end": 330
            },
            "directive": null,
            "start": 325,
            "end": 331
          }
        ],
        "start": 319,
        "end": 333
      },
      "expression": false,
      "start": 202,
      "end": 333
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 346
      },
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
              "start": 347,
              "end": 348
            },
            "constraint": {
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
                    "start": 359,
                    "end": 360
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 362,
                      "end": 368
                    },
                    "start": 360,
                    "end": 368
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 359,
                  "end": 369
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
                  "end": 379
                }
              ],
              "start": 357,
              "end": 381
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 381
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "constraint": {
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
                    "start": 395,
                    "end": 396
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 398,
                      "end": 404
                    },
                    "start": 396,
                    "end": 404
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 395,
                  "end": 405
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
                    "start": 406,
                    "end": 407
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 409,
                      "end": 415
                    },
                    "start": 407,
                    "end": 415
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 406,
                  "end": 415
                }
              ],
              "start": 393,
              "end": 417
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 383,
            "end": 417
          }
        ],
        "start": 346,
        "end": 418
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 428
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 429,
                          "end": 430
                        },
                        "typeArguments": null,
                        "start": 429,
                        "end": 430
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 433,
                          "end": 434
                        },
                        "typeArguments": null,
                        "start": 433,
                        "end": 434
                      }
                    ],
                    "start": 429,
                    "end": 434
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 443,
                            "end": 444
                          },
                          "typeArguments": null,
                          "start": 443,
                          "end": 444
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 447,
                            "end": 448
                          },
                          "typeArguments": null,
                          "start": 447,
                          "end": 448
                        }
                      ],
                      "start": 443,
                      "end": 448
                    },
                    "start": 436,
                    "end": 449
                  }
                ],
                "start": 428,
                "end": 450
              },
              "start": 424,
              "end": 450
            },
            "start": 422,
            "end": 450
          },
          "start": 419,
          "end": 450
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 461
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 463
              },
              "optional": false,
              "computed": false,
              "start": 458,
              "end": 463
            },
            "directive": null,
            "start": 458,
            "end": 464
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 472
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 474
              },
              "optional": false,
              "computed": false,
              "start": 469,
              "end": 474
            },
            "directive": null,
            "start": 469,
            "end": 475
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 483
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 485
              },
              "optional": false,
              "computed": false,
              "start": 480,
              "end": 485
            },
            "directive": null,
            "start": 480,
            "end": 486
          }
        ],
        "start": 452,
        "end": 488
      },
      "expression": false,
      "start": 335,
      "end": 488
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 499,
        "end": 501
      },
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
              "start": 502,
              "end": 503
            },
            "constraint": {
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
                    "start": 514,
                    "end": 515
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 517,
                      "end": 523
                    },
                    "start": 515,
                    "end": 523
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 514,
                  "end": 524
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
                    "start": 525,
                    "end": 526
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 528,
                      "end": 534
                    },
                    "start": 526,
                    "end": 534
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 525,
                  "end": 534
                }
              ],
              "start": 512,
              "end": 536
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 502,
            "end": 536
          }
        ],
        "start": 501,
        "end": 537
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 549
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 550,
                          "end": 557
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 564,
                                  "end": 565
                                },
                                "typeArguments": null,
                                "start": 564,
                                "end": 565
                              },
                              "start": 558,
                              "end": 565
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "b",
                                "raw": "'b'",
                                "start": 567,
                                "end": 570
                              },
                              "start": 567,
                              "end": 570
                            }
                          ],
                          "start": 557,
                          "end": 571
                        },
                        "start": 550,
                        "end": 571
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "'c'",
                          "start": 574,
                          "end": 577
                        },
                        "start": 574,
                        "end": 577
                      }
                    ],
                    "start": 550,
                    "end": 577
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 579,
                    "end": 585
                  }
                ],
                "start": 549,
                "end": 586
              },
              "start": 543,
              "end": 586
            },
            "start": 541,
            "end": 586
          },
          "start": 538,
          "end": 586
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 597
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 599
              },
              "optional": false,
              "computed": false,
              "start": 594,
              "end": 599
            },
            "directive": null,
            "start": 594,
            "end": 600
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 610
              },
              "optional": false,
              "computed": false,
              "start": 605,
              "end": 610
            },
            "directive": null,
            "start": 605,
            "end": 611
          }
        ],
        "start": 588,
        "end": 613
      },
      "expression": false,
      "start": 490,
      "end": 613
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TargetProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 653
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 665
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 667,
                "end": 673
              },
              "start": 665,
              "end": 673
            },
            "accessibility": null,
            "static": false,
            "start": 662,
            "end": 674
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 679,
              "end": 682
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 684,
                "end": 690
              },
              "start": 682,
              "end": 690
            },
            "accessibility": null,
            "static": false,
            "start": 679,
            "end": 690
          }
        ],
        "start": 656,
        "end": 692
      },
      "declare": false,
      "start": 637,
      "end": 693
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
            "name": "modifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 709
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 713,
                    "end": 714
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TargetProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 723,
                      "end": 734
                    },
                    "typeArguments": null,
                    "start": 723,
                    "end": 734
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 713,
                  "end": 734
                }
              ],
              "start": 712,
              "end": 735
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "targetProps",
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
                      "start": 749,
                      "end": 750
                    },
                    "typeArguments": null,
                    "start": 749,
                    "end": 750
                  },
                  "start": 747,
                  "end": 750
                },
                "start": 736,
                "end": 750
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 766,
                              "end": 769
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 766,
                              "end": 769
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 766,
                            "end": 769
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rest",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 774,
                              "end": 778
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 771,
                            "end": 778
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 765,
                        "end": 779
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "targetProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 782,
                        "end": 793
                      },
                      "definite": false,
                      "start": 765,
                      "end": 793
                    }
                  ],
                  "declare": false,
                  "start": 761,
                  "end": 794
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 799,
                      "end": 803
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 807
                    },
                    "optional": false,
                    "computed": false,
                    "start": 799,
                    "end": 807
                  },
                  "directive": null,
                  "start": 799,
                  "end": 808
                }
              ],
              "start": 755,
              "end": 810
            },
            "id": null,
            "generator": false,
            "start": 712,
            "end": 810
          },
          "definite": false,
          "start": 701,
          "end": 810
        }
      ],
      "declare": false,
      "start": 695,
      "end": 811
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 811
}
```
