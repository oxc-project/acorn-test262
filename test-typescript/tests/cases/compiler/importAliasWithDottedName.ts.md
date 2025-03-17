__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 32,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 32,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 31,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 31,
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 86,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 44,
              "end": 86,
              "id": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "name": "N",
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
                    "start": 63,
                    "end": 80,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 70,
                      "end": 80,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 74,
                          "end": 79,
                          "id": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 75,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 78,
                            "end": 79,
                            "value": 2,
                            "raw": "2"
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
      "start": 90,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 99,
        "end": 159,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 105,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 116,
              "end": 119,
              "left": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 125,
            "end": 137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 136,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 133,
                  "end": 136,
                  "object": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "name": "y",
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
            "start": 142,
            "end": 157,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 146,
                "end": 156,
                "id": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 148,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 151,
                  "end": 156,
                  "object": {
                    "type": "MemberExpression",
                    "start": 151,
                    "end": 154,
                    "object": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "name": "N",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "name": "y",
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
