__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 389,
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
      "end": 87,
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
        "end": 87,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 61,
            "end": 85,
            "argument": {
              "type": "JSXElement",
              "start": 68,
              "end": 84,
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
                  "end": 78,
                  "value": "hello",
                  "raw": "hello"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 78,
                "end": 84,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 80,
                  "end": 83,
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
      "start": 89,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 107,
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
        "start": 110,
        "end": 142,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 116,
            "end": 140,
            "argument": {
              "type": "JSXElement",
              "start": 123,
              "end": 139,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 123,
                "end": 128,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 124,
                  "end": 127,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 128,
                  "end": 133,
                  "value": "Hello",
                  "raw": "Hello"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 133,
                "end": 139,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 135,
                  "end": 138,
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
      "start": 144,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 157,
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
          "start": 158,
          "end": 178,
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 178,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 164,
              "end": 178,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 166,
                  "end": 176,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 167,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 169,
                      "end": 176
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
        "start": 180,
        "end": 210,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 186,
            "end": 208,
            "argument": {
              "type": "JSXElement",
              "start": 193,
              "end": 207,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 193,
                "end": 197,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 194,
                  "end": 196,
                  "name": "h1"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 197,
                  "end": 202,
                  "value": "World",
                  "raw": "World"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 202,
                "end": 207,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 204,
                  "end": 206,
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
      "start": 212,
      "end": 254,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 228,
            "decorators": [],
            "name": "EmptySFCComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 231,
            "end": 253,
            "left": {
              "type": "Identifier",
              "start": 231,
              "end": 240,
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 244,
              "end": 253,
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
      "start": 255,
      "end": 296,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 275,
            "decorators": [],
            "name": "SFC2AndEmptyComp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 278,
            "end": 295,
            "left": {
              "type": "Identifier",
              "start": 278,
              "end": 282,
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 286,
              "end": 295,
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
      "start": 298,
      "end": 322,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 306,
            "end": 322,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 306,
              "end": 322,
              "name": {
                "type": "JSXIdentifier",
                "start": 307,
                "end": 319,
                "name": "EmptySFCComp"
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
      "start": 323,
      "end": 358,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 329,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 332,
            "end": 358,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 332,
              "end": 358,
              "name": {
                "type": "JSXIdentifier",
                "start": 333,
                "end": 345,
                "name": "EmptySFCComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 346,
                  "end": 355,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 346,
                    "end": 355,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 389,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 389,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 367,
            "end": 389,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 367,
              "end": 389,
              "name": {
                "type": "JSXIdentifier",
                "start": 368,
                "end": 384,
                "name": "SFC2AndEmptyComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 385,
                  "end": 386,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 385,
                    "end": 386,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
