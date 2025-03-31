__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 12,
      "end": 23,
      "expression": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 25,
      "end": 72,
      "id": {
        "type": "Literal",
        "start": 40,
        "end": 45,
        "value": "ext",
        "raw": "\"ext\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 70,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 59,
              "end": 70,
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 67,
                "end": 70,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 118,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "name": "ext",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 131,
        "end": 145,
        "expression": {
          "type": "Literal",
          "start": 139,
          "end": 144,
          "value": "ext",
          "raw": "\"ext\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 155,
            "end": 158,
            "name": "ext",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
