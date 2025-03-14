asyncFunctionDeclarationCapturesArguments_es5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 138,
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
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 138,
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
                    "type": "FunctionDeclaration",
                    "start": 56,
                    "end": 133,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 77,
                      "end": 133,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 90,
                          "end": 125,
                          "expression": {
                            "type": "AwaitExpression",
                            "start": 90,
                            "end": 124,
                            "argument": {
                              "type": "CallExpression",
                              "start": 96,
                              "end": 124,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 108,
                                  "end": 112
                                },
                                {
                                  "type": "Identifier",
                                  "start": 114,
                                  "end": 123,
                                  "decorators": [],
                                  "name": "arguments",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 96,
                                "end": 107,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 96,
                                  "end": 101,
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 102,
                                  "end": 107,
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 73,
                      "decorators": [],
                      "name": "fn",
                      "optional": false
                    },
                    "params": []
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
  "sourceType": "script"
}
```
