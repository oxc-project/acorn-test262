__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Container",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 51
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
                      "start": 52,
                      "end": 53
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 52,
                    "end": 53
                  }
                ],
                "start": 51,
                "end": 54
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 58
                    },
                    "typeArguments": null,
                    "start": 57,
                    "end": 58
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 75,
                                "end": 81
                              },
                              "start": 73,
                              "end": 81
                            },
                            "start": 72,
                            "end": 81
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 84,
                              "end": 93
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 94,
                                    "end": 95
                                  },
                                  "typeArguments": null,
                                  "start": 94,
                                  "end": 95
                                }
                              ],
                              "start": 93,
                              "end": 96
                            },
                            "start": 84,
                            "end": 96
                          },
                          "start": 82,
                          "end": 96
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 71,
                        "end": 97
                      }
                    ],
                    "start": 61,
                    "end": 103
                  }
                ],
                "start": 57,
                "end": 103
              },
              "declare": false,
              "start": 37,
              "end": 104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 30,
            "end": 104
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IStringContainer",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 137
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 149
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 150,
                      "end": 156
                    }
                  ],
                  "start": 149,
                  "end": 157
                },
                "start": 140,
                "end": 157
              },
              "declare": false,
              "start": 116,
              "end": 158
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 109,
            "end": 158
          }
        ],
        "start": 24,
        "end": 160
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 160
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 185
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Container",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 213
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
                      "start": 214,
                      "end": 215
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 214,
                    "end": 215
                  }
                ],
                "start": 213,
                "end": 216
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 220
                    },
                    "typeArguments": null,
                    "start": 219,
                    "end": 220
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 237,
                                "end": 243
                              },
                              "start": 235,
                              "end": 243
                            },
                            "start": 234,
                            "end": 243
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 246,
                              "end": 255
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 256,
                                    "end": 257
                                  },
                                  "typeArguments": null,
                                  "start": 256,
                                  "end": 257
                                }
                              ],
                              "start": 255,
                              "end": 258
                            },
                            "start": 246,
                            "end": 258
                          },
                          "start": 244,
                          "end": 258
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 233,
                        "end": 259
                      }
                    ],
                    "start": 223,
                    "end": 265
                  }
                ],
                "start": 219,
                "end": 265
              },
              "declare": false,
              "start": 199,
              "end": 266
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 192,
            "end": 266
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IStringContainer",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 299
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 311
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 312,
                      "end": 318
                    }
                  ],
                  "start": 311,
                  "end": 319
                },
                "start": 302,
                "end": 319
              },
              "declare": false,
              "start": 278,
              "end": 320
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 271,
            "end": 320
          }
        ],
        "start": 186,
        "end": 322
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 162,
      "end": 322
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 331,
                    "end": 336
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Container",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 346
                  },
                  "start": 331,
                  "end": 346
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 347,
                      "end": 353
                    }
                  ],
                  "start": 346,
                  "end": 354
                },
                "start": 331,
                "end": 354
              },
              "start": 329,
              "end": 354
            },
            "start": 328,
            "end": 354
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 354
        }
      ],
      "declare": false,
      "start": 324,
      "end": 355
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 370
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 387
                  },
                  "start": 365,
                  "end": 387
                },
                "typeArguments": null,
                "start": 365,
                "end": 387
              },
              "start": 363,
              "end": 387
            },
            "start": 361,
            "end": 387
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 387
        }
      ],
      "declare": false,
      "start": 357,
      "end": 388
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 402
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 419
                  },
                  "start": 397,
                  "end": 419
                },
                "typeArguments": null,
                "start": 397,
                "end": 419
              },
              "start": 395,
              "end": 419
            },
            "start": 393,
            "end": 419
          },
          "init": null,
          "definite": false,
          "start": 393,
          "end": 419
        }
      ],
      "declare": false,
      "start": 389,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 423
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 428
        },
        "start": 421,
        "end": 428
      },
      "directive": null,
      "start": 421,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 432
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 437
        },
        "start": 430,
        "end": 437
      },
      "directive": null,
      "start": 430,
      "end": 438
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 438
}
```
