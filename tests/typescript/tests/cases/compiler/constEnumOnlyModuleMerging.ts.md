__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 34
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 37,
                    "end": 38
                  },
                  "definite": false,
                  "start": 33,
                  "end": 38
                }
              ],
              "declare": false,
              "start": 29,
              "end": 39
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 22,
            "end": 39
          }
        ],
        "start": 16,
        "end": 41
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 58
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 84
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 88
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 87,
                    "end": 88
                  }
                ],
                "start": 85,
                "end": 90
              },
              "const": true,
              "declare": false,
              "start": 72,
              "end": 90
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 65,
            "end": 90
          }
        ],
        "start": 59,
        "end": 92
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 43,
      "end": 92
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 105
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "Outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "importKind": "value",
            "start": 112,
            "end": 129
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 145
                    },
                    "optional": false,
                    "computed": false,
                    "start": 142,
                    "end": 145
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 147
                  },
                  "optional": false,
                  "computed": false,
                  "start": 142,
                  "end": 147
                },
                "definite": false,
                "start": 138,
                "end": 147
              }
            ],
            "declare": false,
            "start": 134,
            "end": 148
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  },
                  "optional": false,
                  "computed": false,
                  "start": 161,
                  "end": 164
                },
                "definite": false,
                "start": 157,
                "end": 164
              }
            ],
            "declare": false,
            "start": 153,
            "end": 165
          }
        ],
        "start": 106,
        "end": 167
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 94,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
