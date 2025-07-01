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
        "name": "PartialDeep",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 25
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
              "start": 35,
              "end": 36
            },
            "typeArguments": null,
            "start": 35,
            "end": 36
          },
          "start": 29,
          "end": 36
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PartialDeep",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 51
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 53
                  },
                  "typeArguments": null,
                  "start": 52,
                  "end": 53
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 55
                  },
                  "typeArguments": null,
                  "start": 54,
                  "end": 55
                },
                "start": 52,
                "end": 56
              }
            ],
            "start": 51,
            "end": 57
          },
          "start": 40,
          "end": 57
        },
        "optional": true,
        "readonly": null,
        "start": 22,
        "end": 58
      },
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Many",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 69
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
              "start": 70,
              "end": 71
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 71
          }
        ],
        "start": 69,
        "end": 72
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "typeArguments": null,
            "start": 75,
            "end": 76
          },
          {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "typeArguments": null,
                "start": 88,
                "end": 89
              },
              "start": 88,
              "end": 91
            },
            "start": 79,
            "end": 91
          }
        ],
        "start": 75,
        "end": 91
      },
      "declare": false,
      "start": 60,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 114
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
              "start": 115,
              "end": 116
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 115,
            "end": 116
          }
        ],
        "start": 114,
        "end": 117
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sortBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 130
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iteratees",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 143
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Many",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 149
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PartialDeep",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 150,
                              "end": 161
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 162,
                                    "end": 163
                                  },
                                  "typeArguments": null,
                                  "start": 162,
                                  "end": 163
                                }
                              ],
                              "start": 161,
                              "end": 164
                            },
                            "start": 150,
                            "end": 164
                          }
                        ],
                        "start": 149,
                        "end": 165
                      },
                      "start": 145,
                      "end": 165
                    },
                    "start": 145,
                    "end": 167
                  },
                  "start": 143,
                  "end": 167
                },
                "value": null,
                "start": 131,
                "end": 167
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 180
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 181,
                        "end": 182
                      },
                      "typeArguments": null,
                      "start": 181,
                      "end": 182
                    }
                  ],
                  "start": 180,
                  "end": 183
                },
                "start": 170,
                "end": 183
              },
              "start": 168,
              "end": 183
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 124,
            "end": 184
          }
        ],
        "start": 118,
        "end": 186
      },
      "declare": false,
      "start": 94,
      "end": 186
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 207
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 209,
                            "end": 210
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 212,
                              "end": 218
                            },
                            "start": 210,
                            "end": 218
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 209,
                          "end": 218
                        }
                      ],
                      "start": 208,
                      "end": 219
                    }
                  ],
                  "start": 207,
                  "end": 220
                },
                "start": 197,
                "end": 220
              },
              "start": 195,
              "end": 220
            },
            "start": 194,
            "end": 220
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 224,
                "end": 228
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 232,
                "end": 235
              },
              "start": 224,
              "end": 235
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Collection",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 249
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 252
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 254,
                            "end": 260
                          },
                          "start": 252,
                          "end": 260
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 251,
                        "end": 261
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
                          "start": 262,
                          "end": 263
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 265,
                            "end": 271
                          },
                          "start": 263,
                          "end": 271
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 262,
                        "end": 271
                      }
                    ],
                    "start": 250,
                    "end": 272
                  }
                ],
                "start": 249,
                "end": 273
              },
              "start": 239,
              "end": 273
            },
            "start": 224,
            "end": 273
          },
          "definite": false,
          "start": 194,
          "end": 274
        }
      ],
      "declare": false,
      "start": 188,
      "end": 275
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 277,
      "end": 287
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 287
}
```
