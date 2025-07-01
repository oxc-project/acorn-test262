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
