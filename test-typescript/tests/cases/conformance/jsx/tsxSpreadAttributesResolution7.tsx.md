file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 509,
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
      "type": "TSTypeAliasDeclaration",
      "start": 34,
      "end": 142,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 48,
        "decorators": [],
        "name": "TextProps",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 51,
        "end": 141,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 51,
            "end": 70,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 53,
                "end": 68,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 61,
                  "decorators": [],
                  "name": "editable",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 63,
                    "end": 68,
                    "literal": {
                      "type": "Literal",
                      "start": 63,
                      "end": 68,
                      "raw": "false",
                      "value": false
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 88,
            "end": 141,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 90,
                "end": 105,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 98,
                  "decorators": [],
                  "name": "editable",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 104,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 100,
                    "end": 104,
                    "literal": {
                      "type": "Literal",
                      "start": 100,
                      "end": 104,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 106,
                "end": 139,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 112,
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 114,
                    "end": 139,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 115,
                        "end": 130,
                        "decorators": [],
                        "name": "newText",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 122,
                          "end": 130,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 124,
                            "end": 130
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 132,
                      "end": 139,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 135,
                        "end": 139
                      }
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 144,
      "end": 268,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 268,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 266,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 215,
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
              "start": 215,
              "end": 266,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 266,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 228,
                    "end": 260,
                    "argument": {
                      "type": "JSXElement",
                      "start": 235,
                      "end": 259,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 241,
                          "end": 252,
                          "raw": "Some Text..",
                          "value": "Some Text.."
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 252,
                        "end": 259,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 254,
                          "end": 258,
                          "name": "span"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 235,
                        "end": 241,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 236,
                          "end": 240,
                          "name": "span"
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
        "start": 150,
        "end": 163,
        "decorators": [],
        "name": "TextComponent",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 172,
        "end": 187,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 187,
        "end": 202,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 188,
            "end": 197,
            "typeName": {
              "type": "Identifier",
              "start": 188,
              "end": 197,
              "decorators": [],
              "name": "TextProps",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 199,
            "end": 201,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 307,
            "decorators": [],
            "name": "textPropsFalse",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 307,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 307,
                  "decorators": [],
                  "name": "TextProps",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 310,
            "end": 333,
            "properties": [
              {
                "type": "Property",
                "start": 316,
                "end": 331,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 324,
                  "decorators": [],
                  "name": "editable",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 326,
                  "end": 331,
                  "raw": "false",
                  "value": false
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
      "start": 336,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 382,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 342,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 345,
            "end": 382,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 345,
              "end": 382,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 360,
                  "end": 379,
                  "argument": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 378,
                    "decorators": [],
                    "name": "textPropsFalse",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 346,
                "end": 359,
                "name": "TextComponent"
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
      "start": 384,
      "end": 462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 461,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 414,
            "decorators": [],
            "name": "textPropsTrue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 405,
                "end": 414,
                "typeName": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 414,
                  "decorators": [],
                  "name": "TextProps",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 417,
            "end": 461,
            "properties": [
              {
                "type": "Property",
                "start": 423,
                "end": 437,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 431,
                  "decorators": [],
                  "name": "editable",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 433,
                  "end": 437,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 443,
                "end": 459,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 449,
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 451,
                  "end": 459,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 457,
                    "end": 459,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
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
      "start": 464,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 509,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 470,
            "decorators": [],
            "name": "y2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 473,
            "end": 509,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 473,
              "end": 509,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 488,
                  "end": 506,
                  "argument": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 505,
                    "decorators": [],
                    "name": "textPropsTrue",
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 474,
                "end": 487,
                "name": "TextComponent"
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
