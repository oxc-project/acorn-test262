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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 39,
            "callee": {
              "type": "MemberExpression",
              "start": 8,
              "end": 37,
              "object": {
                "type": "CallExpression",
                "start": 8,
                "end": 30,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8,
                  "end": 28,
                  "object": {
                    "type": "CallExpression",
                    "start": 8,
                    "end": 21,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 8,
                      "end": 19,
                      "object": {
                        "type": "ThisExpression",
                        "start": 8,
                        "end": 12
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 16,
                        "end": 19,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 28,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 34,
                "end": 37,
                "name": "baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
