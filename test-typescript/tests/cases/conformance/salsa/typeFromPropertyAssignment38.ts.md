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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 15,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 30,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 25,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 18,
            "end": 24,
            "value": "prop",
            "raw": "\"prop\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 42,
            "end": 56,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 54,
              "end": 56,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 72,
      "expression": {
        "type": "AssignmentExpression",
        "start": 58,
        "end": 71,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 58,
          "end": 67,
          "object": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 60,
            "end": 66,
            "value": "prop",
            "raw": "\"prop\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 70,
          "end": 71,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
