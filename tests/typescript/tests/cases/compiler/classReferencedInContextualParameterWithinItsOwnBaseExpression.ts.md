__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pretty",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "To",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 19
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 19
          }
        ],
        "start": 16,
        "end": 20
      },
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "To",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 29,
                      "end": 31
                    },
                    "typeArguments": null,
                    "start": 29,
                    "end": 31
                  },
                  "start": 27,
                  "end": 31
                },
                "start": 26,
                "end": 31
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "start": 25,
            "end": 41
          }
        ],
        "start": 21,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 61
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 62,
            "end": 63
          }
        ],
        "start": 61,
        "end": 64
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pretty",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pretty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 93
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 94,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 94,
                      "end": 95
                    }
                  ],
                  "start": 93,
                  "end": 96
                },
                "start": 87,
                "end": 96
              },
              "start": 85,
              "end": 96
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 97
          }
        ],
        "start": 65,
        "end": 99
      },
      "declare": false,
      "start": 45,
      "end": 99
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 116
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 117,
            "end": 118
          }
        ],
        "start": 116,
        "end": 119
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 133
                },
                "typeArguments": null,
                "start": 132,
                "end": 133
              },
              "start": 130,
              "end": 133
            },
            "start": 124,
            "end": 134
          }
        ],
        "start": 120,
        "end": 136
      },
      "declare": false,
      "start": 101,
      "end": 136
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
            "name": "Class",
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
                        "name": "Self",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 164
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 160,
                      "end": 164
                    }
                  ],
                  "start": 159,
                  "end": 165
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identifier",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "start": 169,
                    "end": 187
                  }
                ],
                "returnType": {
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
                            "name": "Fields",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 195,
                            "end": 201
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 195,
                          "end": 201
                        }
                      ],
                      "start": 194,
                      "end": 202
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Fields",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 214,
                              "end": 220
                            },
                            "typeArguments": null,
                            "start": 214,
                            "end": 220
                          },
                          "start": 212,
                          "end": 220
                        },
                        "start": 206,
                        "end": 220
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "annotations",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Schema",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 238,
                              "end": 244
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Self",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 245,
                                    "end": 249
                                  },
                                  "typeArguments": null,
                                  "start": 245,
                                  "end": 249
                                }
                              ],
                              "start": 244,
                              "end": 250
                            },
                            "start": 238,
                            "end": 250
                          },
                          "start": 236,
                          "end": 250
                        },
                        "start": 224,
                        "end": 250
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Class",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 262
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "OutputFrom",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 263,
                                "end": 273
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Fields",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 274,
                                      "end": 280
                                    },
                                    "typeArguments": null,
                                    "start": 274,
                                    "end": 280
                                  }
                                ],
                                "start": 273,
                                "end": 281
                              },
                              "start": 263,
                              "end": 281
                            }
                          ],
                          "start": 262,
                          "end": 282
                        },
                        "start": 257,
                        "end": 282
                      },
                      "start": 254,
                      "end": 282
                    },
                    "start": 194,
                    "end": 282
                  },
                  "start": 191,
                  "end": 282
                },
                "start": 159,
                "end": 282
              },
              "start": 157,
              "end": 282
            },
            "start": 152,
            "end": 282
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 282
        }
      ],
      "declare": true,
      "start": 138,
      "end": 283
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 294
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TOutput",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 302
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 295,
            "end": 302
          }
        ],
        "start": 294,
        "end": 303
      },
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
              "name": "_TOutput",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 318
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TOutput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 327
                },
                "typeArguments": null,
                "start": 320,
                "end": 327
              },
              "start": 318,
              "end": 327
            },
            "accessibility": null,
            "static": false,
            "start": 310,
            "end": 328
          }
        ],
        "start": 306,
        "end": 330
      },
      "declare": false,
      "start": 285,
      "end": 331
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OutputFrom",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 348
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFields",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 356
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 349,
            "end": 356
          }
        ],
        "start": 348,
        "end": 357
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 365,
          "end": 366
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFields",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 383
            },
            "typeArguments": null,
            "start": 376,
            "end": 383
          },
          "start": 370,
          "end": 383
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "_TOutput",
              "raw": "\"_TOutput\"",
              "start": 386,
              "end": 396
            },
            "start": 386,
            "end": 396
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFields",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 418
                },
                "typeArguments": null,
                "start": 411,
                "end": 418
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 420
                },
                "typeArguments": null,
                "start": 419,
                "end": 420
              },
              "start": 411,
              "end": 421
            },
            "start": 405,
            "end": 421
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFields",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 428,
                  "end": 435
                },
                "typeArguments": null,
                "start": 428,
                "end": 435
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 437
                },
                "typeArguments": null,
                "start": 436,
                "end": 437
              },
              "start": 428,
              "end": 438
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "_TOutput",
                "raw": "\"_TOutput\"",
                "start": 439,
                "end": 449
              },
              "start": 439,
              "end": 449
            },
            "start": 428,
            "end": 450
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 457,
            "end": 462
          },
          "start": 386,
          "end": 462
        },
        "optional": false,
        "readonly": null,
        "start": 360,
        "end": 465
      },
      "declare": false,
      "start": 333,
      "end": 466
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "string",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 491
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 499
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 500,
                "end": 506
              }
            ],
            "start": 499,
            "end": 507
          },
          "start": 495,
          "end": 507
        },
        "start": 493,
        "end": 507
      },
      "body": null,
      "expression": false,
      "start": 468,
      "end": 508
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 523,
          "end": 524
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 538
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 540
                  },
                  "typeArguments": null,
                  "start": 539,
                  "end": 540
                }
              ],
              "start": 538,
              "end": 541
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 542,
                "end": 545
              }
            ],
            "optional": false,
            "start": 533,
            "end": 546
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 561
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 552,
                  "end": 561
                }
              ],
              "start": 550,
              "end": 563
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pretty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 579
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 583
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSON",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 588,
                          "end": 592
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringify",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 602
                        },
                        "optional": false,
                        "computed": false,
                        "start": 588,
                        "end": 602
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 603,
                          "end": 604
                        }
                      ],
                      "optional": false,
                      "start": 588,
                      "end": 605
                    },
                    "id": null,
                    "generator": false,
                    "start": 581,
                    "end": 605
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 573,
                  "end": 605
                }
              ],
              "start": 567,
              "end": 610
            }
          ],
          "optional": false,
          "start": 533,
          "end": 613
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 614,
          "end": 616
        },
        "abstract": false,
        "declare": false,
        "start": 517,
        "end": 616
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 510,
      "end": 616
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 616
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Pretty",
    "start": 10,
    "end": 16,
    "range": [
      10,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "To",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "To",
    "start": 29,
    "end": 31,
    "range": [
      29,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 45,
    "end": 54,
    "range": [
      45,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 55,
    "end": 61,
    "range": [
      55,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 69,
    "end": 77,
    "range": [
      69,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "pretty",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "Pretty",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 101,
    "end": 110,
    "range": [
      101,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 111,
    "end": 116,
    "range": [
      111,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 124,
    "end": 127,
    "range": [
      124,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 138,
    "end": 145,
    "range": [
      138,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 152,
    "end": 157,
    "range": [
      152,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 160,
    "end": 164,
    "range": [
      160,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 169,
    "end": 179,
    "range": [
      169,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187,
    "range": [
      181,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 191,
    "end": 193,
    "range": [
      191,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 206,
    "end": 212,
    "range": [
      206,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 214,
    "end": 220,
    "range": [
      214,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "annotations",
    "start": 224,
    "end": 235,
    "range": [
      224,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 238,
    "end": 244,
    "range": [
      238,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 245,
    "end": 249,
    "range": [
      245,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 254,
    "end": 256,
    "range": [
      254,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 257,
    "end": 262,
    "range": [
      257,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "OutputFrom",
    "start": 263,
    "end": 273,
    "range": [
      263,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 285,
    "end": 289,
    "range": [
      285,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 290,
    "end": 294,
    "range": [
      290,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "TOutput",
    "start": 295,
    "end": 302,
    "range": [
      295,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "_TOutput",
    "start": 310,
    "end": 318,
    "range": [
      310,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "TOutput",
    "start": 320,
    "end": 327,
    "range": [
      320,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "OutputFrom",
    "start": 338,
    "end": 348,
    "range": [
      338,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "TFields",
    "start": 349,
    "end": 356,
    "range": [
      349,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 367,
    "end": 369,
    "range": [
      367,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 370,
    "end": 375,
    "range": [
      370,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "TFields",
    "start": 376,
    "end": 383,
    "range": [
      376,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "String",
    "value": "\"_TOutput\"",
    "start": 386,
    "end": 396,
    "range": [
      386,
      396
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 397,
    "end": 404,
    "range": [
      397,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 405,
    "end": 410,
    "range": [
      405,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "TFields",
    "start": 411,
    "end": 418,
    "range": [
      411,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "TFields",
    "start": 428,
    "end": 435,
    "range": [
      428,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "String",
    "value": "\"_TOutput\"",
    "start": 439,
    "end": 449,
    "range": [
      439,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 457,
    "end": 462,
    "range": [
      457,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 468,
    "end": 475,
    "range": [
      468,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 476,
    "end": 484,
    "range": [
      476,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 485,
    "end": 491,
    "range": [
      485,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 495,
    "end": 499,
    "range": [
      495,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 500,
    "end": 506,
    "range": [
      500,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 510,
    "end": 516,
    "range": [
      510,
      516
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 517,
    "end": 522,
    "range": [
      517,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 525,
    "end": 532,
    "range": [
      525,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 533,
    "end": 538,
    "range": [
      533,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 542,
    "end": 545,
    "range": [
      542,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 555,
    "end": 561,
    "range": [
      555,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "pretty",
    "start": 573,
    "end": 579,
    "range": [
      573,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 585,
    "end": 587,
    "range": [
      585,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 588,
    "end": 592,
    "range": [
      588,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 593,
    "end": 602,
    "range": [
      593,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  }
]
```
