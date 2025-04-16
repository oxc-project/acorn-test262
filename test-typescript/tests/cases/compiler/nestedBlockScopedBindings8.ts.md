__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 6,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
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
      "type": "ForStatement",
      "start": 7,
      "end": 44,
      "init": {
        "type": "VariableDeclaration",
        "start": 12,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 16,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 44,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 34,
            "end": 42,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 34,
              "end": 41,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "y",
            "typeAnnotation": null,
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
      "type": "ForStatement",
      "start": 53,
      "end": 88,
      "init": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 63,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 62,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 88,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 80,
            "end": 86,
            "expression": {
              "type": "AssignmentExpression",
              "start": 80,
              "end": 85,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
