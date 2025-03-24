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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 12,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 27,
        "name": "Class",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
