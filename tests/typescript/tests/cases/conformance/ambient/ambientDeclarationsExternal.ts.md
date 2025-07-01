__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "equ",
        "raw": "'equ'",
        "start": 65,
        "end": 70
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
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
                  "start": 81,
                  "end": 82
                },
                "init": null,
                "definite": false,
                "start": 81,
                "end": 82
              }
            ],
            "declare": false,
            "start": 77,
            "end": 83
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "start": 88,
            "end": 99
          }
        ],
        "start": 71,
        "end": 101
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 50,
      "end": 101
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "equ2",
        "raw": "'equ2'",
        "start": 118,
        "end": 124
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 138,
                      "end": 144
                    },
                    "start": 136,
                    "end": 144
                  },
                  "start": 135,
                  "end": 144
                },
                "init": null,
                "definite": false,
                "start": 135,
                "end": 144
              }
            ],
            "declare": false,
            "start": 131,
            "end": 145
          }
        ],
        "start": 125,
        "end": 147
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 103,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 50,
  "end": 251
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "imp1",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 45
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "equ",
          "raw": "'equ'",
          "start": 56,
          "end": 61
        },
        "start": 48,
        "end": 62
      },
      "importKind": "value",
      "start": 34,
      "end": 63
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "imp3",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 199
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "equ2",
          "raw": "'equ2'",
          "start": 210,
          "end": 216
        },
        "start": 202,
        "end": 217
      },
      "importKind": "value",
      "start": 188,
      "end": 218
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "imp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 231
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "optional": false,
            "computed": false,
            "start": 227,
            "end": 233
          },
          "definite": false,
          "start": 223,
          "end": 233
        }
      ],
      "declare": false,
      "start": 219,
      "end": 234
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 242,
                "end": 248
              },
              "start": 240,
              "end": 248
            },
            "start": 239,
            "end": 248
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 248
        }
      ],
      "declare": false,
      "start": 235,
      "end": 249
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 34,
  "end": 249
}
```
