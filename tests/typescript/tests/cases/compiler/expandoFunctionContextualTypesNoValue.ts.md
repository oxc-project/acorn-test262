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
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 35,
        "raw": "\"blah\"",
        "value": "blah"
      },
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
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 63,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 45,
        "end": 63,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 60,
          "end": 63,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 85,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 84,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 65,
          "end": 72,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 75,
          "end": 84,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 81,
            "end": 84,
            "body": []
          },
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
