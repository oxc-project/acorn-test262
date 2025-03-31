__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 347,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 42,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 42,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 40,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 29,
                "end": 40,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 33,
                    "end": 39,
                    "id": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 37,
                      "end": 39,
                      "value": 10,
                      "raw": "10"
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 66,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 50,
        "end": 66,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 59,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 62,
          "end": 65,
          "left": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "name": "a2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 79,
        "end": 82,
        "left": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 92,
            "end": 99,
            "left": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 101,
      "end": 213,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 108,
        "end": 213,
        "id": {
          "type": "Identifier",
          "start": 115,
          "end": 117,
          "name": "m1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 118,
          "end": 213,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 124,
              "end": 147,
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "start": 131,
                "end": 147,
                "id": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 140,
                  "name": "a3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 143,
                  "end": 146,
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 152,
              "end": 168,
              "id": {
                "type": "Identifier",
                "start": 159,
                "end": 161,
                "name": "a4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 164,
                "end": 167,
                "left": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            {
              "type": "VariableDeclaration",
              "start": 173,
              "end": 189,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 177,
                  "end": 188,
                  "id": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "start": 181,
                    "end": 188,
                    "left": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 183,
                      "name": "a1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 188,
                      "name": "a2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 194,
              "end": 211,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 198,
                  "end": 210,
                  "id": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 200,
                    "name": "x2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "start": 203,
                    "end": 210,
                    "left": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 205,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 210,
                      "name": "a4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 214,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 223,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 224,
        "end": 347,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 230,
            "end": 253,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 237,
              "end": 253,
              "id": {
                "type": "Identifier",
                "start": 244,
                "end": 246,
                "name": "a3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 249,
                "end": 252,
                "left": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 258,
            "end": 274,
            "id": {
              "type": "Identifier",
              "start": 265,
              "end": 267,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 270,
              "end": 273,
              "left": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 279,
            "end": 295,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 283,
                "end": 294,
                "id": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 287,
                  "end": 294,
                  "left": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 289,
                    "name": "a1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 294,
                    "name": "a2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 300,
            "end": 317,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 304,
                "end": 316,
                "id": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 309,
                  "end": 316,
                  "left": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 311,
                    "name": "a3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 316,
                    "name": "a4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 322,
            "end": 345,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 344,
                "id": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 328,
                  "name": "x4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 331,
                  "end": 344,
                  "left": {
                    "type": "MemberExpression",
                    "start": 331,
                    "end": 336,
                    "object": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 333,
                      "name": "m1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 336,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 339,
                    "end": 344,
                    "object": {
                      "type": "Identifier",
                      "start": 339,
                      "end": 341,
                      "name": "m2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 344,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
