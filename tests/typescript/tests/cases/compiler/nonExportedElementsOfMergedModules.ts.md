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
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
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
                    "start": 29,
                    "end": 30
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 29,
                  "end": 30
                }
              ],
              "start": 27,
              "end": 32
            },
            "const": false,
            "declare": false,
            "start": 20,
            "end": 32
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
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
                          "start": 70,
                          "end": 71
                        },
                        "init": null,
                        "definite": false,
                        "start": 70,
                        "end": 71
                      }
                    ],
                    "declare": false,
                    "start": 66,
                    "end": 72
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 59,
                  "end": 72
                }
              ],
              "start": 49,
              "end": 78
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 37,
            "end": 78
          }
        ],
        "start": 14,
        "end": 80
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 80
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 95
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 112
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 111,
                  "end": 112
                }
              ],
              "start": 109,
              "end": 114
            },
            "const": false,
            "declare": false,
            "start": 102,
            "end": 114
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 153
                        },
                        "init": null,
                        "definite": false,
                        "start": 152,
                        "end": 153
                      }
                    ],
                    "declare": false,
                    "start": 148,
                    "end": 154
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 141,
                  "end": 154
                }
              ],
              "start": 131,
              "end": 160
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 119,
            "end": 160
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 168
              },
              "optional": false,
              "computed": false,
              "start": 165,
              "end": 168
            },
            "directive": null,
            "start": 165,
            "end": 169
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 174,
              "end": 177
            },
            "directive": null,
            "start": 174,
            "end": 178
          }
        ],
        "start": 96,
        "end": 180
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 82,
      "end": 180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 180
}
```
