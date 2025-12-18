__ESTREE_TEST__:AST:
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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 54
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 65,
                  "end": 66
                },
                "start": 65,
                "end": 66
              },
              "start": 63,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 66
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 75,
                "end": 82
              },
              "start": 73,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 71,
            "end": 82
          }
        ],
        "start": 55,
        "end": 84
      },
      "declare": false,
      "start": 34,
      "end": 84
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 95
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
          "start": 104,
          "end": 109
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 119
        },
        "optional": false,
        "computed": false,
        "start": 104,
        "end": 119
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OptionProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 130
            },
            "typeArguments": null,
            "start": 120,
            "end": 130
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 132,
            "end": 134
          }
        ],
        "start": 119,
        "end": 135
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
              "start": 142,
              "end": 148
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
                          "start": 169,
                          "end": 172
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 168,
                        "end": 173
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 173,
                          "end": 178
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 180,
                          "end": 183
                        },
                        "start": 178,
                        "end": 184
                      },
                      "start": 168,
                      "end": 184
                    },
                    "start": 161,
                    "end": 185
                  }
                ],
                "start": 151,
                "end": 191
              },
              "expression": false,
              "start": 148,
              "end": 191
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 142,
            "end": 191
          }
        ],
        "start": 136,
        "end": 193
      },
      "abstract": false,
      "declare": false,
      "start": 86,
      "end": 193
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 216
                },
                "typeArguments": null,
                "start": 206,
                "end": 216
              },
              "start": 204,
              "end": 216
            },
            "start": 201,
            "end": 216
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 219,
            "end": 221
          },
          "definite": false,
          "start": 201,
          "end": 221
        }
      ],
      "declare": false,
      "start": 195,
      "end": 222
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 245
                },
                "typeArguments": null,
                "start": 235,
                "end": 245
              },
              "start": 233,
              "end": 245
            },
            "start": 229,
            "end": 245
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 255
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 257,
                  "end": 258
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 254,
                "end": 258
              }
            ],
            "start": 248,
            "end": 260
          },
          "definite": false,
          "start": 229,
          "end": 260
        }
      ],
      "declare": false,
      "start": 223,
      "end": 260
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 273
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 277,
                "end": 280
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 276,
              "end": 283
            },
            "children": [],
            "closingElement": null,
            "start": 276,
            "end": 283
          },
          "definite": false,
          "start": 272,
          "end": 283
        }
      ],
      "declare": false,
      "start": 268,
      "end": 284
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 290
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 294,
                "end": 297
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
                    "start": 302,
                    "end": 305
                  },
                  "start": 298,
                  "end": 306
                }
              ],
              "selfClosing": true,
              "start": 293,
              "end": 309
            },
            "children": [],
            "closingElement": null,
            "start": 293,
            "end": 309
          },
          "definite": false,
          "start": 289,
          "end": 309
        }
      ],
      "declare": false,
      "start": 285,
      "end": 310
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
            "start": 315,
            "end": 317
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 321,
                "end": 324
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 333
                  },
                  "start": 325,
                  "end": 334
                }
              ],
              "selfClosing": true,
              "start": 320,
              "end": 337
            },
            "children": [],
            "closingElement": null,
            "start": 320,
            "end": 337
          },
          "definite": false,
          "start": 315,
          "end": 337
        }
      ],
      "declare": false,
      "start": 311,
      "end": 338
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
            "start": 343,
            "end": 345
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 349,
                "end": 352
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 361
                  },
                  "start": 353,
                  "end": 362
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "start": 363,
                    "end": 364
                  },
                  "value": null,
                  "start": 363,
                  "end": 364
                }
              ],
              "selfClosing": true,
              "start": 348,
              "end": 366
            },
            "children": [],
            "closingElement": null,
            "start": 348,
            "end": 366
          },
          "definite": false,
          "start": 343,
          "end": 366
        }
      ],
      "declare": false,
      "start": 339,
      "end": 367
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
            "name": "y3",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 374
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "start": 378,
                "end": 381
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 382,
                    "end": 383
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 385,
                      "end": 386
                    },
                    "start": 384,
                    "end": 387
                  },
                  "start": 382,
                  "end": 387
                }
              ],
              "selfClosing": true,
              "start": 377,
              "end": 390
            },
            "children": [],
            "closingElement": null,
            "start": 377,
            "end": 390
          },
          "definite": false,
          "start": 372,
          "end": 390
        }
      ],
      "declare": false,
      "start": 368,
      "end": 391
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 391
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
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "OptionProp",
    "start": 44,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 72,
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
    "value": "boolean",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 86,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Opt",
    "start": 92,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 110,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "OptionProp",
    "start": 120,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 169,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 179,
    "end": 180
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "OptionProp",
    "start": 206,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 223,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "OptionProp",
    "start": 235,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 276,
    "end": 277
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 285,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 293,
    "end": 294
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 320,
    "end": 321
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 377,
    "end": 378
  },
  {
    "type": "JSXIdentifier",
    "value": "Opt",
    "start": 378,
    "end": 381
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  }
]
```
