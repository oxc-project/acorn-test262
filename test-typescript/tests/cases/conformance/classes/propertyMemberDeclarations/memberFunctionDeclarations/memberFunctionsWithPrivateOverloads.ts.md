__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1191,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 531,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 531,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 25,
              "end": 37,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 53,
              "end": 76,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 63,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 57,
                      "end": 63
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 74,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 68,
                      "end": 74
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 113,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 113,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 99,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 96,
                      "end": 99
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 108,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 108,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 105,
                      "end": 108
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 113,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 140,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 130,
              "end": 140,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 131,
                  "end": 138,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 134,
                      "end": 138,
                      "literal": {
                        "type": "Literal",
                        "start": 134,
                        "end": 138,
                        "value": "hi",
                        "raw": "'hi'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 156,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 157,
                  "end": 166,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 158,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 160,
                      "end": 166
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 207,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 184,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 185,
                  "end": 194,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 186,
                    "end": 194,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 188,
                      "end": 194
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 196,
                  "end": 205,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 199,
                      "end": 205
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 212,
            "end": 244,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 223,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 223,
              "end": 244,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 224,
                  "end": 230,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 230,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 227,
                      "end": 230
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 239,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 239,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 236,
                      "end": 239
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 241,
                "end": 244,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 250,
            "end": 280,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 268,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 268,
              "end": 280,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 269,
                  "end": 278,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 272,
                      "end": 278
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 285,
            "end": 326,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 303,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 303,
              "end": 326,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 304,
                  "end": 313,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 305,
                    "end": 313,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 307,
                      "end": 313
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 315,
                  "end": 324,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 316,
                    "end": 324,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 318,
                      "end": 324
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 331,
            "end": 370,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 349,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 370,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 350,
                  "end": 356,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 356,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 353,
                      "end": 356
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 358,
                  "end": 365,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 360,
                    "end": 365,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 362,
                      "end": 365
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 367,
                "end": 370,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 376,
            "end": 404,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 394,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 394,
              "end": 404,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 395,
                  "end": 402,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 396,
                    "end": 402,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 398,
                      "end": 402,
                      "literal": {
                        "type": "Literal",
                        "start": 398,
                        "end": 402,
                        "value": "hi",
                        "raw": "'hi'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 409,
            "end": 439,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 427,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 427,
              "end": 439,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 428,
                  "end": 437,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 437,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 431,
                      "end": 437
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 485,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 462,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 462,
              "end": 485,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 463,
                  "end": 472,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 464,
                    "end": 472,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 466,
                      "end": 472
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 474,
                  "end": 483,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 477,
                      "end": 483
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 490,
            "end": 529,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 505,
              "end": 508,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 508,
              "end": 529,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 509,
                  "end": 515,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 510,
                    "end": 515,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 512,
                      "end": 515
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 517,
                  "end": 524,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 519,
                    "end": 524,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 521,
                      "end": 524
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 526,
                "end": 529,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
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
      "type": "ClassDeclaration",
      "start": 533,
      "end": 1048,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 540,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 544,
        "end": 1048,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 550,
            "end": 573,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 561,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 561,
              "end": 573,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 562,
                  "end": 571,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 571,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 565,
                      "end": 571
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 578,
            "end": 602,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 589,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 589,
              "end": 602,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 590,
                  "end": 594,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 591,
                    "end": 594,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 593,
                      "end": 594,
                      "typeName": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 594,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 596,
                  "end": 600,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 597,
                    "end": 600,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 599,
                      "end": 600,
                      "typeName": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 607,
            "end": 639,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 615,
              "end": 618,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 618,
              "end": 639,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 619,
                  "end": 625,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 620,
                    "end": 625,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 622,
                      "end": 625
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 627,
                  "end": 634,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 629,
                    "end": 634,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 631,
                      "end": 634
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 636,
                "end": 639,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 645,
            "end": 666,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 653,
              "end": 656,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 656,
              "end": 666,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 657,
                  "end": 664,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 658,
                    "end": 664,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 660,
                      "end": 664,
                      "literal": {
                        "type": "Literal",
                        "start": 660,
                        "end": 664,
                        "value": "hi",
                        "raw": "'hi'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 671,
            "end": 694,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 679,
              "end": 682,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 682,
              "end": 694,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 683,
                  "end": 692,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 684,
                    "end": 692,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 686,
                      "end": 692
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 699,
            "end": 723,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 707,
              "end": 710,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 710,
              "end": 723,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 711,
                  "end": 715,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 712,
                    "end": 715,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 714,
                      "end": 715,
                      "typeName": {
                        "type": "Identifier",
                        "start": 714,
                        "end": 715,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 717,
                  "end": 721,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 718,
                    "end": 721,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 720,
                      "end": 721,
                      "typeName": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 728,
            "end": 760,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 736,
              "end": 739,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 739,
              "end": 760,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 740,
                  "end": 746,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 746,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 743,
                      "end": 746
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 748,
                  "end": 755,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 750,
                    "end": 755,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 752,
                      "end": 755
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 757,
                "end": 760,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 766,
            "end": 796,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 781,
              "end": 784,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 784,
              "end": 796,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 785,
                  "end": 794,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 786,
                    "end": 794,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 788,
                      "end": 794
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 801,
            "end": 842,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 816,
              "end": 819,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 819,
              "end": 842,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 820,
                  "end": 829,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 821,
                    "end": 829,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 823,
                      "end": 829
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 831,
                  "end": 840,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 832,
                    "end": 840,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 834,
                      "end": 840
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 847,
            "end": 886,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 862,
              "end": 865,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 865,
              "end": 886,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 866,
                  "end": 872,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 867,
                    "end": 872,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 869,
                      "end": 872
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 874,
                  "end": 881,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 876,
                    "end": 881,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 878,
                      "end": 881
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 883,
                "end": 886,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 892,
            "end": 920,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 907,
              "end": 910,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 910,
              "end": 920,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 911,
                  "end": 918,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 912,
                    "end": 918,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 914,
                      "end": 918,
                      "literal": {
                        "type": "Literal",
                        "start": 914,
                        "end": 918,
                        "value": "hi",
                        "raw": "'hi'"
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 925,
            "end": 955,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 940,
              "end": 943,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 943,
              "end": 955,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 944,
                  "end": 953,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 945,
                    "end": 953,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 947,
                      "end": 953
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 960,
            "end": 1001,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 975,
              "end": 978,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 978,
              "end": 1001,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 979,
                  "end": 988,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 980,
                    "end": 988,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 982,
                      "end": 988
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 990,
                  "end": 999,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 991,
                    "end": 999,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 993,
                      "end": 999
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1006,
            "end": 1045,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1021,
              "end": 1024,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1024,
              "end": 1045,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1025,
                  "end": 1031,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1026,
                    "end": 1031,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1028,
                      "end": 1031
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1033,
                  "end": 1040,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1035,
                    "end": 1040,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1037,
                      "end": 1040
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1042,
                "end": 1045,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 540,
        "end": 543,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 541,
            "end": 542,
            "name": {
              "type": "Identifier",
              "start": 541,
              "end": 542,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1050,
      "end": 1059,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1054,
          "end": 1058,
          "id": {
            "type": "Identifier",
            "start": 1054,
            "end": 1058,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1055,
              "end": 1058,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1057,
                "end": 1058,
                "typeName": {
                  "type": "Identifier",
                  "start": 1057,
                  "end": 1058,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 1060,
      "end": 1077,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1064,
          "end": 1076,
          "id": {
            "type": "Identifier",
            "start": 1064,
            "end": 1065,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1068,
            "end": 1076,
            "callee": {
              "type": "MemberExpression",
              "start": 1068,
              "end": 1073,
              "object": {
                "type": "Identifier",
                "start": 1068,
                "end": 1069,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1070,
                "end": 1073,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1074,
                "end": 1075,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
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
      "start": 1088,
      "end": 1105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1092,
          "end": 1104,
          "id": {
            "type": "Identifier",
            "start": 1092,
            "end": 1104,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1093,
              "end": 1104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1095,
                "end": 1104,
                "typeName": {
                  "type": "Identifier",
                  "start": 1095,
                  "end": 1096,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1096,
                  "end": 1104,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1097,
                      "end": 1103
                    }
                  ]
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
      "start": 1106,
      "end": 1124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1110,
          "end": 1123,
          "id": {
            "type": "Identifier",
            "start": 1110,
            "end": 1112,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1115,
            "end": 1123,
            "callee": {
              "type": "MemberExpression",
              "start": 1115,
              "end": 1120,
              "object": {
                "type": "Identifier",
                "start": 1115,
                "end": 1116,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1117,
                "end": 1120,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1121,
                "end": 1122,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false,
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
      "start": 1135,
      "end": 1153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1139,
          "end": 1152,
          "id": {
            "type": "Identifier",
            "start": 1139,
            "end": 1141,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1144,
            "end": 1152,
            "callee": {
              "type": "MemberExpression",
              "start": 1144,
              "end": 1149,
              "object": {
                "type": "Identifier",
                "start": 1144,
                "end": 1145,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1146,
                "end": 1149,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1150,
                "end": 1151,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
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
      "start": 1163,
      "end": 1182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1167,
          "end": 1181,
          "id": {
            "type": "Identifier",
            "start": 1167,
            "end": 1169,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1172,
            "end": 1181,
            "callee": {
              "type": "MemberExpression",
              "start": 1172,
              "end": 1177,
              "object": {
                "type": "Identifier",
                "start": 1172,
                "end": 1173,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1174,
                "end": 1177,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1178,
                "end": 1180,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
