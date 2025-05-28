__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 74,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 42,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 42,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 73,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 72,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 57,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 49,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 57,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 60,
          "end": 72,
          "properties": [
            {
              "type": "Property",
              "start": 62,
              "end": 70,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 67,
                "end": 70,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
