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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 81,
                "end": 82,
                "id": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "name": "x",
                  "typeAnnotation": null,
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
          {
            "type": "TSExportAssignment",
            "start": 88,
            "end": 99,
            "expression": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 144,
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 144,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 144,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 138,
                      "end": 144
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
        "name": "imp1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "imp3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 227,
            "end": 233,
            "object": {
              "type": "Identifier",
              "start": 227,
              "end": 231,
              "name": "imp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
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
      "start": 235,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 248,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 248,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
