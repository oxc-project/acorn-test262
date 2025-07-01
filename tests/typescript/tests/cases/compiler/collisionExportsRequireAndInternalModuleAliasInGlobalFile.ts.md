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
        "start": 7,
        "end": 19
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
                "start": 39,
                "end": 40
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 41,
                "end": 48
              },
              "abstract": false,
              "declare": false,
              "start": 33,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 48
          }
        ],
        "start": 20,
        "end": 50
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 65
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "mOfGloalFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 80
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "start": 68,
        "end": 82
      },
      "importKind": "value",
      "start": 51,
      "end": 83
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 98
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "mOfGloalFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 113
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 115
        },
        "start": 101,
        "end": 115
      },
      "importKind": "value",
      "start": 84,
      "end": 116
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
          "start": 121,
          "end": 128
        },
        "typeArguments": null,
        "arguments": [],
        "start": 117,
        "end": 130
      },
      "directive": null,
      "start": 117,
      "end": 131
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
          "start": 136,
          "end": 143
        },
        "typeArguments": null,
        "arguments": [],
        "start": 132,
        "end": 145
      },
      "directive": null,
      "start": 132,
      "end": 146
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 157
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
              "start": 171,
              "end": 178
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mOfGloalFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 193
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "start": 181,
              "end": 195
            },
            "importKind": "value",
            "start": 164,
            "end": 196
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 215
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mOfGloalFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 230
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 232
              },
              "start": 218,
              "end": 232
            },
            "importKind": "value",
            "start": 201,
            "end": 233
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
                "start": 242,
                "end": 249
              },
              "typeArguments": null,
              "arguments": [],
              "start": 238,
              "end": 251
            },
            "directive": null,
            "start": 238,
            "end": 252
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
                "start": 261,
                "end": 268
              },
              "typeArguments": null,
              "arguments": [],
              "start": 257,
              "end": 270
            },
            "directive": null,
            "start": 257,
            "end": 271
          }
        ],
        "start": 158,
        "end": 273
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 148,
      "end": 273
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 284
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
                "start": 305,
                "end": 312
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mOfGloalFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 327
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 329
                },
                "start": 315,
                "end": 329
              },
              "importKind": "value",
              "start": 298,
              "end": 330
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 291,
            "end": 330
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
                "start": 349,
                "end": 356
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mOfGloalFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 371
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 373
                },
                "start": 359,
                "end": 373
              },
              "importKind": "value",
              "start": 342,
              "end": 374
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 335,
            "end": 374
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
                "start": 383,
                "end": 390
              },
              "typeArguments": null,
              "arguments": [],
              "start": 379,
              "end": 392
            },
            "directive": null,
            "start": 379,
            "end": 393
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
                "start": 402,
                "end": 409
              },
              "typeArguments": null,
              "arguments": [],
              "start": 398,
              "end": 411
            },
            "directive": null,
            "start": 398,
            "end": 412
          }
        ],
        "start": 285,
        "end": 414
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 275,
      "end": 414
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 414
}
```
