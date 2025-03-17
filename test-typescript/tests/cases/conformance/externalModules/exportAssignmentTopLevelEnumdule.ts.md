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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 12,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "name": "red",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 17,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "name": "green",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 24,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 28,
            "name": "blue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 30,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 15,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
              "name": "red",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 22,
              "name": "green",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 24,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "name": "blue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 42,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 45,
            "end": 68,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 52,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 56,
                  "end": 67,
                  "id": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 62,
                    "name": "answer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 65,
                    "end": 67,
                    "value": 42,
                    "raw": "42"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 84,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
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
  "end": 97,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 47,
            "name": "color",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 47,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 49,
      "end": 96,
      "test": {
        "type": "BinaryExpression",
        "start": 52,
        "end": 71,
        "left": {
          "type": "Identifier",
          "start": 52,
          "end": 57,
          "name": "color",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 62,
          "end": 71,
          "object": {
            "type": "Identifier",
            "start": 62,
            "end": 65,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 66,
            "end": 71,
            "name": "green",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 72,
        "end": 96,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 75,
            "end": 94,
            "expression": {
              "type": "AssignmentExpression",
              "start": 75,
              "end": 93,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 75,
                "end": 80,
                "name": "color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 83,
                "end": 93,
                "object": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "name": "answer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
