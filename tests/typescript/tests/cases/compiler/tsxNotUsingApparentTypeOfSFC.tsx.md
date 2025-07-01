__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 87,
            "end": 88
          }
        ],
        "start": 86,
        "end": 89
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "wrappedProps",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "typeArguments": null,
              "start": 104,
              "end": 105
            },
            "start": 102,
            "end": 105
          },
          "start": 90,
          "end": 105
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MySFC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 122
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": null,
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
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 141,
                            "end": 142
                          },
                          "typeArguments": null,
                          "start": 141,
                          "end": 142
                        },
                        "start": 139,
                        "end": 142
                      },
                      "start": 134,
                      "end": 142
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "JSXFragment",
                          "openingFragment": {
                            "type": "JSXOpeningFragment",
                            "start": 161,
                            "end": 163
                          },
                          "children": [
                            {
                              "type": "JSXText",
                              "value": "hello",
                              "raw": "hello",
                              "start": 163,
                              "end": 168
                            }
                          ],
                          "closingFragment": {
                            "type": "JSXClosingFragment",
                            "start": 168,
                            "end": 171
                          },
                          "start": 161,
                          "end": 171
                        },
                        "start": 154,
                        "end": 172
                      }
                    ],
                    "start": 144,
                    "end": 178
                  },
                  "expression": false,
                  "start": 125,
                  "end": 178
                },
                "definite": false,
                "start": 117,
                "end": 178
              }
            ],
            "declare": false,
            "start": 113,
            "end": 179
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
              "start": 190,
              "end": 201
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
                "start": 210,
                "end": 215
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 225
              },
              "optional": false,
              "computed": false,
              "start": 210,
              "end": 225
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 227
                  },
                  "typeArguments": null,
                  "start": 226,
                  "end": 227
                }
              ],
              "start": 225,
              "end": 228
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
                    "start": 239,
                    "end": 245
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
                            "type": "JSXFragment",
                            "openingFragment": {
                              "type": "JSXOpeningFragment",
                              "start": 269,
                              "end": 271
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "value": "hello",
                                "raw": "hello",
                                "start": 271,
                                "end": 276
                              }
                            ],
                            "closingFragment": {
                              "type": "JSXClosingFragment",
                              "start": 276,
                              "end": 279
                            },
                            "start": 269,
                            "end": 279
                          },
                          "start": 262,
                          "end": 280
                        }
                      ],
                      "start": 248,
                      "end": 290
                    },
                    "expression": false,
                    "start": 245,
                    "end": 290
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 239,
                  "end": 290
                }
              ],
              "start": 229,
              "end": 296
            },
            "abstract": false,
            "declare": false,
            "start": 184,
            "end": 296
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 306
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MySFC",
                      "start": 310,
                      "end": 315
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 309,
                    "end": 318
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 309,
                  "end": 318
                },
                "definite": false,
                "start": 305,
                "end": 318
              }
            ],
            "declare": false,
            "start": 301,
            "end": 319
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 346
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyComponent",
                      "start": 350,
                      "end": 361
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 349,
                    "end": 364
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 349,
                  "end": 364
                },
                "definite": false,
                "start": 345,
                "end": 364
              }
            ],
            "declare": false,
            "start": 341,
            "end": 365
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MySFC",
                      "start": 397,
                      "end": 402
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wrappedProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 407,
                          "end": 419
                        },
                        "start": 403,
                        "end": 420
                      }
                    ],
                    "selfClosing": true,
                    "start": 396,
                    "end": 423
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 396,
                  "end": 423
                },
                "definite": false,
                "start": 392,
                "end": 423
              }
            ],
            "declare": false,
            "start": 388,
            "end": 423
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 448
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "MyComponent",
                      "start": 452,
                      "end": 463
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "wrappedProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 468,
                          "end": 480
                        },
                        "start": 464,
                        "end": 481
                      }
                    ],
                    "selfClosing": true,
                    "start": 451,
                    "end": 484
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 451,
                  "end": 484
                },
                "definite": false,
                "start": 447,
                "end": 484
              }
            ],
            "declare": false,
            "start": 443,
            "end": 484
          }
        ],
        "start": 107,
        "end": 501
      },
      "expression": false,
      "start": 73,
      "end": 501
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 501
}
```
