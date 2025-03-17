__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 400,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 150,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 150,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 100,
                  "name": "source",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 100,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 100,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
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
                },
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 115,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "source",
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
                "start": 88,
                "end": 91,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 89,
                    "end": 90,
                    "name": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 116,
                "end": 119,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 118,
                  "end": 119,
                  "typeName": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 231,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "name": "two",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 231,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 179,
                  "name": "source",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 178,
                      "end": 179,
                      "typeName": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 201,
                        "end": 209,
                        "object": {
                          "type": "ThisExpression",
                          "start": 201,
                          "end": 205
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 209,
                          "name": "one",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 213,
                          "end": 219,
                          "name": "source",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 221,
                          "end": 223,
                          "value": 42,
                          "raw": "42"
                        }
                      ],
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 210,
                              "end": 211,
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
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 166,
                "end": 169,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 167,
                    "end": 168,
                    "name": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 180,
                "end": 183,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 182,
                  "end": 183,
                  "typeName": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 235,
      "end": 397,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 242,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 243,
        "end": 397,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 250,
            "end": 320,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 260,
              "end": 320,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 261,
                  "end": 270,
                  "name": "source",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 270,
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 285,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 277,
                    "end": 285,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 279,
                      "end": 285
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "source",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 286,
                "end": 289,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 288,
                  "end": 289,
                  "typeName": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 326,
            "end": 395,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 336,
              "name": "two",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 336,
              "end": 395,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 337,
                  "end": 346,
                  "name": "source",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 343,
                    "end": 346,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 345,
                      "end": 346,
                      "typeName": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 346,
                        "name": "B",
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 368,
                        "end": 376,
                        "object": {
                          "type": "ThisExpression",
                          "start": 368,
                          "end": 372
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 373,
                          "end": 376,
                          "name": "one",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 377,
                          "end": 383,
                          "name": "source",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 385,
                          "end": 387,
                          "value": 42,
                          "raw": "42"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 347,
                "end": 350,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 349,
                  "end": 350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "typeParameters": null,
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
