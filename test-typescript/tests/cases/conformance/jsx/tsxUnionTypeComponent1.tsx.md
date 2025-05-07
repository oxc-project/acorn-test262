__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 537,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 139,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 139,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 137,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 77,
              "decorators": [],
              "name": "AnyComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 79,
                      "end": 103,
                      "left": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 84,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 103,
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 111,
                    "end": 136,
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
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 111,
                      "end": 131,
                      "left": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 116,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 131,
                        "decorators": [],
                        "name": "ComponentClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 58,
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 141,
      "end": 307,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 307,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 305,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 215,
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
              "start": 215,
              "end": 305,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 234,
                          "end": 250,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 236,
                              "end": 248,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 248,
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 248,
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 253,
                          "end": 263,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 253,
                            "end": 257
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 258,
                            "end": 263,
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 273,
                    "end": 299,
                    "argument": {
                      "type": "JSXElement",
                      "start": 281,
                      "end": 297,
                      "children": [],
                      "closingElement": null,
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
        "start": 147,
        "end": 158,
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 167,
        "end": 182,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 167,
          "end": 172,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 173,
          "end": 182,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 182,
        "end": 202,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 183,
            "end": 197,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 183,
              "end": 197,
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 199,
            "end": 201,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 341,
      "end": 398,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 341,
        "end": 398,
        "children": [],
        "closingElement": null,
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
                  "async": false,
                  "body": {
                    "type": "JSXElement",
                    "start": 374,
                    "end": 395,
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 382,
                        "end": 386,
                        "raw": "test",
                        "value": "test"
                      }
                    ],
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
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 428,
      "end": 486,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 483,
        "end": 486,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 451,
        "decorators": [],
        "name": "MyButtonComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 460,
        "end": 475,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 460,
          "end": 465,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 466,
          "end": 475,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
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
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 488,
      "end": 536,
      "directive": null,
      "expression": {
        "type": "JSXElement",
        "start": 488,
        "end": 536,
        "children": [],
        "closingElement": null,
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
                  "decorators": [],
                  "name": "MyButtonComponent",
                  "optional": false,
                  "typeAnnotation": null
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
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
