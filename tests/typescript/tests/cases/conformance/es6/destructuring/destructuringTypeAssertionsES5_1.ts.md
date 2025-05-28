__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 9,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 6,
                "end": 7,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 12,
            "end": 22,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 13,
              "end": 16
            },
            "expression": {
              "type": "CallExpression",
              "start": 17,
              "end": 22,
              "callee": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
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
