__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
        "start": 17,
        "end": 46,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 44,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "name": "frobble",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 39,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 39,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 39,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "T",
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
              "start": 40,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 43,
                "typeName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "f",
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
        "start": 75,
        "end": 163,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 81,
            "end": 95,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 85,
                "end": 94,
                "id": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 94,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 88,
                      "end": 94,
                      "typeName": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 91,
                        "end": 94,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 92,
                            "end": 93,
                            "typeName": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 93,
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
            "start": 100,
            "end": 114,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 104,
                "end": 113,
                "id": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 113,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 113,
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 110,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 110,
                        "end": 113,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 111,
                            "end": 112,
                            "typeName": {
                              "type": "Identifier",
                              "start": 111,
                              "end": 112,
                              "name": "U",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 119,
            "end": 125,
            "expression": {
              "type": "AssignmentExpression",
              "start": 119,
              "end": 124,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 152,
            "end": 161,
            "argument": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 64,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 63,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 74,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 68,
          "end": 74,
          "typeName": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 71,
            "end": 74,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "name": "U",
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
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 172,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 307,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 305,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 183,
              "end": 305,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 305,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 207,
                    "end": 221,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 211,
                        "end": 220,
                        "id": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 220,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 212,
                            "end": 220,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 214,
                              "end": 220,
                              "typeName": {
                                "type": "Identifier",
                                "start": 214,
                                "end": 217,
                                "name": "Foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 217,
                                "end": 220,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 218,
                                    "end": 219,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 218,
                                      "end": 219,
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
                    "start": 230,
                    "end": 244,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 234,
                        "end": 243,
                        "id": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 243,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 235,
                            "end": 243,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 237,
                              "end": 243,
                              "typeName": {
                                "type": "Identifier",
                                "start": 237,
                                "end": 240,
                                "name": "Foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 240,
                                "end": 243,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 241,
                                    "end": 242,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 241,
                                      "end": 242,
                                      "name": "U",
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 253,
                    "end": 259,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 253,
                      "end": 258,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 258,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 299,
                    "argument": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 183,
                "end": 186,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 184,
                    "end": 185,
                    "name": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "name": "U",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 188,
                "end": 196,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 190,
                  "end": 196,
                  "typeName": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 193,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 193,
                    "end": 196,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 194,
                        "end": 195,
                        "typeName": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 195,
                          "name": "U",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 172,
        "end": 175,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 173,
            "end": 174,
            "name": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
