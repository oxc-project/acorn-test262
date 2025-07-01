__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnrollOnHover",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 25
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 36,
                "end": 42
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 26,
              "end": 42
            }
          ],
          "start": 25,
          "end": 43
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "typeArguments": null,
            "start": 46,
            "end": 47
          },
          "extendsType": {
            "type": "TSObjectKeyword",
            "start": 56,
            "end": 62
          },
          "trueType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "typeArguments": null,
                "start": 83,
                "end": 84
              },
              "start": 77,
              "end": 84
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "typeArguments": null,
                "start": 87,
                "end": 88
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 89,
                "end": 90
              },
              "start": 87,
              "end": 91
            },
            "optional": false,
            "readonly": null,
            "start": 69,
            "end": 94
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 101,
            "end": 106
          },
          "start": 46,
          "end": 106
        },
        "declare": false,
        "start": 7,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Schema",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 128
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 137
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 138,
                "end": 144
              },
              {
                "type": "TSUnknownKeyword",
                "start": 146,
                "end": 153
              }
            ],
            "start": 137,
            "end": 154
          },
          "start": 131,
          "end": 154
        },
        "declare": false,
        "start": 117,
        "end": 155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 110,
      "end": 155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 167
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
              "start": 168,
              "end": 169
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 184
              },
              "typeArguments": null,
              "start": 178,
              "end": 184
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 168,
            "end": 184
          }
        ],
        "start": 167,
        "end": 185
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 201
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                },
                "typeArguments": null,
                "start": 204,
                "end": 205
              },
              "start": 202,
              "end": 205
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 193,
            "end": 206
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getRows",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 265
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 282,
                          "end": 283
                        },
                        "typeArguments": null,
                        "start": 282,
                        "end": 283
                      },
                      "start": 276,
                      "end": 283
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 266,
                    "end": 283
                  }
                ],
                "start": 265,
                "end": 284
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 293
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UnrollOnHover",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 307
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Pick",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 308,
                                "end": 312
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
                                      "start": 313,
                                      "end": 314
                                    },
                                    "typeArguments": null,
                                    "start": 313,
                                    "end": 314
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 316,
                                      "end": 317
                                    },
                                    "typeArguments": null,
                                    "start": 316,
                                    "end": 317
                                  }
                                ],
                                "start": 312,
                                "end": 318
                              },
                              "start": 308,
                              "end": 318
                            }
                          ],
                          "start": 307,
                          "end": 319
                        },
                        "start": 294,
                        "end": 319
                      }
                    ],
                    "start": 293,
                    "end": 320
                  },
                  "start": 288,
                  "end": 320
                },
                "start": 286,
                "end": 320
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 338,
                        "end": 342
                      },
                      "start": 338,
                      "end": 343
                    },
                    "start": 331,
                    "end": 343
                  }
                ],
                "start": 321,
                "end": 349
              },
              "expression": false,
              "start": 265,
              "end": 349
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 258,
            "end": 349
          }
        ],
        "start": 187,
        "end": 351
      },
      "abstract": false,
      "declare": false,
      "start": 156,
      "end": 351
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ColumnSelectViewImp",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 378
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
              "start": 379,
              "end": 380
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 395
              },
              "typeArguments": null,
              "start": 389,
              "end": 395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 379,
            "end": 395
          }
        ],
        "start": 378,
        "end": 396
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 410
      },
      "superTypeArguments": {
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
              "start": 411,
              "end": 412
            },
            "typeArguments": null,
            "start": 411,
            "end": 412
          }
        ],
        "start": 410,
        "end": 413
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 414,
        "end": 417
      },
      "abstract": false,
      "declare": false,
      "start": 353,
      "end": 417
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
            "name": "ColumnSelectView1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 450,
                        "end": 451
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 460,
                          "end": 466
                        },
                        "typeArguments": null,
                        "start": 460,
                        "end": 466
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 450,
                      "end": 466
                    }
                  ],
                  "start": 449,
                  "end": 467
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 478
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UnrollOnHover",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 479,
                            "end": 492
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
                                  "start": 493,
                                  "end": 494
                                },
                                "typeArguments": null,
                                "start": 493,
                                "end": 494
                              }
                            ],
                            "start": 492,
                            "end": 495
                          },
                          "start": 479,
                          "end": 495
                        }
                      ],
                      "start": 478,
                      "end": 496
                    },
                    "start": 473,
                    "end": 496
                  },
                  "start": 470,
                  "end": 496
                },
                "start": 445,
                "end": 496
              },
              "start": 443,
              "end": 496
            },
            "start": 426,
            "end": 496
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ColumnSelectViewImp",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 518
          },
          "definite": false,
          "start": 426,
          "end": 518
        }
      ],
      "declare": false,
      "start": 420,
      "end": 519
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
            "name": "ColumnSelectView2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
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
                        "start": 550,
                        "end": 551
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Schema",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 560,
                          "end": 566
                        },
                        "typeArguments": null,
                        "start": 560,
                        "end": 566
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 550,
                      "end": 566
                    }
                  ],
                  "start": 549,
                  "end": 567
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 573,
                      "end": 578
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UnrollOnHover",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 579,
                            "end": 592
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
                                  "start": 593,
                                  "end": 594
                                },
                                "typeArguments": null,
                                "start": 593,
                                "end": 594
                              }
                            ],
                            "start": 592,
                            "end": 595
                          },
                          "start": 579,
                          "end": 595
                        }
                      ],
                      "start": 578,
                      "end": 596
                    },
                    "start": 573,
                    "end": 596
                  },
                  "start": 570,
                  "end": 596
                },
                "start": 545,
                "end": 596
              },
              "start": 543,
              "end": 596
            },
            "start": 526,
            "end": 596
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Table",
            "optional": false,
            "typeAnnotation": null,
            "start": 599,
            "end": 604
          },
          "definite": false,
          "start": 526,
          "end": 604
        }
      ],
      "declare": false,
      "start": 520,
      "end": 605
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 605
}
```
