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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./elidingImportNames_main",
          "raw": "'./elidingImportNames_main'",
          "start": 19,
          "end": 46
        },
        "start": 11,
        "end": 47
      },
      "importKind": "value",
      "start": 0,
      "end": 48
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "definite": false,
          "start": 77,
          "end": 82
        }
      ],
      "declare": false,
      "start": 73,
      "end": 83
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                },
                "typeArguments": null,
                "start": 91,
                "end": 99
              },
              "start": 89,
              "end": 99
            },
            "start": 88,
            "end": 99
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 99
        }
      ],
      "declare": false,
      "start": 84,
      "end": 100
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 110
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./elidingImportNames_main1",
          "raw": "'./elidingImportNames_main1'",
          "start": 121,
          "end": 149
        },
        "start": 113,
        "end": 150
      },
      "importKind": "value",
      "start": 101,
      "end": 151
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 186
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 191
          },
          "definite": false,
          "start": 184,
          "end": 191
        }
      ],
      "declare": false,
      "start": 180,
      "end": 192
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 194
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
              "name": "main",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 15
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 18,
              "end": 20
            },
            "definite": false,
            "start": 11,
            "end": 20
          }
        ],
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
              "name": "main",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 15
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 18,
              "end": 20
            },
            "definite": false,
            "start": 11,
            "end": 20
          }
        ],
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
