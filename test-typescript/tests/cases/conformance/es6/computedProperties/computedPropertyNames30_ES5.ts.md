__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 388,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
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
      "start": 15,
      "end": 388,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 388,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 386,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
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
              "start": 53,
              "end": 386,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 386,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 66,
                    "end": 74,
                    "expression": {
                      "type": "CallExpression",
                      "start": 66,
                      "end": 73,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 66,
                        "end": 71
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 380,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 83,
                      "end": 380,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 89,
                        "end": 380,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 103,
                            "end": 370,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 107,
                                "end": 369,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 107,
                                  "end": 110,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "start": 113,
                                  "end": 369,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 330,
                                      "end": 355,
                                      "computed": true,
                                      "key": {
                                        "type": "SequenceExpression",
                                        "start": 332,
                                        "end": 347,
                                        "expressions": [
                                          {
                                            "type": "CallExpression",
                                            "start": 332,
                                            "end": 339,
                                            "arguments": [],
                                            "callee": {
                                              "type": "Super",
                                              "start": 332,
                                              "end": 337
                                            },
                                            "optional": false
                                          },
                                          {
                                            "type": "Literal",
                                            "start": 341,
                                            "end": 347,
                                            "raw": "\"prop\"",
                                            "value": "prop"
                                          }
                                        ]
                                      },
                                      "kind": "init",
                                      "method": true,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "FunctionExpression",
                                        "start": 349,
                                        "end": 355,
                                        "async": false,
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 352,
                                          "end": 355,
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
