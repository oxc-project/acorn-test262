__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 251,
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
      "end": 185,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 159,
        "end": 185,
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 176,
          "name": "otherdom",
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
          "start": 178,
          "end": 184,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 180,
            "end": 184
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
      "start": 186,
      "end": 224,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 193,
        "end": 224,
        "id": {
          "type": "Identifier",
          "start": 202,
          "end": 215,
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
          "start": 217,
          "end": 223,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 219,
            "end": 223
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
      "start": 225,
      "end": 251,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 234,
          "end": 248,
          "local": {
            "type": "Identifier",
            "start": 234,
            "end": 237,
            "name": "dom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 241,
            "end": 248,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
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
  "end": 76,
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
      "end": 76,
      "expression": {
        "type": "JSXElement",
        "start": 69,
        "end": 76,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 69,
          "end": 72,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 70,
            "end": 71,
            "name": "h"
          },
          "selfClosing": false,
          "typeArguments": null
        },
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 72,
          "end": 76,
          "name": {
            "type": "JSXIdentifier",
            "start": 74,
            "end": 75,
            "name": "h"
          }
        },
        "children": []
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
  "start": 14,
  "end": 87,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 14,
      "end": 51,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 23,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "name": "dom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 51,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 87,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 87,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 65,
            "end": 86,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 76,
              "name": "prerendered",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXElement",
              "start": 79,
              "end": 86,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 79,
                "end": 82,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 80,
                  "end": 81,
                  "name": "h"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 82,
                "end": 86,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 84,
                  "end": 85,
                  "name": "h"
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
  "start": 21,
  "end": 95,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 21,
      "end": 58,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 38,
            "name": "otherdom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 38,
            "name": "otherdom",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 46,
        "end": 58,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 95,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 66,
        "end": 95,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 72,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 84,
              "name": "prerendered2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXElement",
              "start": 87,
              "end": 94,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 87,
                "end": 90,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 88,
                  "end": 89,
                  "name": "h"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 90,
                "end": 94,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 92,
                  "end": 93,
                  "name": "h"
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
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 30,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 67,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 67,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 56,
              "name": "prerendered3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXElement",
              "start": 59,
              "end": 66,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 59,
                "end": 62,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 60,
                  "end": 61,
                  "name": "h"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 62,
                "end": 66,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 64,
                  "end": 65,
                  "name": "h"
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
  "start": 16,
  "end": 140,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 16,
      "end": 48,
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
      "start": 49,
      "end": 56,
      "expression": {
        "type": "JSXElement",
        "start": 49,
        "end": 56,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 49,
          "end": 52,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 50,
            "end": 51,
            "name": "h"
          },
          "selfClosing": false,
          "typeArguments": null
        },
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 52,
          "end": 56,
          "name": {
            "type": "JSXIdentifier",
            "start": 54,
            "end": 55,
            "name": "h"
          }
        },
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExportAllDeclaration",
      "start": 57,
      "end": 81,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 80,
        "value": "./other",
        "raw": "\"./other\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 82,
      "end": 113,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 96,
        "end": 112,
        "value": "./othernoalias",
        "raw": "\"./othernoalias\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 114,
      "end": 139,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 128,
        "end": 138,
        "value": "./reacty",
        "raw": "\"./reacty\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
