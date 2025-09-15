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
          "name": "multiM",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 58
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 103
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 104,
                  "end": 111
                },
                "abstract": false,
                "declare": false,
                "start": 96,
                "end": 111
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 89,
              "end": 111
            }
          ],
          "start": 59,
          "end": 113
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 42,
        "end": 113
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 113
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiM",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 165
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 213,
                  "end": 220
                },
                "abstract": false,
                "declare": false,
                "start": 205,
                "end": 220
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 198,
              "end": 220
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 263
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 264,
                  "end": 271
                },
                "abstract": false,
                "declare": false,
                "start": 256,
                "end": 271
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 249,
              "end": 271
            }
          ],
          "start": 166,
          "end": 273
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 149,
        "end": 273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 142,
      "end": 273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiM",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 285
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 287
          },
          "optional": false,
          "computed": false,
          "start": 279,
          "end": 287
        },
        "typeArguments": null,
        "arguments": [],
        "start": 275,
        "end": 289
      },
      "directive": null,
      "start": 275,
      "end": 290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiM",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 301
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          },
          "optional": false,
          "computed": false,
          "start": 295,
          "end": 303
        },
        "typeArguments": null,
        "arguments": [],
        "start": 291,
        "end": 305
      },
      "directive": null,
      "start": 291,
      "end": 306
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 307
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
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "commentsMultiModuleMultiFile_0",
          "raw": "'commentsMultiModuleMultiFile_0'",
          "start": 19,
          "end": 51
        },
        "start": 11,
        "end": 52
      },
      "importKind": "value",
      "start": 0,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "multiM",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 114
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 162,
                  "end": 169
                },
                "abstract": false,
                "declare": false,
                "start": 154,
                "end": 169
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 147,
              "end": 169
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 213
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 214,
                  "end": 221
                },
                "abstract": false,
                "declare": false,
                "start": 206,
                "end": 221
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 199,
              "end": 221
            }
          ],
          "start": 115,
          "end": 223
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 98,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 91,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "multiM",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 234
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 236
          },
          "optional": false,
          "computed": false,
          "start": 228,
          "end": 236
        },
        "typeArguments": null,
        "arguments": [],
        "start": 224,
        "end": 238
      },
      "directive": null,
      "start": 224,
      "end": 239
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 239
}
```
