__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 39,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 27,
              "end": 39,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 37,
                "end": 39,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 36,
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 43,
      "end": 75,
      "body": {
        "type": "TSInterfaceBody",
        "start": 73,
        "end": 75,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 64,
          "end": 72,
          "expression": {
            "type": "ChainExpression",
            "start": 64,
            "end": 72,
            "expression": {
              "type": "MemberExpression",
              "start": 64,
              "end": 72,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 69,
                "end": 72,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
