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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        }
      ],
      "declare": false,
      "start": 0,
      "end": 6
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "init": null,
            "definite": false,
            "start": 16,
            "end": 17
          }
        ],
        "declare": false,
        "start": 12,
        "end": 17
      },
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 19,
        "end": 24
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "id": null,
              "generator": false,
              "start": 34,
              "end": 41
            },
            "directive": null,
            "start": 34,
            "end": 42
          }
        ],
        "start": 28,
        "end": 44
      },
      "start": 7,
      "end": 44
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 51
        }
      ],
      "declare": false,
      "start": 46,
      "end": 52
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "init": null,
            "definite": false,
            "start": 62,
            "end": 63
          }
        ],
        "declare": false,
        "start": 58,
        "end": 63
      },
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 65,
        "end": 70
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 84,
                "end": 85
              },
              "start": 80,
              "end": 85
            },
            "directive": null,
            "start": 80,
            "end": 86
          }
        ],
        "start": 74,
        "end": 88
      },
      "start": 53,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
