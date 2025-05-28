__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "ext",
        "raw": "\"ext\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 56,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 56,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 55,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 44,
                    "end": 55,
                    "value": "default a",
                    "raw": "\"default a\""
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
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 123,
      "id": {
        "type": "Literal",
        "start": 74,
        "end": 85,
        "value": "ext/other",
        "raw": "\"ext/other\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 86,
        "end": 123,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 92,
            "end": 121,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 99,
              "end": 121,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 105,
                  "end": 120,
                  "id": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 109,
                    "end": 120,
                    "value": "default b",
                    "raw": "\"default b\""
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
      "kind": "module",
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
  "end": 120,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "ext",
        "raw": "\"ext\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 56,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 54,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 54,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 53,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 44,
                    "end": 53,
                    "value": "ts3.1 a",
                    "raw": "\"ts3.1 a\""
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
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 57,
      "end": 119,
      "id": {
        "type": "Literal",
        "start": 72,
        "end": 83,
        "value": "ext/other",
        "raw": "\"ext/other\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 84,
        "end": 119,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 117,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 97,
              "end": 117,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 103,
                  "end": 116,
                  "id": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 107,
                    "end": 116,
                    "value": "ts3.1 b",
                    "raw": "\"ts3.1 b\""
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
      "kind": "module",
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
  "end": 107,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "ext",
        "raw": "\"ext\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 43,
        "end": 54,
        "value": "ext/other",
        "raw": "\"ext/other\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 81,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 76,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 76,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 67,
                "end": 76,
                "literal": {
                  "type": "Literal",
                  "start": 67,
                  "end": 76,
                  "value": "ts3.1 a",
                  "raw": "\"ts3.1 a\""
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 101,
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 101,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 92,
                "end": 101,
                "literal": {
                  "type": "Literal",
                  "start": 92,
                  "end": 101,
                  "value": "ts3.1 b",
                  "raw": "\"ts3.1 b\""
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
