__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1185,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 541,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 541,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 540,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
              "name": "constObject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 27,
              "end": 540,
              "expression": {
                "type": "ObjectExpression",
                "start": 27,
                "end": 531,
                "properties": [
                  {
                    "type": "Property",
                    "start": 55,
                    "end": 61,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 58,
                      "name": "one",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 60,
                      "end": 61,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 91,
                    "end": 104,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 99,
                      "name": "oneOctal",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 101,
                      "end": 104,
                      "value": 1,
                      "raw": "0o1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 134,
                    "end": 145,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 140,
                      "name": "oneHex",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 142,
                      "end": 145,
                      "value": 1,
                      "raw": "0x1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 174,
                    "end": 182,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 178,
                      "name": "pOne",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "start": 180,
                      "end": 182,
                      "operator": "+",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 181,
                        "end": 182,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 211,
                    "end": 219,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 215,
                      "name": "mOne",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "start": 217,
                      "end": 219,
                      "operator": "-",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 218,
                        "end": 219,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 225,
                    "end": 248,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 230,
                      "name": "array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 232,
                      "end": 248,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 233,
                          "end": 234,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "UnaryExpression",
                          "start": 236,
                          "end": 238,
                          "operator": "-",
                          "prefix": true,
                          "argument": {
                            "type": "Literal",
                            "start": 237,
                            "end": 238,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 240,
                          "end": 242,
                          "value": null,
                          "raw": "1n",
                          "bigint": "1"
                        },
                        {
                          "type": "UnaryExpression",
                          "start": 244,
                          "end": 247,
                          "operator": "-",
                          "prefix": true,
                          "argument": {
                            "type": "Literal",
                            "start": 245,
                            "end": 247,
                            "value": null,
                            "raw": "1n",
                            "bigint": "1"
                          }
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 277,
                    "end": 285,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 281,
                      "name": "onen",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 283,
                      "end": 285,
                      "value": null,
                      "raw": "1n",
                      "bigint": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 315,
                    "end": 325,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 320,
                      "name": "mOnen",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "start": 322,
                      "end": 325,
                      "operator": "-",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 323,
                        "end": 325,
                        "value": null,
                        "raw": "1n",
                        "bigint": "1"
                      }
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 356,
                    "end": 378,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 373,
                      "name": "oneStrDoubleQuote",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 375,
                      "end": 378,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 408,
                    "end": 430,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 425,
                      "name": "oneStrSingleQuote",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 427,
                      "end": 430,
                      "value": "1",
                      "raw": "'1'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 460,
                    "end": 479,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 474,
                      "name": "oneStrTemplate",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "TemplateLiteral",
                      "start": 476,
                      "end": 479,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 476,
                          "end": 479,
                          "value": {
                            "cooked": "1",
                            "raw": "1"
                          },
                          "tail": true
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 505,
                    "end": 528,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 511,
                      "name": "method",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 511,
                      "end": 528,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 520,
                        "end": 528,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 513,
                        "end": 519,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 515,
                          "end": 519
                        }
                      }
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 535,
                "end": 540,
                "typeName": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 540,
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 543,
      "end": 564,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 550,
        "end": 564,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 556,
            "end": 563,
            "id": {
              "type": "Identifier",
              "start": 556,
              "end": 559,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 562,
              "end": 563,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 565,
      "end": 593,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 572,
        "end": 593,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 578,
            "end": 592,
            "id": {
              "type": "Identifier",
              "start": 578,
              "end": 586,
              "name": "oneOctal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 589,
              "end": 592,
              "value": 1,
              "raw": "0o1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 594,
      "end": 620,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 601,
        "end": 620,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 607,
            "end": 619,
            "id": {
              "type": "Identifier",
              "start": 607,
              "end": 613,
              "name": "oneHex",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 616,
              "end": 619,
              "value": 1,
              "raw": "0x1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 621,
      "end": 644,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 628,
        "end": 644,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 634,
            "end": 643,
            "id": {
              "type": "Identifier",
              "start": 634,
              "end": 638,
              "name": "pOne",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "UnaryExpression",
              "start": 641,
              "end": 643,
              "operator": "+",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 642,
                "end": 643,
                "value": 1,
                "raw": "1"
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 645,
      "end": 668,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 652,
        "end": 668,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 658,
            "end": 667,
            "id": {
              "type": "Identifier",
              "start": 658,
              "end": 662,
              "name": "mOne",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "UnaryExpression",
              "start": 665,
              "end": 667,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 666,
                "end": 667,
                "value": 1,
                "raw": "1"
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 669,
      "end": 692,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 676,
        "end": 692,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 682,
            "end": 691,
            "id": {
              "type": "Identifier",
              "start": 682,
              "end": 686,
              "name": "onen",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 689,
              "end": 691,
              "value": null,
              "raw": "1n",
              "bigint": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 693,
      "end": 718,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 700,
        "end": 718,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 706,
            "end": 717,
            "id": {
              "type": "Identifier",
              "start": 706,
              "end": 711,
              "name": "mOnen",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "UnaryExpression",
              "start": 714,
              "end": 717,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 715,
                "end": 717,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 719,
      "end": 756,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 726,
        "end": 756,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 732,
            "end": 755,
            "id": {
              "type": "Identifier",
              "start": 732,
              "end": 749,
              "name": "oneStrDoubleQuote",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 752,
              "end": 755,
              "value": "1",
              "raw": "\"1\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 757,
      "end": 794,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 764,
        "end": 794,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 770,
            "end": 793,
            "id": {
              "type": "Identifier",
              "start": 770,
              "end": 787,
              "name": "oneStrSingleQuote",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 790,
              "end": 793,
              "value": "1",
              "raw": "'1'"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 795,
      "end": 829,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 802,
        "end": 829,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 808,
            "end": 828,
            "id": {
              "type": "Identifier",
              "start": 808,
              "end": 822,
              "name": "oneStrTemplate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 825,
              "end": 828,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 825,
                  "end": 828,
                  "value": {
                    "cooked": "1",
                    "raw": "1"
                  },
                  "tail": true
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 831,
      "end": 1182,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 838,
        "end": 1182,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 844,
            "end": 1181,
            "id": {
              "type": "Identifier",
              "start": 844,
              "end": 857,
              "name": "mutableObject",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 860,
              "end": 1181,
              "properties": [
                {
                  "type": "Property",
                  "start": 888,
                  "end": 894,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 888,
                    "end": 891,
                    "name": "one",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 893,
                    "end": 894,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 924,
                  "end": 937,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 932,
                    "name": "oneOctal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 934,
                    "end": 937,
                    "value": 1,
                    "raw": "0o1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 967,
                  "end": 978,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 967,
                    "end": 973,
                    "name": "oneHex",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 975,
                    "end": 978,
                    "value": 1,
                    "raw": "0x1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1007,
                  "end": 1015,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1007,
                    "end": 1011,
                    "name": "pOne",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "start": 1013,
                    "end": 1015,
                    "operator": "+",
                    "prefix": true,
                    "argument": {
                      "type": "Literal",
                      "start": 1014,
                      "end": 1015,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1044,
                  "end": 1052,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1044,
                    "end": 1048,
                    "name": "mOne",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "start": 1050,
                    "end": 1052,
                    "operator": "-",
                    "prefix": true,
                    "argument": {
                      "type": "Literal",
                      "start": 1051,
                      "end": 1052,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1081,
                  "end": 1089,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1081,
                    "end": 1085,
                    "name": "onen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1087,
                    "end": 1089,
                    "value": null,
                    "raw": "1n",
                    "bigint": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1119,
                  "end": 1129,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1124,
                    "name": "mOnen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "start": 1126,
                    "end": 1129,
                    "operator": "-",
                    "prefix": true,
                    "argument": {
                      "type": "Literal",
                      "start": 1127,
                      "end": 1129,
                      "value": null,
                      "raw": "1n",
                      "bigint": "1"
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1155,
                  "end": 1178,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1155,
                    "end": 1161,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1161,
                    "end": 1178,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1170,
                      "end": 1178,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1163,
                      "end": 1169,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1165,
                        "end": 1169
                      }
                    }
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
