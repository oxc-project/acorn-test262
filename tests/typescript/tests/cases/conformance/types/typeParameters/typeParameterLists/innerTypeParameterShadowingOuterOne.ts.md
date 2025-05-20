__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 599,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 228,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 228,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 118,
            "end": 195,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 149,
              "end": 195,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 159,
                  "end": 168,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 163,
                      "end": 167,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 167,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 167,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
                  "start": 177,
                  "end": 189,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 177,
                    "end": 188,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 177,
                      "end": 186,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 186,
                        "decorators": [],
                        "name": "toFixed",
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
            "id": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 128,
              "end": 146,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 129,
                  "end": 145,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 145,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 145,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
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
          {
            "type": "VariableDeclaration",
            "start": 200,
            "end": 209,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 204,
                "end": 208,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 208,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 207,
                      "end": 208,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 214,
            "end": 226,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 214,
              "end": 225,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 214,
                "end": 223,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 223,
                  "decorators": [],
                  "name": "getDate",
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
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 108,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 108,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 108,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
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
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 410,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 276,
        "end": 410,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 282,
            "end": 377,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 331,
              "end": 377,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 341,
                  "end": 350,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 345,
                      "end": 349,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 349,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 346,
                          "end": 349,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 348,
                            "end": 349,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 348,
                              "end": 349,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
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
                  "start": 359,
                  "end": 371,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 359,
                    "end": 370,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 359,
                      "end": 368,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 368,
                        "decorators": [],
                        "name": "toFixed",
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
            "id": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 292,
              "end": 328,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 293,
                  "end": 309,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 303,
                    "end": 309,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 309,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 311,
                  "end": 327,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 321,
                    "end": 327,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 327,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 382,
            "end": 391,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 386,
                "end": 390,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 390,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 387,
                    "end": 390,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 389,
                      "end": 390,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 396,
            "end": 408,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 396,
              "end": 407,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 396,
                "end": 405,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 397,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 405,
                  "decorators": [],
                  "name": "getDate",
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
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 241,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 241,
        "end": 273,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 242,
            "end": 256,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 256,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 258,
            "end": 272,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 272,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 272,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
