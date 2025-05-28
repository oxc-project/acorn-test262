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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "decorators": [],
        "name": "CJSy",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 21,
        "body": []
      },
      "abstract": false,
      "declare": true
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
        "optional": false,
        "typeAnnotation": null
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 52,
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
                "init": null,
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "_export",
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
        "decorators": [],
        "name": "Typey",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "decorators": [],
            "name": "Typey",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "decorators": [],
            "name": "Typey",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "CJSy2",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "CJSy3",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "CJSy",
        "optional": false,
        "typeAnnotation": null
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
  "end": 44,
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
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSEnumBody",
                  "start": 40,
                  "end": 42,
                  "members": []
                },
                "const": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
