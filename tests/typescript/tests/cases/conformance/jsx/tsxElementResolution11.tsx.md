__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 411,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 119,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 80,
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 81,
              "end": 84,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 86,
            "end": 117,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 113,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 114,
              "end": 117,
              "body": []
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
      "start": 121,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 139,
        "decorators": [],
        "name": "Obj1type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 140,
        "end": 165,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 143,
            "end": 163,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 156,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 150,
                    "end": 156
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 162,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 159,
                "end": 162
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 185,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 184,
            "decorators": [],
            "name": "Obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 184,
                  "decorators": [],
                  "name": "Obj1type",
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 202,
      "expression": {
        "type": "JSXElement",
        "start": 186,
        "end": 201,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 186,
          "end": 201,
          "name": {
            "type": "JSXIdentifier",
            "start": 187,
            "end": 191,
            "name": "Obj1"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 192,
              "end": 198,
              "name": {
                "type": "JSXIdentifier",
                "start": 192,
                "end": 193,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 194,
                "end": 198,
                "expression": {
                  "type": "Literal",
                  "start": 195,
                  "end": 197,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 210,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 228,
        "decorators": [],
        "name": "Obj2type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 229,
        "end": 265,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 232,
            "end": 263,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 236,
                "end": 245,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 237,
                  "end": 245,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 239,
                    "end": 245
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 248,
                "end": 262,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 250,
                    "end": 260,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 252,
                      "end": 260,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 254,
                        "end": 260
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 285,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 284,
            "decorators": [],
            "name": "Obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 284,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 284,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 284,
                  "decorators": [],
                  "name": "Obj2type",
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 302,
      "expression": {
        "type": "JSXElement",
        "start": 286,
        "end": 301,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 286,
          "end": 301,
          "name": {
            "type": "JSXIdentifier",
            "start": 287,
            "end": 291,
            "name": "Obj2"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 292,
              "end": 298,
              "name": {
                "type": "JSXIdentifier",
                "start": 292,
                "end": 293,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 294,
                "end": 298,
                "expression": {
                  "type": "Literal",
                  "start": 295,
                  "end": 297,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 313,
      "end": 368,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 331,
        "decorators": [],
        "name": "Obj3type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 332,
        "end": 368,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 335,
            "end": 366,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 339,
                "end": 348,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 340,
                  "end": 348,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 342,
                    "end": 348
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 365,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 351,
                "end": 365,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 353,
                    "end": 363,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 354,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 362,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 356,
                        "end": 362
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 369,
      "end": 388,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 387,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 387,
            "decorators": [],
            "name": "Obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 387,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 387,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 387,
                  "decorators": [],
                  "name": "Obj3type",
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 389,
      "end": 405,
      "expression": {
        "type": "JSXElement",
        "start": 389,
        "end": 404,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 389,
          "end": 404,
          "name": {
            "type": "JSXIdentifier",
            "start": 390,
            "end": 394,
            "name": "Obj3"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 395,
              "end": 401,
              "name": {
                "type": "JSXIdentifier",
                "start": 395,
                "end": 396,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 397,
                "end": 401,
                "expression": {
                  "type": "Literal",
                  "start": 398,
                  "end": 400,
                  "value": 10,
                  "raw": "10"
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
