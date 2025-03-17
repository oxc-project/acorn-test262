__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 251,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 50,
      "end": 101,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 77,
            "end": 83,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 81,
                "end": 82,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSExportAssignment",
            "start": 88,
            "end": 99,
            "expression": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "raw": "'equ'",
        "value": "equ"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 103,
      "end": 147,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 125,
        "end": 147,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 145,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 144,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 144,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 144,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 138,
                      "end": 144
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 118,
        "end": 124,
        "raw": "'equ2'",
        "value": "equ2"
      }
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
  "start": 34,
  "end": 250,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 34,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 45,
        "decorators": [],
        "name": "imp1",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 48,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 56,
          "end": 61,
          "raw": "'equ'",
          "value": "equ"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 188,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 199,
        "decorators": [],
        "name": "imp3",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 202,
        "end": 217,
        "expression": {
          "type": "Literal",
          "start": 210,
          "end": 216,
          "raw": "'equ2'",
          "value": "equ2"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 227,
            "end": 233,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 227,
              "end": 231,
              "decorators": [],
              "name": "imp3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
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
      "start": 235,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 248,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              }
            }
          },
          "init": null
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
