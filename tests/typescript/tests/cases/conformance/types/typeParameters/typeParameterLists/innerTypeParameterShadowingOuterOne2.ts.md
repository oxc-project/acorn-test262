__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 83,
  "end": 636,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 239,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 90,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 91,
            "end": 105,
            "name": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 101,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 239,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 181,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 181,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 114,
                "end": 132,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 115,
                    "end": 131,
                    "name": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 125,
                      "end": 131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 131,
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 181,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 145,
                    "end": 154,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 149,
                        "end": 153,
                        "id": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 153,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 150,
                            "end": 153,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 152,
                              "end": 153,
                              "typeName": {
                                "type": "Identifier",
                                "start": 152,
                                "end": 153,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 175,
                    "expression": {
                      "type": "CallExpression",
                      "start": 163,
                      "end": 174,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 163,
                        "end": 172,
                        "object": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 164,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 172,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 237,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 237,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 237,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 201,
                    "end": 210,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 205,
                        "end": 209,
                        "id": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 209,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 206,
                            "end": 209,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 208,
                              "end": 209,
                              "typeName": {
                                "type": "Identifier",
                                "start": 208,
                                "end": 209,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 231,
                    "expression": {
                      "type": "CallExpression",
                      "start": 219,
                      "end": 230,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 219,
                        "end": 228,
                        "object": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 220,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 221,
                          "end": 228,
                          "decorators": [],
                          "name": "getDate",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 432,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 249,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 249,
        "end": 281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 264,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 264,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 264,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
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
            "start": 266,
            "end": 280,
            "name": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 276,
              "end": 280,
              "typeName": {
                "type": "Identifier",
                "start": 276,
                "end": 280,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 282,
        "end": 432,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 288,
            "end": 374,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 374,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 289,
                "end": 325,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 290,
                    "end": 306,
                    "name": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 291,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 300,
                      "end": 306,
                      "typeName": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 306,
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null
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
                    "start": 308,
                    "end": 324,
                    "name": {
                      "type": "Identifier",
                      "start": 308,
                      "end": 309,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 318,
                      "end": 324,
                      "typeName": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 324,
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 374,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 338,
                    "end": 347,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 342,
                        "end": 346,
                        "id": {
                          "type": "Identifier",
                          "start": 342,
                          "end": 346,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
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
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 356,
                    "end": 368,
                    "expression": {
                      "type": "CallExpression",
                      "start": 356,
                      "end": 367,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 356,
                        "end": 365,
                        "object": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 357,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 358,
                          "end": 365,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 380,
            "end": 430,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 381,
              "end": 430,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 384,
                "end": 430,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 394,
                    "end": 403,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 398,
                        "end": 402,
                        "id": {
                          "type": "Identifier",
                          "start": 398,
                          "end": 402,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 399,
                            "end": 402,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 401,
                              "end": 402,
                              "typeName": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 402,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 412,
                    "end": 424,
                    "expression": {
                      "type": "CallExpression",
                      "start": 412,
                      "end": 423,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 412,
                        "end": 421,
                        "object": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 413,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 414,
                          "end": 421,
                          "decorators": [],
                          "name": "getDate",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
