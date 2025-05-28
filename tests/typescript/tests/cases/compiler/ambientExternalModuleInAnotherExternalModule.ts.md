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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 12,
      "end": 23,
      "expression": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 67,
                "end": 70,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "ext",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 155,
            "end": 158,
            "decorators": [],
            "name": "ext",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
