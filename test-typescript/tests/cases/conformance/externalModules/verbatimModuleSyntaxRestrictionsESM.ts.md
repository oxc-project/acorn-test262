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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "name": "CJSy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 21,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 22,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "name": "CJSy",
        "typeAnnotation": null,
        "decorators": [],
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "ambient",
        "raw": "\"ambient\""
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 52,
                  "name": "_export",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 58,
            "end": 75,
            "expression": {
              "type": "Identifier",
              "start": 67,
              "end": 74,
              "name": "_export",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
  "end": 42,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Typey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 41,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 33,
          "end": 38,
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "name": "Typey",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "name": "Typey",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
        "name": "CJSy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "value": "./decl",
          "raw": "\"./decl\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 42,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "name": "CJSy2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 62,
        "end": 79,
        "expression": {
          "type": "Literal",
          "start": 70,
          "end": 78,
          "value": "./decl",
          "raw": "\"./decl\""
        }
      },
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 96,
      "end": 123,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 103,
          "end": 108,
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 108,
            "name": "CJSy3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 122,
        "value": "./decl",
        "raw": "\"./decl\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 149,
      "end": 182,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 156,
          "end": 166,
          "local": {
            "type": "Identifier",
            "start": 161,
            "end": 166,
            "name": "types",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 172,
        "end": 181,
        "value": "./types",
        "raw": "\"./types\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 194,
      "expression": {
        "type": "Identifier",
        "start": 189,
        "end": 193,
        "name": "CJSy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "name": "ns",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 20,
          "end": 44,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 26,
              "end": 42,
              "declaration": {
                "type": "TSEnumDeclaration",
                "start": 33,
                "end": 42,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "members": [],
                "const": false,
                "declare": false,
                "body": {
                  "type": "TSEnumBody",
                  "start": 40,
                  "end": 42,
                  "members": []
                }
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
