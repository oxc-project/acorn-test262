__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 781,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "Control",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
              "name": "state",
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
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            },
            "accessibility": "private"
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
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 69,
        "name": "SelectableControl",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 78,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "name": "Control",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 109,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 92,
            "end": 107,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 98,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 106,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 102,
                "end": 106
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 111,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 123,
        "name": "Button",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 139,
        "name": "Control",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 169,
        "end": 189,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 187,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 181,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 187,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 184,
                "end": 187,
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
          "start": 151,
          "end": 168,
          "expression": {
            "type": "Identifier",
            "start": 151,
            "end": 168,
            "name": "SelectableControl",
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
      "start": 190,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 203,
        "name": "TextBox",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 212,
        "end": 219,
        "name": "Control",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 220,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 226,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 232,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 232,
              "end": 238,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 235,
                "end": 238,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 256,
        "name": "ImageBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 265,
        "end": 272,
        "name": "Control",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 301,
        "end": 304,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 284,
          "end": 301,
          "expression": {
            "type": "Identifier",
            "start": 284,
            "end": 301,
            "name": "SelectableControl",
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
      "start": 305,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 317,
        "name": "Image1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 326,
        "end": 333,
        "name": "Control",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 334,
        "end": 337,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 338,
      "end": 403,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 353,
        "name": "Locations",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 383,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 389,
            "end": 401,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 395,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 395,
              "end": 401,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 398,
                "end": 401,
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
          "start": 365,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 365,
            "end": 382,
            "name": "SelectableControl",
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
      "start": 404,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 420,
        "name": "Locations1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 441,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 427,
            "end": 439,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 433,
              "name": "select",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 433,
              "end": 439,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 436,
                "end": 439,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 467,
            "name": "sc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 448,
              "end": 467,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 450,
                "end": 467,
                "typeName": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 467,
                  "name": "SelectableControl",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 469,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 483,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 483,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 474,
              "end": 483,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 476,
                "end": 483,
                "typeName": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 483,
                  "name": "Control",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 486,
      "end": 500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 499,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 499,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 499,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 499,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 499,
                  "name": "Button",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 501,
      "end": 508,
      "expression": {
        "type": "AssignmentExpression",
        "start": 501,
        "end": 507,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 501,
          "end": 503,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 506,
          "end": 507,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 509,
      "end": 515,
      "expression": {
        "type": "AssignmentExpression",
        "start": 509,
        "end": 514,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 509,
          "end": 510,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 516,
      "end": 523,
      "expression": {
        "type": "AssignmentExpression",
        "start": 516,
        "end": 522,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 516,
          "end": 517,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 520,
          "end": 522,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 524,
      "end": 530,
      "expression": {
        "type": "AssignmentExpression",
        "start": 524,
        "end": 529,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 524,
          "end": 525,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 528,
          "end": 529,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 532,
      "end": 547,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 536,
          "end": 546,
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 546,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 537,
              "end": 546,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 539,
                "end": 546,
                "typeName": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 546,
                  "name": "TextBox",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 548,
      "end": 555,
      "expression": {
        "type": "AssignmentExpression",
        "start": 548,
        "end": 554,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 548,
          "end": 550,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 553,
          "end": 554,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 556,
      "end": 562,
      "expression": {
        "type": "AssignmentExpression",
        "start": 556,
        "end": 561,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 556,
          "end": 557,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 563,
      "end": 570,
      "expression": {
        "type": "AssignmentExpression",
        "start": 563,
        "end": 569,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 563,
          "end": 564,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 567,
          "end": 569,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 571,
      "end": 577,
      "expression": {
        "type": "AssignmentExpression",
        "start": 571,
        "end": 576,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 571,
          "end": 572,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 575,
          "end": 576,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 579,
      "end": 596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 583,
          "end": 595,
          "id": {
            "type": "Identifier",
            "start": 583,
            "end": 595,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 584,
              "end": 595,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 586,
                "end": 595,
                "typeName": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 595,
                  "name": "ImageBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 597,
      "end": 604,
      "expression": {
        "type": "AssignmentExpression",
        "start": 597,
        "end": 603,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 597,
          "end": 599,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 602,
          "end": 603,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 605,
      "end": 611,
      "expression": {
        "type": "AssignmentExpression",
        "start": 605,
        "end": 610,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 605,
          "end": 606,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 609,
          "end": 610,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 619,
      "expression": {
        "type": "AssignmentExpression",
        "start": 612,
        "end": 618,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 612,
          "end": 613,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 616,
          "end": 618,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 620,
      "end": 626,
      "expression": {
        "type": "AssignmentExpression",
        "start": 620,
        "end": 625,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 620,
          "end": 621,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 624,
          "end": 625,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 642,
            "name": "i1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 634,
              "end": 642,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 636,
                "end": 642,
                "typeName": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 642,
                  "name": "Image1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 644,
      "end": 652,
      "expression": {
        "type": "AssignmentExpression",
        "start": 644,
        "end": 651,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 644,
          "end": 646,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 649,
          "end": 651,
          "name": "i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 653,
      "end": 660,
      "expression": {
        "type": "AssignmentExpression",
        "start": 653,
        "end": 659,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 653,
          "end": 654,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 657,
          "end": 659,
          "name": "i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 661,
      "end": 669,
      "expression": {
        "type": "AssignmentExpression",
        "start": 661,
        "end": 668,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 661,
          "end": 663,
          "name": "i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 666,
          "end": 668,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 670,
      "end": 677,
      "expression": {
        "type": "AssignmentExpression",
        "start": 670,
        "end": 676,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 670,
          "end": 672,
          "name": "i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 675,
          "end": 676,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 679,
      "end": 696,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 683,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 683,
            "end": 695,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 684,
              "end": 695,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 686,
                "end": 695,
                "typeName": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 695,
                  "name": "Locations",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 697,
      "end": 704,
      "expression": {
        "type": "AssignmentExpression",
        "start": 697,
        "end": 703,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 697,
          "end": 699,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 702,
          "end": 703,
          "name": "l",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 705,
      "end": 711,
      "expression": {
        "type": "AssignmentExpression",
        "start": 705,
        "end": 710,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 705,
          "end": 706,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 709,
          "end": 710,
          "name": "l",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 712,
      "end": 719,
      "expression": {
        "type": "AssignmentExpression",
        "start": 712,
        "end": 718,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 712,
          "end": 713,
          "name": "l",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 716,
          "end": 718,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 720,
      "end": 726,
      "expression": {
        "type": "AssignmentExpression",
        "start": 720,
        "end": 725,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 720,
          "end": 721,
          "name": "l",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 724,
          "end": 725,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 728,
      "end": 747,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 732,
          "end": 746,
          "id": {
            "type": "Identifier",
            "start": 732,
            "end": 746,
            "name": "l1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 734,
              "end": 746,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 736,
                "end": 746,
                "typeName": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 746,
                  "name": "Locations1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 748,
      "end": 756,
      "expression": {
        "type": "AssignmentExpression",
        "start": 748,
        "end": 755,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 748,
          "end": 750,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 753,
          "end": 755,
          "name": "l1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 757,
      "end": 764,
      "expression": {
        "type": "AssignmentExpression",
        "start": 757,
        "end": 763,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 757,
          "end": 758,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 761,
          "end": 763,
          "name": "l1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 765,
      "end": 773,
      "expression": {
        "type": "AssignmentExpression",
        "start": 765,
        "end": 772,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 765,
          "end": 767,
          "name": "l1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 770,
          "end": 772,
          "name": "sc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 774,
      "end": 781,
      "expression": {
        "type": "AssignmentExpression",
        "start": 774,
        "end": 780,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 774,
          "end": 776,
          "name": "l1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 779,
          "end": 780,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
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
