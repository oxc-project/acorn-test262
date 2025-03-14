checkSuperCallBeforeThisAccessing8.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 144,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 45,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 45,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 30,
                  "end": 36,
                  "argument": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 36,
                    "decorators": [],
                    "name": "arg",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
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
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 144,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 144,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 142,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 90,
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
              "start": 90,
              "end": 142,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 142,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 103,
                    "end": 119,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 107,
                        "end": 118,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 111,
                          "decorators": [],
                          "name": "that",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 136,
                    "expression": {
                      "type": "CallExpression",
                      "start": 128,
                      "end": 135,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 128,
                        "end": 133
                      },
                      "optional": false
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
        "start": 54,
        "end": 59,
        "decorators": [],
        "name": "Super",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 68,
        "end": 72,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
