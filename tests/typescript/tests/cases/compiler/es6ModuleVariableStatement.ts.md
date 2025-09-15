__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 15,
              "end": 22
            },
            "definite": false,
            "start": 11,
            "end": 22
          }
        ],
        "declare": false,
        "start": 7,
        "end": 23
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 23
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
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
                  "start": 38,
                  "end": 44
                },
                "start": 36,
                "end": 44
              },
              "start": 35,
              "end": 44
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "definite": false,
            "start": 35,
            "end": 48
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 55
            },
            "definite": false,
            "start": 50,
            "end": 55
          }
        ],
        "declare": false,
        "start": 31,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 56
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "definite": false,
          "start": 61,
          "end": 66
        }
      ],
      "declare": false,
      "start": 57,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "start": 72,
            "end": 81
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 85
          },
          "definite": false,
          "start": 72,
          "end": 85
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "definite": false,
          "start": 87,
          "end": 92
        }
      ],
      "declare": false,
      "start": 68,
      "end": 93
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
          "start": 111,
          "end": 113
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 132
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 136
                    },
                    "definite": false,
                    "start": 131,
                    "end": 136
                  }
                ],
                "declare": false,
                "start": 127,
                "end": 137
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 120,
              "end": 137
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
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
                          "start": 156,
                          "end": 162
                        },
                        "start": 154,
                        "end": 162
                      },
                      "start": 153,
                      "end": 162
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "definite": false,
                    "start": 153,
                    "end": 166
                  },
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 169
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 173
                    },
                    "definite": false,
                    "start": 168,
                    "end": 173
                  }
                ],
                "declare": false,
                "start": 149,
                "end": 174
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 142,
              "end": 174
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 189
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 191
                    },
                    "optional": false,
                    "computed": false,
                    "start": 187,
                    "end": 191
                  },
                  "definite": false,
                  "start": 183,
                  "end": 191
                }
              ],
              "declare": false,
              "start": 179,
              "end": 192
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
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
                        "start": 204,
                        "end": 210
                      },
                      "start": 202,
                      "end": 210
                    },
                    "start": 201,
                    "end": 210
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 213,
                    "end": 214
                  },
                  "definite": false,
                  "start": 201,
                  "end": 214
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 221
                  },
                  "definite": false,
                  "start": 216,
                  "end": 221
                }
              ],
              "declare": false,
              "start": 197,
              "end": 222
            }
          ],
          "start": 114,
          "end": 224
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 101,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 94,
      "end": 224
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 237
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 256
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 260
                  },
                  "definite": false,
                  "start": 255,
                  "end": 260
                }
              ],
              "declare": false,
              "start": 251,
              "end": 261
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 244,
            "end": 261
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
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
                        "start": 280,
                        "end": 286
                      },
                      "start": 278,
                      "end": 286
                    },
                    "start": 277,
                    "end": 286
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 290
                  },
                  "definite": false,
                  "start": 277,
                  "end": 290
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 293
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 297
                  },
                  "definite": false,
                  "start": 292,
                  "end": 297
                }
              ],
              "declare": false,
              "start": 273,
              "end": 298
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 266,
            "end": 298
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 313
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
                  "optional": false,
                  "computed": false,
                  "start": 311,
                  "end": 315
                },
                "definite": false,
                "start": 307,
                "end": 315
              }
            ],
            "declare": false,
            "start": 303,
            "end": 316
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                      "start": 328,
                      "end": 334
                    },
                    "start": 326,
                    "end": 334
                  },
                  "start": 325,
                  "end": 334
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "definite": false,
                "start": 325,
                "end": 338
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 341
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
                },
                "definite": false,
                "start": 340,
                "end": 345
              }
            ],
            "declare": false,
            "start": 321,
            "end": 346
          }
        ],
        "start": 238,
        "end": 348
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 225,
      "end": 348
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 348
}
```
