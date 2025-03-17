__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 351,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 305,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 21,
              "name": "name"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 80,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 80,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 44,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 80,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 56,
                    "end": 74,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 56,
                      "end": 73,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 56,
                        "end": 66,
                        "object": {
                          "type": "ThisExpression",
                          "start": 56,
                          "end": 60
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 61,
                          "end": 66,
                          "name": "name"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 73,
                        "name": "name",
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
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 303,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 94,
              "name": "getValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 303,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 303,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 108,
                    "end": 125,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 114,
                        "end": 124,
                        "id": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 117,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 120,
                          "end": 124
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 135,
                    "end": 257,
                    "id": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 144,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 145,
                      "end": 257,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 159,
                          "end": 168,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 159,
                            "end": 161,
                            "name": "y"
                          },
                          "value": {
                            "type": "Literal",
                            "start": 164,
                            "end": 167,
                            "value": 100,
                            "raw": "100"
                          },
                          "decorators": [],
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "typeAnnotation": null,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 182,
                          "end": 247,
                          "static": false,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 183,
                            "end": 192,
                            "object": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 186,
                              "name": "obj",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 187,
                              "end": 192,
                              "name": "name"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 193,
                            "end": 247,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 196,
                              "end": 247,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 214,
                                  "end": 233,
                                  "argument": {
                                    "type": "BinaryExpression",
                                    "start": 221,
                                    "end": 232,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 221,
                                      "end": 222,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "operator": "+",
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 225,
                                      "end": 232,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 225,
                                        "end": 229
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 230,
                                        "end": 232,
                                        "name": "y"
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
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
                    "type": "ReturnStatement",
                    "start": 267,
                    "end": 297,
                    "argument": {
                      "type": "CallExpression",
                      "start": 274,
                      "end": 296,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 294,
                        "object": {
                          "type": "NewExpression",
                          "start": 274,
                          "end": 283,
                          "callee": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 281,
                            "name": "Bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        },
                        "property": {
                          "type": "MemberExpression",
                          "start": 284,
                          "end": 293,
                          "object": {
                            "type": "Identifier",
                            "start": 284,
                            "end": 287,
                            "name": "obj",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 288,
                            "end": 293,
                            "name": "name"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 307,
      "end": 350,
      "expression": {
        "type": "CallExpression",
        "start": 307,
        "end": 349,
        "callee": {
          "type": "MemberExpression",
          "start": 307,
          "end": 318,
          "object": {
            "type": "Identifier",
            "start": 307,
            "end": 314,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 315,
            "end": 318,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 319,
            "end": 348,
            "callee": {
              "type": "MemberExpression",
              "start": 319,
              "end": 343,
              "object": {
                "type": "NewExpression",
                "start": 319,
                "end": 334,
                "callee": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 326,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 327,
                    "end": 333,
                    "value": "NAME",
                    "raw": "\"NAME\""
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 335,
                "end": 343,
                "name": "getValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 344,
                "end": 347,
                "value": 100,
                "raw": "100"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
