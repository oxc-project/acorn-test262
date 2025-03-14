__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 25,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 23,
              "end": 25,
              "raw": "42",
              "value": 42
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
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 25,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 23,
              "end": 25,
              "raw": "42",
              "value": 42
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
  "end": 140,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 39,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 42,
            "end": 52,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 42,
              "end": 47,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 50,
              "end": 52,
              "raw": "10",
              "value": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "z2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 110,
            "end": 120,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 110,
              "end": 115,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 110,
                "end": 113,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 118,
              "end": 120,
              "raw": "10",
              "value": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
