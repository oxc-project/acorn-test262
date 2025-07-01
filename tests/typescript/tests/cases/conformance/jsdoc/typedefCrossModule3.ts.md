__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 37
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 40,
            "end": 42
          },
          "definite": false,
          "start": 35,
          "end": 42
        }
      ],
      "declare": false,
      "start": 29,
      "end": 43
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 50
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 50
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 59,
            "end": 61
          },
          "abstract": false,
          "declare": false,
          "start": 53,
          "end": 61
        },
        "start": 44,
        "end": 61
      },
      "directive": null,
      "start": 44,
      "end": 61
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 68
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 76
          },
          "optional": false,
          "computed": false,
          "start": 62,
          "end": 76
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 81
        },
        "start": 62,
        "end": 81
      },
      "directive": null,
      "start": 62,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 83
}
```
