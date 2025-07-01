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
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 73
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
              "start": 78,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 81,
                  "end": 84
                },
                "start": 81,
                "end": 84
              },
              "start": 79,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 85
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
              "start": 88,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 91,
                  "end": 94
                },
                "start": 91,
                "end": 94
              },
              "start": 89,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 95
          }
        ],
        "start": 74,
        "end": 97
      },
      "declare": false,
      "start": 56,
      "end": 97
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
            "name": "f",
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
                        "name": "T0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 118
                      },
                      "constraint": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 127,
                              "end": 130
                            },
                            "start": 127,
                            "end": 130
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 133,
                              "end": 136
                            },
                            "start": 133,
                            "end": 136
                          }
                        ],
                        "start": 127,
                        "end": 136
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 116,
                      "end": 136
                    }
                  ],
                  "start": 115,
                  "end": 137
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
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 141,
                            "end": 144
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 146,
                            "end": 148
                          }
                        ],
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T0",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 146
                            },
                            "typeArguments": null,
                            "start": 144,
                            "end": 146
                          }
                        ],
                        "start": 141,
                        "end": 148
                      },
                      "start": 139,
                      "end": 148
                    },
                    "start": 138,
                    "end": 148
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 160
                      },
                      "typeArguments": null,
                      "start": 153,
                      "end": 160
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 163
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 163
                    },
                    "start": 153,
                    "end": 164
                  },
                  "start": 150,
                  "end": 164
                },
                "start": 115,
                "end": 164
              },
              "start": 113,
              "end": 164
            },
            "start": 112,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 164
        }
      ],
      "declare": true,
      "start": 98,
      "end": 165
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 173
      },
      "typeParameters": null,
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
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 179
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 188,
                      "end": 191
                    },
                    "start": 188,
                    "end": 191
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 194,
                      "end": 197
                    },
                    "start": 194,
                    "end": 197
                  }
                ],
                "start": 188,
                "end": 197
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 177,
              "end": 197
            }
          ],
          "start": 176,
          "end": 198
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
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 202,
                    "end": 205
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 207,
                    "end": 209
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 207
                    },
                    "typeArguments": null,
                    "start": 205,
                    "end": 207
                  }
                ],
                "start": 202,
                "end": 209
              },
              "start": 200,
              "end": 209
            },
            "start": 199,
            "end": 209
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 221
              },
              "typeArguments": null,
              "start": 214,
              "end": 221
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 224
              },
              "typeArguments": null,
              "start": 222,
              "end": 224
            },
            "start": 214,
            "end": 225
          },
          "start": 211,
          "end": 225
        },
        "start": 176,
        "end": 225
      },
      "declare": false,
      "start": 166,
      "end": 226
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 239
                },
                "typeArguments": null,
                "start": 237,
                "end": 239
              },
              "start": 235,
              "end": 239
            },
            "start": 233,
            "end": 239
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 243
          },
          "definite": false,
          "start": 233,
          "end": 243
        }
      ],
      "declare": false,
      "start": 227,
      "end": 244
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 253
      },
      "typeParameters": null,
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
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 259
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 268,
                      "end": 271
                    },
                    "start": 268,
                    "end": 271
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 274,
                      "end": 277
                    },
                    "start": 274,
                    "end": 277
                  }
                ],
                "start": 268,
                "end": 277
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 257,
              "end": 277
            }
          ],
          "start": 256,
          "end": 278
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
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 282,
                    "end": 285
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 287,
                    "end": 289
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 287
                    },
                    "typeArguments": null,
                    "start": 285,
                    "end": 287
                  }
                ],
                "start": 282,
                "end": 289
              },
              "start": 280,
              "end": 289
            },
            "start": 279,
            "end": 289
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 301
              },
              "typeArguments": null,
              "start": 294,
              "end": 301
            },
            "indexType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 302,
                  "end": 305
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 307,
                  "end": 309
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 305,
                    "end": 307
                  },
                  "typeArguments": null,
                  "start": 305,
                  "end": 307
                }
              ],
              "start": 302,
              "end": 309
            },
            "start": 294,
            "end": 310
          },
          "start": 291,
          "end": 310
        },
        "start": 256,
        "end": 310
      },
      "declare": false,
      "start": 246,
      "end": 310
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 323
                },
                "typeArguments": null,
                "start": 321,
                "end": 323
              },
              "start": 319,
              "end": 323
            },
            "start": 317,
            "end": 323
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 327
          },
          "definite": false,
          "start": 317,
          "end": 327
        }
      ],
      "declare": false,
      "start": 311,
      "end": 327
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 340
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
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 343
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 352,
                    "end": 355
                  },
                  "start": 352,
                  "end": 355
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 358,
                    "end": 361
                  },
                  "start": 358,
                  "end": 361
                }
              ],
              "start": 352,
              "end": 361
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 341,
            "end": 361
          }
        ],
        "start": 340,
        "end": 362
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
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 368
              },
              "typeArguments": null,
              "start": 366,
              "end": 368
            },
            "start": 364,
            "end": 368
          },
          "start": 363,
          "end": 368
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
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
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 389,
                          "end": 392
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 394,
                          "end": 396
                        }
                      ],
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 392,
                            "end": 394
                          },
                          "typeArguments": null,
                          "start": 392,
                          "end": 394
                        }
                      ],
                      "start": 389,
                      "end": 396
                    },
                    "start": 387,
                    "end": 396
                  },
                  "start": 382,
                  "end": 396
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 400
                },
                "definite": false,
                "start": 382,
                "end": 400
              }
            ],
            "declare": false,
            "start": 376,
            "end": 400
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
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 424
                      },
                      "typeArguments": null,
                      "start": 422,
                      "end": 424
                    },
                    "start": 420,
                    "end": 424
                  },
                  "start": 415,
                  "end": 424
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 427,
                    "end": 429
                  },
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 433,
                        "end": 436
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 438,
                        "end": 440
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 436,
                          "end": 438
                        },
                        "typeArguments": null,
                        "start": 436,
                        "end": 438
                      }
                    ],
                    "start": 433,
                    "end": 440
                  },
                  "start": 427,
                  "end": 440
                },
                "definite": false,
                "start": 415,
                "end": 440
              }
            ],
            "declare": false,
            "start": 409,
            "end": 441
          }
        ],
        "start": 370,
        "end": 447
      },
      "expression": false,
      "start": 329,
      "end": 447
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 447
}
```
