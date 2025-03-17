__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 12,
          "end": 26,
          "left": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 16,
            "end": 26,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ThisExpression",
              "start": 22,
              "end": 26
            },
            "typeParameters": null,
            "returnType": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 28,
          "end": 35,
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 32,
            "end": 35,
            "callee": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 75,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 63,
            "end": 72,
            "argument": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 87,
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 84,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 84,
            "name": "call",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 85,
            "end": 86,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
