__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 39,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 8,
              "end": 37,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 8,
                "end": 30,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 8,
                  "end": 28,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 8,
                    "end": 21,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 8,
                      "end": 19,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 8,
                        "end": 12
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 16,
                        "end": 19,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 28,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 34,
                "end": 37,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
