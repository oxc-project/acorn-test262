__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 9,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "start": 31,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 40
        }
      ],
      "declare": true,
      "start": 17,
      "end": 41
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 61
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                  "start": 77,
                  "end": 78
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "exportKind": "value",
                "start": 77,
                "end": 78
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 68,
            "end": 81
          }
        ],
        "start": 62,
        "end": 83
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 42,
      "end": 83
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try1",
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
                    "name": "Q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 105
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "start": 104,
                  "end": 107
                },
                "typeArguments": null,
                "start": 104,
                "end": 107
              },
              "start": 102,
              "end": 107
            },
            "start": 98,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 98,
          "end": 107
        }
      ],
      "declare": true,
      "start": 84,
      "end": 108
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q2",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 129
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "exportKind": "value",
                "start": 145,
                "end": 146
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 136,
            "end": 148
          }
        ],
        "start": 130,
        "end": 150
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 109,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 173
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 175
                    },
                    "start": 171,
                    "end": 175
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 177
                  },
                  "start": 171,
                  "end": 177
                },
                "typeArguments": null,
                "start": 171,
                "end": 177
              },
              "start": 169,
              "end": 177
            },
            "start": 165,
            "end": 177
          },
          "init": null,
          "definite": false,
          "start": 165,
          "end": 177
        }
      ],
      "declare": true,
      "start": 151,
      "end": 178
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q3",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 199
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                  "start": 214,
                  "end": 215
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 220
                },
                "exportKind": "value",
                "start": 214,
                "end": 220
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 206,
            "end": 222
          }
        ],
        "start": 200,
        "end": 224
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 179,
      "end": 224
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try3",
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
                    "name": "Q3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 247
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 249
                  },
                  "start": 245,
                  "end": 249
                },
                "typeArguments": null,
                "start": 245,
                "end": 249
              },
              "start": 243,
              "end": 249
            },
            "start": 239,
            "end": 249
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 249
        }
      ],
      "declare": true,
      "start": 225,
      "end": 250
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q4",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 271
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 299
                },
                "exportKind": "value",
                "start": 287,
                "end": 299
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 278,
            "end": 302
          }
        ],
        "start": 272,
        "end": 304
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 251,
      "end": 304
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 327
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "default",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 335
                    },
                    "start": 325,
                    "end": 335
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "start": 325,
                  "end": 337
                },
                "typeArguments": null,
                "start": 325,
                "end": 337
              },
              "start": 323,
              "end": 337
            },
            "start": 319,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 319,
          "end": 337
        }
      ],
      "declare": true,
      "start": 305,
      "end": 338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 349
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 349
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
        "type": "Identifier",
        "decorators": [],
        "name": "NS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NS2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 40
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NS2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 40
                },
                "exportKind": "value",
                "start": 37,
                "end": 40
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 28,
            "end": 43
          }
        ],
        "start": 22,
        "end": 45
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS2",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 67
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NS1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 86
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NS1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 86
                },
                "exportKind": "value",
                "start": 83,
                "end": 86
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 74,
            "end": 89
          }
        ],
        "start": 68,
        "end": 91
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 46,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 102
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 9,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 23
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 26,
        "end": 32
      },
      "declare": false,
      "start": 17,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS1",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NS2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 74
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NS2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 74
                },
                "exportKind": "value",
                "start": 71,
                "end": 74
              },
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 77
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 77
                },
                "exportKind": "value",
                "start": 76,
                "end": 77
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 62,
            "end": 80
          }
        ],
        "start": 56,
        "end": 82
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 34,
      "end": 82
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS2",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 104
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NS1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 123
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NS1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 123
                },
                "exportKind": "value",
                "start": 120,
                "end": 123
              },
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "exportKind": "value",
                "start": 125,
                "end": 126
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 111,
            "end": 129
          }
        ],
        "start": 105,
        "end": 131
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 83,
      "end": 131
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 132,
      "end": 142
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try1",
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
                    "name": "NS1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 166
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 168
                  },
                  "start": 163,
                  "end": 168
                },
                "typeArguments": null,
                "start": 163,
                "end": 168
              },
              "start": 161,
              "end": 168
            },
            "start": 157,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 168
        }
      ],
      "declare": true,
      "start": 143,
      "end": 169
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try2",
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
                    "name": "NS2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 193
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 195
                  },
                  "start": 190,
                  "end": 195
                },
                "typeArguments": null,
                "start": 190,
                "end": 195
              },
              "start": 188,
              "end": 195
            },
            "start": 184,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 195
        }
      ],
      "declare": true,
      "start": 170,
      "end": 196
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NS1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 217,
                      "end": 220
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NS2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 224
                    },
                    "start": 217,
                    "end": 224
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 226
                  },
                  "start": 217,
                  "end": 226
                },
                "typeArguments": null,
                "start": 217,
                "end": 226
              },
              "start": 215,
              "end": 226
            },
            "start": 211,
            "end": 226
          },
          "init": null,
          "definite": false,
          "start": 211,
          "end": 226
        }
      ],
      "declare": true,
      "start": 197,
      "end": 227
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NS2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 251
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NS1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 255
                    },
                    "start": 248,
                    "end": 255
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 257
                  },
                  "start": 248,
                  "end": 257
                },
                "typeArguments": null,
                "start": 248,
                "end": 257
              },
              "start": 246,
              "end": 257
            },
            "start": 242,
            "end": 257
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 257
        }
      ],
      "declare": true,
      "start": 228,
      "end": 258
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NS1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 279,
                        "end": 282
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NS2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 286
                      },
                      "start": 279,
                      "end": 286
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NS1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 290
                    },
                    "start": 279,
                    "end": 290
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "start": 279,
                  "end": 292
                },
                "typeArguments": null,
                "start": 279,
                "end": 292
              },
              "start": 277,
              "end": 292
            },
            "start": 273,
            "end": 292
          },
          "init": null,
          "definite": false,
          "start": 273,
          "end": 292
        }
      ],
      "declare": true,
      "start": 259,
      "end": 293
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "try6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NS2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 317
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NS1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 318,
                        "end": 321
                      },
                      "start": 314,
                      "end": 321
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NS2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 322,
                      "end": 325
                    },
                    "start": 314,
                    "end": 325
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "start": 314,
                  "end": 327
                },
                "typeArguments": null,
                "start": 314,
                "end": 327
              },
              "start": 312,
              "end": 327
            },
            "start": 308,
            "end": 327
          },
          "init": null,
          "definite": false,
          "start": 308,
          "end": 327
        }
      ],
      "declare": true,
      "start": 294,
      "end": 328
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 328
}
```
