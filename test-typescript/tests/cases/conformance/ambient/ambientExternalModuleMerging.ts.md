__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 23,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 22,
          "raw": "\"M\"",
          "value": "M",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 54,
            "end": 57,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 67,
            "end": 70,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 32,
              "end": 46,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 36,
                  "end": 45,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 45,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 39,
                        "end": 45
                      }
                    }
                  },
                  "init": null
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"M\"",
        "value": "M",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 107,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 78,
        "end": 107,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 84,
            "end": 105,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 91,
              "end": 105,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 95,
                  "end": 104,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 104,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 98,
                        "end": 104
                      }
                    }
                  },
                  "init": null
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 74,
        "end": 77,
        "raw": "\"M\"",
        "value": "M",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
