file1.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 34,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "decorators": [],
        "name": "Cls1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 62,
            "end": 71,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "Cls2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 12,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Cls1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Cls1",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 14,
          "end": 27,
          "exported": {
            "type": "Identifier",
            "start": 22,
            "end": 27,
            "decorators": [],
            "name": "CCls1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "Cls1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 59,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 38,
          "end": 42,
          "exported": {
            "type": "Identifier",
            "start": 38,
            "end": 42,
            "decorators": [],
            "name": "Cls2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 42,
            "decorators": [],
            "name": "Cls2",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 44,
          "end": 57,
          "exported": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "CCls2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "decorators": [],
            "name": "Cls2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 84,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 68,
          "end": 82,
          "exported": {
            "type": "Identifier",
            "start": 76,
            "end": 82,
            "decorators": [],
            "name": "CCCls1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 72,
            "decorators": [],
            "name": "Cls1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 85,
      "end": 109,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 93,
          "end": 107,
          "exported": {
            "type": "Identifier",
            "start": 101,
            "end": 107,
            "decorators": [],
            "name": "CCCls2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 93,
            "end": 97,
            "decorators": [],
            "name": "Cls2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
