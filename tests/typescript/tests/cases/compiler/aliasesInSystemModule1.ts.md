__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "alias",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "foo",
          "raw": "'foo'",
          "start": 23,
          "end": 28
        },
        "start": 15,
        "end": 29
      },
      "importKind": "value",
      "start": 0,
      "end": 30
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cls",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 41
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "alias",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 49
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 55
        },
        "start": 44,
        "end": 55
      },
      "importKind": "value",
      "start": 31,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cls2",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 75
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 83
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Class",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 89
          },
          "start": 78,
          "end": 89
        },
        "importKind": "value",
        "start": 64,
        "end": 90
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 90
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 109
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 115
              },
              "optional": false,
              "computed": false,
              "start": 104,
              "end": 115
            },
            "typeArguments": null,
            "arguments": [],
            "start": 100,
            "end": 117
          },
          "definite": false,
          "start": 96,
          "end": 117
        }
      ],
      "declare": false,
      "start": 92,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "typeArguments": null,
            "arguments": [],
            "start": 127,
            "end": 136
          },
          "definite": false,
          "start": 123,
          "end": 136
        }
      ],
      "declare": false,
      "start": 119,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "cls2",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 154
            },
            "typeArguments": null,
            "arguments": [],
            "start": 146,
            "end": 156
          },
          "definite": false,
          "start": 142,
          "end": 156
        }
      ],
      "declare": false,
      "start": 138,
      "end": 157
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 170
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 192
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 200
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Class",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 206
                },
                "start": 195,
                "end": 206
              },
              "importKind": "value",
              "start": 182,
              "end": 207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 175,
            "end": 207
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 215
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 227
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 233
                    },
                    "optional": false,
                    "computed": false,
                    "start": 222,
                    "end": 233
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 218,
                  "end": 235
                },
                "definite": false,
                "start": 214,
                "end": 235
              }
            ],
            "declare": false,
            "start": 210,
            "end": 236
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 244
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cls",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 254
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 247,
                  "end": 256
                },
                "definite": false,
                "start": 243,
                "end": 256
              }
            ],
            "declare": false,
            "start": 239,
            "end": 257
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 266
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cls2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 277
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 269,
                  "end": 279
                },
                "definite": false,
                "start": 265,
                "end": 279
              }
            ],
            "declare": false,
            "start": 261,
            "end": 280
          }
        ],
        "start": 171,
        "end": 282
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 159,
      "end": 282
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
