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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 42,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 61,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 50,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 53,
          "end": 61,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 59,
            "end": 61,
            "body": []
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 81,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 62,
          "end": 76,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 62,
            "end": 68,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 76,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
