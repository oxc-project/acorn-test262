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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "Prop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                        "name": "JSX",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 115,
                        "name": "Element",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
        "name": "Comp",
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
          "start": 133,
          "end": 140,
          "name": "p",
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
                "name": "Prop",
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 156,
                  "end": 159,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "name": "b",
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 190,
            "end": 228,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 191,
                "end": 195,
                "name": "Comp"
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
      "start": 230,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 236,
            "name": "k1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 243,
            "end": 293,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 244,
                "end": 248,
                "name": "Comp"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 263,
                "end": 286,
                "value": "\n        hi hi hi!\n    ",
                "raw": "\n        hi hi hi!\n    "
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 301,
            "name": "k2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 308,
            "end": 369,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 309,
                "end": 313,
                "name": "Comp"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 338,
                    "end": 341,
                    "name": "div"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
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
                "children": [
                  {
                    "type": "JSXText",
                    "start": 342,
                    "end": 351,
                    "value": "hi hi hi!",
                    "raw": "hi hi hi!"
                  }
                ]
              },
              {
                "type": "JSXText",
                "start": 357,
                "end": 362,
                "value": "\n    ",
                "raw": "\n    "
              }
            ]
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
