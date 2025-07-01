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
