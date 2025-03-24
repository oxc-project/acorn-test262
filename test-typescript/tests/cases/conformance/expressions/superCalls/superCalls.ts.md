__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 456,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 23,
              "raw": "43",
              "value": 43
            }
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 60,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 40,
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
              "start": 40,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 60,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 44,
                      "end": 50
                    }
                  }
                }
              ],
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 86,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 86,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 82,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 78,
          "end": 82
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 329,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 329,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 327,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 186,
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
              "start": 186,
              "end": 327,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 327,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 215,
                    "end": 225,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 215,
                      "end": 224,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 221,
                          "end": 223,
                          "raw": "''",
                          "value": ""
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 282,
                    "end": 300,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 286,
                        "end": 299,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 290,
                          "end": 299,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 296,
                              "end": 298,
                              "raw": "''",
                              "value": ""
                            }
                          ],
                          "callee": {
                            "type": "Super",
                            "start": 290,
                            "end": 295
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 309,
                    "end": 321,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 313,
                        "end": 320,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 314,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 317,
                          "end": 320,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 318,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
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
                  "type": "TSParameterProperty",
                  "start": 187,
                  "end": 203,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 203,
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 195,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 197,
                        "end": 203
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 331,
      "end": 351,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 347,
        "end": 351,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 346,
        "decorators": [],
        "name": "OtherBase",
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
      "start": 353,
      "end": 456,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 390,
        "end": 456,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 396,
            "end": 454,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 396,
              "end": 407,
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
              "start": 407,
              "end": 454,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 410,
                "end": 454,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 420,
                    "end": 431,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 424,
                        "end": 430,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 425,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 428,
                          "end": 430,
                          "raw": "''",
                          "value": ""
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 440,
                    "end": 448,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 440,
                      "end": 447,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 440,
                        "end": 445
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
        "start": 359,
        "end": 371,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 380,
        "end": 389,
        "decorators": [],
        "name": "OtherBase",
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
