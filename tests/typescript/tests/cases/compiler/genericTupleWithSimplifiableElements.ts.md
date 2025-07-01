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
        "name": "SS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 30
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 33,
        "end": 39
      },
      "declare": false,
      "start": 22,
      "end": 40
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 50
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "AAA",
                        "raw": "\"AAA\"",
                        "start": 52,
                        "end": 57
                      },
                      "start": 52,
                      "end": 57
                    },
                    "optional": false,
                    "start": 49,
                    "end": 57
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 66
                      },
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSMappedType",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 71,
                            "end": 72
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SS1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 76,
                              "end": 79
                            },
                            "typeArguments": null,
                            "start": 76,
                            "end": 79
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 83,
                                  "end": 84
                                },
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 86,
                                  "end": 92
                                },
                                "optional": false,
                                "start": 83,
                                "end": 92
                              }
                            ],
                            "start": 82,
                            "end": 93
                          },
                          "optional": false,
                          "readonly": null,
                          "start": 68,
                          "end": 96
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SS1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 100
                          },
                          "typeArguments": null,
                          "start": 97,
                          "end": 100
                        },
                        "start": 68,
                        "end": 101
                      },
                      "optional": false,
                      "start": 62,
                      "end": 101
                    },
                    "start": 59,
                    "end": 101
                  }
                ],
                "start": 48,
                "end": 102
              },
              "start": 46,
              "end": 102
            },
            "start": 45,
            "end": 102
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "AAA",
                "raw": "\"AAA\"",
                "start": 106,
                "end": 111
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 113,
                "end": 114
              }
            ],
            "start": 105,
            "end": 115
          },
          "definite": false,
          "start": 45,
          "end": 115
        }
      ],
      "declare": false,
      "start": 41,
      "end": 116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SS2",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 129,
              "end": 132
            },
            "start": 129,
            "end": 132
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 135,
              "end": 138
            },
            "start": 135,
            "end": 138
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 141,
              "end": 144
            },
            "start": 141,
            "end": 144
          }
        ],
        "start": 129,
        "end": 144
      },
      "declare": false,
      "start": 118,
      "end": 145
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 155
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "AAA",
                        "raw": "\"AAA\"",
                        "start": 157,
                        "end": 162
                      },
                      "start": 157,
                      "end": 162
                    },
                    "optional": false,
                    "start": 154,
                    "end": 162
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSNamedTupleMember",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 171
                      },
                      "elementType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSMappedType",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 176,
                            "end": 177
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SS2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 181,
                              "end": 184
                            },
                            "typeArguments": null,
                            "start": 181,
                            "end": 184
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNamedTupleMember",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 188,
                                  "end": 189
                                },
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 191,
                                  "end": 197
                                },
                                "optional": false,
                                "start": 188,
                                "end": 197
                              }
                            ],
                            "start": 187,
                            "end": 198
                          },
                          "optional": false,
                          "readonly": null,
                          "start": 173,
                          "end": 201
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SS2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 205
                          },
                          "typeArguments": null,
                          "start": 202,
                          "end": 205
                        },
                        "start": 173,
                        "end": 206
                      },
                      "optional": false,
                      "start": 167,
                      "end": 206
                    },
                    "start": 164,
                    "end": 206
                  }
                ],
                "start": 153,
                "end": 207
              },
              "start": 151,
              "end": 207
            },
            "start": 150,
            "end": 207
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "AAA",
                "raw": "\"AAA\"",
                "start": 211,
                "end": 216
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 218,
                "end": 219
              }
            ],
            "start": 210,
            "end": 220
          },
          "definite": false,
          "start": 150,
          "end": 220
        }
      ],
      "declare": false,
      "start": 146,
      "end": 221
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 230
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SS",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 233
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 242,
              "end": 248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 231,
            "end": 248
          }
        ],
        "start": 230,
        "end": 249
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 256
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "w",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSRestType",
                                  "typeAnnotation": {
                                    "type": "TSNamedTupleMember",
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 280,
                                      "end": 284
                                    },
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 289,
                                          "end": 290
                                        },
                                        "constraint": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "SS",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 294,
                                            "end": 296
                                          },
                                          "typeArguments": null,
                                          "start": 294,
                                          "end": 296
                                        },
                                        "nameType": null,
                                        "typeAnnotation": {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSNamedTupleMember",
                                              "label": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 300,
                                                "end": 301
                                              },
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "start": 303,
                                                "end": 309
                                              },
                                              "optional": false,
                                              "start": 300,
                                              "end": 309
                                            }
                                          ],
                                          "start": 299,
                                          "end": 310
                                        },
                                        "optional": false,
                                        "readonly": null,
                                        "start": 286,
                                        "end": 313
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "SS",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 314,
                                          "end": 316
                                        },
                                        "typeArguments": null,
                                        "start": 314,
                                        "end": 316
                                      },
                                      "start": 286,
                                      "end": 317
                                    },
                                    "optional": false,
                                    "start": 280,
                                    "end": 317
                                  },
                                  "start": 277,
                                  "end": 317
                                }
                              ],
                              "start": 276,
                              "end": 318
                            },
                            "start": 274,
                            "end": 318
                          },
                          "start": 273,
                          "end": 318
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 322,
                              "end": 323
                            }
                          ],
                          "start": 321,
                          "end": 324
                        },
                        "definite": false,
                        "start": 273,
                        "end": 324
                      }
                    ],
                    "declare": false,
                    "start": 269,
                    "end": 325
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSNamedTupleMember",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 343,
                                    "end": 344
                                  },
                                  "elementType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "AAA",
                                      "raw": "\"AAA\"",
                                      "start": 346,
                                      "end": 351
                                    },
                                    "start": 346,
                                    "end": 351
                                  },
                                  "optional": false,
                                  "start": 343,
                                  "end": 351
                                },
                                {
                                  "type": "TSRestType",
                                  "typeAnnotation": {
                                    "type": "TSNamedTupleMember",
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 356,
                                      "end": 360
                                    },
                                    "elementType": {
                                      "type": "TSIndexedAccessType",
                                      "objectType": {
                                        "type": "TSMappedType",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "S",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 365,
                                          "end": 366
                                        },
                                        "constraint": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "SS",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 370,
                                            "end": 372
                                          },
                                          "typeArguments": null,
                                          "start": 370,
                                          "end": 372
                                        },
                                        "nameType": null,
                                        "typeAnnotation": {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSNamedTupleMember",
                                              "label": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 376,
                                                "end": 377
                                              },
                                              "elementType": {
                                                "type": "TSNumberKeyword",
                                                "start": 379,
                                                "end": 385
                                              },
                                              "optional": false,
                                              "start": 376,
                                              "end": 385
                                            }
                                          ],
                                          "start": 375,
                                          "end": 386
                                        },
                                        "optional": false,
                                        "readonly": null,
                                        "start": 362,
                                        "end": 389
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "SS",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 390,
                                          "end": 392
                                        },
                                        "typeArguments": null,
                                        "start": 390,
                                        "end": 392
                                      },
                                      "start": 362,
                                      "end": 393
                                    },
                                    "optional": false,
                                    "start": 356,
                                    "end": 393
                                  },
                                  "start": 353,
                                  "end": 393
                                }
                              ],
                              "start": 342,
                              "end": 394
                            },
                            "start": 340,
                            "end": 394
                          },
                          "start": 339,
                          "end": 394
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "AAA",
                              "raw": "\"AAA\"",
                              "start": 398,
                              "end": 403
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 405,
                              "end": 406
                            }
                          ],
                          "start": 397,
                          "end": 407
                        },
                        "definite": false,
                        "start": 339,
                        "end": 407
                      }
                    ],
                    "declare": false,
                    "start": 335,
                    "end": 408
                  }
                ],
                "start": 259,
                "end": 414
              },
              "expression": false,
              "start": 256,
              "end": 414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 255,
            "end": 414
          }
        ],
        "start": 249,
        "end": 416
      },
      "abstract": false,
      "declare": false,
      "start": 223,
      "end": 416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 416
}
```
