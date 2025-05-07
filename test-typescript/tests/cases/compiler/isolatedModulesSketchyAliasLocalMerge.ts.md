__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 28,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 14,
          "decorators": [],
          "name": "FC",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 17,
          "end": 27,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 27,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 23,
              "end": 27
            }
          },
          "typeParameters": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "raw": "\"./types\"",
        "value": "./types",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 47,
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 47,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 38,
                "end": 47,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 40,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 40,
                      "decorators": [],
                      "name": "FC",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 43,
                    "end": 47
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 50,
            "end": 54,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
  "end": 60,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "raw": "\"./types\"",
        "value": "./types",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 16,
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 16,
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 52,
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 52,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 43,
                "end": 52,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 43,
                    "end": 45,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 45,
                      "decorators": [],
                      "name": "FC",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 48,
                    "end": 52
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 55,
            "end": 59,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
