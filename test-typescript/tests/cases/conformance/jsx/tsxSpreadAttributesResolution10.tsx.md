__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 373,
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
      "end": 68,
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
      "start": 70,
      "end": 177,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 177,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 175,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 132,
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
              "start": 132,
              "end": 175,
              "async": false,
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 157,
                          "end": 162,
                          "raw": "Hello",
                          "value": "Hello"
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
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 152,
                        "end": 157,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 153,
                          "end": 156,
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
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "Opt",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 88,
        "end": 103,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 88,
          "end": 93,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 94,
          "end": 103,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
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
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 116,
            "end": 118,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 205,
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 203,
            "end": 205,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 244,
          "definite": false,
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
                  "optional": false
                }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
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
                  "start": 241,
                  "end": 242,
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
      "start": 255,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 263,
            "end": 284,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 263,
              "end": 284,
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
                    "optional": false
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
                      "raw": "3",
                      "value": 3
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 264,
                "end": 267,
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
      "start": 286,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 292,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 295,
            "end": 318,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 295,
              "end": 318,
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
                    "optional": false
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
                    "raw": "\"Hi\"",
                    "value": "Hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 296,
                "end": 299,
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
      "start": 320,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 351,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 326,
            "decorators": [],
            "name": "y2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 329,
            "end": 351,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 329,
              "end": 351,
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
                    "optional": false
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
                      "raw": "3",
                      "value": 3
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 330,
                "end": 333,
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
      "start": 353,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 359,
            "decorators": [],
            "name": "y3",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 362,
            "end": 371,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 362,
              "end": 371,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 363,
                "end": 366,
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
  "sourceType": "script",
  "hashbang": null
}
```
