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
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 25,
            "end": 34
          }
        ],
        "start": 19,
        "end": 36
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls2",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 55
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              },
              "start": 63,
              "end": 71
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 62,
            "end": 71
          }
        ],
        "start": 56,
        "end": 73
      },
      "abstract": false,
      "declare": true,
      "start": 37,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 75
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
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "exportKind": "value",
          "start": 8,
          "end": 12
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CCls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 27
          },
          "exportKind": "value",
          "start": 14,
          "end": 27
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 29
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
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 42
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 42
          },
          "exportKind": "value",
          "start": 38,
          "end": 42
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 48
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CCls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "exportKind": "value",
          "start": 44,
          "end": 57
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 59
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
            "name": "Cls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 72
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CCCls1",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 82
          },
          "exportKind": "value",
          "start": 68,
          "end": 82
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 84
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
            "name": "Cls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 97
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "CCCls2",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 107
          },
          "exportKind": "value",
          "start": 93,
          "end": 107
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 85,
      "end": 109
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 109
}
```
