emptyAssignmentPatterns04_ES5iterable.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
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
      "type": "VariableDeclaration",
      "start": 12,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 27,
            "decorators": [],
            "name": "a1",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 31,
            "decorators": [],
            "name": "a2",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 35,
            "decorators": [],
            "name": "a3",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 61,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 59,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 39,
          "end": 50,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 41,
              "end": 42,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 44,
              "end": 45,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 47,
              "end": 48,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 53,
          "end": 59,
          "operator": "=",
          "left": {
            "type": "ObjectPattern",
            "start": 53,
            "end": 55,
            "decorators": [],
            "optional": false,
            "properties": []
          },
          "right": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 87,
      "expression": {
        "type": "AssignmentExpression",
        "start": 63,
        "end": 85,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 63,
          "end": 76,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 65,
              "end": 67,
              "decorators": [],
              "name": "a1",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 69,
              "end": 71,
              "decorators": [],
              "name": "a2",
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "decorators": [],
              "name": "a3",
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 79,
          "end": 85,
          "operator": "=",
          "left": {
            "type": "ArrayPattern",
            "start": 79,
            "end": 81,
            "decorators": [],
            "elements": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
