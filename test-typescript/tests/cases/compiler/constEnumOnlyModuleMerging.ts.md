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
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 38,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 36,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 36,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 35,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 35,
                    "raw": "1",
                    "value": 1
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
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 86,
      "body": {
        "type": "TSModuleBlock",
        "start": 53,
        "end": 86,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 84,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 66,
              "end": 84,
              "body": {
                "type": "TSEnumBody",
                "start": 79,
                "end": 84,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 81,
                    "end": 82,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
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
        "start": 47,
        "end": 52,
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 88,
      "end": 158,
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
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 114,
              "end": 119,
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 133,
                  "end": 138,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 133,
                    "end": 136,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "X",
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
            "start": 144,
            "end": 156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 155,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 152,
                  "end": 155,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "B",
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
