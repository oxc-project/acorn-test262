es5-asyncFunctionNestedLoops.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 211,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 211,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 66,
            "end": 209,
            "body": {
              "type": "WhileStatement",
              "start": 69,
              "end": 209,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 209,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 97,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 89,
                      "end": 96,
                      "argument": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "WhileStatement",
                    "start": 106,
                    "end": 151,
                    "body": {
                      "type": "BlockStatement",
                      "start": 116,
                      "end": 151,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 130,
                          "end": 141,
                          "label": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  },
                  {
                    "type": "WhileStatement",
                    "start": 160,
                    "end": 203,
                    "body": {
                      "type": "BlockStatement",
                      "start": 170,
                      "end": 203,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 184,
                          "end": 193,
                          "label": null
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 57,
        "decorators": [],
        "name": "nestedLoops",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
