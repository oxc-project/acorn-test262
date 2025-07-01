__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ThisExpression",
              "start": 22,
              "end": 26
            },
            "id": null,
            "generator": false,
            "start": 16,
            "end": 26
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 26
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 32,
            "end": 35
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 35
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "start": 63,
            "end": 72
          }
        ],
        "start": 37,
        "end": 75
      },
      "expression": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 79
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 84
          },
          "optional": false,
          "computed": false,
          "start": 77,
          "end": 84
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 85,
            "end": 86
          }
        ],
        "optional": false,
        "start": 77,
        "end": 87
      },
      "directive": null,
      "start": 77,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
