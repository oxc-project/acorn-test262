__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mOfGloalFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
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
                "name": "c",
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
                "end": 51
              },
              "abstract": false,
              "declare": false,
              "start": 36,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 29,
            "end": 51
          }
        ],
        "start": 23,
        "end": 53
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 68
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "mOfGloalFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 83
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 85
        },
        "start": 71,
        "end": 85
      },
      "importKind": "value",
      "start": 54,
      "end": 86
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 101
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "mOfGloalFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 116
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
        },
        "start": 104,
        "end": 118
      },
      "importKind": "value",
      "start": 87,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [],
        "start": 120,
        "end": 133
      },
      "directive": null,
      "start": 120,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 146
        },
        "typeArguments": null,
        "arguments": [],
        "start": 135,
        "end": 148
      },
      "directive": null,
      "start": 135,
      "end": 149
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 163
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 184
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mOfGloalFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 199
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 201
              },
              "start": 187,
              "end": 201
            },
            "importKind": "value",
            "start": 170,
            "end": 202
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 221
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mOfGloalFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 236
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 238
              },
              "start": 224,
              "end": 238
            },
            "importKind": "value",
            "start": 207,
            "end": 239
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 255
              },
              "typeArguments": null,
              "arguments": [],
              "start": 244,
              "end": 257
            },
            "directive": null,
            "start": 244,
            "end": 258
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 274
              },
              "typeArguments": null,
              "arguments": [],
              "start": 263,
              "end": 276
            },
            "directive": null,
            "start": 263,
            "end": 277
          }
        ],
        "start": 164,
        "end": 279
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 151,
      "end": 279
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 293
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 321
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mOfGloalFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 336
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "start": 324,
                "end": 338
              },
              "importKind": "value",
              "start": 307,
              "end": 339
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 300,
            "end": 339
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 365
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mOfGloalFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 380
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 382
                },
                "start": 368,
                "end": 382
              },
              "importKind": "value",
              "start": 351,
              "end": 383
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 344,
            "end": 383
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 399
              },
              "typeArguments": null,
              "arguments": [],
              "start": 388,
              "end": 401
            },
            "directive": null,
            "start": 388,
            "end": 402
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 418
              },
              "typeArguments": null,
              "arguments": [],
              "start": 407,
              "end": 420
            },
            "directive": null,
            "start": 407,
            "end": 421
          }
        ],
        "start": 294,
        "end": 423
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 281,
      "end": 423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
