__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 432,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 157,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 101,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 34,
              "end": 101,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "decorators": [],
                "name": "Container",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
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
                "type": "TSUnionType",
                "start": 54,
                "end": 100,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 54,
                    "end": 55,
                    "typeName": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 58,
                    "end": 100,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 68,
                        "end": 94,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 69,
                            "end": 78,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 78,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 72,
                                "end": 78
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 79,
                          "end": 93,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 81,
                            "end": 93,
                            "typeName": {
                              "type": "Identifier",
                              "start": 81,
                              "end": 90,
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 155,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 113,
              "end": 155,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 134,
                "decorators": [],
                "name": "IStringContainer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 154,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 146,
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 146,
                  "end": 154,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 147,
                      "end": 153
                    }
                  ]
                }
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 159,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 179,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 180,
        "end": 316,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 186,
            "end": 260,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 193,
              "end": 260,
              "id": {
                "type": "Identifier",
                "start": 198,
                "end": 207,
                "decorators": [],
                "name": "Container",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 207,
                "end": 210,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 208,
                    "end": 209,
                    "name": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "T",
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
                "type": "TSUnionType",
                "start": 213,
                "end": 259,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 213,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 217,
                    "end": 259,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 227,
                        "end": 253,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 228,
                            "end": 237,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 229,
                              "end": 237,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 231,
                                "end": 237
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 238,
                          "end": 252,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 240,
                            "end": 252,
                            "typeName": {
                              "type": "Identifier",
                              "start": 240,
                              "end": 249,
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 249,
                              "end": 252,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 250,
                                  "end": 251,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 250,
                                    "end": 251,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 265,
            "end": 314,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 272,
              "end": 314,
              "id": {
                "type": "Identifier",
                "start": 277,
                "end": 293,
                "decorators": [],
                "name": "IStringContainer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 296,
                "end": 313,
                "typeName": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 305,
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 305,
                  "end": 313,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 306,
                      "end": 312
                    }
                  ]
                }
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 349,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 348,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 348,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 348,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 325,
                "end": 348,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 325,
                  "end": 340,
                  "left": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 330,
                    "decorators": [],
                    "name": "Test1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 340,
                    "decorators": [],
                    "name": "Container",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 340,
                  "end": 348,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 341,
                      "end": 347
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 382,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 381,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 381,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 381,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 359,
                  "end": 381,
                  "left": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 364,
                    "decorators": [],
                    "name": "Test1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 381,
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 414,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 413,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 389,
              "end": 413,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 391,
                "end": 413,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 391,
                  "end": 413,
                  "left": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 396,
                    "decorators": [],
                    "name": "Test2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 413,
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 423,
      "expression": {
        "type": "AssignmentExpression",
        "start": 415,
        "end": 422,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 415,
          "end": 417,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 420,
          "end": 422,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 424,
      "end": 432,
      "expression": {
        "type": "AssignmentExpression",
        "start": 424,
        "end": 431,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 424,
          "end": 426,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 429,
          "end": 431,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
