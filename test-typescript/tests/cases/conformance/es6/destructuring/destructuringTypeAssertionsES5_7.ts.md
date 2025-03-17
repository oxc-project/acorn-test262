__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
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
                  "optional": false,
                  "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 12,
            "end": 29,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 17,
              "end": 29,
              "expression": {
                "type": "NewExpression",
                "start": 22,
                "end": 29,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
  "sourceType": "script",
  "hashbang": null
}
```
