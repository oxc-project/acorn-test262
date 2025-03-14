destructuringTypeAssertionsES5_4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 27,
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
            "start": 12,
            "end": 27,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 17,
              "end": 27,
              "expression": {
                "type": "CallExpression",
                "start": 22,
                "end": 27,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 13,
              "end": 16
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
