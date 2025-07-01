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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 33,
            "end": 34
          },
          "definite": false,
          "start": 29,
          "end": 34
        }
      ],
      "declare": false,
      "start": 25,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 43
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 47
          },
          "optional": false,
          "computed": false,
          "start": 36,
          "end": 47
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          }
        ],
        "optional": false,
        "start": 36,
        "end": 50
      },
      "directive": null,
      "start": 36,
      "end": 51
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 51
}
```
