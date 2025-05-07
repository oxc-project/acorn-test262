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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 42,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 42,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 40,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 29,
                "end": 40,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 33,
                    "end": 39,
                    "definite": false,
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
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 66,
      "attributes": [],
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
        "importKind": "value",
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
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "importKind": "value",
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
      }
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
          "definite": false,
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
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 101,
      "end": 213,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 108,
        "end": 213,
        "body": {
          "type": "TSModuleBlock",
          "start": 118,
          "end": 213,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 124,
              "end": 147,
              "attributes": [],
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
                "importKind": "value",
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
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
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
              "importKind": "value",
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
              }
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
                  "definite": false,
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
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 183,
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 188,
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
                  "definite": false,
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
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 205,
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 210,
                      "decorators": [],
                      "name": "a4",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 115,
          "end": 117,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 214,
      "end": 347,
      "body": {
        "type": "TSModuleBlock",
        "start": 224,
        "end": 347,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 230,
            "end": 253,
            "attributes": [],
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
              "importKind": "value",
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
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
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
            "importKind": "value",
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
            }
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
                "definite": false,
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
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 289,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 294,
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 311,
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 316,
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 331,
                    "end": 336,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 333,
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 336,
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 339,
                    "end": 344,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 339,
                      "end": 341,
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 344,
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 223,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
