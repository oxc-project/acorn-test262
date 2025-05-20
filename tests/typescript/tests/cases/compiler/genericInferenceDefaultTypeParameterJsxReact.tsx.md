__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 406,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 144,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 136,
        "end": 143,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 74,
          "end": 79,
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 79,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 83,
          "end": 104,
          "imported": {
            "type": "Identifier",
            "start": 83,
            "end": 104,
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 83,
            "end": 104,
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 106,
          "end": 117,
          "imported": {
            "type": "Identifier",
            "start": 106,
            "end": 117,
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 106,
            "end": 117,
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 119,
          "end": 128,
          "imported": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "decorators": [],
            "name": "ReactNode",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "decorators": [],
            "name": "ReactNode",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 146,
      "end": 244,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 166,
        "decorators": [],
        "name": "ButtonBaseProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 192,
        "end": 243,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 192,
            "end": 216,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 213,
              "end": 216,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 215,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
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
              "start": 192,
              "end": 213,
              "decorators": [],
              "name": "ComponentPropsWithRef",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 219,
            "end": 243,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 221,
                "end": 241,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 229,
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 241,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 241,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 241,
                      "decorators": [],
                      "name": "ReactNode",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 166,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 188,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 188,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 188,
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
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
      "type": "FunctionDeclaration",
      "start": 246,
      "end": 345,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 324,
        "end": 345,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 330,
            "end": 343,
            "argument": {
              "type": "JSXFragment",
              "start": 337,
              "end": 342,
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 339,
                "end": 342
              },
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 337,
                "end": 339
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 264,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 297,
          "end": 322,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 302,
            "end": 322,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 304,
              "end": 322,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 319,
                "end": 322,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 320,
                    "end": 321,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 320,
                      "end": 321,
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
                "start": 304,
                "end": 319,
                "decorators": [],
                "name": "ButtonBaseProps",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 264,
        "end": 296,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 295,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 286,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 286,
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSLiteralType",
              "start": 289,
              "end": 295,
              "literal": {
                "type": "Literal",
                "start": 289,
                "end": 295,
                "raw": "'span'",
                "value": "span"
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
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
      "type": "VariableDeclaration",
      "start": 347,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 405,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 355,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 358,
            "end": 405,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 358,
              "end": 405,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 369,
                  "end": 402,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 369,
                    "end": 376,
                    "name": "onClick"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 377,
                    "end": 402,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 378,
                      "end": 401,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 383,
                        "end": 401,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 383,
                          "end": 399,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 383,
                            "end": 384,
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 385,
                            "end": 399,
                            "decorators": [],
                            "name": "preventDefault",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 378,
                          "end": 379,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 359,
                "end": 368,
                "name": "Component"
              },
              "selfClosing": true,
              "typeArguments": null
            }
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
