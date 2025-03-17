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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "name": "Meta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "A",
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
        "start": 40,
        "end": 160,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 55,
          "end": 67,
          "name": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 60,
            "end": 67,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
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
          "type": "TSTypeLiteral",
          "start": 70,
          "end": 157,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 80,
              "end": 92,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 80,
                "end": 85,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 85,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 87,
                  "end": 91,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 87,
                    "end": 88,
                    "typeName": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 89,
                    "end": 90,
                    "typeName": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 101,
              "end": 109,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "name": "also",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 105,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 107,
                  "end": 108,
                  "typeName": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 118,
              "end": 151,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 127,
                "end": 135,
                "name": "children",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 150,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 137,
                  "end": 150,
                  "typeName": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 141,
                    "name": "Meta",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 141,
                    "end": 150,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 142,
                        "end": 146,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 142,
                          "end": 143,
                          "typeName": {
                            "type": "Identifier",
                            "start": 142,
                            "end": 143,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 144,
                          "end": 145,
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 148,
                        "end": 149,
                        "typeName": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 149,
                          "name": "A",
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
              "accessibility": null,
              "static": false
            }
          ]
        },
        "optional": null,
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 60,
          "end": 67,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 66,
            "end": 67,
            "typeName": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
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
          "start": 55,
          "end": 56,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 162,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 177,
        "name": "Input",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 178,
        "end": 211,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 184,
            "end": 194,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 193,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 199,
            "end": 209,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 208,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
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
      "type": "VariableDeclaration",
      "start": 213,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 255,
            "name": "output",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 255,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 239,
                  "name": "Meta",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 239,
                  "end": 255,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 240,
                      "end": 245,
                      "typeName": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 245,
                        "name": "Input",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 247,
                      "end": 254
                    }
                  ]
                }
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
      "type": "VariableDeclaration",
      "start": 258,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 298,
            "name": "shouldFail",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 287,
                      "name": "important",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 296,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 289,
                        "end": 296
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 301,
            "end": 318,
            "object": {
              "type": "MemberExpression",
              "start": 301,
              "end": 309,
              "object": {
                "type": "Identifier",
                "start": 301,
                "end": 307,
                "name": "output",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 310,
              "end": 318,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
