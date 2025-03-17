__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 457,
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
          "name": "TypeScript",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 53,
                "name": "PullSymbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 54,
                "end": 57,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 60,
              "end": 244,
              "id": {
                "type": "Identifier",
                "start": 66,
                "end": 85,
                "name": "PullSignatureSymbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 102,
                "end": 112,
                "name": "PullSymbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 113,
                "end": 244,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 117,
                    "end": 240,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 141,
                      "name": "addSpecialization",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 141,
                      "end": 240,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 149,
                          "end": 186,
                          "name": "signature",
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
                                "name": "PullSignatureSymbol",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                      "name": "B",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                      "name": "C",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 188,
                          "end": 232,
                          "name": "typeArguments",
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
                                  "name": "PullTypeSymbol",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
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
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 233,
                        "end": 239,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 235,
                          "end": 239
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 247,
              "end": 383,
              "id": {
                "type": "Identifier",
                "start": 253,
                "end": 267,
                "name": "PullTypeSymbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 284,
                "end": 294,
                "name": "PullSymbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 295,
                "end": 383,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 301,
                    "end": 379,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 325,
                      "name": "findTypeParameter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 325,
                      "end": 379,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 333,
                          "end": 345,
                          "name": "name",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 337,
                            "end": 345,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 339,
                              "end": 345
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
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
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
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
                            "name": "PullTypeParameterSymbol",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                  "name": "C",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            {
              "type": "ClassDeclaration",
              "start": 386,
              "end": 452,
              "id": {
                "type": "Identifier",
                "start": 392,
                "end": 415,
                "name": "PullTypeParameterSymbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 432,
                "end": 446,
                "name": "PullTypeSymbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 447,
                "end": 452,
                "body": []
              },
              "decorators": [],
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          ]
        },
        "kind": "module",
        "declare": true,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
