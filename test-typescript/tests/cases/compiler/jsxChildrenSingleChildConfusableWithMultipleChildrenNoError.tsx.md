__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 457,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "raw": "'react'",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 113,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "decorators": [],
        "name": "Tab",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 88,
        "end": 113,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 89,
            "end": 95
          },
          {
            "type": "TSTypeReference",
            "start": 97,
            "end": 112,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 97,
              "end": 112,
              "left": {
                "type": "Identifier",
                "start": 97,
                "end": 102,
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 112,
                "decorators": [],
                "name": "ReactNode",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 141,
      "end": 180,
      "body": {
        "type": "TSInterfaceBody",
        "start": 157,
        "end": 180,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 163,
            "end": 178,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 171,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 178,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 173,
                "end": 178,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 173,
                  "end": 176,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 176,
                    "decorators": [],
                    "name": "Tab",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 151,
        "end": 156,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 236,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 215,
        "end": 236,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 221,
            "end": 234,
            "argument": {
              "type": "JSXElement",
              "start": 228,
              "end": 234,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 228,
                "end": 234,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 229,
                  "end": 232,
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
        "start": 191,
        "end": 200,
        "decorators": [],
        "name": "TabLayout",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 201,
          "end": 213,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 206,
            "end": 213,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 213,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 213,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 238,
      "end": 457,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 245,
        "end": 457,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 283,
          "end": 457,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 289,
              "end": 455,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 289,
                "end": 295,
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 295,
                "end": 455,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 298,
                  "end": 455,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 308,
                      "end": 449,
                      "argument": {
                        "type": "JSXElement",
                        "start": 315,
                        "end": 449,
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 326,
                            "end": 339,
                            "raw": "\n            ",
                            "value": "\n            "
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "start": 339,
                            "end": 428,
                            "expression": {
                              "type": "ArrayExpression",
                              "start": 340,
                              "end": 427,
                              "elements": [
                                {
                                  "type": "ArrayExpression",
                                  "start": 358,
                                  "end": 375,
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "start": 359,
                                      "end": 366,
                                      "raw": "'Users'",
                                      "value": "Users",
                                      "regex": null,
                                      "bigint": null
                                    },
                                    {
                                      "type": "JSXElement",
                                      "start": 368,
                                      "end": 374,
                                      "children": [],
                                      "closingElement": null,
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "start": 368,
                                        "end": 374,
                                        "attributes": [],
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "start": 369,
                                          "end": 372,
                                          "name": "div"
                                        },
                                        "selfClosing": true,
                                        "typeArguments": null
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "ArrayExpression",
                                  "start": 393,
                                  "end": 413,
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "start": 394,
                                      "end": 404,
                                      "raw": "'Products'",
                                      "value": "Products",
                                      "regex": null,
                                      "bigint": null
                                    },
                                    {
                                      "type": "JSXElement",
                                      "start": 406,
                                      "end": 412,
                                      "children": [],
                                      "closingElement": null,
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "start": 406,
                                        "end": 412,
                                        "attributes": [],
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "start": 407,
                                          "end": 410,
                                          "name": "div"
                                        },
                                        "selfClosing": true,
                                        "typeArguments": null
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "type": "JSXText",
                            "start": 428,
                            "end": 437,
                            "raw": "\n        ",
                            "value": "\n        "
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "start": 437,
                          "end": 449,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 439,
                            "end": 448,
                            "name": "TabLayout"
                          }
                        },
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 315,
                          "end": 326,
                          "attributes": [],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 316,
                            "end": 325,
                            "name": "TabLayout"
                          },
                          "selfClosing": false,
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 251,
          "end": 254,
          "decorators": [],
          "name": "App",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "MemberExpression",
          "start": 263,
          "end": 278,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 263,
            "end": 268,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 269,
            "end": 278,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 278,
          "end": 282,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 279,
              "end": 281,
              "members": []
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
