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
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 19,
        "end": 32
      },
      "expression": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Greeter",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 40
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 50
            },
            "optional": false,
            "computed": false,
            "start": 33,
            "end": 50
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "greet",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "optional": false,
          "computed": false,
          "start": 33,
          "end": 56
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 71,
            "end": 84
          },
          "expression": false,
          "start": 59,
          "end": 84
        },
        "start": 33,
        "end": 84
      },
      "directive": null,
      "start": 33,
      "end": 84
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Greeter",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 105
        },
        "typeArguments": null,
        "arguments": [],
        "start": 94,
        "end": 107
      },
      "start": 85,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
