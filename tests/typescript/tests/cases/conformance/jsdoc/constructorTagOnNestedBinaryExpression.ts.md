__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 37
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "right": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 71
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 75
                      },
                      "optional": false,
                      "computed": false,
                      "start": 64,
                      "end": 75
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      }
                    ],
                    "optional": false,
                    "start": 64,
                    "end": 81
                  },
                  "directive": null,
                  "start": 64,
                  "end": 81
                }
              ],
              "start": 58,
              "end": 83
            },
            "expression": false,
            "start": 44,
            "end": 83
          },
          "start": 40,
          "end": 83
        },
        "start": 36,
        "end": 83
      },
      "directive": null,
      "start": 36,
      "end": 84
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 84
}
```
