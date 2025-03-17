__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 50,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 24,
            "end": 48,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 25,
                "end": 38,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 32,
                    "end": 38
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "IBuffer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 96,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 96,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 72,
        "decorators": [],
        "name": "Buffer",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 84,
          "end": 91,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 91,
            "decorators": [],
            "name": "IBuffer",
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
