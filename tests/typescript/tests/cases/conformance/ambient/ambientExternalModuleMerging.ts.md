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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 23,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 22,
          "value": "M",
          "raw": "\"M\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 58,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 57,
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
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 71,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 70,
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
            "object": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "M",
        "raw": "\"M\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 46,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 32,
              "end": 46,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 36,
                  "end": 45,
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
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 107,
      "id": {
        "type": "Literal",
        "start": 74,
        "end": 77,
        "value": "M",
        "raw": "\"M\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 78,
        "end": 107,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 84,
            "end": 105,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 91,
              "end": 105,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 95,
                  "end": 104,
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
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
