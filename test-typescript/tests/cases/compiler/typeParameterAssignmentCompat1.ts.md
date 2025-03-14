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
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 46,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "decorators": [],
              "name": "frobble",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 39,
                "decorators": [],
                "name": "value",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 163,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 94,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 88,
                      "end": 94,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
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
            "start": 100,
            "end": 114,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 104,
                "end": 113,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 113,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 113,
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
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 110,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
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
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 152,
            "end": 161,
            "argument": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 74,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 68,
          "end": 74,
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
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 64,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 60,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 62,
            "end": 63,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 307,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 307,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 305,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 183,
              "end": 305,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 220,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 212,
                            "end": 220,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 214,
                              "end": 220,
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
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 214,
                                "end": 217,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false
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
                    "start": 230,
                    "end": 244,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 234,
                        "end": 243,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 243,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 235,
                            "end": 243,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 237,
                              "end": 243,
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
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 237,
                                "end": 240,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false
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
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 258,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 299,
                    "argument": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 188,
                "end": 196,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 190,
                  "end": 196,
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
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 193,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 183,
                "end": 186,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 184,
                    "end": 185,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 172,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 172,
        "end": 175,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 173,
            "end": 174,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
