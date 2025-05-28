__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 368,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 93,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 30,
        "end": 93,
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 47,
          "decorators": [],
          "name": "CalcObj",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "O",
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
        "extends": [],
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 61,
                "decorators": [],
                "name": "read",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 63,
                  "end": 90,
                  "typeParameters": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 87,
                        "decorators": [],
                        "name": "CalcValue",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 95,
      "end": 133,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 102,
        "end": 133,
        "id": {
          "type": "Identifier",
          "start": 107,
          "end": 116,
          "decorators": [],
          "name": "CalcValue",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "O",
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
          "type": "TSTypeReference",
          "start": 122,
          "end": 132,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 129,
            "decorators": [],
            "name": "CalcObj",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 135,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "O",
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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 153,
        "end": 256,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 159,
            "end": 223,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 165,
                "end": 223,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 177,
                        "decorators": [],
                        "name": "CalcObj",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 195,
                        "decorators": [],
                        "name": "read",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 197,
                        "end": 221,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
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
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 221,
                          "decorators": [],
                          "name": "unk",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 228,
            "end": 254,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 234,
                "end": 253,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 244,
                        "decorators": [],
                        "name": "CalcObj",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 258,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
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
        "type": "TSTypeReference",
        "start": 270,
        "end": 274,
        "typeName": {
          "type": "Identifier",
          "start": 270,
          "end": 271,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 277,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 289,
              "end": 290,
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
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 302,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 308,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 338,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 337,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 359,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 358,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 355,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "value": 3,
                        "raw": "3"
                      }
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
      "declare": true
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
