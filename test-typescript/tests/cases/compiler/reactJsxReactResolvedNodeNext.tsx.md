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
      "end": 29,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXElement",
              "start": 17,
              "end": 28,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 17,
                "end": 22,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 18,
                  "end": 21,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 22,
                "end": 28,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 24,
                  "end": 27,
                  "name": "div"
                }
              },
              "children": []
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
  "end": 79,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 79,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 55,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 56,
              "end": 77,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 58,
                  "end": 75,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 59,
                      "end": 68,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 60,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 62,
                          "end": 68
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 71,
                      "end": 74
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
  "end": 12,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "value": "./",
        "raw": "'./'"
      },
      "attributes": [],
      "importKind": "value"
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
  "end": 13,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 12,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "value": "./",
        "raw": "'./'"
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
