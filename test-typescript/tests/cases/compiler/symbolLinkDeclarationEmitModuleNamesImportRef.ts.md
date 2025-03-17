__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 78,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 78,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 77,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 77,
              "decorators": [],
              "name": "styles",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 29,
                  "end": 77,
                  "elementType": {
                    "type": "TSImportType",
                    "start": 29,
                    "end": 75,
                    "argument": {
                      "type": "TSLiteralType",
                      "start": 36,
                      "end": 55,
                      "literal": {
                        "type": "Literal",
                        "start": 36,
                        "end": 55,
                        "raw": "\"styled-components\"",
                        "value": "styled-components"
                      }
                    },
                    "options": null,
                    "qualifier": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 75,
                      "decorators": [],
                      "name": "InterpolationValue",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
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
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 38,
        "body": {
          "type": "TSInterfaceBody",
          "start": 36,
          "end": 38,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 35,
          "decorators": [],
          "name": "InterpolationValue",
          "optional": false,
          "typeAnnotation": null
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
  "end": 85,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 34,
        "raw": "\"package-a\"",
        "value": "package-a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 84,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 44,
        "end": 84,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 65,
          "end": 84,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 68,
              "end": 82,
              "argument": {
                "type": "Identifier",
                "start": 75,
                "end": 81,
                "decorators": [],
                "name": "styles",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 62,
          "decorators": [],
          "name": "getStyles",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
