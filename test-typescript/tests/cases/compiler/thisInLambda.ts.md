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
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
              "start": 20,
              "end": 27,
              "raw": "\"hello\"",
              "value": "hello"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 155,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 155,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 49,
                    "end": 56,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 49,
                      "end": 55,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 49,
                        "end": 53
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 89,
                    "end": 110,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 93,
                        "end": 109,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 94,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 97,
                          "end": 109,
                          "async": false,
                          "body": {
                            "type": "MemberExpression",
                            "start": 103,
                            "end": 109,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 103,
                              "end": 107
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 108,
                              "end": 109,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "expression": true,
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
        "start": 6,
        "end": 9,
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
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 183,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 183,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 172,
        "decorators": [],
        "name": "myFn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 178,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 178,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 175,
              "end": 178
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 330,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 330,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 202,
            "end": 328,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 213,
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
              "start": 214,
              "end": 328,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 328,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 227,
                    "end": 322,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 227,
                      "end": 321,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 232,
                          "end": 320,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 238,
                            "end": 320,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 252,
                                "end": 310,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 252,
                                  "end": 309,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 257,
                                      "end": 308,
                                      "async": false,
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 263,
                                        "end": 308,
                                        "body": [
                                          {
                                            "type": "VariableDeclaration",
                                            "start": 281,
                                            "end": 294,
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "start": 285,
                                                "end": 293,
                                                "definite": false,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 285,
                                                  "end": 286,
                                                  "decorators": [],
                                                  "name": "x",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "init": {
                                                  "type": "ThisExpression",
                                                  "start": 289,
                                                  "end": 293
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
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 252,
                                    "end": 256,
                                    "decorators": [],
                                    "name": "myFn",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
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
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 231,
                        "decorators": [],
                        "name": "myFn",
                        "optional": false,
                        "typeAnnotation": null
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
        "start": 190,
        "end": 195,
        "decorators": [],
        "name": "myCls",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
