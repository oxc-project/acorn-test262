__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 437,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 159,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 103,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 34,
              "end": 103,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "name": "Container",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 48,
                "end": 51,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 49,
                    "end": 50,
                    "name": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
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
                "start": 54,
                "end": 102,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 54,
                    "end": 55,
                    "typeName": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 58,
                    "end": 102,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 68,
                        "end": 96,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 69,
                            "end": 78,
                            "name": "i",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 78,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 72,
                                "end": 78
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 79,
                          "end": 95,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 81,
                            "end": 95,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 81,
                              "end": 93,
                              "typeName": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 90,
                                "name": "Container",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 90,
                                "end": 93,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 91,
                                    "end": 92,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 91,
                                      "end": 92,
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
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 157,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 115,
              "end": 157,
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 136,
                "name": "IStringContainer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 148,
                  "name": "Container",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 148,
                  "end": 156,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 149,
                      "end": 155
                    }
                  ]
                }
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 161,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 181,
        "name": "Test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 182,
        "end": 320,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 188,
            "end": 264,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 195,
              "end": 264,
              "id": {
                "type": "Identifier",
                "start": 200,
                "end": 209,
                "name": "Container",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 209,
                "end": 212,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 210,
                    "end": 211,
                    "name": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
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
                "start": 215,
                "end": 263,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 215,
                    "end": 216,
                    "typeName": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 219,
                    "end": 263,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 229,
                        "end": 257,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 230,
                            "end": 239,
                            "name": "i",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 231,
                              "end": 239,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 233,
                                "end": 239
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 240,
                          "end": 256,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 242,
                            "end": 256,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 242,
                              "end": 254,
                              "typeName": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 251,
                                "name": "Container",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 251,
                                "end": 254,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 252,
                                    "end": 253,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 252,
                                      "end": 253,
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
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 269,
            "end": 318,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 276,
              "end": 318,
              "id": {
                "type": "Identifier",
                "start": 281,
                "end": 297,
                "name": "IStringContainer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 300,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 309,
                  "name": "Container",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 309,
                  "end": 317,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 310,
                      "end": 316
                    }
                  ]
                }
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 352,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 352,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 329,
                  "end": 344,
                  "left": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 334,
                    "name": "Test1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 344,
                    "name": "Container",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 344,
                  "end": 352,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 345,
                      "end": 351
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 385,
            "name": "s1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 385,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 363,
                  "end": 385,
                  "left": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 368,
                    "name": "Test1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 385,
                    "name": "IStringContainer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 387,
      "end": 418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 417,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 395,
                "end": 417,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 395,
                  "end": 417,
                  "left": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 400,
                    "name": "Test2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 417,
                    "name": "IStringContainer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 419,
      "end": 427,
      "expression": {
        "type": "AssignmentExpression",
        "start": 419,
        "end": 426,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 419,
          "end": 421,
          "name": "s1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 424,
          "end": 426,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 436,
      "expression": {
        "type": "AssignmentExpression",
        "start": 428,
        "end": 435,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 428,
          "end": 430,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 433,
          "end": 435,
          "name": "s1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
