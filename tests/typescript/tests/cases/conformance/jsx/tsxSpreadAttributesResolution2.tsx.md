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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 56,
        "decorators": [],
        "name": "PoisonedProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 103,
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 112,
        "end": 127,
        "object": {
          "type": "Identifier",
          "start": 112,
          "end": 117,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 118,
          "end": 127,
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
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false,
              "typeAnnotation": null
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
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 201,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 158,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 201,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 179,
                          "end": 182,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 183,
                          "end": 188,
                          "value": "Hello",
                          "raw": "Hello"
                        }
                      ],
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
      "start": 205,
      "end": 220,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 214,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
          "name": {
            "type": "JSXIdentifier",
            "start": 229,
            "end": 237,
            "name": "Poisoned"
          },
          "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 246,
                      "end": 250,
                      "value": "ok",
                      "raw": "\"ok\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 252,
                    "end": 258,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 255,
                      "end": 258,
                      "value": "2",
                      "raw": "\"2\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 305,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 283,
            "end": 304,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 283,
              "end": 304,
              "name": {
                "type": "JSXIdentifier",
                "start": 284,
                "end": 292,
                "name": "Poisoned"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 293,
                  "end": 301,
                  "argument": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 300,
                    "decorators": [],
                    "name": "obj",
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
      "start": 306,
      "end": 327,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 314,
            "end": 326,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 314,
              "end": 326,
              "name": {
                "type": "JSXIdentifier",
                "start": 315,
                "end": 323,
                "name": "Poisoned"
              },
              "typeArguments": null,
              "attributes": [],
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
      "start": 328,
      "end": 352,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 351,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 333,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 336,
            "end": 351,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 336,
              "end": 351,
              "name": {
                "type": "JSXIdentifier",
                "start": 337,
                "end": 345,
                "name": "Poisoned"
              },
              "typeArguments": null,
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
      "start": 353,
      "end": 393,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 358,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 361,
            "end": 392,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 361,
              "end": 392,
              "name": {
                "type": "JSXIdentifier",
                "start": 362,
                "end": 370,
                "name": "Poisoned"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 376,
                          "end": 377,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 379,
                          "end": 380,
                          "value": 5,
                          "raw": "5"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 382,
                        "end": 388,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 383,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 385,
                          "end": 388,
                          "value": "2",
                          "raw": "\"2\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
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
      "start": 394,
      "end": 443,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 400,
            "decorators": [],
            "name": "w1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 403,
            "end": 442,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 403,
              "end": 442,
              "name": {
                "type": "JSXIdentifier",
                "start": 404,
                "end": 412,
                "name": "Poisoned"
              },
              "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 419,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 421,
                          "end": 422,
                          "value": 5,
                          "raw": "5"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 424,
                        "end": 430,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 425,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 427,
                          "end": 430,
                          "value": "2",
                          "raw": "\"2\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
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
