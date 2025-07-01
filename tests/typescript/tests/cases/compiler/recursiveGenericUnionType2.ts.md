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
        "start": 15,
        "end": 20
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
                "start": 39,
                "end": 48
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
                      "start": 49,
                      "end": 50
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 49,
                    "end": 50
                  }
                ],
                "start": 48,
                "end": 51
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
                      "start": 54,
                      "end": 55
                    },
                    "typeArguments": null,
                    "start": 54,
                    "end": 55
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
                                "start": 72,
                                "end": 78
                              },
                              "start": 70,
                              "end": 78
                            },
                            "start": 69,
                            "end": 78
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
                                "start": 81,
                                "end": 90
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
                                      "start": 91,
                                      "end": 92
                                    },
                                    "typeArguments": null,
                                    "start": 91,
                                    "end": 92
                                  }
                                ],
                                "start": 90,
                                "end": 93
                              },
                              "start": 81,
                              "end": 93
                            },
                            "start": 81,
                            "end": 95
                          },
                          "start": 79,
                          "end": 95
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 68,
                        "end": 96
                      }
                    ],
                    "start": 58,
                    "end": 102
                  }
                ],
                "start": 54,
                "end": 102
              },
              "declare": false,
              "start": 34,
              "end": 103
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 103
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
                "start": 120,
                "end": 136
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
                  "start": 139,
                  "end": 148
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 149,
                      "end": 155
                    }
                  ],
                  "start": 148,
                  "end": 156
                },
                "start": 139,
                "end": 156
              },
              "declare": false,
              "start": 115,
              "end": 157
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 108,
            "end": 157
          }
        ],
        "start": 21,
        "end": 159
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 159
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 181
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
                "start": 200,
                "end": 209
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
                      "start": 210,
                      "end": 211
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 210,
                    "end": 211
                  }
                ],
                "start": 209,
                "end": 212
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
                      "start": 215,
                      "end": 216
                    },
                    "typeArguments": null,
                    "start": 215,
                    "end": 216
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
                                "start": 233,
                                "end": 239
                              },
                              "start": 231,
                              "end": 239
                            },
                            "start": 230,
                            "end": 239
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
                                "start": 242,
                                "end": 251
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
                                      "start": 252,
                                      "end": 253
                                    },
                                    "typeArguments": null,
                                    "start": 252,
                                    "end": 253
                                  }
                                ],
                                "start": 251,
                                "end": 254
                              },
                              "start": 242,
                              "end": 254
                            },
                            "start": 242,
                            "end": 256
                          },
                          "start": 240,
                          "end": 256
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 229,
                        "end": 257
                      }
                    ],
                    "start": 219,
                    "end": 263
                  }
                ],
                "start": 215,
                "end": 263
              },
              "declare": false,
              "start": 195,
              "end": 264
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 188,
            "end": 264
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
                "start": 281,
                "end": 297
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
                  "start": 300,
                  "end": 309
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 310,
                      "end": 316
                    }
                  ],
                  "start": 309,
                  "end": 317
                },
                "start": 300,
                "end": 317
              },
              "declare": false,
              "start": 276,
              "end": 318
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 269,
            "end": 318
          }
        ],
        "start": 182,
        "end": 320
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 161,
      "end": 320
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
                    "start": 329,
                    "end": 334
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Container",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 344
                  },
                  "start": 329,
                  "end": 344
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 345,
                      "end": 351
                    }
                  ],
                  "start": 344,
                  "end": 352
                },
                "start": 329,
                "end": 352
              },
              "start": 327,
              "end": 352
            },
            "start": 326,
            "end": 352
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 352
        }
      ],
      "declare": false,
      "start": 322,
      "end": 353
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
                    "start": 363,
                    "end": 368
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 385
                  },
                  "start": 363,
                  "end": 385
                },
                "typeArguments": null,
                "start": 363,
                "end": 385
              },
              "start": 361,
              "end": 385
            },
            "start": 359,
            "end": 385
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 385
        }
      ],
      "declare": false,
      "start": 355,
      "end": 386
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
                    "start": 395,
                    "end": 400
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 417
                  },
                  "start": 395,
                  "end": 417
                },
                "typeArguments": null,
                "start": 395,
                "end": 417
              },
              "start": 393,
              "end": 417
            },
            "start": 391,
            "end": 417
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 417
        }
      ],
      "declare": false,
      "start": 387,
      "end": 418
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
          "start": 419,
          "end": 421
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 426
        },
        "start": 419,
        "end": 426
      },
      "directive": null,
      "start": 419,
      "end": 427
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
          "start": 428,
          "end": 430
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 435
        },
        "start": 428,
        "end": 435
      },
      "directive": null,
      "start": 428,
      "end": 436
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 436
}
```
