__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 372,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "Element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                    "name": "ElementAttributesProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
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
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 154,
            "name": "React",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 154,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 151,
                "end": 154
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "id": {
          "type": "Identifier",
          "start": 170,
          "end": 175,
          "name": "Empty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "MemberExpression",
          "start": 184,
          "end": 199,
          "object": {
            "type": "Identifier",
            "start": 184,
            "end": 189,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 208,
          "end": 265,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 214,
              "end": 263,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 214,
                "end": 220,
                "name": "render",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 220,
                "end": 263,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "attributes": [],
                          "name": {
                            "type": "JSXIdentifier",
                            "start": 241,
                            "end": 244,
                            "name": "div"
                          },
                          "selfClosing": false,
                          "typeArguments": null
                        },
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
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "start": 245,
                            "end": 250,
                            "value": "Hello",
                            "raw": "Hello"
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
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
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 323,
            "name": "obj",
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 349,
            "name": "unionedSpread",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 352,
            "end": 370,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 352,
              "end": 370,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 359,
                  "end": 367,
                  "argument": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 366,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 353,
                "end": 358,
                "name": "Empty"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
