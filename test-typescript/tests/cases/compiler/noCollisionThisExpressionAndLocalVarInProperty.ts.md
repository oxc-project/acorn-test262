__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 331,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 155,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 155,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 153,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "start": 34,
              "end": 153,
              "properties": [
                {
                  "type": "Property",
                  "start": 44,
                  "end": 147,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 51,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 53,
                    "end": 147,
                    "async": false,
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 67,
                      "end": 147,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 73,
                        "end": 147,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 87,
                            "end": 101,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 91,
                                "end": 100,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 91,
                                  "end": 96,
                                  "decorators": [],
                                  "name": "_this",
                                  "optional": false
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 99,
                                  "end": 100,
                                  "raw": "2",
                                  "value": 2
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 114,
                            "end": 137,
                            "argument": {
                              "type": "CallExpression",
                              "start": 121,
                              "end": 136,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 130,
                                  "end": 135,
                                  "decorators": [],
                                  "name": "_this",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 121,
                                "end": 129,
                                "decorators": [],
                                "name": "callback",
                                "optional": false
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
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 54,
                        "end": 62,
                        "decorators": [],
                        "name": "callback",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
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
        "name": "class1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 331,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 331,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 176,
            "end": 220,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 187,
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
              "start": 187,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 220,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 200,
                    "end": 214,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 204,
                        "end": 213,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 209,
                          "decorators": [],
                          "name": "_this",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 212,
                          "end": 213,
                          "raw": "2",
                          "value": 2
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
          },
          {
            "type": "PropertyDefinition",
            "start": 225,
            "end": 329,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 237,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ObjectExpression",
              "start": 240,
              "end": 329,
              "properties": [
                {
                  "type": "Property",
                  "start": 250,
                  "end": 323,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 257,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 259,
                    "end": 323,
                    "async": false,
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 273,
                      "end": 323,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 279,
                        "end": 323,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 293,
                            "end": 313,
                            "argument": {
                              "type": "CallExpression",
                              "start": 300,
                              "end": 312,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 309,
                                  "end": 311,
                                  "raw": "10",
                                  "value": 10
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 300,
                                "end": 308,
                                "decorators": [],
                                "name": "callback",
                                "optional": false
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
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 260,
                        "end": 268,
                        "decorators": [],
                        "name": "callback",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 169,
        "decorators": [],
        "name": "class2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
