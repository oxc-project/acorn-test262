__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 58
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
              "name": "AnyComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                        "start": 79,
                        "end": 84
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 103
                      },
                      "start": 79,
                      "end": 103
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 104,
                          "end": 107
                        }
                      ],
                      "start": 103,
                      "end": 108
                    },
                    "start": 79,
                    "end": 108
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
                        "start": 111,
                        "end": 116
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 117,
                        "end": 131
                      },
                      "start": 111,
                      "end": 131
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 132,
                          "end": 135
                        }
                      ],
                      "start": 131,
                      "end": 136
                    },
                    "start": 111,
                    "end": 136
                  }
                ],
                "start": 79,
                "end": 136
              },
              "start": 77,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 137
          }
        ],
        "start": 59,
        "end": 139
      },
      "declare": false,
      "start": 34,
      "end": 139
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 158
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
          "start": 167,
          "end": 172
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 182
        },
        "optional": false,
        "computed": false,
        "start": 167,
        "end": 182
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 197
            },
            "typeArguments": null,
            "start": 183,
            "end": 197
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 199,
            "end": 201
          }
        ],
        "start": 182,
        "end": 202
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
              "start": 209,
              "end": 215
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 236,
                                "end": 248
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AnyComponent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 236,
                                "end": 248
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 236,
                              "end": 248
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 250
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 253,
                            "end": 257
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 258,
                            "end": 263
                          },
                          "optional": false,
                          "computed": false,
                          "start": 253,
                          "end": 263
                        },
                        "definite": false,
                        "start": 234,
                        "end": 263
                      }
                    ],
                    "declare": false,
                    "start": 228,
                    "end": 264
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "AnyComponent",
                          "start": 282,
                          "end": 294
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": true,
                        "start": 281,
                        "end": 297
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 281,
                      "end": 297
                    },
                    "start": 273,
                    "end": 299
                  }
                ],
                "start": 218,
                "end": 305
              },
              "expression": false,
              "start": 215,
              "end": 305
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 209,
            "end": 305
          }
        ],
        "start": 203,
        "end": 307
      },
      "abstract": false,
      "declare": false,
      "start": 141,
      "end": 307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "start": 342,
            "end": 353
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnyComponent",
                "start": 354,
                "end": 366
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 375,
                        "end": 381
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 374,
                      "end": 382
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "test",
                        "raw": "test",
                        "start": 382,
                        "end": 386
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "start": 388,
                        "end": 394
                      },
                      "start": 386,
                      "end": 395
                    },
                    "start": 374,
                    "end": 395
                  },
                  "id": null,
                  "generator": false,
                  "start": 368,
                  "end": 395
                },
                "start": 367,
                "end": 396
              },
              "start": 354,
              "end": 396
            }
          ],
          "selfClosing": true,
          "start": 341,
          "end": 398
        },
        "children": [],
        "closingElement": null,
        "start": 341,
        "end": 398
      },
      "directive": null,
      "start": 341,
      "end": 398
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyButtonComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 451
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
          "start": 460,
          "end": 465
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 475
        },
        "optional": false,
        "computed": false,
        "start": 460,
        "end": 475
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 476,
            "end": 478
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 479,
            "end": 481
          }
        ],
        "start": 475,
        "end": 482
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 483,
        "end": 486
      },
      "abstract": false,
      "declare": false,
      "start": 428,
      "end": 486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComponent",
            "start": 489,
            "end": 500
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnyComponent",
                "start": 501,
                "end": 513
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyButtonComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 532
                },
                "start": 514,
                "end": 533
              },
              "start": 501,
              "end": 533
            }
          ],
          "selfClosing": true,
          "start": 488,
          "end": 536
        },
        "children": [],
        "closingElement": null,
        "start": 488,
        "end": 536
      },
      "directive": null,
      "start": 488,
      "end": 536
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 537
}
```
