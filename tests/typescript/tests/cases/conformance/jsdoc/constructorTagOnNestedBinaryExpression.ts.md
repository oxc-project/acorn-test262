__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 84,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 84,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 36,
        "end": 83,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 40,
          "end": 83,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "FunctionExpression",
            "start": 44,
            "end": 83,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 58,
              "end": 83,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 64,
                  "end": 81,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 64,
                    "end": 81,
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 64,
                      "end": 75,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 71,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 75,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
