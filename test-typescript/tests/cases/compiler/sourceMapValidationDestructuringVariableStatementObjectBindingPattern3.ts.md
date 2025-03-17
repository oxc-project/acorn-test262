__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 47,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 26,
            "end": 35,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 27,
                "end": 34,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
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
                  "type": "AssignmentPattern",
                  "start": 27,
                  "end": 34,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 31,
                    "end": 34,
                    "raw": "500",
                    "value": 500
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 38,
            "end": 47,
            "properties": [
              {
                "type": "Property",
                "start": 40,
                "end": 45,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 43,
                  "end": 45,
                  "raw": "20",
                  "value": 20
                }
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
