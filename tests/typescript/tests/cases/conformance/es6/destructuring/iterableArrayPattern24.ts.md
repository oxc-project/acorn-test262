__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 27,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 27,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 18,
                "end": 27,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 18,
                  "end": 25
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 60,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 59,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 29,
          "end": 38,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 33,
              "end": 37,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 41,
          "end": 59,
          "properties": [
            {
              "type": "Property",
              "start": 43,
              "end": 48,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 43,
                "end": 44,
                "value": 0,
                "raw": "0"
              },
              "value": {
                "type": "Literal",
                "start": 46,
                "end": 48,
                "value": "",
                "raw": "\"\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 50,
              "end": 57,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 50,
                "end": 51,
                "value": 1,
                "raw": "1"
              },
              "value": {
                "type": "Literal",
                "start": 53,
                "end": 57,
                "value": true,
                "raw": "true"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
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
