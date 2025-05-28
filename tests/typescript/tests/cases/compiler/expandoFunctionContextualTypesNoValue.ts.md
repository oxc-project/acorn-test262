__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 85,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 13,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 20,
          "end": 23,
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 35,
        "value": "blah",
        "raw": "\"blah\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 63,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 45,
        "end": 63,
        "id": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "Foo",
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
          "start": 60,
          "end": 63,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 85,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 65,
          "end": 72,
          "object": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 75,
          "end": 84,
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 81,
            "end": 84,
            "body": []
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
