__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cb",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAlias",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 21
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 29,
                        "end": 30
                      },
                      "typeArguments": null,
                      "start": 29,
                      "end": 30
                    },
                    "start": 26,
                    "end": 30
                  },
                  "start": 23,
                  "end": 30
                },
                "start": 21,
                "end": 30
              },
              "accessibility": null,
              "static": false,
              "start": 14,
              "end": 30
            }
          ],
          "start": 13,
          "end": 31
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "noAlias",
            "raw": "\"noAlias\"",
            "start": 32,
            "end": 41
          },
          "start": 32,
          "end": 41
        },
        "start": 13,
        "end": 42
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 210
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 213
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 214,
                              "end": 216
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Cb",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 217,
                                    "end": 219
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 220,
                                        "end": 226
                                      }
                                    ],
                                    "start": 219,
                                    "end": 227
                                  },
                                  "start": 217,
                                  "end": 227
                                }
                              ],
                              "start": 216,
                              "end": 228
                            },
                            "start": 214,
                            "end": 228
                          }
                        ],
                        "start": 213,
                        "end": 229
                      },
                      "start": 211,
                      "end": 229
                    }
                  ],
                  "start": 210,
                  "end": 230
                },
                "start": 208,
                "end": 230
              },
              "start": 206,
              "end": 230
            },
            "start": 205,
            "end": 230
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 230
        }
      ],
      "declare": true,
      "start": 191,
      "end": 231
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 333
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 336
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 337,
                              "end": 339
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Cb",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 340,
                                    "end": 342
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 343,
                                        "end": 349
                                      }
                                    ],
                                    "start": 342,
                                    "end": 350
                                  },
                                  "start": 340,
                                  "end": 350
                                }
                              ],
                              "start": 339,
                              "end": 351
                            },
                            "start": 337,
                            "end": 351
                          }
                        ],
                        "start": 336,
                        "end": 352
                      },
                      "start": 334,
                      "end": 352
                    }
                  ],
                  "start": 333,
                  "end": 353
                },
                "start": 331,
                "end": 353
              },
              "start": 329,
              "end": 353
            },
            "start": 328,
            "end": 353
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 353
        }
      ],
      "declare": true,
      "start": 316,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 356
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 360
        },
        "start": 355,
        "end": 360
      },
      "directive": null,
      "start": 355,
      "end": 361
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 361
}
```
