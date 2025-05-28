__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 325,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 51,
        "end": 59,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 57,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 62,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 91,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 90,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 82,
              "end": 90,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 94,
        "end": 95,
        "typeName": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 97,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 112,
        "decorators": [],
        "name": "UnboxArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 118,
        "end": 180,
        "key": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 130,
          "end": 137,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 136,
            "end": 137,
            "typeName": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 140,
          "end": 177,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 140,
            "end": 144,
            "objectType": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 141,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 142,
              "end": 143,
              "typeName": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 153,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 156,
              "end": 165,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 157,
                  "end": 164,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 163,
                    "end": 164,
                    "name": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 168,
            "end": 169,
            "typeName": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 172,
            "end": 177
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 196,
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 199,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 198,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 202,
        "end": 226,
        "key": {
          "type": "Identifier",
          "start": 205,
          "end": 206,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 210,
          "end": 217,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 216,
            "end": 217,
            "typeName": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 220,
          "end": 224,
          "objectType": {
            "type": "TSTypeReference",
            "start": 220,
            "end": 221,
            "typeName": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 222,
            "end": 223,
            "typeName": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 229,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 251,
        "decorators": [],
        "name": "fnBad",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 251,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 252,
            "end": 280,
            "name": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 280,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 267,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 267,
                "end": 280,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 268,
                    "end": 279,
                    "typeName": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 271,
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 271,
                      "end": 279,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 272,
                          "end": 278
                        }
                      ]
                    }
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
      "params": [
        {
          "type": "RestElement",
          "start": 282,
          "end": 292,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 285,
            "end": 289,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 289,
            "end": 292,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 291,
              "end": 292,
              "typeName": {
                "type": "Identifier",
                "start": 291,
                "end": 292,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 293,
        "end": 324,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 295,
          "end": 324,
          "typeName": {
            "type": "Identifier",
            "start": 295,
            "end": 299,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 299,
            "end": 324,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 300,
                "end": 323,
                "typeName": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 308,
                  "decorators": [],
                  "name": "Identity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 308,
                  "end": 323,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 309,
                      "end": 322,
                      "typeName": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 319,
                        "decorators": [],
                        "name": "UnboxArray",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 319,
                        "end": 322,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 320,
                            "end": 321,
                            "typeName": {
                              "type": "Identifier",
                              "start": 320,
                              "end": 321,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
