__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 411,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 55,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "decorators": [],
        "name": "AttributeValue",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 22,
        "end": 54,
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
            "start": 40,
            "end": 44,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 40,
              "end": 44,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSBooleanKeyword",
            "start": 47,
            "end": 54
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 115,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 115,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 83,
            "end": 113,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 95,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 87,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 112,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 112,
                  "decorators": [],
                  "name": "AttributeValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 76,
        "decorators": [],
        "name": "Attributes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 232,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 232,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 218,
            "end": 230,
            "argument": {
              "type": "Identifier",
              "start": 225,
              "end": 229,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 138,
        "decorators": [],
        "name": "createElement",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 139,
          "end": 151,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 151,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 145,
              "end": 151
            }
          }
        },
        {
          "type": "Identifier",
          "start": 153,
          "end": 187,
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 163,
            "end": 187,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 165,
              "end": 187,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 165,
                  "end": 175,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 175,
                    "decorators": [],
                    "name": "Attributes",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 178,
                  "end": 187
                }
              ]
            }
          }
        },
        {
          "type": "RestElement",
          "start": 189,
          "end": 210,
          "argument": {
            "type": "Identifier",
            "start": 192,
            "end": 200,
            "decorators": [],
            "name": "contents",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 200,
            "end": 210,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 202,
              "end": 210,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 202,
                "end": 208
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 233,
      "end": 291,
      "body": {
        "type": "TSModuleBlock",
        "start": 261,
        "end": 291,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 267,
            "end": 289,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 272,
              "end": 279,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 282,
              "end": 288
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 243,
        "end": 260,
        "left": {
          "type": "Identifier",
          "start": 243,
          "end": 256,
          "decorators": [],
          "name": "createElement",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 257,
          "end": 260,
          "decorators": [],
          "name": "JSX",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "namespace"
    },
    {
      "type": "FunctionDeclaration",
      "start": 293,
      "end": 383,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 365,
        "end": 383,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 371,
            "end": 381,
            "argument": {
              "type": "Literal",
              "start": 378,
              "end": 380,
              "raw": "''",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 308,
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 309,
          "end": 343,
          "decorators": [],
          "name": "attributes",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 319,
            "end": 343,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 321,
              "end": 343,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 321,
                  "end": 331,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 331,
                    "decorators": [],
                    "name": "Attributes",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 334,
                  "end": 343
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 345,
          "end": 363,
          "decorators": [],
          "name": "contents",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 353,
            "end": 363,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 355,
              "end": 363,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 355,
                "end": 361
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 384,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 411,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 394,
            "end": 411,
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 402,
              "end": 411,
              "name": {
                "type": "JSXIdentifier",
                "start": 404,
                "end": 410,
                "name": "Button"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 394,
              "end": 402,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 395,
                "end": 401,
                "name": "Button"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
