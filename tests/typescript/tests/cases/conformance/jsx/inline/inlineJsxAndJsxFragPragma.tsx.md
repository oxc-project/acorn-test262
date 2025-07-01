__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 72
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 91,
                                "end": 97
                              },
                              "start": 89,
                              "end": 97
                            },
                            "start": 88,
                            "end": 97
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 100,
                            "end": 103
                          },
                          "start": 98,
                          "end": 103
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 87,
                        "end": 104
                      }
                    ],
                    "start": 73,
                    "end": 114
                  },
                  "declare": false,
                  "start": 45,
                  "end": 114
                }
              ],
              "start": 35,
              "end": 120
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 21,
            "end": 120
          }
        ],
        "start": 15,
        "end": 122
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 122
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 140
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 144,
            "end": 148
          },
          "start": 142,
          "end": 148
        },
        "body": null,
        "expression": false,
        "start": 130,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 123,
      "end": 149
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsx",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 169
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 173,
            "end": 177
          },
          "start": 171,
          "end": 177
        },
        "body": null,
        "expression": false,
        "start": 157,
        "end": 178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 178
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Fragment",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 203
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 207,
            "end": 211
          },
          "start": 205,
          "end": 211
        },
        "body": null,
        "expression": false,
        "start": 186,
        "end": 212
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 179,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 213
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 47,
          "end": 48
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "importKind": "value",
          "start": 50,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 65,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 79,
          "end": 81
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 82,
                "end": 85
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 81,
              "end": 86
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 88,
                "end": 91
              },
              "start": 86,
              "end": 92
            },
            "start": 81,
            "end": 92
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 92,
          "end": 95
        },
        "start": 79,
        "end": 95
      },
      "directive": null,
      "start": 79,
      "end": 95
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 96
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
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "importKind": "value",
          "start": 43,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 67,
          "end": 69
        },
        "children": [
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 70,
                "end": 74
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 69,
              "end": 75
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "span",
                "start": 77,
                "end": 81
              },
              "start": 75,
              "end": 82
            },
            "start": 69,
            "end": 82
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 82,
          "end": 85
        },
        "start": 67,
        "end": 85
      },
      "directive": null,
      "start": 67,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 86
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 47,
          "end": 48
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "importKind": "value",
          "start": 50,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 65,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 79,
          "end": 81
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 81,
          "end": 84
        },
        "start": 79,
        "end": 84
      },
      "directive": null,
      "start": 79,
      "end": 84
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 85
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
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "importKind": "value",
          "start": 43,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 67,
          "end": 69
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 69,
          "end": 72
        },
        "start": 67,
        "end": 72
      },
      "directive": null,
      "start": 67,
      "end": 72
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 73
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
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 55
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 55
          },
          "importKind": "value",
          "start": 47,
          "end": 55
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 62,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 75
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 76,
          "end": 78
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 78,
          "end": 81
        },
        "start": 76,
        "end": 81
      },
      "directive": null,
      "start": 76,
      "end": 81
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 82
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 50,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXFragment",
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 64,
          "end": 66
        },
        "children": [],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 66,
          "end": 69
        },
        "start": 64,
        "end": 69
      },
      "directive": null,
      "start": 64,
      "end": 69
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 70
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 47,
          "end": 48
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "importKind": "value",
          "start": 50,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 65,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 80,
            "end": 83
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 79,
          "end": 84
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 86,
            "end": 89
          },
          "start": 84,
          "end": 90
        },
        "start": 79,
        "end": 90
      },
      "directive": null,
      "start": 79,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 91
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
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "importKind": "value",
          "start": 43,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 68,
            "end": 71
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 67,
          "end": 72
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 74,
            "end": 77
          },
          "start": 72,
          "end": 78
        },
        "start": 67,
        "end": 78
      },
      "directive": null,
      "start": 67,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 79
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "importKind": "value",
          "start": 26,
          "end": 27
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 34,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 18,
      "end": 47
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 78,
              "end": 82
            },
            "start": 71,
            "end": 83
          }
        ],
        "start": 69,
        "end": 85
      },
      "expression": false,
      "start": 48,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Component",
            "start": 87,
            "end": 96
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 86,
          "end": 99
        },
        "children": [],
        "closingElement": null,
        "start": 86,
        "end": 99
      },
      "directive": null,
      "start": 86,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 18,
  "end": 99
}
```
