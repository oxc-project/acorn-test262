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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
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
      "type": "ForStatement",
      "start": 7,
      "end": 44,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 44,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 34,
            "end": 42,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 34,
              "end": 41,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 12,
        "end": 17,
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
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "false",
        "value": false,
        "regex": null,
        "bigint": null
      },
      "update": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "y",
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
      "type": "ForStatement",
      "start": 53,
      "end": 88,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 88,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 80,
            "end": 86,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 80,
              "end": 85,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 63,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 62,
            "end": 63,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "raw": "false",
        "value": false,
        "regex": null,
        "bigint": null
      },
      "update": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
