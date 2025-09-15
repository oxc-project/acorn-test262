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
        "start": 78,
        "end": 80
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
                  "start": 91,
                  "end": 98
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 101,
                  "end": 102
                },
                "definite": false,
                "start": 91,
                "end": 102
              }
            ],
            "declare": false,
            "start": 87,
            "end": 103
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
                  "start": 112,
                  "end": 119
                },
                "init": {
                  "type": "Literal",
                  "value": "require",
                  "raw": "\"require\"",
                  "start": 122,
                  "end": 131
                },
                "definite": false,
                "start": 112,
                "end": 131
              }
            ],
            "declare": false,
            "start": 108,
            "end": 132
          }
        ],
        "start": 81,
        "end": 134
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 134
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 147
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
                    "start": 165,
                    "end": 172
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 175,
                    "end": 176
                  },
                  "definite": false,
                  "start": 165,
                  "end": 176
                }
              ],
              "declare": false,
              "start": 161,
              "end": 177
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 154,
            "end": 177
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
                    "start": 193,
                    "end": 200
                  },
                  "init": {
                    "type": "Literal",
                    "value": "require",
                    "raw": "\"require\"",
                    "start": 203,
                    "end": 212
                  },
                  "definite": false,
                  "start": 193,
                  "end": 212
                }
              ],
              "declare": false,
              "start": 189,
              "end": 213
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 182,
            "end": 213
          }
        ],
        "start": 148,
        "end": 215
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 135,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 216
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
        "start": 52,
        "end": 54
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
                  "start": 65,
                  "end": 72
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 75,
                  "end": 76
                },
                "definite": false,
                "start": 65,
                "end": 76
              }
            ],
            "declare": false,
            "start": 61,
            "end": 77
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
                  "start": 86,
                  "end": 93
                },
                "init": {
                  "type": "Literal",
                  "value": "require",
                  "raw": "\"require\"",
                  "start": 96,
                  "end": 105
                },
                "definite": false,
                "start": 86,
                "end": 105
              }
            ],
            "declare": false,
            "start": 82,
            "end": 106
          }
        ],
        "start": 55,
        "end": 108
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 42,
      "end": 108
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
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
                    "start": 139,
                    "end": 146
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 149,
                    "end": 150
                  },
                  "definite": false,
                  "start": 139,
                  "end": 150
                }
              ],
              "declare": false,
              "start": 135,
              "end": 151
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 128,
            "end": 151
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
                    "start": 167,
                    "end": 174
                  },
                  "init": {
                    "type": "Literal",
                    "value": "require",
                    "raw": "\"require\"",
                    "start": 177,
                    "end": 186
                  },
                  "definite": false,
                  "start": 167,
                  "end": 186
                }
              ],
              "declare": false,
              "start": 163,
              "end": 187
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 156,
            "end": 187
          }
        ],
        "start": 122,
        "end": 189
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 109,
      "end": 189
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
