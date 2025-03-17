__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
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
      "end": 49,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 49,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 34,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 33,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
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
          {
            "type": "ExpressionStatement",
            "start": 39,
            "end": 47,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 39,
              "end": 46,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
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
      "start": 51,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
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
      "start": 58,
      "end": 98,
      "init": null,
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
        "start": 73,
        "end": 98,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 85,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 83,
                "end": 84,
                "id": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
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
          {
            "type": "ExpressionStatement",
            "start": 90,
            "end": 96,
            "expression": {
              "type": "AssignmentExpression",
              "start": 90,
              "end": 95,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 94,
                "end": 95,
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
