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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 25,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 55,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 27,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 27,
          "end": 33,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 41,
                "end": 43,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "Property",
              "start": 45,
              "end": 52,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 45,
                "end": 46,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 48,
                "end": 52,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
