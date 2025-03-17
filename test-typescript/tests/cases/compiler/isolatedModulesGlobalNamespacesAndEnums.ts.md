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
        "name": "Instantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 42,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "Uninstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "attributes": [],
            "exportKind": "type"
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
        "name": "Ambient",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 153,
                  "end": 162,
                  "id": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 162,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 154,
                      "end": 162,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 156,
                        "end": 162
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
          "name": "Instantiated",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 49,
                    "end": 54,
                    "id": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 22,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 42,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": true,
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
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 16,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "Z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 71,
            "end": 77,
            "object": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "name": "Enum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "Z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 71,
              "end": 77,
              "object": {
                "type": "Identifier",
                "start": 71,
                "end": 75,
                "name": "Enum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 81,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 105,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
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
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
