__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 372,
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
      "end": 68,
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
        "end": 68,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 70,
      "end": 177,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "Opt",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 88,
        "end": 103,
        "object": {
          "type": "Identifier",
          "start": 88,
          "end": 93,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 94,
          "end": 103,
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
        "start": 103,
        "end": 119,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 104,
            "end": 114,
            "typeName": {
              "type": "Identifier",
              "start": 104,
              "end": 114,
              "decorators": [],
              "name": "OptionProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 116,
            "end": 118,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 177,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 175,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 132,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 175,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 175,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 145,
                    "end": 169,
                    "argument": {
                      "type": "JSXElement",
                      "start": 152,
                      "end": 168,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 152,
                        "end": 157,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 153,
                          "end": 156,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 157,
                          "end": 162,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 162,
                        "end": 168,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 164,
                          "end": 167,
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
      "start": 179,
      "end": 206,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 200,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 190,
                "end": 200,
                "typeName": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 200,
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
            "start": 203,
            "end": 205,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 244,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 244,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 229,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 219,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 229,
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
            "start": 232,
            "end": 244,
            "properties": [
              {
                "type": "Property",
                "start": 238,
                "end": 242,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 241,
                  "end": 242,
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
      "start": 255,
      "end": 285,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 263,
            "end": 284,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 263,
              "end": 284,
              "name": {
                "type": "JSXIdentifier",
                "start": 264,
                "end": 267,
                "name": "Opt"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 268,
                  "end": 276,
                  "argument": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 275,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 277,
                  "end": 282,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 277,
                    "end": 278,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 279,
                    "end": 282,
                    "expression": {
                      "type": "Literal",
                      "start": 280,
                      "end": 281,
                      "value": 3,
                      "raw": "3"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 319,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 292,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 295,
            "end": 318,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 295,
              "end": 318,
              "name": {
                "type": "JSXIdentifier",
                "start": 296,
                "end": 299,
                "name": "Opt"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 300,
                  "end": 309,
                  "argument": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 308,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 310,
                  "end": 316,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 310,
                    "end": 311,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 312,
                    "end": 316,
                    "value": "Hi",
                    "raw": "\"Hi\""
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
      "start": 320,
      "end": 352,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 351,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 326,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 329,
            "end": 351,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 329,
              "end": 351,
              "name": {
                "type": "JSXIdentifier",
                "start": 330,
                "end": 333,
                "name": "Opt"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 334,
                  "end": 343,
                  "argument": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 342,
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 344,
                  "end": 349,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 344,
                    "end": 345,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 346,
                    "end": 349,
                    "expression": {
                      "type": "Literal",
                      "start": 347,
                      "end": 348,
                      "value": 3,
                      "raw": "3"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 372,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 359,
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 362,
            "end": 371,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 362,
              "end": 371,
              "name": {
                "type": "JSXIdentifier",
                "start": 363,
                "end": 366,
                "name": "Opt"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 367,
                  "end": 368,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 367,
                    "end": 368,
                    "name": "x"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
