__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 25,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 25,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 55,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 27,
          "end": 33,
          "elements": [
            {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 36,
          "end": 54,
          "properties": [
            {
              "type": "Property",
              "start": 38,
              "end": 43,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "value": 0,
                "raw": "0"
              },
              "value": {
                "type": "Literal",
                "start": 41,
                "end": 43,
                "value": "",
                "raw": "\"\""
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 45,
              "end": 52,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 45,
                "end": 46,
                "value": 1,
                "raw": "1"
              },
              "value": {
                "type": "Literal",
                "start": 48,
                "end": 52,
                "value": true,
                "raw": "true"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
