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
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 47,
              "body": {
                "type": "TSInterfaceBody",
                "start": 45,
                "end": 47,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 44,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 107,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 58,
        "end": 107,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 63,
          "end": 70,
          "decorators": [],
          "name": "CatInfo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 73,
          "end": 106,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 75,
              "end": 87,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 79,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "raw": "'Cat'",
                    "value": "Cat"
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 88,
              "end": 104,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 88,
                "end": 95,
                "decorators": [],
                "name": "subType",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 95,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 97,
                  "end": 103
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 108,
      "end": 147,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 115,
        "end": 147,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 120,
          "end": 127,
          "decorators": [],
          "name": "DogInfo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 130,
          "end": 146,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 132,
              "end": 144,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 132,
                "end": 136,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "raw": "'Dog'",
                    "value": "Dog"
                  }
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 148,
      "end": 191,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 155,
        "end": 191,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 160,
          "end": 170,
          "decorators": [],
          "name": "AnimalInfo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 173,
          "end": 190,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 173,
              "end": 180,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 173,
                "end": 180,
                "decorators": [],
                "name": "CatInfo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 183,
              "end": 190,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 190,
                "decorators": [],
                "name": "DogInfo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 281,
      "async": false,
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 217,
        "decorators": [],
        "name": "AnimalComponent",
        "optional": false,
        "typeAnnotation": null
      },
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 234,
                "decorators": [],
                "name": "AnimalInfo",
                "optional": false,
                "typeAnnotation": null
              }
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
          "typeArguments": null,
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
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 283,
      "end": 411,
      "async": false,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 381,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 383,
                    "end": 388,
                    "raw": "'Cat'",
                    "value": "Cat"
                  }
                },
                {
                  "type": "Property",
                  "start": 390,
                  "end": 406,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 397,
                    "decorators": [],
                    "name": "subType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 399,
                    "end": 406,
                    "raw": "'Large'",
                    "value": "Large"
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 300,
        "decorators": [],
        "name": "getProps",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 302,
        "end": 314,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 304,
          "end": 314,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 304,
            "end": 314,
            "decorators": [],
            "name": "AnimalInfo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 446,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 433,
                  "decorators": [],
                  "name": "AnimalInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 436,
            "end": 446,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 436,
              "end": 444,
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 494,
          "definite": false,
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
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 464,
              "end": 494,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 465,
                "end": 480,
                "name": "AnimalComponent"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 496,
      "end": 554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 553,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 517,
                  "decorators": [],
                  "name": "AnimalInfo",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 526,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 528,
                  "end": 533,
                  "raw": "'Cat'",
                  "value": "Cat"
                }
              },
              {
                "type": "Property",
                "start": 535,
                "end": 551,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 542,
                  "decorators": [],
                  "name": "subType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 544,
                  "end": 551,
                  "raw": "'Large'",
                  "value": "Large"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 603,
          "definite": false,
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
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 572,
              "end": 603,
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
              "name": {
                "type": "JSXIdentifier",
                "start": 573,
                "end": 588,
                "name": "AnimalComponent"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
