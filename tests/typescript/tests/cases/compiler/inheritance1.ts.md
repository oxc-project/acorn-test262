__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              },
              "start": 33,
              "end": 38
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 20,
            "end": 39
          }
        ],
        "start": 14,
        "end": 41
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectableControl",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 69
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Control",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 85
          },
          "typeArguments": null,
          "start": 78,
          "end": 85
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 98
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 102,
                "end": 106
              },
              "start": 100,
              "end": 106
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 92,
            "end": 107
          }
        ],
        "start": 86,
        "end": 109
      },
      "declare": false,
      "start": 42,
      "end": 109
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 139
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 168
          },
          "typeArguments": null,
          "start": 151,
          "end": 168
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 181
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 184,
                "end": 187
              },
              "expression": false,
              "start": 181,
              "end": 187
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 175,
            "end": 187
          }
        ],
        "start": 169,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 111,
      "end": 189
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 203
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 219
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 232
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 235,
                "end": 238
              },
              "expression": false,
              "start": 232,
              "end": 238
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 226,
            "end": 238
          }
        ],
        "start": 220,
        "end": 240
      },
      "abstract": false,
      "declare": false,
      "start": 190,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImageBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 256
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 272
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 301
          },
          "typeArguments": null,
          "start": 284,
          "end": 301
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 301,
        "end": 304
      },
      "abstract": false,
      "declare": false,
      "start": 241,
      "end": 304
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Image1",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 317
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 333
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 334,
        "end": 337
      },
      "abstract": false,
      "declare": false,
      "start": 305,
      "end": 337
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Locations",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 353
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 382
          },
          "typeArguments": null,
          "start": 365,
          "end": 382
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 395
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 398,
                "end": 401
              },
              "expression": false,
              "start": 395,
              "end": 401
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 389,
            "end": 401
          }
        ],
        "start": 383,
        "end": 403
      },
      "abstract": false,
      "declare": false,
      "start": 338,
      "end": 403
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Locations1",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 420
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 433
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 436,
                "end": 439
              },
              "expression": false,
              "start": 433,
              "end": 439
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 427,
            "end": 439
          }
        ],
        "start": 421,
        "end": 441
      },
      "abstract": false,
      "declare": false,
      "start": 404,
      "end": 441
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SelectableControl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 467
                },
                "typeArguments": null,
                "start": 450,
                "end": 467
              },
              "start": 448,
              "end": 467
            },
            "start": 446,
            "end": 467
          },
          "init": null,
          "definite": false,
          "start": 446,
          "end": 467
        }
      ],
      "declare": false,
      "start": 442,
      "end": 468
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Control",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 483
                },
                "typeArguments": null,
                "start": 476,
                "end": 483
              },
              "start": 474,
              "end": 483
            },
            "start": 473,
            "end": 483
          },
          "init": null,
          "definite": false,
          "start": 473,
          "end": 483
        }
      ],
      "declare": false,
      "start": 469,
      "end": 484
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 499
                },
                "typeArguments": null,
                "start": 493,
                "end": 499
              },
              "start": 491,
              "end": 499
            },
            "start": 490,
            "end": 499
          },
          "init": null,
          "definite": false,
          "start": 490,
          "end": 499
        }
      ],
      "declare": false,
      "start": 486,
      "end": 500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 503
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 506,
          "end": 507
        },
        "start": 501,
        "end": 507
      },
      "directive": null,
      "start": 501,
      "end": 508
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 509,
          "end": 510
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "start": 509,
        "end": 514
      },
      "directive": null,
      "start": 509,
      "end": 515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 517
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 520,
          "end": 522
        },
        "start": 516,
        "end": 522
      },
      "directive": null,
      "start": 516,
      "end": 523
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 524,
          "end": 525
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 529
        },
        "start": 524,
        "end": 529
      },
      "directive": null,
      "start": 524,
      "end": 530
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TextBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 539,
                  "end": 546
                },
                "typeArguments": null,
                "start": 539,
                "end": 546
              },
              "start": 537,
              "end": 546
            },
            "start": 536,
            "end": 546
          },
          "init": null,
          "definite": false,
          "start": 536,
          "end": 546
        }
      ],
      "declare": false,
      "start": 532,
      "end": 547
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 550
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 553,
          "end": 554
        },
        "start": 548,
        "end": 554
      },
      "directive": null,
      "start": 548,
      "end": 555
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 557
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 561
        },
        "start": 556,
        "end": 561
      },
      "directive": null,
      "start": 556,
      "end": 562
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 563,
          "end": 564
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 567,
          "end": 569
        },
        "start": 563,
        "end": 569
      },
      "directive": null,
      "start": 563,
      "end": 570
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 571,
          "end": 572
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 575,
          "end": 576
        },
        "start": 571,
        "end": 576
      },
      "directive": null,
      "start": 571,
      "end": 577
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImageBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 595
                },
                "typeArguments": null,
                "start": 586,
                "end": 595
              },
              "start": 584,
              "end": 595
            },
            "start": 583,
            "end": 595
          },
          "init": null,
          "definite": false,
          "start": 583,
          "end": 595
        }
      ],
      "declare": false,
      "start": 579,
      "end": 596
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 597,
          "end": 599
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 603
        },
        "start": 597,
        "end": 603
      },
      "directive": null,
      "start": 597,
      "end": 604
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 606
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 609,
          "end": 610
        },
        "start": 605,
        "end": 610
      },
      "directive": null,
      "start": 605,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 613
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 616,
          "end": 618
        },
        "start": 612,
        "end": 618
      },
      "directive": null,
      "start": 612,
      "end": 619
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 620,
          "end": 621
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 624,
          "end": 625
        },
        "start": 620,
        "end": 625
      },
      "directive": null,
      "start": 620,
      "end": 626
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Image1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 636,
                  "end": 642
                },
                "typeArguments": null,
                "start": 636,
                "end": 642
              },
              "start": 634,
              "end": 642
            },
            "start": 632,
            "end": 642
          },
          "init": null,
          "definite": false,
          "start": 632,
          "end": 642
        }
      ],
      "declare": false,
      "start": 628,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 646
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 649,
          "end": 651
        },
        "start": 644,
        "end": 651
      },
      "directive": null,
      "start": 644,
      "end": 652
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 653,
          "end": 654
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 657,
          "end": 659
        },
        "start": 653,
        "end": 659
      },
      "directive": null,
      "start": 653,
      "end": 660
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 661,
          "end": 663
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 668
        },
        "start": 661,
        "end": 668
      },
      "directive": null,
      "start": 661,
      "end": 669
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 672
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 676
        },
        "start": 670,
        "end": 676
      },
      "directive": null,
      "start": 670,
      "end": 677
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Locations",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 695
                },
                "typeArguments": null,
                "start": 686,
                "end": 695
              },
              "start": 684,
              "end": 695
            },
            "start": 683,
            "end": 695
          },
          "init": null,
          "definite": false,
          "start": 683,
          "end": 695
        }
      ],
      "declare": false,
      "start": 679,
      "end": 696
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 699
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 702,
          "end": 703
        },
        "start": 697,
        "end": 703
      },
      "directive": null,
      "start": 697,
      "end": 704
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 706
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 709,
          "end": 710
        },
        "start": 705,
        "end": 710
      },
      "directive": null,
      "start": 705,
      "end": 711
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 712,
          "end": 713
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 718
        },
        "start": 712,
        "end": 718
      },
      "directive": null,
      "start": 712,
      "end": 719
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 720,
          "end": 721
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 724,
          "end": 725
        },
        "start": 720,
        "end": 725
      },
      "directive": null,
      "start": 720,
      "end": 726
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Locations1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 746
                },
                "typeArguments": null,
                "start": 736,
                "end": 746
              },
              "start": 734,
              "end": 746
            },
            "start": 732,
            "end": 746
          },
          "init": null,
          "definite": false,
          "start": 732,
          "end": 746
        }
      ],
      "declare": false,
      "start": 728,
      "end": 747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 750
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null,
          "start": 753,
          "end": 755
        },
        "start": 748,
        "end": 755
      },
      "directive": null,
      "start": 748,
      "end": 756
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 757,
          "end": 758
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null,
          "start": 761,
          "end": 763
        },
        "start": 757,
        "end": 763
      },
      "directive": null,
      "start": 757,
      "end": 764
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null,
          "start": 765,
          "end": 767
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 772
        },
        "start": 765,
        "end": 772
      },
      "directive": null,
      "start": 765,
      "end": 773
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null,
          "start": 774,
          "end": 776
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 779,
          "end": 780
        },
        "start": 774,
        "end": 780
      },
      "directive": null,
      "start": 774,
      "end": 781
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 781
}
```
