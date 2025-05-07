__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 361,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 43,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "Cb",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 13,
        "end": 42,
        "indexType": {
          "type": "TSLiteralType",
          "start": 32,
          "end": 41,
          "literal": {
            "type": "Literal",
            "start": 32,
            "end": 41,
            "raw": "\"noAlias\"",
            "value": "noAlias",
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 13,
          "end": 31,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 14,
              "end": 30,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 14,
                "end": 21,
                "decorators": [],
                "name": "noAlias",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 21,
                "end": 30,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 23,
                  "end": 30,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 29,
                      "end": 30,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 29,
                        "end": 30,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "type": "VariableDeclaration",
      "start": 191,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 230,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 230,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 208,
                "end": 230,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 210,
                  "end": 230,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 229,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 213,
                        "end": 229,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 214,
                            "end": 228,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 216,
                              "end": 228,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 217,
                                  "end": 227,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 219,
                                    "end": 227,
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 220,
                                        "end": 226
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 217,
                                    "end": 219,
                                    "decorators": [],
                                    "name": "Cb",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 214,
                              "end": 216,
                              "decorators": [],
                              "name": "Cb",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 213,
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 210,
                  "decorators": [],
                  "name": "Cb",
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
      "start": 316,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 353,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 353,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 353,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 353,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 333,
                  "end": 353,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 334,
                      "end": 352,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 336,
                        "end": 352,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 337,
                            "end": 351,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 339,
                              "end": 351,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 340,
                                  "end": 350,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 342,
                                    "end": 350,
                                    "params": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 343,
                                        "end": 349
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 340,
                                    "end": 342,
                                    "decorators": [],
                                    "name": "Cb",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 337,
                              "end": 339,
                              "decorators": [],
                              "name": "Cb",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 336,
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 333,
                  "decorators": [],
                  "name": "Cb",
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
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 355,
      "end": 361,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 355,
        "end": 360,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 355,
          "end": 356,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 359,
          "end": 360,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
