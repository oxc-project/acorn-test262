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
            "start": 74,
            "end": 79
          },
          "start": 74,
          "end": 79
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 104
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 104
          },
          "importKind": "value",
          "start": 83,
          "end": 104
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 117
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 117
          },
          "importKind": "value",
          "start": 106,
          "end": 117
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 128
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 128
          },
          "importKind": "value",
          "start": 119,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 136,
        "end": 143
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ButtonBaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 166
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
              "start": 167,
              "end": 168
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 188
              },
              "typeArguments": null,
              "start": 177,
              "end": 188
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 167,
            "end": 188
          }
        ],
        "start": 166,
        "end": 189
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentPropsWithRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 213
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
                    "start": 214,
                    "end": 215
                  },
                  "typeArguments": null,
                  "start": 214,
                  "end": 215
                }
              ],
              "start": 213,
              "end": 216
            },
            "start": 192,
            "end": 216
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
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 229
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 241
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 241
                  },
                  "start": 230,
                  "end": 241
                },
                "accessibility": null,
                "static": false,
                "start": 221,
                "end": 241
              }
            ],
            "start": 219,
            "end": 243
          }
        ],
        "start": 192,
        "end": 243
      },
      "declare": false,
      "start": 146,
      "end": 244
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 264
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 265,
              "end": 266
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 286
              },
              "typeArguments": null,
              "start": 275,
              "end": 286
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "span",
                "raw": "'span'",
                "start": 289,
                "end": 295
              },
              "start": 289,
              "end": 295
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 265,
            "end": 295
          }
        ],
        "start": 264,
        "end": 296
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ButtonBaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 319
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
                      "start": 320,
                      "end": 321
                    },
                    "typeArguments": null,
                    "start": 320,
                    "end": 321
                  }
                ],
                "start": 319,
                "end": 322
              },
              "start": 304,
              "end": 322
            },
            "start": 302,
            "end": 322
          },
          "start": 297,
          "end": 322
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXFragment",
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 337,
                "end": 339
              },
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 339,
                "end": 342
              },
              "start": 337,
              "end": 342
            },
            "start": 330,
            "end": 343
          }
        ],
        "start": 324,
        "end": 345
      },
      "expression": false,
      "start": 246,
      "end": 345
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 355
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "start": 359,
                "end": 368
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 369,
                    "end": 376
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 378,
                          "end": 379
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 383,
                            "end": 384
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "preventDefault",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 385,
                            "end": 399
                          },
                          "optional": false,
                          "computed": false,
                          "start": 383,
                          "end": 399
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 383,
                        "end": 401
                      },
                      "id": null,
                      "generator": false,
                      "start": 378,
                      "end": 401
                    },
                    "start": 377,
                    "end": 402
                  },
                  "start": 369,
                  "end": 402
                }
              ],
              "selfClosing": true,
              "start": 358,
              "end": 405
            },
            "children": [],
            "closingElement": null,
            "start": 358,
            "end": 405
          },
          "definite": false,
          "start": 353,
          "end": 405
        }
      ],
      "declare": false,
      "start": 347,
      "end": 406
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 67,
  "end": 406
}
```
