__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 338,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "User",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 131,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 37,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 28,
              "name": "firstName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "name": "level",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 57,
            "end": 79,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 71,
              "name": "bestFriend",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 79,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 79,
                  "name": "User",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 82,
            "end": 129,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 96,
              "name": "bestFriend",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 97,
                "end": 128,
                "name": "user",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 101,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 103,
                    "end": 128,
                    "typeName": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 122,
                      "name": "SerializablePartial",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 122,
                      "end": 128,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 123,
                          "end": 127,
                          "typeName": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 127,
                            "name": "User",
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
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 133,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 150,
        "name": "FilteredKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 150,
        "end": 153,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 151,
            "end": 152,
            "name": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "name": "T",
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
        "type": "TSIndexedAccessType",
        "start": 156,
        "end": 269,
        "objectType": {
          "type": "TSMappedType",
          "start": 156,
          "end": 260,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 159,
            "end": 171,
            "name": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 164,
              "end": 171,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
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
            "type": "TSConditionalType",
            "start": 174,
            "end": 258,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 174,
              "end": 178,
              "objectType": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSNumberKeyword",
              "start": 187,
              "end": 193
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 196,
              "end": 197,
              "typeName": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 200,
              "end": 258,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 200,
                "end": 204,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 200,
                  "end": 201,
                  "typeName": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 203,
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 213,
                "end": 219
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 223,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSConditionalType",
                "start": 226,
                "end": 258,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 226,
                  "end": 230,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 226,
                    "end": 227,
                    "typeName": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 227,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 228,
                    "end": 229,
                    "typeName": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "extendsType": {
                  "type": "TSBooleanKeyword",
                  "start": 239,
                  "end": 246
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 249,
                  "end": 250,
                  "typeName": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 250,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 253,
                  "end": 258
                }
              }
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 164,
            "end": 171,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 171,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
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
            "start": 159,
            "end": 160,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 261,
          "end": 268,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 267,
            "end": 268,
            "typeName": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "T",
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
      "type": "TSTypeAliasDeclaration",
      "start": 272,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 296,
        "name": "SerializablePartial",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 296,
        "end": 299,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 297,
            "end": 298,
            "name": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "name": "T",
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
        "type": "TSMappedType",
        "start": 302,
        "end": 336,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 307,
          "end": 327,
          "name": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 312,
            "end": 327,
            "typeName": {
              "type": "Identifier",
              "start": 312,
              "end": 324,
              "name": "FilteredKeys",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 324,
              "end": 327,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 325,
                  "end": 326,
                  "typeName": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "name": "T",
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
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 330,
          "end": 334,
          "objectType": {
            "type": "TSTypeReference",
            "start": 330,
            "end": 331,
            "typeName": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 332,
            "end": 333,
            "typeName": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 312,
          "end": 327,
          "typeName": {
            "type": "Identifier",
            "start": 312,
            "end": 324,
            "name": "FilteredKeys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 324,
            "end": 327,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 325,
                "end": 326,
                "typeName": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 326,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "key": {
          "type": "Identifier",
          "start": 307,
          "end": 308,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
