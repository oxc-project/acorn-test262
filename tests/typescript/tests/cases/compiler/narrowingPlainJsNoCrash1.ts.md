__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 138,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 64,
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 67,
            "end": 69,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 89,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 88,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 85,
          "end": 88,
          "decorators": [],
          "name": "a$b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 90,
      "end": 108,
      "body": {
        "type": "EmptyStatement",
        "start": 107,
        "end": 108
      },
      "test": {
        "type": "BinaryExpression",
        "start": 97,
        "end": 106,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 103,
          "end": 106,
          "decorators": [],
          "name": "a$b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 109,
      "end": 138,
      "body": {
        "type": "ExpressionStatement",
        "start": 134,
        "end": 138,
        "directive": null,
        "expression": {
          "type": "MemberExpression",
          "start": 134,
          "end": 137,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 121,
          "end": 131,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 121,
            "end": 124,
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
