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
      "type": "TSTypeAliasDeclaration",
      "start": 34,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 48,
        "name": "TextProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "editable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "editable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "onEdit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "newText",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 122,
                          "end": 130,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 124,
                            "end": 130
                          }
                        },
                        "decorators": [],
                        "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 163,
        "name": "TextComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 172,
        "end": 187,
        "object": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
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
        "start": 203,
        "end": 268,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 266,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 215,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 266,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 236,
                          "end": 240,
                          "name": "span"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 241,
                          "end": 252,
                          "value": "Some Text..",
                          "raw": "Some Text.."
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
              "name": "TextProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 307,
            "name": "textPropsFalse",
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
                  "name": "TextProps",
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
            "start": 310,
            "end": 333,
            "properties": [
              {
                "type": "Property",
                "start": 316,
                "end": 331,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 324,
                  "name": "editable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 326,
                  "end": 331,
                  "value": false,
                  "raw": "false"
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
      "start": 336,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 382,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 342,
            "name": "y1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 345,
            "end": 382,
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
                    "name": "textPropsFalse",
                    "typeAnnotation": null,
                    "decorators": [],
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
      "start": 384,
      "end": 462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 461,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 414,
            "name": "textPropsTrue",
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
                  "name": "TextProps",
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
            "start": 417,
            "end": 461,
            "properties": [
              {
                "type": "Property",
                "start": 423,
                "end": 437,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 431,
                  "name": "editable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 433,
                  "end": 437,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 443,
                "end": 459,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 443,
                  "end": 449,
                  "name": "onEdit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 451,
                  "end": 459,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 457,
                    "end": 459,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
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
      "start": 464,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 509,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 470,
            "name": "y2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 473,
            "end": 509,
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
                    "name": "textPropsTrue",
                    "typeAnnotation": null,
                    "decorators": [],
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
