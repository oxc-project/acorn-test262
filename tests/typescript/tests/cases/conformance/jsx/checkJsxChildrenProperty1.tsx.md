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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 117,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 65,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 115,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
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
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 119,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 132,
        "decorators": [],
        "name": "Comp",
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
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 140,
                "decorators": [],
                "name": "Prop",
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 155,
                "end": 160,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 156,
                  "end": 159,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 160,
                  "end": 165,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 161,
                    "end": 164,
                    "object": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "b",
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
                "start": 165,
                "end": 171,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 167,
                  "end": 170,
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
      "type": "VariableDeclaration",
      "start": 182,
      "end": 229,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 228,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 190,
              "end": 228,
              "name": {
                "type": "JSXIdentifier",
                "start": 191,
                "end": 195,
                "name": "Comp"
              },
              "typeArguments": null,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
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
                    "value": "lol",
                    "raw": "\"lol\""
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
      "start": 230,
      "end": 294,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 293,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 243,
              "end": 263,
              "name": {
                "type": "JSXIdentifier",
                "start": 244,
                "end": 248,
                "name": "Comp"
              },
              "typeArguments": null,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 263,
                "end": 286,
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    "
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 295,
      "end": 370,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 369,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 308,
              "end": 328,
              "name": {
                "type": "JSXIdentifier",
                "start": 309,
                "end": 313,
                "name": "Comp"
              },
              "typeArguments": null,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 328,
                "end": 337,
                "value": "\n        ",
                "raw": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 337,
                "end": 357,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 337,
                  "end": 342,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 338,
                    "end": 341,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 342,
                    "end": 351,
                    "value": "hi hi hi!",
                    "raw": "hi hi hi!"
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
                }
              },
              {
                "type": "JSXText",
                "start": 357,
                "end": 362,
                "value": "\n    ",
                "raw": "\n    "
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
