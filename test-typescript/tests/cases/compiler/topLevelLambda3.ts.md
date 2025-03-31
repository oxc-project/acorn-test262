__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 8,
            "end": 28,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 14,
              "end": 28,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 15,
                  "end": 27,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 15,
                    "end": 26,
                    "object": {
                      "type": "ThisExpression",
                      "start": 15,
                      "end": 19
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 26,
                      "name": "window",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
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
