__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 349,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 9,
        "end": 15
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 40,
            "name": "Q",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 62,
        "end": 83,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 68,
            "end": 81,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 77,
                "end": 78,
                "local": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 107,
            "name": "try1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 107,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 104,
                  "end": 107,
                  "left": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "name": "Q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 109,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 129,
        "name": "Q2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 150,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 148,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 145,
                "end": 146,
                "local": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 177,
            "name": "try2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 177,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 171,
                  "end": 177,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 171,
                    "end": 175,
                    "left": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 173,
                      "name": "Q2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "name": "Q",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 179,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "name": "Q3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 224,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 206,
            "end": 222,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 214,
                "end": 220,
                "local": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 249,
            "name": "try3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 249,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 245,
                  "end": 249,
                  "left": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 247,
                    "name": "Q3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 249,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 251,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 271,
        "name": "Q4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 272,
        "end": 304,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 278,
            "end": 302,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 287,
                "end": 299,
                "local": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 299,
                  "name": "default",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 337,
            "name": "try4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 325,
                "end": 337,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 325,
                  "end": 337,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 325,
                    "end": 335,
                    "left": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 327,
                      "name": "Q4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 335,
                      "name": "default",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 339,
      "end": 349,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 102,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "NS1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 28,
            "end": 43,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 37,
                "end": 40,
                "local": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "name": "NS2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "name": "NS2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "name": "NS2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 91,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 74,
            "end": 89,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 83,
                "end": 86,
                "local": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "name": "NS1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "name": "NS1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 102,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 329,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 9,
        "end": 15
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 26,
        "end": 32
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "name": "NS1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 56,
        "end": 82,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 80,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 71,
                "end": 74,
                "local": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "name": "NS2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "name": "NS2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              },
              {
                "type": "ExportSpecifier",
                "start": 76,
                "end": 77,
                "local": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 83,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "name": "NS2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 105,
        "end": 131,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 111,
            "end": 129,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 120,
                "end": 123,
                "local": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 123,
                  "name": "NS1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 123,
                  "name": "NS1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              },
              {
                "type": "ExportSpecifier",
                "start": 125,
                "end": 126,
                "local": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 132,
      "end": 142,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "name": "try1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 163,
                "end": 168,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 163,
                  "end": 168,
                  "left": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 166,
                    "name": "NS1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 195,
            "name": "try2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 190,
                "end": 195,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 190,
                  "end": 195,
                  "left": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 193,
                    "name": "NS2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 226,
            "name": "try3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 226,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 217,
                  "end": 226,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 217,
                    "end": 224,
                    "left": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 220,
                      "name": "NS1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 224,
                      "name": "NS2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 228,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 257,
            "name": "try4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 257,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 248,
                  "end": 257,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 248,
                    "end": 255,
                    "left": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 251,
                      "name": "NS2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 255,
                      "name": "NS1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 257,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 292,
            "name": "try5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 292,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 292,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 279,
                  "end": 292,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 279,
                    "end": 290,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 279,
                      "end": 286,
                      "left": {
                        "type": "Identifier",
                        "start": 279,
                        "end": 282,
                        "name": "NS1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 286,
                        "name": "NS2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 290,
                      "name": "NS1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 327,
            "name": "try6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 314,
                "end": 327,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 314,
                  "end": 327,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 314,
                    "end": 325,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 314,
                      "end": 321,
                      "left": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 317,
                        "name": "NS2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 321,
                        "name": "NS1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 325,
                      "name": "NS2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
