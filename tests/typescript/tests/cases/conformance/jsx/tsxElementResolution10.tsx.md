__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 67
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "render",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 78
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 80,
                      "end": 83
                    },
                    "start": 78,
                    "end": 83
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 72,
                  "end": 84
                }
              ],
              "start": 68,
              "end": 87
            },
            "declare": false,
            "start": 45,
            "end": 87
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 116
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 117,
              "end": 120
            },
            "declare": false,
            "start": 89,
            "end": 120
          }
        ],
        "start": 19,
        "end": 122
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 122
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1type",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 142
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 153,
                    "end": 159
                  },
                  "start": 151,
                  "end": 159
                },
                "start": 150,
                "end": 159
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 165
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 167,
                        "end": 173
                      },
                      "start": 165,
                      "end": 173
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 164,
                    "end": 173
                  }
                ],
                "start": 162,
                "end": 175
              },
              "start": 160,
              "end": 175
            },
            "start": 146,
            "end": 176
          }
        ],
        "start": 143,
        "end": 178
      },
      "declare": false,
      "start": 124,
      "end": 178
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj1type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 197
                },
                "typeArguments": null,
                "start": 189,
                "end": 197
              },
              "start": 187,
              "end": 197
            },
            "start": 183,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 197
        }
      ],
      "declare": false,
      "start": 179,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj1",
            "start": 200,
            "end": 204
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 205,
                "end": 206
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 208,
                  "end": 210
                },
                "start": 207,
                "end": 211
              },
              "start": 205,
              "end": 211
            }
          ],
          "selfClosing": true,
          "start": 199,
          "end": 214
        },
        "children": [],
        "closingElement": null,
        "start": 199,
        "end": 214
      },
      "directive": null,
      "start": 199,
      "end": 215
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2type",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 262
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 270,
                    "end": 276
                  },
                  "start": 268,
                  "end": 276
                },
                "start": 267,
                "end": 276
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 282
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 284,
                        "end": 290
                      },
                      "start": 282,
                      "end": 290
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 281,
                    "end": 291
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 298
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 300,
                        "end": 303
                      },
                      "start": 298,
                      "end": 303
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 292,
                    "end": 304
                  }
                ],
                "start": 279,
                "end": 306
              },
              "start": 277,
              "end": 306
            },
            "start": 266,
            "end": 307
          }
        ],
        "start": 263,
        "end": 309
      },
      "declare": false,
      "start": 244,
      "end": 309
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj2type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 328
                },
                "typeArguments": null,
                "start": 320,
                "end": 328
              },
              "start": 318,
              "end": 328
            },
            "start": 314,
            "end": 328
          },
          "init": null,
          "definite": false,
          "start": 314,
          "end": 328
        }
      ],
      "declare": false,
      "start": 310,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj2",
            "start": 331,
            "end": 335
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 336,
                "end": 337
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 339,
                  "end": 341
                },
                "start": 338,
                "end": 342
              },
              "start": 336,
              "end": 342
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "render",
                "start": 343,
                "end": 349
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 351,
                  "end": 354
                },
                "start": 350,
                "end": 355
              },
              "start": 343,
              "end": 355
            }
          ],
          "selfClosing": true,
          "start": 330,
          "end": 358
        },
        "children": [],
        "closingElement": null,
        "start": 330,
        "end": 358
      },
      "directive": null,
      "start": 330,
      "end": 359
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 365
}
```
