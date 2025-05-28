__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 122,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 21,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 35,
              "end": 120,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 45,
                  "end": 114,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 72,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 73,
                    "end": 114,
                    "body": [
                      {
                        "type": "TSIndexSignature",
                        "start": 87,
                        "end": 104,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 88,
                            "end": 97,
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 89,
                              "end": 97,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 91,
                                "end": 97
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 98,
                          "end": 103,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 100,
                            "end": 103
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
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 151,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 130,
        "end": 151,
        "id": {
          "type": "Identifier",
          "start": 139,
          "end": 142,
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 144,
          "end": 150,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 146,
            "end": 150
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 172,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 161,
          "end": 169,
          "local": {
            "type": "Identifier",
            "start": 161,
            "end": 164,
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
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
  "start": 16,
  "end": 55,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 16,
      "end": 47,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 24,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 46,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 55,
      "expression": {
        "type": "JSXElement",
        "start": 48,
        "end": 55,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 48,
          "end": 51,
          "name": {
            "type": "JSXIdentifier",
            "start": 49,
            "end": 50,
            "name": "h"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 51,
          "end": 55,
          "name": {
            "type": "JSXIdentifier",
            "start": 53,
            "end": 54,
            "name": "h"
          }
        }
      },
      "directive": null
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
  "end": 39,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 30,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 39,
      "expression": {
        "type": "JSXElement",
        "start": 32,
        "end": 39,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 32,
          "end": 35,
          "name": {
            "type": "JSXIdentifier",
            "start": 33,
            "end": 34,
            "name": "h"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 35,
          "end": 39,
          "name": {
            "type": "JSXIdentifier",
            "start": 37,
            "end": 38,
            "name": "h"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
