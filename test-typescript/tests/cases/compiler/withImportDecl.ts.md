__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 31,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 31,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 17,
              "end": 29,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 20,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 43,
  "end": 638,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 56,
            "name": "simpleVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 78,
            "name": "anotherVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 78,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 109,
            "name": "varWithSimpleType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 141,
            "name": "varWithArrayType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 141,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 133,
                "end": 141,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 133,
                  "end": 139
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 167,
            "name": "varWithInitialValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 170,
            "end": 172,
            "value": 30,
            "raw": "30"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 199,
            "name": "withComplicatedValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 202,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 204,
                "end": 209,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 209,
                  "value": 30,
                  "raw": "30"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 211,
                "end": 216,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 214,
                  "end": 216,
                  "value": 70,
                  "raw": "70"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 218,
                "end": 234,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "name": "desc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 224,
                  "end": 234,
                  "value": "position",
                  "raw": "\"position\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 262,
            "name": "declaredVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 287,
            "name": "declareVar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 312,
            "name": "declaredVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 352,
            "name": "deckareVarWithType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 352,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 346,
                "end": 352
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 355,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 377,
            "name": "arrayVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 377,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 369,
                "end": 377,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 369,
                  "end": 375
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 380,
            "end": 390,
            "elements": [
              {
                "type": "Literal",
                "start": 381,
                "end": 384,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 386,
                "end": 389,
                "value": "b",
                "raw": "'b'"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 394,
      "end": 495,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 417,
        "name": "simpleFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 420,
        "end": 495,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 426,
            "end": 493,
            "argument": {
              "type": "ObjectExpression",
              "start": 433,
              "end": 492,
              "properties": [
                {
                  "type": "Property",
                  "start": 443,
                  "end": 453,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 446,
                    "end": 453,
                    "value": "Hello",
                    "raw": "\"Hello\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 463,
                  "end": 472,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 464,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 466,
                    "end": 472,
                    "value": "word",
                    "raw": "\"word\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 482,
                  "end": 486,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 483,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "value": 2,
                    "raw": "2"
                  },
                  "kind": "init",
                  "optional": false
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
    {
      "type": "TSModuleDeclaration",
      "start": 497,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 506,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 507,
        "end": 568,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 513,
            "end": 566,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 520,
              "end": 566,
              "id": {
                "type": "Identifier",
                "start": 529,
                "end": 532,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 535,
                "end": 566,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 545,
                    "end": 560,
                    "argument": {
                      "type": "Literal",
                      "start": 552,
                      "end": 559,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 570,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 579,
        "name": "m3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 582,
        "end": 609,
        "expression": {
          "type": "Literal",
          "start": 590,
          "end": 608,
          "value": "withImportDecl_0",
          "raw": "\"withImportDecl_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 612,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 617,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 620,
            "end": 630,
            "callee": {
              "type": "MemberExpression",
              "start": 624,
              "end": 628,
              "object": {
                "type": "Identifier",
                "start": 624,
                "end": 626,
                "name": "m3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 638,
      "expression": {
        "type": "MemberExpression",
        "start": 632,
        "end": 637,
        "object": {
          "type": "Identifier",
          "start": 632,
          "end": 633,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 634,
          "end": 637,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
