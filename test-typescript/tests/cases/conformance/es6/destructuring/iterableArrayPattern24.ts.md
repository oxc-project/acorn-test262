iterableArrayPattern24.ts
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
          "end": 27,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 33,
              "end": 37,
              "argument": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false
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
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 43,
                "end": 44,
                "raw": "0",
                "value": 0
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 46,
                "end": 48,
                "raw": "\"\"",
                "value": ""
              }
            },
            {
              "type": "Property",
              "start": 50,
              "end": 57,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 50,
                "end": 51,
                "raw": "1",
                "value": 1
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 53,
                "end": 57,
                "raw": "true",
                "value": true
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
