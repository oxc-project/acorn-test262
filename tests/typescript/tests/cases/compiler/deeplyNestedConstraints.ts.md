__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
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
              "type": "TSUnionType",
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
              ],
              "start": 49,
              "end": 64
            }
          ],
          "start": 40,
          "end": 65
        },
        "start": 34,
        "end": 65
      },
      "declare": false,
      "start": 22,
      "end": 66
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 80
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 95
              },
              "typeArguments": null,
              "start": 91,
              "end": 95
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 95
          }
        ],
        "start": 80,
        "end": 96
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 105
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "typeArguments": null,
            "start": 109,
            "end": 110
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "typeArguments": null,
              "start": 117,
              "end": 118
            },
            "start": 111,
            "end": 118
          },
          "start": 109,
          "end": 119
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
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
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 150,
                "end": 156
              },
              "start": 150,
              "end": 158
            }
          ],
          "start": 122,
          "end": 158
        },
        "optional": false,
        "readonly": null,
        "start": 99,
        "end": 160
      },
      "declare": false,
      "start": 68,
      "end": 161
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BufferPool",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 179
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 194
              },
              "typeArguments": null,
              "start": 190,
              "end": 194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 180,
            "end": 194
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 213
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 215
                    },
                    "typeArguments": null,
                    "start": 214,
                    "end": 215
                  }
                ],
                "start": 213,
                "end": 216
              },
              "start": 206,
              "end": 216
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 196,
            "end": 216
          }
        ],
        "start": 179,
        "end": 217
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setArray2",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 233
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 235
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 245
                        },
                        "typeArguments": null,
                        "start": 244,
                        "end": 245
                      },
                      "indexType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 252,
                            "end": 253
                          },
                          "typeArguments": null,
                          "start": 252,
                          "end": 253
                        },
                        "start": 246,
                        "end": 253
                      },
                      "start": 244,
                      "end": 254
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 234,
                    "end": 254
                  }
                ],
                "start": 233,
                "end": 255
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 260
                      },
                      "typeArguments": null,
                      "start": 259,
                      "end": 260
                    },
                    "start": 257,
                    "end": 260
                  },
                  "start": 256,
                  "end": 260
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 276
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
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 277,
                                "end": 278
                              },
                              "typeArguments": null,
                              "start": 277,
                              "end": 278
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 279,
                                "end": 280
                              },
                              "typeArguments": null,
                              "start": 279,
                              "end": 280
                            },
                            "start": 277,
                            "end": 281
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ArrayLike",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 283,
                              "end": 292
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 293,
                                  "end": 296
                                }
                              ],
                              "start": 292,
                              "end": 297
                            },
                            "start": 283,
                            "end": 297
                          }
                        ],
                        "start": 276,
                        "end": 298
                      },
                      "start": 269,
                      "end": 298
                    },
                    "start": 267,
                    "end": 298
                  },
                  "start": 262,
                  "end": 298
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 315
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 316,
                        "end": 322
                      },
                      "optional": false,
                      "computed": false,
                      "start": 310,
                      "end": 322
                    },
                    "directive": null,
                    "start": 310,
                    "end": 323
                  }
                ],
                "start": 300,
                "end": 381
              },
              "expression": false,
              "start": 233,
              "end": 381
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 224,
            "end": 381
          }
        ],
        "start": 218,
        "end": 383
      },
      "abstract": false,
      "declare": false,
      "start": 163,
      "end": 383
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 383
}
```
