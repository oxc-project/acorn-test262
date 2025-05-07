__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 32,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 32,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 21,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 10,
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 11,
            "end": 21,
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "TSAsExpression",
          "start": 24,
          "end": 32,
          "expression": {
            "type": "Literal",
            "start": 24,
            "end": 25,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 29,
            "end": 32
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 58,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 69,
            "end": 70,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 87,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 71,
        "end": 87,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 71,
          "end": 83,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 71,
            "end": 81,
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 86,
          "end": 87,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 104,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 88,
          "end": 100,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 88,
            "end": 98,
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 103,
          "end": 104,
          "raw": "4",
          "value": 4,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
