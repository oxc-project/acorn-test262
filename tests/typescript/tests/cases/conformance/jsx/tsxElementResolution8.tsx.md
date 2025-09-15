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
        "start": 18,
        "end": 21
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
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 76,
              "end": 79
            },
            "declare": false,
            "start": 48,
            "end": 79
          }
        ],
        "start": 22,
        "end": 81
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 81
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
            "start": 96,
            "end": 99
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 102,
            "end": 103
          },
          "definite": false,
          "start": 96,
          "end": 103
        }
      ],
      "declare": false,
      "start": 92,
      "end": 104
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
            "start": 106,
            "end": 109
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 105,
          "end": 112
        },
        "children": [],
        "closingElement": null,
        "start": 105,
        "end": 112
      },
      "directive": null,
      "start": 105,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fact",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 134
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
          "start": 138,
          "end": 141
        },
        "start": 136,
        "end": 141
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
              "start": 151,
              "end": 155
            },
            "start": 144,
            "end": 156
          }
        ],
        "start": 142,
        "end": 158
      },
      "expression": false,
      "start": 121,
      "end": 158
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
            "start": 160,
            "end": 164
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 159,
          "end": 167
        },
        "children": [],
        "closingElement": null,
        "start": 159,
        "end": 167
      },
      "directive": null,
      "start": 159,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 191
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
          "start": 195,
          "end": 201
        },
        "start": 193,
        "end": 201
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
              "start": 210,
              "end": 212
            },
            "start": 203,
            "end": 213
          }
        ],
        "start": 201,
        "end": 215
      },
      "expression": false,
      "start": 178,
      "end": 215
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
            "start": 217,
            "end": 221
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 216,
          "end": 224
        },
        "children": [],
        "closingElement": null,
        "start": 216,
        "end": 224
      },
      "directive": null,
      "start": 216,
      "end": 224
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 240
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
                "start": 251,
                "end": 253
              },
              "start": 249,
              "end": 253
            },
            "start": 244,
            "end": 254
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 260,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "start": 256,
            "end": 267
          }
        ],
        "start": 241,
        "end": 269
      },
      "declare": false,
      "start": 226,
      "end": 269
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
                  "start": 280,
                  "end": 284
                },
                "typeArguments": null,
                "start": 280,
                "end": 284
              },
              "start": 278,
              "end": 284
            },
            "start": 274,
            "end": 284
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 284
        }
      ],
      "declare": false,
      "start": 270,
      "end": 285
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
            "start": 287,
            "end": 291
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 286,
          "end": 294
        },
        "children": [],
        "closingElement": null,
        "start": 286,
        "end": 294
      },
      "directive": null,
      "start": 286,
      "end": 295
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 346
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
                "start": 354,
                "end": 360
              },
              "start": 352,
              "end": 360
            },
            "start": 350,
            "end": 361
          }
        ],
        "start": 347,
        "end": 363
      },
      "declare": false,
      "start": 332,
      "end": 363
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
                  "start": 374,
                  "end": 378
                },
                "typeArguments": null,
                "start": 374,
                "end": 378
              },
              "start": 372,
              "end": 378
            },
            "start": 368,
            "end": 378
          },
          "init": null,
          "definite": false,
          "start": 368,
          "end": 378
        }
      ],
      "declare": false,
      "start": 364,
      "end": 379
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
            "start": 381,
            "end": 385
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 380,
          "end": 388
        },
        "children": [],
        "closingElement": null,
        "start": 380,
        "end": 388
      },
      "directive": null,
      "start": 380,
      "end": 389
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 414
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 415,
        "end": 418
      },
      "declare": false,
      "start": 400,
      "end": 418
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
                  "start": 429,
                  "end": 433
                },
                "typeArguments": null,
                "start": 429,
                "end": 433
              },
              "start": 427,
              "end": 433
            },
            "start": 423,
            "end": 433
          },
          "init": null,
          "definite": false,
          "start": 423,
          "end": 433
        }
      ],
      "declare": false,
      "start": 419,
      "end": 434
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
            "start": 436,
            "end": 440
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 435,
          "end": 443
        },
        "children": [],
        "closingElement": null,
        "start": 435,
        "end": 443
      },
      "directive": null,
      "start": 435,
      "end": 444
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 453
}
```
