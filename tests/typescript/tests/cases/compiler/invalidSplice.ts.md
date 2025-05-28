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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
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
            "callee": {
              "type": "MemberExpression",
              "start": 10,
              "end": 19,
              "object": {
                "type": "ArrayExpression",
                "start": 10,
                "end": 12,
                "elements": []
              },
              "property": {
                "type": "Identifier",
                "start": 13,
                "end": 19,
                "decorators": [],
                "name": "splice",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "value": 5,
                "raw": "5"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
