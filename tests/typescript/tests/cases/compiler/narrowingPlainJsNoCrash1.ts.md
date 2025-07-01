__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 64
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 67,
            "end": 69
          },
          "definite": false,
          "start": 61,
          "end": 69
        }
      ],
      "declare": false,
      "start": 57,
      "end": 70
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 75,
          "end": 76
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 78,
          "end": 79
        }
      ],
      "declare": false,
      "start": 71,
      "end": 80
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a$b",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 88
        },
        "start": 81,
        "end": 88
      },
      "directive": null,
      "start": 81,
      "end": 89
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 98
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a$b",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 106
        },
        "start": 97,
        "end": 106
      },
      "body": {
        "type": "EmptyStatement",
        "start": 107,
        "end": 108
      },
      "start": 90,
      "end": 108
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 124
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a$b",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "start": 121,
          "end": 131
        },
        "start": 117,
        "end": 131
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 134,
          "end": 137
        },
        "directive": null,
        "start": 134,
        "end": 138
      },
      "start": 109,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 138
}
```
