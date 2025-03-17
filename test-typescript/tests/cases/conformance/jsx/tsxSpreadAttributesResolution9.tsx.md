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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 54,
        "name": "OptionProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "name": "Opt",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 104,
        "end": 119,
        "object": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 110,
          "end": 119,
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
        "start": 136,
        "end": 193,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 191,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 191,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 169,
                          "end": 172,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 173,
                          "end": 178,
                          "value": "Hello",
                          "raw": "Hello"
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
              "name": "OptionProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 216,
            "name": "obj",
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
                  "name": "OptionProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 245,
            "name": "obj1",
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
                  "name": "OptionProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 257,
                  "end": 258,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 276,
            "end": 283,
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
      "start": 285,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 293,
            "end": 309,
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
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
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
      "start": 311,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "name": "y1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 320,
            "end": 337,
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
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
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
      "start": 339,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 345,
            "name": "y2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 348,
            "end": 366,
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
                    "name": "obj1",
                    "typeAnnotation": null,
                    "decorators": [],
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
      "start": 368,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 374,
            "name": "y3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 377,
            "end": 390,
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
                      "value": 2,
                      "raw": "2"
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
