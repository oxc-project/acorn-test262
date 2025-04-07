__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 388,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "raw": "\"react\"",
        "value": "react"
      },
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
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 294,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 189,
        "end": 294,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 278,
            "end": 292,
            "argument": {
              "type": "JSXElement",
              "start": 285,
              "end": 292,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 285,
                "end": 292,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 286,
                  "end": 289,
                  "name": "div"
                },
                "selfClosing": true,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 98,
        "decorators": [],
        "name": "SomeComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 125,
          "end": 174,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 174,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 132,
              "end": 174,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 132,
                  "end": 147,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 134,
                      "end": 145,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 141,
                        "decorators": [],
                        "name": "element",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 142,
                        "end": 145,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 144,
                          "end": 145,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSIndexedAccessType",
                  "start": 150,
                  "end": 174,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 173,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 171,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 150,
                      "end": 171,
                      "left": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 153,
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 171,
                        "decorators": [],
                        "name": "IntrinsicElements",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 188,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 177,
            "end": 188,
            "left": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 181,
              "end": 188,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 123,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 109,
              "end": 123,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 109,
                  "end": 117,
                  "literal": {
                    "type": "Literal",
                    "start": 109,
                    "end": 117,
                    "raw": "'button'",
                    "value": "button"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 120,
                  "end": 123,
                  "literal": {
                    "type": "Literal",
                    "start": 120,
                    "end": 123,
                    "raw": "'a'",
                    "value": "a"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 296,
      "end": 388,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 343,
        "end": 388,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 349,
            "end": 386,
            "argument": {
              "type": "JSXElement",
              "start": 356,
              "end": 386,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 356,
                "end": 386,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "start": 371,
                    "end": 383,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 371,
                      "end": 378,
                      "name": "element"
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "start": 379,
                      "end": 383,
                      "expression": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 382,
                        "decorators": [],
                        "name": "el",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 357,
                  "end": 370,
                  "name": "SomeComponent"
                },
                "selfClosing": true,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 309,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 336,
          "end": 341,
          "decorators": [],
          "name": "el",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 341,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 340,
              "end": 341,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 340,
                "end": 341,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 309,
        "end": 335,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 334,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 320,
              "end": 334,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 320,
                  "end": 328,
                  "literal": {
                    "type": "Literal",
                    "start": 320,
                    "end": 328,
                    "raw": "'button'",
                    "value": "button"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 331,
                  "end": 334,
                  "literal": {
                    "type": "Literal",
                    "start": 331,
                    "end": 334,
                    "raw": "'a'",
                    "value": "a"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
