__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "other",
        "raw": "\"other\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 47,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 36,
              "end": 47,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
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
                "start": 44,
                "end": 47,
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
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 271,
      "id": {
        "type": "Literal",
        "start": 66,
        "end": 74,
        "value": "server",
        "raw": "\"server\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 75,
        "end": 271,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 81,
            "end": 114,
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 94,
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 97,
              "end": 113,
              "expression": {
                "type": "Literal",
                "start": 105,
                "end": 112,
                "value": "other",
                "raw": "\"other\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 163,
            "end": 209,
            "id": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 172,
              "end": 209,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 182,
                  "end": 203,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 189,
                    "end": 203,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 193,
                        "end": 202,
                        "id": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 202,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 194,
                            "end": 202,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 196,
                              "end": 202
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
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
            "declare": false,
            "global": false
          },
          {
            "type": "TSExportAssignment",
            "start": 215,
            "end": 226,
            "expression": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 25,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 24,
        "value": "server",
        "raw": "\"server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
