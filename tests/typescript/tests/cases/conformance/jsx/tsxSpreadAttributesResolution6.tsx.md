__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 48
      },
      "typeParameters": null,
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
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 61
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 63,
                      "end": 68
                    },
                    "start": 63,
                    "end": 68
                  },
                  "start": 61,
                  "end": 68
                },
                "accessibility": null,
                "static": false,
                "start": 53,
                "end": 68
              }
            ],
            "start": 51,
            "end": 70
          },
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
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 98
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 100,
                      "end": 104
                    },
                    "start": 100,
                    "end": 104
                  },
                  "start": 98,
                  "end": 104
                },
                "accessibility": null,
                "static": false,
                "start": 90,
                "end": 105
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 112
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newText",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 124,
                            "end": 130
                          },
                          "start": 122,
                          "end": 130
                        },
                        "start": 115,
                        "end": 130
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 135,
                        "end": 139
                      },
                      "start": 132,
                      "end": 139
                    },
                    "start": 114,
                    "end": 139
                  },
                  "start": 112,
                  "end": 139
                },
                "accessibility": null,
                "static": false,
                "start": 106,
                "end": 139
              }
            ],
            "start": 88,
            "end": 141
          }
        ],
        "start": 51,
        "end": 141
      },
      "declare": false,
      "start": 34,
      "end": 142
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 163
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
          "start": 172,
          "end": 177
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 187
        },
        "optional": false,
        "computed": false,
        "start": 172,
        "end": 187
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TextProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 197
            },
            "typeArguments": null,
            "start": 188,
            "end": 197
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 199,
            "end": 201
          }
        ],
        "start": 187,
        "end": 202
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
              "start": 209,
              "end": 215
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
                          "name": "span",
                          "start": 236,
                          "end": 240
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 235,
                        "end": 241
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Some Text..",
                          "raw": "Some Text..",
                          "start": 241,
                          "end": 252
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "span",
                          "start": 254,
                          "end": 258
                        },
                        "start": 252,
                        "end": 259
                      },
                      "start": 235,
                      "end": 259
                    },
                    "start": 228,
                    "end": 260
                  }
                ],
                "start": 218,
                "end": 266
              },
              "expression": false,
              "start": 215,
              "end": 266
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 209,
            "end": 266
          }
        ],
        "start": 203,
        "end": 268
      },
      "abstract": false,
      "declare": false,
      "start": 144,
      "end": 268
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 284
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TextComponent",
                "start": 288,
                "end": 301
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "editable",
                    "start": 302,
                    "end": 310
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 312,
                      "end": 316
                    },
                    "start": 311,
                    "end": 317
                  },
                  "start": 302,
                  "end": 317
                }
              ],
              "selfClosing": true,
              "start": 287,
              "end": 320
            },
            "children": [],
            "closingElement": null,
            "start": 287,
            "end": 320
          },
          "definite": false,
          "start": 283,
          "end": 320
        }
      ],
      "declare": false,
      "start": 279,
      "end": 320
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
            "name": "textProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TextProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 348
                },
                "typeArguments": null,
                "start": 339,
                "end": 348
              },
              "start": 337,
              "end": 348
            },
            "start": 328,
            "end": 348
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 357,
                  "end": 365
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 367,
                  "end": 372
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 357,
                "end": 372
              }
            ],
            "start": 351,
            "end": 374
          },
          "definite": false,
          "start": 328,
          "end": 374
        }
      ],
      "declare": false,
      "start": 322,
      "end": 375
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 375
}
```
