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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
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
              "value": 2,
              "raw": "2"
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 47,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 29,
        "end": 47,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 46,
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
              "value": "bar",
              "raw": "\"bar\""
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "value": "./helpers",
        "raw": "\"./helpers\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 33,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 55,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 45,
            "end": 52,
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
            },
            "computed": false
          }
        ]
      },
      "const": false,
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
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 31,
        "value": "./helpers",
        "raw": "\"./helpers\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 33,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 40,
        "end": 106,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 45,
            "end": 57,
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
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 49,
                  "end": 52,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 55,
                  "end": 57,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
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
              ]
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 72,
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
              "left": {
                "type": "Literal",
                "start": 66,
                "end": 68,
                "value": "",
                "raw": "\"\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 71,
                "end": 72,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 77,
            "end": 87,
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
              "left": {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "value": 2,
                "raw": "2"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 85,
                "end": 87,
                "value": "",
                "raw": "\"\""
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 92,
            "end": 103,
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
              "value": "foo",
              "raw": "\"foo\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
