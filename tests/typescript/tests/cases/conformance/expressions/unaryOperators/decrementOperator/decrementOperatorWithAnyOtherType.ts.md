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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 40,
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
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
      "start": 42,
      "end": 56,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 55,
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 55,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
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
      "start": 57,
      "end": 84,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 72,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 108,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 99,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 100,
                "end": 106,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 102,
                  "end": 106,
                  "value": null,
                  "raw": "null"
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
      "type": "ClassDeclaration",
      "start": 109,
      "end": 139,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
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
        "start": 117,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 123,
            "end": 137,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 140,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 148,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 166,
                  "end": 172,
                  "id": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 172,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 169,
                        "end": 172
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
      "start": 176,
      "end": 195,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 184,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 187,
            "end": 194,
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
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
      "start": 213,
      "end": 241,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 232,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 235,
            "end": 240,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 271,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 261,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 264,
            "end": 270,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 266,
              "end": 270,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 302,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 292,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 295,
            "end": 301,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 295,
              "end": 299,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 332,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 322,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 325,
            "end": 331,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 325,
              "end": 329,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 381,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 368,
            "decorators": [],
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 371,
            "end": 380,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 373,
              "end": 380,
              "object": {
                "type": "Identifier",
                "start": 373,
                "end": 377,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 378,
                "end": 379,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 412,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 401,
            "decorators": [],
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 404,
            "end": 411,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 406,
              "end": 411,
              "object": {
                "type": "Identifier",
                "start": 406,
                "end": 409,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 443,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 432,
            "decorators": [],
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 435,
            "end": 442,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 437,
              "end": 442,
              "object": {
                "type": "Identifier",
                "start": 437,
                "end": 440,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 441,
                "end": 442,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 475,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 463,
            "decorators": [],
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 466,
            "end": 474,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 468,
              "end": 474,
              "object": {
                "type": "Identifier",
                "start": 468,
                "end": 472,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 503,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 494,
            "decorators": [],
            "name": "ResultIsNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 497,
            "end": 502,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 499,
              "end": 502,
              "object": {
                "type": "Identifier",
                "start": 499,
                "end": 500,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 537,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 536,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 524,
            "decorators": [],
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 527,
            "end": 536,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 527,
              "end": 534,
              "object": {
                "type": "Identifier",
                "start": 527,
                "end": 531,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 532,
                "end": 533,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 538,
      "end": 569,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 568,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 558,
            "decorators": [],
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 561,
            "end": 568,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 561,
              "end": 566,
              "object": {
                "type": "Identifier",
                "start": 561,
                "end": 564,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 565,
                "end": 566,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 570,
      "end": 601,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 574,
          "end": 600,
          "id": {
            "type": "Identifier",
            "start": 574,
            "end": 590,
            "decorators": [],
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 593,
            "end": 600,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 593,
              "end": 598,
              "object": {
                "type": "Identifier",
                "start": 593,
                "end": 596,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 602,
      "end": 634,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 633,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 622,
            "decorators": [],
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 625,
            "end": 633,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 625,
              "end": 631,
              "object": {
                "type": "Identifier",
                "start": 625,
                "end": 629,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 630,
                "end": 631,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 635,
      "end": 664,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 639,
          "end": 663,
          "id": {
            "type": "Identifier",
            "start": 639,
            "end": 655,
            "decorators": [],
            "name": "ResultIsNumber13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UpdateExpression",
            "start": 658,
            "end": 663,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "start": 658,
              "end": 661,
              "object": {
                "type": "Identifier",
                "start": 658,
                "end": 659,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 660,
                "end": 661,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
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
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 696,
          "end": 699,
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null
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
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 703,
          "end": 707,
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null
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
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 711,
          "end": 718,
          "object": {
            "type": "Identifier",
            "start": 711,
            "end": 715,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 716,
            "end": 717,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
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
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 722,
              "end": 725,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "UpdateExpression",
            "start": 727,
            "end": 733,
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 729,
              "end": 733,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
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
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 737,
          "end": 743,
          "object": {
            "type": "Identifier",
            "start": 737,
            "end": 741,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 742,
            "end": 743,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 747,
          "end": 750,
          "object": {
            "type": "Identifier",
            "start": 747,
            "end": 748,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 749,
            "end": 750,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 753,
          "end": 756,
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null
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
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 760,
          "end": 764,
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null
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
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 768,
          "end": 775,
          "object": {
            "type": "Identifier",
            "start": 768,
            "end": 772,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 773,
            "end": 774,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
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
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 779,
              "end": 782,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "UpdateExpression",
            "start": 786,
            "end": 792,
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "start": 786,
              "end": 790,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
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
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 794,
          "end": 800,
          "object": {
            "type": "Identifier",
            "start": 794,
            "end": 798,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 799,
            "end": 800,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 804,
          "end": 807,
          "object": {
            "type": "Identifier",
            "start": 804,
            "end": 805,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 806,
            "end": 807,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
