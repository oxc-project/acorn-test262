unwitnessedTypeParameterVariance.ts
```json
{
  "type": "Program",
  "start": 23,
  "end": 369,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 93,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 30,
        "end": 93,
        "body": {
          "type": "TSInterfaceBody",
          "start": 51,
          "end": 93,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 57,
              "end": 91,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "decorators": [],
                "name": "read",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 63,
                  "end": 90,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 73,
                      "decorators": [],
                      "name": "origin",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 70,
                        "end": 73,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 72,
                          "end": 73,
                          "typeName": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 73,
                            "decorators": [],
                            "name": "O",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 78,
                      "end": 90,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 87,
                        "end": 90,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 88,
                            "end": 89,
                            "typeName": {
                              "type": "Identifier",
                              "start": 88,
                              "end": 89,
                              "decorators": [],
                              "name": "O",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 87,
                        "decorators": [],
                        "name": "CalcValue",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 47,
          "decorators": [],
          "name": "CalcObj",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 47,
          "end": 50,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 48,
              "end": 49,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "O",
                "optional": false
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
      "start": 95,
      "end": 133,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 102,
        "end": 133,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 107,
          "end": 116,
          "decorators": [],
          "name": "CalcValue",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 122,
          "end": 132,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 129,
            "end": 132,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 130,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "O",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 129,
            "decorators": [],
            "name": "CalcObj",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 116,
          "end": 119,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 117,
              "end": 118,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "O",
                "optional": false
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
      "type": "FunctionDeclaration",
      "start": 135,
      "end": 256,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 153,
        "end": 256,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 159,
            "end": 223,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 165,
                "end": 223,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 186,
                  "decorators": [],
                  "name": "unk",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 170,
                      "end": 186,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 177,
                        "end": 186,
                        "params": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 178,
                            "end": 185
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 177,
                        "decorators": [],
                        "name": "CalcObj",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 189,
                  "end": 223,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 191,
                      "end": 221,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 195,
                        "decorators": [],
                        "name": "read",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 197,
                        "end": 221,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 221,
                          "decorators": [],
                          "name": "unk",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 198,
                            "end": 213,
                            "decorators": [],
                            "name": "origin",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 204,
                              "end": 213,
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 206,
                                "end": 213
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 228,
            "end": 254,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 234,
                "end": 253,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 247,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 247,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 244,
                        "end": 247,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 245,
                            "end": 246,
                            "typeName": {
                              "type": "Identifier",
                              "start": 245,
                              "end": 246,
                              "decorators": [],
                              "name": "O",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 244,
                        "decorators": [],
                        "name": "CalcObj",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 253,
                  "decorators": [],
                  "name": "unk",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 258,
      "end": 275,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 270,
        "end": 274,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 271,
          "end": 274,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 272,
              "end": 273,
              "typeName": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 270,
          "end": 271,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 264,
        "end": 267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 266,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 277,
      "end": 311,
      "body": {
        "type": "TSInterfaceBody",
        "start": 292,
        "end": 311,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 298,
            "end": 309,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 302,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 308,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 305,
                  "end": 308,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 306,
                      "end": 307,
                      "typeName": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 307,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 288,
        "end": 291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 289,
            "end": 290,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 337,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 337,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 329,
                  "end": 337,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 330,
                      "end": 336
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "A",
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 339,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 358,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 358,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 358,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 355,
                  "end": 358,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 356,
                      "end": 357,
                      "literal": {
                        "type": "Literal",
                        "start": 356,
                        "end": 357,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 355,
                  "decorators": [],
                  "name": "A",
                  "optional": false
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
      "start": 362,
      "end": 368,
      "expression": {
        "type": "AssignmentExpression",
        "start": 362,
        "end": 367,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 362,
          "end": 363,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
