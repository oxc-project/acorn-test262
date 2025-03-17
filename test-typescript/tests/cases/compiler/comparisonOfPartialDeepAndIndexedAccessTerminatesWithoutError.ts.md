__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "PartialDeep",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
        "start": 22,
        "end": 58,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 24,
          "end": 36,
          "name": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 29,
            "end": 36,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 35,
              "end": 36,
              "typeName": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
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
          "start": 40,
          "end": 57,
          "typeName": {
            "type": "Identifier",
            "start": 40,
            "end": 51,
            "name": "PartialDeep",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 51,
            "end": 57,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 52,
                "end": 56,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 53,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 54,
                  "end": 55,
                  "typeName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": true,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 29,
          "end": 36,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
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
          "start": 24,
          "end": 25,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 60,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "name": "Many",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 71,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
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
        "type": "TSUnionType",
        "start": 75,
        "end": 91,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 75,
            "end": 76,
            "typeName": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeOperator",
            "start": 79,
            "end": 91,
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 88,
              "end": 91,
              "elementType": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 114,
        "name": "Collection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 116,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 186,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 124,
            "end": 184,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 130,
              "name": "sortBy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 131,
                "end": 167,
                "argument": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 143,
                  "name": "iteratees",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 167,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 145,
                    "end": 167,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 149,
                        "name": "Many",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 149,
                        "end": 165,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 150,
                            "end": 164,
                            "typeName": {
                              "type": "Identifier",
                              "start": 150,
                              "end": 161,
                              "name": "PartialDeep",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 161,
                              "end": 164,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 162,
                                  "end": 163,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 162,
                                    "end": 163,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 180,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 180,
                  "end": 183,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 181,
                      "end": 182,
                      "typeName": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 182,
                        "name": "T",
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
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 220,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 197,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 207,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 207,
                  "end": 220,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 208,
                      "end": 219,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 209,
                          "end": 218,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 210,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 210,
                            "end": 218,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 212,
                              "end": 218
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 224,
            "end": 273,
            "expression": {
              "type": "TSAsExpression",
              "start": 224,
              "end": 235,
              "expression": {
                "type": "Literal",
                "start": 224,
                "end": 228,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 232,
                "end": 235
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 239,
              "end": 273,
              "typeName": {
                "type": "Identifier",
                "start": 239,
                "end": 249,
                "name": "Collection",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 249,
                "end": 273,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 250,
                    "end": 272,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 251,
                        "end": 261,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 252,
                          "end": 260,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 254,
                            "end": 260
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 262,
                        "end": 271,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 262,
                          "end": 263,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 263,
                          "end": 271,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 265,
                            "end": 271
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 287,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
