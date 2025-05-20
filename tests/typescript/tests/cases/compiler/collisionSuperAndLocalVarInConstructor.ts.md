__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 366,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "_super",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 15,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 103,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
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
              "start": 56,
              "end": 103,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 103,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 69,
                    "end": 85,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 73,
                        "end": 84,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 79,
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 82,
                          "end": 84,
                          "raw": "10",
                          "value": 10
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
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Foo",
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
      "start": 106,
      "end": 217,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 126,
        "end": 217,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 215,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 143,
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
              "start": 143,
              "end": 215,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 215,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 164,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 156,
                      "end": 163,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 156,
                        "end": 161
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 173,
                    "end": 189,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 177,
                        "end": 188,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 183,
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 186,
                          "end": 188,
                          "raw": "10",
                          "value": 10
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
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 122,
        "end": 125,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 218,
      "end": 366,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 366,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 364,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 244,
              "end": 255,
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
              "start": 255,
              "end": 364,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 364,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 268,
                    "end": 276,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 268,
                      "end": 275,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 268,
                        "end": 273
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 285,
                    "end": 358,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 289,
                        "end": 358,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 290,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 293,
                          "end": 358,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 299,
                            "end": 358,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 313,
                                "end": 329,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 317,
                                    "end": 328,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 317,
                                      "end": 323,
                                      "decorators": [],
                                      "name": "_super",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 326,
                                      "end": 328,
                                      "raw": "10",
                                      "value": 10
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "var"
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
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
        "start": 224,
        "end": 225,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 234,
        "end": 237,
        "decorators": [],
        "name": "Foo",
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
