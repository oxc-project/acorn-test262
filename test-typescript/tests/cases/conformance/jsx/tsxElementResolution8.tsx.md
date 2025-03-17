__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 451,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
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
        "end": 78,
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
            "end": 76,
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
              "end": 76,
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
      "type": "VariableDeclaration",
      "start": 89,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 96,
            "name": "Div",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 99,
            "end": 100,
            "value": 3,
            "raw": "3"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 110,
      "expression": {
        "type": "JSXElement",
        "start": 102,
        "end": 109,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 102,
          "end": 109,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 103,
            "end": 106,
            "name": "Div"
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
      "type": "FunctionDeclaration",
      "start": 118,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 131,
        "name": "Fact",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 139,
        "end": 155,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 141,
            "end": 153,
            "argument": {
              "type": "Literal",
              "start": 148,
              "end": 152,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 133,
        "end": 138,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 135,
          "end": 138
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 164,
      "expression": {
        "type": "JSXElement",
        "start": 156,
        "end": 164,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 156,
          "end": 164,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 157,
            "end": 161,
            "name": "Fact"
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
      "type": "FunctionDeclaration",
      "start": 175,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
        "name": "Fnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 198,
        "end": 212,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 200,
            "end": 210,
            "argument": {
              "type": "Literal",
              "start": 207,
              "end": 209,
              "value": 42,
              "raw": "42"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 198,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 192,
          "end": 198
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 221,
      "expression": {
        "type": "JSXElement",
        "start": 213,
        "end": 221,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 213,
          "end": 221,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 214,
            "end": 218,
            "name": "Fnum"
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
      "type": "TSInterfaceDeclaration",
      "start": 223,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 237,
        "name": "Obj1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 238,
        "end": 266,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 241,
            "end": 251,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 250,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 248,
                "end": 250,
                "members": []
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 253,
            "end": 264,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 263,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 257,
                "end": 263
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 281,
            "name": "Obj1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 277,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 281,
                  "name": "Obj1",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 283,
      "end": 292,
      "expression": {
        "type": "JSXElement",
        "start": 283,
        "end": 291,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 283,
          "end": 291,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 284,
            "end": 288,
            "name": "Obj1"
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
      "type": "TSInterfaceDeclaration",
      "start": 329,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 343,
        "name": "Obj2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 344,
        "end": 360,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 347,
            "end": 358,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 357,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 351,
                "end": 357
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 375,
            "name": "Obj2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 371,
                "end": 375,
                "typeName": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 375,
                  "name": "Obj2",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 377,
      "end": 386,
      "expression": {
        "type": "JSXElement",
        "start": 377,
        "end": 385,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 377,
          "end": 385,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 378,
            "end": 382,
            "name": "Obj2"
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
      "type": "TSInterfaceDeclaration",
      "start": 397,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 411,
        "name": "Obj3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 412,
        "end": 415,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 430,
            "name": "Obj3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 424,
              "end": 430,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 426,
                "end": 430,
                "typeName": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 430,
                  "name": "Obj3",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 432,
      "end": 441,
      "expression": {
        "type": "JSXElement",
        "start": 432,
        "end": 440,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 432,
          "end": 440,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 433,
            "end": 437,
            "name": "Obj3"
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
