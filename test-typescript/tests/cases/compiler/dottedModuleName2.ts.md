__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 291,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 38,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 34,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 33,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "raw": "1",
                    "value": 1,
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
        "type": "TSQualifiedName",
        "start": 7,
        "end": 10,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 8,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 102,
      "body": {
        "type": "TSModuleBlock",
        "start": 55,
        "end": 102,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 100,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 64,
              "end": 100,
              "body": {
                "type": "TSModuleBlock",
                "start": 73,
                "end": 100,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 79,
                    "end": 96,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 86,
                      "end": 96,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 90,
                          "end": 95,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 91,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 94,
                            "end": 95,
                            "raw": "1",
                            "value": 1,
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
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
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
        "start": 52,
        "end": 54,
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 118,
            "decorators": [],
            "name": "tmpOK",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 121,
            "end": 127,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 121,
              "end": 125,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 121,
                "end": 123,
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "x",
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
      "start": 131,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 143,
            "decorators": [],
            "name": "tmpError",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 146,
            "end": 151,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 146,
              "end": 149,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "x",
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
      "type": "TSModuleDeclaration",
      "start": 155,
      "end": 199,
      "body": {
        "type": "TSModuleBlock",
        "start": 170,
        "end": 199,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 178,
            "end": 195,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 185,
              "end": 195,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 189,
                  "end": 194,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 193,
                    "end": 194,
                    "raw": "1",
                    "value": 1,
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
        "type": "TSQualifiedName",
        "start": 162,
        "end": 167,
        "left": {
          "type": "TSQualifiedName",
          "start": 162,
          "end": 165,
          "left": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 206,
      "end": 291,
      "body": {
        "type": "TSModuleBlock",
        "start": 217,
        "end": 291,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 225,
            "end": 239,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 234,
              "decorators": [],
              "name": "X1",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 246,
            "end": 262,
            "id": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
              "decorators": [],
              "name": "X2",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 258,
              "end": 261,
              "left": {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 269,
            "end": 287,
            "id": {
              "type": "Identifier",
              "start": 276,
              "end": 278,
              "decorators": [],
              "name": "X3",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 281,
              "end": 286,
              "left": {
                "type": "TSQualifiedName",
                "start": 281,
                "end": 284,
                "left": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
