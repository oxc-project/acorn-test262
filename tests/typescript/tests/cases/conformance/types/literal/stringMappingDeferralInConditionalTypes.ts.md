__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 65
          }
        ],
        "start": 63,
        "end": 66
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lowercase",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 78
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 79,
                      "end": 80
                    },
                    "typeArguments": null,
                    "start": 79,
                    "end": 80
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 83,
                    "end": 89
                  }
                ],
                "start": 79,
                "end": 89
              }
            ],
            "start": 78,
            "end": 90
          },
          "start": 69,
          "end": 90
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 99,
            "end": 104
          },
          "start": 99,
          "end": 104
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 107,
            "end": 108
          },
          "start": 107,
          "end": 108
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 111,
            "end": 112
          },
          "start": 111,
          "end": 112
        },
        "start": 69,
        "end": 112
      },
      "declare": false,
      "start": 57,
      "end": 113
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
                  "start": 122,
                  "end": 123
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 124,
                        "end": 129
                      },
                      "start": 124,
                      "end": 129
                    }
                  ],
                  "start": 123,
                  "end": 130
                },
                "start": 122,
                "end": 130
              },
              "start": 120,
              "end": 130
            },
            "start": 118,
            "end": 130
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 133,
            "end": 134
          },
          "definite": false,
          "start": 118,
          "end": 134
        }
      ],
      "declare": false,
      "start": 114,
      "end": 135
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 149
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 151
          }
        ],
        "start": 149,
        "end": 152
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Lowercase",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 164
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "typeArguments": null,
                    "start": 165,
                    "end": 166
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  }
                ],
                "start": 165,
                "end": 175
              }
            ],
            "start": 164,
            "end": 176
          },
          "start": 155,
          "end": 176
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "f",
                "cooked": "f"
              },
              "tail": false,
              "start": 185,
              "end": 189
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 195,
              "end": 197
            }
          ],
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            }
          ],
          "start": 185,
          "end": 197
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 200,
            "end": 201
          },
          "start": 200,
          "end": 201
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 204,
            "end": 205
          },
          "start": 204,
          "end": 205
        },
        "start": 155,
        "end": 205
      },
      "declare": false,
      "start": 143,
      "end": 206
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
            "name": "x2",
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
                  "start": 215,
                  "end": 216
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 217,
                        "end": 222
                      },
                      "start": 217,
                      "end": 222
                    }
                  ],
                  "start": 216,
                  "end": 223
                },
                "start": 215,
                "end": 223
              },
              "start": 213,
              "end": 223
            },
            "start": 211,
            "end": 223
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 226,
            "end": 227
          },
          "definite": false,
          "start": 211,
          "end": 227
        }
      ],
      "declare": false,
      "start": 207,
      "end": 228
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 242
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 244
          }
        ],
        "start": 242,
        "end": 245
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 258
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 268
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
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 269,
                            "end": 270
                          },
                          "typeArguments": null,
                          "start": 269,
                          "end": 270
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 273,
                          "end": 279
                        }
                      ],
                      "start": 269,
                      "end": 279
                    }
                  ],
                  "start": 268,
                  "end": 280
                },
                "start": 259,
                "end": 280
              }
            ],
            "start": 258,
            "end": 281
          },
          "start": 248,
          "end": 281
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Foo",
            "raw": "\"Foo\"",
            "start": 290,
            "end": 295
          },
          "start": 290,
          "end": 295
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 298,
            "end": 299
          },
          "start": 298,
          "end": 299
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 302,
            "end": 303
          },
          "start": 302,
          "end": 303
        },
        "start": 248,
        "end": 303
      },
      "declare": false,
      "start": 236,
      "end": 304
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
            "name": "x3",
            "optional": false,
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
                  "start": 313,
                  "end": 314
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 315,
                        "end": 320
                      },
                      "start": 315,
                      "end": 320
                    }
                  ],
                  "start": 314,
                  "end": 321
                },
                "start": 313,
                "end": 321
              },
              "start": 311,
              "end": 321
            },
            "start": 309,
            "end": 321
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 324,
            "end": 325
          },
          "definite": false,
          "start": 309,
          "end": 325
        }
      ],
      "declare": false,
      "start": 305,
      "end": 326
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 340
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 351,
              "end": 357
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 341,
            "end": 357
          }
        ],
        "start": 340,
        "end": 358
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 371
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 381
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 383
                      },
                      "typeArguments": null,
                      "start": 382,
                      "end": 383
                    }
                  ],
                  "start": 381,
                  "end": 384
                },
                "start": 372,
                "end": 384
              }
            ],
            "start": 371,
            "end": 385
          },
          "start": 361,
          "end": 385
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Foo",
            "raw": "\"Foo\"",
            "start": 394,
            "end": 399
          },
          "start": 394,
          "end": 399
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 402,
            "end": 403
          },
          "start": 402,
          "end": 403
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 406,
            "end": 407
          },
          "start": 406,
          "end": 407
        },
        "start": 361,
        "end": 407
      },
      "declare": false,
      "start": 334,
      "end": 408
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 418
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 419,
                        "end": 424
                      },
                      "start": 419,
                      "end": 424
                    }
                  ],
                  "start": 418,
                  "end": 425
                },
                "start": 417,
                "end": 425
              },
              "start": 415,
              "end": 425
            },
            "start": 413,
            "end": 425
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 428,
            "end": 429
          },
          "definite": false,
          "start": 413,
          "end": 429
        }
      ],
      "declare": false,
      "start": 409,
      "end": 430
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 443,
        "end": 444
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 445,
            "end": 446
          }
        ],
        "start": 444,
        "end": 447
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 459
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "f",
                        "cooked": "f"
                      },
                      "tail": false,
                      "start": 460,
                      "end": 464
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 474,
                      "end": 476
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 464,
                            "end": 465
                          },
                          "typeArguments": null,
                          "start": 464,
                          "end": 465
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 468,
                          "end": 474
                        }
                      ],
                      "start": 464,
                      "end": 474
                    }
                  ],
                  "start": 460,
                  "end": 476
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 479,
                      "end": 482
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "f",
                        "cooked": "f"
                      },
                      "tail": true,
                      "start": 492,
                      "end": 495
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 482,
                            "end": 483
                          },
                          "typeArguments": null,
                          "start": 482,
                          "end": 483
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 486,
                          "end": 492
                        }
                      ],
                      "start": 482,
                      "end": 492
                    }
                  ],
                  "start": 479,
                  "end": 495
                }
              ],
              "start": 460,
              "end": 495
            }
          ],
          "start": 459,
          "end": 496
        },
        "start": 450,
        "end": 496
      },
      "declare": false,
      "start": 438,
      "end": 497
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 504
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 509,
                  "end": 511
                },
                "start": 509,
                "end": 511
              }
            ],
            "start": 508,
            "end": 512
          },
          "start": 507,
          "end": 512
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "f",
            "raw": "\"f\"",
            "start": 521,
            "end": 524
          },
          "start": 521,
          "end": 524
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 527,
            "end": 528
          },
          "start": 527,
          "end": 528
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 531,
            "end": 532
          },
          "start": 531,
          "end": 532
        },
        "start": 507,
        "end": 532
      },
      "declare": false,
      "start": 498,
      "end": 533
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 545
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 547
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 546,
            "end": 547
          }
        ],
        "start": 545,
        "end": 548
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 552
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 554
                },
                "typeArguments": null,
                "start": 553,
                "end": 554
              }
            ],
            "start": 552,
            "end": 555
          },
          "start": 551,
          "end": 555
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "f",
            "raw": "\"f\"",
            "start": 564,
            "end": 567
          },
          "start": 564,
          "end": 567
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 570,
            "end": 571
          },
          "start": 570,
          "end": 571
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 574,
            "end": 575
          },
          "start": 574,
          "end": 575
        },
        "start": 551,
        "end": 575
      },
      "declare": false,
      "start": 539,
      "end": 576
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 587
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 588,
                        "end": 590
                      },
                      "start": 588,
                      "end": 590
                    }
                  ],
                  "start": 587,
                  "end": 591
                },
                "start": 586,
                "end": 591
              },
              "start": 584,
              "end": 591
            },
            "start": 582,
            "end": 591
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 594,
            "end": 595
          },
          "definite": false,
          "start": 582,
          "end": 595
        }
      ],
      "declare": false,
      "start": 578,
      "end": 596
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 602
}
```
