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
          "name": "SelectorMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
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
                "start": 24,
                "end": 25
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 40
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 53,
                            "end": 59
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 61,
                                "end": 68
                              },
                              "start": 61,
                              "end": 70
                            },
                            "start": 59,
                            "end": 70
                          },
                          "value": null,
                          "start": 50,
                          "end": 70
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 75,
                          "end": 82
                        },
                        "start": 72,
                        "end": 82
                      },
                      "start": 49,
                      "end": 82
                    }
                  ],
                  "start": 40,
                  "end": 83
                },
                "start": 34,
                "end": 83
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 83
            }
          ],
          "start": 23,
          "end": 84
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 97
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
                "start": 107,
                "end": 108
              },
              "typeArguments": null,
              "start": 107,
              "end": 108
            },
            "start": 101,
            "end": 108
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
                "start": 111,
                "end": 112
              },
              "typeArguments": null,
              "start": 111,
              "end": 112
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 116
              },
              "typeArguments": null,
              "start": 113,
              "end": 116
            },
            "start": 111,
            "end": 117
          },
          "optional": false,
          "readonly": null,
          "start": 87,
          "end": 120
        },
        "declare": false,
        "start": 7,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 122
}
```
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
          "name": "SelectorMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
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
                "start": 24,
                "end": 25
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 40
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 53,
                            "end": 59
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSUnknownKeyword",
                                "start": 61,
                                "end": 68
                              },
                              "start": 61,
                              "end": 70
                            },
                            "start": 59,
                            "end": 70
                          },
                          "value": null,
                          "start": 50,
                          "end": 70
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 75,
                          "end": 82
                        },
                        "start": 72,
                        "end": 82
                      },
                      "start": 49,
                      "end": 82
                    }
                  ],
                  "start": 40,
                  "end": 83
                },
                "start": 34,
                "end": 83
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 83
            }
          ],
          "start": 23,
          "end": 84
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 97
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
                "start": 107,
                "end": 108
              },
              "typeArguments": null,
              "start": 107,
              "end": 108
            },
            "start": 101,
            "end": 108
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
                "start": 111,
                "end": 112
              },
              "typeArguments": null,
              "start": 111,
              "end": 112
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 116
              },
              "typeArguments": null,
              "start": 113,
              "end": 116
            },
            "start": 111,
            "end": 117
          },
          "optional": false,
          "readonly": null,
          "start": 87,
          "end": 120
        },
        "declare": false,
        "start": 7,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 121
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
              "name": "value2",
              "optional": false,
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
                        "name": "sliceSelectors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 172
                      },
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
                                  "name": "FuncMap",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 175,
                                  "end": 182
                                },
                                "constraint": {
                                  "type": "TSImportType",
                                  "source": {
                                    "type": "Literal",
                                    "value": "./types",
                                    "raw": "'./types'",
                                    "start": 198,
                                    "end": 207
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SelectorMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 209,
                                    "end": 220
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 221,
                                          "end": 228
                                        },
                                        "typeArguments": null,
                                        "start": 221,
                                        "end": 228
                                      }
                                    ],
                                    "start": 220,
                                    "end": 229
                                  },
                                  "start": 191,
                                  "end": 229
                                },
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 175,
                                "end": 229
                              }
                            ],
                            "start": 174,
                            "end": 230
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "selectorsBySlice",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 249,
                                    "end": 256
                                  },
                                  "typeArguments": null,
                                  "start": 249,
                                  "end": 256
                                },
                                "start": 247,
                                "end": 256
                              },
                              "start": 231,
                              "end": 256
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSMappedType",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 264,
                                "end": 265
                              },
                              "constraint": {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 275,
                                    "end": 282
                                  },
                                  "typeArguments": null,
                                  "start": 275,
                                  "end": 282
                                },
                                "start": 269,
                                "end": 282
                              },
                              "nameType": null,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 285,
                                  "end": 295
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
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 296,
                                          "end": 303
                                        },
                                        "typeArguments": null,
                                        "start": 296,
                                        "end": 303
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "P",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 304,
                                          "end": 305
                                        },
                                        "typeArguments": null,
                                        "start": 304,
                                        "end": 305
                                      },
                                      "start": 296,
                                      "end": 306
                                    }
                                  ],
                                  "start": 295,
                                  "end": 307
                                },
                                "start": 285,
                                "end": 307
                              },
                              "optional": false,
                              "readonly": null,
                              "start": 261,
                              "end": 309
                            },
                            "start": 258,
                            "end": 309
                          },
                          "start": 174,
                          "end": 309
                        },
                        "start": 172,
                        "end": 309
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 158,
                      "end": 310
                    }
                  ],
                  "start": 152,
                  "end": 312
                },
                "start": 150,
                "end": 312
              },
              "start": 144,
              "end": 312
            },
            "init": null,
            "definite": false,
            "start": 144,
            "end": 312
          }
        ],
        "declare": true,
        "start": 130,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 123,
      "end": 313
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
              "name": "value3",
              "optional": false,
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
                        "name": "sliceSelectors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 350,
                        "end": 364
                      },
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
                                  "name": "FuncMap",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 367,
                                  "end": 374
                                },
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SelectorMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 383,
                                    "end": 394
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 395,
                                          "end": 402
                                        },
                                        "typeArguments": null,
                                        "start": 395,
                                        "end": 402
                                      }
                                    ],
                                    "start": 394,
                                    "end": 403
                                  },
                                  "start": 383,
                                  "end": 403
                                },
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 367,
                                "end": 403
                              }
                            ],
                            "start": 366,
                            "end": 404
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "selectorsBySlice",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 423,
                                    "end": 430
                                  },
                                  "typeArguments": null,
                                  "start": 423,
                                  "end": 430
                                },
                                "start": 421,
                                "end": 430
                              },
                              "start": 405,
                              "end": 430
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSMappedType",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 438,
                                "end": 439
                              },
                              "constraint": {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "FuncMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 449,
                                    "end": 456
                                  },
                                  "typeArguments": null,
                                  "start": 449,
                                  "end": 456
                                },
                                "start": 443,
                                "end": 456
                              },
                              "nameType": null,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameters",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 459,
                                  "end": 469
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
                                          "name": "FuncMap",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 470,
                                          "end": 477
                                        },
                                        "typeArguments": null,
                                        "start": 470,
                                        "end": 477
                                      },
                                      "indexType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "P",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 478,
                                          "end": 479
                                        },
                                        "typeArguments": null,
                                        "start": 478,
                                        "end": 479
                                      },
                                      "start": 470,
                                      "end": 480
                                    }
                                  ],
                                  "start": 469,
                                  "end": 481
                                },
                                "start": 459,
                                "end": 481
                              },
                              "optional": false,
                              "readonly": null,
                              "start": 435,
                              "end": 483
                            },
                            "start": 432,
                            "end": 483
                          },
                          "start": 366,
                          "end": 483
                        },
                        "start": 364,
                        "end": 483
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 350,
                      "end": 484
                    }
                  ],
                  "start": 344,
                  "end": 486
                },
                "start": 342,
                "end": 486
              },
              "start": 336,
              "end": 486
            },
            "init": null,
            "definite": false,
            "start": 336,
            "end": 486
          }
        ],
        "declare": true,
        "start": 322,
        "end": 487
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 315,
      "end": 487
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 488
}
```
