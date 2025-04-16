__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 522,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "MyBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 25,
              "name": "getValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 49,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 49,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 38,
                    "end": 47,
                    "argument": {
                      "type": "Literal",
                      "start": 45,
                      "end": 46,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 29,
                  "end": 35
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
            "start": 52,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 61,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 72,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 74,
                    "end": 83,
                    "argument": {
                      "type": "Literal",
                      "start": 81,
                      "end": 82,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
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
      "start": 89,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 104,
        "name": "MyDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 113,
        "end": 119,
        "name": "MyBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 220,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 218,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 135,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 218,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 218,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 144,
                    "end": 152,
                    "expression": {
                      "type": "CallExpression",
                      "start": 144,
                      "end": 151,
                      "callee": {
                        "type": "Super",
                        "start": 144,
                        "end": 149
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 158,
                    "end": 186,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 164,
                        "end": 185,
                        "id": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 166,
                          "name": "f1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 169,
                          "end": 185,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 169,
                            "end": 183,
                            "object": {
                              "type": "Super",
                              "start": 169,
                              "end": 174
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 183,
                              "name": "getValue",
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
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 191,
                    "end": 214,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 197,
                        "end": 213,
                        "id": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "name": "f2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 202,
                          "end": 213,
                          "object": {
                            "type": "Super",
                            "start": 202,
                            "end": 207
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 213,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
              "typeParameters": null,
              "returnType": null
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
      "type": "VariableDeclaration",
      "start": 222,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 230,
            "end": 245,
            "callee": {
              "type": "Identifier",
              "start": 234,
              "end": 243,
              "name": "MyDerived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "name": "f3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 256,
            "end": 263,
            "object": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 258,
              "end": 263,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 266,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 273,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 274,
        "end": 413,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 280,
            "end": 306,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 297,
              "name": "_property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 305,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 299,
                "end": 305
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 311,
            "end": 352,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 323,
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 323,
              "end": 352,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 352,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 328,
                    "end": 350,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 335,
                      "end": 349,
                      "object": {
                        "type": "ThisExpression",
                        "start": 335,
                        "end": 339
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 349,
                        "name": "_property",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 357,
            "end": 411,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 369,
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 369,
              "end": 411,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 370,
                  "end": 383,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 375,
                    "end": 383,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 377,
                      "end": 383
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 385,
                "end": 411,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 387,
                    "end": 409,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 387,
                      "end": 409,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 387,
                        "end": 401,
                        "object": {
                          "type": "ThisExpression",
                          "start": 387,
                          "end": 391
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 401,
                          "name": "_property",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 404,
                        "end": 409,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
      "start": 415,
      "end": 522,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 422,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 431,
        "end": 432,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 433,
        "end": 522,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 520,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 451,
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 451,
              "end": 520,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 452,
                  "end": 465,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 457,
                    "end": 465,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 467,
                "end": 520,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 477,
                    "end": 514,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 477,
                      "end": 513,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 477,
                        "end": 491,
                        "object": {
                          "type": "Super",
                          "start": 477,
                          "end": 482
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 491,
                          "name": "property",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 494,
                        "end": 513,
                        "left": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 499,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 502,
                          "end": 513,
                          "value": " addition",
                          "raw": "\" addition\""
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
