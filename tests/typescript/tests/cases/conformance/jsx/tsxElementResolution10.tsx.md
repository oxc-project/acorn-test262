__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 365,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 122,
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
        "end": 122,
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
            "end": 87,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 67,
              "decorators": [],
              "name": "ElementClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 68,
              "end": 87,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 72,
                  "end": 84,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 78,
                    "decorators": [],
                    "name": "render",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 80,
                      "end": 83
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
            "start": 89,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 116,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 117,
              "end": 120,
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
      "start": 124,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 142,
        "decorators": [],
        "name": "Obj1type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 143,
        "end": 178,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 146,
            "end": 176,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 150,
                "end": 159,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 159,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 153,
                    "end": 159
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 162,
                "end": 175,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 164,
                    "end": 173,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 165,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 165,
                      "end": 173,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 167,
                        "end": 173
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
      "start": 179,
      "end": 198,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 197,
            "decorators": [],
            "name": "Obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 189,
                "end": 197,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 197,
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
      "start": 199,
      "end": 215,
      "expression": {
        "type": "JSXElement",
        "start": 199,
        "end": 214,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 199,
          "end": 214,
          "name": {
            "type": "JSXIdentifier",
            "start": 200,
            "end": 204,
            "name": "Obj1"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 205,
              "end": 211,
              "name": {
                "type": "JSXIdentifier",
                "start": 205,
                "end": 206,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 207,
                "end": 211,
                "expression": {
                  "type": "Literal",
                  "start": 208,
                  "end": 210,
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
      "start": 244,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 262,
        "decorators": [],
        "name": "Obj2type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 263,
        "end": 309,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 266,
            "end": 307,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 267,
                "end": 276,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 268,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 270,
                    "end": 276
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 279,
                "end": 306,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 281,
                    "end": 291,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 284,
                        "end": 290
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 292,
                    "end": 304,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 298,
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 298,
                      "end": 303,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 300,
                        "end": 303
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
      "start": 310,
      "end": 329,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 328,
            "decorators": [],
            "name": "Obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 320,
                "end": 328,
                "typeName": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 328,
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
      "start": 330,
      "end": 359,
      "expression": {
        "type": "JSXElement",
        "start": 330,
        "end": 358,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 330,
          "end": 358,
          "name": {
            "type": "JSXIdentifier",
            "start": 331,
            "end": 335,
            "name": "Obj2"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 336,
              "end": 342,
              "name": {
                "type": "JSXIdentifier",
                "start": 336,
                "end": 337,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 338,
                "end": 342,
                "expression": {
                  "type": "Literal",
                  "start": 339,
                  "end": 341,
                  "value": 32,
                  "raw": "32"
                }
              }
            },
            {
              "type": "JSXAttribute",
              "start": 343,
              "end": 355,
              "name": {
                "type": "JSXIdentifier",
                "start": 343,
                "end": 349,
                "name": "render"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 350,
                "end": 355,
                "expression": {
                  "type": "Literal",
                  "start": 351,
                  "end": 354,
                  "value": 100,
                  "raw": "100"
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
