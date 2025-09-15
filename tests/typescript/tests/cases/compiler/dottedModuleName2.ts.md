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
            "start": 171,
            "end": 172
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "start": 171,
          "end": 174
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 176
        },
        "start": 171,
        "end": 176
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
                    "start": 198,
                    "end": 199
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 202,
                    "end": 203
                  },
                  "definite": false,
                  "start": 198,
                  "end": 203
                }
              ],
              "declare": false,
              "start": 194,
              "end": 204
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 187,
            "end": 204
          }
        ],
        "start": 179,
        "end": 208
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 164,
      "end": 208
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 223
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
              "start": 241,
              "end": 243
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 247
            },
            "importKind": "value",
            "start": 234,
            "end": 248
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X2",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 264
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 270
              },
              "start": 267,
              "end": 270
            },
            "importKind": "value",
            "start": 255,
            "end": 271
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X3",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 287
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
                  "start": 290,
                  "end": 291
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 293
                },
                "start": 290,
                "end": 293
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              "start": 290,
              "end": 295
            },
            "importKind": "value",
            "start": 278,
            "end": 296
          }
        ],
        "start": 226,
        "end": 300
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 215,
      "end": 300
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 300
}
```
