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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 80,
                "end": 82,
                "raw": "\"\"",
                "value": ""
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
      "start": 85,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 107,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
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
                  "start": 98,
                  "end": 99,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 100,
                "end": 106,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
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
                  "start": 102,
                  "end": 106,
                  "raw": "null",
                  "value": null
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
      "type": "ClassDeclaration",
      "start": 109,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 123,
            "end": 137,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
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
              "start": 131,
              "end": 136,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 133,
                "end": 136
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
        "start": 115,
        "end": 116,
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
      "start": 140,
      "end": 175,
      "body": {
        "type": "TSModuleBlock",
        "start": 149,
        "end": 175,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 155,
            "end": 173,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 162,
              "end": 173,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 166,
                  "end": 172,
                  "definite": false,
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
        "start": 147,
        "end": 148,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
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
      "start": 213,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 240,
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 237,
              "end": 240,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 266,
              "end": 270,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 295,
              "end": 299,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 325,
              "end": 329,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 373,
              "end": 380,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 373,
                "end": 377,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 378,
                "end": 379,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "++",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 406,
              "end": 411,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 406,
                "end": 409,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 437,
              "end": 442,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 437,
                "end": 440,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 441,
                "end": 442,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 468,
              "end": 474,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 468,
                "end": 472,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 499,
              "end": 502,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 499,
                "end": 500,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 527,
              "end": 534,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 527,
                "end": 531,
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 532,
                "end": 533,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 561,
              "end": 566,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 561,
                "end": 564,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 565,
                "end": 566,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 593,
              "end": 598,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 593,
                "end": 596,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 625,
              "end": 631,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 625,
                "end": 629,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 630,
                "end": 631,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 658,
              "end": 661,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 658,
                "end": 659,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 660,
                "end": 661,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "++",
            "prefix": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 694,
      "end": 700,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 694,
        "end": 699,
        "argument": {
          "type": "Identifier",
          "start": 696,
          "end": 699,
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 701,
      "end": 708,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 701,
        "end": 707,
        "argument": {
          "type": "Identifier",
          "start": 703,
          "end": 707,
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 719,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 709,
        "end": 718,
        "argument": {
          "type": "MemberExpression",
          "start": 711,
          "end": 718,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 711,
            "end": 715,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 716,
            "end": 717,
            "raw": "0",
            "value": 0
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 720,
      "end": 734,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 720,
        "end": 733,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 720,
            "end": 725,
            "argument": {
              "type": "Identifier",
              "start": 722,
              "end": 725,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          },
          {
            "type": "UpdateExpression",
            "start": 727,
            "end": 733,
            "argument": {
              "type": "Identifier",
              "start": 729,
              "end": 733,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": true
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 735,
      "end": 744,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 735,
        "end": 743,
        "argument": {
          "type": "MemberExpression",
          "start": 737,
          "end": 743,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 737,
            "end": 741,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 742,
            "end": 743,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 745,
      "end": 751,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 745,
        "end": 750,
        "argument": {
          "type": "MemberExpression",
          "start": 747,
          "end": 750,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 747,
            "end": 748,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 749,
            "end": 750,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 753,
      "end": 759,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 753,
        "end": 758,
        "argument": {
          "type": "Identifier",
          "start": 753,
          "end": 756,
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 760,
      "end": 767,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 760,
        "end": 766,
        "argument": {
          "type": "Identifier",
          "start": 760,
          "end": 764,
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 768,
      "end": 778,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 768,
        "end": 777,
        "argument": {
          "type": "MemberExpression",
          "start": 768,
          "end": 775,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 768,
            "end": 772,
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 773,
            "end": 774,
            "raw": "0",
            "value": 0
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 779,
      "end": 793,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 779,
        "end": 792,
        "expressions": [
          {
            "type": "UpdateExpression",
            "start": 779,
            "end": 784,
            "argument": {
              "type": "Identifier",
              "start": 779,
              "end": 782,
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": false
          },
          {
            "type": "UpdateExpression",
            "start": 786,
            "end": 792,
            "argument": {
              "type": "Identifier",
              "start": 786,
              "end": 790,
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "++",
            "prefix": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 794,
      "end": 803,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 794,
        "end": 802,
        "argument": {
          "type": "MemberExpression",
          "start": 794,
          "end": 800,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 794,
            "end": 798,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 799,
            "end": 800,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 804,
      "end": 810,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 804,
        "end": 809,
        "argument": {
          "type": "MemberExpression",
          "start": 804,
          "end": 807,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 804,
            "end": 805,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 806,
            "end": 807,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "++",
        "prefix": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
