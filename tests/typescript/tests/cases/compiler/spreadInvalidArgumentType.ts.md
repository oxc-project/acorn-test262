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
                            "start": 336,
                            "end": 337
                          },
                          "typeArguments": null,
                          "start": 336,
                          "end": 337
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
                                "start": 342,
                                "end": 343
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 345,
                                  "end": 351
                                },
                                "start": 343,
                                "end": 351
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 342,
                              "end": 351
                            }
                          ],
                          "start": 340,
                          "end": 353
                        }
                      ],
                      "start": 336,
                      "end": 353
                    },
                    "start": 334,
                    "end": 353
                  },
                  "start": 314,
                  "end": 353
                },
                "init": null,
                "definite": false,
                "start": 314,
                "end": 353
              }
            ],
            "declare": false,
            "start": 310,
            "end": 354
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
                                "start": 389,
                                "end": 390
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 392,
                                  "end": 398
                                },
                                "start": 390,
                                "end": 398
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 389,
                              "end": 398
                            }
                          ],
                          "start": 387,
                          "end": 400
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 403,
                          "end": 409
                        }
                      ],
                      "start": 387,
                      "end": 409
                    },
                    "start": 385,
                    "end": 409
                  },
                  "start": 363,
                  "end": 409
                },
                "init": null,
                "definite": false,
                "start": 363,
                "end": 409
              }
            ],
            "declare": false,
            "start": 359,
            "end": 410
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
                      "start": 425,
                      "end": 431
                    },
                    "start": 423,
                    "end": 431
                  },
                  "start": 420,
                  "end": 431
                },
                "init": null,
                "definite": false,
                "start": 420,
                "end": 431
              }
            ],
            "declare": false,
            "start": 416,
            "end": 432
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
                      "type": "TSNumberKeyword",
                      "start": 446,
                      "end": 452
                    },
                    "start": 444,
                    "end": 452
                  },
                  "start": 441,
                  "end": 452
                },
                "init": null,
                "definite": false,
                "start": 441,
                "end": 452
              }
            ],
            "declare": false,
            "start": 437,
            "end": 453
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
                        "start": 478,
                        "end": 486
                      },
                      "start": 478,
                      "end": 486
                    },
                    "start": 476,
                    "end": 486
                  },
                  "start": 462,
                  "end": 486
                },
                "init": null,
                "definite": false,
                "start": 462,
                "end": 486
              }
            ],
            "declare": false,
            "start": 458,
            "end": 487
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
                        "start": 512,
                        "end": 514
                      },
                      "start": 512,
                      "end": 514
                    },
                    "start": 510,
                    "end": 514
                  },
                  "start": 496,
                  "end": 514
                },
                "init": null,
                "definite": false,
                "start": 496,
                "end": 514
              }
            ],
            "declare": false,
            "start": 492,
            "end": 515
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
                      "start": 528,
                      "end": 537
                    },
                    "start": 526,
                    "end": 537
                  },
                  "start": 525,
                  "end": 537
                },
                "init": null,
                "definite": false,
                "start": 525,
                "end": 537
              }
            ],
            "declare": false,
            "start": 521,
            "end": 538
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
                      "start": 550,
                      "end": 554
                    },
                    "start": 548,
                    "end": 554
                  },
                  "start": 547,
                  "end": 554
                },
                "init": null,
                "definite": false,
                "start": 547,
                "end": 554
              }
            ],
            "declare": false,
            "start": 543,
            "end": 555
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
                      "start": 567,
                      "end": 570
                    },
                    "start": 565,
                    "end": 570
                  },
                  "start": 564,
                  "end": 570
                },
                "init": null,
                "definite": false,
                "start": 564,
                "end": 570
              }
            ],
            "declare": false,
            "start": 560,
            "end": 571
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
                        "start": 585,
                        "end": 586
                      },
                      "typeArguments": null,
                      "start": 585,
                      "end": 586
                    },
                    "start": 583,
                    "end": 586
                  },
                  "start": 582,
                  "end": 586
                },
                "init": null,
                "definite": false,
                "start": 582,
                "end": 586
              }
            ],
            "declare": false,
            "start": 578,
            "end": 587
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
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 599
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 607,
                        "end": 609
                      },
                      "start": 604,
                      "end": 609
                    }
                  ],
                  "start": 602,
                  "end": 611
                },
                "definite": false,
                "start": 597,
                "end": 611
              }
            ],
            "declare": false,
            "start": 593,
            "end": 612
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 655
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 663,
                        "end": 665
                      },
                      "start": 660,
                      "end": 665
                    }
                  ],
                  "start": 658,
                  "end": 667
                },
                "definite": false,
                "start": 653,
                "end": 667
              }
            ],
            "declare": false,
            "start": 649,
            "end": 668
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
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 686
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 694,
                        "end": 695
                      },
                      "start": 691,
                      "end": 695
                    }
                  ],
                  "start": 689,
                  "end": 697
                },
                "definite": false,
                "start": 684,
                "end": 697
              }
            ],
            "declare": false,
            "start": 680,
            "end": 698
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
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 738,
                  "end": 740
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 749
                      },
                      "start": 745,
                      "end": 749
                    }
                  ],
                  "start": 743,
                  "end": 751
                },
                "definite": false,
                "start": 738,
                "end": 751
              }
            ],
            "declare": false,
            "start": 734,
            "end": 752
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
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 786,
                  "end": 788
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 796,
                        "end": 797
                      },
                      "start": 793,
                      "end": 797
                    }
                  ],
                  "start": 791,
                  "end": 799
                },
                "definite": false,
                "start": 786,
                "end": 799
              }
            ],
            "declare": false,
            "start": 782,
            "end": 800
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
                  "name": "o6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 827,
                  "end": 829
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapped_generic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 837,
                        "end": 851
                      },
                      "start": 834,
                      "end": 851
                    }
                  ],
                  "start": 832,
                  "end": 853
                },
                "definite": false,
                "start": 827,
                "end": 853
              }
            ],
            "declare": false,
            "start": 823,
            "end": 854
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
                  "name": "o7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 899
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapped",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 907,
                        "end": 913
                      },
                      "start": 904,
                      "end": 913
                    }
                  ],
                  "start": 902,
                  "end": 915
                },
                "definite": false,
                "start": 897,
                "end": 915
              }
            ],
            "declare": false,
            "start": 893,
            "end": 916
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
                  "name": "o8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 958,
                  "end": 960
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "union_generic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 968,
                        "end": 981
                      },
                      "start": 965,
                      "end": 981
                    }
                  ],
                  "start": 963,
                  "end": 983
                },
                "definite": false,
                "start": 958,
                "end": 983
              }
            ],
            "declare": false,
            "start": 954,
            "end": 984
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
                  "name": "o9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1037
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "union_primitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1045,
                        "end": 1060
                      },
                      "start": 1042,
                      "end": 1060
                    }
                  ],
                  "start": 1040,
                  "end": 1062
                },
                "definite": false,
                "start": 1035,
                "end": 1062
              }
            ],
            "declare": false,
            "start": 1031,
            "end": 1063
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
                  "name": "o10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1118,
                  "end": 1121
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "intersection_generic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1129,
                        "end": 1149
                      },
                      "start": 1126,
                      "end": 1149
                    }
                  ],
                  "start": 1124,
                  "end": 1151
                },
                "definite": false,
                "start": 1118,
                "end": 1151
              }
            ],
            "declare": false,
            "start": 1114,
            "end": 1152
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
                  "name": "o11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1210,
                  "end": 1213
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "intersection_primitive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1221,
                        "end": 1243
                      },
                      "start": 1218,
                      "end": 1243
                    }
                  ],
                  "start": 1216,
                  "end": 1245
                },
                "definite": false,
                "start": 1210,
                "end": 1245
              }
            ],
            "declare": false,
            "start": 1206,
            "end": 1246
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
                  "name": "o12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1308,
                  "end": 1311
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1319,
                        "end": 1322
                      },
                      "start": 1316,
                      "end": 1322
                    }
                  ],
                  "start": 1314,
                  "end": 1324
                },
                "definite": false,
                "start": 1308,
                "end": 1324
              }
            ],
            "declare": false,
            "start": 1304,
            "end": 1325
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
                  "name": "o13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1347
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1355,
                        "end": 1358
                      },
                      "start": 1352,
                      "end": 1358
                    }
                  ],
                  "start": 1350,
                  "end": 1360
                },
                "definite": false,
                "start": 1344,
                "end": 1360
              }
            ],
            "declare": false,
            "start": 1340,
            "end": 1361
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
                  "name": "o14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1381,
                  "end": 1384
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1392,
                        "end": 1393
                      },
                      "start": 1389,
                      "end": 1393
                    }
                  ],
                  "start": 1387,
                  "end": 1395
                },
                "definite": false,
                "start": 1381,
                "end": 1395
              }
            ],
            "declare": false,
            "start": 1377,
            "end": 1396
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
                  "name": "o15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1443,
                  "end": 1446
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1454,
                        "end": 1455
                      },
                      "start": 1451,
                      "end": 1455
                    }
                  ],
                  "start": 1449,
                  "end": 1457
                },
                "definite": false,
                "start": 1443,
                "end": 1457
              }
            ],
            "declare": false,
            "start": 1439,
            "end": 1458
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
                  "name": "o16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1501,
                  "end": 1504
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1512,
                        "end": 1513
                      },
                      "start": 1509,
                      "end": 1513
                    }
                  ],
                  "start": 1507,
                  "end": 1515
                },
                "definite": false,
                "start": 1501,
                "end": 1515
              }
            ],
            "declare": false,
            "start": 1497,
            "end": 1516
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
                  "name": "o17",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1533,
                  "end": 1536
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "literal_string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1544,
                        "end": 1558
                      },
                      "start": 1541,
                      "end": 1558
                    }
                  ],
                  "start": 1539,
                  "end": 1560
                },
                "definite": false,
                "start": 1533,
                "end": 1560
              }
            ],
            "declare": false,
            "start": 1529,
            "end": 1561
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
                  "name": "o18",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1580,
                  "end": 1583
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "literal_number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1591,
                        "end": 1605
                      },
                      "start": 1588,
                      "end": 1605
                    }
                  ],
                  "start": 1586,
                  "end": 1607
                },
                "definite": false,
                "start": 1580,
                "end": 1607
              }
            ],
            "declare": false,
            "start": 1576,
            "end": 1608
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
                  "name": "o19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1628,
                  "end": 1631
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1639,
                        "end": 1640
                      },
                      "start": 1636,
                      "end": 1640
                    }
                  ],
                  "start": 1634,
                  "end": 1642
                },
                "definite": false,
                "start": 1628,
                "end": 1642
              }
            ],
            "declare": false,
            "start": 1624,
            "end": 1643
          }
        ],
        "start": 72,
        "end": 1661
      },
      "expression": false,
      "start": 20,
      "end": 1661
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1661
}
```
