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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 41,
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
            "object": {
              "type": "CallExpression",
              "start": 8,
              "end": 37,
              "callee": {
                "type": "FunctionExpression",
                "start": 8,
                "end": 23,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 20,
                  "end": 23,
                  "body": []
                },
                "expression": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSTypeAssertion",
                  "start": 25,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 26,
                    "end": 29
                  },
                  "expression": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 36,
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
