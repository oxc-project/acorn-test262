__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 35,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
