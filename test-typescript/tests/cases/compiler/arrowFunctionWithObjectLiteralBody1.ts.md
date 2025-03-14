__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 8,
            "end": 20,
            "async": false,
            "body": {
              "type": "TSTypeAssertion",
              "start": 13,
              "end": 20,
              "expression": {
                "type": "ObjectExpression",
                "start": 18,
                "end": 20,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 14,
                "end": 17
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 8,
                "end": 9,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
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
