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
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 58,
              "end": 83,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 64,
                  "end": 81,
                  "expression": {
                    "type": "CallExpression",
                    "start": 64,
                    "end": 81,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 64,
                      "end": 75,
                      "object": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 71,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 75,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
