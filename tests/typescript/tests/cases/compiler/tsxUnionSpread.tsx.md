__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 603,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 47,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 44,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 45,
                "end": 47,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 107,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 58,
        "end": 107,
        "id": {
          "type": "Identifier",
          "start": 63,
          "end": 70,
          "decorators": [],
          "name": "CatInfo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 73,
          "end": 106,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 75,
              "end": 87,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 79,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 79,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 81,
                  "end": 86,
                  "literal": {
                    "type": "Literal",
                    "start": 81,
                    "end": 86,
                    "value": "Cat",
                    "raw": "'Cat'"
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 88,
              "end": 104,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 88,
                "end": 95,
                "decorators": [],
                "name": "subType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 95,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 97,
                  "end": 103
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 108,
      "end": 147,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 115,
        "end": 147,
        "id": {
          "type": "Identifier",
          "start": 120,
          "end": 127,
          "decorators": [],
          "name": "DogInfo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 130,
          "end": 146,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 132,
              "end": 144,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 132,
                "end": 136,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 136,
                "end": 143,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 138,
                  "end": 143,
                  "literal": {
                    "type": "Literal",
                    "start": 138,
                    "end": 143,
                    "value": "Dog",
                    "raw": "'Dog'"
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 148,
      "end": 191,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 155,
        "end": 191,
        "id": {
          "type": "Identifier",
          "start": 160,
          "end": 170,
          "decorators": [],
          "name": "AnimalInfo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 173,
          "end": 190,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 173,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 173,
                "end": 180,
                "decorators": [],
                "name": "CatInfo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 183,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 190,
                "decorators": [],
                "name": "DogInfo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 217,
        "decorators": [],
        "name": "AnimalComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 218,
          "end": 234,
          "decorators": [],
          "name": "info",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 234,
                "decorators": [],
                "name": "AnimalInfo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 235,
        "end": 248,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 237,
          "end": 248,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 237,
            "end": 248,
            "left": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 241,
              "end": 248,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 249,
        "end": 281,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 255,
            "end": 279,
            "argument": {
              "type": "TSAsExpression",
              "start": 262,
              "end": 278,
              "expression": {
                "type": "Identifier",
                "start": 262,
                "end": 271,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 275,
                "end": 278
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 283,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 300,
        "decorators": [],
        "name": "getProps",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 302,
        "end": 314,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 304,
          "end": 314,
          "typeName": {
            "type": "Identifier",
            "start": 304,
            "end": 314,
            "decorators": [],
            "name": "AnimalInfo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 315,
        "end": 411,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 368,
            "end": 409,
            "argument": {
              "type": "ObjectExpression",
              "start": 375,
              "end": 408,
              "properties": [
                {
                  "type": "Property",
                  "start": 377,
                  "end": 388,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 381,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 383,
                    "end": 388,
                    "value": "Cat",
                    "raw": "'Cat'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 390,
                  "end": 406,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 397,
                    "decorators": [],
                    "name": "subType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 399,
                    "end": 406,
                    "value": "Large",
                    "raw": "'Large'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 447,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 433,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 433,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 423,
                "end": 433,
                "typeName": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 433,
                  "decorators": [],
                  "name": "AnimalInfo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 436,
            "end": 446,
            "callee": {
              "type": "Identifier",
              "start": 436,
              "end": 444,
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 494,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 494,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 461,
            "decorators": [],
            "name": "component",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 464,
            "end": 494,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 464,
              "end": 494,
              "name": {
                "type": "JSXIdentifier",
                "start": 465,
                "end": 480,
                "name": "AnimalComponent"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 481,
                  "end": 491,
                  "argument": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 490,
                    "decorators": [],
                    "name": "props",
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
      "start": 496,
      "end": 554,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 553,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 517,
            "decorators": [],
            "name": "props2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 506,
              "end": 517,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 507,
                "end": 517,
                "typeName": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 517,
                  "decorators": [],
                  "name": "AnimalInfo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 520,
            "end": 553,
            "properties": [
              {
                "type": "Property",
                "start": 522,
                "end": 533,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 526,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 528,
                  "end": 533,
                  "value": "Cat",
                  "raw": "'Cat'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 535,
                "end": 551,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 542,
                  "decorators": [],
                  "name": "subType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 544,
                  "end": 551,
                  "value": "Large",
                  "raw": "'Large'"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 603,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 603,
          "id": {
            "type": "Identifier",
            "start": 559,
            "end": 569,
            "decorators": [],
            "name": "component2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 572,
            "end": 603,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 572,
              "end": 603,
              "name": {
                "type": "JSXIdentifier",
                "start": 573,
                "end": 588,
                "name": "AnimalComponent"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 589,
                  "end": 600,
                  "argument": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 599,
                    "decorators": [],
                    "name": "props2",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
