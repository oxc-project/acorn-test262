__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 295,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 295,
            "properties": [
              {
                "type": "Property",
                "start": 23,
                "end": 30,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 27,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 29,
                  "end": 30,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 100,
                "end": 122,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "func",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 106,
                  "end": 122,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 118,
                    "end": 122,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 157,
                "end": 168,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 162,
                  "decorators": [],
                  "name": "func1",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 162,
                  "end": 168,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 165,
                    "end": 168,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 181,
                "end": 213,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 186,
                  "end": 213,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 189,
                    "end": 213,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 193,
                        "end": 210,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 200,
                          "end": 209,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 200,
                            "end": 204
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 205,
                            "end": 209,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
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
                "type": "Property",
                "start": 241,
                "end": 279,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 246,
                  "end": 279,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 254,
                    "end": 279,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 258,
                        "end": 276,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 258,
                          "end": 275,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 258,
                            "end": 267,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 258,
                              "end": 262
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 267,
                              "decorators": [],
                              "name": "prop",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 275,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 247,
                      "end": 252,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    }
                  ]
                }
              }
            ]
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
