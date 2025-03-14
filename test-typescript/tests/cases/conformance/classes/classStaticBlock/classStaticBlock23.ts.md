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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "nums",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 51,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 27,
                "end": 50,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 32,
                  "end": 50,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 32,
                    "end": 47,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 39,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 47,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 26,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 13,
                "end": 22,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 14,
                    "end": 15,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 17,
                    "end": 18,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 20,
                    "end": 21,
                    "raw": "3",
                    "value": 3
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 23,
                "end": 26,
                "decorators": [],
                "name": "map",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 144,
      "abstract": false,
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
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 129,
                            "end": 131,
                            "decorators": [],
                            "name": "nn",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 117,
                          "end": 128,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 117,
                            "end": 124,
                            "decorators": [],
                            "name": "console",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 128,
                            "decorators": [],
                            "name": "log",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "left": {
                  "type": "VariableDeclaration",
                  "start": 89,
                  "end": 97,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 95,
                      "end": 97,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 97,
                        "decorators": [],
                        "name": "nn",
                        "optional": false
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                "right": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "nums",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 146,
      "end": 277,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 277,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 172,
            "end": 275,
            "abstract": false,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 254,
                                  "end": 256,
                                  "decorators": [],
                                  "name": "nn",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 242,
                                "end": 253,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 242,
                                  "end": 249,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 250,
                                  "end": 253,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 212,
                        "end": 220,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 218,
                            "end": 220,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 220,
                              "decorators": [],
                              "name": "nn",
                              "optional": false
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 228,
                        "decorators": [],
                        "name": "nums",
                        "optional": false
                      }
                    }
                  ]
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 164,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
