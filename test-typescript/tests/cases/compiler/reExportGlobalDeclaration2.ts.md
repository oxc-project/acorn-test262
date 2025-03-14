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
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            }
          }
        ]
      },
      "declare": true,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 78,
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
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              }
            }
          }
        ]
      },
      "declare": true,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 10,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "I1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 12,
          "end": 21,
          "exported": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "decorators": [],
            "name": "II1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 47,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 32,
          "end": 34,
          "exported": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "decorators": [],
            "name": "I2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "decorators": [],
            "name": "I2",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 36,
          "end": 45,
          "exported": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "decorators": [],
            "name": "II2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 38,
            "decorators": [],
            "name": "I2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 68,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 56,
          "end": 66,
          "exported": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "decorators": [],
            "name": "III1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 89,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 77,
          "end": 87,
          "exported": {
            "type": "Identifier",
            "start": 83,
            "end": 87,
            "decorators": [],
            "name": "III2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 77,
            "end": 79,
            "decorators": [],
            "name": "I2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
