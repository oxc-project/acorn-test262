__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 298,
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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "ComponentType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 60,
            "end": 73,
            "name": "ComponentType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 145,
            "name": "Elem",
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
                  "name": "ComponentType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "someKey",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 157,
            "name": "bad",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 160,
            "end": 168,
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 181,
            "name": "good",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 184,
            "end": 205,
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
                    "value": "ok",
                    "raw": "\"ok\""
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 260,
            "name": "Elem2",
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
                  "name": "ComponentType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                            "name": "opt",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 274,
            "name": "alsoOk",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 277,
            "end": 296,
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
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 284,
                "end": 288,
                "value": "text",
                "raw": "text"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
