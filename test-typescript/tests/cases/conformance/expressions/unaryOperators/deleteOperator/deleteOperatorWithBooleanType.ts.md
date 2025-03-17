__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 779,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 56,
            "name": "BOOLEAN",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 56,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 49,
                "end": 56
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
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
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
        "start": 83,
        "end": 99,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 85,
            "end": 97,
            "argument": {
              "type": "Literal",
              "start": 92,
              "end": 96,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 82,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 75,
          "end": 82
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "a",
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
              "start": 123,
              "end": 132,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 168,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 168,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 166,
                    "argument": {
                      "type": "Literal",
                      "start": 160,
                      "end": 165,
                      "value": false,
                      "raw": "false"
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
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 171,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 180,
        "end": 210,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 186,
            "end": 208,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 193,
              "end": 208,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 197,
                  "end": 207,
                  "id": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 207,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 200,
                        "end": 207
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
      "type": "VariableDeclaration",
      "start": 212,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 223,
            "end": 230,
            "callee": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 253,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 290,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 273,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 276,
            "end": 290,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 283,
              "end": 290,
              "name": "BOOLEAN",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 351,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 337,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 340,
            "end": 351,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 347,
              "end": 351,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 404,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 373,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 376,
            "end": 404,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 383,
              "end": 404,
              "properties": [
                {
                  "type": "Property",
                  "start": 385,
                  "end": 392,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 386,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 388,
                    "end": 392,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 394,
                  "end": 402,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 395,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 397,
                    "end": 402,
                    "value": false,
                    "raw": "false"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 435,
      "end": 472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 455,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 458,
            "end": 471,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 465,
              "end": 471,
              "object": {
                "type": "Identifier",
                "start": 465,
                "end": 469,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 470,
                "end": 471,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 473,
      "end": 507,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 506,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 493,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 496,
            "end": 506,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 503,
              "end": 506,
              "object": {
                "type": "Identifier",
                "start": 503,
                "end": 504,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 543,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 528,
            "name": "ResultIsBoolean6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 531,
            "end": 543,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 538,
              "end": 543,
              "callee": {
                "type": "Identifier",
                "start": 538,
                "end": 541,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 545,
      "end": 583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 549,
          "end": 582,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 565,
            "name": "ResultIsBoolean7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 568,
            "end": 582,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 575,
              "end": 582,
              "callee": {
                "type": "MemberExpression",
                "start": 575,
                "end": 580,
                "object": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 576,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 580,
                  "name": "foo",
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
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 614,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 618,
          "end": 658,
          "id": {
            "type": "Identifier",
            "start": 618,
            "end": 634,
            "name": "ResultIsBoolean8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 637,
            "end": 658,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 644,
              "end": 658,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 651,
                "end": 658,
                "name": "BOOLEAN",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 690,
      "end": 702,
      "expression": {
        "type": "UnaryExpression",
        "start": 690,
        "end": 701,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 697,
          "end": 701,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 703,
      "end": 718,
      "expression": {
        "type": "UnaryExpression",
        "start": 703,
        "end": 717,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 710,
          "end": 717,
          "name": "BOOLEAN",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 719,
      "end": 732,
      "expression": {
        "type": "UnaryExpression",
        "start": 719,
        "end": 731,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 726,
          "end": 731,
          "callee": {
            "type": "Identifier",
            "start": 726,
            "end": 729,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 733,
      "end": 752,
      "expression": {
        "type": "SequenceExpression",
        "start": 733,
        "end": 751,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 733,
            "end": 744,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 740,
              "end": 744,
              "value": true,
              "raw": "true"
            }
          },
          {
            "type": "Literal",
            "start": 746,
            "end": 751,
            "value": false,
            "raw": "false"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 753,
      "end": 767,
      "expression": {
        "type": "UnaryExpression",
        "start": 753,
        "end": 766,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 760,
          "end": 766,
          "object": {
            "type": "Identifier",
            "start": 760,
            "end": 764,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 765,
            "end": 766,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 768,
      "end": 779,
      "expression": {
        "type": "UnaryExpression",
        "start": 768,
        "end": 778,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 775,
          "end": 778,
          "object": {
            "type": "Identifier",
            "start": 775,
            "end": 776,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 777,
            "end": 778,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
