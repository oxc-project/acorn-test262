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
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptySFC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 52
      },
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
                  "start": 69,
                  "end": 72
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 68,
                "end": 73
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hi",
                  "raw": "Hi",
                  "start": 73,
                  "end": 75
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 77,
                  "end": 80
                },
                "start": 75,
                "end": 81
              },
              "start": 68,
              "end": 81
            },
            "start": 61,
            "end": 81
          }
        ],
        "start": 55,
        "end": 83
      },
      "expression": false,
      "start": 34,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptySFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 103
      },
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
                  "start": 120,
                  "end": 123
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 119,
                "end": 124
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello",
                  "raw": "Hello",
                  "start": 124,
                  "end": 129
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 131,
                  "end": 134
                },
                "start": 129,
                "end": 135
              },
              "start": 119,
              "end": 135
            },
            "start": 112,
            "end": 135
          }
        ],
        "start": 106,
        "end": 137
      },
      "expression": false,
      "start": 85,
      "end": 137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 164,
                      "end": 171
                    },
                    "start": 162,
                    "end": 171
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 161,
                  "end": 171
                }
              ],
              "start": 159,
              "end": 173
            },
            "start": 157,
            "end": 173
          },
          "start": 153,
          "end": 173
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
                  "name": "h1",
                  "start": 189,
                  "end": 191
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 188,
                "end": 192
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "World",
                  "raw": "World",
                  "start": 192,
                  "end": 197
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 199,
                  "end": 201
                },
                "start": 197,
                "end": 202
              },
              "start": 188,
              "end": 202
            },
            "start": 181,
            "end": 203
          }
        ],
        "start": 175,
        "end": 205
      },
      "expression": false,
      "start": 139,
      "end": 205
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
            "name": "EmptySFCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 223
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 235
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 248
            },
            "start": 226,
            "end": 248
          },
          "definite": false,
          "start": 211,
          "end": 248
        }
      ],
      "declare": false,
      "start": 207,
      "end": 249
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
            "name": "SFC2AndEmptyComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 270
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 277
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 290
            },
            "start": 273,
            "end": 290
          },
          "definite": false,
          "start": 254,
          "end": 290
        }
      ],
      "declare": false,
      "start": 250,
      "end": 291
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 306
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptySFCComp",
                "start": 310,
                "end": 322
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 323,
                    "end": 324
                  },
                  "value": null,
                  "start": 323,
                  "end": 324
                }
              ],
              "selfClosing": true,
              "start": 309,
              "end": 327
            },
            "children": [],
            "closingElement": null,
            "start": 309,
            "end": 327
          },
          "definite": false,
          "start": 305,
          "end": 327
        }
      ],
      "declare": false,
      "start": 301,
      "end": 328
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 334
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SFC2AndEmptyComp",
                "start": 338,
                "end": 354
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 355,
                    "end": 356
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 357,
                    "end": 361
                  },
                  "start": 355,
                  "end": 361
                }
              ],
              "selfClosing": true,
              "start": 337,
              "end": 364
            },
            "children": [],
            "closingElement": null,
            "start": 337,
            "end": 364
          },
          "definite": false,
          "start": 333,
          "end": 364
        }
      ],
      "declare": false,
      "start": 329,
      "end": 365
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 371
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SFC2AndEmptyComp",
                "start": 375,
                "end": 391
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 374,
              "end": 394
            },
            "children": [],
            "closingElement": null,
            "start": 374,
            "end": 394
          },
          "definite": false,
          "start": 370,
          "end": 394
        }
      ],
      "declare": false,
      "start": 366,
      "end": 395
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 401
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SFC2AndEmptyComp",
                "start": 405,
                "end": 421
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-prop",
                    "start": 422,
                    "end": 431
                  },
                  "value": null,
                  "start": 422,
                  "end": 431
                }
              ],
              "selfClosing": true,
              "start": 404,
              "end": 434
            },
            "children": [],
            "closingElement": null,
            "start": 404,
            "end": 434
          },
          "definite": false,
          "start": 400,
          "end": 434
        }
      ],
      "declare": false,
      "start": 396,
      "end": 435
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 436
}
```
