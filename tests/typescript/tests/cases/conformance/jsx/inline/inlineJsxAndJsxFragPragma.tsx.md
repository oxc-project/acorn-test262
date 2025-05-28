__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
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
      "end": 149,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 130,
        "end": 149,
        "id": {
          "type": "Identifier",
          "start": 139,
          "end": 140,
          "decorators": [],
          "name": "h",
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
          "start": 142,
          "end": 148,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 144,
            "end": 148
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
      "start": 150,
      "end": 178,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 157,
        "end": 178,
        "id": {
          "type": "Identifier",
          "start": 166,
          "end": 169,
          "decorators": [],
          "name": "jsx",
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
          "start": 171,
          "end": 177,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 173,
            "end": 177
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
      "start": 179,
      "end": 212,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 186,
        "end": 212,
        "id": {
          "type": "Identifier",
          "start": 195,
          "end": 203,
          "decorators": [],
          "name": "Fragment",
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
          "start": 205,
          "end": 211,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 207,
            "end": 211
          }
        },
        "body": null,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 96,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 78,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 50,
          "end": 58,
          "imported": {
            "type": "Identifier",
            "start": 50,
            "end": 58,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 58,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 77,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 95,
      "expression": {
        "type": "JSXFragment",
        "start": 79,
        "end": 95,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 79,
          "end": 81
        },
        "children": [
          {
            "type": "JSXElement",
            "start": 81,
            "end": 92,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 81,
              "end": 86,
              "name": {
                "type": "JSXIdentifier",
                "start": 82,
                "end": 85,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 86,
              "end": 92,
              "name": {
                "type": "JSXIdentifier",
                "start": 88,
                "end": 91,
                "name": "div"
              }
            }
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 92,
          "end": 95
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
  "start": 35,
  "end": 86,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 66,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 43,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 65,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 85,
      "expression": {
        "type": "JSXFragment",
        "start": 67,
        "end": 85,
        "openingFragment": {
          "type": "JSXOpeningFragment",
          "start": 67,
          "end": 69
        },
        "children": [
          {
            "type": "JSXElement",
            "start": 69,
            "end": 82,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 69,
              "end": 75,
              "name": {
                "type": "JSXIdentifier",
                "start": 70,
                "end": 74,
                "name": "span"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 75,
              "end": 82,
              "name": {
                "type": "JSXIdentifier",
                "start": 77,
                "end": 81,
                "name": "span"
              }
            }
          }
        ],
        "closingFragment": {
          "type": "JSXClosingFragment",
          "start": 82,
          "end": 85
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
  "start": 39,
  "end": 85,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 78,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 50,
          "end": 58,
          "imported": {
            "type": "Identifier",
            "start": 50,
            "end": 58,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 58,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 77,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 84,
      "expression": {
        "type": "JSXFragment",
        "start": 79,
        "end": 84,
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
  "start": 35,
  "end": 73,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 66,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 43,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 65,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 72,
      "expression": {
        "type": "JSXFragment",
        "start": 67,
        "end": 72,
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
  "start": 39,
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 75,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 55,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 74,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 81,
      "expression": {
        "type": "JSXFragment",
        "start": 76,
        "end": 81,
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
  "start": 35,
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 63,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 62,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 69,
      "expression": {
        "type": "JSXFragment",
        "start": 64,
        "end": 69,
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
  "start": 39,
  "end": 91,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 78,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 50,
          "end": 58,
          "imported": {
            "type": "Identifier",
            "start": 50,
            "end": 58,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 58,
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 77,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 90,
      "expression": {
        "type": "JSXElement",
        "start": 79,
        "end": 90,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 79,
          "end": 84,
          "name": {
            "type": "JSXIdentifier",
            "start": 80,
            "end": 83,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 84,
          "end": 90,
          "name": {
            "type": "JSXIdentifier",
            "start": 86,
            "end": 89,
            "name": "div"
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
  "start": 35,
  "end": 79,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 66,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 43,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "jsx",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 65,
        "value": "./renderer",
        "raw": "\"./renderer\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 78,
      "expression": {
        "type": "JSXElement",
        "start": 67,
        "end": 78,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 67,
          "end": 72,
          "name": {
            "type": "JSXIdentifier",
            "start": 68,
            "end": 71,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 72,
          "end": 78,
          "name": {
            "type": "JSXIdentifier",
            "start": 74,
            "end": 77,
            "name": "div"
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
  "start": 18,
  "end": 99,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 18,
      "end": 47,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 26,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "h",
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
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 66,
        "decorators": [],
        "name": "Component",
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
        "start": 69,
        "end": 85,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 71,
            "end": 83,
            "argument": {
              "type": "Literal",
              "start": 78,
              "end": 82,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 99,
      "expression": {
        "type": "JSXElement",
        "start": 86,
        "end": 99,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 86,
          "end": 99,
          "name": {
            "type": "JSXIdentifier",
            "start": 87,
            "end": 96,
            "name": "Component"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
