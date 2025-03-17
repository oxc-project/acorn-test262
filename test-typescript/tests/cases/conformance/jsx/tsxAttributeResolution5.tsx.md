__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 586,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 117,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 115,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 115,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 93,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "name": "test1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 84,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 92,
                        "name": "Attribs1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 96,
                  "end": 112,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 101,
                    "name": "test2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 111,
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 111,
                        "name": "Attribs2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 118,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 136,
        "name": "Attribs1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 137,
        "end": 152,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 140,
            "end": 150,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
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
      "type": "TSInterfaceDeclaration",
      "start": 154,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 172,
        "name": "Attribs2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 173,
        "end": 197,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 176,
            "end": 195,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 184,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 188,
                "end": 194
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 199,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 213,
        "name": "make1",
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
          "start": 238,
          "end": 244,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 241,
            "end": 244,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 243,
              "end": 244,
              "typeName": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "name": "T",
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
        "start": 246,
        "end": 283,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 249,
            "end": 275,
            "argument": {
              "type": "JSXElement",
              "start": 256,
              "end": 274,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 256,
                "end": 274,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 263,
                    "end": 271,
                    "argument": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 270,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 257,
                  "end": 262,
                  "name": "test1"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 236,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 235,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 224,
              "end": 235,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 225,
                  "end": 234,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 226,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 228,
                      "end": 234
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 285,
      "end": 398,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 299,
        "name": "make2",
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
          "start": 324,
          "end": 330,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 330,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 329,
              "end": 330,
              "typeName": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
                "name": "T",
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
        "start": 332,
        "end": 398,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 335,
            "end": 361,
            "argument": {
              "type": "JSXElement",
              "start": 342,
              "end": 360,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 342,
                "end": 360,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 349,
                    "end": 357,
                    "argument": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 356,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 343,
                  "end": 348,
                  "name": "test1"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 299,
        "end": 322,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 300,
            "end": 321,
            "name": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 310,
              "end": 321,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 311,
                  "end": 320,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 312,
                    "end": 320,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 314,
                      "end": 320
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 400,
      "end": 498,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 414,
        "name": "make3",
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
          "start": 439,
          "end": 445,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 442,
            "end": 445,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 444,
              "end": 445,
              "typeName": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "name": "T",
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
        "start": 447,
        "end": 498,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 450,
            "end": 476,
            "argument": {
              "type": "JSXElement",
              "start": 457,
              "end": 475,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 457,
                "end": 475,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 464,
                    "end": 472,
                    "argument": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 471,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 458,
                  "end": 463,
                  "name": "test1"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 414,
        "end": 437,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 415,
            "end": 436,
            "name": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 425,
              "end": 436,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 426,
                  "end": 435,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 427,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 427,
                    "end": 435,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 429,
                      "end": 435
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 501,
      "end": 519,
      "expression": {
        "type": "JSXElement",
        "start": 501,
        "end": 518,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 501,
          "end": 518,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 508,
              "end": 515,
              "argument": {
                "type": "ObjectExpression",
                "start": 512,
                "end": 514,
                "properties": []
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 502,
            "end": 507,
            "name": "test1"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 540,
      "end": 558,
      "expression": {
        "type": "JSXElement",
        "start": 540,
        "end": 557,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 540,
          "end": 557,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 547,
              "end": 554,
              "argument": {
                "type": "ObjectExpression",
                "start": 551,
                "end": 553,
                "properties": []
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 541,
            "end": 546,
            "name": "test2"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
