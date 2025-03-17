__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 11,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 11,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 32,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 58,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 58,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 53,
          "end": 54,
          "expression": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 59,
      "end": 84,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 84,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 67,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 79,
          "end": 80,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
