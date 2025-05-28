__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 1114,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 40,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 39,
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 39,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 36,
                "end": 39
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 50,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 78,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 66,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 66,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 61,
                "end": 66,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 61,
                  "end": 64
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 69,
            "end": 77,
            "elements": [
              {
                "type": "Literal",
                "start": 70,
                "end": 72,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 74,
                "end": 76,
                "value": "",
                "raw": "\"\""
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
      "start": 79,
      "end": 96,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 96,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 96,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 88,
                "end": 96,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 94,
                    "end": 96,
                    "members": []
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 149,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 105,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 108,
            "end": 148,
            "properties": [
              {
                "type": "Property",
                "start": 110,
                "end": 131,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 113,
                  "end": 131,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 114,
                      "end": 123,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 115,
                        "end": 123,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 117,
                          "end": 123
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 128,
                    "end": 131,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 133,
                "end": 147,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 136,
                  "end": 147,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 137,
                      "end": 139,
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 144,
                    "end": 147,
                    "body": []
                  },
                  "id": null,
                  "generator": false
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
      "type": "FunctionDeclaration",
      "start": 151,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 163,
        "decorators": [],
        "name": "foo",
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
        "start": 165,
        "end": 170,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 167,
          "end": 170
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 171,
        "end": 199,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 177,
            "end": 183,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 182,
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 188,
            "end": 197,
            "argument": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 200,
      "end": 288,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 207,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 208,
        "end": 288,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 214,
            "end": 228,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 227,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 224,
                "end": 227
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 233,
            "end": 286,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 243,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 243,
              "end": 286,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 286,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 256,
                    "end": 262,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 260,
                        "end": 261,
                        "id": {
                          "type": "Identifier",
                          "start": 260,
                          "end": 261,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 271,
                    "end": 280,
                    "argument": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "type": "TSModuleDeclaration",
      "start": 289,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 297,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 298,
        "end": 324,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 304,
            "end": 322,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 311,
              "end": 322,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 315,
                  "end": 321,
                  "id": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 321,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 318,
                        "end": 321
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 344,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 343,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 333,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 336,
            "end": 343,
            "callee": {
              "type": "Identifier",
              "start": 340,
              "end": 341,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 396,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 395,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 387,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 390,
            "end": 395,
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 391,
              "end": 395,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 425,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 416,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 419,
            "end": 424,
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 420,
              "end": 424,
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 426,
      "end": 451,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 450,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 445,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 448,
            "end": 450,
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 452,
      "end": 477,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 471,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 474,
            "end": 476,
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 475,
              "end": 476,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 505,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 504,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 497,
            "decorators": [],
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 500,
            "end": 504,
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 501,
              "end": 504,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 506,
      "end": 534,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 533,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 525,
            "decorators": [],
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 528,
            "end": 533,
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 529,
              "end": 533,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 556,
      "end": 589,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 560,
          "end": 588,
          "id": {
            "type": "Identifier",
            "start": 560,
            "end": 575,
            "decorators": [],
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 578,
            "end": 588,
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 579,
              "end": 588,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 590,
      "end": 618,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 617,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 609,
            "decorators": [],
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 612,
            "end": 617,
            "operator": "+",
            "argument": {
              "type": "Literal",
              "start": 613,
              "end": 617,
              "value": null,
              "raw": "null"
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 644,
      "end": 675,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 648,
          "end": 674,
          "id": {
            "type": "Identifier",
            "start": 648,
            "end": 663,
            "decorators": [],
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 666,
            "end": 674,
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "start": 667,
              "end": 674,
              "object": {
                "type": "Identifier",
                "start": 667,
                "end": 671,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 672,
                "end": 673,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 676,
      "end": 707,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 680,
          "end": 706,
          "id": {
            "type": "Identifier",
            "start": 680,
            "end": 696,
            "decorators": [],
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 699,
            "end": 706,
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "start": 700,
              "end": 706,
              "object": {
                "type": "Identifier",
                "start": 700,
                "end": 704,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 708,
      "end": 739,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 712,
          "end": 738,
          "id": {
            "type": "Identifier",
            "start": 712,
            "end": 728,
            "decorators": [],
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 731,
            "end": 738,
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "start": 732,
              "end": 738,
              "object": {
                "type": "Identifier",
                "start": 732,
                "end": 736,
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 737,
                "end": 738,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 740,
      "end": 771,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 744,
          "end": 770,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 760,
            "decorators": [],
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 763,
            "end": 770,
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "start": 764,
              "end": 770,
              "object": {
                "type": "Identifier",
                "start": 764,
                "end": 768,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 772,
      "end": 800,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 776,
          "end": 799,
          "id": {
            "type": "Identifier",
            "start": 776,
            "end": 792,
            "decorators": [],
            "name": "ResultIsNumber13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 795,
            "end": 799,
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "start": 796,
              "end": 799,
              "object": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 798,
                "end": 799,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 801,
      "end": 831,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 805,
          "end": 830,
          "id": {
            "type": "Identifier",
            "start": 805,
            "end": 821,
            "decorators": [],
            "name": "ResultIsNumber14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 824,
            "end": 830,
            "operator": "+",
            "argument": {
              "type": "CallExpression",
              "start": 825,
              "end": 830,
              "callee": {
                "type": "Identifier",
                "start": 825,
                "end": 828,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 832,
      "end": 864,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 836,
          "end": 863,
          "id": {
            "type": "Identifier",
            "start": 836,
            "end": 852,
            "decorators": [],
            "name": "ResultIsNumber15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 855,
            "end": 863,
            "operator": "+",
            "argument": {
              "type": "CallExpression",
              "start": 856,
              "end": 863,
              "callee": {
                "type": "MemberExpression",
                "start": 856,
                "end": 861,
                "object": {
                  "type": "Identifier",
                  "start": 856,
                  "end": 857,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 858,
                  "end": 861,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 865,
      "end": 902,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 869,
          "end": 901,
          "id": {
            "type": "Identifier",
            "start": 869,
            "end": 885,
            "decorators": [],
            "name": "ResultIsNumber16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 888,
            "end": 901,
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "start": 890,
              "end": 900,
              "left": {
                "type": "Identifier",
                "start": 890,
                "end": 893,
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 896,
                "end": 900,
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 903,
      "end": 946,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 907,
          "end": 945,
          "id": {
            "type": "Identifier",
            "start": 907,
            "end": 923,
            "decorators": [],
            "name": "ResultIsNumber17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 926,
            "end": 945,
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "start": 928,
              "end": 944,
              "left": {
                "type": "Literal",
                "start": 928,
                "end": 932,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 935,
                "end": 944,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 947,
      "end": 985,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 951,
          "end": 984,
          "id": {
            "type": "Identifier",
            "start": 951,
            "end": 967,
            "decorators": [],
            "name": "ResultIsNumber18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 970,
            "end": 984,
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "start": 972,
              "end": 983,
              "left": {
                "type": "Literal",
                "start": 972,
                "end": 976,
                "value": null,
                "raw": "null"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 979,
                "end": 983,
                "value": null,
                "raw": "null"
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 986,
      "end": 1034,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 990,
          "end": 1033,
          "id": {
            "type": "Identifier",
            "start": 990,
            "end": 1006,
            "decorators": [],
            "name": "ResultIsNumber19",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 1009,
            "end": 1033,
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "start": 1011,
              "end": 1032,
              "left": {
                "type": "Identifier",
                "start": 1011,
                "end": 1020,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1023,
                "end": 1032,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1065,
      "end": 1070,
      "expression": {
        "type": "UnaryExpression",
        "start": 1065,
        "end": 1069,
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "start": 1066,
          "end": 1069,
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1071,
      "end": 1077,
      "expression": {
        "type": "UnaryExpression",
        "start": 1071,
        "end": 1076,
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "start": 1072,
          "end": 1076,
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1078,
      "end": 1087,
      "expression": {
        "type": "UnaryExpression",
        "start": 1078,
        "end": 1086,
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "start": 1079,
          "end": 1086,
          "object": {
            "type": "Identifier",
            "start": 1079,
            "end": 1083,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1084,
            "end": 1085,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1088,
      "end": 1099,
      "expression": {
        "type": "SequenceExpression",
        "start": 1088,
        "end": 1098,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1088,
            "end": 1092,
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "start": 1089,
              "end": 1092,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 1094,
            "end": 1098,
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1100,
      "end": 1108,
      "expression": {
        "type": "UnaryExpression",
        "start": 1100,
        "end": 1107,
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "start": 1101,
          "end": 1107,
          "object": {
            "type": "Identifier",
            "start": 1101,
            "end": 1105,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1106,
            "end": 1107,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1109,
      "end": 1114,
      "expression": {
        "type": "UnaryExpression",
        "start": 1109,
        "end": 1113,
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "start": 1110,
          "end": 1113,
          "object": {
            "type": "Identifier",
            "start": 1110,
            "end": 1111,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1112,
            "end": 1113,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
