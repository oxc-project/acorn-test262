__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 164,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 162,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 162,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 30,
                    "end": 138,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 30,
                      "end": 138,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 36,
                        "end": 138,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 50,
                            "end": 128,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 54,
                                "end": 127,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 54,
                                  "end": 57,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "start": 60,
                                  "end": 127,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 78,
                                      "end": 96,
                                      "computed": true,
                                      "key": {
                                        "type": "CallExpression",
                                        "start": 79,
                                        "end": 89,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 79,
                                          "end": 87,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 79,
                                            "end": 83
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 84,
                                            "end": 87,
                                            "decorators": [],
                                            "name": "bar",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "method": true,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "FunctionExpression",
                                        "start": 90,
                                        "end": 96,
                                        "async": false,
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 93,
                                          "end": 96,
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
                      "params": []
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 147,
                    "end": 156,
                    "argument": {
                      "type": "Literal",
                      "start": 154,
                      "end": 155,
                      "raw": "0",
                      "value": 0
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
