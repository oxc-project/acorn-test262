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
        "decorators": [],
        "name": "alias",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 28,
          "raw": "'foo'",
          "value": "foo"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 31,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "cls",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 44,
        "end": 55,
        "left": {
          "type": "Identifier",
          "start": 44,
          "end": 49,
          "decorators": [],
          "name": "alias",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 50,
          "end": 55,
          "decorators": [],
          "name": "Class",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 90,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 64,
        "end": 90,
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 75,
          "decorators": [],
          "name": "cls2",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 78,
          "end": 89,
          "left": {
            "type": "Identifier",
            "start": 78,
            "end": 83,
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 84,
            "end": 89,
            "decorators": [],
            "name": "Class",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 100,
            "end": 117,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 104,
              "end": 115,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 104,
                "end": 109,
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 110,
                "end": 115,
                "decorators": [],
                "name": "Class",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 127,
            "end": 136,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "decorators": [],
              "name": "cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 146,
            "end": 156,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 154,
              "decorators": [],
              "name": "cls2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 159,
      "end": 279,
      "body": {
        "type": "TSModuleBlock",
        "start": 168,
        "end": 279,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 172,
            "end": 204,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 179,
              "end": 204,
              "id": {
                "type": "Identifier",
                "start": 186,
                "end": 189,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 192,
                "end": 203,
                "left": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 197,
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 203,
                  "decorators": [],
                  "name": "Class",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 215,
                  "end": 232,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 219,
                    "end": 230,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 224,
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 230,
                      "decorators": [],
                      "name": "Class",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 244,
                  "end": 253,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 251,
                    "decorators": [],
                    "name": "cls",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 266,
                  "end": 276,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 274,
                    "decorators": [],
                    "name": "cls2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
