computedPropertyNames31_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
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
              "start": 20,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 33,
                    "end": 42,
                    "argument": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
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
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 229,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 229,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 227,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
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
              "start": 81,
              "end": 227,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 227,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 94,
                    "end": 203,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 94,
                      "end": 203,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 100,
                        "end": 203,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 114,
                            "end": 193,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 118,
                                "end": 192,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 118,
                                  "end": 121,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "start": 124,
                                  "end": 192,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 142,
                                      "end": 161,
                                      "computed": true,
                                      "key": {
                                        "type": "CallExpression",
                                        "start": 143,
                                        "end": 154,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 143,
                                          "end": 152,
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "start": 143,
                                            "end": 148
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 149,
                                            "end": 152,
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
                                        "start": 155,
                                        "end": 161,
                                        "async": false,
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 158,
                                          "end": 161,
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
                    "start": 212,
                    "end": 221,
                    "argument": {
                      "type": "Literal",
                      "start": 219,
                      "end": 220,
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
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
