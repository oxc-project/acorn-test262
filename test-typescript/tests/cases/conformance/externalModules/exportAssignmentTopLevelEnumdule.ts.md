__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 30,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 15,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
              "decorators": [],
              "name": "red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 22,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "decorators": [],
              "name": "green",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 24,
            "end": 28,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "blue",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 70,
      "body": {
        "type": "TSModuleBlock",
        "start": 42,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 45,
            "end": 68,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 52,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 56,
                  "end": 67,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 62,
                    "decorators": [],
                    "name": "answer",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 65,
                    "end": 67,
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 84,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "foo",
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
  "end": 96,
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
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 47,
            "decorators": [],
            "name": "color",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 47,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 47,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 49,
      "end": 96,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 72,
        "end": 96,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 75,
            "end": 94,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 75,
              "end": 93,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 75,
                "end": 80,
                "decorators": [],
                "name": "color",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 83,
                "end": 93,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 52,
        "end": 71,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 52,
          "end": 57,
          "decorators": [],
          "name": "color",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 62,
          "end": 71,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 66,
            "end": 71,
            "decorators": [],
            "name": "green",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
