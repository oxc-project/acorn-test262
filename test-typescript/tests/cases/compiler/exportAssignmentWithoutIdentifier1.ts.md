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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 32,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 84,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 33,
          "end": 56,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 33,
            "end": 50,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 40,
              "decorators": [],
              "name": "Greeter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "decorators": [],
            "name": "greet",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 59,
          "end": 84,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 71,
            "end": 84,
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
    },
    {
      "type": "TSExportAssignment",
      "start": 85,
      "end": 108,
      "expression": {
        "type": "NewExpression",
        "start": 94,
        "end": 107,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 105,
          "decorators": [],
          "name": "Greeter",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
