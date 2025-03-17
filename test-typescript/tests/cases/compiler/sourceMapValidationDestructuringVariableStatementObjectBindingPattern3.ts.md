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
          "id": {
            "type": "ObjectPattern",
            "start": 26,
            "end": 35,
            "properties": [
              {
                "type": "Property",
                "start": 27,
                "end": 34,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 27,
                  "end": 34,
                  "left": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 31,
                    "end": 34,
                    "value": 500,
                    "raw": "500"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
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
            "type": "ObjectExpression",
            "start": 38,
            "end": 47,
            "properties": [
              {
                "type": "Property",
                "start": 40,
                "end": 45,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 43,
                  "end": 45,
                  "value": 20,
                  "raw": "20"
                },
                "kind": "init",
                "optional": false
              }
            ]
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
