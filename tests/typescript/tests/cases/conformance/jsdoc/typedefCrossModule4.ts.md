__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 39,
        "end": 42
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 42
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
            "start": 43,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 57
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 57
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 65
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 70
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 62,
              "end": 70
            }
          ],
          "start": 60,
          "end": 72
        },
        "start": 43,
        "end": 72
      },
      "directive": null,
      "start": 43,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 74
}
```
