__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 501,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 86,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 105,
          "name": "wrappedProps",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 501,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 113,
            "end": 179,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 117,
                "end": 178,
                "id": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 122,
                  "name": "MySFC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 125,
                  "end": 178,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 134,
                      "end": 142,
                      "name": "props",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 139,
                        "end": 142,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 141,
                          "end": 142,
                          "typeName": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 142,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 144,
                    "end": 178,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 154,
                        "end": 172,
                        "argument": {
                          "type": "JSXFragment",
                          "start": 161,
                          "end": 171,
                          "openingFragment": {
                            "type": "JSXOpeningFragment",
                            "start": 161,
                            "end": 163
                          },
                          "closingFragment": {
                            "type": "JSXClosingFragment",
                            "start": 168,
                            "end": 171
                          },
                          "children": [
                            {
                              "type": "JSXText",
                              "start": 163,
                              "end": 168,
                              "value": "hello",
                              "raw": "hello"
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
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 184,
            "end": 296,
            "id": {
              "type": "Identifier",
              "start": 190,
              "end": 201,
              "name": "MyComponent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "MemberExpression",
              "start": 210,
              "end": 225,
              "object": {
                "type": "Identifier",
                "start": 210,
                "end": 215,
                "name": "React",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 216,
                "end": 225,
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
              "start": 229,
              "end": 296,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 239,
                  "end": 290,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 245,
                    "name": "render",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 245,
                    "end": 290,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 248,
                      "end": 290,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 262,
                          "end": 280,
                          "argument": {
                            "type": "JSXFragment",
                            "start": 269,
                            "end": 279,
                            "openingFragment": {
                              "type": "JSXOpeningFragment",
                              "start": 269,
                              "end": 271
                            },
                            "closingFragment": {
                              "type": "JSXClosingFragment",
                              "start": 276,
                              "end": 279
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "start": 271,
                                "end": 276,
                                "value": "hello",
                                "raw": "hello"
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
              "start": 225,
              "end": 228,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 226,
                  "end": 227,
                  "typeName": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 301,
            "end": 319,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 305,
                "end": 318,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 306,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 309,
                  "end": 318,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 309,
                    "end": 318,
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 310,
                      "end": 315,
                      "name": "MySFC"
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
          },
          {
            "type": "VariableDeclaration",
            "start": 341,
            "end": 365,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 345,
                "end": 364,
                "id": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 349,
                  "end": 364,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 349,
                    "end": 364,
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 350,
                      "end": 361,
                      "name": "MyComponent"
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
          },
          {
            "type": "VariableDeclaration",
            "start": 388,
            "end": 423,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 392,
                "end": 423,
                "id": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 396,
                  "end": 423,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 396,
                    "end": 423,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 403,
                        "end": 420,
                        "argument": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 419,
                          "name": "wrappedProps",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 397,
                      "end": 402,
                      "name": "MySFC"
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
          },
          {
            "type": "VariableDeclaration",
            "start": 443,
            "end": 484,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 447,
                "end": 484,
                "id": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "JSXElement",
                  "start": 451,
                  "end": 484,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 451,
                    "end": 484,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 464,
                        "end": 481,
                        "argument": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 480,
                          "name": "wrappedProps",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 452,
                      "end": 463,
                      "name": "MyComponent"
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
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 86,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 87,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
