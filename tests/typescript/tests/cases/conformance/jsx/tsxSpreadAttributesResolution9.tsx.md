__ESTREE_TEST__:PASS:
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
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 54,
        "decorators": [],
        "name": "OptionProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 82,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 82,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 75,
                "end": 82
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
      "start": 86,
      "end": 193,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "Opt",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 104,
        "end": 119,
        "object": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 119,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 132,
            "end": 134,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 193,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 191,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 191,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 168,
                        "end": 173,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 169,
                          "end": 172,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 173,
                          "end": 178,
                          "value": "Hello",
                          "raw": "Hello"
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
      "start": 195,
      "end": 222,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 221,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 219,
            "end": 221,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 260,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 260,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 257,
                  "end": 258,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 284,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 276,
            "end": 283,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 276,
              "end": 283,
              "name": {
                "type": "JSXIdentifier",
                "start": 277,
                "end": 280,
                "name": "Opt"
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
      "start": 285,
      "end": 310,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 293,
            "end": 309,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 293,
              "end": 309,
              "name": {
                "type": "JSXIdentifier",
                "start": 294,
                "end": 297,
                "name": "Opt"
              },
              "typeArguments": null,
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
      "start": 311,
      "end": 338,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 320,
            "end": 337,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 320,
              "end": 337,
              "name": {
                "type": "JSXIdentifier",
                "start": 321,
                "end": 324,
                "name": "Opt"
              },
              "typeArguments": null,
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
      "start": 339,
      "end": 367,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 345,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 348,
            "end": 366,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 348,
              "end": 366,
              "name": {
                "type": "JSXIdentifier",
                "start": 349,
                "end": 352,
                "name": "Opt"
              },
              "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 368,
      "end": 391,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 377,
            "end": 390,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 377,
              "end": 390,
              "name": {
                "type": "JSXIdentifier",
                "start": 378,
                "end": 381,
                "name": "Opt"
              },
              "typeArguments": null,
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
                      "value": 2,
                      "raw": "2"
                    }
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
