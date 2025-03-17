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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 78,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 77,
              "name": "styles",
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
                        "value": "styled-components",
                        "raw": "\"styled-components\""
                      }
                    },
                    "options": null,
                    "qualifier": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 75,
                      "name": "InterpolationValue",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
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
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 38,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 35,
          "name": "InterpolationValue",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 36,
          "end": 38,
          "body": []
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
  "end": 85,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "styles",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "name": "styles",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 34,
        "value": "package-a",
        "raw": "\"package-a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 84,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 44,
        "end": 84,
        "id": {
          "type": "Identifier",
          "start": 53,
          "end": 62,
          "name": "getStyles",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "name": "styles",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
