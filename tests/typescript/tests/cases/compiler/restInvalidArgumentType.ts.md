__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 11
            },
            "initializer": null,
            "computed": false,
            "start": 9,
            "end": 11
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 15
          }
        ],
        "start": 7,
        "end": 17
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "EmptyStatement",
      "start": 17,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
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
              "start": 31,
              "end": 32
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
                    "start": 43,
                    "end": 44
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 46,
                      "end": 52
                    },
                    "start": 44,
                    "end": 52
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 43,
                  "end": 52
                }
              ],
              "start": 41,
              "end": 54
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 31,
            "end": 54
          }
        ],
        "start": 30,
        "end": 55
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "typeArguments": null,
              "start": 60,
              "end": 61
            },
            "start": 58,
            "end": 61
          },
          "start": 56,
          "end": 61
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "typeArguments": null,
                "start": 67,
                "end": 68
              },
              "start": 67,
              "end": 70
            },
            "start": 65,
            "end": 70
          },
          "start": 63,
          "end": 70
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 86
                      },
                      "typeArguments": null,
                      "start": 85,
                      "end": 86
                    },
                    "start": 83,
                    "end": 86
                  },
                  "start": 82,
                  "end": 86
                },
                "init": null,
                "definite": false,
                "start": 82,
                "end": 86
              }
            ],
            "declare": false,
            "start": 78,
            "end": 87
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 100,
                          "end": 101
                        },
                        "typeArguments": null,
                        "start": 100,
                        "end": 101
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 102,
                          "end": 105
                        },
                        "start": 102,
                        "end": 105
                      },
                      "start": 100,
                      "end": 106
                    },
                    "start": 98,
                    "end": 106
                  },
                  "start": 97,
                  "end": 106
                },
                "init": null,
                "definite": false,
                "start": 97,
                "end": 106
              }
            ],
            "declare": false,
            "start": 93,
            "end": 107
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
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                          "start": 125,
                          "end": 126
                        },
                        "typeArguments": null,
                        "start": 125,
                        "end": 126
                      },
                      "start": 119,
                      "end": 126
                    },
                    "start": 117,
                    "end": 126
                  },
                  "start": 116,
                  "end": 126
                },
                "init": null,
                "definite": false,
                "start": 116,
                "end": 126
              }
            ],
            "declare": false,
            "start": 112,
            "end": 127
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
                  "name": "mapped_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 155,
                        "end": 156
                      },
                      "constraint": {
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
                            "start": 166,
                            "end": 167
                          },
                          "typeArguments": null,
                          "start": 166,
                          "end": 167
                        },
                        "start": 160,
                        "end": 167
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 170,
                            "end": 171
                          },
                          "typeArguments": null,
                          "start": 170,
                          "end": 171
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 172,
                            "end": 173
                          },
                          "typeArguments": null,
                          "start": 172,
                          "end": 173
                        },
                        "start": 170,
                        "end": 174
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 153,
                      "end": 175
                    },
                    "start": 151,
                    "end": 175
                  },
                  "start": 137,
                  "end": 175
                },
                "init": null,
                "definite": false,
                "start": 137,
                "end": 175
              }
            ],
            "declare": false,
            "start": 133,
            "end": 176
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
                  "name": "mapped",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 196
                      },
                      "constraint": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 200,
                          "end": 203
                        },
                        "start": 200,
                        "end": 203
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 206,
                            "end": 207
                          },
                          "typeArguments": null,
                          "start": 206,
                          "end": 207
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 209
                          },
                          "typeArguments": null,
                          "start": 208,
                          "end": 209
                        },
                        "start": 206,
                        "end": 210
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 193,
                      "end": 211
                    },
                    "start": 191,
                    "end": 211
                  },
                  "start": 185,
                  "end": 211
                },
                "init": null,
                "definite": false,
                "start": 185,
                "end": 211
              }
            ],
            "declare": false,
            "start": 181,
            "end": 212
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
                  "name": "union_generic",
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 237,
                            "end": 238
                          },
                          "typeArguments": null,
                          "start": 237,
                          "end": 238
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
                                "start": 243,
                                "end": 244
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 246,
                                  "end": 252
                                },
                                "start": 244,
                                "end": 252
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 243,
                              "end": 252
                            }
                          ],
                          "start": 241,
                          "end": 254
                        }
                      ],
                      "start": 237,
                      "end": 254
                    },
                    "start": 235,
                    "end": 254
                  },
                  "start": 222,
                  "end": 254
                },
                "init": null,
                "definite": false,
                "start": 222,
                "end": 254
              }
            ],
            "declare": false,
            "start": 218,
            "end": 255
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
                  "name": "union_primitive",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
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
                                "start": 283,
                                "end": 284
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 286,
                                  "end": 292
                                },
                                "start": 284,
                                "end": 292
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 283,
                              "end": 292
                            }
                          ],
                          "start": 281,
                          "end": 294
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 297,
                          "end": 303
                        }
                      ],
                      "start": 281,
                      "end": 303
                    },
                    "start": 279,
                    "end": 303
                  },
                  "start": 264,
                  "end": 303
                },
                "init": null,
                "definite": false,
                "start": 264,
                "end": 303
              }
            ],
            "declare": false,
            "start": 260,
            "end": 304
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
                  "name": "intersection_generic",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                            "start": 335,
                            "end": 336
                          },
                          "typeArguments": null,
                          "start": 335,
                          "end": 336
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
                                "start": 341,
                                "end": 342
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 344,
                                  "end": 350
                                },
                                "start": 342,
                                "end": 350
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 341,
                              "end": 350
                            }
                          ],
                          "start": 339,
                          "end": 352
                        }
                      ],
                      "start": 335,
                      "end": 352
                    },
                    "start": 333,
                    "end": 352
                  },
                  "start": 313,
                  "end": 352
                },
                "init": null,
                "definite": false,
                "start": 313,
                "end": 352
              }
            ],
            "declare": false,
            "start": 309,
            "end": 353
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
                  "name": "intersection_primitive",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
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
                                "start": 388,
                                "end": 389
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 391,
                                  "end": 397
                                },
                                "start": 389,
                                "end": 397
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 388,
                              "end": 397
                            }
                          ],
                          "start": 386,
                          "end": 399
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 402,
                          "end": 408
                        }
                      ],
                      "start": 386,
                      "end": 408
                    },
                    "start": 384,
                    "end": 408
                  },
                  "start": 362,
                  "end": 408
                },
                "init": null,
                "definite": false,
                "start": 362,
                "end": 408
              }
            ],
            "declare": false,
            "start": 358,
            "end": 409
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
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 423,
                      "end": 429
                    },
                    "start": 421,
                    "end": 429
                  },
                  "start": 418,
                  "end": 429
                },
                "init": null,
                "definite": false,
                "start": 418,
                "end": 429
              }
            ],
            "declare": false,
            "start": 414,
            "end": 430
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 444,
                      "end": 450
                    },
                    "start": 442,
                    "end": 450
                  },
                  "start": 439,
                  "end": 450
                },
                "init": null,
                "definite": false,
                "start": 439,
                "end": 450
              }
            ],
            "declare": false,
            "start": 435,
            "end": 451
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
                  "name": "literal_string",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 476,
                        "end": 484
                      },
                      "start": 476,
                      "end": 484
                    },
                    "start": 474,
                    "end": 484
                  },
                  "start": 460,
                  "end": 484
                },
                "init": null,
                "definite": false,
                "start": 460,
                "end": 484
              }
            ],
            "declare": false,
            "start": 456,
            "end": 485
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
                  "name": "literal_number",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 510,
                        "end": 512
                      },
                      "start": 510,
                      "end": 512
                    },
                    "start": 508,
                    "end": 512
                  },
                  "start": 494,
                  "end": 512
                },
                "init": null,
                "definite": false,
                "start": 494,
                "end": 512
              }
            ],
            "declare": false,
            "start": 490,
            "end": 513
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 525,
                        "end": 526
                      },
                      "typeArguments": null,
                      "start": 525,
                      "end": 526
                    },
                    "start": 523,
                    "end": 526
                  },
                  "start": 522,
                  "end": 526
                },
                "init": null,
                "definite": false,
                "start": 522,
                "end": 526
              }
            ],
            "declare": false,
            "start": 518,
            "end": 527
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
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUndefinedKeyword",
                      "start": 540,
                      "end": 549
                    },
                    "start": 538,
                    "end": 549
                  },
                  "start": 537,
                  "end": 549
                },
                "init": null,
                "definite": false,
                "start": 537,
                "end": 549
              }
            ],
            "declare": false,
            "start": 533,
            "end": 550
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 562,
                      "end": 566
                    },
                    "start": 560,
                    "end": 566
                  },
                  "start": 559,
                  "end": 566
                },
                "init": null,
                "definite": false,
                "start": 559,
                "end": 566
              }
            ],
            "declare": false,
            "start": 555,
            "end": 567
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 580,
                      "end": 583
                    },
                    "start": 578,
                    "end": 583
                  },
                  "start": 577,
                  "end": 583
                },
                "init": null,
                "definite": false,
                "start": 577,
                "end": 583
              }
            ],
            "declare": false,
            "start": 573,
            "end": 584
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 598,
                        "end": 600
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 595,
                      "end": 600
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 601
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 606
                },
                "definite": false,
                "start": 594,
                "end": 606
              }
            ],
            "declare": false,
            "start": 590,
            "end": 607
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 658
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 653,
                      "end": 658
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 652,
                  "end": 659
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 664
                },
                "definite": false,
                "start": 652,
                "end": 664
              }
            ],
            "declare": false,
            "start": 648,
            "end": 665
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 688
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 683,
                      "end": 688
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 689
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 693
                },
                "definite": false,
                "start": 682,
                "end": 693
              }
            ],
            "declare": false,
            "start": 678,
            "end": 694
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 741,
                        "end": 743
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 738,
                      "end": 743
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 744
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 748
                },
                "definite": false,
                "start": 737,
                "end": 748
              }
            ],
            "declare": false,
            "start": 733,
            "end": 749
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 789
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 784,
                      "end": 789
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 790
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 794
                },
                "definite": false,
                "start": 783,
                "end": 794
              }
            ],
            "declare": false,
            "start": 779,
            "end": 795
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 829
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 824,
                      "end": 829
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 823,
                  "end": 830
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapped_generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 833,
                  "end": 847
                },
                "definite": false,
                "start": 823,
                "end": 847
              }
            ],
            "declare": false,
            "start": 819,
            "end": 848
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 898,
                        "end": 900
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 895,
                      "end": 900
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 901
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 904,
                  "end": 910
                },
                "definite": false,
                "start": 894,
                "end": 910
              }
            ],
            "declare": false,
            "start": 890,
            "end": 911
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r8",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 957,
                        "end": 959
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 954,
                      "end": 959
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 953,
                  "end": 960
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "union_generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 963,
                  "end": 976
                },
                "definite": false,
                "start": 953,
                "end": 976
              }
            ],
            "declare": false,
            "start": 949,
            "end": 977
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1035,
                        "end": 1037
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1032,
                      "end": 1037
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1031,
                  "end": 1038
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "union_primitive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1056
                },
                "definite": false,
                "start": 1031,
                "end": 1056
              }
            ],
            "declare": false,
            "start": 1027,
            "end": 1057
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1116,
                        "end": 1119
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1113,
                      "end": 1119
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1112,
                  "end": 1120
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "intersection_generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1123,
                  "end": 1143
                },
                "definite": false,
                "start": 1112,
                "end": 1143
              }
            ],
            "declare": false,
            "start": 1108,
            "end": 1144
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r11",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1209,
                        "end": 1212
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1206,
                      "end": 1212
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1213
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "intersection_primitive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1216,
                  "end": 1238
                },
                "definite": false,
                "start": 1205,
                "end": 1238
              }
            ],
            "declare": false,
            "start": 1201,
            "end": 1239
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r12",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1305,
                        "end": 1308
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1302,
                      "end": 1308
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1309
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1315
                },
                "definite": false,
                "start": 1301,
                "end": 1315
              }
            ],
            "declare": false,
            "start": 1297,
            "end": 1316
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r13",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1339,
                        "end": 1342
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1336,
                      "end": 1342
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1335,
                  "end": 1343
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1346,
                  "end": 1349
                },
                "definite": false,
                "start": 1335,
                "end": 1349
              }
            ],
            "declare": false,
            "start": 1331,
            "end": 1350
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r14",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1374,
                        "end": 1377
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1371,
                      "end": 1377
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1370,
                  "end": 1378
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1381,
                  "end": 1382
                },
                "definite": false,
                "start": 1370,
                "end": 1382
              }
            ],
            "declare": false,
            "start": 1366,
            "end": 1383
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r15",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1434,
                        "end": 1437
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1431,
                      "end": 1437
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1430,
                  "end": 1438
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1441,
                  "end": 1442
                },
                "definite": false,
                "start": 1430,
                "end": 1442
              }
            ],
            "declare": false,
            "start": 1426,
            "end": 1443
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r16",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1490,
                        "end": 1493
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1487,
                      "end": 1493
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1486,
                  "end": 1494
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1497,
                  "end": 1498
                },
                "definite": false,
                "start": 1486,
                "end": 1498
              }
            ],
            "declare": false,
            "start": 1482,
            "end": 1499
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1520,
                        "end": 1523
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1517,
                      "end": 1523
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1516,
                  "end": 1524
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal_string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1527,
                  "end": 1541
                },
                "definite": false,
                "start": 1516,
                "end": 1541
              }
            ],
            "declare": false,
            "start": 1512,
            "end": 1542
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1565,
                        "end": 1568
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1562,
                      "end": 1568
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1561,
                  "end": 1569
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal_number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1572,
                  "end": 1586
                },
                "definite": false,
                "start": 1561,
                "end": 1586
              }
            ],
            "declare": false,
            "start": 1557,
            "end": 1587
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r19",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1611,
                        "end": 1614
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1608,
                      "end": 1614
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1607,
                  "end": 1615
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1618,
                  "end": 1619
                },
                "definite": false,
                "start": 1607,
                "end": 1619
              }
            ],
            "declare": false,
            "start": 1603,
            "end": 1620
          }
        ],
        "start": 72,
        "end": 1638
      },
      "expression": false,
      "start": 20,
      "end": 1638
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1638
}
```
