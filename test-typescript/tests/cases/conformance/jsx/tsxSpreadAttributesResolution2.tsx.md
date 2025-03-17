__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 443,
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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 56,
        "name": "PoisonedProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 87,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 85,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 84,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 81,
                "end": 84,
                "literal": {
                  "type": "Literal",
                  "start": 81,
                  "end": 84,
                  "value": "2",
                  "raw": "\"2\""
                }
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
      "type": "ClassDeclaration",
      "start": 89,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 103,
        "name": "Poisoned",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 112,
        "end": 127,
        "object": {
          "type": "Identifier",
          "start": 112,
          "end": 117,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 118,
          "end": 127,
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
        "start": 146,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 201,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 201,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 201,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 171,
                    "end": 195,
                    "argument": {
                      "type": "JSXElement",
                      "start": 178,
                      "end": 194,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 178,
                        "end": 183,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 179,
                          "end": 182,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 188,
                        "end": 194,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 190,
                          "end": 193,
                          "name": "div"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 183,
                          "end": 188,
                          "value": "Hello",
                          "raw": "Hello"
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
        "start": 127,
        "end": 145,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 128,
            "end": 140,
            "typeName": {
              "type": "Identifier",
              "start": 128,
              "end": 140,
              "name": "PoisonedProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 142,
            "end": 144,
            "members": []
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 217,
            "end": 219,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 264,
      "expression": {
        "type": "JSXElement",
        "start": 228,
        "end": 263,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 228,
          "end": 263,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 238,
              "end": 260,
              "argument": {
                "type": "ObjectExpression",
                "start": 242,
                "end": 259,
                "properties": [
                  {
                    "type": "Property",
                    "start": 243,
                    "end": 250,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 246,
                      "end": 250,
                      "value": "ok",
                      "raw": "\"ok\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 252,
                    "end": 258,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 255,
                      "end": 258,
                      "value": "2",
                      "raw": "\"2\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 229,
            "end": 237,
            "name": "Poisoned"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 283,
            "end": 304,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 283,
              "end": 304,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 293,
                  "end": 301,
                  "argument": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 300,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 284,
                "end": 292,
                "name": "Poisoned"
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
      "start": 306,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 314,
            "end": 326,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 314,
              "end": 326,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 315,
                "end": 323,
                "name": "Poisoned"
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
      "start": 328,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 351,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 333,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 336,
            "end": 351,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 336,
              "end": 351,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 346,
                  "end": 347,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 346,
                    "end": 347,
                    "name": "x"
                  },
                  "value": null
                },
                {
                  "type": "JSXAttribute",
                  "start": 348,
                  "end": 349,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 348,
                    "end": 349,
                    "name": "y"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 337,
                "end": 345,
                "name": "Poisoned"
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
      "start": 353,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 358,
            "name": "w",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 361,
            "end": 392,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 361,
              "end": 392,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 371,
                  "end": 390,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 375,
                    "end": 389,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 376,
                        "end": 380,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 376,
                          "end": 377,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 379,
                          "end": 380,
                          "value": 5,
                          "raw": "5"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 382,
                        "end": 388,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 383,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 385,
                          "end": 388,
                          "value": "2",
                          "raw": "\"2\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 362,
                "end": 370,
                "name": "Poisoned"
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
      "start": 394,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 400,
            "name": "w1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 403,
            "end": 442,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 403,
              "end": 442,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 413,
                  "end": 432,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 417,
                    "end": 431,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 418,
                        "end": 422,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 419,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 421,
                          "end": 422,
                          "value": 5,
                          "raw": "5"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 424,
                        "end": 430,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 425,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 427,
                          "end": 430,
                          "value": "2",
                          "raw": "\"2\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 433,
                  "end": 439,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 433,
                    "end": 434,
                    "name": "X"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 435,
                    "end": 439,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 404,
                "end": 412,
                "name": "Poisoned"
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
