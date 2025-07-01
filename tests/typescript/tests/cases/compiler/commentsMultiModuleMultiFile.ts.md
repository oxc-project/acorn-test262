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
          "start": 49,
          "end": 55
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
                  "start": 99,
                  "end": 100
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 101,
                  "end": 108
                },
                "abstract": false,
                "declare": false,
                "start": 93,
                "end": 108
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 86,
              "end": 108
            }
          ],
          "start": 56,
          "end": 110
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 42,
        "end": 110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 110
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
          "start": 153,
          "end": 159
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
                  "start": 205,
                  "end": 206
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 207,
                  "end": 214
                },
                "abstract": false,
                "declare": false,
                "start": 199,
                "end": 214
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 192,
              "end": 214
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
                  "start": 256,
                  "end": 257
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 258,
                  "end": 265
                },
                "abstract": false,
                "declare": false,
                "start": 250,
                "end": 265
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 243,
              "end": 265
            }
          ],
          "start": 160,
          "end": 267
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 146,
        "end": 267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 267
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
            "start": 273,
            "end": 279
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 281
          },
          "optional": false,
          "computed": false,
          "start": 273,
          "end": 281
        },
        "typeArguments": null,
        "arguments": [],
        "start": 269,
        "end": 283
      },
      "directive": null,
      "start": 269,
      "end": 284
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
            "start": 289,
            "end": 295
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "optional": false,
          "computed": false,
          "start": 289,
          "end": 297
        },
        "typeArguments": null,
        "arguments": [],
        "start": 285,
        "end": 299
      },
      "directive": null,
      "start": 285,
      "end": 300
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 301
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
          "start": 105,
          "end": 111
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
                  "start": 157,
                  "end": 158
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 159,
                  "end": 166
                },
                "abstract": false,
                "declare": false,
                "start": 151,
                "end": 166
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 144,
              "end": 166
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
                  "start": 209,
                  "end": 210
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 211,
                  "end": 218
                },
                "abstract": false,
                "declare": false,
                "start": 203,
                "end": 218
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 196,
              "end": 218
            }
          ],
          "start": 112,
          "end": 220
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 98,
        "end": 220
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 91,
      "end": 220
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
            "start": 225,
            "end": 231
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 233
        },
        "typeArguments": null,
        "arguments": [],
        "start": 221,
        "end": 235
      },
      "directive": null,
      "start": 221,
      "end": 236
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
