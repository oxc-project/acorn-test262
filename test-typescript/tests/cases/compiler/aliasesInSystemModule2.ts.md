__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 275,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "name": "alias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "name": "alias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 27,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "name": "cls",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 40,
        "end": 51,
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 45,
          "name": "alias",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 46,
          "end": 51,
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
      "start": 53,
      "end": 86,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 60,
        "end": 86,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 71,
          "name": "cls2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 74,
          "end": 85,
          "left": {
            "type": "Identifier",
            "start": 74,
            "end": 79,
            "name": "alias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 80,
            "end": 85,
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
      "start": 88,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 96,
            "end": 113,
            "callee": {
              "type": "MemberExpression",
              "start": 100,
              "end": 111,
              "object": {
                "type": "Identifier",
                "start": 100,
                "end": 105,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 111,
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
      "start": 115,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 123,
            "end": 132,
            "callee": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
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
      "start": 134,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 142,
            "end": 152,
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 150,
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
      "start": 155,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 163,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 164,
        "end": 275,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 168,
            "end": 200,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 175,
              "end": 200,
              "id": {
                "type": "Identifier",
                "start": 182,
                "end": 185,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 188,
                "end": 199,
                "left": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 193,
                  "name": "alias",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 199,
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
            "start": 203,
            "end": 229,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 207,
                "end": 228,
                "id": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 211,
                  "end": 228,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 215,
                    "end": 226,
                    "object": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 220,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 226,
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
            "start": 232,
            "end": 250,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 236,
                "end": 249,
                "id": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 240,
                  "end": 249,
                  "callee": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 247,
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
            "start": 254,
            "end": 273,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 258,
                "end": 272,
                "id": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 262,
                  "end": 272,
                  "callee": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 270,
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
