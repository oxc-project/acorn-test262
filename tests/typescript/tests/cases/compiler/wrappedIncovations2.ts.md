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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
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
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 28,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 34,
                "end": 37,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
