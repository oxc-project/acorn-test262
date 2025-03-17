__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 67,
  "end": 407,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 144,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 74,
          "end": 79,
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 79,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "ComponentPropsWithRef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 83,
            "end": 104,
            "name": "ComponentPropsWithRef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 106,
          "end": 117,
          "imported": {
            "type": "Identifier",
            "start": 106,
            "end": 117,
            "name": "ElementType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 106,
            "end": 117,
            "name": "ElementType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 119,
          "end": 128,
          "imported": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "name": "ReactNode",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 119,
            "end": 128,
            "name": "ReactNode",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 136,
        "end": 143,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 146,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 166,
        "name": "ButtonBaseProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 188,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 188,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "typeName": {
              "type": "Identifier",
              "start": 192,
              "end": 213,
              "name": "ComponentPropsWithRef",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 213,
              "end": 216,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 214,
                  "end": 215,
                  "typeName": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "name": "T",
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
            "start": 219,
            "end": 243,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 221,
                "end": 241,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 229,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 241,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 241,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 241,
                      "name": "ReactNode",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 246,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 264,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 297,
          "end": 322,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 302,
            "end": 322,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 304,
              "end": 322,
              "typeName": {
                "type": "Identifier",
                "start": 304,
                "end": 319,
                "name": "ButtonBaseProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 319,
                "end": 322,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 320,
                    "end": 321,
                    "typeName": {
                      "type": "Identifier",
                      "start": 320,
                      "end": 321,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 337,
                "end": 339
              },
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 339,
                "end": 342
              },
              "children": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 264,
        "end": 296,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 265,
            "end": 295,
            "name": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 275,
              "end": 286,
              "typeName": {
                "type": "Identifier",
                "start": 275,
                "end": 286,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSLiteralType",
              "start": 289,
              "end": 295,
              "literal": {
                "type": "Literal",
                "start": 289,
                "end": 295,
                "value": "span",
                "raw": "'span'"
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 355,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 358,
            "end": 405,
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 378,
                          "end": 379,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 383,
                        "end": 401,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 383,
                          "end": 399,
                          "object": {
                            "type": "Identifier",
                            "start": 383,
                            "end": 384,
                            "name": "e",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 385,
                            "end": 399,
                            "name": "preventDefault",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
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
            },
            "closingElement": null,
            "children": []
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
