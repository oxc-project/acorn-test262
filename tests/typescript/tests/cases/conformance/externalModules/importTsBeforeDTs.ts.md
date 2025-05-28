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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 25,
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
              "value": 42,
              "raw": "42"
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
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 25,
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
              "value": 42,
              "raw": "42"
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
  "end": 139,
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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "value": "./foo_0",
          "raw": "\"./foo_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 53,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 39,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 42,
            "end": 52,
            "left": {
              "type": "MemberExpression",
              "start": 42,
              "end": 47,
              "object": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 50,
              "end": 52,
              "value": 10,
              "raw": "10"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 121,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 110,
            "end": 120,
            "left": {
              "type": "MemberExpression",
              "start": 110,
              "end": 115,
              "object": {
                "type": "Identifier",
                "start": 110,
                "end": 113,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 118,
              "end": 120,
              "value": 10,
              "raw": "10"
            }
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
