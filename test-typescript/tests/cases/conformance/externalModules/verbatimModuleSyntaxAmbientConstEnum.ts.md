__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 39,
        "body": {
          "type": "TSEnumBody",
          "start": 28,
          "end": 39,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 30,
              "end": 31,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 33,
              "end": 34,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 36,
              "end": 37,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": true,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 85,
      "body": {
        "type": "TSModuleBlock",
        "start": 55,
        "end": 85,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 59,
            "end": 83,
            "body": {
              "type": "TSEnumBody",
              "start": 72,
              "end": 83,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 74,
                  "end": 75,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null
                },
                {
                  "type": "TSEnumMember",
                  "start": 77,
                  "end": 78,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null
                },
                {
                  "type": "TSEnumMember",
                  "start": 80,
                  "end": 81,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null
                }
              ]
            },
            "const": true,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 54,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
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
  "end": 114,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 34,
      "end": 69,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 68,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 48,
          "end": 55,
          "imported": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 53,
            "end": 55,
            "decorators": [],
            "name": "_E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 93,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 92,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 88,
            "end": 91,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 76,
          "end": 87,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 76,
            "end": 83,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 87,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 104,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 100,
        "end": 103,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
  "end": 76,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 69,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 68,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 48,
          "end": 55,
          "exported": {
            "type": "Identifier",
            "start": 53,
            "end": 55,
            "decorators": [],
            "name": "_E",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
