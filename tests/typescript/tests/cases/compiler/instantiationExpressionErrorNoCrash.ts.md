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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 239,
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
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 27,
              "end": 49,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 28,
                  "end": 44,
                  "name": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 46,
                  "end": 48,
                  "name": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 48,
                    "decorators": [],
                    "name": "QR",
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
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 64,
                      "end": 76,
                      "typeName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 69,
                        "decorators": [],
                        "name": "Cache",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 69,
                        "end": 76,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 70,
                            "end": 71,
                            "typeName": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 71,
                              "decorators": [],
                              "name": "N",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 73,
                            "end": 75,
                            "typeName": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 75,
                              "decorators": [],
                              "name": "QR",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 77,
                      "end": 86,
                      "literal": {
                        "type": "Literal",
                        "start": 77,
                        "end": 86,
                        "value": "queries",
                        "raw": "\"queries\""
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 94,
              "end": 239,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 100,
                  "end": 128,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 106,
                      "end": 127,
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 127,
                            "decorators": [],
                            "name": "QR",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 134,
                  "end": 192,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 140,
                      "end": 191,
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 172,
                              "decorators": [],
                              "name": "queries",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 184,
                              "decorators": [],
                              "name": "queriesMap",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 198,
                  "end": 237,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 205,
                    "end": 236,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
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
                        "right": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 226,
                          "decorators": [],
                          "name": "initialState",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 236,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 242,
      "end": 379,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 249,
        "end": 379,
        "id": {
          "type": "Identifier",
          "start": 254,
          "end": 259,
          "decorators": [],
          "name": "Cache",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 278,
              "end": 280,
              "name": {
                "type": "Identifier",
                "start": 278,
                "end": 280,
                "decorators": [],
                "name": "QR",
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
          "type": "TSTypeLiteral",
          "start": 284,
          "end": 378,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 290,
              "end": 376,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 290,
                "end": 297,
                "decorators": [],
                "name": "queries",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 297,
                "end": 375,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 299,
                  "end": 375,
                  "key": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 312,
                    "decorators": [],
                    "name": "QK",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 316,
                    "end": 324,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 324,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 324,
                        "decorators": [],
                        "name": "QR",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 327,
                    "end": 368,
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 337,
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 364,
                                  "end": 366,
                                  "decorators": [],
                                  "name": "QR",
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
                  },
                  "optional": false,
                  "readonly": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
