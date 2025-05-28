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
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 73,
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 81,
        "end": 88,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 146,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 145,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 124,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 134,
                            "decorators": [],
                            "name": "someKey",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 134,
                            "end": 142,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 136,
                              "end": 142
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
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
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 169,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 168,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 160,
              "end": 168,
              "name": {
                "type": "JSXIdentifier",
                "start": 161,
                "end": 165,
                "name": "Elem"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 206,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 205,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 184,
              "end": 205,
              "name": {
                "type": "JSXIdentifier",
                "start": 185,
                "end": 189,
                "name": "Elem"
              },
              "typeArguments": null,
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
                    "value": "ok",
                    "raw": "\"ok\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 261,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 260,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 242,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 248,
                            "decorators": [],
                            "name": "opt",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 249,
                            "end": 257,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 251,
                              "end": 257
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
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
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 297,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 296,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 277,
              "end": 284,
              "name": {
                "type": "JSXIdentifier",
                "start": 278,
                "end": 283,
                "name": "Elem2"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 284,
                "end": 288,
                "value": "text",
                "raw": "text"
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
