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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 15,
                      "end": 19
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 26
                    },
                    "optional": false,
                    "computed": false,
                    "start": 15,
                    "end": 26
                  },
                  "directive": null,
                  "start": 15,
                  "end": 27
                }
              ],
              "start": 14,
              "end": 28
            },
            "id": null,
            "generator": false,
            "start": 8,
            "end": 28
          },
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 28
}
```
