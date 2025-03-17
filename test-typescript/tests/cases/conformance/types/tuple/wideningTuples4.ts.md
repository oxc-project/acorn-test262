__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 12,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 7,
                "end": 12,
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 8,
                    "end": 11
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 15,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 23,
            "end": 44,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 27,
              "end": 44,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 37,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 39,
                  "end": 43,
                  "value": null,
                  "raw": "null"
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 59,
      "expression": {
        "type": "AssignmentExpression",
        "start": 46,
        "end": 58,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 50,
          "end": 58,
          "elements": [
            {
              "type": "Literal",
              "start": 51,
              "end": 53,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "Literal",
              "start": 55,
              "end": 57,
              "value": "",
              "raw": "\"\""
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
