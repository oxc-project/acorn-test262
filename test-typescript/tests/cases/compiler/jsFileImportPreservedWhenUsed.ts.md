__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "name": "ObjectIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "name": "TObject",
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
            "start": 29,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "name": "TResult",
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 40,
        "end": 116,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 41,
            "end": 70,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 70,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 48,
                "end": 70,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 48,
                  "end": 55,
                  "typeName": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 55,
                    "name": "TObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 56,
                  "end": 69,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 69,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 69,
                      "name": "TObject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 72,
            "end": 83,
            "name": "key",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 85,
            "end": 104,
            "name": "collection",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 104,
                  "name": "TObject",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 106,
          "end": 116,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 109,
            "end": 116,
            "typeName": {
              "type": "Identifier",
              "start": 109,
              "end": 116,
              "name": "TResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 119,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 141,
        "name": "LoDashStatic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 281,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 148,
            "end": 279,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 157,
              "name": "mapValues",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 157,
              "end": 184,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 158,
                  "end": 174,
                  "name": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 168,
                    "end": 174
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 176,
                  "end": 183,
                  "name": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 183,
                    "name": "TResult",
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
            "params": [
              {
                "type": "Identifier",
                "start": 185,
                "end": 210,
                "name": "obj",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 210,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 190,
                    "end": 210,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 190,
                        "end": 191,
                        "typeName": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 191,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 194,
                        "end": 198
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 201,
                        "end": 210
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 212,
                "end": 248,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 220,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 248,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 236,
                      "name": "ObjectIterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 236,
                      "end": 248,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 237,
                          "end": 238,
                          "typeName": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 238,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 240,
                          "end": 247,
                          "typeName": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 247,
                            "name": "TResult",
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 278,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 251,
                "end": 278,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 254,
                  "end": 266,
                  "name": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 259,
                    "end": 266,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 266,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 269,
                  "end": 276,
                  "typeName": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 276,
                    "name": "TResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 259,
                  "end": 266,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 265,
                    "end": 266,
                    "typeName": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 266,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 282,
      "end": 312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 296,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 311,
            "name": "_",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 299,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 311,
                  "name": "LoDashStatic",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 313,
      "end": 324,
      "expression": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "name": "_",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 37,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
              "name": "INDEX_FIELD",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 27,
              "end": 36,
              "value": "__INDEX",
              "raw": "'__INDEX'"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
