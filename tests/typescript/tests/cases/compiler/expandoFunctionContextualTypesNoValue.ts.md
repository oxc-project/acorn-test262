__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 23
          },
          "start": 20,
          "end": 23
        }
      ],
      "source": {
        "type": "Literal",
        "value": "blah",
        "raw": "\"blah\"",
        "start": 29,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 13,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 57
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
          "start": 60,
          "end": 63
        },
        "expression": false,
        "start": 45,
        "end": 63
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 38,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 72
          },
          "optional": false,
          "computed": false,
          "start": 65,
          "end": 72
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 81,
            "end": 84
          },
          "id": null,
          "generator": false,
          "start": 75,
          "end": 84
        },
        "start": 65,
        "end": 84
      },
      "directive": null,
      "start": 65,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 13,
  "end": 85
}
```
