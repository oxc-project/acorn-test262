__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 661,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "name": "fn1",
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
        "start": 60,
        "end": 73,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 71,
            "argument": {
              "type": "Literal",
              "start": 69,
              "end": 70,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 59,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 53,
          "end": 59
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 86,
        "name": "fn2",
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
        "start": 97,
        "end": 111,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 99,
            "end": 109,
            "argument": {
              "type": "Literal",
              "start": 106,
              "end": 108,
              "value": "",
              "raw": "''"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 96,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 90,
          "end": 96
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "name": "fn3",
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
        "start": 133,
        "end": 154,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 152,
            "argument": {
              "type": "Identifier",
              "start": 142,
              "end": 151,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 132,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 128,
          "end": 132
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 167,
        "name": "fn4",
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
        "start": 176,
        "end": 187,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 178,
            "end": 185,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 169,
        "end": 175,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 171,
          "end": 175
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 200,
        "name": "fn5",
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
        "start": 212,
        "end": 228,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 214,
            "end": 226,
            "argument": {
              "type": "Literal",
              "start": 221,
              "end": 225,
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
        "start": 202,
        "end": 211,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 204,
          "end": 211
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 229,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 241,
        "name": "fn6",
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
        "start": 250,
        "end": 274,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 252,
            "end": 272,
            "argument": {
              "type": "NewExpression",
              "start": 259,
              "end": 271,
              "callee": {
                "type": "Identifier",
                "start": 263,
                "end": 267,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 268,
                  "end": 270,
                  "value": 12,
                  "raw": "12"
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 243,
        "end": 249,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 245,
          "end": 249,
          "typeName": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "name": "Date",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 275,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 287,
        "name": "fn7",
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
        "start": 295,
        "end": 311,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 297,
            "end": 309,
            "argument": {
              "type": "Literal",
              "start": 304,
              "end": 308,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 289,
        "end": 294,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 291,
          "end": 294
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 312,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 324,
        "name": "fn8",
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
        "start": 332,
        "end": 343,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 334,
            "end": 341,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 326,
        "end": 331,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 328,
          "end": 331
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 378,
      "end": 404,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 390,
        "end": 404,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 392,
            "end": 402,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 394,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 402,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 396,
                "end": 402
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
      "start": 405,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 412,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 426,
        "end": 462,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 432,
            "end": 443,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 434,
              "name": "id",
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
              "start": 434,
              "end": 442,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 436,
                "end": 442
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 448,
            "end": 460,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 448,
              "end": 455,
              "name": "dispose",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 455,
              "end": 460,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 458,
                "end": 460,
                "body": []
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 424,
          "end": 425,
          "expression": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 463,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 469,
        "end": 470,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 479,
        "end": 480,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 481,
        "end": 502,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 487,
            "end": 500,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 491,
              "name": "name",
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
              "start": 491,
              "end": 499,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 493,
                "end": 499
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
    {
      "type": "FunctionDeclaration",
      "start": 503,
      "end": 544,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 516,
        "name": "fn10",
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
        "start": 522,
        "end": 544,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 524,
            "end": 542,
            "argument": {
              "type": "ObjectExpression",
              "start": 531,
              "end": 541,
              "properties": [
                {
                  "type": "Property",
                  "start": 533,
                  "end": 539,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 535,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 537,
                    "end": 539,
                    "value": 12,
                    "raw": "12"
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 518,
        "end": 521,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 520,
          "end": 521,
          "typeName": {
            "type": "Identifier",
            "start": 520,
            "end": 521,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 547,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 560,
        "name": "fn11",
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
        "start": 566,
        "end": 585,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 568,
            "end": 583,
            "argument": {
              "type": "NewExpression",
              "start": 575,
              "end": 582,
              "callee": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 562,
        "end": 565,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 564,
          "end": 565,
          "typeName": {
            "type": "Identifier",
            "start": 564,
            "end": 565,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 586,
      "end": 624,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 599,
        "name": "fn12",
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
        "start": 605,
        "end": 624,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 607,
            "end": 622,
            "argument": {
              "type": "NewExpression",
              "start": 614,
              "end": 621,
              "callee": {
                "type": "Identifier",
                "start": 618,
                "end": 619,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 601,
        "end": 604,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 603,
          "end": 604,
          "typeName": {
            "type": "Identifier",
            "start": 603,
            "end": 604,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 625,
      "end": 660,
      "id": {
        "type": "Identifier",
        "start": 634,
        "end": 638,
        "name": "fn13",
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
        "start": 644,
        "end": 660,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 646,
            "end": 658,
            "argument": {
              "type": "Literal",
              "start": 653,
              "end": 657,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 640,
        "end": 643,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 642,
          "end": 643,
          "typeName": {
            "type": "Identifier",
            "start": 642,
            "end": 643,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
