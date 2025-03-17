__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 30,
        "end": 93,
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 47,
          "name": "CalcObj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
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
                "name": "O",
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
                "name": "read",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "origin",
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
                            "name": "O",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                        "name": "CalcValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "O",
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "CalcValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "O",
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
          "type": "TSTypeReference",
          "start": 122,
          "end": 132,
          "typeName": {
            "type": "Identifier",
            "start": 122,
            "end": 129,
            "name": "CalcObj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 135,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 186,
                  "name": "unk",
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
                        "name": "CalcObj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 195,
                        "name": "read",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 197,
                        "end": 221,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 198,
                            "end": 213,
                            "name": "origin",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 204,
                              "end": 213,
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "start": 206,
                                "end": 213
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 221,
                          "name": "unk",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 247,
                  "name": "x",
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
                        "name": "CalcObj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "O",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 253,
                  "name": "unk",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
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
              "name": "O",
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 258,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "type": "TSTypeReference",
        "start": 270,
        "end": 274,
        "typeName": {
          "type": "Identifier",
          "start": 270,
          "end": 271,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 337,
            "name": "a",
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 358,
            "name": "b",
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "name": "a",
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
