__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 25,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 23,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 23,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 23,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 232,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 232,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 64,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 56,
              "end": 63,
              "arguments": [],
              "callee": {
                "type": "Super",
                "start": 56,
                "end": 61
              },
              "optional": false
            }
          },
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 230,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 83,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 230,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 230,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 104,
                    "expression": {
                      "type": "CallExpression",
                      "start": 96,
                      "end": 103,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 96,
                        "end": 101
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 115,
                    "end": 162,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 119,
                        "end": 162,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 123,
                          "end": 162,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 129,
                            "end": 162,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 143,
                                "end": 151,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 143,
                                  "end": 150,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Super",
                                    "start": 143,
                                    "end": 148
                                  },
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 172,
                    "end": 224,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 176,
                        "end": 224,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 178,
                          "decorators": [],
                          "name": "y2",
                          "optional": false
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 181,
                          "end": 224,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 192,
                            "end": 224,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 206,
                                "end": 214,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 206,
                                  "end": 213,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Super",
                                    "start": 206,
                                    "end": 211
                                  },
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 250,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 243,
            "end": 250,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
