__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 32,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 84,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 33,
          "end": 56,
          "object": {
            "type": "MemberExpression",
            "start": 33,
            "end": 50,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "decorators": [],
              "name": "Greeter",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "decorators": [],
            "name": "greet",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 59,
          "end": 84,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 71,
            "end": 84,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "TSExportAssignment",
      "start": 85,
      "end": 108,
      "expression": {
        "type": "NewExpression",
        "start": 94,
        "end": 107,
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 105,
          "decorators": [],
          "name": "Greeter",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
