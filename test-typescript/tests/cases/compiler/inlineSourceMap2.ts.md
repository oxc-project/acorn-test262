__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 33,
            "end": 34,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 36,
        "end": 50,
        "callee": {
          "type": "MemberExpression",
          "start": 36,
          "end": 47,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
