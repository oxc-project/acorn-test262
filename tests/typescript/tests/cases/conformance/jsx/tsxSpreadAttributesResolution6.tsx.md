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
      "start": 279,
      "end": 320,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 320,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 287,
              "end": 320,
              "name": {
                "type": "JSXIdentifier",
                "start": 288,
                "end": 301,
                "name": "TextComponent"
              },
              "typeArguments": null,
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
                      "value": true,
                      "raw": "true"
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
      "start": 322,
      "end": 375,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 374,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 348,
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
            "start": 351,
            "end": 374,
            "properties": [
              {
                "type": "Property",
                "start": 357,
                "end": 372,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 365,
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 367,
                  "end": 372,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
