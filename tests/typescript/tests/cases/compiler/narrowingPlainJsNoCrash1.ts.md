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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 69,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 80,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 89,
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
      },
      "directive": null
    },
    {
      "type": "WhileStatement",
      "start": 90,
      "end": 108,
      "test": {
        "type": "BinaryExpression",
        "start": 97,
        "end": 106,
        "left": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 103,
          "end": 106,
          "decorators": [],
          "name": "a$b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "EmptyStatement",
        "start": 107,
        "end": 108
      }
    },
    {
      "type": "WhileStatement",
      "start": 109,
      "end": 138,
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
          "left": {
            "type": "Identifier",
            "start": 121,
            "end": 124,
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
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
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 134,
        "end": 138,
        "expression": {
          "type": "MemberExpression",
          "start": 134,
          "end": 137,
          "object": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
