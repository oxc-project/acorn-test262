__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ext",
        "raw": "\"ext\"",
        "start": 15,
        "end": 20
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "init": {
                    "type": "Literal",
                    "value": "default a",
                    "raw": "\"default a\"",
                    "start": 44,
                    "end": 55
                  },
                  "definite": false,
                  "start": 40,
                  "end": 55
                }
              ],
              "declare": false,
              "start": 34,
              "end": 56
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 56
          }
        ],
        "start": 21,
        "end": 58
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 58
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ext/other",
        "raw": "\"ext/other\"",
        "start": 74,
        "end": 85
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 106
                  },
                  "init": {
                    "type": "Literal",
                    "value": "default b",
                    "raw": "\"default b\"",
                    "start": 109,
                    "end": 120
                  },
                  "definite": false,
                  "start": 105,
                  "end": 120
                }
              ],
              "declare": false,
              "start": 99,
              "end": 121
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 121
          }
        ],
        "start": 86,
        "end": 123
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 59,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 124
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ext",
        "raw": "\"ext\"",
        "start": 15,
        "end": 20
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "init": {
                    "type": "Literal",
                    "value": "ts3.1 a",
                    "raw": "\"ts3.1 a\"",
                    "start": 44,
                    "end": 53
                  },
                  "definite": false,
                  "start": 40,
                  "end": 53
                }
              ],
              "declare": false,
              "start": 34,
              "end": 54
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 54
          }
        ],
        "start": 21,
        "end": 56
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ext/other",
        "raw": "\"ext/other\"",
        "start": 72,
        "end": 83
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 104
                  },
                  "init": {
                    "type": "Literal",
                    "value": "ts3.1 b",
                    "raw": "\"ts3.1 b\"",
                    "start": 107,
                    "end": 116
                  },
                  "definite": false,
                  "start": 103,
                  "end": 116
                }
              ],
              "declare": false,
              "start": 97,
              "end": 117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 90,
            "end": 117
          }
        ],
        "start": 84,
        "end": 119
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 57,
      "end": 119
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "ext",
        "raw": "\"ext\"",
        "start": 18,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "importKind": "value",
          "start": 34,
          "end": 35
        }
      ],
      "source": {
        "type": "Literal",
        "value": "ext/other",
        "raw": "\"ext/other\"",
        "start": 43,
        "end": 54
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 25,
      "end": 55
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "ts3.1 a",
                  "raw": "\"ts3.1 a\"",
                  "start": 67,
                  "end": 76
                },
                "start": 67,
                "end": 76
              },
              "start": 65,
              "end": 76
            },
            "start": 63,
            "end": 76
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "definite": false,
          "start": 63,
          "end": 80
        }
      ],
      "declare": false,
      "start": 57,
      "end": 81
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
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "ts3.1 b",
                  "raw": "\"ts3.1 b\"",
                  "start": 92,
                  "end": 101
                },
                "start": 92,
                "end": 101
              },
              "start": 90,
              "end": 101
            },
            "start": 88,
            "end": 101
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "definite": false,
          "start": 88,
          "end": 105
        }
      ],
      "declare": false,
      "start": 82,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
