__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nums",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 14,
                    "end": 15
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 17,
                    "end": 18
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 20,
                    "end": 21
                  }
                ],
                "start": 13,
                "end": 22
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 26
              },
              "optional": false,
              "computed": false,
              "start": 13,
              "end": 26
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 27,
                    "end": 28
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 32,
                      "end": 39
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 47
                    },
                    "optional": false,
                    "computed": false,
                    "start": 32,
                    "end": 47
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 49
                    }
                  ],
                  "optional": false,
                  "start": 32,
                  "end": 50
                },
                "id": null,
                "generator": false,
                "start": 27,
                "end": 50
              }
            ],
            "optional": false,
            "start": 13,
            "end": 51
          },
          "definite": false,
          "start": 6,
          "end": 51
        }
      ],
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 60
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ForOfStatement",
                "await": true,
                "left": {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 97
                      },
                      "init": null,
                      "definite": false,
                      "start": 95,
                      "end": 97
                    }
                  ],
                  "declare": false,
                  "start": 89,
                  "end": 97
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nums",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 105
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 117,
                            "end": 124
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 128
                          },
                          "optional": false,
                          "computed": false,
                          "start": 117,
                          "end": 128
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 129,
                            "end": 131
                          }
                        ],
                        "optional": false,
                        "start": 117,
                        "end": 132
                      },
                      "directive": null,
                      "start": 117,
                      "end": 132
                    }
                  ],
                  "start": 107,
                  "end": 138
                },
                "start": 78,
                "end": 138
              }
            ],
            "start": 65,
            "end": 142
          }
        ],
        "start": 61,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 53,
      "end": 144
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 164
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": true,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "nn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 218,
                              "end": 220
                            },
                            "init": null,
                            "definite": false,
                            "start": 218,
                            "end": 220
                          }
                        ],
                        "declare": false,
                        "start": 212,
                        "end": 220
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nums",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 228
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 242,
                                  "end": 249
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 250,
                                  "end": 253
                                },
                                "optional": false,
                                "computed": false,
                                "start": 242,
                                "end": 253
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nn",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 254,
                                  "end": 256
                                }
                              ],
                              "optional": false,
                              "start": 242,
                              "end": 257
                            },
                            "directive": null,
                            "start": 242,
                            "end": 257
                          }
                        ],
                        "start": 230,
                        "end": 265
                      },
                      "start": 201,
                      "end": 265
                    }
                  ],
                  "start": 186,
                  "end": 271
                }
              ],
              "start": 180,
              "end": 275
            },
            "abstract": false,
            "declare": false,
            "start": 172,
            "end": 275
          }
        ],
        "start": 168,
        "end": 277
      },
      "expression": false,
      "start": 146,
      "end": 277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 277
}
```
