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
                            "type": "TSArrayType",
                            "elementType": {
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
                            "start": 84,
                            "end": 98
                          },
                          "start": 82,
                          "end": 98
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 71,
                        "end": 99
                      }
                    ],
                    "start": 61,
                    "end": 105
                  }
                ],
                "start": 57,
                "end": 105
              },
              "declare": false,
              "start": 37,
              "end": 106
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 30,
            "end": 106
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
                "start": 123,
                "end": 139
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
                  "start": 142,
                  "end": 151
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 152,
                      "end": 158
                    }
                  ],
                  "start": 151,
                  "end": 159
                },
                "start": 142,
                "end": 159
              },
              "declare": false,
              "start": 118,
              "end": 160
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 111,
            "end": 160
          }
        ],
        "start": 24,
        "end": 162
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 162
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 187
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
                "start": 206,
                "end": 215
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
                      "start": 216,
                      "end": 217
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 216,
                    "end": 217
                  }
                ],
                "start": 215,
                "end": 218
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
                      "start": 221,
                      "end": 222
                    },
                    "typeArguments": null,
                    "start": 221,
                    "end": 222
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
                                "start": 239,
                                "end": 245
                              },
                              "start": 237,
                              "end": 245
                            },
                            "start": 236,
                            "end": 245
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Container",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 248,
                                "end": 257
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
                                      "start": 258,
                                      "end": 259
                                    },
                                    "typeArguments": null,
                                    "start": 258,
                                    "end": 259
                                  }
                                ],
                                "start": 257,
                                "end": 260
                              },
                              "start": 248,
                              "end": 260
                            },
                            "start": 248,
                            "end": 262
                          },
                          "start": 246,
                          "end": 262
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 235,
                        "end": 263
                      }
                    ],
                    "start": 225,
                    "end": 269
                  }
                ],
                "start": 221,
                "end": 269
              },
              "declare": false,
              "start": 201,
              "end": 270
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 194,
            "end": 270
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
                "start": 287,
                "end": 303
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
                  "start": 306,
                  "end": 315
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 316,
                      "end": 322
                    }
                  ],
                  "start": 315,
                  "end": 323
                },
                "start": 306,
                "end": 323
              },
              "declare": false,
              "start": 282,
              "end": 324
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 275,
            "end": 324
          }
        ],
        "start": 188,
        "end": 326
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 164,
      "end": 326
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
                    "start": 335,
                    "end": 340
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Container",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 350
                  },
                  "start": 335,
                  "end": 350
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 351,
                      "end": 357
                    }
                  ],
                  "start": 350,
                  "end": 358
                },
                "start": 335,
                "end": 358
              },
              "start": 333,
              "end": 358
            },
            "start": 332,
            "end": 358
          },
          "init": null,
          "definite": false,
          "start": 332,
          "end": 358
        }
      ],
      "declare": false,
      "start": 328,
      "end": 359
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
                    "start": 369,
                    "end": 374
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 391
                  },
                  "start": 369,
                  "end": 391
                },
                "typeArguments": null,
                "start": 369,
                "end": 391
              },
              "start": 367,
              "end": 391
            },
            "start": 365,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 365,
          "end": 391
        }
      ],
      "declare": false,
      "start": 361,
      "end": 392
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
                    "start": 401,
                    "end": 406
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 423
                  },
                  "start": 401,
                  "end": 423
                },
                "typeArguments": null,
                "start": 401,
                "end": 423
              },
              "start": 399,
              "end": 423
            },
            "start": 397,
            "end": 423
          },
          "init": null,
          "definite": false,
          "start": 397,
          "end": 423
        }
      ],
      "declare": false,
      "start": 393,
      "end": 424
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
          "start": 425,
          "end": 427
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 432
        },
        "start": 425,
        "end": 432
      },
      "directive": null,
      "start": 425,
      "end": 433
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
          "start": 434,
          "end": 436
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 441
        },
        "start": 434,
        "end": 441
      },
      "directive": null,
      "start": 434,
      "end": 442
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 442
}
```
