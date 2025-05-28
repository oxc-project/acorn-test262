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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 77,
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
                        "value": "styled-components",
                        "raw": "\"styled-components\""
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
            "init": null,
            "definite": false
          }
        ],
        "declare": true
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
          "decorators": [],
          "name": "InterpolationValue",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "getStyles",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
