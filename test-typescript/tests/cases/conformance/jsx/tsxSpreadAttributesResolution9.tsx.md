file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 391,
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
        "optional": false
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
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 84,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 84,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 61,
            "end": 66,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 66,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 65,
                "end": 66,
                "literal": {
                  "type": "Literal",
                  "start": 65,
                  "end": 66,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 82,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 82,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 75,
                "end": 82
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
        "end": 54,
        "decorators": [],
        "name": "OptionProp",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 193,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 193,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 191,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 191,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 191,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 161,
                    "end": 185,
                    "argument": {
                      "type": "JSXElement",
                      "start": 168,
                      "end": 184,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 173,
                          "end": 178,
                          "raw": "Hello",
                          "value": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 178,
                        "end": 184,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 180,
                          "end": 183,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 168,
                        "end": 173,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 169,
                          "end": 172,
                          "name": "div"
                        },
                        "selfClosing": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "Opt",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 104,
        "end": 119,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 119,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 119,
        "end": 135,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 120,
            "end": 130,
            "typeName": {
              "type": "Identifier",
              "start": 120,
              "end": 130,
              "decorators": [],
              "name": "OptionProp",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 132,
            "end": 134,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 216,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 216,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 216,
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 219,
            "end": 221,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 260,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 245,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 245,
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 248,
            "end": 260,
            "properties": [
              {
                "type": "Property",
                "start": 254,
                "end": 258,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 257,
                  "end": 258,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 276,
            "end": 283,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 276,
              "end": 283,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 277,
                "end": 280,
                "name": "Opt"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 309,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 293,
            "end": 309,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 293,
              "end": 309,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 298,
                  "end": 306,
                  "argument": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 305,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 294,
                "end": 297,
                "name": "Opt"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 320,
            "end": 337,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 320,
              "end": 337,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 325,
                  "end": 334,
                  "argument": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 333,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 321,
                "end": 324,
                "name": "Opt"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 345,
            "decorators": [],
            "name": "y2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 348,
            "end": 366,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 348,
              "end": 366,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 353,
                  "end": 362,
                  "argument": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 361,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 363,
                  "end": 364,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 363,
                    "end": 364,
                    "name": "y"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 349,
                "end": 352,
                "name": "Opt"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "decorators": [],
            "name": "y3",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 377,
            "end": 390,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 377,
              "end": 390,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 382,
                  "end": 387,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 382,
                    "end": 383,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 384,
                    "end": 387,
                    "expression": {
                      "type": "Literal",
                      "start": 385,
                      "end": 386,
                      "raw": "2",
                      "value": 2
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 378,
                "end": 381,
                "name": "Opt"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
