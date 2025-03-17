__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 414,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 25,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 77,
        "name": "EmptySFC1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 112,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 86,
            "end": 110,
            "argument": {
              "type": "JSXElement",
              "start": 93,
              "end": 109,
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
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 103,
                "end": 109,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 105,
                  "end": 108,
                  "name": "div"
                }
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 98,
                  "end": 103,
                  "value": "hello",
                  "raw": "hello"
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 132,
        "name": "EmptySFC2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 167,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 141,
            "end": 165,
            "argument": {
              "type": "JSXElement",
              "start": 148,
              "end": 164,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 148,
                "end": 153,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 149,
                  "end": 152,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 158,
                "end": 164,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 160,
                  "end": 163,
                  "name": "div"
                }
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 153,
                  "end": 158,
                  "value": "Hello",
                  "raw": "Hello"
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 182,
        "name": "SFC2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 183,
          "end": 203,
          "name": "prop",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 187,
            "end": 203,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 189,
              "end": 203,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 191,
                  "end": 201,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 194,
                      "end": 201
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 205,
        "end": 235,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 211,
            "end": 233,
            "argument": {
              "type": "JSXElement",
              "start": 218,
              "end": 232,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 218,
                "end": 222,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 219,
                  "end": 221,
                  "name": "h1"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 227,
                "end": 232,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 229,
                  "end": 231,
                  "name": "h1"
                }
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 222,
                  "end": 227,
                  "value": "World",
                  "raw": "World"
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 253,
            "name": "EmptySFCComp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 256,
            "end": 278,
            "left": {
              "type": "Identifier",
              "start": 256,
              "end": 265,
              "name": "EmptySFC1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 269,
              "end": 278,
              "name": "EmptySFC2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 320,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 300,
            "name": "SFC2AndEmptyComp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 303,
            "end": 320,
            "left": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "name": "SFC2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 311,
              "end": 320,
              "name": "EmptySFC1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 328,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 331,
            "end": 347,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 331,
              "end": 347,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 332,
                "end": 344,
                "name": "EmptySFCComp"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 354,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 357,
            "end": 383,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 357,
              "end": 383,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 371,
                  "end": 380,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 371,
                    "end": 380,
                    "name": "data-prop"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 358,
                "end": 370,
                "name": "EmptySFCComp"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 384,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 392,
            "end": 414,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 392,
              "end": 414,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 410,
                  "end": 411,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 410,
                    "end": 411,
                    "name": "x"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 393,
                "end": 409,
                "name": "SFC2AndEmptyComp"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
