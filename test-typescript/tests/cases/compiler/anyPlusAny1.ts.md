anyPlusAny1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
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
            "name": "x",
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
      "start": 12,
      "end": 29,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 28,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 18,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "name",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 21,
          "end": 28,
          "raw": "\"hello\"",
          "value": "hello"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 38,
            "end": 43,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
