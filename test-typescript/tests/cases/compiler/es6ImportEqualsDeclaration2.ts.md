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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 36,
              "end": 47,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 44,
                "end": 47,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
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
        "start": 15,
        "end": 22,
        "raw": "\"other\"",
        "value": "other"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 271,
      "kind": "module",
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
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 97,
              "end": 113,
              "expression": {
                "type": "Literal",
                "start": 105,
                "end": 112,
                "raw": "\"other\"",
                "value": "other"
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 163,
            "end": 209,
            "body": {
              "type": "TSModuleBlock",
              "start": 172,
              "end": 209,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 182,
                  "end": 203,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 189,
                    "end": 203,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 193,
                        "end": 202,
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "kind": "module"
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
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 66,
        "end": 74,
        "raw": "\"server\"",
        "value": "server"
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
  "end": 26,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 24,
        "raw": "\"server\"",
        "value": "server"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
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
