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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 56,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 56,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 49,
                "end": 56
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
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 99,
      "async": false,
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
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 82,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 75,
          "end": 82
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 133,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 168,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 168,
              "async": false,
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
                      "raw": "false",
                      "value": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
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
    {
      "type": "TSModuleDeclaration",
      "start": 171,
      "end": 210,
      "body": {
        "type": "TSModuleBlock",
        "start": 180,
        "end": 210,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 186,
            "end": 208,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 193,
              "end": 208,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 197,
                  "end": 207,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 207,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 200,
                        "end": 207
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 223,
            "end": 230,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 273,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 276,
            "end": 290,
            "argument": {
              "type": "Identifier",
              "start": 283,
              "end": 290,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 337,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 340,
            "end": 351,
            "argument": {
              "type": "Literal",
              "start": 347,
              "end": 351,
              "raw": "true",
              "value": true
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 373,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 376,
            "end": 404,
            "argument": {
              "type": "ObjectExpression",
              "start": 383,
              "end": 404,
              "properties": [
                {
                  "type": "Property",
                  "start": 385,
                  "end": 392,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 386,
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
                    "start": 388,
                    "end": 392,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "Property",
                  "start": 394,
                  "end": 402,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 395,
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
                    "start": 397,
                    "end": 402,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 455,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 458,
            "end": 471,
            "argument": {
              "type": "MemberExpression",
              "start": 465,
              "end": 471,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 465,
                "end": 469,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 470,
                "end": 471,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 493,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 496,
            "end": 506,
            "argument": {
              "type": "MemberExpression",
              "start": 503,
              "end": 506,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 503,
                "end": 504,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 528,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 531,
            "end": 543,
            "argument": {
              "type": "CallExpression",
              "start": 538,
              "end": 543,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 538,
                "end": 541,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 565,
            "decorators": [],
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 568,
            "end": 582,
            "argument": {
              "type": "CallExpression",
              "start": 575,
              "end": 582,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 575,
                "end": 580,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 576,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 580,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 618,
            "end": 634,
            "decorators": [],
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 637,
            "end": 658,
            "argument": {
              "type": "UnaryExpression",
              "start": 644,
              "end": 658,
              "argument": {
                "type": "Identifier",
                "start": 651,
                "end": 658,
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "delete",
              "prefix": true
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 690,
      "end": 702,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 690,
        "end": 701,
        "argument": {
          "type": "Literal",
          "start": 697,
          "end": 701,
          "raw": "true",
          "value": true
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 703,
      "end": 718,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 703,
        "end": 717,
        "argument": {
          "type": "Identifier",
          "start": 710,
          "end": 717,
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 719,
      "end": 732,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 719,
        "end": 731,
        "argument": {
          "type": "CallExpression",
          "start": 726,
          "end": 731,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 726,
            "end": 729,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 733,
      "end": 752,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 733,
        "end": 751,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 733,
            "end": 744,
            "argument": {
              "type": "Literal",
              "start": 740,
              "end": 744,
              "raw": "true",
              "value": true
            },
            "operator": "delete",
            "prefix": true
          },
          {
            "type": "Literal",
            "start": 746,
            "end": 751,
            "raw": "false",
            "value": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 753,
      "end": 767,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 753,
        "end": 766,
        "argument": {
          "type": "MemberExpression",
          "start": 760,
          "end": 766,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 760,
            "end": 764,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 765,
            "end": 766,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 768,
      "end": 779,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 768,
        "end": 778,
        "argument": {
          "type": "MemberExpression",
          "start": 775,
          "end": 778,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 775,
            "end": 776,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 777,
            "end": 778,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
