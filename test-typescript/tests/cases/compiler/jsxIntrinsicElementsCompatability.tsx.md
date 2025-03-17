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
      "start": 76,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 98,
        "name": "SomeComponent",
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
          "start": 125,
          "end": 174,
          "name": "props",
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
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 141,
                        "name": "element",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 142,
                        "end": 145,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 144,
                          "end": 145,
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSIndexedAccessType",
                  "start": 150,
                  "end": 174,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 171,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 150,
                      "end": 171,
                      "left": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 153,
                        "name": "JSX",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 171,
                        "name": "IntrinsicElements",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 173,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 123,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "value": "button",
                    "raw": "'button'"
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
                    "value": "a",
                    "raw": "'a'"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 188,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 177,
          "end": 188,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 177,
            "end": 188,
            "left": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 181,
              "end": 188,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 296,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 309,
        "name": "Test",
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
          "start": 336,
          "end": 341,
          "name": "el",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 341,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 340,
              "end": 341,
              "typeName": {
                "type": "Identifier",
                "start": 340,
                "end": 341,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                        "name": "el",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              },
              "closingElement": null,
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 309,
        "end": 335,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 334,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "value": "button",
                    "raw": "'button'"
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
                    "value": "a",
                    "raw": "'a'"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
