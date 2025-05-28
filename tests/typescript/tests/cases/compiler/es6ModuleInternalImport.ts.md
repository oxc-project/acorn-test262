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
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
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
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 33,
                    "end": 39,
                    "id": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 62,
          "end": 65,
          "left": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 79,
        "end": 82,
        "left": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 100,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 92,
            "end": 99,
            "left": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "moduleReference": {
                  "type": "TSQualifiedName",
                  "start": 143,
                  "end": 146,
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "importKind": "value"
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "TSImportEqualsDeclaration",
              "start": 152,
              "end": 168,
              "id": {
                "type": "Identifier",
                "start": 159,
                "end": 161,
                "decorators": [],
                "name": "a4",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 164,
                "end": 167,
                "left": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            {
              "type": "VariableDeclaration",
              "start": 173,
              "end": 189,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 177,
                  "end": 188,
                  "id": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 178,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "start": 181,
                    "end": 188,
                    "left": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 183,
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 188,
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 194,
              "end": 211,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 198,
                  "end": 210,
                  "id": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 200,
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "start": 203,
                    "end": 210,
                    "left": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 205,
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 210,
                      "decorators": [],
                      "name": "a4",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "definite": false
                }
              ],
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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 214,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 223,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "a3",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 249,
                "end": 252,
                "left": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 258,
            "end": 274,
            "id": {
              "type": "Identifier",
              "start": 265,
              "end": 267,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 270,
              "end": 273,
              "left": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 279,
            "end": 295,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 283,
                "end": 294,
                "id": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 287,
                  "end": 294,
                  "left": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 289,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 294,
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 300,
            "end": 317,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 304,
                "end": 316,
                "id": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 309,
                  "end": 316,
                  "left": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 311,
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 316,
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 322,
            "end": 345,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 344,
                "id": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 328,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 336,
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 344,
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
