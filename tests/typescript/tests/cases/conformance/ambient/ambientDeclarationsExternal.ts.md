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
      "id": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "value": "equ",
        "raw": "'equ'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 77,
            "end": 83,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 81,
                "end": 82,
                "id": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 103,
      "end": 147,
      "id": {
        "type": "Literal",
        "start": 118,
        "end": 124,
        "value": "equ2",
        "raw": "'equ2'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 125,
        "end": 147,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 145,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 144,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 249,
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 48,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 56,
          "end": 61,
          "value": "equ",
          "raw": "'equ'"
        }
      },
      "importKind": "value"
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 202,
        "end": 217,
        "expression": {
          "type": "Literal",
          "start": 210,
          "end": 216,
          "value": "equ2",
          "raw": "'equ2'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 234,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 233,
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
            "object": {
              "type": "Identifier",
              "start": 227,
              "end": 231,
              "decorators": [],
              "name": "imp3",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
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
      "start": 235,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 248,
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
          "init": null,
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
