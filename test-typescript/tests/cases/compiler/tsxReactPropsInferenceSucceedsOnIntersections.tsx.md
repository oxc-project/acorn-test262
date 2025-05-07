__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 421,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "raw": "\"react\"",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 186,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 80,
        "end": 186,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 85,
          "end": 96,
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 107,
          "end": 185,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 107,
              "end": 152,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 133,
                "end": 152,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 134,
                    "end": 151,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 151,
                      "decorators": [],
                      "name": "HTMLButtonElement",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "TSQualifiedName",
                "start": 107,
                "end": 133,
                "left": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 112,
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 133,
                  "decorators": [],
                  "name": "ButtonHTMLAttributes",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 155,
              "end": 181,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 161,
                  "end": 179,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 168,
                    "decorators": [],
                    "name": "outline",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 171,
                      "end": 178
                    }
                  }
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 184,
              "end": 185,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 96,
          "end": 104,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 97,
              "end": 103,
              "const": false,
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 103,
                "members": []
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 260,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 257,
        "end": 260,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 208,
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 225,
        "end": 240,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 225,
          "end": 230,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 231,
          "end": 240,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 240,
        "end": 256,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 241,
            "end": 255,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 252,
              "end": 255,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 253,
                  "end": 254,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 241,
              "end": 252,
              "decorators": [],
              "name": "ButtonProps",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 215,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 213,
              "end": 215,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 262,
      "end": 337,
      "body": {
        "type": "TSInterfaceBody",
        "start": 310,
        "end": 337,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 316,
            "end": 335,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 326,
              "decorators": [],
              "name": "customProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 334,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 328,
                "end": 334
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 298,
          "end": 309,
          "expression": {
            "type": "Identifier",
            "start": 298,
            "end": 309,
            "decorators": [],
            "name": "ButtonProps",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 289,
        "decorators": [],
        "name": "CustomButtonProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 420,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 387,
            "decorators": [],
            "name": "CustomButton",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 387,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 387,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 368,
                  "end": 387,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 369,
                      "end": 386,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 386,
                        "decorators": [],
                        "name": "CustomButtonProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 359,
                  "end": 368,
                  "left": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 364,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 368,
                    "decorators": [],
                    "name": "SFC",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 390,
            "end": 420,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 399,
              "end": 420,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 399,
                "end": 420,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 407,
                    "end": 417,
                    "argument": {
                      "type": "Identifier",
                      "start": 411,
                      "end": 416,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 400,
                  "end": 406,
                  "name": "Button"
                },
                "selfClosing": true,
                "typeArguments": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 390,
                "end": 395,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
