__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 810,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 40,
            "name": "ANY",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
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
      "start": 42,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 55,
            "name": "ANY1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 55,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
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
      "start": 57,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 72,
            "name": "ANY2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 72,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 67,
                "end": 72,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 67,
                  "end": 70
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 75,
            "end": 83,
            "elements": [
              {
                "type": "Literal",
                "start": 76,
                "end": 78,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 82,
                "value": "",
                "raw": "\"\""
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
      "start": 85,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 95,
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 96,
                "end": 99,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 99,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 100,
                "end": 106,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 102,
                  "end": 106,
                  "value": null,
                  "raw": "null"
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
      "type": "ClassDeclaration",
      "start": 109,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 123,
            "end": 137,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
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
              "start": 131,
              "end": 136,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 133,
                "end": 136
              }
            },
            "accessibility": "public"
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
      "start": 140,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 148,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 149,
        "end": 175,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 155,
            "end": 173,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 162,
              "end": 173,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 166,
                  "end": 172,
                  "id": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 172,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 169,
                        "end": 172
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
      "start": 176,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 184,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 187,
            "end": 194,
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
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
      "start": 213,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 232,
            "name": "ResultIsNumber1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 235,
            "end": 240,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "name": "ANY",
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
      "start": 242,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 261,
            "name": "ResultIsNumber2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 264,
            "end": 270,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 266,
              "end": 270,
              "name": "ANY1",
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
      "start": 273,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 292,
            "name": "ResultIsNumber3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 295,
            "end": 301,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 295,
              "end": 299,
              "name": "ANY1",
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
      "start": 303,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 322,
            "name": "ResultIsNumber4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 325,
            "end": 331,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 325,
              "end": 329,
              "name": "ANY1",
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
      "start": 349,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 368,
            "name": "ResultIsNumber5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 371,
            "end": 380,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 373,
              "end": 380,
              "object": {
                "type": "Identifier",
                "start": 373,
                "end": 377,
                "name": "ANY2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 378,
                "end": 379,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
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
      "start": 382,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 401,
            "name": "ResultIsNumber6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 404,
            "end": 411,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 406,
              "end": 411,
              "object": {
                "type": "Identifier",
                "start": 406,
                "end": 409,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "name": "x",
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
      "start": 413,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 432,
            "name": "ResultIsNumber7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 435,
            "end": 442,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 437,
              "end": 442,
              "object": {
                "type": "Identifier",
                "start": 437,
                "end": 440,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 441,
                "end": 442,
                "name": "y",
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
      "start": 444,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 463,
            "name": "ResultIsNumber8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 466,
            "end": 474,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 468,
              "end": 474,
              "object": {
                "type": "Identifier",
                "start": 468,
                "end": 472,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
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
      "start": 476,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 494,
            "name": "ResultIsNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 497,
            "end": 502,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 499,
              "end": 502,
              "object": {
                "type": "Identifier",
                "start": 499,
                "end": 500,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
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
      "start": 505,
      "end": 537,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 536,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 524,
            "name": "ResultIsNumber9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 527,
            "end": 536,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 527,
              "end": 534,
              "object": {
                "type": "Identifier",
                "start": 527,
                "end": 531,
                "name": "ANY2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 532,
                "end": 533,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
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
      "start": 538,
      "end": 569,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 568,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 558,
            "name": "ResultIsNumber10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 561,
            "end": 568,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 561,
              "end": 566,
              "object": {
                "type": "Identifier",
                "start": 561,
                "end": 564,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 565,
                "end": 566,
                "name": "x",
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
      "start": 570,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 574,
          "end": 600,
          "id": {
            "type": "Identifier",
            "start": 574,
            "end": 590,
            "name": "ResultIsNumber11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 593,
            "end": 600,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 593,
              "end": 598,
              "object": {
                "type": "Identifier",
                "start": 593,
                "end": 596,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "name": "y",
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
      "start": 602,
      "end": 634,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 633,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 622,
            "name": "ResultIsNumber12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 625,
            "end": 633,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 625,
              "end": 631,
              "object": {
                "type": "Identifier",
                "start": 625,
                "end": 629,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 630,
                "end": 631,
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
      "start": 635,
      "end": 664,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 639,
          "end": 663,
          "id": {
            "type": "Identifier",
            "start": 639,
            "end": 655,
            "name": "ResultIsNumber13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UpdateExpression",
            "start": 658,
            "end": 663,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 658,
              "end": 661,
              "object": {
                "type": "Identifier",
                "start": 658,
                "end": 659,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 660,
                "end": 661,
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
      "type": "ExpressionStatement",
      "start": 694,
      "end": 700,
      "expression": {
        "type": "UpdateExpression",
        "start": 694,
        "end": 699,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 696,
          "end": 699,
          "name": "ANY",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 701,
      "end": 708,
      "expression": {
        "type": "UpdateExpression",
        "start": 701,
        "end": 707,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 703,
          "end": 707,
          "name": "ANY1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 719,
      "expression": {
        "type": "UpdateExpression",
        "start": 709,
        "end": 718,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 711,
          "end": 718,
          "object": {
            "type": "Identifier",
            "start": 711,
            "end": 715,
            "name": "ANY2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 716,
            "end": 717,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 720,
      "end": 734,
      "expression": {
        "type": "SequenceExpression",
        "start": 720,
        "end": 733,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 720,
            "end": 725,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 722,
              "end": 725,
              "name": "ANY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "UpdateExpression",
            "start": 727,
            "end": 733,
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 729,
              "end": 733,
              "name": "ANY1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 735,
      "end": 744,
      "expression": {
        "type": "UpdateExpression",
        "start": 735,
        "end": 743,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 737,
          "end": 743,
          "object": {
            "type": "Identifier",
            "start": 737,
            "end": 741,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 742,
            "end": 743,
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
      "start": 745,
      "end": 751,
      "expression": {
        "type": "UpdateExpression",
        "start": 745,
        "end": 750,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 747,
          "end": 750,
          "object": {
            "type": "Identifier",
            "start": 747,
            "end": 748,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 749,
            "end": 750,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 753,
      "end": 759,
      "expression": {
        "type": "UpdateExpression",
        "start": 753,
        "end": 758,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 753,
          "end": 756,
          "name": "ANY",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 760,
      "end": 767,
      "expression": {
        "type": "UpdateExpression",
        "start": 760,
        "end": 766,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 760,
          "end": 764,
          "name": "ANY1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 768,
      "end": 778,
      "expression": {
        "type": "UpdateExpression",
        "start": 768,
        "end": 777,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 768,
          "end": 775,
          "object": {
            "type": "Identifier",
            "start": 768,
            "end": 772,
            "name": "ANY2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 773,
            "end": 774,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 779,
      "end": 793,
      "expression": {
        "type": "SequenceExpression",
        "start": 779,
        "end": 792,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 779,
            "end": 784,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 779,
              "end": 782,
              "name": "ANY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "UpdateExpression",
            "start": 786,
            "end": 792,
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 786,
              "end": 790,
              "name": "ANY1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 794,
      "end": 803,
      "expression": {
        "type": "UpdateExpression",
        "start": 794,
        "end": 802,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 794,
          "end": 800,
          "object": {
            "type": "Identifier",
            "start": 794,
            "end": 798,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 799,
            "end": 800,
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
      "start": 804,
      "end": 810,
      "expression": {
        "type": "UpdateExpression",
        "start": 804,
        "end": 809,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 804,
          "end": 807,
          "object": {
            "type": "Identifier",
            "start": 804,
            "end": 805,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 806,
            "end": 807,
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
