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
        "start": 7,
        "end": 10
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
              "start": 22,
              "end": 23
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
                    "start": 26,
                    "end": 27
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 26,
                  "end": 27
                }
              ],
              "start": 24,
              "end": 29
            },
            "const": false,
            "declare": false,
            "start": 17,
            "end": 29
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
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
                          "start": 64,
                          "end": 65
                        },
                        "init": null,
                        "definite": false,
                        "start": 64,
                        "end": 65
                      }
                    ],
                    "declare": false,
                    "start": 60,
                    "end": 66
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 53,
                  "end": 66
                }
              ],
              "start": 43,
              "end": 72
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 34,
            "end": 72
          }
        ],
        "start": 11,
        "end": 74
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "One",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 86
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
              "start": 98,
              "end": 99
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
                    "start": 102,
                    "end": 103
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 102,
                  "end": 103
                }
              ],
              "start": 100,
              "end": 105
            },
            "const": false,
            "declare": false,
            "start": 93,
            "end": 105
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
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
                          "start": 140,
                          "end": 141
                        },
                        "init": null,
                        "definite": false,
                        "start": 140,
                        "end": 141
                      }
                    ],
                    "declare": false,
                    "start": 136,
                    "end": 142
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 129,
                  "end": 142
                }
              ],
              "start": 119,
              "end": 148
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 110,
            "end": 148
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
                "start": 153,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "optional": false,
              "computed": false,
              "start": 153,
              "end": 156
            },
            "directive": null,
            "start": 153,
            "end": 157
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
                "start": 162,
                "end": 163
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
              },
              "optional": false,
              "computed": false,
              "start": 162,
              "end": 165
            },
            "directive": null,
            "start": 162,
            "end": 166
          }
        ],
        "start": 87,
        "end": 168
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 76,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 168
}
```
