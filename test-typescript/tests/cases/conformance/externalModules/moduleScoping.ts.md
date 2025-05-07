__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 9,
            "end": 19,
            "raw": "\"sausages\"",
            "value": "sausages",
            "regex": null,
            "bigint": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 9,
            "end": 11,
            "raw": "42",
            "value": 42,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 35,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 38,
            "end": 45,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 44,
              "end": 45,
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
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
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 13,
              "decorators": [],
              "name": "v3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 16,
              "end": 20,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 28,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 31,
            "end": 38,
            "elements": [
              {
                "type": "Literal",
                "start": 32,
                "end": 33,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 34,
                "end": 35,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            ]
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "file3",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 33,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 32,
          "raw": "'./file3'",
          "value": "./file3",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 41,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 54,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 57,
            "end": 59,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 67,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 70,
            "end": 78,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 70,
              "end": 75,
              "decorators": [],
              "name": "file3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 76,
              "end": 78,
              "decorators": [],
              "name": "v3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 86,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 89,
            "end": 106,
            "properties": [
              {
                "type": "Property",
                "start": 90,
                "end": 97,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 93,
                  "end": 97,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 99,
                "end": 105,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 105,
                  "decorators": [],
                  "name": "NaN",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
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
