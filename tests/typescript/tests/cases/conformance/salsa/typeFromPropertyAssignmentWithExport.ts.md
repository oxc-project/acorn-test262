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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 59,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 58,
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
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 61,
          "end": 73,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 68,
            "decorators": [],
            "name": "Adapter",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 73,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 76,
          "end": 78,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 150,
      "expression": {
        "type": "AssignmentExpression",
        "start": 115,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 115,
          "end": 134,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 122,
            "decorators": [],
            "name": "Adapter",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 123,
            "end": 134,
            "decorators": [],
            "name": "asyncMethod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 137,
          "end": 150,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 148,
            "end": 150,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
