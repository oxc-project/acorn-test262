__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 422,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 52,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 70,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 186,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 80,
        "end": 186,
        "id": {
          "type": "Identifier",
          "start": 85,
          "end": 96,
          "name": "ButtonProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 103,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
              "typeName": {
                "type": "TSQualifiedName",
                "start": 107,
                "end": 133,
                "left": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 112,
                  "name": "React",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 133,
                  "name": "ButtonHTMLAttributes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 133,
                "end": 152,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 134,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 151,
                      "name": "HTMLButtonElement",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 168,
                    "name": "outline",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 171,
                      "end": 178
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 184,
              "end": 185,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 188,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 208,
        "name": "Button",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 225,
        "end": 240,
        "object": {
          "type": "Identifier",
          "start": 225,
          "end": 230,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 231,
          "end": 240,
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
        "start": 257,
        "end": 260,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 208,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 215,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 213,
              "end": 215,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 240,
        "end": 256,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 241,
            "end": 255,
            "typeName": {
              "type": "Identifier",
              "start": 241,
              "end": 252,
              "name": "ButtonProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 252,
              "end": 255,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 253,
                  "end": 254,
                  "typeName": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 262,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 289,
        "name": "CustomButtonProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 298,
          "end": 309,
          "expression": {
            "type": "Identifier",
            "start": 298,
            "end": 309,
            "name": "ButtonProps",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 310,
        "end": 337,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 316,
            "end": 335,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 316,
              "end": 326,
              "name": "customProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 334,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 328,
                "end": 334
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
      "type": "VariableDeclaration",
      "start": 339,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 420,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 387,
            "name": "CustomButton",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 387,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 387,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 359,
                  "end": 368,
                  "left": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 364,
                    "name": "React",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 368,
                    "name": "SFC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 368,
                  "end": 387,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 369,
                      "end": 386,
                      "typeName": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 386,
                        "name": "CustomButtonProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 390,
            "end": 420,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 390,
                "end": 395,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "JSXElement",
              "start": 399,
              "end": 420,
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
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              },
              "closingElement": null,
              "children": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
