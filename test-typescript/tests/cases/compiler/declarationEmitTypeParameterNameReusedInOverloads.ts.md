declarationEmitTypeParameterNameReusedInOverloads.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 389,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 34,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 34,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 20,
              "end": 32,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 20,
                "end": 23,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 25,
                  "end": 31
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 17,
          "decorators": [],
          "name": "Base",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 42,
        "end": 85,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 69,
          "end": 85,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 71,
              "end": 83,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 74,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 74,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 76,
                  "end": 82
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 55,
          "decorators": [],
          "name": "Derived",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 64,
          "end": 68,
          "decorators": [],
          "name": "Base",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 86,
      "end": 140,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 93,
        "end": 140,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 124,
          "end": 140,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 126,
              "end": 138,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 126,
                "end": 129,
                "decorators": [],
                "name": "baz",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 129,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 131,
                  "end": 137
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 99,
          "end": 107,
          "decorators": [],
          "name": "Derived2",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 116,
          "end": 123,
          "decorators": [],
          "name": "Derived",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 142,
      "end": 388,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 149,
        "end": 388,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 154,
          "end": 157,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 160,
          "end": 388,
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 166,
              "end": 271,
              "params": [
                {
                  "type": "Identifier",
                  "start": 171,
                  "end": 262,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 172,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 174,
                      "end": 262,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 184,
                          "end": 217,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 208,
                              "end": 212,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 209,
                                "end": 212,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 211,
                                  "end": 212,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 211,
                                    "end": 212,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 213,
                            "end": 216,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 215,
                              "end": 216,
                              "typeName": {
                                "type": "Identifier",
                                "start": 215,
                                "end": 216,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 188,
                            "end": 207,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 189,
                                "end": 206,
                                "const": false,
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 199,
                                  "end": 206,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 199,
                                    "end": 206,
                                    "decorators": [],
                                    "name": "Derived",
                                    "optional": false
                                  }
                                },
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 189,
                                  "end": 190,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                },
                                "out": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 226,
                          "end": 256,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 247,
                              "end": 251,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 248,
                                "end": 251,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 250,
                                  "end": 251,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 250,
                                    "end": 251,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 252,
                            "end": 255,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 254,
                              "end": 255,
                              "typeName": {
                                "type": "Identifier",
                                "start": 254,
                                "end": 255,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 230,
                            "end": 246,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 231,
                                "end": 245,
                                "const": false,
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 241,
                                  "end": 245,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 241,
                                    "end": 245,
                                    "decorators": [],
                                    "name": "Base",
                                    "optional": false
                                  }
                                },
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 231,
                                  "end": 232,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                },
                                "out": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 263,
                "end": 270,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 265,
                  "end": 270,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 265,
                    "end": 268
                  }
                }
              }
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 276,
              "end": 386,
              "params": [
                {
                  "type": "Identifier",
                  "start": 281,
                  "end": 377,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 282,
                    "end": 377,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 284,
                      "end": 377,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 294,
                          "end": 328,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 319,
                              "end": 323,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 320,
                                "end": 323,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 322,
                                  "end": 323,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 322,
                                    "end": 323,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 324,
                            "end": 327,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 326,
                              "end": 327,
                              "typeName": {
                                "type": "Identifier",
                                "start": 326,
                                "end": 327,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 298,
                            "end": 318,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 299,
                                "end": 317,
                                "const": false,
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 309,
                                  "end": 317,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 309,
                                    "end": 317,
                                    "decorators": [],
                                    "name": "Derived2",
                                    "optional": false
                                  }
                                },
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 299,
                                  "end": 300,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                },
                                "out": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 341,
                          "end": 371,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 362,
                              "end": 366,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 363,
                                "end": 366,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 365,
                                  "end": 366,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 365,
                                    "end": 366,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 367,
                            "end": 370,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 369,
                              "end": 370,
                              "typeName": {
                                "type": "Identifier",
                                "start": 369,
                                "end": 370,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 345,
                            "end": 361,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 346,
                                "end": 360,
                                "const": false,
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 356,
                                  "end": 360,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 356,
                                    "end": 360,
                                    "decorators": [],
                                    "name": "Base",
                                    "optional": false
                                  }
                                },
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 346,
                                  "end": 347,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                },
                                "out": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 378,
                "end": 385,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 380,
                  "end": 385,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 380,
                    "end": 383
                  }
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
