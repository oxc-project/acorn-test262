__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 47
              },
              "declare": false,
              "start": 27,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 47
          }
        ],
        "start": 14,
        "end": 49
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CatInfo",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 70
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 79
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Cat",
                    "raw": "'Cat'",
                    "start": 81,
                    "end": 86
                  },
                  "start": 81,
                  "end": 86
                },
                "start": 79,
                "end": 86
              },
              "accessibility": null,
              "static": false,
              "start": 75,
              "end": 87
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "subType",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 95
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 97,
                  "end": 103
                },
                "start": 95,
                "end": 103
              },
              "accessibility": null,
              "static": false,
              "start": 88,
              "end": 104
            }
          ],
          "start": 73,
          "end": 106
        },
        "declare": false,
        "start": 58,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 51,
      "end": 107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DogInfo",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 127
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 136
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Dog",
                    "raw": "'Dog'",
                    "start": 138,
                    "end": 143
                  },
                  "start": 138,
                  "end": 143
                },
                "start": 136,
                "end": 143
              },
              "accessibility": null,
              "static": false,
              "start": 132,
              "end": 144
            }
          ],
          "start": 130,
          "end": 146
        },
        "declare": false,
        "start": 115,
        "end": 147
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 108,
      "end": 147
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AnimalInfo",
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 170
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CatInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 180
              },
              "typeArguments": null,
              "start": 173,
              "end": 180
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DogInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 190
              },
              "typeArguments": null,
              "start": 183,
              "end": 190
            }
          ],
          "start": 173,
          "end": 190
        },
        "declare": false,
        "start": 155,
        "end": 191
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 148,
      "end": 191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimalComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 217
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "info",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnimalInfo",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 234
              },
              "typeArguments": null,
              "start": 224,
              "end": 234
            },
            "start": 222,
            "end": 234
          },
          "start": 218,
          "end": 234
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 240
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 248
            },
            "start": 237,
            "end": 248
          },
          "typeArguments": null,
          "start": 237,
          "end": 248
        },
        "start": 235,
        "end": 248
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 271
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 275,
                "end": 278
              },
              "start": 262,
              "end": 278
            },
            "start": 255,
            "end": 279
          }
        ],
        "start": 249,
        "end": 281
      },
      "expression": false,
      "start": 193,
      "end": 281
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 300
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnimalInfo",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 314
          },
          "typeArguments": null,
          "start": 304,
          "end": 314
        },
        "start": 302,
        "end": 314
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 381
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Cat",
                    "raw": "'Cat'",
                    "start": 383,
                    "end": 388
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 377,
                  "end": 388
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 397
                  },
                  "value": {
                    "type": "Literal",
                    "value": "Large",
                    "raw": "'Large'",
                    "start": 399,
                    "end": 406
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 390,
                  "end": 406
                }
              ],
              "start": 375,
              "end": 408
            },
            "start": 368,
            "end": 409
          }
        ],
        "start": 315,
        "end": 411
      },
      "expression": false,
      "start": 283,
      "end": 411
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "AnimalInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 433
                },
                "typeArguments": null,
                "start": 423,
                "end": 433
              },
              "start": 422,
              "end": 433
            },
            "start": 417,
            "end": 433
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 444
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 436,
            "end": 446
          },
          "definite": false,
          "start": 417,
          "end": 446
        }
      ],
      "declare": false,
      "start": 413,
      "end": 447
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "component",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 461
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnimalComponent",
                "start": 465,
                "end": 480
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
                    "start": 485,
                    "end": 490
                  },
                  "start": 481,
                  "end": 491
                }
              ],
              "selfClosing": true,
              "start": 464,
              "end": 494
            },
            "children": [],
            "closingElement": null,
            "start": 464,
            "end": 494
          },
          "definite": false,
          "start": 452,
          "end": 494
        }
      ],
      "declare": false,
      "start": 448,
      "end": 494
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "props2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimalInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 517
                },
                "typeArguments": null,
                "start": 507,
                "end": 517
              },
              "start": 506,
              "end": 517
            },
            "start": 500,
            "end": 517
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 526
                },
                "value": {
                  "type": "Literal",
                  "value": "Cat",
                  "raw": "'Cat'",
                  "start": 528,
                  "end": 533
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 522,
                "end": 533
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 542
                },
                "value": {
                  "type": "Literal",
                  "value": "Large",
                  "raw": "'Large'",
                  "start": 544,
                  "end": 551
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 535,
                "end": 551
              }
            ],
            "start": 520,
            "end": 553
          },
          "definite": false,
          "start": 500,
          "end": 553
        }
      ],
      "declare": false,
      "start": 496,
      "end": 554
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "component2",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 569
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "AnimalComponent",
                "start": 573,
                "end": 588
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 599
                  },
                  "start": 589,
                  "end": 600
                }
              ],
              "selfClosing": true,
              "start": 572,
              "end": 603
            },
            "children": [],
            "closingElement": null,
            "start": 572,
            "end": 603
          },
          "definite": false,
          "start": 559,
          "end": 603
        }
      ],
      "declare": false,
      "start": 555,
      "end": 603
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 603
}
```
