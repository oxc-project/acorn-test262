__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 100,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 100,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 98,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 97,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 28,
                  "end": 97,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 36,
                    "end": 97,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 46,
                        "end": 91,
                        "computed": true,
                        "decorators": [],
                        "key": {
                          "type": "YieldExpression",
                          "start": 48,
                          "end": 55,
                          "argument": {
                            "type": "Literal",
                            "start": 54,
                            "end": 55,
                            "raw": "0",
                            "value": 0
                          },
                          "delegate": false
                        },
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 56,
                          "end": 91,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 59,
                            "end": 91,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 73,
                                "end": 81,
                                "expression": {
                                  "type": "YieldExpression",
                                  "start": 73,
                                  "end": 80,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 79,
                                    "end": 80,
                                    "raw": "0",
                                    "value": 0
                                  },
                                  "delegate": false
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "expression": false,
                          "generator": true,
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
                    "name": "C",
                    "optional": false
                  },
                  "implements": [],
                  "superClass": null
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
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
