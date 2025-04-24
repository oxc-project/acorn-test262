__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 42,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 21,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 5,
                "end": 12,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5,
                  "end": 6,
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
                  "start": 5,
                  "end": 12,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 5,
                    "end": 6,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 9,
                    "end": 12,
                    "raw": "500",
                    "value": 500
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 19,
                "end": 20,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 24,
            "end": 42,
            "properties": [
              {
                "type": "Property",
                "start": 26,
                "end": 31,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
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
                  "start": 29,
                  "end": 31,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 33,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 36,
                  "end": 40,
                  "raw": "\"hi\"",
                  "value": "hi"
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
