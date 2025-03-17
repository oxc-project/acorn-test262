__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
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
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "''",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 42,
            "arguments": [
              {
                "type": "Literal",
                "start": 32,
                "end": 41,
                "raw": "'invalid'",
                "value": "invalid"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 20,
              "end": 31,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 22,
                "end": 30,
                "raw": "'charAt'",
                "value": "charAt"
              }
            },
            "optional": false,
            "typeArguments": null
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
