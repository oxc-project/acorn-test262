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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "test",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 15,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 10,
                "end": 15,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 10,
                  "end": 13
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 18,
            "end": 28,
            "callee": {
              "type": "MemberExpression",
              "start": 22,
              "end": 28,
              "object": {
                "type": "Identifier",
                "start": 22,
                "end": 25,
                "name": "any",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "value": 1,
                "raw": "1"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
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
