__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 330,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 93,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 93,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 50,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 50,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 50,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 26,
                  "end": 41,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 41,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 35,
                        "end": 41
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 72,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 64,
              "decorators": [],
              "name": "ll",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 71,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
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
      "start": 95,
      "end": 329,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 329,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 130,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 169,
                    "end": 177,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 169,
                      "end": 177,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 175,
                          "end": 176,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 169,
                        "end": 174
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 186,
                    "end": 197,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 190,
                        "end": 196,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 191,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 192,
                          "end": 196,
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "start": 192,
                            "end": 194,
                            "raw": "10",
                            "value": 10
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 196,
                            "decorators": [],
                            "name": "w",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 206,
                    "end": 217,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 210,
                        "end": 216,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 212,
                          "decorators": [],
                          "name": "ll",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 213,
                          "end": 216,
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 214,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 216,
                            "decorators": [],
                            "name": "w",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 131,
                  "end": 139,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 133,
                      "end": 139
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 140,
                  "end": 148,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 148,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 142,
                      "end": 148
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 157,
                  "decorators": [],
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 229,
            "end": 269,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 243,
              "decorators": [],
              "name": "liftxyz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 269,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 247,
                "end": 269,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 249,
                    "end": 267,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 256,
                      "end": 266,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 256,
                        "end": 259,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 257,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 259,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 260,
                        "end": 266,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 260,
                          "end": 264
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 265,
                          "end": 266,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 327,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 293,
              "decorators": [],
              "name": "liftxylocllz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 294,
              "end": 327,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 327,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 299,
                    "end": 325,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 306,
                      "end": 324,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 306,
                        "end": 316,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 306,
                          "end": 309,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 306,
                            "end": 307,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 309,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 310,
                          "end": 316,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 310,
                            "end": 314
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 316,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 317,
                        "end": 324,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 317,
                          "end": 321
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 324,
                          "decorators": [],
                          "name": "ll",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
