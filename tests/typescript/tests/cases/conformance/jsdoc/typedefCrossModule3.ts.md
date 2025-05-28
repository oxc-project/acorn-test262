__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 43,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 40,
            "end": 42,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 61,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 50,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 53,
          "end": 61,
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 59,
            "end": 61,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 82,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 81,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 62,
          "end": 76,
          "object": {
            "type": "Identifier",
            "start": 62,
            "end": 68,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 76,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 79,
          "end": 81,
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
