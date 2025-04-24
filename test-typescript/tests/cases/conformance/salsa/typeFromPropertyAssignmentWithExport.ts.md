__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 150,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 58,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "decorators": [],
              "name": "Adapter",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 56,
              "end": 58,
              "properties": []
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 61,
          "end": 73,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 68,
            "decorators": [],
            "name": "Adapter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 73,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 76,
          "end": 78,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 150,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 115,
          "end": 134,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 122,
            "decorators": [],
            "name": "Adapter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 123,
            "end": 134,
            "decorators": [],
            "name": "asyncMethod",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 137,
          "end": 150,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 148,
            "end": 150,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
