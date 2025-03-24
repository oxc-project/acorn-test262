__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 8,
            "end": 41,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 8,
              "end": 37,
              "arguments": [
                {
                  "type": "TSTypeAssertion",
                  "start": 25,
                  "end": 36,
                  "expression": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 36,
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 26,
                    "end": 29
                  }
                }
              ],
              "callee": {
                "type": "FunctionExpression",
                "start": 8,
                "end": 23,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 20,
                  "end": 23,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
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
