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
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 62
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 63,
                    "end": 65
                  },
                  "declare": false,
                  "start": 45,
                  "end": 65
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 109
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 117
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 119,
                            "end": 121
                          },
                          "start": 117,
                          "end": 121
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 112,
                        "end": 121
                      }
                    ],
                    "start": 110,
                    "end": 123
                  },
                  "declare": false,
                  "start": 74,
                  "end": 123
                }
              ],
              "start": 35,
              "end": 129
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 21,
            "end": 129
          }
        ],
        "start": 15,
        "end": 131
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 131
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 151,
                "end": 154
              },
              "start": 149,
              "end": 154
            },
            "start": 144,
            "end": 154
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 154
        }
      ],
      "declare": true,
      "start": 132,
      "end": 155
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Empty",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 175
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 189
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 199
          },
          "optional": false,
          "computed": false,
          "start": 184,
          "end": 199
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 200,
              "end": 202
            },
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 204,
              "end": 206
            }
          ],
          "start": 199,
          "end": 207
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 220
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "div",
                            "start": 241,
                            "end": 244
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false,
                          "start": 240,
                          "end": 245
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "Hello",
                            "raw": "Hello",
                            "start": 245,
                            "end": 250
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "div",
                            "start": 252,
                            "end": 255
                          },
                          "start": 250,
                          "end": 256
                        },
                        "start": 240,
                        "end": 256
                      },
                      "start": 233,
                      "end": 257
                    }
                  ],
                  "start": 223,
                  "end": 263
                },
                "expression": false,
                "start": 220,
                "end": 263
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 214,
              "end": 263
            }
          ],
          "start": 208,
          "end": 265
        },
        "abstract": false,
        "declare": false,
        "start": 164,
        "end": 265
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 157,
      "end": 265
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 289
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 291,
                                "end": 297
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 300,
                                "end": 309
                              }
                            ],
                            "start": 291,
                            "end": 309
                          },
                          "start": 289,
                          "end": 309
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 288,
                        "end": 309
                      }
                    ],
                    "start": 286,
                    "end": 311
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 314,
                    "end": 323
                  }
                ],
                "start": 286,
                "end": 323
              },
              "start": 284,
              "end": 323
            },
            "start": 281,
            "end": 323
          },
          "init": null,
          "definite": false,
          "start": 281,
          "end": 323
        }
      ],
      "declare": true,
      "start": 267,
      "end": 324
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionedSpread",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 349
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Empty",
                "start": 353,
                "end": 358
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 366
                  },
                  "start": 359,
                  "end": 367
                }
              ],
              "selfClosing": true,
              "start": 352,
              "end": 370
            },
            "children": [],
            "closingElement": null,
            "start": 352,
            "end": 370
          },
          "definite": false,
          "start": 336,
          "end": 370
        }
      ],
      "declare": false,
      "start": 332,
      "end": 371
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 371
}
```
