__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 10,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 8,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 38,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 34,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 33,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "value": 1,
                    "raw": "1"
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
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "name": "AA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 55,
        "end": 102,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 100,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 64,
              "end": 100,
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 73,
                "end": 100,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 79,
                    "end": 96,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 86,
                      "end": 96,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 90,
                          "end": 95,
                          "id": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 91,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 94,
                            "end": 95,
                            "value": 1,
                            "raw": "1"
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 118,
            "name": "tmpOK",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 121,
            "end": 127,
            "object": {
              "type": "MemberExpression",
              "start": 121,
              "end": 125,
              "object": {
                "type": "Identifier",
                "start": 121,
                "end": 123,
                "name": "AA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 143,
            "name": "tmpError",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 146,
            "end": 151,
            "object": {
              "type": "MemberExpression",
              "start": 146,
              "end": 149,
              "object": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 155,
      "end": 199,
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
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 170,
        "end": 199,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 178,
            "end": 195,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 185,
              "end": 195,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 189,
                  "end": 194,
                  "id": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 193,
                    "end": 194,
                    "value": 1,
                    "raw": "1"
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
    {
      "type": "TSModuleDeclaration",
      "start": 206,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "X1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 246,
            "end": 262,
            "id": {
              "type": "Identifier",
              "start": 253,
              "end": 255,
              "name": "X2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 258,
              "end": 261,
              "left": {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 269,
            "end": 287,
            "id": {
              "type": "Identifier",
              "start": 276,
              "end": 278,
              "name": "X3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
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
