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
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 105,
          "decorators": [],
          "name": "wrappedProps",
          "optional": false,
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
                "decorators": [],
                "name": "P",
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
        "start": 107,
        "end": 501,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 113,
            "end": 179,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 117,
                "end": 178,
                "id": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 122,
                  "decorators": [],
                  "name": "MySFC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 125,
                  "end": 178,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 134,
                      "end": 142,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
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
                            "decorators": [],
                            "name": "P",
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
                          "children": [
                            {
                              "type": "JSXText",
                              "start": 163,
                              "end": 168,
                              "value": "hello",
                              "raw": "hello"
                            }
                          ],
                          "closingFragment": {
                            "type": "JSXClosingFragment",
                            "start": 168,
                            "end": 171
                          }
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 184,
            "end": 296,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 190,
              "end": 201,
              "decorators": [],
              "name": "MyComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "MemberExpression",
              "start": 210,
              "end": 225,
              "object": {
                "type": "Identifier",
                "start": 210,
                "end": 215,
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 216,
                "end": 225,
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
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 229,
              "end": 296,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 239,
                  "end": 290,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 245,
                    "decorators": [],
                    "name": "render",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 245,
                    "end": 290,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "children": [
                              {
                                "type": "JSXText",
                                "start": 271,
                                "end": 276,
                                "value": "hello",
                                "raw": "hello"
                              }
                            ],
                            "closingFragment": {
                              "type": "JSXClosingFragment",
                              "start": 276,
                              "end": 279
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
          {
            "type": "VariableDeclaration",
            "start": 301,
            "end": 319,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 305,
                "end": 318,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 306,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 309,
                  "end": 318,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 309,
                    "end": 318,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 310,
                      "end": 315,
                      "name": "MySFC"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true
                  },
                  "children": [],
                  "closingElement": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 341,
            "end": 365,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 345,
                "end": 364,
                "id": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 349,
                  "end": 364,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 349,
                    "end": 364,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 350,
                      "end": 361,
                      "name": "MyComponent"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true
                  },
                  "children": [],
                  "closingElement": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 388,
            "end": 423,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 392,
                "end": 423,
                "id": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 396,
                  "end": 423,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 396,
                    "end": 423,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 397,
                      "end": 402,
                      "name": "MySFC"
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 403,
                        "end": 420,
                        "argument": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 419,
                          "decorators": [],
                          "name": "wrappedProps",
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
          },
          {
            "type": "VariableDeclaration",
            "start": 443,
            "end": 484,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 447,
                "end": 484,
                "id": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "JSXElement",
                  "start": 451,
                  "end": 484,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 451,
                    "end": 484,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 452,
                      "end": 463,
                      "name": "MyComponent"
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "start": 464,
                        "end": 481,
                        "argument": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 480,
                          "decorators": [],
                          "name": "wrappedProps",
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
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
