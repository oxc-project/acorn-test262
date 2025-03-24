__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 399,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 233,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 150,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 130,
                    "end": 144,
                    "argument": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 143,
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 100,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 100,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 100,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 115,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 116,
                "end": 119,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 118,
                  "end": 119,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 88,
                "end": 91,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 89,
                    "end": 90,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 231,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 231,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 184,
                "end": 231,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 194,
                    "end": 225,
                    "argument": {
                      "type": "CallExpression",
                      "start": 201,
                      "end": 224,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 213,
                          "end": 219,
                          "decorators": [],
                          "name": "source",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 221,
                          "end": 223,
                          "raw": "42",
                          "value": 42
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 201,
                        "end": 209,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 201,
                          "end": 205
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 209,
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 209,
                        "end": 212,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 210,
                            "end": 211,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 210,
                              "end": 211,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 179,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 179,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 180,
                "end": 183,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 182,
                  "end": 183,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 166,
                "end": 169,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 167,
                    "end": 168,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 235,
      "end": 397,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 243,
        "end": 397,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 250,
            "end": 320,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 260,
              "end": 320,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 290,
                "end": 320,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 300,
                    "end": 314,
                    "argument": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 313,
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 261,
                  "end": 270,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 270,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 285,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 277,
                    "end": 285,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 279,
                      "end": 285
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 286,
                "end": 289,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 288,
                  "end": 289,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 326,
            "end": 395,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 336,
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 336,
              "end": 395,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 351,
                "end": 395,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 361,
                    "end": 389,
                    "argument": {
                      "type": "CallExpression",
                      "start": 368,
                      "end": 388,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 377,
                          "end": 383,
                          "decorators": [],
                          "name": "source",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 385,
                          "end": 387,
                          "raw": "42",
                          "value": 42
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 368,
                        "end": 376,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 368,
                          "end": 372
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 373,
                          "end": 376,
                          "decorators": [],
                          "name": "one",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 337,
                  "end": 346,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 343,
                    "end": 346,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 345,
                      "end": 346,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 347,
                "end": 350,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 349,
                  "end": 350,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 242,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
