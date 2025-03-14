destructuringTypeAssertionsES5_2.ts
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
          "end": 24,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 9,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 6,
                "end": 7,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 13,
            "end": 23,
            "expression": {
              "type": "CallExpression",
              "start": 18,
              "end": 23,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 18,
                "end": 21,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 14,
              "end": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
