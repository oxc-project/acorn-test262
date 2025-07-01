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
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tab",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 85
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 89,
            "end": 95
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 102
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactNode",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 112
              },
              "start": 97,
              "end": 112
            },
            "typeArguments": null,
            "start": 97,
            "end": 112
          }
        ],
        "start": 88,
        "end": 113
      },
      "declare": false,
      "start": 77,
      "end": 113
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 156
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tab",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 176
                  },
                  "typeArguments": null,
                  "start": 173,
                  "end": 176
                },
                "start": 173,
                "end": 178
              },
              "start": 171,
              "end": 178
            },
            "accessibility": null,
            "static": false,
            "start": 163,
            "end": 178
          }
        ],
        "start": 157,
        "end": 180
      },
      "declare": false,
      "start": 141,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TabLayout",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 213
              },
              "typeArguments": null,
              "start": 208,
              "end": 213
            },
            "start": 206,
            "end": 213
          },
          "start": 201,
          "end": 213
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
                  "name": "div",
                  "start": 229,
                  "end": 232
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 228,
                "end": 234
              },
              "children": [],
              "closingElement": null,
              "start": 228,
              "end": 234
            },
            "start": 221,
            "end": 234
          }
        ],
        "start": 215,
        "end": 236
      },
      "expression": false,
      "start": 182,
      "end": 236
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "App",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 254
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 268
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 278
          },
          "optional": false,
          "computed": false,
          "start": 263,
          "end": 278
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 279,
              "end": 281
            }
          ],
          "start": 278,
          "end": 282
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 295
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
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
                            "name": "TabLayout",
                            "start": 316,
                            "end": 325
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false,
                          "start": 315,
                          "end": 326
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "value": "\n            ",
                            "raw": "\n            ",
                            "start": 326,
                            "end": 339
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "value": "Users",
                                      "raw": "'Users'",
                                      "start": 359,
                                      "end": 366
                                    },
                                    {
                                      "type": "JSXElement",
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "start": 369,
                                          "end": 372
                                        },
                                        "typeArguments": null,
                                        "attributes": [],
                                        "selfClosing": true,
                                        "start": 368,
                                        "end": 374
                                      },
                                      "children": [],
                                      "closingElement": null,
                                      "start": 368,
                                      "end": 374
                                    }
                                  ],
                                  "start": 358,
                                  "end": 375
                                },
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "value": "Products",
                                      "raw": "'Products'",
                                      "start": 394,
                                      "end": 404
                                    },
                                    {
                                      "type": "JSXElement",
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "start": 407,
                                          "end": 410
                                        },
                                        "typeArguments": null,
                                        "attributes": [],
                                        "selfClosing": true,
                                        "start": 406,
                                        "end": 412
                                      },
                                      "children": [],
                                      "closingElement": null,
                                      "start": 406,
                                      "end": 412
                                    }
                                  ],
                                  "start": 393,
                                  "end": 413
                                }
                              ],
                              "start": 340,
                              "end": 427
                            },
                            "start": 339,
                            "end": 428
                          },
                          {
                            "type": "JSXText",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "start": 428,
                            "end": 437
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TabLayout",
                            "start": 439,
                            "end": 448
                          },
                          "start": 437,
                          "end": 449
                        },
                        "start": 315,
                        "end": 449
                      },
                      "start": 308,
                      "end": 449
                    }
                  ],
                  "start": 298,
                  "end": 455
                },
                "expression": false,
                "start": 295,
                "end": 455
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 289,
              "end": 455
            }
          ],
          "start": 283,
          "end": 457
        },
        "abstract": false,
        "declare": false,
        "start": 245,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 238,
      "end": 457
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 457
}
```
