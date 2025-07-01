__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 25
        },
        "expression": false,
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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 37
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 40,
            "end": 41
          },
          "definite": false,
          "start": 30,
          "end": 41
        }
      ],
      "declare": false,
      "start": 26,
      "end": 42
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
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 54
          },
          "init": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 57,
            "end": 66
          },
          "definite": false,
          "start": 47,
          "end": 66
        }
      ],
      "declare": false,
      "start": 43,
      "end": 67
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 77
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 95
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 98,
                  "end": 99
                },
                "definite": false,
                "start": 88,
                "end": 99
              }
            ],
            "declare": false,
            "start": 84,
            "end": 100
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
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 116
                },
                "init": {
                  "type": "Literal",
                  "value": "require",
                  "raw": "\"require\"",
                  "start": 119,
                  "end": 128
                },
                "definite": false,
                "start": 109,
                "end": 128
              }
            ],
            "declare": false,
            "start": 105,
            "end": 129
          }
        ],
        "start": 78,
        "end": 131
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 131
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 141
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
                    "name": "exports",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 166
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 169,
                    "end": 170
                  },
                  "definite": false,
                  "start": 159,
                  "end": 170
                }
              ],
              "declare": false,
              "start": 155,
              "end": 171
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 148,
            "end": 171
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
                    "name": "require",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 194
                  },
                  "init": {
                    "type": "Literal",
                    "value": "require",
                    "raw": "\"require\"",
                    "start": 197,
                    "end": 206
                  },
                  "definite": false,
                  "start": 187,
                  "end": 206
                }
              ],
              "declare": false,
              "start": 183,
              "end": 207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 176,
            "end": 207
          }
        ],
        "start": 142,
        "end": 209
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 132,
      "end": 209
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 210
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 14,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 28
          },
          "init": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 31,
            "end": 40
          },
          "definite": false,
          "start": 21,
          "end": 40
        }
      ],
      "declare": false,
      "start": 17,
      "end": 41
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exports",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 69
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 72,
                  "end": 73
                },
                "definite": false,
                "start": 62,
                "end": 73
              }
            ],
            "declare": false,
            "start": 58,
            "end": 74
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
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 90
                },
                "init": {
                  "type": "Literal",
                  "value": "require",
                  "raw": "\"require\"",
                  "start": 93,
                  "end": 102
                },
                "definite": false,
                "start": 83,
                "end": 102
              }
            ],
            "declare": false,
            "start": 79,
            "end": 103
          }
        ],
        "start": 52,
        "end": 105
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 42,
      "end": 105
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 115
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
                    "name": "exports",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 140
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 143,
                    "end": 144
                  },
                  "definite": false,
                  "start": 133,
                  "end": 144
                }
              ],
              "declare": false,
              "start": 129,
              "end": 145
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 122,
            "end": 145
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
                    "name": "require",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 168
                  },
                  "init": {
                    "type": "Literal",
                    "value": "require",
                    "raw": "\"require\"",
                    "start": 171,
                    "end": 180
                  },
                  "definite": false,
                  "start": 161,
                  "end": 180
                }
              ],
              "declare": false,
              "start": 157,
              "end": 181
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 150,
            "end": 181
          }
        ],
        "start": 116,
        "end": 183
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 106,
      "end": 183
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 183
}
```
