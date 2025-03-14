__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 125,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 33,
      "end": 64,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 64,
        "raw": "\"folder2/file2\"",
        "value": "folder2/file2"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 42,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 65,
      "end": 100,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "decorators": [],
        "name": "use",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 86,
          "end": 92,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 92,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 89,
              "end": 92
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 93,
        "end": 99,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 95,
          "end": 99
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 124,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 123,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 105,
            "end": 122,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 105,
              "end": 120,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 107,
                "end": 120,
                "decorators": [],
                "name": "toExponential",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 101,
          "end": 104,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
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
  "end": 131,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "raw": "\"./file3\"",
        "value": "./file3"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 54,
      "end": 82,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 75,
        "end": 82,
        "raw": "\"file4\"",
        "value": "file4"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 62,
          "end": 68,
          "imported": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 109,
      "end": 130,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 116,
        "end": 130,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 120,
            "end": 129,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 124,
              "end": 129,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "b",
                "optional": false
              }
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
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
              "raw": "1",
              "value": 1
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
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 18,
              "raw": "100",
              "value": 100
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
