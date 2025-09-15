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
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
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
                  "start": 38,
                  "end": 39
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 40,
                  "end": 47
                },
                "abstract": false,
                "declare": false,
                "start": 32,
                "end": 47
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 47
            }
          ],
          "start": 19,
          "end": 49
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 64
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 68
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 70
        },
        "start": 67,
        "end": 70
      },
      "importKind": "value",
      "start": 50,
      "end": 71
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 86
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 90
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "start": 89,
        "end": 92
      },
      "importKind": "value",
      "start": 72,
      "end": 93
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
          "start": 98,
          "end": 105
        },
        "typeArguments": null,
        "arguments": [],
        "start": 94,
        "end": 107
      },
      "directive": null,
      "start": 94,
      "end": 108
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
          "start": 113,
          "end": 120
        },
        "typeArguments": null,
        "arguments": [],
        "start": 109,
        "end": 122
      },
      "directive": null,
      "start": 109,
      "end": 123
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 137
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
              "start": 151,
              "end": 158
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "start": 161,
              "end": 164
            },
            "importKind": "value",
            "start": 144,
            "end": 165
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
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
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 188
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 190
              },
              "start": 187,
              "end": 190
            },
            "importKind": "value",
            "start": 170,
            "end": 191
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
                "start": 200,
                "end": 207
              },
              "typeArguments": null,
              "arguments": [],
              "start": 196,
              "end": 209
            },
            "directive": null,
            "start": 196,
            "end": 210
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
                "start": 219,
                "end": 226
              },
              "typeArguments": null,
              "arguments": [],
              "start": 215,
              "end": 228
            },
            "directive": null,
            "start": 215,
            "end": 229
          }
        ],
        "start": 138,
        "end": 231
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 125,
      "end": 231
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 245
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
                "start": 266,
                "end": 273
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 277
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 279
                },
                "start": 276,
                "end": 279
              },
              "importKind": "value",
              "start": 259,
              "end": 280
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 252,
            "end": 280
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
                "start": 299,
                "end": 306
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "start": 309,
                "end": 312
              },
              "importKind": "value",
              "start": 292,
              "end": 313
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 285,
            "end": 313
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
                "start": 322,
                "end": 329
              },
              "typeArguments": null,
              "arguments": [],
              "start": 318,
              "end": 331
            },
            "directive": null,
            "start": 318,
            "end": 332
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
                "start": 341,
                "end": 348
              },
              "typeArguments": null,
              "arguments": [],
              "start": 337,
              "end": 350
            },
            "directive": null,
            "start": 337,
            "end": 351
          }
        ],
        "start": 246,
        "end": 353
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 233,
      "end": 353
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 353
}
```
