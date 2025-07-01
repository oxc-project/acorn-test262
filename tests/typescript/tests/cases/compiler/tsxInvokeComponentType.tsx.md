__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "start": 51,
          "end": 56
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 73
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 73
          },
          "importKind": "value",
          "start": 60,
          "end": 73
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 81,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Elem",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 124
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "someKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 127,
                            "end": 134
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 136,
                              "end": 142
                            },
                            "start": 134,
                            "end": 142
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 127,
                          "end": 142
                        }
                      ],
                      "start": 125,
                      "end": 144
                    }
                  ],
                  "start": 124,
                  "end": 145
                },
                "start": 111,
                "end": 145
              },
              "start": 109,
              "end": 145
            },
            "start": 105,
            "end": 145
          },
          "init": null,
          "definite": false,
          "start": 105,
          "end": 145
        }
      ],
      "declare": true,
      "start": 91,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bad",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 157
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 161,
                "end": 165
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 160,
              "end": 168
            },
            "children": [],
            "closingElement": null,
            "start": 160,
            "end": 168
          },
          "definite": false,
          "start": 154,
          "end": 168
        }
      ],
      "declare": false,
      "start": 148,
      "end": 169
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "good",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 181
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 185,
                "end": 189
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "someKey",
                    "start": 190,
                    "end": 197
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 198,
                    "end": 202
                  },
                  "start": 190,
                  "end": 202
                }
              ],
              "selfClosing": true,
              "start": 184,
              "end": 205
            },
            "children": [],
            "closingElement": null,
            "start": 184,
            "end": 205
          },
          "definite": false,
          "start": 177,
          "end": 205
        }
      ],
      "declare": false,
      "start": 171,
      "end": 206
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Elem2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 242
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "opt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 245,
                            "end": 248
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 251,
                              "end": 257
                            },
                            "start": 249,
                            "end": 257
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 245,
                          "end": 257
                        }
                      ],
                      "start": 243,
                      "end": 259
                    }
                  ],
                  "start": 242,
                  "end": 260
                },
                "start": 229,
                "end": 260
              },
              "start": 227,
              "end": 260
            },
            "start": 222,
            "end": 260
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 260
        }
      ],
      "declare": true,
      "start": 208,
      "end": 261
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "alsoOk",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 274
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem2",
                "start": 278,
                "end": 283
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 277,
              "end": 284
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 284,
                "end": 288
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem2",
                "start": 290,
                "end": 295
              },
              "start": 288,
              "end": 296
            },
            "start": 277,
            "end": 296
          },
          "definite": false,
          "start": 268,
          "end": 296
        }
      ],
      "declare": false,
      "start": 262,
      "end": 297
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 297
}
```
