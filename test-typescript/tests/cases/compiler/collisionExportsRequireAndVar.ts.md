collisionExportsRequireAndVar_externalmodule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 210,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 25,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 25,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "decorators": [],
            "name": "exports",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 40,
            "end": 41,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 54,
            "decorators": [],
            "name": "require",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 66,
            "raw": "\"require\"",
            "value": "require"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 131,
      "body": {
        "type": "TSModuleBlock",
        "start": 78,
        "end": 131,
        "body": [
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
                  "end": 95,
                  "decorators": [],
                  "name": "exports",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 98,
                  "end": 99,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 105,
            "end": 129,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 109,
                "end": 128,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 116,
                  "decorators": [],
                  "name": "require",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 119,
                  "end": 128,
                  "raw": "\"require\"",
                  "value": "require"
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
        "start": 75,
        "end": 77,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 132,
      "end": 209,
      "body": {
        "type": "TSModuleBlock",
        "start": 142,
        "end": 209,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 148,
            "end": 171,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 155,
              "end": 171,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 159,
                  "end": 170,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 166,
                    "decorators": [],
                    "name": "exports",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 169,
                    "end": 170,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 176,
            "end": 207,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 183,
              "end": 207,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 187,
                  "end": 206,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 194,
                    "decorators": [],
                    "name": "require",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 197,
                    "end": 206,
                    "raw": "\"require\"",
                    "value": "require"
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
        "start": 139,
        "end": 141,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
collisionExportsRequireAndVar_globalFile.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "exports",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 14,
            "end": 15,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 28,
            "decorators": [],
            "name": "require",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 40,
            "raw": "\"require\"",
            "value": "require"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 105,
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 105,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 74,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 73,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 69,
                  "decorators": [],
                  "name": "exports",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 103,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 83,
                "end": 102,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 90,
                  "decorators": [],
                  "name": "require",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 93,
                  "end": 102,
                  "raw": "\"require\"",
                  "value": "require"
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
        "start": 49,
        "end": 51,
        "decorators": [],
        "name": "m3",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 106,
      "end": 183,
      "body": {
        "type": "TSModuleBlock",
        "start": 116,
        "end": 183,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 145,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 129,
              "end": 145,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 133,
                  "end": 144,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 140,
                    "decorators": [],
                    "name": "exports",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 143,
                    "end": 144,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 150,
            "end": 181,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 157,
              "end": 181,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 161,
                  "end": 180,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 168,
                    "decorators": [],
                    "name": "require",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 171,
                    "end": 180,
                    "raw": "\"require\"",
                    "value": "require"
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
        "start": 113,
        "end": 115,
        "decorators": [],
        "name": "m4",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
