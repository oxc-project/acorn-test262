__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 37,
          "end": 39
        },
        "declare": false,
        "start": 25,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 18,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 22
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 23,
        "end": 26
      },
      "declare": false,
      "start": 11,
      "end": 26
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 55
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 58,
                    "end": 59
                  },
                  "definite": false,
                  "start": 54,
                  "end": 59
                }
              ],
              "declare": false,
              "start": 50,
              "end": 60
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 60
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 80
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 81,
                "end": 84
              },
              "declare": false,
              "start": 69,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 62,
            "end": 84
          }
        ],
        "start": 40,
        "end": 87
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 28,
      "end": 87
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IX",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 98
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 102
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "start": 101,
        "end": 104
      },
      "importKind": "value",
      "start": 89,
      "end": 105
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "II",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 115
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 119
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "start": 118,
        "end": 121
      },
      "importKind": "value",
      "start": 106,
      "end": 122
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "importKind": "value",
          "start": 132,
          "end": 133
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 136
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EA",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 142
          },
          "importKind": "value",
          "start": 135,
          "end": 142
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EI",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 151
          },
          "importKind": "value",
          "start": 144,
          "end": 151
        }
      ],
      "source": {
        "type": "Literal",
        "value": "f1",
        "raw": "\"f1\"",
        "start": 159,
        "end": 163
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 123,
      "end": 164
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "exportKind": "value",
          "start": 174,
          "end": 175
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 166,
      "end": 177
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 187
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 193
          },
          "exportKind": "value",
          "start": 186,
          "end": 193
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 178,
      "end": 195
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
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 206
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 206
          },
          "exportKind": "value",
          "start": 205,
          "end": 206
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 197,
      "end": 208
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
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 224
          },
          "exportKind": "value",
          "start": 217,
          "end": 224
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 209,
      "end": 226
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 237
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 237
          },
          "exportKind": "value",
          "start": 236,
          "end": 237
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 228,
      "end": 239
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A1",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 255
          },
          "exportKind": "value",
          "start": 248,
          "end": 255
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 240,
      "end": 257
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
            "name": "EA",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EA",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "exportKind": "value",
          "start": 267,
          "end": 269
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 259,
      "end": 271
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
            "name": "EA",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 282
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EA1",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 289
          },
          "exportKind": "value",
          "start": 280,
          "end": 289
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 272,
      "end": 291
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
            "name": "EI",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 303
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EI",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 303
          },
          "exportKind": "value",
          "start": 301,
          "end": 303
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 306
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
            "name": "EI",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 317
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EI1",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 324
          },
          "exportKind": "value",
          "start": 315,
          "end": 324
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 307,
      "end": 326
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
            "name": "IX",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 338
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "IX",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 338
          },
          "exportKind": "value",
          "start": 336,
          "end": 338
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 328,
      "end": 340
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
            "name": "IX",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "IX1",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 358
          },
          "exportKind": "value",
          "start": 349,
          "end": 358
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 341,
      "end": 360
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
            "name": "II",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 372
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "II",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 372
          },
          "exportKind": "value",
          "start": 370,
          "end": 372
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 362,
      "end": 374
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
            "name": "II",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 385
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "II1",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 392
          },
          "exportKind": "value",
          "start": 383,
          "end": 392
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 375,
      "end": 394
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 394
}
```
