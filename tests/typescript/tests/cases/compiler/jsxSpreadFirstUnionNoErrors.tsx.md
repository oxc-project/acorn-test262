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
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 18,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InfoProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 42
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
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 55
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hidden",
                      "raw": "\"hidden\"",
                      "start": 57,
                      "end": 65
                    },
                    "start": 57,
                    "end": 65
                  },
                  "start": 55,
                  "end": 65
                },
                "accessibility": null,
                "static": false,
                "start": 49,
                "end": 65
              }
            ],
            "start": 47,
            "end": 67
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
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 78
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "visible",
                      "raw": "\"visible\"",
                      "start": 80,
                      "end": 89
                    },
                    "start": 80,
                    "end": 89
                  },
                  "start": 78,
                  "end": 89
                },
                "accessibility": null,
                "static": false,
                "start": 72,
                "end": 90
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "content",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 98
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  },
                  "start": 98,
                  "end": 106
                },
                "accessibility": null,
                "static": false,
                "start": 91,
                "end": 106
              }
            ],
            "start": 70,
            "end": 108
          }
        ],
        "start": 45,
        "end": 108
      },
      "declare": false,
      "start": 28,
      "end": 109
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
            "name": "Info",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 121
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InfoProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 141
                    },
                    "typeArguments": null,
                    "start": 132,
                    "end": 141
                  },
                  "start": 130,
                  "end": 141
                },
                "start": 125,
                "end": 141
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 151
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 158
                  },
                  "optional": false,
                  "computed": false,
                  "start": 146,
                  "end": 158
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "hidden",
                  "raw": "\"hidden\"",
                  "start": 163,
                  "end": 171
                },
                "start": 146,
                "end": 171
              },
              "consequent": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "noscript",
                    "start": 177,
                    "end": 185
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 176,
                  "end": 188
                },
                "children": [],
                "closingElement": null,
                "start": 176,
                "end": 188
              },
              "alternate": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 194,
                    "end": 197
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 193,
                  "end": 198
                },
                "children": [
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 204
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "content",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 212
                      },
                      "optional": false,
                      "computed": false,
                      "start": 199,
                      "end": 212
                    },
                    "start": 198,
                    "end": 213
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 215,
                    "end": 218
                  },
                  "start": 213,
                  "end": 219
                },
                "start": 193,
                "end": 219
              },
              "start": 146,
              "end": 219
            },
            "id": null,
            "generator": false,
            "start": 124,
            "end": 219
          },
          "definite": false,
          "start": 117,
          "end": 219
        }
      ],
      "declare": false,
      "start": 111,
      "end": 220
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 229
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Info",
                "start": 233,
                "end": 237
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "status",
                    "start": 238,
                    "end": 244
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hidden",
                    "raw": "\"hidden\"",
                    "start": 245,
                    "end": 253
                  },
                  "start": 238,
                  "end": 253
                }
              ],
              "selfClosing": true,
              "start": 232,
              "end": 256
            },
            "children": [],
            "closingElement": null,
            "start": 232,
            "end": 256
          },
          "definite": false,
          "start": 228,
          "end": 256
        }
      ],
      "declare": false,
      "start": 222,
      "end": 257
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 265
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Info",
                "start": 269,
                "end": 273
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "status",
                    "start": 274,
                    "end": 280
                  },
                  "value": {
                    "type": "Literal",
                    "value": "visible",
                    "raw": "\"visible\"",
                    "start": 281,
                    "end": 290
                  },
                  "start": 274,
                  "end": 290
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "content",
                    "start": 291,
                    "end": 298
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello world",
                    "raw": "\"hello world\"",
                    "start": 299,
                    "end": 312
                  },
                  "start": 291,
                  "end": 312
                }
              ],
              "selfClosing": true,
              "start": 268,
              "end": 315
            },
            "children": [],
            "closingElement": null,
            "start": 268,
            "end": 315
          },
          "definite": false,
          "start": 264,
          "end": 315
        }
      ],
      "declare": false,
      "start": 258,
      "end": 316
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
            "name": "infoProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InfoProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 351
                },
                "typeArguments": null,
                "start": 342,
                "end": 351
              },
              "start": 340,
              "end": 351
            },
            "start": 331,
            "end": 351
          },
          "init": null,
          "definite": false,
          "start": 331,
          "end": 351
        }
      ],
      "declare": true,
      "start": 317,
      "end": 352
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 361
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Info",
                "start": 365,
                "end": 369
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "infoProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 383
                  },
                  "start": 370,
                  "end": 384
                }
              ],
              "selfClosing": true,
              "start": 364,
              "end": 387
            },
            "children": [],
            "closingElement": null,
            "start": 364,
            "end": 387
          },
          "definite": false,
          "start": 360,
          "end": 387
        }
      ],
      "declare": false,
      "start": 354,
      "end": 388
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 388
}
```
