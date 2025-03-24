__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "$",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 24,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 21,
              "end": 22,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": null,
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 28,
            "name": "$",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 28,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 17,
                    "end": 26,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 18,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 18,
                      "end": 26,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 20,
                        "end": 26
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
  "start": 29,
  "end": 93,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 29,
      "end": 53,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 37,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "$",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "$",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 52,
        "value": "./ref",
        "raw": "\"./ref\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 93,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 61,
        "end": 93,
        "id": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 73,
          "end": 93,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 79,
              "end": 91,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 82,
                  "end": 90,
                  "exprName": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "name": "$",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
