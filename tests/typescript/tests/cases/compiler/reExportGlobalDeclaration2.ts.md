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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 36
          }
        ],
        "start": 21,
        "end": 38
      },
      "declare": true,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 60
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 67,
            "end": 76
          }
        ],
        "start": 61,
        "end": 78
      },
      "declare": true,
      "start": 40,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "exportKind": "value",
          "start": 8,
          "end": 10
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "II1",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 21
          },
          "exportKind": "value",
          "start": 12,
          "end": 21
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 23
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "exportKind": "value",
          "start": 32,
          "end": 34
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 38
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "II2",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 45
          },
          "exportKind": "value",
          "start": 36,
          "end": 45
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 47
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 58
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "III1",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 66
          },
          "exportKind": "value",
          "start": 56,
          "end": 66
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 48,
      "end": 68
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 79
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "III2",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 87
          },
          "exportKind": "value",
          "start": 77,
          "end": 87
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 69,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
