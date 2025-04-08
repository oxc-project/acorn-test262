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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 54,
            "end": 57,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 67,
            "end": 70,
            "object": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 36,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 45,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 39,
                        "end": 45
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 95,
                  "end": 104,
                  "id": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 104,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 98,
                        "end": 104
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
