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
        "name": "RelationFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
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
                  "start": 32,
                  "end": 33
                },
                "typeArguments": null,
                "start": 32,
                "end": 33
              },
              "start": 30,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 34
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "typeArguments": null,
                  "start": 40,
                  "end": 41
                },
                "start": 40,
                "end": 43
              },
              "start": 38,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 44
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 50,
                "end": 53
              },
              "start": 48,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 47,
            "end": 54
          }
        ],
        "start": 25,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Name",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RelationFields",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 89
          },
          "typeArguments": null,
          "start": 75,
          "end": 89
        },
        "start": 69,
        "end": 89
      },
      "declare": false,
      "start": 57,
      "end": 90
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ShouldA",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 103
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "RF",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 106
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RelationFields",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 129
              },
              "typeArguments": null,
              "start": 115,
              "end": 129
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 104,
            "end": 129
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Name",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 145
              },
              "typeArguments": null,
              "start": 141,
              "end": 145
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 145
          }
        ],
        "start": 103,
        "end": 146
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RF",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 151
            },
            "typeArguments": null,
            "start": 149,
            "end": 151
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "typeArguments": null,
            "start": 152,
            "end": 153
          },
          "start": 149,
          "end": 154
        },
        "extendsType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "typeArguments": null,
            "start": 163,
            "end": 164
          },
          "start": 163,
          "end": 166
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
                "name": "RF",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 173
              },
              "typeArguments": null,
              "start": 171,
              "end": 173
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "typeArguments": null,
              "start": 174,
              "end": 175
            },
            "start": 171,
            "end": 176
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 177,
              "end": 178
            },
            "start": 177,
            "end": 178
          },
          "start": 171,
          "end": 179
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 184,
          "end": 189
        },
        "start": 149,
        "end": 189
      },
      "declare": false,
      "start": 91,
      "end": 190
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 199
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
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
                  "start": 207,
                  "end": 208
                },
                "typeArguments": null,
                "start": 207,
                "end": 208
              },
              "start": 205,
              "end": 208
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 204,
            "end": 209
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 216
                  },
                  "typeArguments": null,
                  "start": 215,
                  "end": 216
                },
                "start": 215,
                "end": 218
              },
              "start": 213,
              "end": 218
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 212,
            "end": 219
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 226
                  },
                  "typeArguments": null,
                  "start": 225,
                  "end": 226
                },
                "start": 225,
                "end": 228
              },
              "start": 223,
              "end": 228
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 222,
            "end": 229
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "whereRelated",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 245
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
                      "name": "RF",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 317
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RelationFields",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 340
                      },
                      "typeArguments": null,
                      "start": 326,
                      "end": 340
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RelationFields",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 343,
                        "end": 357
                      },
                      "typeArguments": null,
                      "start": 343,
                      "end": 357
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 315,
                    "end": 357
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 363,
                      "end": 364
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 377
                      },
                      "typeArguments": null,
                      "start": 373,
                      "end": 377
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 384
                      },
                      "typeArguments": null,
                      "start": 380,
                      "end": 384
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 363,
                    "end": 384
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 392
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 402
                      },
                      "typeArguments": null,
                      "start": 401,
                      "end": 402
                    },
                    "default": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 405,
                            "end": 407
                          },
                          "typeArguments": null,
                          "start": 405,
                          "end": 407
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 408,
                            "end": 409
                          },
                          "typeArguments": null,
                          "start": 408,
                          "end": 409
                        },
                        "start": 405,
                        "end": 410
                      },
                      "extendsType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 419,
                            "end": 420
                          },
                          "typeArguments": null,
                          "start": 419,
                          "end": 420
                        },
                        "start": 419,
                        "end": 422
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
                              "name": "RF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 425,
                              "end": 427
                            },
                            "typeArguments": null,
                            "start": 425,
                            "end": 427
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 428,
                              "end": 429
                            },
                            "typeArguments": null,
                            "start": 428,
                            "end": 429
                          },
                          "start": 425,
                          "end": 430
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 431,
                            "end": 432
                          },
                          "start": 431,
                          "end": 432
                        },
                        "start": 425,
                        "end": 433
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 436,
                        "end": 441
                      },
                      "start": 405,
                      "end": 441
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 390,
                    "end": 441
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 449
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 459
                      },
                      "typeArguments": null,
                      "start": 458,
                      "end": 459
                    },
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ShouldA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 462,
                        "end": 469
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 470,
                              "end": 472
                            },
                            "typeArguments": null,
                            "start": 470,
                            "end": 472
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 474,
                              "end": 475
                            },
                            "typeArguments": null,
                            "start": 474,
                            "end": 475
                          }
                        ],
                        "start": 469,
                        "end": 476
                      },
                      "start": 462,
                      "end": 476
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 447,
                    "end": 476
                  }
                ],
                "start": 245,
                "end": 480
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 484,
                  "end": 490
                },
                "start": 482,
                "end": 490
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 504,
                      "end": 505
                    },
                    "start": 497,
                    "end": 506
                  }
                ],
                "start": 491,
                "end": 510
              },
              "expression": false,
              "start": 245,
              "end": 510
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 233,
            "end": 510
          }
        ],
        "start": 200,
        "end": 512
      },
      "abstract": false,
      "declare": false,
      "start": 192,
      "end": 512
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 512
}
```
