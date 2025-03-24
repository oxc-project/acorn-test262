__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 8,
            "end": 25,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 8,
                "end": 9,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 13,
              "end": 25,
              "expression": {
                "type": "TSTypeAssertion",
                "start": 18,
                "end": 25,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 23,
                  "end": 25,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 19,
                  "end": 22
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 14,
                "end": 17
              }
            },
            "typeParameters": null,
            "returnType": null
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
