__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 30,
          "raw": "\"something\"",
          "value": "something"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 46,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 42,
          "end": 43,
          "exported": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 88,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "raw": "'./a'",
          "value": "./a"
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 27,
      "end": 77,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 49,
          "end": 55,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 55,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 55,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 57,
          "end": 69,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 62,
              "end": 69,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 70,
        "end": 76,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 72,
          "end": 76
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 87,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 86,
        "arguments": [
          {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 83,
            "end": 85,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
