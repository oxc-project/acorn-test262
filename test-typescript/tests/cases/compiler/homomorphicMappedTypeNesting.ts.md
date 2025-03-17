__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 326,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 60,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 57,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
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
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 62,
      "end": 95,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 94,
        "end": 95,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 97,
      "end": 181,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 112,
        "decorators": [],
        "name": "UnboxArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 118,
        "end": 180,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 130,
          "end": 137,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 136,
            "end": 137,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 140,
          "end": 177,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 140,
            "end": 144,
            "indexType": {
              "type": "TSTypeReference",
              "start": 142,
              "end": 143,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 141,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 153,
            "end": 165,
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
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 172,
            "end": 177
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 168,
            "end": 169,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 227,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 196,
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 202,
        "end": 226,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 210,
          "end": 217,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 216,
            "end": 217,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 205,
          "end": 206,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 220,
          "end": 224,
          "indexType": {
            "type": "TSTypeReference",
            "start": 222,
            "end": 223,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 220,
            "end": 221,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 229,
      "end": 325,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 251,
        "decorators": [],
        "name": "fnBad",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 282,
          "end": 292,
          "argument": {
            "type": "Identifier",
            "start": 285,
            "end": 289,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 289,
            "end": 292,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 291,
              "end": 292,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 291,
                "end": 292,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
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
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 299,
            "end": 324,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 300,
                "end": 323,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 308,
                  "end": 323,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 309,
                      "end": 322,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 319,
                        "end": 322,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 320,
                            "end": 321,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 320,
                              "end": 321,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 319,
                        "decorators": [],
                        "name": "UnboxArray",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 308,
                  "decorators": [],
                  "name": "Identity",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 295,
            "end": 299,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 251,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 252,
            "end": 280,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 280,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 267,
                "end": 280,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 268,
                    "end": 279,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 271,
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 267,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "T",
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
