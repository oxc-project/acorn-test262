__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 330,
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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 69,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 46,
            "end": 68,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 57,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 54,
                    "end": 57
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 62,
              "end": 68,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 62,
                "end": 68,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 63,
                  "end": 66,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true
              },
              "children": [],
              "closingElement": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 98,
            "end": 105,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 98,
              "end": 105,
              "name": {
                "type": "JSXIdentifier",
                "start": 99,
                "end": 102,
                "name": "Foo"
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
      "start": 125,
      "end": 219,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 167,
            "decorators": [],
            "name": "MainMenu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 167,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 139,
                  "end": 163,
                  "left": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 144,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 163,
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 163,
                  "end": 167,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 164,
                      "end": 166,
                      "members": []
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 170,
            "end": 218,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 176,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 182,
              "end": 217,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 182,
                "end": 187,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 183,
                  "end": 186,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 187,
                  "end": 192,
                  "value": "\n    ",
                  "raw": "\n    "
                },
                {
                  "type": "JSXElement",
                  "start": 192,
                  "end": 210,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 192,
                    "end": 196,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 193,
                      "end": 195,
                      "name": "h3"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 196,
                      "end": 205,
                      "value": "Main Menu",
                      "raw": "Main Menu"
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "start": 205,
                    "end": 210,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 207,
                      "end": 209,
                      "name": "h3"
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "start": 210,
                  "end": 211,
                  "value": "\n",
                  "raw": "\n"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 211,
                "end": 217,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 213,
                  "end": 216,
                  "name": "div"
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 330,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 268,
            "decorators": [],
            "name": "App",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 230,
                "end": 268,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 230,
                  "end": 254,
                  "left": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 235,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 254,
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 254,
                  "end": 268,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 255,
                      "end": 267,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 257,
                          "end": 265,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 265,
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": null,
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 271,
            "end": 329,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 272,
                "end": 282,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 273,
                    "end": 281,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 281,
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 281,
                      "decorators": [],
                      "name": "children",
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
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "start": 293,
              "end": 327,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 293,
                "end": 299,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 294,
                  "end": 297,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 299,
                  "end": 308,
                  "value": "\n        ",
                  "raw": "\n        "
                },
                {
                  "type": "JSXElement",
                  "start": 308,
                  "end": 319,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 308,
                    "end": 319,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 309,
                      "end": 317,
                      "name": "MainMenu"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true
                  },
                  "children": [],
                  "closingElement": null
                },
                {
                  "type": "JSXText",
                  "start": 319,
                  "end": 321,
                  "value": "\n\t",
                  "raw": "\n\t"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 321,
                "end": 327,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 323,
                  "end": 326,
                  "name": "div"
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
