__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 289,
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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 69,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 46,
            "end": 68,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 52,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 50,
                    "end": 52,
                    "members": []
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 57,
              "end": 68,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 57,
                "end": 62,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 58,
                  "end": 61,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 62,
                "end": 68,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 64,
                  "end": 67,
                  "name": "div"
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 96,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 88,
            "end": 95,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 88,
              "end": 95,
              "name": {
                "type": "JSXIdentifier",
                "start": 89,
                "end": 92,
                "name": "Tag"
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
      "start": 97,
      "end": 120,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 108,
            "end": 119,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 108,
              "end": 113,
              "name": {
                "type": "JSXIdentifier",
                "start": 109,
                "end": 112,
                "name": "Tag"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 113,
              "end": 119,
              "name": {
                "type": "JSXIdentifier",
                "start": 115,
                "end": 118,
                "name": "Tag"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 192,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 161,
            "end": 191,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 161,
              "end": 191,
              "name": {
                "type": "JSXIdentifier",
                "start": 162,
                "end": 165,
                "name": "Tag"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 166,
                  "end": 188,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 166,
                    "end": 174,
                    "name": "children"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 175,
                    "end": 188,
                    "expression": {
                      "type": "JSXElement",
                      "start": 176,
                      "end": 187,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 176,
                        "end": 181,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 177,
                          "end": 180,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 181,
                        "end": 187,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 183,
                          "end": 186,
                          "name": "div"
                        }
                      }
                    }
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
      "start": 193,
      "end": 235,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 201,
            "decorators": [],
            "name": "k4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 204,
            "end": 234,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 204,
              "end": 217,
              "name": {
                "type": "JSXIdentifier",
                "start": 205,
                "end": 208,
                "name": "Tag"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 209,
                  "end": 216,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 209,
                    "end": 212,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 213,
                    "end": 216,
                    "value": "1",
                    "raw": "\"1\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 217,
                "end": 228,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 217,
                  "end": 222,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 218,
                    "end": 221,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 222,
                  "end": 228,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 224,
                    "end": 227,
                    "name": "div"
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 228,
              "end": 234,
              "name": {
                "type": "JSXIdentifier",
                "start": 230,
                "end": 233,
                "name": "Tag"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 289,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 288,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 244,
            "decorators": [],
            "name": "k5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 247,
            "end": 288,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 247,
              "end": 260,
              "name": {
                "type": "JSXIdentifier",
                "start": 248,
                "end": 251,
                "name": "Tag"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 252,
                  "end": 259,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 252,
                    "end": 255,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 256,
                    "end": 259,
                    "value": "1",
                    "raw": "\"1\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 260,
                "end": 271,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 260,
                  "end": 265,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 261,
                    "end": 264,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 265,
                  "end": 271,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 267,
                    "end": 270,
                    "name": "div"
                  }
                }
              },
              {
                "type": "JSXElement",
                "start": 271,
                "end": 282,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 271,
                  "end": 276,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 272,
                    "end": 275,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 276,
                  "end": 282,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 278,
                    "end": 281,
                    "name": "div"
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 282,
              "end": 288,
              "name": {
                "type": "JSXIdentifier",
                "start": 284,
                "end": 287,
                "name": "Tag"
              }
            }
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
