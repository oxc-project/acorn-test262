renderer.d.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 122,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 21,
            "end": 120,
            "body": {
              "type": "TSModuleBlock",
              "start": 35,
              "end": 120,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 45,
                  "end": 114,
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
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 98,
                          "end": 103,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 100,
                            "end": 103
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 72,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 151,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 130,
        "end": 151,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 139,
          "end": 142,
          "decorators": [],
          "name": "dom",
          "optional": false
        },
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
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 172,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 161,
          "end": 169,
          "exported": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 161,
            "end": 164,
            "decorators": [],
            "name": "dom",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
reacty.tsx
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 46,
        "raw": "\"./renderer\"",
        "value": "./renderer"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "dom",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 55,
      "expression": {
        "type": "JSXElement",
        "start": 48,
        "end": 55,
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 48,
          "end": 51,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 49,
            "end": 50,
            "name": "h"
          },
          "selfClosing": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
index.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 30,
        "raw": "\"./renderer\"",
        "value": "./renderer"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "p",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 39,
      "expression": {
        "type": "JSXElement",
        "start": 32,
        "end": 39,
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
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 32,
          "end": 35,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 33,
            "end": 34,
            "name": "h"
          },
          "selfClosing": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
