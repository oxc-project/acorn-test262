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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                    "start": 29,
                    "end": 30
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 33,
                    "end": 34
                  },
                  "definite": false,
                  "start": 29,
                  "end": 34
                }
              ],
              "declare": false,
              "start": 25,
              "end": 35
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 35
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 58
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
                            "start": 80,
                            "end": 81
                          },
                          "init": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 84,
                            "end": 85
                          },
                          "definite": false,
                          "start": 80,
                          "end": 85
                        }
                      ],
                      "declare": false,
                      "start": 76,
                      "end": 86
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 69,
                    "end": 86
                  }
                ],
                "start": 59,
                "end": 92
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 47,
              "end": 92
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 40,
            "end": 92
          }
        ],
        "start": 12,
        "end": 94
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 107
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 126
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "start": 125,
              "end": 128
            },
            "importKind": "value",
            "start": 114,
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 143
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                "definite": false,
                "start": 138,
                "end": 145
              }
            ],
            "declare": false,
            "start": 134,
            "end": 146
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 157
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 161
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 163
                    },
                    "optional": false,
                    "computed": false,
                    "start": 160,
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
                  "start": 160,
                  "end": 165
                },
                "definite": false,
                "start": 155,
                "end": 165
              }
            ],
            "declare": false,
            "start": 151,
            "end": 166
          }
        ],
        "start": 108,
        "end": 168
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 96,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 168
}
```
