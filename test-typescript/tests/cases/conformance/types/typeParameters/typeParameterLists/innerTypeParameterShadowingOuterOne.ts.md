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
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
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
        "start": 112,
        "end": 228,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 118,
            "end": 195,
            "id": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "g",
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
                      "id": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 167,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 167,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
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
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 177,
                  "end": 189,
                  "expression": {
                    "type": "CallExpression",
                    "start": 177,
                    "end": 188,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 177,
                      "end": 186,
                      "object": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 186,
                        "name": "toFixed",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 128,
              "end": 146,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 129,
                  "end": 145,
                  "name": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 139,
                    "end": 145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 145,
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
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
            "type": "VariableDeclaration",
            "start": 200,
            "end": 209,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 204,
                "end": 208,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 208,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 205,
                    "end": 208,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 207,
                      "end": 208,
                      "typeName": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 226,
            "expression": {
              "type": "CallExpression",
              "start": 214,
              "end": 225,
              "callee": {
                "type": "MemberExpression",
                "start": 214,
                "end": 223,
                "object": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 223,
                  "name": "getDate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 108,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 108,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 410,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 241,
        "name": "f2",
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
        "start": 276,
        "end": 410,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 282,
            "end": 377,
            "id": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "g",
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
                      "id": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 349,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 346,
                          "end": 349,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 348,
                            "end": 349,
                            "typeName": {
                              "type": "Identifier",
                              "start": 348,
                              "end": 349,
                              "name": "U",
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
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 359,
                  "end": 371,
                  "expression": {
                    "type": "CallExpression",
                    "start": 359,
                    "end": 370,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 359,
                      "end": 368,
                      "object": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 368,
                        "name": "toFixed",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 292,
              "end": 328,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 293,
                  "end": 309,
                  "name": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 303,
                    "end": 309,
                    "typeName": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 309,
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 311,
                  "end": 327,
                  "name": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 321,
                    "end": 327,
                    "typeName": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 327,
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
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
            "type": "VariableDeclaration",
            "start": 382,
            "end": 391,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 386,
                "end": 390,
                "id": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 390,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 387,
                    "end": 390,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 389,
                      "end": 390,
                      "typeName": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
                        "name": "U",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 396,
            "end": 408,
            "expression": {
              "type": "CallExpression",
              "start": 396,
              "end": 407,
              "callee": {
                "type": "MemberExpression",
                "start": 396,
                "end": 405,
                "object": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 397,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 405,
                  "name": "getDate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 241,
        "end": 273,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 242,
            "end": 256,
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 256,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 258,
            "end": 272,
            "name": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 268,
              "end": 272,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 272,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
