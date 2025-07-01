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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 10,
                  "end": 13
                },
                "start": 10,
                "end": 15
              },
              "start": 8,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 25
              },
              "property": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 26,
                "end": 27
              },
              "optional": false,
              "computed": true,
              "start": 22,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [],
            "start": 18,
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
