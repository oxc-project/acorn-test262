__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 462,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 25,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 108,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 108,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 86,
            "end": 106,
            "argument": {
              "type": "JSXElement",
              "start": 93,
              "end": 106,
              "children": [
                {
                  "type": "JSXText",
                  "start": 98,
                  "end": 100,
                  "raw": "Hi",
                  "value": "Hi"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 100,
                "end": 106,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 102,
                  "end": 105,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 93,
                "end": 98,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 94,
                  "end": 97,
                  "name": "div"
                },
                "selfClosing": false
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
        "start": 68,
        "end": 77,
        "decorators": [],
        "name": "EmptySFC1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 110,
      "end": 162,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 131,
        "end": 162,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 137,
            "end": 160,
            "argument": {
              "type": "JSXElement",
              "start": 144,
              "end": 160,
              "children": [
                {
                  "type": "JSXText",
                  "start": 149,
                  "end": 154,
                  "raw": "Hello",
                  "value": "Hello"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 154,
                "end": 160,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 156,
                  "end": 159,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 144,
                "end": 149,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 145,
                  "end": 148,
                  "name": "div"
                },
                "selfClosing": false
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
        "start": 119,
        "end": 128,
        "decorators": [],
        "name": "EmptySFC2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 230,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 200,
        "end": 230,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 206,
            "end": 228,
            "argument": {
              "type": "JSXElement",
              "start": 213,
              "end": 227,
              "children": [
                {
                  "type": "JSXText",
                  "start": 217,
                  "end": 222,
                  "raw": "World",
                  "value": "World"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 222,
                "end": 227,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 224,
                  "end": 226,
                  "name": "h1"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 213,
                "end": 217,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 214,
                  "end": 216,
                  "name": "h1"
                },
                "selfClosing": false
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
        "start": 173,
        "end": 177,
        "decorators": [],
        "name": "SFC2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 178,
          "end": 198,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 182,
            "end": 198,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 184,
              "end": 198,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 186,
                  "end": 196,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 196,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 189,
                      "end": 196
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 248,
            "decorators": [],
            "name": "EmptySFCComp",
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 251,
            "end": 273,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 251,
              "end": 260,
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 264,
              "end": 273,
              "decorators": [],
              "name": "EmptySFC2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 295,
            "decorators": [],
            "name": "SFC2AndEmptyComp",
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 298,
            "end": 315,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 298,
              "end": 302,
              "decorators": [],
              "name": "SFC2",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 306,
              "end": 315,
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 331,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 334,
            "end": 352,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 334,
              "end": 352,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 348,
                  "end": 349,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 348,
                    "end": 349,
                    "name": "x"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 335,
                "end": 347,
                "name": "EmptySFCComp"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 389,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 359,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 362,
            "end": 389,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 362,
              "end": 389,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 380,
                  "end": 386,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 380,
                    "end": 381,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 382,
                    "end": 386,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 363,
                "end": 379,
                "name": "SFC2AndEmptyComp"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 419,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 399,
            "end": 419,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 399,
              "end": 419,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 400,
                "end": 416,
                "name": "SFC2AndEmptyComp"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 459,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 426,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 429,
            "end": 459,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 429,
              "end": 459,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 447,
                  "end": 456,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 447,
                    "end": 456,
                    "name": "data-prop"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 430,
                "end": 446,
                "name": "SFC2AndEmptyComp"
              },
              "selfClosing": true
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
