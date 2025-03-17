__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 320,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 160,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Meta",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 40,
        "end": 160,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 60,
          "end": 67,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 66,
            "end": 67,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 55,
          "end": 56,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 70,
          "end": 157,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 80,
              "end": 92,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 80,
                "end": 85,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 85,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 87,
                  "end": 91,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 89,
                    "end": 90,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 87,
                    "end": 88,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 101,
              "end": 109,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "decorators": [],
                "name": "also",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 105,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 107,
                  "end": 108,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 118,
              "end": 151,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 135,
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 150,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 137,
                  "end": 150,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 141,
                    "end": 150,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 142,
                        "end": 146,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 144,
                          "end": 145,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 142,
                          "end": 143,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 142,
                            "end": 143,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 148,
                        "end": 149,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 149,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 141,
                    "decorators": [],
                    "name": "Meta",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 33,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 162,
      "end": 211,
      "body": {
        "type": "TSInterfaceBody",
        "start": 178,
        "end": 211,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 184,
            "end": 194,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 193,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 199,
            "end": 209,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 208,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 177,
        "decorators": [],
        "name": "Input",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 255,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 255,
            "decorators": [],
            "name": "output",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 255,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 239,
                  "end": 255,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 240,
                      "end": 245,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 245,
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 247,
                      "end": 254
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 239,
                  "decorators": [],
                  "name": "Meta",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 258,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 298,
            "decorators": [],
            "name": "shouldFail",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 276,
                "end": 298,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 278,
                    "end": 296,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 287,
                      "decorators": [],
                      "name": "important",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 296,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 289,
                        "end": 296
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 301,
            "end": 318,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 301,
              "end": 309,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 301,
                "end": 307,
                "decorators": [],
                "name": "output",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 310,
              "end": 318,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
