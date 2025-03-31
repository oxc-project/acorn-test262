__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 282,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "alias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 28,
          "value": "foo",
          "raw": "'foo'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 31,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "name": "cls",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 44,
        "end": 55,
        "left": {
          "type": "Identifier",
          "start": 44,
          "end": 49,
          "name": "alias",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 50,
          "end": 55,
          "name": "Class",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 90,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 64,
        "end": 90,
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 75,
          "name": "cls2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 78,
          "end": 89,
          "left": {
            "type": "Identifier",
            "start": 78,
            "end": 83,
            "name": "alias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 84,
            "end": 89,
            "name": "Class",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 100,
            "end": 117,
            "callee": {
              "type": "MemberExpression",
              "start": 104,
              "end": 115,
              "object": {
                "type": "Identifier",
                "start": 104,
                "end": 109,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 110,
                "end": 115,
                "name": "Class",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 127,
            "end": 136,
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "name": "cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 146,
            "end": 156,
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 154,
              "name": "cls2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 159,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 168,
        "end": 279,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 172,
            "end": 204,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 179,
              "end": 204,
              "id": {
                "type": "Identifier",
                "start": 186,
                "end": 189,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 192,
                "end": 203,
                "left": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 197,
                  "name": "alias",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 203,
                  "name": "Class",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 207,
            "end": 233,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 211,
                "end": 232,
                "id": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 215,
                  "end": 232,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 219,
                    "end": 230,
                    "object": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 224,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 230,
                      "name": "Class",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 236,
            "end": 254,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 240,
                "end": 253,
                "id": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 244,
                  "end": 253,
                  "callee": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 251,
                    "name": "cls",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 258,
            "end": 277,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 262,
                "end": 276,
                "id": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 266,
                  "end": 276,
                  "callee": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 274,
                    "name": "cls2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
