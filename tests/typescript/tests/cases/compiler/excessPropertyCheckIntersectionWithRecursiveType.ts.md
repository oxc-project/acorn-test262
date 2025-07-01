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
        "name": "Request",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 34
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
              "name": "l1",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "l2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 47
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 49,
                        "end": 56
                      },
                      "start": 47,
                      "end": 56
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 45,
                    "end": 56
                  }
                ],
                "start": 43,
                "end": 58
              },
              "start": 41,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 39,
            "end": 58
          }
        ],
        "start": 37,
        "end": 60
      },
      "declare": false,
      "start": 22,
      "end": 61
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 74
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
              "start": 75,
              "end": 76
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 75,
            "end": 76
          }
        ],
        "start": 74,
        "end": 77
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ex",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 84
            },
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
                      "start": 87,
                      "end": 88
                    },
                    "typeArguments": null,
                    "start": 87,
                    "end": 88
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 91,
                    "end": 95
                  }
                ],
                "start": 87,
                "end": 95
              },
              "start": 85,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 95
          }
        ],
        "start": 80,
        "end": 97
      },
      "declare": false,
      "start": 62,
      "end": 98
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema1",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 112
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
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "typeArguments": null,
              "start": 119,
              "end": 120
            },
            "extendsType": {
              "type": "TSBooleanKeyword",
              "start": 129,
              "end": 136
            },
            "trueType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 145
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 147,
                        "end": 156
                      },
                      "start": 147,
                      "end": 156
                    },
                    "start": 145,
                    "end": 156
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 141,
                  "end": 157
                }
              ],
              "start": 139,
              "end": 159
            },
            "falseType": {
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 164,
                    "end": 169
                  },
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
                        "start": 174,
                        "end": 175
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
                            "start": 185,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 185,
                          "end": 186
                        },
                        "start": 179,
                        "end": 186
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 189,
                          "end": 196
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 197,
                                  "end": 198
                                },
                                "typeArguments": null,
                                "start": 197,
                                "end": 198
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 199,
                                  "end": 200
                                },
                                "typeArguments": null,
                                "start": 199,
                                "end": 200
                              },
                              "start": 197,
                              "end": 201
                            }
                          ],
                          "start": 196,
                          "end": 202
                        },
                        "start": 189,
                        "end": 202
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 171,
                      "end": 204
                    },
                    "start": 169,
                    "end": 204
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 164,
                  "end": 205
                }
              ],
              "start": 162,
              "end": 207
            },
            "start": 119,
            "end": 207
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Example",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 218
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
                    "start": 219,
                    "end": 220
                  },
                  "typeArguments": null,
                  "start": 219,
                  "end": 220
                }
              ],
              "start": 218,
              "end": 221
            },
            "start": 211,
            "end": 221
          }
        ],
        "start": 118,
        "end": 221
      },
      "declare": false,
      "start": 100,
      "end": 222
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "schemaObj1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 256
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 264
                        },
                        "typeArguments": null,
                        "start": 257,
                        "end": 264
                      }
                    ],
                    "start": 256,
                    "end": 265
                  },
                  "start": 249,
                  "end": 265
                },
                "start": 247,
                "end": 265
              },
              "start": 237,
              "end": 265
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 277
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 287
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 297,
                                "end": 302
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 314,
                                      "end": 316
                                    },
                                    "value": {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 320,
                                            "end": 324
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": "boolean",
                                            "raw": "'boolean'",
                                            "start": 326,
                                            "end": 335
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 320,
                                          "end": 335
                                        }
                                      ],
                                      "start": 318,
                                      "end": 337
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 314,
                                    "end": 337
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 347,
                                      "end": 354
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 356,
                                      "end": 361
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 347,
                                    "end": 361
                                  }
                                ],
                                "start": 304,
                                "end": 370
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 297,
                              "end": 370
                            }
                          ],
                          "start": 289,
                          "end": 377
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 285,
                        "end": 377
                      }
                    ],
                    "start": 279,
                    "end": 382
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 272,
                  "end": 382
                }
              ],
              "start": 268,
              "end": 385
            },
            "definite": false,
            "start": 237,
            "end": 385
          }
        ],
        "declare": false,
        "start": 231,
        "end": 385
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 224,
      "end": 385
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema2",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 399
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
              "start": 400,
              "end": 401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 400,
            "end": 401
          }
        ],
        "start": 399,
        "end": 402
      },
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
            "start": 406,
            "end": 407
          },
          "typeArguments": null,
          "start": 406,
          "end": 407
        },
        "extendsType": {
          "type": "TSBooleanKeyword",
          "start": 416,
          "end": 423
        },
        "trueType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 432
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 434,
                        "end": 443
                      },
                      "start": 434,
                      "end": 443
                    },
                    "start": 432,
                    "end": 443
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 428,
                  "end": 444
                }
              ],
              "start": 426,
              "end": 446
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 456
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
                      "start": 457,
                      "end": 458
                    },
                    "typeArguments": null,
                    "start": 457,
                    "end": 458
                  }
                ],
                "start": 456,
                "end": 459
              },
              "start": 449,
              "end": 459
            }
          ],
          "start": 426,
          "end": 459
        },
        "falseType": {
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 469
                  },
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
                        "start": 474,
                        "end": 475
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
                            "start": 485,
                            "end": 486
                          },
                          "typeArguments": null,
                          "start": 485,
                          "end": 486
                        },
                        "start": 479,
                        "end": 486
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 489,
                          "end": 496
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 497,
                                  "end": 498
                                },
                                "typeArguments": null,
                                "start": 497,
                                "end": 498
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 499,
                                  "end": 500
                                },
                                "typeArguments": null,
                                "start": 499,
                                "end": 500
                              },
                              "start": 497,
                              "end": 501
                            }
                          ],
                          "start": 496,
                          "end": 502
                        },
                        "start": 489,
                        "end": 502
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 471,
                      "end": 504
                    },
                    "start": 469,
                    "end": 504
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 464,
                  "end": 505
                }
              ],
              "start": 462,
              "end": 507
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 517
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
                      "start": 518,
                      "end": 519
                    },
                    "typeArguments": null,
                    "start": 518,
                    "end": 519
                  }
                ],
                "start": 517,
                "end": 520
              },
              "start": 510,
              "end": 520
            }
          ],
          "start": 462,
          "end": 520
        },
        "start": 406,
        "end": 520
      },
      "declare": false,
      "start": 387,
      "end": 522
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "schemaObj2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 556
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 564
                        },
                        "typeArguments": null,
                        "start": 557,
                        "end": 564
                      }
                    ],
                    "start": 556,
                    "end": 565
                  },
                  "start": 549,
                  "end": 565
                },
                "start": 547,
                "end": 565
              },
              "start": 537,
              "end": 565
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 577
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 585,
                          "end": 587
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 597,
                                "end": 602
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 614,
                                      "end": 616
                                    },
                                    "value": {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 620,
                                            "end": 624
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": "boolean",
                                            "raw": "'boolean'",
                                            "start": 626,
                                            "end": 635
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 620,
                                          "end": 635
                                        }
                                      ],
                                      "start": 618,
                                      "end": 637
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 614,
                                    "end": 637
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 647,
                                      "end": 654
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 656,
                                      "end": 661
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 647,
                                    "end": 661
                                  }
                                ],
                                "start": 604,
                                "end": 670
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 597,
                              "end": 670
                            }
                          ],
                          "start": 589,
                          "end": 677
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 585,
                        "end": 677
                      }
                    ],
                    "start": 579,
                    "end": 682
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 572,
                  "end": 682
                }
              ],
              "start": 568,
              "end": 685
            },
            "definite": false,
            "start": 537,
            "end": 685
          }
        ],
        "declare": false,
        "start": 531,
        "end": 685
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 524,
      "end": 685
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema3",
        "optional": false,
        "typeAnnotation": null,
        "start": 692,
        "end": 699
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
              "start": 700,
              "end": 701
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 700,
            "end": 701
          }
        ],
        "start": 699,
        "end": 702
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Example",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 712
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
                    "start": 713,
                    "end": 714
                  },
                  "typeArguments": null,
                  "start": 713,
                  "end": 714
                }
              ],
              "start": 712,
              "end": 715
            },
            "start": 705,
            "end": 715
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 720
              },
              "typeArguments": null,
              "start": 719,
              "end": 720
            },
            "extendsType": {
              "type": "TSBooleanKeyword",
              "start": 729,
              "end": 736
            },
            "trueType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 741,
                    "end": 745
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 747,
                        "end": 756
                      },
                      "start": 747,
                      "end": 756
                    },
                    "start": 745,
                    "end": 756
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 741,
                  "end": 757
                }
              ],
              "start": 739,
              "end": 759
            },
            "falseType": {
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 769
                  },
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
                        "start": 774,
                        "end": 775
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
                            "start": 785,
                            "end": 786
                          },
                          "typeArguments": null,
                          "start": 785,
                          "end": 786
                        },
                        "start": 779,
                        "end": 786
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 789,
                          "end": 796
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 797,
                                  "end": 798
                                },
                                "typeArguments": null,
                                "start": 797,
                                "end": 798
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 799,
                                  "end": 800
                                },
                                "typeArguments": null,
                                "start": 799,
                                "end": 800
                              },
                              "start": 797,
                              "end": 801
                            }
                          ],
                          "start": 796,
                          "end": 802
                        },
                        "start": 789,
                        "end": 802
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 771,
                      "end": 804
                    },
                    "start": 769,
                    "end": 804
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 764,
                  "end": 805
                }
              ],
              "start": 762,
              "end": 807
            },
            "start": 719,
            "end": 807
          }
        ],
        "start": 705,
        "end": 808
      },
      "declare": false,
      "start": 687,
      "end": 809
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "schemaObj3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 836,
                    "end": 843
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 844,
                          "end": 851
                        },
                        "typeArguments": null,
                        "start": 844,
                        "end": 851
                      }
                    ],
                    "start": 843,
                    "end": 852
                  },
                  "start": 836,
                  "end": 852
                },
                "start": 834,
                "end": 852
              },
              "start": 824,
              "end": 852
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 859,
                    "end": 864
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 874
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 884,
                                "end": 889
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 901,
                                      "end": 903
                                    },
                                    "value": {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 907,
                                            "end": 911
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": "boolean",
                                            "raw": "'boolean'",
                                            "start": 913,
                                            "end": 922
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 907,
                                          "end": 922
                                        }
                                      ],
                                      "start": 905,
                                      "end": 924
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 901,
                                    "end": 924
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 934,
                                      "end": 941
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 943,
                                      "end": 948
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 934,
                                    "end": 948
                                  }
                                ],
                                "start": 891,
                                "end": 957
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 884,
                              "end": 957
                            }
                          ],
                          "start": 876,
                          "end": 964
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 872,
                        "end": 964
                      }
                    ],
                    "start": 866,
                    "end": 969
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 859,
                  "end": 969
                }
              ],
              "start": 855,
              "end": 972
            },
            "definite": false,
            "start": 824,
            "end": 972
          }
        ],
        "declare": false,
        "start": 818,
        "end": 972
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 811,
      "end": 972
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema4",
        "optional": false,
        "typeAnnotation": null,
        "start": 979,
        "end": 986
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
              "start": 987,
              "end": 988
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 987,
            "end": 988
          }
        ],
        "start": 986,
        "end": 989
      },
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
            "start": 993,
            "end": 994
          },
          "typeArguments": null,
          "start": 993,
          "end": 994
        },
        "extendsType": {
          "type": "TSBooleanKeyword",
          "start": 1003,
          "end": 1010
        },
        "trueType": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1015,
                    "end": 1019
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 1021,
                        "end": 1030
                      },
                      "start": 1021,
                      "end": 1030
                    },
                    "start": 1019,
                    "end": 1030
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1015,
                  "end": 1031
                }
              ],
              "start": 1013,
              "end": 1033
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null,
                "start": 1036,
                "end": 1043
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
                      "start": 1044,
                      "end": 1045
                    },
                    "typeArguments": null,
                    "start": 1044,
                    "end": 1045
                  }
                ],
                "start": 1043,
                "end": 1046
              },
              "start": 1036,
              "end": 1046
            }
          ],
          "start": 1013,
          "end": 1046
        },
        "falseType": {
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
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1056
              },
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
                        "name": "Example",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1058,
                        "end": 1065
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
                              "start": 1066,
                              "end": 1067
                            },
                            "typeArguments": null,
                            "start": 1066,
                            "end": 1067
                          }
                        ],
                        "start": 1065,
                        "end": 1068
                      },
                      "start": 1058,
                      "end": 1068
                    },
                    {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1074,
                        "end": 1075
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
                            "start": 1085,
                            "end": 1086
                          },
                          "typeArguments": null,
                          "start": 1085,
                          "end": 1086
                        },
                        "start": 1079,
                        "end": 1086
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1089,
                          "end": 1096
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1097,
                                  "end": 1098
                                },
                                "typeArguments": null,
                                "start": 1097,
                                "end": 1098
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1099,
                                  "end": 1100
                                },
                                "typeArguments": null,
                                "start": 1099,
                                "end": 1100
                              },
                              "start": 1097,
                              "end": 1101
                            }
                          ],
                          "start": 1096,
                          "end": 1102
                        },
                        "start": 1089,
                        "end": 1102
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 1071,
                      "end": 1104
                    }
                  ],
                  "start": 1058,
                  "end": 1104
                },
                "start": 1056,
                "end": 1104
              },
              "accessibility": null,
              "static": false,
              "start": 1051,
              "end": 1105
            }
          ],
          "start": 1049,
          "end": 1107
        },
        "start": 993,
        "end": 1107
      },
      "declare": false,
      "start": 974,
      "end": 1109
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "schemaObj4",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1143
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1144,
                          "end": 1151
                        },
                        "typeArguments": null,
                        "start": 1144,
                        "end": 1151
                      }
                    ],
                    "start": 1143,
                    "end": 1152
                  },
                  "start": 1136,
                  "end": 1152
                },
                "start": 1134,
                "end": 1152
              },
              "start": 1124,
              "end": 1152
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1159,
                    "end": 1164
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1172,
                          "end": 1174
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1184,
                                "end": 1189
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "l2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1201,
                                      "end": 1203
                                    },
                                    "value": {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "type",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1207,
                                            "end": 1211
                                          },
                                          "value": {
                                            "type": "Literal",
                                            "value": "boolean",
                                            "raw": "'boolean'",
                                            "start": 1213,
                                            "end": 1222
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 1207,
                                          "end": 1222
                                        }
                                      ],
                                      "start": 1205,
                                      "end": 1224
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1201,
                                    "end": 1224
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "invalid",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1234,
                                      "end": 1241
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 1243,
                                      "end": 1248
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1234,
                                    "end": 1248
                                  }
                                ],
                                "start": 1191,
                                "end": 1257
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1184,
                              "end": 1257
                            }
                          ],
                          "start": 1176,
                          "end": 1264
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1172,
                        "end": 1264
                      }
                    ],
                    "start": 1166,
                    "end": 1269
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1159,
                  "end": 1269
                }
              ],
              "start": 1155,
              "end": 1272
            },
            "definite": false,
            "start": 1124,
            "end": 1272
          }
        ],
        "declare": false,
        "start": 1118,
        "end": 1272
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1111,
      "end": 1272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Length",
        "optional": false,
        "typeAnnotation": null,
        "start": 1301,
        "end": 1307
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
              "start": 1308,
              "end": 1309
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1318,
                "end": 1321
              },
              "start": 1318,
              "end": 1323
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1308,
            "end": 1323
          }
        ],
        "start": 1307,
        "end": 1324
      },
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
            "start": 1327,
            "end": 1328
          },
          "typeArguments": null,
          "start": 1327,
          "end": 1328
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "length",
            "raw": "\"length\"",
            "start": 1329,
            "end": 1337
          },
          "start": 1329,
          "end": 1337
        },
        "start": 1327,
        "end": 1338
      },
      "declare": false,
      "start": 1296,
      "end": 1339
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prepend",
        "optional": false,
        "typeAnnotation": null,
        "start": 1345,
        "end": 1352
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1354
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1353,
            "end": 1354
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1356,
              "end": 1357
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1366,
                "end": 1369
              },
              "start": 1366,
              "end": 1371
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1356,
            "end": 1371
          }
        ],
        "start": 1352,
        "end": 1372
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "head",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1383,
                    "end": 1384
                  },
                  "typeArguments": null,
                  "start": 1383,
                  "end": 1384
                },
                "start": 1381,
                "end": 1384
              },
              "start": 1377,
              "end": 1384
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 1389,
                "end": 1393
              },
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
                    "start": 1395,
                    "end": 1396
                  },
                  "typeArguments": null,
                  "start": 1395,
                  "end": 1396
                },
                "start": 1393,
                "end": 1396
              },
              "value": null,
              "start": 1386,
              "end": 1396
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1401,
              "end": 1405
            },
            "start": 1398,
            "end": 1405
          },
          "start": 1376,
          "end": 1405
        },
        "extendsType": {
          "type": "TSFunctionType",
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
                "start": 1422,
                "end": 1426
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1434,
                      "end": 1435
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1434,
                    "end": 1435
                  },
                  "start": 1428,
                  "end": 1435
                },
                "start": 1426,
                "end": 1435
              },
              "value": null,
              "start": 1419,
              "end": 1435
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1441,
              "end": 1445
            },
            "start": 1438,
            "end": 1445
          },
          "start": 1415,
          "end": 1445
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 1450,
            "end": 1451
          },
          "typeArguments": null,
          "start": 1450,
          "end": 1451
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 1456,
          "end": 1459
        },
        "start": 1375,
        "end": 1459
      },
      "declare": false,
      "start": 1340,
      "end": 1460
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BuildTree",
        "optional": false,
        "typeAnnotation": null,
        "start": 1467,
        "end": 1476
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
              "start": 1477,
              "end": 1478
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1477,
            "end": 1478
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1480,
              "end": 1481
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1490,
              "end": 1496
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1500,
                  "end": 1501
                },
                "prefix": true,
                "start": 1499,
                "end": 1501
              },
              "start": 1499,
              "end": 1501
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1480,
            "end": 1501
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1504
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1513,
                "end": 1516
              },
              "start": 1513,
              "end": 1518
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 1521,
              "end": 1523
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1503,
            "end": 1523
          }
        ],
        "start": 1476,
        "end": 1524
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1531,
                "end": 1532
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
                    "start": 1534,
                    "end": 1535
                  },
                  "typeArguments": null,
                  "start": 1534,
                  "end": 1535
                },
                "start": 1532,
                "end": 1535
              },
              "accessibility": null,
              "static": false,
              "start": 1531,
              "end": 1536
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1539,
                "end": 1540
              },
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
                        "start": 1542,
                        "end": 1543
                      },
                      "typeArguments": null,
                      "start": 1542,
                      "end": 1543
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
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1548,
                            "end": 1556
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "BuildTree",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1558,
                                  "end": 1567
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
                                        "start": 1568,
                                        "end": 1569
                                      },
                                      "typeArguments": null,
                                      "start": 1568,
                                      "end": 1569
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "N",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1571,
                                        "end": 1572
                                      },
                                      "typeArguments": null,
                                      "start": 1571,
                                      "end": 1572
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Prepend",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1574,
                                        "end": 1581
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSAnyKeyword",
                                            "start": 1582,
                                            "end": 1585
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1587,
                                              "end": 1588
                                            },
                                            "typeArguments": null,
                                            "start": 1587,
                                            "end": 1588
                                          }
                                        ],
                                        "start": 1581,
                                        "end": 1589
                                      },
                                      "start": 1574,
                                      "end": 1589
                                    }
                                  ],
                                  "start": 1567,
                                  "end": 1590
                                },
                                "start": 1558,
                                "end": 1590
                              },
                              "start": 1558,
                              "end": 1592
                            },
                            "start": 1556,
                            "end": 1592
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1548,
                          "end": 1592
                        }
                      ],
                      "start": 1546,
                      "end": 1594
                    }
                  ],
                  "start": 1542,
                  "end": 1594
                },
                "start": 1540,
                "end": 1594
              },
              "accessibility": null,
              "static": false,
              "start": 1539,
              "end": 1595
            }
          ],
          "start": 1527,
          "end": 1597
        },
        "indexType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1604
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1605,
                    "end": 1606
                  },
                  "typeArguments": null,
                  "start": 1605,
                  "end": 1606
                }
              ],
              "start": 1604,
              "end": 1607
            },
            "start": 1598,
            "end": 1607
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1616,
              "end": 1617
            },
            "typeArguments": null,
            "start": 1616,
            "end": 1617
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1620,
              "end": 1621
            },
            "start": 1620,
            "end": 1621
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1624,
              "end": 1625
            },
            "start": 1624,
            "end": 1625
          },
          "start": 1598,
          "end": 1625
        },
        "start": 1527,
        "end": 1626
      },
      "declare": false,
      "start": 1462,
      "end": 1627
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 1639,
        "end": 1643
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1648,
              "end": 1652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1654,
                "end": 1660
              },
              "start": 1652,
              "end": 1660
            },
            "accessibility": null,
            "static": false,
            "start": 1648,
            "end": 1661
          }
        ],
        "start": 1644,
        "end": 1663
      },
      "declare": false,
      "start": 1629,
      "end": 1663
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GrandUser",
        "optional": false,
        "typeAnnotation": null,
        "start": 1670,
        "end": 1679
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BuildTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 1682,
          "end": 1691
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "User",
                "optional": false,
                "typeAnnotation": null,
                "start": 1692,
                "end": 1696
              },
              "typeArguments": null,
              "start": 1692,
              "end": 1696
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1698,
                "end": 1699
              },
              "start": 1698,
              "end": 1699
            }
          ],
          "start": 1691,
          "end": 1700
        },
        "start": 1682,
        "end": 1700
      },
      "declare": false,
      "start": 1665,
      "end": 1701
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
            "name": "grandUser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GrandUser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1720,
                  "end": 1729
                },
                "typeArguments": null,
                "start": 1720,
                "end": 1729
              },
              "start": 1718,
              "end": 1729
            },
            "start": 1709,
            "end": 1729
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1740
                },
                "value": {
                  "type": "Literal",
                  "value": "Grand User",
                  "raw": "\"Grand User\"",
                  "start": 1742,
                  "end": 1754
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1736,
                "end": 1754
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1758,
                  "end": 1766
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1782,
                            "end": 1786
                          },
                          "value": {
                            "type": "Literal",
                            "value": "Son",
                            "raw": "\"Son\"",
                            "start": 1788,
                            "end": 1793
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1782,
                          "end": 1793
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1801,
                            "end": 1809
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1833,
                                      "end": 1837
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "Grand son",
                                      "raw": "\"Grand son\"",
                                      "start": 1839,
                                      "end": 1850
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1833,
                                    "end": 1850
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "children",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1862,
                                      "end": 1870
                                    },
                                    "value": {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "ObjectExpression",
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "name",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1902,
                                                "end": 1906
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": "123",
                                                "raw": "\"123\"",
                                                "start": 1908,
                                                "end": 1913
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 1902,
                                              "end": 1913
                                            },
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "children",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1929,
                                                "end": 1937
                                              },
                                              "value": {
                                                "type": "ArrayExpression",
                                                "elements": [
                                                  {
                                                    "type": "ObjectExpression",
                                                    "properties": [
                                                      {
                                                        "type": "Property",
                                                        "kind": "init",
                                                        "key": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "name",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 1977,
                                                          "end": 1981
                                                        },
                                                        "value": {
                                                          "type": "Literal",
                                                          "value": "Some other name",
                                                          "raw": "\"Some other name\"",
                                                          "start": 1983,
                                                          "end": 2000
                                                        },
                                                        "method": false,
                                                        "shorthand": false,
                                                        "computed": false,
                                                        "optional": false,
                                                        "start": 1977,
                                                        "end": 2000
                                                      }
                                                    ],
                                                    "start": 1957,
                                                    "end": 2019
                                                  }
                                                ],
                                                "start": 1939,
                                                "end": 2036
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 1929,
                                              "end": 2036
                                            }
                                          ],
                                          "start": 1886,
                                          "end": 2051
                                        }
                                      ],
                                      "start": 1872,
                                      "end": 2064
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1862,
                                    "end": 2064
                                  }
                                ],
                                "start": 1821,
                                "end": 2075
                              }
                            ],
                            "start": 1811,
                            "end": 2084
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1801,
                          "end": 2084
                        }
                      ],
                      "start": 1774,
                      "end": 2091
                    }
                  ],
                  "start": 1768,
                  "end": 2096
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1758,
                "end": 2096
              }
            ],
            "start": 1732,
            "end": 2099
          },
          "definite": false,
          "start": 1709,
          "end": 2099
        }
      ],
      "declare": false,
      "start": 1703,
      "end": 2100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "grandUser",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2102,
                    "end": 2111
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "children",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2112,
                    "end": 2120
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2102,
                  "end": 2120
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2121,
                  "end": 2122
                },
                "optional": false,
                "computed": true,
                "start": 2102,
                "end": 2123
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 2124,
                "end": 2132
              },
              "optional": false,
              "computed": false,
              "start": 2102,
              "end": 2132
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2133,
              "end": 2134
            },
            "optional": false,
            "computed": true,
            "start": 2102,
            "end": 2135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "children",
            "optional": false,
            "typeAnnotation": null,
            "start": 2136,
            "end": 2144
          },
          "optional": false,
          "computed": false,
          "start": 2102,
          "end": 2144
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 2145,
          "end": 2146
        },
        "optional": false,
        "computed": true,
        "start": 2102,
        "end": 2147
      },
      "directive": null,
      "start": 2102,
      "end": 2148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 2149
}
```
