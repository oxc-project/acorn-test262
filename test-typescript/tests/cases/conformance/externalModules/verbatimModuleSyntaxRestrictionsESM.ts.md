__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 21,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 21,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "decorators": [],
        "name": "CJSy",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 22,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "decorators": [],
        "name": "CJSy",
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
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 77,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 77,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 31,
            "end": 53,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 52,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 52,
                  "decorators": [],
                  "name": "_export",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "TSExportAssignment",
            "start": 58,
            "end": 75,
            "expression": {
              "type": "Identifier",
              "start": 67,
              "end": 74,
              "decorators": [],
              "name": "_export",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "\"ambient\"",
        "value": "ambient"
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
  "end": 42,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Typey",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 41,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 33,
          "end": 38,
          "exported": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "decorators": [],
            "name": "Typey",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "decorators": [],
            "name": "Typey",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "CJSy",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "raw": "\"./decl\"",
          "value": "./decl"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 42,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "decorators": [],
        "name": "CJSy2",
        "optional": false
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 62,
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 70,
          "end": 78,
          "raw": "\"./decl\"",
          "value": "./decl"
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 96,
      "end": 123,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 122,
        "raw": "\"./decl\"",
        "value": "./decl"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 103,
          "end": 108,
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 108,
            "decorators": [],
            "name": "CJSy3",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 149,
      "end": 182,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 172,
        "end": 181,
        "raw": "\"./types\"",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 156,
          "end": 166,
          "local": {
            "type": "Identifier",
            "start": 161,
            "end": 166,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 194,
      "expression": {
        "type": "Identifier",
        "start": 189,
        "end": 193,
        "decorators": [],
        "name": "CJSy",
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
  "end": 45,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 44,
        "body": {
          "type": "TSModuleBlock",
          "start": 20,
          "end": 44,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 26,
              "end": 42,
              "attributes": [],
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 33,
                "end": 42,
                "body": {
                  "type": "TSEnumBody",
                  "start": 40,
                  "end": 42,
                  "members": []
                },
                "const": false,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
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
          "start": 17,
          "end": 19,
          "decorators": [],
          "name": "ns",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
