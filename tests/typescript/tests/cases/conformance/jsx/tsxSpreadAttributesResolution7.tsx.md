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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "textPropsFalse",
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
                  "start": 298,
                  "end": 307
                },
                "typeArguments": null,
                "start": 298,
                "end": 307
              },
              "start": 296,
              "end": 307
            },
            "start": 282,
            "end": 307
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
                  "start": 316,
                  "end": 324
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 326,
                  "end": 331
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 316,
                "end": 331
              }
            ],
            "start": 310,
            "end": 333
          },
          "definite": false,
          "start": 282,
          "end": 333
        }
      ],
      "declare": false,
      "start": 276,
      "end": 334
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 342
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TextComponent",
                "start": 346,
                "end": 359
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "textPropsFalse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 378
                  },
                  "start": 360,
                  "end": 379
                }
              ],
              "selfClosing": true,
              "start": 345,
              "end": 382
            },
            "children": [],
            "closingElement": null,
            "start": 345,
            "end": 382
          },
          "definite": false,
          "start": 340,
          "end": 382
        }
      ],
      "declare": false,
      "start": 336,
      "end": 382
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
            "name": "textPropsTrue",
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
                  "start": 405,
                  "end": 414
                },
                "typeArguments": null,
                "start": 405,
                "end": 414
              },
              "start": 403,
              "end": 414
            },
            "start": 390,
            "end": 414
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
                  "start": 423,
                  "end": 431
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 433,
                  "end": 437
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 423,
                "end": 437
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 449
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 457,
                    "end": 459
                  },
                  "id": null,
                  "generator": false,
                  "start": 451,
                  "end": 459
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 443,
                "end": 459
              }
            ],
            "start": 417,
            "end": 461
          },
          "definite": false,
          "start": 390,
          "end": 461
        }
      ],
      "declare": false,
      "start": 384,
      "end": 462
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 470
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TextComponent",
                "start": 474,
                "end": 487
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "textPropsTrue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 505
                  },
                  "start": 488,
                  "end": 506
                }
              ],
              "selfClosing": true,
              "start": 473,
              "end": 509
            },
            "children": [],
            "closingElement": null,
            "start": 473,
            "end": 509
          },
          "definite": false,
          "start": 468,
          "end": 509
        }
      ],
      "declare": false,
      "start": 464,
      "end": 509
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 509
}
```
