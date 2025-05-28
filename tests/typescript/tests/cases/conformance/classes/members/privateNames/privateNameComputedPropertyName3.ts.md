__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 305,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 305,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 22,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 21,
              "name": "name"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 80,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 80,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 44,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 73,
                        "decorators": [],
                        "name": "name",
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
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 303,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 94,
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 94,
              "end": 303,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 98,
                "end": 303,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 108,
                    "end": 125,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 114,
                        "end": 124,
                        "id": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 117,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 120,
                          "end": 124
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 135,
                    "end": 257,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 144,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 145,
                      "end": 257,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 159,
                          "end": 168,
                          "decorators": [],
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 159,
                            "end": 161,
                            "name": "y"
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "start": 164,
                            "end": 167,
                            "value": 100,
                            "raw": "100"
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 182,
                          "end": 247,
                          "decorators": [],
                          "key": {
                            "type": "MemberExpression",
                            "start": 183,
                            "end": 192,
                            "object": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 186,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 187,
                              "end": 192,
                              "name": "name"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 193,
                            "end": 247,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
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
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                      "optional": false,
                                      "computed": false
                                    }
                                  }
                                }
                              ]
                            },
                            "expression": false
                          },
                          "kind": "method",
                          "computed": true,
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
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "property": {
                          "type": "MemberExpression",
                          "start": 284,
                          "end": 293,
                          "object": {
                            "type": "Identifier",
                            "start": 284,
                            "end": 287,
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 288,
                            "end": 293,
                            "name": "name"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "optional": false,
                        "computed": true
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
          }
        ]
      },
      "abstract": false,
      "declare": false
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 315,
            "end": 318,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 327,
                    "end": 333,
                    "value": "NAME",
                    "raw": "\"NAME\""
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 335,
                "end": 343,
                "decorators": [],
                "name": "getValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 344,
                "end": 347,
                "value": 100,
                "raw": "100"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
