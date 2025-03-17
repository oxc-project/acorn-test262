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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 34,
        "end": 65,
        "typeName": {
          "type": "Identifier",
          "start": 34,
          "end": 40,
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 80,
        "name": "TypeMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 95,
                "name": "Enum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 99,
        "end": 160,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 102,
          "end": 119,
          "name": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "name": "key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "start": 109,
            "end": 119,
            "objectType": {
              "type": "TSTypeReference",
              "start": 109,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeOperator",
              "start": 111,
              "end": 118,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
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
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSIndexedAccessType",
          "start": 109,
          "end": 119,
          "objectType": {
            "type": "TSTypeReference",
            "start": 109,
            "end": 110,
            "typeName": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 111,
            "end": 118,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 117,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 102,
          "end": 105,
          "name": "key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 163,
      "end": 383,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 179,
        "name": "BufferPool",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 383,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 381,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 233,
              "name": "setArray2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 233,
              "end": 381,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 256,
                  "end": 260,
                  "name": "_",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 257,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 259,
                      "end": 260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 260,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 298,
                  "name": "array",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 298,
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 276,
                        "name": "Extract",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 276,
                        "end": 298,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 277,
                            "end": 281,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 277,
                              "end": 278,
                              "typeName": {
                                "type": "Identifier",
                                "start": 277,
                                "end": 278,
                                "name": "M",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 279,
                              "end": 280,
                              "typeName": {
                                "type": "Identifier",
                                "start": 279,
                                "end": 280,
                                "name": "K",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 283,
                            "end": 297,
                            "typeName": {
                              "type": "Identifier",
                              "start": 283,
                              "end": 292,
                              "name": "ArrayLike",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                            }
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 300,
                "end": 381,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 310,
                    "end": 323,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 310,
                      "end": 322,
                      "object": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 315,
                        "name": "array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 322,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 233,
                "end": 255,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 234,
                    "end": 254,
                    "name": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 235,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "start": 244,
                      "end": 254,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 244,
                        "end": 245,
                        "typeName": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 245,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeOperator",
                        "start": 246,
                        "end": 253,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 252,
                          "end": 253,
                          "typeName": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 253,
                            "name": "E",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 179,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 180,
            "end": 194,
            "name": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 190,
              "end": 194,
              "typeName": {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "name": "Enum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 196,
            "end": 216,
            "name": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 206,
              "end": 216,
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 213,
                "name": "TypeMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 213,
                "end": 216,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 214,
                    "end": 215,
                    "typeName": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 215,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
