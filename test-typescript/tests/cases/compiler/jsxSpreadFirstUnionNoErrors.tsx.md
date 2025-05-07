__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 388,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "raw": "\"react\"",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 109,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 42,
        "decorators": [],
        "name": "InfoProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 45,
        "end": 108,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 47,
            "end": 67,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 49,
                "end": 65,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 55,
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 57,
                    "end": 65,
                    "literal": {
                      "type": "Literal",
                      "start": 57,
                      "end": 65,
                      "raw": "\"hidden\"",
                      "value": "hidden",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 70,
            "end": 108,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 72,
                "end": 90,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 78,
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 80,
                    "end": 89,
                    "literal": {
                      "type": "Literal",
                      "start": 80,
                      "end": 89,
                      "raw": "\"visible\"",
                      "value": "visible",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 91,
                "end": 106,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 98,
                  "decorators": [],
                  "name": "content",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 219,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "decorators": [],
            "name": "Info",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 124,
            "end": 219,
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "start": 146,
              "end": 219,
              "alternate": {
                "type": "JSXElement",
                "start": 193,
                "end": 219,
                "children": [
                  {
                    "type": "JSXExpressionContainer",
                    "start": 198,
                    "end": 213,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 199,
                      "end": 212,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 204,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 212,
                        "decorators": [],
                        "name": "content",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 213,
                  "end": 219,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 215,
                    "end": 218,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 193,
                  "end": 198,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 194,
                    "end": 197,
                    "name": "div"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                }
              },
              "consequent": {
                "type": "JSXElement",
                "start": 176,
                "end": 188,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 176,
                  "end": 188,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 177,
                    "end": 185,
                    "name": "noscript"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              "test": {
                "type": "BinaryExpression",
                "start": 146,
                "end": 171,
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "start": 146,
                  "end": 158,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 151,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 158,
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 163,
                  "end": 171,
                  "raw": "\"hidden\"",
                  "value": "hidden",
                  "regex": null,
                  "bigint": null
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 125,
                "end": 141,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 130,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 132,
                    "end": 141,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 141,
                      "decorators": [],
                      "name": "InfoProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 256,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 232,
            "end": 256,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 232,
              "end": 256,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 238,
                  "end": 253,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 238,
                    "end": 244,
                    "name": "status"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 245,
                    "end": 253,
                    "raw": "\"hidden\"",
                    "value": "hidden",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 233,
                "end": 237,
                "name": "Info"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 268,
            "end": 315,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 268,
              "end": 315,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 274,
                  "end": 290,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 274,
                    "end": 280,
                    "name": "status"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 281,
                    "end": 290,
                    "raw": "\"visible\"",
                    "value": "visible",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 291,
                  "end": 312,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 291,
                    "end": 298,
                    "name": "content"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 299,
                    "end": 312,
                    "raw": "\"hello world\"",
                    "value": "hello world",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 269,
                "end": 273,
                "name": "Info"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 351,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 351,
            "decorators": [],
            "name": "infoProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 351,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 351,
                  "decorators": [],
                  "name": "InfoProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 387,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 364,
            "end": 387,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 364,
              "end": 387,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 370,
                  "end": 384,
                  "argument": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 383,
                    "decorators": [],
                    "name": "infoProps",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 365,
                "end": 369,
                "name": "Info"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
