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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 46,
            "end": 68,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 57,
                "name": "props",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 52,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 54,
                    "end": 57
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 62,
              "end": 68,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 62,
                "end": 68,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 63,
                  "end": 66,
                  "name": "div"
                },
                "selfClosing": true,
                "typeArguments": null
              },
              "closingElement": null,
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 98,
            "end": 105,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 98,
              "end": 105,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 99,
                "end": 102,
                "name": "Foo"
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 167,
            "name": "MainMenu",
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
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 163,
                    "name": "StatelessComponent",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 170,
            "end": 218,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 176,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 182,
              "end": 217,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 182,
                "end": 187,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 183,
                  "end": 186,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 193,
                      "end": 195,
                      "name": "h3"
                    },
                    "selfClosing": false,
                    "typeArguments": null
                  },
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
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 196,
                      "end": 205,
                      "value": "Main Menu",
                      "raw": "Main Menu"
                    }
                  ]
                },
                {
                  "type": "JSXText",
                  "start": 210,
                  "end": 211,
                  "value": "\n",
                  "raw": "\n"
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 268,
            "name": "App",
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
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 254,
                    "name": "StatelessComponent",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 271,
            "end": 329,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 272,
                "end": 282,
                "properties": [
                  {
                    "type": "Property",
                    "start": 273,
                    "end": 281,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 281,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 281,
                      "name": "children",
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
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 293,
              "end": 327,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 293,
                "end": 299,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 294,
                  "end": 297,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                    "attributes": [],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 309,
                      "end": 317,
                      "name": "MainMenu"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                {
                  "type": "JSXText",
                  "start": 319,
                  "end": 321,
                  "value": "\n\t",
                  "raw": "\n\t"
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
