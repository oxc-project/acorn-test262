__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "other",
        "raw": "\"other\"",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 43
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 44,
                "end": 47
              },
              "abstract": false,
              "declare": false,
              "start": 36,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 29,
            "end": 47
          }
        ],
        "start": 23,
        "end": 49
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 66,
        "end": 74
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 94
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "other",
                "raw": "\"other\"",
                "start": 105,
                "end": 112
              },
              "start": 97,
              "end": 113
            },
            "importKind": "value",
            "start": 81,
            "end": 114
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 199,
                              "end": 205
                            },
                            "start": 197,
                            "end": 205
                          },
                          "start": 196,
                          "end": 205
                        },
                        "init": null,
                        "definite": false,
                        "start": 196,
                        "end": 205
                      }
                    ],
                    "declare": false,
                    "start": 192,
                    "end": 206
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 185,
                  "end": 206
                }
              ],
              "start": 175,
              "end": 212
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 163,
            "end": 212
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "start": 218,
            "end": 229
          }
        ],
        "start": 75,
        "end": 274
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 274
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 275
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "importKind": "value",
          "start": 8,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 16,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
