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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 454,
        "body": {
          "type": "TSModuleBlock",
          "start": 33,
          "end": 454,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 37,
              "end": 57,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 54,
                "end": 57,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 53,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            {
              "type": "ClassDeclaration",
              "start": 60,
              "end": 244,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 113,
                "end": 244,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 117,
                    "end": 240,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 141,
                      "decorators": [],
                      "name": "addSpecialization",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 141,
                      "end": 240,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                                      "optional": false
                                    }
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
                                      "optional": false
                                    }
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
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 160,
                                "end": 179,
                                "decorators": [],
                                "name": "PullSignatureSymbol",
                                "optional": false
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
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 203,
                                  "end": 217,
                                  "decorators": [],
                                  "name": "PullTypeSymbol",
                                  "optional": false
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
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 141,
                        "end": 148,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 142,
                            "end": 143,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 144,
                            "end": 145,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 146,
                            "end": 147,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 146,
                              "end": 147,
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 66,
                "end": 85,
                "decorators": [],
                "name": "PullSignatureSymbol",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 102,
                "end": 112,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false
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
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 89,
                    "end": 90,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 91,
                    "end": 92,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "ClassDeclaration",
              "start": 247,
              "end": 383,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 295,
                "end": 383,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 301,
                    "end": 379,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 325,
                      "decorators": [],
                      "name": "findTypeParameter",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 325,
                      "end": 379,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                                  "optional": false
                                }
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
                                  "optional": false
                                }
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
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 348,
                            "end": 371,
                            "decorators": [],
                            "name": "PullTypeParameterSymbol",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 325,
                        "end": 332,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 326,
                            "end": 327,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 327,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 328,
                            "end": 329,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 329,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 330,
                            "end": 331,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 330,
                              "end": 331,
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 253,
                "end": 267,
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 284,
                "end": 294,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false
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
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 269,
                      "end": 270,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 271,
                    "end": 272,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 273,
                    "end": 274,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "ClassDeclaration",
              "start": 386,
              "end": 452,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 447,
                "end": 452,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 392,
                "end": 415,
                "decorators": [],
                "name": "PullTypeParameterSymbol",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 432,
                "end": 446,
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false
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
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 419,
                    "end": 420,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 420,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 421,
                    "end": 422,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 422,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": true,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 32,
          "decorators": [],
          "name": "TypeScript",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
