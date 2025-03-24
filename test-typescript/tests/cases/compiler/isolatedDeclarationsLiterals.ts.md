__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1184,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 541,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 541,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 540,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
              "decorators": [],
              "name": "constObject",
              "optional": false,
              "typeAnnotation": null
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 58,
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 60,
                      "end": 61,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 91,
                    "end": 104,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 99,
                      "decorators": [],
                      "name": "oneOctal",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 101,
                      "end": 104,
                      "raw": "0o1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 134,
                    "end": 145,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 140,
                      "decorators": [],
                      "name": "oneHex",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 142,
                      "end": 145,
                      "raw": "0x1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 174,
                    "end": 182,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 178,
                      "decorators": [],
                      "name": "pOne",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "UnaryExpression",
                      "start": 180,
                      "end": 182,
                      "argument": {
                        "type": "Literal",
                        "start": 181,
                        "end": 182,
                        "raw": "1",
                        "value": 1
                      },
                      "operator": "+",
                      "prefix": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 211,
                    "end": 219,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 215,
                      "decorators": [],
                      "name": "mOne",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "UnaryExpression",
                      "start": 217,
                      "end": 219,
                      "argument": {
                        "type": "Literal",
                        "start": 218,
                        "end": 219,
                        "raw": "1",
                        "value": 1
                      },
                      "operator": "-",
                      "prefix": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 225,
                    "end": 248,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 230,
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 232,
                      "end": 248,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 233,
                          "end": 234,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "UnaryExpression",
                          "start": 236,
                          "end": 238,
                          "argument": {
                            "type": "Literal",
                            "start": 237,
                            "end": 238,
                            "raw": "1",
                            "value": 1
                          },
                          "operator": "-",
                          "prefix": true
                        },
                        {
                          "type": "Literal",
                          "start": 240,
                          "end": 242,
                          "bigint": "1",
                          "raw": "1n",
                          "value": null
                        },
                        {
                          "type": "UnaryExpression",
                          "start": 244,
                          "end": 247,
                          "argument": {
                            "type": "Literal",
                            "start": 245,
                            "end": 247,
                            "bigint": "1",
                            "raw": "1n",
                            "value": null
                          },
                          "operator": "-",
                          "prefix": true
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 277,
                    "end": 285,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 281,
                      "decorators": [],
                      "name": "onen",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 283,
                      "end": 285,
                      "bigint": "1",
                      "raw": "1n",
                      "value": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 315,
                    "end": 325,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 320,
                      "decorators": [],
                      "name": "mOnen",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "UnaryExpression",
                      "start": 322,
                      "end": 325,
                      "argument": {
                        "type": "Literal",
                        "start": 323,
                        "end": 325,
                        "bigint": "1",
                        "raw": "1n",
                        "value": null
                      },
                      "operator": "-",
                      "prefix": true
                    }
                  },
                  {
                    "type": "Property",
                    "start": 356,
                    "end": 378,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 373,
                      "decorators": [],
                      "name": "oneStrDoubleQuote",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 375,
                      "end": 378,
                      "raw": "\"1\"",
                      "value": "1"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 408,
                    "end": 430,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 425,
                      "decorators": [],
                      "name": "oneStrSingleQuote",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 427,
                      "end": 430,
                      "raw": "'1'",
                      "value": "1"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 460,
                    "end": 479,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 460,
                      "end": 474,
                      "decorators": [],
                      "name": "oneStrTemplate",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
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
                          "tail": true,
                          "value": {
                            "cooked": "1",
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 505,
                    "end": 528,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 511,
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 511,
                      "end": 528,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 520,
                        "end": 528,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 513,
                        "end": 519,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 515,
                          "end": 519
                        }
                      },
                      "typeParameters": null
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 535,
                "end": 540,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 540,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 543,
      "end": 564,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 550,
        "end": 564,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 556,
            "end": 563,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 556,
              "end": 559,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 562,
              "end": 563,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 565,
      "end": 593,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 572,
        "end": 593,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 578,
            "end": 592,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 578,
              "end": 586,
              "decorators": [],
              "name": "oneOctal",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 589,
              "end": 592,
              "raw": "0o1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 594,
      "end": 620,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 601,
        "end": 620,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 607,
            "end": 619,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 607,
              "end": 613,
              "decorators": [],
              "name": "oneHex",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 616,
              "end": 619,
              "raw": "0x1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 621,
      "end": 644,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 628,
        "end": 644,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 634,
            "end": 643,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 634,
              "end": 638,
              "decorators": [],
              "name": "pOne",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "UnaryExpression",
              "start": 641,
              "end": 643,
              "argument": {
                "type": "Literal",
                "start": 642,
                "end": 643,
                "raw": "1",
                "value": 1
              },
              "operator": "+",
              "prefix": true
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 645,
      "end": 668,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 652,
        "end": 668,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 658,
            "end": 667,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 658,
              "end": 662,
              "decorators": [],
              "name": "mOne",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "UnaryExpression",
              "start": 665,
              "end": 667,
              "argument": {
                "type": "Literal",
                "start": 666,
                "end": 667,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 669,
      "end": 692,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 676,
        "end": 692,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 682,
            "end": 691,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 682,
              "end": 686,
              "decorators": [],
              "name": "onen",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 689,
              "end": 691,
              "bigint": "1",
              "raw": "1n",
              "value": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 693,
      "end": 718,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 700,
        "end": 718,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 706,
            "end": 717,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 706,
              "end": 711,
              "decorators": [],
              "name": "mOnen",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "UnaryExpression",
              "start": 714,
              "end": 717,
              "argument": {
                "type": "Literal",
                "start": 715,
                "end": 717,
                "bigint": "1",
                "raw": "1n",
                "value": null
              },
              "operator": "-",
              "prefix": true
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 719,
      "end": 756,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 726,
        "end": 756,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 732,
            "end": 755,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 732,
              "end": 749,
              "decorators": [],
              "name": "oneStrDoubleQuote",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 752,
              "end": 755,
              "raw": "\"1\"",
              "value": "1"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 757,
      "end": 794,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 764,
        "end": 794,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 770,
            "end": 793,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 770,
              "end": 787,
              "decorators": [],
              "name": "oneStrSingleQuote",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 790,
              "end": 793,
              "raw": "'1'",
              "value": "1"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 795,
      "end": 829,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 802,
        "end": 829,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 808,
            "end": 828,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 808,
              "end": 822,
              "decorators": [],
              "name": "oneStrTemplate",
              "optional": false,
              "typeAnnotation": null
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
                  "tail": true,
                  "value": {
                    "cooked": "1",
                    "raw": "1"
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 831,
      "end": 1182,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 838,
        "end": 1182,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 844,
            "end": 1181,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 844,
              "end": 857,
              "decorators": [],
              "name": "mutableObject",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 888,
                    "end": 891,
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 893,
                    "end": 894,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 924,
                  "end": 937,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 932,
                    "decorators": [],
                    "name": "oneOctal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 934,
                    "end": 937,
                    "raw": "0o1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 967,
                  "end": 978,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 967,
                    "end": 973,
                    "decorators": [],
                    "name": "oneHex",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 975,
                    "end": 978,
                    "raw": "0x1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 1007,
                  "end": 1015,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1007,
                    "end": 1011,
                    "decorators": [],
                    "name": "pOne",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "UnaryExpression",
                    "start": 1013,
                    "end": 1015,
                    "argument": {
                      "type": "Literal",
                      "start": 1014,
                      "end": 1015,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "+",
                    "prefix": true
                  }
                },
                {
                  "type": "Property",
                  "start": 1044,
                  "end": 1052,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1044,
                    "end": 1048,
                    "decorators": [],
                    "name": "mOne",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "UnaryExpression",
                    "start": 1050,
                    "end": 1052,
                    "argument": {
                      "type": "Literal",
                      "start": 1051,
                      "end": 1052,
                      "raw": "1",
                      "value": 1
                    },
                    "operator": "-",
                    "prefix": true
                  }
                },
                {
                  "type": "Property",
                  "start": 1081,
                  "end": 1089,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1081,
                    "end": 1085,
                    "decorators": [],
                    "name": "onen",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1087,
                    "end": 1089,
                    "bigint": "1",
                    "raw": "1n",
                    "value": null
                  }
                },
                {
                  "type": "Property",
                  "start": 1119,
                  "end": 1129,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1124,
                    "decorators": [],
                    "name": "mOnen",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "UnaryExpression",
                    "start": 1126,
                    "end": 1129,
                    "argument": {
                      "type": "Literal",
                      "start": 1127,
                      "end": 1129,
                      "bigint": "1",
                      "raw": "1n",
                      "value": null
                    },
                    "operator": "-",
                    "prefix": true
                  }
                },
                {
                  "type": "Property",
                  "start": 1155,
                  "end": 1178,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1155,
                    "end": 1161,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1161,
                    "end": 1178,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1170,
                      "end": 1178,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1163,
                      "end": 1169,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1165,
                        "end": 1169
                      }
                    },
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
