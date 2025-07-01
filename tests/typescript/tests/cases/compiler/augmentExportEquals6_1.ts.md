__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "file1",
        "raw": "\"file1\"",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 39,
              "end": 41
            },
            "abstract": false,
            "declare": false,
            "start": 29,
            "end": 41
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 59
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 77
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 78,
                    "end": 80
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 70,
                  "end": 80
                }
              ],
              "start": 60,
              "end": 86
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 46,
            "end": 86
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 103
            },
            "start": 91,
            "end": 104
          }
        ],
        "start": 23,
        "end": 106
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
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
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "file1",
          "raw": "\"file1\"",
          "start": 54,
          "end": 61
        },
        "start": 46,
        "end": 62
      },
      "importKind": "value",
      "start": 35,
      "end": 63
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "file1",
        "raw": "\"file1\"",
        "start": 114,
        "end": 121
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 143
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 145,
                      "end": 151
                    },
                    "start": 143,
                    "end": 151
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 142,
                  "end": 151
                }
              ],
              "start": 140,
              "end": 153
            },
            "declare": false,
            "start": 128,
            "end": 153
          }
        ],
        "start": 122,
        "end": 155
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 99,
      "end": 155
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 156
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file1",
        "raw": "\"file1\"",
        "start": 19,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "file2",
        "raw": "\"file2\"",
        "start": 35,
        "end": 42
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 28,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "start": 51,
                  "end": 54
                },
                "typeArguments": null,
                "start": 51,
                "end": 54
              },
              "start": 49,
              "end": 54
            },
            "start": 48,
            "end": 54
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 54
        }
      ],
      "declare": false,
      "start": 44,
      "end": 55
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "optional": false,
            "computed": false,
            "start": 64,
            "end": 67
          },
          "definite": false,
          "start": 60,
          "end": 67
        }
      ],
      "declare": false,
      "start": 56,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
