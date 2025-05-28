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
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "AnyComponent",
              "optional": false,
              "typeAnnotation": null
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 167,
        "end": 182,
        "object": {
          "type": "Identifier",
          "start": 167,
          "end": 172,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 173,
          "end": 182,
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
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "typeAnnotation": null
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
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 307,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 305,
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
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 305,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 305,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 228,
                    "end": 264,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 234,
                        "end": 263,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 234,
                          "end": 250,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 236,
                              "end": 248,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 248,
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 248,
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            }
                          ],
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
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
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
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 282,
                          "end": 294,
                          "name": "AnyComponent"
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
          "name": {
            "type": "JSXIdentifier",
            "start": 342,
            "end": 353,
            "name": "MyComponent"
          },
          "typeArguments": null,
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
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "start": 374,
                    "end": 395,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 374,
                      "end": 382,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 375,
                        "end": 381,
                        "name": "button"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "start": 382,
                        "end": 386,
                        "value": "test",
                        "raw": "test"
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
                    }
                  },
                  "id": null,
                  "generator": false
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 428,
      "end": 486,
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 460,
        "end": 475,
        "object": {
          "type": "Identifier",
          "start": 460,
          "end": 465,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 466,
          "end": 475,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 483,
        "end": 486,
        "body": []
      },
      "abstract": false,
      "declare": false
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
          "name": {
            "type": "JSXIdentifier",
            "start": 489,
            "end": 500,
            "name": "MyComponent"
          },
          "typeArguments": null,
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
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
