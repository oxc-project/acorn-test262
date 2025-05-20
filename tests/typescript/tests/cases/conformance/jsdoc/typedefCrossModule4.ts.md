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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 73,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 72,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 57,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 49,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 57,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 67,
                "end": 70,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
