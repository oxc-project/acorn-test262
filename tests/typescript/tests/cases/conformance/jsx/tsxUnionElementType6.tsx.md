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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 52,
        "decorators": [],
        "name": "EmptySFC1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 68,
                "end": 73,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 69,
                  "end": 72,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 73,
                  "end": 75,
                  "value": "Hi",
                  "raw": "Hi"
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
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 103,
        "decorators": [],
        "name": "EmptySFC2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 119,
                "end": 124,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 120,
                  "end": 123,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 124,
                  "end": 129,
                  "value": "Hello",
                  "raw": "Hello"
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
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 139,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 152,
        "decorators": [],
        "name": "SFC2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 162,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 164,
                      "end": 171
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 188,
                "end": 192,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 189,
                  "end": 191,
                  "name": "h1"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 192,
                  "end": 197,
                  "value": "World",
                  "raw": "World"
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
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 248,
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
            "left": {
              "type": "Identifier",
              "start": 226,
              "end": 235,
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 239,
              "end": 248,
              "decorators": [],
              "name": "EmptySFC2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 291,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 290,
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
            "left": {
              "type": "Identifier",
              "start": 273,
              "end": 277,
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 281,
              "end": 290,
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 328,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 327,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 309,
              "end": 327,
              "name": {
                "type": "JSXIdentifier",
                "start": 310,
                "end": 322,
                "name": "EmptySFCComp"
              },
              "typeArguments": null,
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 365,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 364,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 337,
              "end": 364,
              "name": {
                "type": "JSXIdentifier",
                "start": 338,
                "end": 354,
                "name": "SFC2AndEmptyComp"
              },
              "typeArguments": null,
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
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 395,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 394,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 374,
              "end": 394,
              "name": {
                "type": "JSXIdentifier",
                "start": 375,
                "end": 391,
                "name": "SFC2AndEmptyComp"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 435,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 434,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 404,
              "end": 434,
              "name": {
                "type": "JSXIdentifier",
                "start": 405,
                "end": 421,
                "name": "SFC2AndEmptyComp"
              },
              "typeArguments": null,
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
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
