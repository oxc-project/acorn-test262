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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "InfoProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "status",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "status",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "content",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "name": "Info",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 124,
            "end": 219,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 125,
                "end": 141,
                "name": "props",
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
                      "name": "InfoProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 158,
                    "name": "status",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 177,
                    "end": 185,
                    "name": "noscript"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              "alternate": {
                "type": "JSXElement",
                "start": 193,
                "end": 219,
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
                },
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
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 212,
                        "name": "content",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 232,
            "end": 256,
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
                    "value": "hidden",
                    "raw": "\"hidden\""
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 268,
            "end": 315,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 269,
                "end": 273,
                "name": "Info"
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 351,
            "name": "infoProps",
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
                  "name": "InfoProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 364,
            "end": 387,
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
                    "name": "infoProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
