__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 426,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 93,
        "decorators": [],
        "name": "MyComp2",
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
          "start": 94,
          "end": 141,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 141,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 101,
              "end": 141,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 103,
                  "end": 122,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 112,
                    "decorators": [],
                    "name": "className",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 115,
                      "end": 121
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 123,
                  "end": 139,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 130,
                    "decorators": [],
                    "name": "htmlFor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 133,
                      "end": 139
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 164,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 149,
            "end": 162,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 156,
              "end": 161,
              "expression": {
                "type": "Literal",
                "start": 156,
                "end": 160,
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 247,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 177,
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 186,
        "end": 201,
        "object": {
          "type": "Identifier",
          "start": 186,
          "end": 191,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 192,
          "end": 201,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 201,
        "end": 243,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 202,
            "end": 242,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 204,
                "end": 223,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 213,
                  "decorators": [],
                  "name": "className",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 214,
                  "end": 222,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 216,
                    "end": 222
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 224,
                "end": 240,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 231,
                  "decorators": [],
                  "name": "htmlFor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 232,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 234,
                    "end": 240
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 244,
        "end": 247,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 263,
      "expression": {
        "type": "JSXElement",
        "start": 248,
        "end": 262,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 248,
          "end": 262,
          "name": {
            "type": "JSXIdentifier",
            "start": 249,
            "end": 250,
            "name": "a"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 251,
              "end": 259,
              "name": {
                "type": "JSXIdentifier",
                "start": 251,
                "end": 256,
                "name": "class"
              },
              "value": {
                "type": "Literal",
                "start": 257,
                "end": 259,
                "value": "",
                "raw": "\"\""
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
      "type": "ExpressionStatement",
      "start": 264,
      "end": 277,
      "expression": {
        "type": "JSXElement",
        "start": 264,
        "end": 276,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 264,
          "end": 276,
          "name": {
            "type": "JSXIdentifier",
            "start": 265,
            "end": 266,
            "name": "a"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 267,
              "end": 273,
              "name": {
                "type": "JSXIdentifier",
                "start": 267,
                "end": 270,
                "name": "for"
              },
              "value": {
                "type": "Literal",
                "start": 271,
                "end": 273,
                "value": "",
                "raw": "\"\""
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
      "type": "ExpressionStatement",
      "start": 300,
      "end": 317,
      "expression": {
        "type": "JSXElement",
        "start": 300,
        "end": 316,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 300,
          "end": 316,
          "name": {
            "type": "JSXIdentifier",
            "start": 301,
            "end": 306,
            "name": "label"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 307,
              "end": 313,
              "name": {
                "type": "JSXIdentifier",
                "start": 307,
                "end": 310,
                "name": "for"
              },
              "value": {
                "type": "Literal",
                "start": 311,
                "end": 313,
                "value": "",
                "raw": "\"\""
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
      "type": "ExpressionStatement",
      "start": 318,
      "end": 344,
      "expression": {
        "type": "JSXElement",
        "start": 318,
        "end": 343,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 318,
          "end": 343,
          "name": {
            "type": "JSXIdentifier",
            "start": 319,
            "end": 324,
            "name": "label"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 325,
              "end": 331,
              "name": {
                "type": "JSXIdentifier",
                "start": 325,
                "end": 328,
                "name": "for"
              },
              "value": {
                "type": "Literal",
                "start": 329,
                "end": 331,
                "value": "",
                "raw": "\"\""
              }
            },
            {
              "type": "JSXAttribute",
              "start": 332,
              "end": 340,
              "name": {
                "type": "JSXIdentifier",
                "start": 332,
                "end": 337,
                "name": "class"
              },
              "value": {
                "type": "Literal",
                "start": 338,
                "end": 340,
                "value": "",
                "raw": "\"\""
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
      "type": "ExpressionStatement",
      "start": 345,
      "end": 365,
      "expression": {
        "type": "JSXElement",
        "start": 345,
        "end": 364,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 345,
          "end": 364,
          "name": {
            "type": "JSXIdentifier",
            "start": 346,
            "end": 352,
            "name": "MyComp"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 353,
              "end": 361,
              "name": {
                "type": "JSXIdentifier",
                "start": 353,
                "end": 358,
                "name": "class"
              },
              "value": {
                "type": "Literal",
                "start": 359,
                "end": 361,
                "value": "",
                "raw": "\"\""
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
      "type": "ExpressionStatement",
      "start": 366,
      "end": 387,
      "expression": {
        "type": "JSXElement",
        "start": 366,
        "end": 386,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 366,
          "end": 386,
          "name": {
            "type": "JSXIdentifier",
            "start": 367,
            "end": 374,
            "name": "MyComp2"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 375,
              "end": 383,
              "name": {
                "type": "JSXIdentifier",
                "start": 375,
                "end": 380,
                "name": "class"
              },
              "value": {
                "type": "Literal",
                "start": 381,
                "end": 383,
                "value": "",
                "raw": "\"\""
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
      "type": "ExpressionStatement",
      "start": 388,
      "end": 406,
      "expression": {
        "type": "JSXElement",
        "start": 388,
        "end": 405,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 388,
          "end": 405,
          "name": {
            "type": "JSXIdentifier",
            "start": 389,
            "end": 395,
            "name": "MyComp"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 396,
              "end": 402,
              "name": {
                "type": "JSXIdentifier",
                "start": 396,
                "end": 399,
                "name": "for"
              },
              "value": {
                "type": "Literal",
                "start": 400,
                "end": 402,
                "value": "",
                "raw": "\"\""
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
      "type": "ExpressionStatement",
      "start": 407,
      "end": 426,
      "expression": {
        "type": "JSXElement",
        "start": 407,
        "end": 425,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 407,
          "end": 425,
          "name": {
            "type": "JSXIdentifier",
            "start": 408,
            "end": 415,
            "name": "MyComp2"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 416,
              "end": 422,
              "name": {
                "type": "JSXIdentifier",
                "start": 416,
                "end": 419,
                "name": "for"
              },
              "value": {
                "type": "Literal",
                "start": 420,
                "end": 422,
                "value": "",
                "raw": "\"\""
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
  "sourceType": "module",
  "hashbang": null
}
```
