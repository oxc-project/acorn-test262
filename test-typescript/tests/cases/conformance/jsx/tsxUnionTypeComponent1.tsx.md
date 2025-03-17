__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 538,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 58,
        "name": "ComponentProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 139,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 137,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 77,
              "name": "AnyComponent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 136,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 79,
                "end": 136,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 79,
                    "end": 108,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 79,
                      "end": 103,
                      "left": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 84,
                        "name": "React",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 103,
                        "name": "StatelessComponent",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 103,
                      "end": 108,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 104,
                          "end": 107
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 111,
                    "end": 136,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 111,
                      "end": 131,
                      "left": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 116,
                        "name": "React",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 131,
                        "name": "ComponentClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 131,
                      "end": 136,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 132,
                          "end": 135
                        }
                      ]
                    }
                  }
                ]
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
      "type": "ClassDeclaration",
      "start": 141,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 158,
        "name": "MyComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 167,
        "end": 182,
        "object": {
          "type": "Identifier",
          "start": 167,
          "end": 172,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 173,
          "end": 182,
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
        "start": 203,
        "end": 307,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 305,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 215,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 305,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 305,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 228,
                    "end": 264,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 234,
                        "end": 263,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 234,
                          "end": 250,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 236,
                              "end": 248,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 248,
                                "name": "AnyComponent",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 248,
                                "name": "AnyComponent",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 253,
                          "end": 263,
                          "object": {
                            "type": "ThisExpression",
                            "start": 253,
                            "end": 257
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 263,
                            "name": "props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 273,
                    "end": 299,
                    "argument": {
                      "type": "JSXElement",
                      "start": 281,
                      "end": 297,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 281,
                        "end": 297,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 282,
                          "end": 294,
                          "name": "AnyComponent"
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
        "start": 182,
        "end": 202,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 183,
            "end": 197,
            "typeName": {
              "type": "Identifier",
              "start": 183,
              "end": 197,
              "name": "ComponentProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 199,
            "end": 201,
            "members": []
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 341,
      "end": 398,
      "expression": {
        "type": "JSXElement",
        "start": 341,
        "end": 398,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 341,
          "end": 398,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 354,
              "end": 396,
              "name": {
                "type": "JSXIdentifier",
                "start": 354,
                "end": 366,
                "name": "AnyComponent"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 367,
                "end": 396,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 368,
                  "end": 395,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "JSXElement",
                    "start": 374,
                    "end": 395,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 374,
                      "end": 382,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 375,
                        "end": 381,
                        "name": "button"
                      },
                      "selfClosing": false,
                      "typeArguments": null
                    },
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 386,
                      "end": 395,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 388,
                        "end": 394,
                        "name": "button"
                      }
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 382,
                        "end": 386,
                        "value": "test",
                        "raw": "test"
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 342,
            "end": 353,
            "name": "MyComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 428,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 451,
        "name": "MyButtonComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 460,
        "end": 475,
        "object": {
          "type": "Identifier",
          "start": 460,
          "end": 465,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 466,
          "end": 475,
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
        "start": 483,
        "end": 486,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 475,
        "end": 482,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 476,
            "end": 478,
            "members": []
          },
          {
            "type": "TSTypeLiteral",
            "start": 479,
            "end": 481,
            "members": []
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 488,
      "end": 536,
      "expression": {
        "type": "JSXElement",
        "start": 488,
        "end": 536,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 488,
          "end": 536,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 501,
              "end": 533,
              "name": {
                "type": "JSXIdentifier",
                "start": 501,
                "end": 513,
                "name": "AnyComponent"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 514,
                "end": 533,
                "expression": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 532,
                  "name": "MyButtonComponent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 489,
            "end": 500,
            "name": "MyComponent"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
