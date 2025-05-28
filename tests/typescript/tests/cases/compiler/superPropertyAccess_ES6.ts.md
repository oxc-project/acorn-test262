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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 49,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 25,
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 49,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 29,
                  "end": 35
                }
              },
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
            "start": 52,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 61,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 85,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
                }
              },
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
              "expression": false
            },
            "kind": "get",
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
      "start": 89,
      "end": 220,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 104,
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 113,
        "end": 119,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 220,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 218,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 135,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 218,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 158,
                    "end": 186,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 164,
                        "end": 185,
                        "id": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 166,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "getValue",
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
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 191,
                    "end": 214,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 197,
                        "end": 213,
                        "id": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "decorators": [],
                          "name": "f2",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "VariableDeclaration",
      "start": 222,
      "end": 246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 230,
            "end": 245,
            "callee": {
              "type": "Identifier",
              "start": 234,
              "end": 243,
              "decorators": [],
              "name": "MyDerived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 264,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 256,
            "end": 263,
            "object": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 258,
              "end": 263,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 266,
      "end": 413,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 273,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 274,
        "end": 413,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 280,
            "end": 306,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 297,
              "decorators": [],
              "name": "_property",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 311,
            "end": 352,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 323,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 323,
              "end": 352,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "_property",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 357,
            "end": 411,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 369,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 369,
              "end": 411,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 370,
                  "end": 383,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 375,
                    "end": 383,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 377,
                      "end": 383
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "_property",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 404,
                        "end": 409,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
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
      "start": 415,
      "end": 522,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 422,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 431,
        "end": 432,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 433,
        "end": 522,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 520,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 451,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 451,
              "end": 520,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 452,
                  "end": 465,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 457,
                    "end": 465,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 494,
                        "end": 513,
                        "left": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 499,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
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
              "expression": false
            },
            "kind": "set",
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
