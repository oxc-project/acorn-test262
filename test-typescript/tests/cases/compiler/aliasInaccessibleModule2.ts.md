__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 113,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 15,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 24,
              "end": 68,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 34,
                  "end": 53,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 42,
                    "end": 53,
                    "body": []
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 73,
            "end": 86,
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "R",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 91,
            "end": 111,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 98,
              "end": 111,
              "id": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "R",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
