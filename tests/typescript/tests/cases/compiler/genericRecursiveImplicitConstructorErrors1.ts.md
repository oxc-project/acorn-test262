__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 456,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 454,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 454,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 32,
          "decorators": [],
          "name": "TypeScript",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 33,
          "end": 454,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 37,
              "end": 57,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 53,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 54,
                "end": 57,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 60,
              "end": 244,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 66,
                "end": 85,
                "decorators": [],
                "name": "PullSignatureSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 86,
                "end": 93,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 87,
                    "end": 88,
                    "name": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 89,
                    "end": 90,
                    "name": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 91,
                    "end": 92,
                    "name": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": {
                "type": "Identifier",
                "start": 102,
                "end": 112,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 113,
                "end": 244,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 117,
                    "end": 240,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 141,
                      "decorators": [],
                      "name": "addSpecialization",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 141,
                      "end": 240,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 141,
                        "end": 148,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 142,
                            "end": 143,
                            "name": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 144,
                            "end": 145,
                            "name": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 146,
                            "end": 147,
                            "name": {
                              "type": "Identifier",
                              "start": 146,
                              "end": 147,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 149,
                          "end": 186,
                          "decorators": [],
                          "name": "signature",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 158,
                            "end": 186,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 160,
                              "end": 186,
                              "typeName": {
                                "type": "Identifier",
                                "start": 160,
                                "end": 179,
                                "decorators": [],
                                "name": "PullSignatureSymbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 179,
                                "end": 186,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 180,
                                    "end": 181,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 180,
                                      "end": 181,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 182,
                                    "end": 183,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 182,
                                      "end": 183,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 184,
                                    "end": 185,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 184,
                                      "end": 185,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 188,
                          "end": 232,
                          "decorators": [],
                          "name": "typeArguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 232,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 203,
                              "end": 232,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 203,
                                "end": 230,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 203,
                                  "end": 217,
                                  "decorators": [],
                                  "name": "PullTypeSymbol",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 217,
                                  "end": 230,
                                  "params": [
                                    {
                                      "type": "TSAnyKeyword",
                                      "start": 218,
                                      "end": 221
                                    },
                                    {
                                      "type": "TSAnyKeyword",
                                      "start": 222,
                                      "end": 225
                                    },
                                    {
                                      "type": "TSAnyKeyword",
                                      "start": 226,
                                      "end": 229
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 233,
                        "end": 239,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 235,
                          "end": 239
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 247,
              "end": 383,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 253,
                "end": 267,
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 268,
                "end": 275,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 269,
                    "end": 270,
                    "name": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 270,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 271,
                    "end": 272,
                    "name": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 273,
                    "end": 274,
                    "name": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": {
                "type": "Identifier",
                "start": 284,
                "end": 294,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 295,
                "end": 383,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 301,
                    "end": 379,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 325,
                      "decorators": [],
                      "name": "findTypeParameter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 325,
                      "end": 379,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 325,
                        "end": 332,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 326,
                            "end": 327,
                            "name": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 327,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 328,
                            "end": 329,
                            "name": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 329,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 330,
                            "end": 331,
                            "name": {
                              "type": "Identifier",
                              "start": 330,
                              "end": 331,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 333,
                          "end": 345,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 337,
                            "end": 345,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 339,
                              "end": 345
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 346,
                        "end": 378,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 348,
                          "end": 378,
                          "typeName": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 371,
                            "decorators": [],
                            "name": "PullTypeParameterSymbol",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 371,
                            "end": 378,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 372,
                                "end": 373,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 372,
                                  "end": 373,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 374,
                                "end": 375,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 374,
                                  "end": 375,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 376,
                                "end": 377,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 376,
                                  "end": 377,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            {
              "type": "ClassDeclaration",
              "start": 386,
              "end": 452,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 392,
                "end": 415,
                "decorators": [],
                "name": "PullTypeParameterSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 416,
                "end": 423,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 417,
                    "end": 418,
                    "name": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 419,
                    "end": 420,
                    "name": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 420,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 421,
                    "end": 422,
                    "name": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 422,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": {
                "type": "Identifier",
                "start": 432,
                "end": 446,
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 447,
                "end": 452,
                "body": []
              },
              "abstract": false,
              "declare": false
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
