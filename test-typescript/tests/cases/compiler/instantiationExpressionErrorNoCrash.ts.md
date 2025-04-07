__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 379,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 24,
            "decorators": [],
            "name": "createCacheReducer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 27,
            "end": 239,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 94,
              "end": 239,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 100,
                  "end": 128,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 106,
                      "end": 127,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 116,
                        "decorators": [],
                        "name": "queriesMap",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 119,
                        "end": 127,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 119,
                          "end": 121,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 125,
                          "end": 127,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 127,
                            "decorators": [],
                            "name": "QR",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 134,
                  "end": 192,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 140,
                      "end": 191,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 152,
                        "decorators": [],
                        "name": "initialState",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "start": 155,
                        "end": 191,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 165,
                            "end": 184,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 172,
                              "decorators": [],
                              "name": "queries",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 184,
                              "decorators": [],
                              "name": "queriesMap",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 198,
                  "end": 237,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 205,
                    "end": 236,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 236,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 206,
                        "end": 226,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 211,
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 226,
                          "decorators": [],
                          "name": "initialState",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 55,
                "end": 87,
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 87,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 64,
                    "end": 87,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 77,
                      "end": 86,
                      "literal": {
                        "type": "Literal",
                        "start": 77,
                        "end": 86,
                        "raw": "\"queries\"",
                        "value": "queries"
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 64,
                      "end": 76,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 69,
                        "end": 76,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 70,
                            "end": 71,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 71,
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 73,
                            "end": 75,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 75,
                              "decorators": [],
                              "name": "QR",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 69,
                        "decorators": [],
                        "name": "Cache",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 27,
              "end": 49,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 28,
                  "end": 44,
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 46,
                  "end": 48,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 48,
                    "decorators": [],
                    "name": "QR",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 242,
      "end": 379,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 249,
        "end": 379,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 254,
          "end": 259,
          "decorators": [],
          "name": "Cache",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 284,
          "end": 378,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 290,
              "end": 376,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 290,
                "end": 297,
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 297,
                "end": 375,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 299,
                  "end": 375,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 316,
                    "end": 324,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 324,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 324,
                        "decorators": [],
                        "name": "QR",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 312,
                    "decorators": [],
                    "name": "QK",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "nameType": null,
                  "optional": null,
                  "readonly": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 327,
                    "end": 368,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 337,
                      "end": 368,
                      "params": [
                        {
                          "type": "TSTypeQuery",
                          "start": 338,
                          "end": 367,
                          "exprName": {
                            "type": "Identifier",
                            "start": 345,
                            "end": 363,
                            "decorators": [],
                            "name": "createCacheReducer",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 363,
                            "end": 367,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 364,
                                "end": 366,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 364,
                                  "end": 366,
                                  "decorators": [],
                                  "name": "QR",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 337,
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 259,
          "end": 281,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 260,
              "end": 276,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 278,
              "end": 280,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 278,
                "end": 280,
                "decorators": [],
                "name": "QR",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
