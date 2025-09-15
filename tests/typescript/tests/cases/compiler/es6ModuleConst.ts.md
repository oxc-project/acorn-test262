__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 17,
              "end": 24
            },
            "definite": false,
            "start": 13,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 42,
                  "end": 48
                },
                "start": 40,
                "end": 48
              },
              "start": 39,
              "end": 48
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "definite": false,
            "start": 39,
            "end": 52
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "definite": false,
            "start": 54,
            "end": 59
          }
        ],
        "declare": false,
        "start": 33,
        "end": 60
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 26,
      "end": 60
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "definite": false,
          "start": 67,
          "end": 72
        }
      ],
      "declare": false,
      "start": 61,
      "end": 73
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "start": 80,
            "end": 89
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "definite": false,
          "start": 80,
          "end": 93
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "definite": false,
          "start": 95,
          "end": 100
        }
      ],
      "declare": false,
      "start": 74,
      "end": 101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 121
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "definite": false,
                    "start": 141,
                    "end": 146
                  }
                ],
                "declare": false,
                "start": 135,
                "end": 147
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 128,
              "end": 147
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 168,
                          "end": 174
                        },
                        "start": 166,
                        "end": 174
                      },
                      "start": 165,
                      "end": 174
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 178
                    },
                    "definite": false,
                    "start": 165,
                    "end": 178
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 181
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 185
                    },
                    "definite": false,
                    "start": 180,
                    "end": 185
                  }
                ],
                "declare": false,
                "start": 159,
                "end": 186
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 152,
              "end": 186
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 201,
                      "end": 203
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "optional": false,
                    "computed": false,
                    "start": 201,
                    "end": 205
                  },
                  "definite": false,
                  "start": 197,
                  "end": 205
                }
              ],
              "declare": false,
              "start": 191,
              "end": 206
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
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 220,
                        "end": 226
                      },
                      "start": 218,
                      "end": 226
                    },
                    "start": 217,
                    "end": 226
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "definite": false,
                  "start": 217,
                  "end": 230
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 233
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 237
                  },
                  "definite": false,
                  "start": 232,
                  "end": 237
                }
              ],
              "declare": false,
              "start": 211,
              "end": 238
            }
          ],
          "start": 122,
          "end": 240
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 109,
        "end": 240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 240
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 253
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 274
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 278
                  },
                  "definite": false,
                  "start": 273,
                  "end": 278
                }
              ],
              "declare": false,
              "start": 267,
              "end": 279
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 260,
            "end": 279
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 300,
                        "end": 306
                      },
                      "start": 298,
                      "end": 306
                    },
                    "start": 297,
                    "end": 306
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 310
                  },
                  "definite": false,
                  "start": 297,
                  "end": 310
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 313
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 317
                  },
                  "definite": false,
                  "start": 312,
                  "end": 317
                }
              ],
              "declare": false,
              "start": 291,
              "end": 318
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 284,
            "end": 318
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 330
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 335
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "optional": false,
                  "computed": false,
                  "start": 333,
                  "end": 337
                },
                "definite": false,
                "start": 329,
                "end": 337
              }
            ],
            "declare": false,
            "start": 323,
            "end": 338
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 352,
                      "end": 358
                    },
                    "start": 350,
                    "end": 358
                  },
                  "start": 349,
                  "end": 358
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 362
                },
                "definite": false,
                "start": 349,
                "end": 362
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 369
                },
                "definite": false,
                "start": 364,
                "end": 369
              }
            ],
            "declare": false,
            "start": 343,
            "end": 370
          }
        ],
        "start": 254,
        "end": 372
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 241,
      "end": 372
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 372
}
```
