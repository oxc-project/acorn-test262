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
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 9,
            "properties": [
              {
                "type": "Property",
                "start": 6,
                "end": 7,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 7,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
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
                "callee": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
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
