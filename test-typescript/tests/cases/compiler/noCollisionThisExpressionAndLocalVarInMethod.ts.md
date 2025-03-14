__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 372,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "_this",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 13,
            "raw": "2",
            "value": 2
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 372,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 372,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 201,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "decorators": [],
              "name": "method1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 201,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 201,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 195,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 56,
                      "end": 195,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 70,
                          "end": 185,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 77,
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
                            "start": 79,
                            "end": 185,
                            "async": false,
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 93,
                              "end": 185,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 99,
                                "end": 185,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 117,
                                    "end": 131,
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 121,
                                        "end": 130,
                                        "definite": false,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 121,
                                          "end": 126,
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "start": 129,
                                          "end": 130,
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
                                    "start": 148,
                                    "end": 171,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 155,
                                      "end": 170,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 164,
                                          "end": 169,
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 155,
                                        "end": 163,
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
                                "start": 80,
                                "end": 88,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 370,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 213,
              "decorators": [],
              "name": "method2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 213,
              "end": 370,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 216,
                "end": 370,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 226,
                    "end": 240,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 230,
                        "end": 239,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 235,
                          "decorators": [],
                          "name": "_this",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 238,
                          "end": 239,
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
                    "start": 249,
                    "end": 364,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 256,
                      "end": 364,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 270,
                          "end": 354,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 277,
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
                            "start": 279,
                            "end": 354,
                            "async": false,
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 293,
                              "end": 354,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 299,
                                "end": 354,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 317,
                                    "end": 340,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 324,
                                      "end": 339,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 333,
                                          "end": 338,
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 324,
                                        "end": 332,
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
                                "start": 280,
                                "end": 288,
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
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "a",
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
