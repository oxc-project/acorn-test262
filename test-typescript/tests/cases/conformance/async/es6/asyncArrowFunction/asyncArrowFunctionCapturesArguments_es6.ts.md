asyncArrowFunctionCapturesArguments_es6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 119,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 119,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 117,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 117,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 117,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 30,
                    "end": 49,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 47,
                      "end": 49,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 44,
                      "decorators": [],
                      "name": "other",
                      "optional": false
                    },
                    "params": []
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 56,
                    "end": 112,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 60,
                        "end": 111,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 62,
                          "decorators": [],
                          "name": "fn",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 65,
                          "end": 111,
                          "async": true,
                          "body": {
                            "type": "AwaitExpression",
                            "start": 77,
                            "end": 111,
                            "argument": {
                              "type": "CallExpression",
                              "start": 83,
                              "end": 111,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 95,
                                  "end": 99
                                },
                                {
                                  "type": "Identifier",
                                  "start": 101,
                                  "end": 110,
                                  "decorators": [],
                                  "name": "arguments",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 83,
                                "end": 94,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 83,
                                  "end": 88,
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 89,
                                  "end": 94,
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          },
                          "expression": true,
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
      "type": "FunctionDeclaration",
      "start": 121,
      "end": 189,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 189,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 139,
            "end": 187,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 146,
              "end": 186,
              "async": true,
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 158,
                "end": 186,
                "async": true,
                "body": {
                  "type": "MemberExpression",
                  "start": 170,
                  "end": 186,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 179,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 186,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
