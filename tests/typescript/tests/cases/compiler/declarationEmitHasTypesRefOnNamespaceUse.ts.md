__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dep",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 40
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 41,
              "end": 48
            },
            "declare": false,
            "start": 27,
            "end": 48
          }
        ],
        "start": 21,
        "end": 50
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
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
        "name": "Src",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "NS",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 23
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dep",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 27
            },
            "optional": false,
            "computed": false,
            "start": 21,
            "end": 27
          },
          "typeArguments": null,
          "start": 21,
          "end": 27
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 28,
        "end": 31
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 31
}
```
