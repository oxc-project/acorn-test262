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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 10,
                "end": 12
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "splice",
                "optional": false,
                "typeAnnotation": null,
                "start": 13,
                "end": 19
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 20,
                "end": 21
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 22,
                "end": 23
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 24,
                "end": 25
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 26,
                "end": 27
              }
            ],
            "optional": false,
            "start": 10,
            "end": 28
          },
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
