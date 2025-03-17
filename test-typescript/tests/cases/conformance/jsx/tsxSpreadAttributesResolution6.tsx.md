__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 375,
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
        "optional": false,
        "typeAnnotation": null
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 61,
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 98,
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 112,
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false,
                  "typeAnnotation": null
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
                    },
                    "typeParameters": null
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
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
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 215,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
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
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 188,
              "end": 197,
              "decorators": [],
              "name": "TextProps",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 199,
            "end": 201,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 320,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 287,
            "end": 320,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 287,
              "end": 320,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 302,
                  "end": 317,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 302,
                    "end": 310,
                    "name": "editable"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 311,
                    "end": 317,
                    "expression": {
                      "type": "Literal",
                      "start": 312,
                      "end": 316,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 288,
                "end": 301,
                "name": "TextComponent"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 374,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 348,
            "decorators": [],
            "name": "textProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 348,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 348,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 348,
                  "decorators": [],
                  "name": "TextProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 351,
            "end": 374,
            "properties": [
              {
                "type": "Property",
                "start": 357,
                "end": 372,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 365,
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 367,
                  "end": 372,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
