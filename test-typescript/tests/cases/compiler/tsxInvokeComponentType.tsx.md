__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 297,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 89,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 81,
        "end": 88,
        "raw": "\"react\"",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 51,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 60,
          "end": 73,
          "imported": {
            "type": "Identifier",
            "start": 60,
            "end": 73,
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 73,
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 145,
            "decorators": [],
            "name": "Elem",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 145,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 145,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 125,
                      "end": 144,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 127,
                          "end": 142,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 134,
                            "decorators": [],
                            "name": "someKey",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 134,
                            "end": 142,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 136,
                              "end": 142
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 124,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 157,
            "decorators": [],
            "name": "bad",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 160,
            "end": 168,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 160,
              "end": 168,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 161,
                "end": 165,
                "name": "Elem"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 181,
            "decorators": [],
            "name": "good",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 184,
            "end": 205,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 184,
              "end": 205,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 190,
                  "end": 202,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 190,
                    "end": 197,
                    "name": "someKey"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 198,
                    "end": 202,
                    "raw": "\"ok\"",
                    "value": "ok",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 185,
                "end": 189,
                "name": "Elem"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 260,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 260,
            "decorators": [],
            "name": "Elem2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 260,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 260,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 242,
                  "end": 260,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 243,
                      "end": 259,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 245,
                          "end": 257,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 248,
                            "decorators": [],
                            "name": "opt",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 249,
                            "end": 257,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 251,
                              "end": 257
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 242,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null
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
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 296,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 274,
            "decorators": [],
            "name": "alsoOk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 277,
            "end": 296,
            "children": [
              {
                "type": "JSXText",
                "start": 284,
                "end": 288,
                "raw": "text",
                "value": "text"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 288,
              "end": 296,
              "name": {
                "type": "JSXIdentifier",
                "start": 290,
                "end": 295,
                "name": "Elem2"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 277,
              "end": 284,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 278,
                "end": 283,
                "name": "Elem2"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
