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
        "name": "AnyFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 29,
                  "end": 32
                },
                "start": 29,
                "end": 34
              },
              "start": 27,
              "end": 34
            },
            "value": null,
            "start": 20,
            "end": 34
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 39,
            "end": 42
          },
          "start": 36,
          "end": 42
        },
        "start": 19,
        "end": 42
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 55
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
              "start": 56,
              "end": 57
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 56,
            "end": 57
          }
        ],
        "start": 55,
        "end": 58
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 71
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 79
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
                      "start": 80,
                      "end": 81
                    },
                    "typeArguments": null,
                    "start": 80,
                    "end": 81
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnyFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 83,
                      "end": 94
                    },
                    "typeArguments": null,
                    "start": 83,
                    "end": 94
                  }
                ],
                "start": 79,
                "end": 95
              },
              "start": 72,
              "end": 95
            }
          ],
          "start": 71,
          "end": 96
        },
        "start": 61,
        "end": 96
      },
      "declare": false,
      "start": 44,
      "end": 97
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 116
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
              "start": 117,
              "end": 118
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 117,
            "end": 118
          }
        ],
        "start": 116,
        "end": 119
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
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 127
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 128,
                    "end": 129
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
                        "start": 144,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 144,
                      "end": 145
                    },
                    "start": 138,
                    "end": 145
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 128,
                  "end": 145
                }
              ],
              "start": 127,
              "end": 146
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "event",
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
                      "start": 154,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 154,
                    "end": 155
                  },
                  "start": 152,
                  "end": 155
                },
                "start": 147,
                "end": 155
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 164
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Params",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 172
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
                              "start": 173,
                              "end": 174
                            },
                            "typeArguments": null,
                            "start": 173,
                            "end": 174
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            },
                            "typeArguments": null,
                            "start": 175,
                            "end": 176
                          },
                          "start": 173,
                          "end": 177
                        }
                      ],
                      "start": 172,
                      "end": 178
                    },
                    "start": 166,
                    "end": 178
                  },
                  "start": 164,
                  "end": 178
                },
                "value": null,
                "start": 157,
                "end": 178
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 181,
                "end": 185
              },
              "start": 179,
              "end": 185
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 123,
            "end": 186
          }
        ],
        "start": 120,
        "end": 188
      },
      "declare": false,
      "start": 99,
      "end": 188
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AWrapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 208
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 215
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 219,
                "end": 223
              },
              "start": 217,
              "end": 223
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 212,
            "end": 224
          }
        ],
        "start": 209,
        "end": 226
      },
      "declare": false,
      "start": 190,
      "end": 226
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
        "start": 234,
        "end": 235
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 242
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapper",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 251
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AWrapped",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 252,
                        "end": 260
                      },
                      "typeArguments": null,
                      "start": 252,
                      "end": 260
                    }
                  ],
                  "start": 251,
                  "end": 261
                },
                "start": 244,
                "end": 261
              },
              "start": 242,
              "end": 261
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
            "start": 239,
            "end": 262
          }
        ],
        "start": 236,
        "end": 264
      },
      "abstract": false,
      "declare": false,
      "start": 228,
      "end": 264
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BWrapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 284
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "AWrapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 301
          },
          "typeArguments": null,
          "start": 293,
          "end": 301
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 308
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 312,
                "end": 316
              },
              "start": 310,
              "end": 316
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 305,
            "end": 317
          }
        ],
        "start": 302,
        "end": 319
      },
      "declare": false,
      "start": 266,
      "end": 319
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 328
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 338
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 345
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapper",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 354
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BWrapped",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 363
                      },
                      "typeArguments": null,
                      "start": 355,
                      "end": 363
                    }
                  ],
                  "start": 354,
                  "end": 364
                },
                "start": 347,
                "end": 364
              },
              "start": 345,
              "end": 364
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
            "start": 342,
            "end": 365
          }
        ],
        "start": 339,
        "end": 367
      },
      "abstract": false,
      "declare": false,
      "start": 321,
      "end": 367
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 367
}
```
