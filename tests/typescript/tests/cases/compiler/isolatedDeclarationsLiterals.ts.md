__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "constObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 24
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 58
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 60,
                      "end": 61
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneOctal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 99
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "0o1",
                      "start": 101,
                      "end": 104
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 91,
                    "end": 104
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneHex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 140
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "0x1",
                      "start": 142,
                      "end": 145
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 134,
                    "end": 145
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 178
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "operator": "+",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 181,
                        "end": 182
                      },
                      "prefix": true,
                      "start": 180,
                      "end": 182
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 174,
                    "end": 182
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 215
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 218,
                        "end": 219
                      },
                      "prefix": true,
                      "start": 217,
                      "end": 219
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 211,
                    "end": 219
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 230
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 233,
                          "end": 234
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 237,
                            "end": 238
                          },
                          "prefix": true,
                          "start": 236,
                          "end": 238
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "1n",
                          "bigint": "1",
                          "start": 240,
                          "end": 242
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "1n",
                            "bigint": "1",
                            "start": 245,
                            "end": 247
                          },
                          "prefix": true,
                          "start": 244,
                          "end": 247
                        }
                      ],
                      "start": 232,
                      "end": 248
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 225,
                    "end": 248
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "onen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 281
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "1n",
                      "bigint": "1",
                      "start": 283,
                      "end": 285
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 277,
                    "end": 285
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mOnen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 320
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "1n",
                        "bigint": "1",
                        "start": 323,
                        "end": 325
                      },
                      "prefix": true,
                      "start": 322,
                      "end": 325
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 315,
                    "end": 325
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrDoubleQuote",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 373
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 375,
                      "end": 378
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 356,
                    "end": 378
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrSingleQuote",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 425
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 427,
                      "end": 430
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 408,
                    "end": 430
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrTemplate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 474
                    },
                    "value": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": true,
                          "start": 476,
                          "end": 479
                        }
                      ],
                      "expressions": [],
                      "start": 476,
                      "end": 479
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 460,
                    "end": 479
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 505,
                      "end": 511
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 515,
                          "end": 519
                        },
                        "start": 513,
                        "end": 519
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 520,
                        "end": 528
                      },
                      "expression": false,
                      "start": 511,
                      "end": 528
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 505,
                    "end": 528
                  }
                ],
                "start": 27,
                "end": 531
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 540
                },
                "typeArguments": null,
                "start": 535,
                "end": 540
              },
              "start": 27,
              "end": 540
            },
            "definite": false,
            "start": 13,
            "end": 540
          }
        ],
        "declare": false,
        "start": 7,
        "end": 541
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 541
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 559
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 562,
              "end": 563
            },
            "definite": false,
            "start": 556,
            "end": 563
          }
        ],
        "declare": false,
        "start": 550,
        "end": 564
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 543,
      "end": 564
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneOctal",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 586
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "0o1",
              "start": 589,
              "end": 592
            },
            "definite": false,
            "start": 578,
            "end": 592
          }
        ],
        "declare": false,
        "start": 572,
        "end": 593
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 565,
      "end": 593
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneHex",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 613
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "0x1",
              "start": 616,
              "end": 619
            },
            "definite": false,
            "start": 607,
            "end": 619
          }
        ],
        "declare": false,
        "start": 601,
        "end": 620
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 594,
      "end": 620
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pOne",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 638
            },
            "init": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 642,
                "end": 643
              },
              "prefix": true,
              "start": 641,
              "end": 643
            },
            "definite": false,
            "start": 634,
            "end": 643
          }
        ],
        "declare": false,
        "start": 628,
        "end": 644
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 621,
      "end": 644
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mOne",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 662
            },
            "init": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 666,
                "end": 667
              },
              "prefix": true,
              "start": 665,
              "end": 667
            },
            "definite": false,
            "start": 658,
            "end": 667
          }
        ],
        "declare": false,
        "start": 652,
        "end": 668
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 645,
      "end": 668
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "onen",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 686
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 689,
              "end": 691
            },
            "definite": false,
            "start": 682,
            "end": 691
          }
        ],
        "declare": false,
        "start": 676,
        "end": 692
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 669,
      "end": 692
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mOnen",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 711
            },
            "init": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 715,
                "end": 717
              },
              "prefix": true,
              "start": 714,
              "end": 717
            },
            "definite": false,
            "start": 706,
            "end": 717
          }
        ],
        "declare": false,
        "start": 700,
        "end": 718
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 693,
      "end": 718
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrDoubleQuote",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 749
            },
            "init": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 752,
              "end": 755
            },
            "definite": false,
            "start": 732,
            "end": 755
          }
        ],
        "declare": false,
        "start": 726,
        "end": 756
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 719,
      "end": 756
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrSingleQuote",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 787
            },
            "init": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 790,
              "end": 793
            },
            "definite": false,
            "start": 770,
            "end": 793
          }
        ],
        "declare": false,
        "start": 764,
        "end": 794
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 757,
      "end": 794
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrTemplate",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 822
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "1",
                    "cooked": "1"
                  },
                  "tail": true,
                  "start": 825,
                  "end": 828
                }
              ],
              "expressions": [],
              "start": 825,
              "end": 828
            },
            "definite": false,
            "start": 808,
            "end": 828
          }
        ],
        "declare": false,
        "start": 802,
        "end": 829
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 795,
      "end": 829
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mutableObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 857
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 891
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 893,
                    "end": 894
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 888,
                  "end": 894
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oneOctal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 924,
                    "end": 932
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "0o1",
                    "start": 934,
                    "end": 937
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 924,
                  "end": 937
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oneHex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 967,
                    "end": 973
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "0x1",
                    "start": 975,
                    "end": 978
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 967,
                  "end": 978
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pOne",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1007,
                    "end": 1011
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "+",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1014,
                      "end": 1015
                    },
                    "prefix": true,
                    "start": 1013,
                    "end": 1015
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1007,
                  "end": 1015
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mOne",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1048
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1051,
                      "end": 1052
                    },
                    "prefix": true,
                    "start": 1050,
                    "end": 1052
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1044,
                  "end": 1052
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1081,
                    "end": 1085
                  },
                  "value": {
                    "type": "Literal",
                    "value": null,
                    "raw": "1n",
                    "bigint": "1",
                    "start": 1087,
                    "end": 1089
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1081,
                  "end": 1089
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mOnen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1124
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "1n",
                      "bigint": "1",
                      "start": 1127,
                      "end": 1129
                    },
                    "prefix": true,
                    "start": 1126,
                    "end": 1129
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1119,
                  "end": 1129
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1155,
                    "end": 1161
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1165,
                        "end": 1169
                      },
                      "start": 1163,
                      "end": 1169
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1170,
                      "end": 1178
                    },
                    "expression": false,
                    "start": 1161,
                    "end": 1178
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1155,
                  "end": 1178
                }
              ],
              "start": 860,
              "end": 1181
            },
            "definite": false,
            "start": 844,
            "end": 1181
          }
        ],
        "declare": false,
        "start": 838,
        "end": 1182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 831,
      "end": 1182
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1184
}
```
