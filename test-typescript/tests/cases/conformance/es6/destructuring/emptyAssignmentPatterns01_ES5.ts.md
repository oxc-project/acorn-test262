__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
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
      "start": 13,
      "end": 22,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 20,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 14,
          "end": 16,
          "decorators": [],
          "optional": false,
          "properties": [],
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 19,
          "end": 20,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 32,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 24,
        "end": 30,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 24,
          "end": 26,
          "decorators": [],
          "elements": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 49,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 38,
            "end": 41,
            "decorators": [],
            "elements": [
              null
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 44,
            "end": 49,
            "elements": [
              {
                "type": "Literal",
                "start": 45,
                "end": 46,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 47,
                "end": 48,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
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
