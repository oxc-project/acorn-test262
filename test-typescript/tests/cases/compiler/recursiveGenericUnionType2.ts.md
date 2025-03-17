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
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 159,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 103,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 34,
              "end": 103,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "decorators": [],
                "name": "Container",
                "optional": false,
                "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                        "accessibility": null,
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
                        "readonly": false,
                        "static": false,
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
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 90,
                                "end": 93,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 91,
                                    "end": 92,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 91,
                                      "end": 92,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 90,
                                "decorators": [],
                                "name": "Container",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
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
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
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
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 157,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 115,
              "end": 157,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 136,
                "decorators": [],
                "name": "IStringContainer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 156,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 148,
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 161,
      "end": 320,
      "body": {
        "type": "TSModuleBlock",
        "start": 182,
        "end": 320,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 188,
            "end": 264,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 195,
              "end": 264,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 200,
                "end": 209,
                "decorators": [],
                "name": "Container",
                "optional": false,
                "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                        "accessibility": null,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 230,
                            "end": 239,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 231,
                              "end": 239,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 233,
                                "end": 239
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
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
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 251,
                                "end": 254,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 252,
                                    "end": 253,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 252,
                                      "end": 253,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 251,
                                "decorators": [],
                                "name": "Container",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
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
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
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
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 269,
            "end": 318,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 276,
              "end": 318,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 281,
                "end": 297,
                "decorators": [],
                "name": "IStringContainer",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 300,
                "end": 317,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 309,
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 181,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 352,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 352,
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
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 329,
                  "end": 344,
                  "left": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 334,
                    "decorators": [],
                    "name": "Test1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 344,
                    "decorators": [],
                    "name": "Container",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 385,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 385,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 363,
                  "end": 385,
                  "left": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 368,
                    "decorators": [],
                    "name": "Test1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 385,
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 417,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 395,
                "end": 417,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 395,
                  "end": 417,
                  "left": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 400,
                    "decorators": [],
                    "name": "Test2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 417,
                    "decorators": [],
                    "name": "IStringContainer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 419,
      "end": 427,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 419,
        "end": 426,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 419,
          "end": 421,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 424,
          "end": 426,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 436,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 428,
        "end": 435,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 428,
          "end": 430,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 433,
          "end": 435,
          "decorators": [],
          "name": "s1",
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
