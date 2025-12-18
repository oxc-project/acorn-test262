__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "texts",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 20,
                    "end": 26
                  },
                  "start": 20,
                  "end": 28
                },
                "start": 18,
                "end": 28
              },
              "start": 13,
              "end": 28
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 31,
              "end": 33
            },
            "definite": false,
            "start": 13,
            "end": 33
          }
        ],
        "declare": false,
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "texts",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 60
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 65
          },
          "optional": false,
          "computed": false,
          "start": 55,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 66,
            "end": 69
          }
        ],
        "optional": false,
        "start": 55,
        "end": 70
      },
      "directive": null,
      "start": 55,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "texts",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 103
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 108
          },
          "optional": false,
          "computed": false,
          "start": 98,
          "end": 108
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 109,
            "end": 112
          }
        ],
        "optional": false,
        "start": 98,
        "end": 113
      },
      "directive": null,
      "start": 98,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "texts",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 146
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 151
          },
          "optional": false,
          "computed": false,
          "start": 141,
          "end": 151
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "100",
            "raw": "\"100\"",
            "start": 152,
            "end": 157
          }
        ],
        "optional": false,
        "start": 141,
        "end": 158
      },
      "directive": null,
      "start": 141,
      "end": 159
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "texts",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "texts",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "texts",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "texts",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"100\"",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 17
          },
          "start": 7,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 23,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 60
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 73
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 75,
                        "end": 81
                      },
                      "start": 73,
                      "end": 81
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 70,
                    "end": 81
                  }
                ],
                "start": 68,
                "end": 83
              },
              "start": 66,
              "end": 83
            },
            "start": 61,
            "end": 83
          }
        ],
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
                    "start": 97,
                    "end": 100
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 96,
                  "end": 103
                },
                "children": [],
                "closingElement": null,
                "start": 96,
                "end": 103
              },
              "start": 89,
              "end": 104
            }
          ],
          "start": 85,
          "end": 106
        },
        "expression": false,
        "start": 40,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 106
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
            "start": 112,
            "end": 113
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 121,
                "end": 124
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 120,
              "end": 125
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 125,
                "end": 130
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 131,
                  "end": 150
                },
                "start": 130,
                "end": 151
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 151,
                "end": 156
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 157,
                    "end": 168
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 169,
                        "end": 172
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 174,
                          "end": 177
                        },
                        "start": 173,
                        "end": 178
                      },
                      "start": 169,
                      "end": 178
                    }
                  ],
                  "selfClosing": true,
                  "start": 156,
                  "end": 181
                },
                "children": [],
                "closingElement": null,
                "start": 156,
                "end": 181
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 181,
                "end": 187
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 188,
                  "end": 202
                },
                "start": 187,
                "end": 203
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 203,
                "end": 208
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 209,
                    "end": 220
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 221,
                        "end": 224
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 226,
                          "end": 229
                        },
                        "start": 225,
                        "end": 230
                      },
                      "start": 221,
                      "end": 230
                    }
                  ],
                  "selfClosing": true,
                  "start": 208,
                  "end": 233
                },
                "children": [],
                "closingElement": null,
                "start": 208,
                "end": 233
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 233,
                "end": 239
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 240,
                  "end": 265
                },
                "start": 239,
                "end": 266
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 266,
                "end": 271
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 272,
                    "end": 283
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 284,
                        "end": 287
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 289,
                          "end": 292
                        },
                        "start": 288,
                        "end": 293
                      },
                      "start": 284,
                      "end": 293
                    }
                  ],
                  "selfClosing": true,
                  "start": 271,
                  "end": 296
                },
                "children": [],
                "closingElement": null,
                "start": 271,
                "end": 296
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 296,
                "end": 302
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 303,
                  "end": 331
                },
                "start": 302,
                "end": 332
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 332,
                "end": 337
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 338,
                    "end": 349
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 350,
                        "end": 353
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 355,
                          "end": 358
                        },
                        "start": 354,
                        "end": 359
                      },
                      "start": 350,
                      "end": 359
                    }
                  ],
                  "selfClosing": true,
                  "start": 337,
                  "end": 362
                },
                "children": [],
                "closingElement": null,
                "start": 337,
                "end": 362
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 362,
                "end": 368
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 369,
                  "end": 396
                },
                "start": 368,
                "end": 397
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 397,
                "end": 402
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 403,
                    "end": 414
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 415,
                        "end": 418
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 420,
                          "end": 423
                        },
                        "start": 419,
                        "end": 424
                      },
                      "start": 415,
                      "end": 424
                    }
                  ],
                  "selfClosing": true,
                  "start": 402,
                  "end": 427
                },
                "children": [],
                "closingElement": null,
                "start": 402,
                "end": 427
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 427,
                "end": 433
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 434,
                  "end": 454
                },
                "start": 433,
                "end": 455
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 455,
                "end": 460
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 461,
                    "end": 472
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 473,
                        "end": 476
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 478,
                          "end": 481
                        },
                        "start": 477,
                        "end": 482
                      },
                      "start": 473,
                      "end": 482
                    }
                  ],
                  "selfClosing": true,
                  "start": 460,
                  "end": 485
                },
                "children": [],
                "closingElement": null,
                "start": 460,
                "end": 485
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 485,
                "end": 491
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 492,
                  "end": 517
                },
                "start": 491,
                "end": 518
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 518,
                "end": 523
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 524,
                    "end": 535
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 536,
                        "end": 539
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": "hooray",
                          "raw": "\"hooray\"",
                          "start": 541,
                          "end": 549
                        },
                        "start": 540,
                        "end": 550
                      },
                      "start": 536,
                      "end": 550
                    }
                  ],
                  "selfClosing": true,
                  "start": 523,
                  "end": 553
                },
                "children": [],
                "closingElement": null,
                "start": 523,
                "end": 553
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 553,
                "end": 556
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 558,
                "end": 561
              },
              "start": 556,
              "end": 562
            },
            "start": 120,
            "end": 562
          },
          "definite": false,
          "start": 112,
          "end": 564
        }
      ],
      "declare": false,
      "start": 108,
      "end": 565
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 565
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
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 49,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
    "end": 125
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 157,
    "end": 168
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 209,
    "end": 220
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 266,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 272,
    "end": 283
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 338,
    "end": 349
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 402,
    "end": 403
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 403,
    "end": 414
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 461,
    "end": 472
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 484,
    "end": 485
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 523,
    "end": 524
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 524,
    "end": 535
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "String",
    "value": "\"hooray\"",
    "start": 541,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 557,
    "end": 558
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  }
]
```
