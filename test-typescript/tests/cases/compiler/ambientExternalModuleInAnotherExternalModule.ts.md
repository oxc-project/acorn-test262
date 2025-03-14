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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 25,
      "end": 72,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 70,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 59,
              "end": 70,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 67,
                "end": 70,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 40,
        "end": 45,
        "raw": "\"ext\"",
        "value": "ext"
      }
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 131,
        "end": 145,
        "expression": {
          "type": "Literal",
          "start": 139,
          "end": 144,
          "raw": "\"ext\"",
          "value": "ext"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 155,
            "end": 158,
            "decorators": [],
            "name": "ext",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
