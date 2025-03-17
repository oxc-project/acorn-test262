__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 384,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 66,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 34,
        "end": 65,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 40,
          "end": 65,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            },
            {
              "type": "TSUnionType",
              "start": 49,
              "end": 64,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 49,
                  "end": 55
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 34,
          "end": 40,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 161,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 80,
        "decorators": [],
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 99,
        "end": 160,
        "constraint": {
          "type": "TSIndexedAccessType",
          "start": 109,
          "end": 119,
          "indexType": {
            "type": "TSTypeOperator",
            "start": 111,
            "end": 118,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 117,
              "end": 118,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 109,
            "end": 110,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 102,
          "end": 105,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 122,
          "end": 158,
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 122,
              "end": 128
            },
            {
              "type": "TSBooleanKeyword",
              "start": 131,
              "end": 138
            },
            {
              "type": "TSStringKeyword",
              "start": 141,
              "end": 147
            },
            {
              "type": "TSArrayType",
              "start": 150,
              "end": 158,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 150,
                "end": 156
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 95,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 95,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 95,
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 383,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 383,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 381,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 233,
              "decorators": [],
              "name": "setArray2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 233,
              "end": 381,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 300,
                "end": 381,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 310,
                    "end": 323,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 310,
                      "end": 322,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 315,
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 322,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 256,
                  "end": 260,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 257,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 259,
                      "end": 260,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 260,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 298,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 298,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 276,
                        "end": 298,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 277,
                            "end": 281,
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 279,
                              "end": 280,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 279,
                                "end": 280,
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 277,
                              "end": 278,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 277,
                                "end": 278,
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 283,
                            "end": 297,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 292,
                              "end": 297,
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 293,
                                  "end": 296
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 283,
                              "end": 292,
                              "decorators": [],
                              "name": "ArrayLike",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 276,
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 233,
                "end": 255,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 234,
                    "end": 254,
                    "const": false,
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "start": 244,
                      "end": 254,
                      "indexType": {
                        "type": "TSTypeOperator",
                        "start": 246,
                        "end": 253,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 252,
                          "end": 253,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 253,
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 244,
                        "end": 245,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 245,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 169,
        "end": 179,
        "decorators": [],
        "name": "BufferPool",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 179,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 180,
            "end": 194,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 190,
              "end": 194,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 196,
            "end": 216,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 206,
              "end": 216,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 213,
                "end": 216,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 214,
                    "end": 215,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 213,
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
