__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AttributeValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 22,
            "end": 28
          },
          {
            "type": "TSStringKeyword",
            "start": 31,
            "end": 37
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 44
            },
            "typeArguments": null,
            "start": 40,
            "end": 44
          },
          {
            "type": "TSBooleanKeyword",
            "start": 47,
            "end": 54
          }
        ],
        "start": 22,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 76
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  "start": 87,
                  "end": 95
                },
                "start": 84,
                "end": 95
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AttributeValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 112
                },
                "typeArguments": null,
                "start": 98,
                "end": 112
              },
              "start": 96,
              "end": 112
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 83,
            "end": 113
          }
        ],
        "start": 77,
        "end": 115
      },
      "declare": false,
      "start": 56,
      "end": 115
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 138
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 145,
              "end": 151
            },
            "start": 143,
            "end": 151
          },
          "start": 139,
          "end": 151
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Attributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 175
                  },
                  "typeArguments": null,
                  "start": 165,
                  "end": 175
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 178,
                  "end": 187
                }
              ],
              "start": 165,
              "end": 187
            },
            "start": 163,
            "end": 187
          },
          "start": 153,
          "end": 187
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "contents",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 200
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 202,
                "end": 208
              },
              "start": 202,
              "end": 210
            },
            "start": 200,
            "end": 210
          },
          "value": null,
          "start": 189,
          "end": 210
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 229
            },
            "start": 218,
            "end": 230
          }
        ],
        "start": 212,
        "end": 232
      },
      "expression": false,
      "start": 116,
      "end": 232
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "createElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 256
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "JSX",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 260
        },
        "start": 243,
        "end": 260
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 279
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 282,
              "end": 288
            },
            "declare": false,
            "start": 267,
            "end": 289
          }
        ],
        "start": 261,
        "end": 291
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 233,
      "end": 291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 308
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Attributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 331
                  },
                  "typeArguments": null,
                  "start": 321,
                  "end": 331
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 334,
                  "end": 343
                }
              ],
              "start": 321,
              "end": 343
            },
            "start": 319,
            "end": 343
          },
          "start": 309,
          "end": 343
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "contents",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 355,
                "end": 361
              },
              "start": 355,
              "end": 363
            },
            "start": 353,
            "end": 363
          },
          "start": 345,
          "end": 363
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 378,
              "end": 380
            },
            "start": 371,
            "end": 381
          }
        ],
        "start": 365,
        "end": 383
      },
      "expression": false,
      "start": 293,
      "end": 383
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 391
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Button",
                "start": 395,
                "end": 401
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 394,
              "end": 402
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Button",
                "start": 404,
                "end": 410
              },
              "start": 402,
              "end": 411
            },
            "start": 394,
            "end": 411
          },
          "definite": false,
          "start": 390,
          "end": 411
        }
      ],
      "declare": false,
      "start": 384,
      "end": 411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 411
}
```
