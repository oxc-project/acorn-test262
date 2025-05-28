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
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 42,
        "decorators": [],
        "name": "InfoProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 55,
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": "hidden",
                      "raw": "\"hidden\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 78,
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": "visible",
                      "raw": "\"visible\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 91,
                "end": 106,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 98,
                  "decorators": [],
                  "name": "content",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 220,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 219,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 141,
                      "decorators": [],
                      "name": "InfoProps",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "start": 146,
              "end": 219,
              "test": {
                "type": "BinaryExpression",
                "start": 146,
                "end": 171,
                "left": {
                  "type": "MemberExpression",
                  "start": 146,
                  "end": 158,
                  "object": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 151,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 158,
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 163,
                  "end": 171,
                  "value": "hidden",
                  "raw": "\"hidden\""
                }
              },
              "consequent": {
                "type": "JSXElement",
                "start": 176,
                "end": 188,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 176,
                  "end": 188,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 177,
                    "end": 185,
                    "name": "noscript"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              "alternate": {
                "type": "JSXElement",
                "start": 193,
                "end": 219,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 193,
                  "end": 198,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 194,
                    "end": 197,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [
                  {
                    "type": "JSXExpressionContainer",
                    "start": 198,
                    "end": 213,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 199,
                      "end": 212,
                      "object": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 204,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 212,
                        "decorators": [],
                        "name": "content",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
      "start": 222,
      "end": 257,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 256,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 232,
              "end": 256,
              "name": {
                "type": "JSXIdentifier",
                "start": 233,
                "end": 237,
                "name": "Info"
              },
              "typeArguments": null,
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
                    "value": "hidden",
                    "raw": "\"hidden\""
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
      "start": 258,
      "end": 316,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 315,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 268,
              "end": 315,
              "name": {
                "type": "JSXIdentifier",
                "start": 269,
                "end": 273,
                "name": "Info"
              },
              "typeArguments": null,
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
                    "value": "visible",
                    "raw": "\"visible\""
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
                    "value": "hello world",
                    "raw": "\"hello world\""
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
      "start": 317,
      "end": 352,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 351,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 351,
                  "decorators": [],
                  "name": "InfoProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 388,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 387,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 364,
              "end": 387,
              "name": {
                "type": "JSXIdentifier",
                "start": 365,
                "end": 369,
                "name": "Info"
              },
              "typeArguments": null,
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
  "sourceType": "module",
  "hashbang": null
}
```
