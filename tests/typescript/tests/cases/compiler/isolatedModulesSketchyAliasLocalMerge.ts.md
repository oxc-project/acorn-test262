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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 28,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 14,
          "decorators": [],
          "name": "FC",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 17,
          "end": 27,
          "typeParameters": null,
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
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "value": "./types",
        "raw": "\"./types\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 55,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 54,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 40,
                      "decorators": [],
                      "name": "FC",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
            "value": null,
            "raw": "null"
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
  "end": 60,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
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
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 16,
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "value": "./types",
        "raw": "\"./types\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 60,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 59,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 45,
                      "decorators": [],
                      "name": "FC",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
            "value": null,
            "raw": "null"
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
