__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 39,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 25,
        "end": 39,
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 39,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
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
  "end": 394,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 11,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 26,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 28,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 40,
        "end": 87,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 60,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 50,
              "end": 60,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 54,
                  "end": 59,
                  "id": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 58,
                    "end": 59,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 84,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 69,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 81,
                "end": 84,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 89,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "decorators": [],
        "name": "IX",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 101,
        "end": 104,
        "left": {
          "type": "Identifier",
          "start": 101,
          "end": 102,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 106,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 115,
        "decorators": [],
        "name": "II",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 118,
        "end": 121,
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 123,
      "end": 164,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 132,
          "end": 133,
          "imported": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 135,
          "end": 142,
          "imported": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "decorators": [],
            "name": "EA",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 144,
          "end": 151,
          "imported": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 149,
            "end": 151,
            "decorators": [],
            "name": "EI",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 159,
        "end": 163,
        "value": "f1",
        "raw": "\"f1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 166,
      "end": 177,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 174,
          "end": 175,
          "local": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 178,
      "end": 195,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 186,
          "end": 193,
          "local": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 197,
      "end": 208,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 205,
          "end": 206,
          "local": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 209,
      "end": 226,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 217,
          "end": 224,
          "local": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 228,
      "end": 239,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 236,
          "end": 237,
          "local": {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 240,
      "end": 257,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 248,
          "end": 255,
          "local": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 253,
            "end": 255,
            "decorators": [],
            "name": "A1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 259,
      "end": 271,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 267,
          "end": 269,
          "local": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "decorators": [],
            "name": "EA",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "decorators": [],
            "name": "EA",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 272,
      "end": 291,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 280,
          "end": 289,
          "local": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "decorators": [],
            "name": "EA",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 286,
            "end": 289,
            "decorators": [],
            "name": "EA1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 293,
      "end": 306,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 301,
          "end": 303,
          "local": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "decorators": [],
            "name": "EI",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "decorators": [],
            "name": "EI",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 307,
      "end": 326,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 315,
          "end": 324,
          "local": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "decorators": [],
            "name": "EI",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 321,
            "end": 324,
            "decorators": [],
            "name": "EI1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 328,
      "end": 340,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 336,
          "end": 338,
          "local": {
            "type": "Identifier",
            "start": 336,
            "end": 338,
            "decorators": [],
            "name": "IX",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 336,
            "end": 338,
            "decorators": [],
            "name": "IX",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 341,
      "end": 360,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 349,
          "end": 358,
          "local": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "IX",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 355,
            "end": 358,
            "decorators": [],
            "name": "IX1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 362,
      "end": 374,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 370,
          "end": 372,
          "local": {
            "type": "Identifier",
            "start": 370,
            "end": 372,
            "decorators": [],
            "name": "II",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 370,
            "end": 372,
            "decorators": [],
            "name": "II",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 375,
      "end": 394,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 383,
          "end": 392,
          "local": {
            "type": "Identifier",
            "start": 383,
            "end": 385,
            "decorators": [],
            "name": "II",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 389,
            "end": 392,
            "decorators": [],
            "name": "II1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
