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
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "cls",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 40,
        "end": 51,
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 45,
          "decorators": [],
          "name": "alias",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 46,
          "end": 51,
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "cls2",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 74,
          "end": 85,
          "left": {
            "type": "Identifier",
            "start": 74,
            "end": 79,
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 80,
            "end": 85,
            "decorators": [],
            "name": "Class",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 114,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 111,
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 133,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 123,
            "end": 132,
            "callee": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 153,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 142,
            "end": 152,
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 150,
              "decorators": [],
              "name": "cls2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 188,
                "end": 199,
                "left": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 193,
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 199,
                  "decorators": [],
                  "name": "Class",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 203,
            "end": 229,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 207,
                "end": 228,
                "id": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 226,
                      "decorators": [],
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 232,
            "end": 250,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 236,
                "end": 249,
                "id": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 240,
                  "end": 249,
                  "callee": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 247,
                    "decorators": [],
                    "name": "cls",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 254,
            "end": 273,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 258,
                "end": 272,
                "id": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 262,
                  "end": 272,
                  "callee": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 270,
                    "decorators": [],
                    "name": "cls2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
