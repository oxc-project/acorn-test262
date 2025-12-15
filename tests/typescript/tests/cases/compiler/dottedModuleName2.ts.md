__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 11
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "start": 10,
        "end": 13
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 32
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 35,
                    "end": 36
                  },
                  "definite": false,
                  "start": 31,
                  "end": 36
                }
              ],
              "declare": false,
              "start": 27,
              "end": 37
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 37
          }
        ],
        "start": 14,
        "end": 41
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 60
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 99,
                            "end": 100
                          },
                          "init": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 103,
                            "end": 104
                          },
                          "definite": false,
                          "start": 99,
                          "end": 104
                        }
                      ],
                      "declare": false,
                      "start": 95,
                      "end": 105
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 88,
                    "end": 105
                  }
                ],
                "start": 82,
                "end": 109
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 70,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 63,
            "end": 109
          }
        ],
        "start": 61,
        "end": 111
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 48,
      "end": 111
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
            "name": "tmpOK",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 127
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "optional": false,
              "computed": false,
              "start": 130,
              "end": 134
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "optional": false,
            "computed": false,
            "start": 130,
            "end": 136
          },
          "definite": false,
          "start": 122,
          "end": 136
        }
      ],
      "declare": false,
      "start": 118,
      "end": 137
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
            "name": "tmpError",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 152
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 158
              },
              "optional": false,
              "computed": false,
              "start": 155,
              "end": 158
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "optional": false,
            "computed": false,
            "start": 155,
            "end": 160
          },
          "definite": false,
          "start": 144,
          "end": 160
        }
      ],
      "declare": false,
      "start": 140,
      "end": 161
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "start": 174,
          "end": 177
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 179
        },
        "start": 174,
        "end": 179
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 202
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 205,
                    "end": 206
                  },
                  "definite": false,
                  "start": 201,
                  "end": 206
                }
              ],
              "declare": false,
              "start": 197,
              "end": 207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 190,
            "end": 207
          }
        ],
        "start": 182,
        "end": 211
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 164,
      "end": 211
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 229
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X1",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 249
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 253
            },
            "importKind": "value",
            "start": 240,
            "end": 254
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X2",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 270
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 274
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 276
              },
              "start": 273,
              "end": 276
            },
            "importKind": "value",
            "start": 261,
            "end": 277
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X3",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 293
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 297
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "start": 296,
                "end": 299
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 301
              },
              "start": 296,
              "end": 301
            },
            "importKind": "value",
            "start": 284,
            "end": 302
          }
        ],
        "start": 232,
        "end": 306
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 218,
      "end": 306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 306
}
```
