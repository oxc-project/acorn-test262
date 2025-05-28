__ESTREE_TEST__:PASS:
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
      "type": "TSTypeAliasDeclaration",
      "start": 34,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 48,
        "decorators": [],
        "name": "TextProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 61,
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 98,
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 106,
                "end": 139,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 112,
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 114,
                    "end": 139,
                    "typeParameters": null,
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
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 144,
      "end": 268,
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 172,
        "end": 187,
        "object": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 199,
            "end": 201,
            "members": []
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 268,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 266,
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
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 266,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 235,
                        "end": 241,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 236,
                          "end": 240,
                          "name": "span"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 241,
                          "end": 252,
                          "value": "Some Text..",
                          "raw": "Some Text.."
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
      "start": 276,
      "end": 334,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 333,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 324,
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 326,
                  "end": 331,
                  "value": false,
                  "raw": "false"
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
      "start": 336,
      "end": 382,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 382,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 342,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 345,
            "end": 382,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 345,
              "end": 382,
              "name": {
                "type": "JSXIdentifier",
                "start": 346,
                "end": 359,
                "name": "TextComponent"
              },
              "typeArguments": null,
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
      "start": 384,
      "end": 462,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 461,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 431,
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 433,
                  "end": 437,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 443,
                "end": 459,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 449,
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 451,
                  "end": 459,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 457,
                    "end": 459,
                    "body": []
                  },
                  "id": null,
                  "generator": false
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
      "start": 464,
      "end": 509,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 509,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 470,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 473,
            "end": 509,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 473,
              "end": 509,
              "name": {
                "type": "JSXIdentifier",
                "start": 474,
                "end": 487,
                "name": "TextComponent"
              },
              "typeArguments": null,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
