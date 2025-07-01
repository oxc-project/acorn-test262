__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FC",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 14
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 23,
              "end": 27
            },
            "start": 20,
            "end": 27
          },
          "start": 17,
          "end": 27
        },
        "declare": false,
        "start": 7,
        "end": 28
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "importKind": "value",
          "start": 9,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "\"./types\"",
        "start": 19,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 40
                    },
                    "typeArguments": null,
                    "start": 38,
                    "end": 40
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 43,
                    "end": 47
                  }
                ],
                "start": 38,
                "end": 47
              },
              "start": 36,
              "end": 47
            },
            "start": 34,
            "end": 47
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 50,
            "end": 54
          },
          "definite": false,
          "start": 34,
          "end": 54
        }
      ],
      "declare": false,
      "start": 30,
      "end": 55
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 16
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 16
          },
          "importKind": "value",
          "start": 14,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "\"./types\"",
        "start": 24,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "FC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 45
                    },
                    "typeArguments": null,
                    "start": 43,
                    "end": 45
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 48,
                    "end": 52
                  }
                ],
                "start": 43,
                "end": 52
              },
              "start": 41,
              "end": 52
            },
            "start": 39,
            "end": 52
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 55,
            "end": 59
          },
          "definite": false,
          "start": 39,
          "end": 59
        }
      ],
      "declare": false,
      "start": 35,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 60
}
```
