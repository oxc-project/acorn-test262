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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 21
              },
              "property": {
                "type": "Literal",
                "value": "charAt",
                "raw": "'charAt'",
                "start": 22,
                "end": 30
              },
              "optional": false,
              "computed": true,
              "start": 20,
              "end": 31
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "invalid",
                "raw": "'invalid'",
                "start": 32,
                "end": 41
              }
            ],
            "optional": false,
            "start": 20,
            "end": 42
          },
          "definite": false,
          "start": 16,
          "end": 42
        }
      ],
      "declare": false,
      "start": 12,
      "end": 43
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
