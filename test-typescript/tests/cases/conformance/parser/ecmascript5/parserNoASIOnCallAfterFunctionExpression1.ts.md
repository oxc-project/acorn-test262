__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 20,
                  "end": 23,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [
                {
                  "type": "TSTypeAssertion",
                  "start": 25,
                  "end": 36,
                  "expression": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 36,
                    "name": "window",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 26,
                    "end": 29
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
