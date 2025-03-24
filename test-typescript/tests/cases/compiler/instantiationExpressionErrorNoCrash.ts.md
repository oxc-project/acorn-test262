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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 24,
            "name": "createCacheReducer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 27,
            "end": 239,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 55,
                "end": 87,
                "name": "queries",
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
                        "name": "Cache",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "N",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "QR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 116,
                        "name": "queriesMap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "QR",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 152,
                        "name": "initialState",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 172,
                              "name": "queries",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 174,
                              "end": 184,
                              "name": "queriesMap",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
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
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 206,
                        "end": 226,
                        "left": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 211,
                          "name": "state",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 226,
                          "name": "initialState",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 236,
                      "name": "state",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                }
              ]
            },
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
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "QR",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "Cache",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "QR",
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
                "name": "queries",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 297,
                "end": 375,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 299,
                  "end": 375,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 310,
                    "end": 324,
                    "name": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 312,
                      "name": "QK",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "QR",
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
                    "start": 327,
                    "end": 368,
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 337,
                      "name": "ReturnType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "createCacheReducer",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "QR",
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
                  },
                  "optional": null,
                  "readonly": null,
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
                        "name": "QR",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 312,
                    "name": "QK",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
