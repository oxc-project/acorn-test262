__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 81,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 81,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 79,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 36,
              "decorators": [],
              "name": "function1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 79,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 79,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 49,
                    "end": 58,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 54,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "start": 56,
                        "end": 57,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 56,
                          "end": 57,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 73,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 67,
                      "end": 72,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 71,
                        "end": 72,
                        "raw": "1",
                        "value": 1
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "greeter",
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
