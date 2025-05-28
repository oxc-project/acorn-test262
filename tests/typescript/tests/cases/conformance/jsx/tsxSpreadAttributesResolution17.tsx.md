__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 371,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 131,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 21,
            "end": 129,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 35,
              "end": 129,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 45,
                  "end": 65,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 62,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 63,
                    "end": 65,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 74,
                  "end": 123,
                  "id": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 109,
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 110,
                    "end": 123,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 112,
                        "end": 121,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 117,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 117,
                          "end": 121,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 119,
                            "end": 121,
                            "members": []
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 154,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 154,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 151,
                "end": 154
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 157,
      "end": 265,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 164,
        "end": 265,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 170,
          "end": 175,
          "decorators": [],
          "name": "Empty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "MemberExpression",
          "start": 184,
          "end": 199,
          "object": {
            "type": "Identifier",
            "start": 184,
            "end": 189,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
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
          "start": 199,
          "end": 207,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 200,
              "end": 202,
              "members": []
            },
            {
              "type": "TSTypeLiteral",
              "start": 204,
              "end": 206,
              "members": []
            }
          ]
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 208,
          "end": 265,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 214,
              "end": 263,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 214,
                "end": 220,
                "decorators": [],
                "name": "render",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 220,
                "end": 263,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 223,
                  "end": 263,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 233,
                      "end": 257,
                      "argument": {
                        "type": "JSXElement",
                        "start": 240,
                        "end": 256,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "start": 240,
                          "end": 245,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 241,
                            "end": 244,
                            "name": "div"
                          },
                          "typeArguments": null,
                          "attributes": [],
                          "selfClosing": false
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 245,
                            "end": 250,
                            "value": "Hello",
                            "raw": "Hello"
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "start": 250,
                          "end": 256,
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 252,
                            "end": 255,
                            "name": "div"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 324,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 323,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 323,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 286,
                "end": 323,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 286,
                    "end": 311,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 288,
                        "end": 309,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 289,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 289,
                          "end": 309,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 291,
                            "end": 309,
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 291,
                                "end": 297
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 300,
                                "end": 309
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 314,
                    "end": 323
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 371,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 349,
            "decorators": [],
            "name": "unionedSpread",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 352,
            "end": 370,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 352,
              "end": 370,
              "name": {
                "type": "JSXIdentifier",
                "start": 353,
                "end": 358,
                "name": "Empty"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 359,
                  "end": 367,
                  "argument": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 366,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
