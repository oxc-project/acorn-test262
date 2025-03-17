__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "IntrinsicElements",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                            "name": "e",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 89,
                              "end": 97,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 91,
                                "end": 97
                              }
                            },
                            "decorators": [],
                            "optional": false
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
          "name": "dom",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 190,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 159,
        "end": 190,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 181,
          "name": "createElement",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 183,
          "end": 189,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 185,
            "end": 189
          }
        }
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
  "start": 32,
  "end": 81,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 68,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 39,
          "end": 49,
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 55,
        "end": 67,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 81,
      "expression": {
        "type": "JSXFragment",
        "start": 69,
        "end": 81,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 69,
          "end": 71
        },
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 78,
          "end": 81
        },
        "children": [
          {
            "type": "JSXElement",
            "start": 71,
            "end": 78,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 71,
              "end": 74,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 72,
                "end": 73,
                "name": "h"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 74,
              "end": 78,
              "name": {
                "type": "JSXIdentifier",
                "start": 76,
                "end": 77,
                "name": "h"
              }
            },
            "children": []
          }
        ]
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
  "start": 16,
  "end": 62,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 16,
      "end": 49,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 25,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "dom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "dom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 48,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 62,
      "expression": {
        "type": "JSXFragment",
        "start": 50,
        "end": 62,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 50,
          "end": 52
        },
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 59,
          "end": 62
        },
        "children": [
          {
            "type": "JSXElement",
            "start": 52,
            "end": 59,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 52,
              "end": 55,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 53,
                "end": 54,
                "name": "h"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 55,
              "end": 59,
              "name": {
                "type": "JSXIdentifier",
                "start": 57,
                "end": 58,
                "name": "h"
              }
            },
            "children": []
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
