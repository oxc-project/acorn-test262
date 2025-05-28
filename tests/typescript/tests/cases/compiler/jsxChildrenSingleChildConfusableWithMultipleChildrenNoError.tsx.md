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
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "decorators": [],
        "name": "Tab",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 141,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 156,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 157,
        "end": 180,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 163,
            "end": 178,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 171,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 176,
                    "decorators": [],
                    "name": "Tab",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 200,
        "decorators": [],
        "name": "TabLayout",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 213,
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 228,
                "end": 234,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 229,
                  "end": 232,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 238,
      "end": 457,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 245,
        "end": 457,
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
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 263,
          "end": 278,
          "object": {
            "type": "Identifier",
            "start": 263,
            "end": 268,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 269,
            "end": 278,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 283,
          "end": 457,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 289,
              "end": 455,
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
              "value": {
                "type": "FunctionExpression",
                "start": 295,
                "end": 455,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 315,
                          "end": 326,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 316,
                            "end": 325,
                            "name": "TabLayout"
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 326,
                            "end": 339,
                            "value": "\n            ",
                            "raw": "\n            "
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
                                      "value": "Users",
                                      "raw": "'Users'"
                                    },
                                    {
                                      "type": "JSXElement",
                                      "start": 368,
                                      "end": 374,
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "start": 368,
                                        "end": 374,
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "start": 369,
                                          "end": 372,
                                          "name": "div"
                                        },
                                        "typeArguments": null,
                                        "attributes": [],
                                        "selfClosing": true
                                      },
                                      "children": [],
                                      "closingElement": null
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
                                      "value": "Products",
                                      "raw": "'Products'"
                                    },
                                    {
                                      "type": "JSXElement",
                                      "start": 406,
                                      "end": 412,
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "start": 406,
                                        "end": 412,
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "start": 407,
                                          "end": 410,
                                          "name": "div"
                                        },
                                        "typeArguments": null,
                                        "attributes": [],
                                        "selfClosing": true
                                      },
                                      "children": [],
                                      "closingElement": null
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
                            "value": "\n        ",
                            "raw": "\n        "
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
                        }
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
