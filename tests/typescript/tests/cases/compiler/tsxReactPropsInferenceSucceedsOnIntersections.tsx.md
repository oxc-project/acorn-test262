__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 96
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 98
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 101,
                "end": 103
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 97,
              "end": 103
            }
          ],
          "start": 96,
          "end": 104
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 112
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ButtonHTMLAttributes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 133
                },
                "start": 107,
                "end": 133
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLButtonElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 134,
                    "end": 151
                  }
                ],
                "start": 133,
                "end": 152
              },
              "start": 107,
              "end": 152
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "outline",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 168
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 171,
                      "end": 178
                    },
                    "start": 169,
                    "end": 178
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 161,
                  "end": 179
                }
              ],
              "start": 155,
              "end": 181
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 185
              },
              "typeArguments": null,
              "start": 184,
              "end": 185
            }
          ],
          "start": 107,
          "end": 185
        },
        "declare": false,
        "start": 80,
        "end": 186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 73,
      "end": 186
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 208
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 213,
              "end": 215
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 209,
            "end": 215
          }
        ],
        "start": 208,
        "end": 216
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 230
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 240
        },
        "optional": false,
        "computed": false,
        "start": 225,
        "end": 240
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ButtonProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 252
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "typeArguments": null,
                  "start": 253,
                  "end": 254
                }
              ],
              "start": 252,
              "end": 255
            },
            "start": 241,
            "end": 255
          }
        ],
        "start": 240,
        "end": 256
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 257,
        "end": 260
      },
      "abstract": false,
      "declare": true,
      "start": 188,
      "end": 260
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CustomButtonProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 289
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ButtonProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 309
          },
          "typeArguments": null,
          "start": 298,
          "end": 309
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "customProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 328,
                "end": 334
              },
              "start": 326,
              "end": 334
            },
            "accessibility": null,
            "static": false,
            "start": 316,
            "end": 335
          }
        ],
        "start": 310,
        "end": 337
      },
      "declare": false,
      "start": 262,
      "end": 337
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "CustomButton",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 364
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SFC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 368
                  },
                  "start": 359,
                  "end": 368
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CustomButtonProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 369,
                        "end": 386
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 386
                    }
                  ],
                  "start": 368,
                  "end": 387
                },
                "start": 359,
                "end": 387
              },
              "start": 357,
              "end": 387
            },
            "start": 345,
            "end": 387
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 395
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Button",
                  "start": 400,
                  "end": 406
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 416
                    },
                    "start": 407,
                    "end": 417
                  }
                ],
                "selfClosing": true,
                "start": 399,
                "end": 420
              },
              "children": [],
              "closingElement": null,
              "start": 399,
              "end": 420
            },
            "id": null,
            "generator": false,
            "start": 390,
            "end": 420
          },
          "definite": false,
          "start": 345,
          "end": 420
        }
      ],
      "declare": false,
      "start": 339,
      "end": 421
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 421
}
```
