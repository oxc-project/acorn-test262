__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 370,
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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 117,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 117,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 65,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 115,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 115,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 95,
                "end": 115,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 115,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 104,
                      "end": 115,
                      "left": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 107,
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 115,
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 119,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 142,
        "end": 174,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 148,
            "end": 172,
            "argument": {
              "type": "JSXElement",
              "start": 155,
              "end": 171,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 160,
                  "end": 165,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 161,
                    "end": 164,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 165,
                "end": 171,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 167,
                  "end": 170,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 155,
                "end": 160,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 156,
                  "end": 159,
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
        "start": 128,
        "end": 132,
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 133,
          "end": 140,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 136,
              "end": 140,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 140,
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 190,
            "end": 228,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 190,
              "end": 228,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 196,
                  "end": 202,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 196,
                    "end": 197,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 198,
                    "end": 202,
                    "expression": {
                      "type": "Literal",
                      "start": 199,
                      "end": 201,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 203,
                  "end": 209,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 203,
                    "end": 204,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 205,
                    "end": 209,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 210,
                  "end": 225,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 210,
                    "end": 218,
                    "name": "children"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 220,
                    "end": 225,
                    "raw": "\"lol\"",
                    "value": "lol",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 191,
                "end": 195,
                "name": "Comp"
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
      "start": 230,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 293,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 236,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 243,
            "end": 293,
            "children": [
              {
                "type": "JSXText",
                "start": 263,
                "end": 286,
                "raw": "\n        hi hi hi!\n    ",
                "value": "\n        hi hi hi!\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 286,
              "end": 293,
              "name": {
                "type": "JSXIdentifier",
                "start": 288,
                "end": 292,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 243,
              "end": 263,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 249,
                  "end": 255,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 249,
                    "end": 250,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 251,
                    "end": 255,
                    "expression": {
                      "type": "Literal",
                      "start": 252,
                      "end": 254,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 256,
                  "end": 262,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 256,
                    "end": 257,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 258,
                    "end": 262,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 244,
                "end": 248,
                "name": "Comp"
              },
              "selfClosing": false,
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
      "start": 295,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 369,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 301,
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 308,
            "end": 369,
            "children": [
              {
                "type": "JSXText",
                "start": 328,
                "end": 337,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 337,
                "end": 357,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 342,
                    "end": 351,
                    "raw": "hi hi hi!",
                    "value": "hi hi hi!"
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 351,
                  "end": 357,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 353,
                    "end": 356,
                    "name": "div"
                  }
                },
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 337,
                  "end": 342,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 338,
                    "end": 341,
                    "name": "div"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 357,
                "end": 362,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 362,
              "end": 369,
              "name": {
                "type": "JSXIdentifier",
                "start": 364,
                "end": 368,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 308,
              "end": 328,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 314,
                  "end": 320,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 314,
                    "end": 315,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 316,
                    "end": 320,
                    "expression": {
                      "type": "Literal",
                      "start": 317,
                      "end": 319,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 321,
                  "end": 327,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 321,
                    "end": 322,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 323,
                    "end": 327,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 309,
                "end": 313,
                "name": "Comp"
              },
              "selfClosing": false,
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
