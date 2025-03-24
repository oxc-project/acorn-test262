__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 38,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 36,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 78,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 67,
            "end": 76,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": true
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
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "name": "I1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "name": "I1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 12,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "name": "I1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "name": "II1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 47,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 32,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "name": "I2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "name": "I2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 36,
          "end": 45,
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 38,
            "name": "I2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "name": "II2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 68,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 56,
          "end": 66,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "name": "I1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "name": "III1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 89,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 77,
          "end": 87,
          "local": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "name": "I2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 83,
            "end": 87,
            "name": "III2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
