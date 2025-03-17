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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 31,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 31,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 17,
              "end": 29,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 56,
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 78,
            "decorators": [],
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 78,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 109,
            "decorators": [],
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 141,
            "decorators": [],
            "name": "varWithArrayType",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 167,
            "decorators": [],
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 170,
            "end": 172,
            "raw": "30",
            "value": 30
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 199,
            "decorators": [],
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 209,
                  "raw": "30",
                  "value": 30
                }
              },
              {
                "type": "Property",
                "start": 211,
                "end": 216,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 214,
                  "end": 216,
                  "raw": "70",
                  "value": 70
                }
              },
              {
                "type": "Property",
                "start": 218,
                "end": 234,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 222,
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 224,
                  "end": 234,
                  "raw": "\"position\"",
                  "value": "position"
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
      "start": 239,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 262,
            "decorators": [],
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 287,
            "decorators": [],
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 312,
            "decorators": [],
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 352,
            "decorators": [],
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 352,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 346,
                "end": 352
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 377,
            "decorators": [],
            "name": "arrayVar",
            "optional": false,
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
            }
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
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 386,
                "end": 389,
                "raw": "'b'",
                "value": "b"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 394,
      "end": 495,
      "async": false,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 446,
                    "end": 453,
                    "raw": "\"Hello\"",
                    "value": "Hello"
                  }
                },
                {
                  "type": "Property",
                  "start": 463,
                  "end": 472,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 464,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 466,
                    "end": 472,
                    "raw": "\"word\"",
                    "value": "word"
                  }
                },
                {
                  "type": "Property",
                  "start": 482,
                  "end": 486,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 483,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "raw": "2",
                    "value": 2
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
        "start": 403,
        "end": 417,
        "decorators": [],
        "name": "simpleFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 497,
      "end": 568,
      "body": {
        "type": "TSModuleBlock",
        "start": 507,
        "end": 568,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 513,
            "end": 566,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 520,
              "end": 566,
              "async": false,
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
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 529,
                "end": 532,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 506,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 570,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 579,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 582,
        "end": 609,
        "expression": {
          "type": "Literal",
          "start": 590,
          "end": 608,
          "raw": "\"withImportDecl_0\"",
          "value": "withImportDecl_0"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 617,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 620,
            "end": 630,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 624,
              "end": 628,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 624,
                "end": 626,
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 638,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 632,
        "end": 637,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 632,
          "end": 633,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 634,
          "end": 637,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
