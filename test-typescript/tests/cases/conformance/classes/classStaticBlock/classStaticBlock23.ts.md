__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "nums",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 51,
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 26,
              "object": {
                "type": "ArrayExpression",
                "start": 13,
                "end": 22,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 14,
                    "end": 15,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 17,
                    "end": 18,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 20,
                    "end": 21,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 27,
                "end": 50,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 32,
                  "end": 50,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 32,
                    "end": 47,
                    "object": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 39,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 47,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
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
      "type": "ClassDeclaration",
      "start": 53,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 144,
        "body": [
          {
            "type": "StaticBlock",
            "start": 65,
            "end": 142,
            "body": [
              {
                "type": "ForOfStatement",
                "start": 78,
                "end": 138,
                "await": true,
                "left": {
                  "type": "VariableDeclaration",
                  "start": 89,
                  "end": 97,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 95,
                      "end": 97,
                      "id": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 97,
                        "name": "nn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "name": "nums",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 107,
                  "end": 138,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 117,
                      "end": 132,
                      "expression": {
                        "type": "CallExpression",
                        "start": 117,
                        "end": 132,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 117,
                          "end": 128,
                          "object": {
                            "type": "Identifier",
                            "start": 117,
                            "end": 124,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 128,
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
                            "type": "Identifier",
                            "start": 129,
                            "end": 131,
                            "name": "nn",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                }
              }
            ]
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
      "type": "FunctionDeclaration",
      "start": 146,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 164,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 277,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 172,
            "end": 275,
            "id": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 180,
              "end": 275,
              "body": [
                {
                  "type": "StaticBlock",
                  "start": 186,
                  "end": 271,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 201,
                      "end": 265,
                      "await": true,
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 212,
                        "end": 220,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 218,
                            "end": 220,
                            "id": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 220,
                              "name": "nn",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 228,
                        "name": "nums",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 230,
                        "end": 265,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 242,
                            "end": 257,
                            "expression": {
                              "type": "CallExpression",
                              "start": 242,
                              "end": 257,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 242,
                                "end": 253,
                                "object": {
                                  "type": "Identifier",
                                  "start": 242,
                                  "end": 249,
                                  "name": "console",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 250,
                                  "end": 253,
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
                                  "type": "Identifier",
                                  "start": 254,
                                  "end": 256,
                                  "name": "nn",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
