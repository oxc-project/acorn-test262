__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JQueryEventObjectTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 31
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 44,
                "end": 47
              },
              "start": 42,
              "end": 47
            },
            "accessibility": null,
            "static": false,
            "start": 38,
            "end": 48
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "which",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 53,
            "end": 67
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "metaKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 81,
                "end": 84
              },
              "start": 79,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 85
          }
        ],
        "start": 32,
        "end": 87
      },
      "declare": false,
      "start": 0,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SecondEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 57
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 68
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 70,
                "end": 73
              },
              "start": 68,
              "end": 73
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 74
          }
        ],
        "start": 58,
        "end": 76
      },
      "declare": false,
      "start": 36,
      "end": 76
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Third",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 92
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "JQueryEventObjectTest",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 122
          },
          "typeArguments": null,
          "start": 101,
          "end": 122
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "SecondEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 135
          },
          "typeArguments": null,
          "start": 124,
          "end": 135
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 136,
        "end": 138
      },
      "declare": false,
      "start": 77,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 138
}
```
