__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 31,
        "decorators": [],
        "name": "JQueryEventObjectTest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 32,
        "end": 87,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 48,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 47,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 53,
            "end": 67,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 58,
              "decorators": [],
              "name": "which",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 85,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 79,
              "decorators": [],
              "name": "metaKey",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 84,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 81,
                "end": 84
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 138,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 57,
        "decorators": [],
        "name": "SecondEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 76,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 74,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 68,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 73,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 70,
                "end": 73
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 92,
        "decorators": [],
        "name": "Third",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 101,
          "end": 122,
          "expression": {
            "type": "Identifier",
            "start": 101,
            "end": 122,
            "decorators": [],
            "name": "JQueryEventObjectTest",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 124,
          "end": 135,
          "expression": {
            "type": "Identifier",
            "start": 124,
            "end": 135,
            "decorators": [],
            "name": "SecondEvent",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 136,
        "end": 138,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
