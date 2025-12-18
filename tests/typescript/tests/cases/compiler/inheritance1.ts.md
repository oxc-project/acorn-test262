__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 6,
    "end": 13,
    "range": [
      6,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 20,
    "end": 27,
    "range": [
      20,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 28,
    "end": 33,
    "range": [
      28,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51,
    "range": [
      42,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 52,
    "end": 69,
    "range": [
      52,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 70,
    "end": 77,
    "range": [
      70,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 78,
    "end": 85,
    "range": [
      78,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 102,
    "end": 106,
    "range": [
      102,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116,
    "range": [
      111,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 124,
    "end": 131,
    "range": [
      124,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 132,
    "end": 139,
    "range": [
      132,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 140,
    "end": 150,
    "range": [
      140,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 151,
    "end": 168,
    "range": [
      151,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 175,
    "end": 181,
    "range": [
      175,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 190,
    "end": 195,
    "range": [
      190,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "TextBox",
    "start": 196,
    "end": 203,
    "range": [
      196,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 204,
    "end": 211,
    "range": [
      204,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 212,
    "end": 219,
    "range": [
      212,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 241,
    "end": 246,
    "range": [
      241,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "ImageBase",
    "start": 247,
    "end": 256,
    "range": [
      247,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 257,
    "end": 264,
    "range": [
      257,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 265,
    "end": 272,
    "range": [
      265,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 273,
    "end": 283,
    "range": [
      273,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 284,
    "end": 301,
    "range": [
      284,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 305,
    "end": 310,
    "range": [
      305,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "Image1",
    "start": 311,
    "end": 317,
    "range": [
      311,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 318,
    "end": 325,
    "range": [
      318,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 326,
    "end": 333,
    "range": [
      326,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 338,
    "end": 343,
    "range": [
      338,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "Locations",
    "start": 344,
    "end": 353,
    "range": [
      344,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 354,
    "end": 364,
    "range": [
      354,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 365,
    "end": 382,
    "range": [
      365,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 389,
    "end": 395,
    "range": [
      389,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 404,
    "end": 409,
    "range": [
      404,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "Locations1",
    "start": 410,
    "end": 420,
    "range": [
      410,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 427,
    "end": 433,
    "range": [
      427,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 442,
    "end": 445,
    "range": [
      442,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 446,
    "end": 448,
    "range": [
      446,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 450,
    "end": 467,
    "range": [
      450,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 469,
    "end": 472,
    "range": [
      469,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 476,
    "end": 483,
    "range": [
      476,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 486,
    "end": 489,
    "range": [
      486,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 493,
    "end": 499,
    "range": [
      493,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 501,
    "end": 503,
    "range": [
      501,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 520,
    "end": 522,
    "range": [
      520,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 532,
    "end": 535,
    "range": [
      532,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "TextBox",
    "start": 539,
    "end": 546,
    "range": [
      539,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 548,
    "end": 550,
    "range": [
      548,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 567,
    "end": 569,
    "range": [
      567,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 579,
    "end": 582,
    "range": [
      579,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "ImageBase",
    "start": 586,
    "end": 595,
    "range": [
      586,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 597,
    "end": 599,
    "range": [
      597,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 616,
    "end": 618,
    "range": [
      616,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 628,
    "end": 631,
    "range": [
      628,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 632,
    "end": 634,
    "range": [
      632,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "Image1",
    "start": 636,
    "end": 642,
    "range": [
      636,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 644,
    "end": 646,
    "range": [
      644,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 649,
    "end": 651,
    "range": [
      649,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 657,
    "end": 659,
    "range": [
      657,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 661,
    "end": 663,
    "range": [
      661,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 666,
    "end": 668,
    "range": [
      666,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 670,
    "end": 672,
    "range": [
      670,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "Locations",
    "start": 686,
    "end": 695,
    "range": [
      686,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 697,
    "end": 699,
    "range": [
      697,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 716,
    "end": 718,
    "range": [
      716,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 728,
    "end": 731,
    "range": [
      728,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 732,
    "end": 734,
    "range": [
      732,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "Locations1",
    "start": 736,
    "end": 746,
    "range": [
      736,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 748,
    "end": 750,
    "range": [
      748,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 753,
    "end": 755,
    "range": [
      753,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 761,
    "end": 763,
    "range": [
      761,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 765,
    "end": 767,
    "range": [
      765,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 770,
    "end": 772,
    "range": [
      770,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 774,
    "end": 776,
    "range": [
      774,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  }
]
```
