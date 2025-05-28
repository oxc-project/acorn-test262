__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 12,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 27,
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 36,
          "end": 46,
          "expression": {
            "type": "UnaryExpression",
            "start": 37,
            "end": 45,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 47,
        "end": 50,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
