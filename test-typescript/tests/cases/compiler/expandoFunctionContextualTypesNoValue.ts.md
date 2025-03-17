__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 86,
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "name": "Foo",
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
          "start": 60,
          "end": 63,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 75,
          "end": 84,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 81,
            "end": 84,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
