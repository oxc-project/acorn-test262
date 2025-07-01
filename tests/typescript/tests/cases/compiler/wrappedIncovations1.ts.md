__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 8,
                        "end": 12
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 16,
                        "end": 19
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8,
                      "end": 19
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 8,
                    "end": 21
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 28
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8,
                  "end": 28
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 8,
                "end": 30
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 37
              },
              "optional": false,
              "computed": false,
              "start": 8,
              "end": 37
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8,
            "end": 39
          },
          "definite": false,
          "start": 4,
          "end": 39
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
