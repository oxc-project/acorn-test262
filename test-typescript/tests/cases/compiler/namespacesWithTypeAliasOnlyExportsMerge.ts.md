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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 9,
        "end": 15
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 40,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 83,
      "body": {
        "type": "TSModuleBlock",
        "start": 62,
        "end": 83,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 68,
            "end": 81,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 77,
                "end": 78,
                "exported": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "kind": "namespace"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 107,
            "decorators": [],
            "name": "try1",
            "optional": false,
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
                    "decorators": [],
                    "name": "Q",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 109,
      "end": 150,
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 150,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 148,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 145,
                "end": 146,
                "exported": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "Q",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "Q",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 129,
        "decorators": [],
        "name": "Q2",
        "optional": false
      },
      "kind": "namespace"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 177,
            "decorators": [],
            "name": "try2",
            "optional": false,
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
                      "decorators": [],
                      "name": "Q2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "decorators": [],
                      "name": "Q",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 179,
      "end": 224,
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 224,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 206,
            "end": 222,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 214,
                "end": 220,
                "exported": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 215,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "Q3",
        "optional": false
      },
      "kind": "namespace"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 249,
            "decorators": [],
            "name": "try3",
            "optional": false,
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
                    "decorators": [],
                    "name": "Q3",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 249,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 251,
      "end": 304,
      "body": {
        "type": "TSModuleBlock",
        "start": 272,
        "end": 304,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 278,
            "end": 302,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 287,
                "end": 299,
                "exported": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 299,
                  "decorators": [],
                  "name": "default",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "decorators": [],
                  "name": "Q",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 271,
        "decorators": [],
        "name": "Q4",
        "optional": false
      },
      "kind": "namespace"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 337,
            "decorators": [],
            "name": "try4",
            "optional": false,
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
                      "decorators": [],
                      "name": "Q4",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 335,
                      "decorators": [],
                      "name": "default",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 339,
      "end": 349,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 45,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 28,
            "end": 43,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 37,
                "end": 40,
                "exported": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "decorators": [],
                  "name": "NS2",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "decorators": [],
                  "name": "NS2",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "NS1",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 91,
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 91,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 74,
            "end": 89,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 83,
                "end": 86,
                "exported": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "decorators": [],
                  "name": "NS1",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "decorators": [],
                  "name": "NS1",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "NS2",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 102,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 9,
        "end": 15
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 33,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 26,
        "end": 32
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 82,
      "body": {
        "type": "TSModuleBlock",
        "start": 56,
        "end": 82,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 62,
            "end": 80,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 71,
                "end": 74,
                "exported": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "NS2",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "NS2",
                  "optional": false
                }
              },
              {
                "type": "ExportSpecifier",
                "start": 76,
                "end": 77,
                "exported": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "NS1",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 83,
      "end": 131,
      "body": {
        "type": "TSModuleBlock",
        "start": 105,
        "end": 131,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 111,
            "end": 129,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 120,
                "end": 123,
                "exported": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 123,
                  "decorators": [],
                  "name": "NS1",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 123,
                  "decorators": [],
                  "name": "NS1",
                  "optional": false
                }
              },
              {
                "type": "ExportSpecifier",
                "start": 125,
                "end": 126,
                "exported": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "decorators": [],
        "name": "NS2",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 132,
      "end": 142,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "decorators": [],
            "name": "try1",
            "optional": false,
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
                    "decorators": [],
                    "name": "NS1",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 195,
            "decorators": [],
            "name": "try2",
            "optional": false,
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
                    "decorators": [],
                    "name": "NS2",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 226,
            "decorators": [],
            "name": "try3",
            "optional": false,
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
                      "decorators": [],
                      "name": "NS1",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 224,
                      "decorators": [],
                      "name": "NS2",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 257,
            "decorators": [],
            "name": "try4",
            "optional": false,
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
                      "decorators": [],
                      "name": "NS2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 255,
                      "decorators": [],
                      "name": "NS1",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 257,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 292,
            "decorators": [],
            "name": "try5",
            "optional": false,
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
                        "decorators": [],
                        "name": "NS1",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 286,
                        "decorators": [],
                        "name": "NS2",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 290,
                      "decorators": [],
                      "name": "NS1",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 327,
            "decorators": [],
            "name": "try6",
            "optional": false,
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
                        "decorators": [],
                        "name": "NS2",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 321,
                        "decorators": [],
                        "name": "NS1",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 325,
                      "decorators": [],
                      "name": "NS2",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
