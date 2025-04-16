__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Outer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 38,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 36,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 36,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 35,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 35,
                    "value": 1,
                    "raw": "1"
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
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 52,
        "name": "Outer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 53,
        "end": 86,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 84,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 66,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 81,
                  "end": 82,
                  "id": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": true,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 79,
                "end": 84,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 81,
                    "end": 82,
                    "id": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "name": "X",
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
      "type": "TSModuleDeclaration",
      "start": 88,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 97,
        "end": 158,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 103,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 114,
              "end": 119,
              "name": "Outer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 125,
            "end": 139,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 138,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 133,
                  "end": 138,
                  "object": {
                    "type": "MemberExpression",
                    "start": 133,
                    "end": 136,
                    "object": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "name": "O",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 144,
            "end": 156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 155,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 152,
                  "end": 155,
                  "object": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
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
