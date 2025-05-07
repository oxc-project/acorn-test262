__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 436,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 83,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 83,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 61,
            "end": 81,
            "argument": {
              "type": "JSXElement",
              "start": 68,
              "end": 81,
              "children": [
                {
                  "type": "JSXText",
                  "start": 73,
                  "end": 75,
                  "raw": "Hi",
                  "value": "Hi"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 75,
                "end": 81,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 77,
                  "end": 80,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 68,
                "end": 73,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 69,
                  "end": 72,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 52,
        "decorators": [],
        "name": "EmptySFC1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 137,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 106,
        "end": 137,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 112,
            "end": 135,
            "argument": {
              "type": "JSXElement",
              "start": 119,
              "end": 135,
              "children": [
                {
                  "type": "JSXText",
                  "start": 124,
                  "end": 129,
                  "raw": "Hello",
                  "value": "Hello"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 129,
                "end": 135,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 131,
                  "end": 134,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 119,
                "end": 124,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 120,
                  "end": 123,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 103,
        "decorators": [],
        "name": "EmptySFC2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 139,
      "end": 205,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 205,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 181,
            "end": 203,
            "argument": {
              "type": "JSXElement",
              "start": 188,
              "end": 202,
              "children": [
                {
                  "type": "JSXText",
                  "start": 192,
                  "end": 197,
                  "raw": "World",
                  "value": "World"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 197,
                "end": 202,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 199,
                  "end": 201,
                  "name": "h1"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 188,
                "end": 192,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 189,
                  "end": 191,
                  "name": "h1"
                },
                "selfClosing": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 152,
        "decorators": [],
        "name": "SFC2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 153,
          "end": 173,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 173,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 159,
              "end": 173,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 161,
                  "end": 171,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 162,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 164,
                      "end": 171
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 223,
            "decorators": [],
            "name": "EmptySFCComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 226,
            "end": 248,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 226,
              "end": 235,
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 239,
              "end": 248,
              "decorators": [],
              "name": "EmptySFC2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 290,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 270,
            "decorators": [],
            "name": "SFC2AndEmptyComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 273,
            "end": 290,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 273,
              "end": 277,
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 281,
              "end": 290,
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 309,
            "end": 327,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 309,
              "end": 327,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 323,
                  "end": 324,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 323,
                    "end": 324,
                    "name": "x"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 310,
                "end": 322,
                "name": "EmptySFCComp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 364,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 337,
            "end": 364,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 337,
              "end": 364,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 355,
                  "end": 361,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 355,
                    "end": 356,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 357,
                    "end": 361,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 338,
                "end": 354,
                "name": "SFC2AndEmptyComp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 394,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 371,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 374,
            "end": 394,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 374,
              "end": 394,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 375,
                "end": 391,
                "name": "SFC2AndEmptyComp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 434,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 401,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 404,
            "end": 434,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 404,
              "end": 434,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 422,
                  "end": 431,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 422,
                    "end": 431,
                    "name": "data-prop"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 405,
                "end": 421,
                "name": "SFC2AndEmptyComp"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
