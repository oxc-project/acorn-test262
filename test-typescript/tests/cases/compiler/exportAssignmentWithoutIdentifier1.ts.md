__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "Greeter",
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
        "start": 19,
        "end": 32,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
              "name": "Greeter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "name": "greet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 59,
          "end": 84,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 71,
            "end": 84,
            "body": []
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
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
          "name": "Greeter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
