__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 804,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 22,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 46,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 31,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 44,
          "end": 46,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 61,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 52,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "decorators": [],
            "name": "cat",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 55,
          "end": 60,
          "value": "cat",
          "raw": "\"cat\""
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 85,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 70,
        "end": 85,
        "id": {
          "type": "Identifier",
          "start": 79,
          "end": 80,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 83,
          "end": 85,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 102,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 102,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 86,
          "end": 91,
          "object": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 94,
          "end": 102,
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 100,
            "end": 102,
            "body": []
          },
          "abstract": false,
          "declare": false
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 175,
      "end": 233,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 182,
        "end": 233,
        "id": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 199,
          "end": 233,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 201,
              "end": 231,
              "argument": {
                "type": "Literal",
                "start": 225,
                "end": 229,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 312,
      "end": 370,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 319,
        "end": 370,
        "id": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 330,
            "end": 331,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 336,
          "end": 370,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 338,
              "end": 368,
              "argument": {
                "type": "Literal",
                "start": 362,
                "end": 366,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 411,
      "end": 449,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 418,
        "end": 449,
        "id": {
          "type": "Identifier",
          "start": 427,
          "end": 428,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 429,
            "end": 430,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 432,
          "end": 449,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 438,
              "end": 447,
              "argument": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 461,
      "expression": {
        "type": "AssignmentExpression",
        "start": 450,
        "end": 460,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 450,
          "end": 456,
          "object": {
            "type": "Identifier",
            "start": 450,
            "end": 451,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 452,
            "end": 456,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 459,
          "end": 460,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 525,
      "end": 570,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 535,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 536,
          "end": 537,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 539,
          "end": 540,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 542,
        "end": 570,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 548,
            "end": 568,
            "argument": {
              "type": "LogicalExpression",
              "start": 555,
              "end": 567,
              "left": {
                "type": "MemberExpression",
                "start": 555,
                "end": 558,
                "object": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 556,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 562,
                "end": 567,
                "callee": {
                  "type": "MemberExpression",
                  "start": 562,
                  "end": 565,
                  "object": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 563,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 565,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 572,
      "end": 585,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 581,
          "end": 582,
          "local": {
            "type": "Identifier",
            "start": 581,
            "end": 582,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 581,
            "end": 582,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 649,
      "end": 695,
      "id": {
        "type": "Identifier",
        "start": 658,
        "end": 660,
        "decorators": [],
        "name": "hh",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 661,
          "end": 662,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 664,
          "end": 665,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 667,
        "end": 695,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 673,
            "end": 693,
            "argument": {
              "type": "LogicalExpression",
              "start": 680,
              "end": 692,
              "left": {
                "type": "MemberExpression",
                "start": 680,
                "end": 683,
                "object": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 681,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 687,
                "end": 692,
                "callee": {
                  "type": "MemberExpression",
                  "start": 687,
                  "end": 690,
                  "object": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 688,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 689,
                    "end": 690,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 697,
      "end": 716,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 706,
          "end": 713,
          "local": {
            "type": "Identifier",
            "start": 706,
            "end": 708,
            "decorators": [],
            "name": "hh",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 712,
            "end": 713,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 718,
      "end": 740,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 725,
        "end": 740,
        "id": {
          "type": "Identifier",
          "start": 734,
          "end": 735,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 738,
          "end": 740,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 741,
      "end": 760,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 750,
          "end": 757,
          "local": {
            "type": "Identifier",
            "start": 750,
            "end": 751,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 755,
            "end": 757,
            "decorators": [],
            "name": "ii",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 762,
      "end": 781,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 771,
          "end": 778,
          "local": {
            "type": "Identifier",
            "start": 771,
            "end": 772,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 776,
            "end": 778,
            "decorators": [],
            "name": "jj",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 782,
      "end": 804,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 789,
        "end": 804,
        "id": {
          "type": "Identifier",
          "start": 798,
          "end": 799,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 802,
          "end": 804,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
