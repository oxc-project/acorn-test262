__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 427,
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
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "MyComp2",
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
          "start": 94,
          "end": 141,
          "name": "props",
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
                    "name": "className",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "htmlFor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 177,
        "name": "MyComp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 186,
        "end": 201,
        "object": {
          "type": "Identifier",
          "start": 186,
          "end": 191,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 192,
          "end": 201,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 244,
        "end": 247,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
                  "name": "className",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "htmlFor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      }
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
          "name": {
            "type": "JSXIdentifier",
            "start": 249,
            "end": 250,
            "name": "a"
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
          "name": {
            "type": "JSXIdentifier",
            "start": 265,
            "end": 266,
            "name": "a"
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
          "name": {
            "type": "JSXIdentifier",
            "start": 301,
            "end": 306,
            "name": "label"
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
          "name": {
            "type": "JSXIdentifier",
            "start": 319,
            "end": 324,
            "name": "label"
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
          "name": {
            "type": "JSXIdentifier",
            "start": 346,
            "end": 352,
            "name": "MyComp"
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
          "name": {
            "type": "JSXIdentifier",
            "start": 367,
            "end": 374,
            "name": "MyComp2"
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
          "name": {
            "type": "JSXIdentifier",
            "start": 389,
            "end": 395,
            "name": "MyComp"
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
          "name": {
            "type": "JSXIdentifier",
            "start": 408,
            "end": 415,
            "name": "MyComp2"
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
