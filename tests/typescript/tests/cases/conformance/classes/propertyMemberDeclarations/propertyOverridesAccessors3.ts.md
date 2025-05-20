__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 534,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 283,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 283,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 58,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "_sound",
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
              "start": 28,
              "end": 58,
              "raw": "'rustling noise in the bushes'",
              "value": "rustling noise in the bushes"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 73,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 98,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 98,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 78,
                    "end": 96,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 96,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 85,
                        "end": 89
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 96,
                        "decorators": [],
                        "name": "_sound",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 103,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "decorators": [],
              "name": "sound",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 144,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 126,
                      "end": 143,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 126,
                        "end": 137,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 126,
                          "end": 130
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 137,
                          "decorators": [],
                          "name": "_sound",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 143,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
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
                  "start": 113,
                  "end": 116,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 229,
            "end": 281,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 238,
              "decorators": [],
              "name": "makeSound",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 281,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 241,
                "end": 281,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 251,
                    "end": 275,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 251,
                      "end": 275,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 263,
                          "end": 274,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 263,
                            "end": 267
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 268,
                            "end": 274,
                            "decorators": [],
                            "name": "_sound",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 251,
                        "end": 262,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 258,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 262,
                          "decorators": [],
                          "name": "log",
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
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 295,
            "end": 305,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 299,
              "end": 305,
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 319,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 306,
        "end": 319,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 306,
          "end": 317,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 308,
            "end": 317,
            "decorators": [],
            "name": "makeSound",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 355,
      "end": 418,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 381,
        "end": 418,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 387,
            "end": 402,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 392,
              "decorators": [],
              "name": "sound",
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
              "start": 395,
              "end": 402,
              "raw": "'RAWR!'",
              "value": "RAWR!"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 365,
        "decorators": [],
        "name": "Lion",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 374,
        "end": 380,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 441,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 430,
            "decorators": [],
            "name": "lion",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 433,
            "end": 441,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 437,
              "end": 441,
              "decorators": [],
              "name": "Lion",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 458,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 458,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 442,
          "end": 456,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 442,
            "end": 446,
            "decorators": [],
            "name": "lion",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 447,
            "end": 456,
            "decorators": [],
            "name": "makeSound",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
