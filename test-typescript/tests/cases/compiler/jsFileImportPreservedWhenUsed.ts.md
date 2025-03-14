dash.d.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "decorators": [],
        "name": "ObjectIterator",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 40,
        "end": 116,
        "params": [
          {
            "type": "Identifier",
            "start": 41,
            "end": 70,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 70,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 48,
                "end": 70,
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
                      "decorators": [],
                      "name": "TObject",
                      "optional": false
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 48,
                  "end": 55,
                  "typeName": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 55,
                    "decorators": [],
                    "name": "TObject",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 72,
            "end": 83,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            }
          },
          {
            "type": "Identifier",
            "start": 85,
            "end": 104,
            "decorators": [],
            "name": "collection",
            "optional": false,
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
                  "decorators": [],
                  "name": "TObject",
                  "optional": false
                }
              }
            }
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
              "decorators": [],
              "name": "TResult",
              "optional": false
            }
          }
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "TObject",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 36,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "decorators": [],
              "name": "TResult",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 119,
      "end": 281,
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 281,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 148,
            "end": 279,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 157,
              "decorators": [],
              "name": "mapValues",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 185,
                "end": 210,
                "decorators": [],
                "name": "obj",
                "optional": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
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
                }
              },
              {
                "type": "Identifier",
                "start": 212,
                "end": 248,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 220,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 248,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 240,
                          "end": 247,
                          "typeName": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 247,
                            "decorators": [],
                            "name": "TResult",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 236,
                      "decorators": [],
                      "name": "ObjectIterator",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 278,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 251,
                "end": 278,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "decorators": [],
                  "name": "P",
                  "optional": false
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
                    "decorators": [],
                    "name": "TResult",
                    "optional": false
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 157,
              "end": 184,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 158,
                  "end": 174,
                  "const": false,
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 168,
                    "end": 174
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 176,
                  "end": 183,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 183,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 141,
        "decorators": [],
        "name": "LoDashStatic",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 296,
            "end": 311,
            "decorators": [],
            "name": "_",
            "optional": false,
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
                  "decorators": [],
                  "name": "LoDashStatic",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 313,
      "end": 324,
      "expression": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "decorators": [],
        "name": "_",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
Consts.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 37,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 36,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
              "decorators": [],
              "name": "INDEX_FIELD",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 27,
              "end": 36,
              "raw": "'__INDEX'",
              "value": "__INDEX"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
