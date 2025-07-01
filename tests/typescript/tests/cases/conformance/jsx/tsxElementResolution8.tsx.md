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
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 73,
              "end": 76
            },
            "declare": false,
            "start": 45,
            "end": 76
          }
        ],
        "start": 19,
        "end": 78
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 78
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
            "name": "Div",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 96
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 99,
            "end": 100
          },
          "definite": false,
          "start": 93,
          "end": 100
        }
      ],
      "declare": false,
      "start": 89,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Div",
            "start": 103,
            "end": 106
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 102,
          "end": 109
        },
        "children": [],
        "closingElement": null,
        "start": 102,
        "end": 109
      },
      "directive": null,
      "start": 102,
      "end": 110
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fact",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 131
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 135,
          "end": 138
        },
        "start": 133,
        "end": 138
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 148,
              "end": 152
            },
            "start": 141,
            "end": 153
          }
        ],
        "start": 139,
        "end": 155
      },
      "expression": false,
      "start": 118,
      "end": 155
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Fact",
            "start": 157,
            "end": 161
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 156,
          "end": 164
        },
        "children": [],
        "closingElement": null,
        "start": 156,
        "end": 164
      },
      "directive": null,
      "start": 156,
      "end": 164
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 188
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 192,
          "end": 198
        },
        "start": 190,
        "end": 198
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 207,
              "end": 209
            },
            "start": 200,
            "end": 210
          }
        ],
        "start": 198,
        "end": 212
      },
      "expression": false,
      "start": 175,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Fnum",
            "start": 214,
            "end": 218
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 213,
          "end": 221
        },
        "children": [],
        "closingElement": null,
        "start": 213,
        "end": 221
      },
      "directive": null,
      "start": 213,
      "end": 221
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 237
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 248,
                "end": 250
              },
              "start": 246,
              "end": 250
            },
            "start": 241,
            "end": 251
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 257,
                "end": 263
              },
              "start": 255,
              "end": 263
            },
            "start": 253,
            "end": 264
          }
        ],
        "start": 238,
        "end": 266
      },
      "declare": false,
      "start": 223,
      "end": 266
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
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 281
                },
                "typeArguments": null,
                "start": 277,
                "end": 281
              },
              "start": 275,
              "end": 281
            },
            "start": 271,
            "end": 281
          },
          "init": null,
          "definite": false,
          "start": 271,
          "end": 281
        }
      ],
      "declare": false,
      "start": 267,
      "end": 282
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
            "start": 284,
            "end": 288
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 283,
          "end": 291
        },
        "children": [],
        "closingElement": null,
        "start": 283,
        "end": 291
      },
      "directive": null,
      "start": 283,
      "end": 292
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 343
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 351,
                "end": 357
              },
              "start": 349,
              "end": 357
            },
            "start": 347,
            "end": 358
          }
        ],
        "start": 344,
        "end": 360
      },
      "declare": false,
      "start": 329,
      "end": 360
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
                  "name": "Obj2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 375
                },
                "typeArguments": null,
                "start": 371,
                "end": 375
              },
              "start": 369,
              "end": 375
            },
            "start": 365,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 365,
          "end": 375
        }
      ],
      "declare": false,
      "start": 361,
      "end": 376
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
            "start": 378,
            "end": 382
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 377,
          "end": 385
        },
        "children": [],
        "closingElement": null,
        "start": 377,
        "end": 385
      },
      "directive": null,
      "start": 377,
      "end": 386
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 411
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 412,
        "end": 415
      },
      "declare": false,
      "start": 397,
      "end": 415
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
            "name": "Obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 430
                },
                "typeArguments": null,
                "start": 426,
                "end": 430
              },
              "start": 424,
              "end": 430
            },
            "start": 420,
            "end": 430
          },
          "init": null,
          "definite": false,
          "start": 420,
          "end": 430
        }
      ],
      "declare": false,
      "start": 416,
      "end": 431
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj3",
            "start": 433,
            "end": 437
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 432,
          "end": 440
        },
        "children": [],
        "closingElement": null,
        "start": 432,
        "end": 440
      },
      "directive": null,
      "start": 432,
      "end": 441
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 450
}
```
