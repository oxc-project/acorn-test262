__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 98
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "button",
                    "raw": "'button'",
                    "start": 109,
                    "end": 117
                  },
                  "start": 109,
                  "end": 117
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 120,
                    "end": 123
                  },
                  "start": 120,
                  "end": 123
                }
              ],
              "start": 109,
              "end": 123
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 123
          }
        ],
        "start": 98,
        "end": 124
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 141
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 145
                          },
                          "typeArguments": null,
                          "start": 144,
                          "end": 145
                        },
                        "start": 142,
                        "end": 145
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 134,
                      "end": 145
                    }
                  ],
                  "start": 132,
                  "end": 147
                },
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 153
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IntrinsicElements",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 171
                      },
                      "start": 150,
                      "end": 171
                    },
                    "typeArguments": null,
                    "start": 150,
                    "end": 171
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 173
                    },
                    "typeArguments": null,
                    "start": 172,
                    "end": 173
                  },
                  "start": 150,
                  "end": 174
                }
              ],
              "start": 132,
              "end": 174
            },
            "start": 130,
            "end": 174
          },
          "start": 125,
          "end": 174
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 180
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 188
            },
            "start": 177,
            "end": 188
          },
          "typeArguments": null,
          "start": 177,
          "end": 188
        },
        "start": 175,
        "end": 188
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 286,
                  "end": 289
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 285,
                "end": 292
              },
              "children": [],
              "closingElement": null,
              "start": 285,
              "end": 292
            },
            "start": 278,
            "end": 292
          }
        ],
        "start": 189,
        "end": 294
      },
      "expression": false,
      "start": 76,
      "end": 294
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 309
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "button",
                    "raw": "'button'",
                    "start": 320,
                    "end": 328
                  },
                  "start": 320,
                  "end": 328
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 331,
                    "end": 334
                  },
                  "start": 331,
                  "end": 334
                }
              ],
              "start": 320,
              "end": 334
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 310,
            "end": 334
          }
        ],
        "start": 309,
        "end": 335
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "el",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 341
              },
              "typeArguments": null,
              "start": 340,
              "end": 341
            },
            "start": 338,
            "end": 341
          },
          "start": 336,
          "end": 341
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "SomeComponent",
                  "start": 357,
                  "end": 370
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "element",
                      "start": 371,
                      "end": 378
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "el",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 382
                      },
                      "start": 379,
                      "end": 383
                    },
                    "start": 371,
                    "end": 383
                  }
                ],
                "selfClosing": true,
                "start": 356,
                "end": 386
              },
              "children": [],
              "closingElement": null,
              "start": 356,
              "end": 386
            },
            "start": 349,
            "end": 386
          }
        ],
        "start": 343,
        "end": 388
      },
      "expression": false,
      "start": 296,
      "end": 388
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 388
}
```
