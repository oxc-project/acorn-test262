__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "InfoProps",
    "start": 33,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"hidden\"",
    "start": 57,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"visible\"",
    "start": 80,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Info",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "InfoProps",
    "start": 132,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 143,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 159,
    "end": 162
  },
  {
    "type": "String",
    "value": "\"hidden\"",
    "start": 163,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "JSXIdentifier",
    "value": "noscript",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 193,
    "end": 194
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 199,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205
  },
  {
    "type": "JSXIdentifier",
    "value": "content",
    "start": 205,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 214,
    "end": 215
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "JSXIdentifier",
    "value": "Info",
    "start": 233,
    "end": 237
  },
  {
    "type": "JSXIdentifier",
    "value": "status",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "JSXText",
    "value": "\"hidden\"",
    "start": 245,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 258,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269
  },
  {
    "type": "JSXIdentifier",
    "value": "Info",
    "start": 269,
    "end": 273
  },
  {
    "type": "JSXIdentifier",
    "value": "status",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "JSXText",
    "value": "\"visible\"",
    "start": 281,
    "end": 290
  },
  {
    "type": "JSXIdentifier",
    "value": "content",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "JSXText",
    "value": "\"hello world\"",
    "start": 299,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 317,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 325,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "infoProps",
    "start": 331,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "InfoProps",
    "start": 342,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 354,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365
  },
  {
    "type": "JSXIdentifier",
    "value": "Info",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 371,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "infoProps",
    "start": 374,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  }
]
```
