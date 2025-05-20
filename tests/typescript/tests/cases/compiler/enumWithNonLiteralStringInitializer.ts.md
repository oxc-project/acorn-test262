__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 29,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 46,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 41,
              "end": 46,
              "raw": "\"bar\"",
              "value": "bar"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "raw": "\"./helpers\"",
        "value": "./helpers"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSEnumDeclaration",
      "start": 33,
      "end": 55,
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 55,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 45,
            "end": 52,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "raw": "\"./helpers\"",
        "value": "./helpers"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSEnumDeclaration",
      "start": 33,
      "end": 106,
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 106,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 45,
            "end": 57,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "TemplateLiteral",
              "start": 49,
              "end": 57,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 55,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 49,
                  "end": 52,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 55,
                  "end": 57,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          },
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 72,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 66,
              "end": 72,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 66,
                "end": 68,
                "raw": "\"\"",
                "value": ""
              },
              "right": {
                "type": "Literal",
                "start": 71,
                "end": 72,
                "raw": "2",
                "value": 2
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 77,
            "end": 87,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 81,
              "end": 87,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "raw": "2",
                "value": 2
              },
              "right": {
                "type": "Literal",
                "start": 85,
                "end": 87,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 92,
            "end": 103,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 97,
              "end": 102,
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
