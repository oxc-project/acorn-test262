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
                  "value": "hello",
                  "raw": "hello",
                  "start": 73,
                  "end": 78
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 80,
                  "end": 83
                },
                "start": 78,
                "end": 84
              },
              "start": 68,
              "end": 84
            },
            "start": 61,
            "end": 85
          }
        ],
        "start": 55,
        "end": 87
      },
      "expression": false,
      "start": 34,
      "end": 87
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptySFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 107
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
                  "start": 124,
                  "end": 127
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 123,
                "end": 128
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello",
                  "raw": "Hello",
                  "start": 128,
                  "end": 133
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 135,
                  "end": 138
                },
                "start": 133,
                "end": 139
              },
              "start": 123,
              "end": 139
            },
            "start": 116,
            "end": 140
          }
        ],
        "start": 110,
        "end": 142
      },
      "expression": false,
      "start": 89,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 157
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
                    "start": 166,
                    "end": 167
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 169,
                      "end": 176
                    },
                    "start": 167,
                    "end": 176
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 166,
                  "end": 176
                }
              ],
              "start": 164,
              "end": 178
            },
            "start": 162,
            "end": 178
          },
          "start": 158,
          "end": 178
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
                  "start": 194,
                  "end": 196
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 193,
                "end": 197
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "World",
                  "raw": "World",
                  "start": 197,
                  "end": 202
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 204,
                  "end": 206
                },
                "start": 202,
                "end": 207
              },
              "start": 193,
              "end": 207
            },
            "start": 186,
            "end": 208
          }
        ],
        "start": 180,
        "end": 210
      },
      "expression": false,
      "start": 144,
      "end": 210
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
            "start": 216,
            "end": 228
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 240
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 253
            },
            "start": 231,
            "end": 253
          },
          "definite": false,
          "start": 216,
          "end": 253
        }
      ],
      "declare": false,
      "start": 212,
      "end": 254
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
            "start": 259,
            "end": 275
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 282
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 295
            },
            "start": 278,
            "end": 295
          },
          "definite": false,
          "start": 259,
          "end": 295
        }
      ],
      "declare": false,
      "start": 255,
      "end": 296
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
            "start": 302,
            "end": 303
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptySFCComp",
                "start": 307,
                "end": 319
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 306,
              "end": 322
            },
            "children": [],
            "closingElement": null,
            "start": 306,
            "end": 322
          },
          "definite": false,
          "start": 302,
          "end": 322
        }
      ],
      "declare": false,
      "start": 298,
      "end": 322
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 329
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptySFCComp",
                "start": 333,
                "end": 345
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-prop",
                    "start": 346,
                    "end": 355
                  },
                  "value": null,
                  "start": 346,
                  "end": 355
                }
              ],
              "selfClosing": true,
              "start": 332,
              "end": 358
            },
            "children": [],
            "closingElement": null,
            "start": 332,
            "end": 358
          },
          "definite": false,
          "start": 327,
          "end": 358
        }
      ],
      "declare": false,
      "start": 323,
      "end": 358
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
            "start": 363,
            "end": 364
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SFC2AndEmptyComp",
                "start": 368,
                "end": 384
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 385,
                    "end": 386
                  },
                  "value": null,
                  "start": 385,
                  "end": 386
                }
              ],
              "selfClosing": true,
              "start": 367,
              "end": 389
            },
            "children": [],
            "closingElement": null,
            "start": 367,
            "end": 389
          },
          "definite": false,
          "start": 363,
          "end": 389
        }
      ],
      "declare": false,
      "start": 359,
      "end": 389
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 389
}
```
