__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "Instantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 29,
            "end": 48,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 36,
              "end": 48,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 42,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 46,
                    "end": 47,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 75,
        "decorators": [],
        "name": "Uninstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 76,
        "end": 107,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 82,
            "end": 105,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 89,
              "end": 105,
              "id": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 98,
                "end": 104
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 108,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 133,
        "decorators": [],
        "name": "Ambient",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 134,
        "end": 165,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 140,
            "end": 163,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 147,
              "end": 163,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 153,
                  "end": 162,
                  "id": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 162,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 154,
                      "end": 162,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 156,
                        "end": 162
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 57,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 57,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 29,
          "decorators": [],
          "name": "Instantiated",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 30,
          "end": 57,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 36,
              "end": 55,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 43,
                "end": 55,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 49,
                    "end": 54,
                    "id": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 53,
                      "end": 54,
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 21,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 18,
            "end": 19,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 22,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 57,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 46,
              "end": 55,
              "value": 1000000,
              "raw": "1_000_000"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 72,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 68,
            "end": 71,
            "value": "d",
            "raw": "'d'"
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 79,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 67,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 71,
              "end": 77,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 75,
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 81,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 99,
        "end": 112,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 105,
            "end": 110,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
