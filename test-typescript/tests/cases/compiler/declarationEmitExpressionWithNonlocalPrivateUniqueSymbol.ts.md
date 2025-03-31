__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "AX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10,
        "end": 39,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 12,
            "end": 37,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 24,
                "end": 37,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 31,
                  "end": 37
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 71,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 48,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 54,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 59,
              "name": "A",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 55,
                "end": 59,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 57,
                  "end": 59,
                  "typeName": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 59,
                    "name": "AX",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 62,
              "end": 70,
              "expression": {
                "type": "Literal",
                "start": 62,
                "end": 63,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 67,
                "end": 70
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 45,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 45,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 45,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 44,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 40,
              "name": "A1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
