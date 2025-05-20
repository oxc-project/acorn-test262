__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 28,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "raw": "4",
                "value": 4
              },
              {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 10,
              "end": 19,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 10,
                "end": 12,
                "elements": []
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 13,
                "end": 19,
                "decorators": [],
                "name": "splice",
                "optional": false,
                "typeAnnotation": null
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
