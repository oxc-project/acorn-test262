__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CJSy",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 21
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "CJSy",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 35
      },
      "start": 22,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ambient",
        "raw": "\"ambient\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_export",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    },
                    "start": 44,
                    "end": 52
                  },
                  "start": 37,
                  "end": 52
                },
                "init": null,
                "definite": false,
                "start": 37,
                "end": 52
              }
            ],
            "declare": false,
            "start": 31,
            "end": 53
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "_export",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 74
            },
            "start": 58,
            "end": 75
          }
        ],
        "start": 25,
        "end": 77
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Typey",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 16,
        "end": 18
      },
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Typey",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 38
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Typey",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 38
          },
          "exportKind": "value",
          "start": 33,
          "end": 38
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 19,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 42
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CJSy",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./decl",
          "raw": "\"./decl\"",
          "start": 22,
          "end": 30
        },
        "start": 14,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CJSy2",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 59
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./decl",
          "raw": "\"./decl\"",
          "start": 70,
          "end": 78
        },
        "start": 62,
        "end": 79
      },
      "importKind": "type",
      "start": 42,
      "end": 80
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "CJSy3",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 108
          },
          "start": 103,
          "end": 108
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./decl",
        "raw": "\"./decl\"",
        "start": 114,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 96,
      "end": 123
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 166
          },
          "start": 156,
          "end": 166
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "\"./types\"",
        "start": 172,
        "end": 181
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 149,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "CJSy",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 193
      },
      "directive": null,
      "start": 189,
      "end": 194
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [],
                  "start": 40,
                  "end": 42
                },
                "const": false,
                "declare": false,
                "start": 33,
                "end": 42
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 42
            }
          ],
          "start": 20,
          "end": 44
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
