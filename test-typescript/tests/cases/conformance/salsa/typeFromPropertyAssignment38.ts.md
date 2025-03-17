__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 15,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 15,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 30,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 25,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 18,
            "end": 24,
            "raw": "\"prop\"",
            "value": "prop"
          }
        },
        "right": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 42,
            "end": 56,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 54,
              "end": 56,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 72,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 58,
        "end": 71,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 58,
          "end": 67,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 60,
            "end": 66,
            "raw": "\"prop\"",
            "value": "prop"
          }
        },
        "right": {
          "type": "Literal",
          "start": 70,
          "end": 71,
          "raw": "3",
          "value": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
