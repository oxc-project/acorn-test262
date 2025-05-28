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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 39,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 69,
        "decorators": [],
        "name": "SelectableControl",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 78,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 78,
            "end": 85,
            "decorators": [],
            "name": "Control",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
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
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 123,
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 139,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 151,
          "end": 168,
          "expression": {
            "type": "Identifier",
            "start": 151,
            "end": 168,
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 169,
        "end": 189,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 187,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 181,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 181,
              "end": 187,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 184,
                "end": 187,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 190,
      "end": 240,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 203,
        "decorators": [],
        "name": "TextBox",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 212,
        "end": 219,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 220,
        "end": 240,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 226,
            "end": 238,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 232,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 232,
              "end": 238,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 235,
                "end": 238,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 241,
      "end": 304,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 256,
        "decorators": [],
        "name": "ImageBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 265,
        "end": 272,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 284,
          "end": 301,
          "expression": {
            "type": "Identifier",
            "start": 284,
            "end": 301,
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 301,
        "end": 304,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 305,
      "end": 337,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 317,
        "decorators": [],
        "name": "Image1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 326,
        "end": 333,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 334,
        "end": 337,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 338,
      "end": 403,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 353,
        "decorators": [],
        "name": "Locations",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 365,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 365,
            "end": 382,
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 383,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 389,
            "end": 401,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 395,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 395,
              "end": 401,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 398,
                "end": 401,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 404,
      "end": 441,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 420,
        "decorators": [],
        "name": "Locations1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 441,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 427,
            "end": 439,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 433,
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 433,
              "end": 439,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 436,
                "end": 439,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 468,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 467,
            "decorators": [],
            "name": "sc",
            "optional": false,
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
                  "decorators": [],
                  "name": "SelectableControl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 469,
      "end": 484,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 483,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 483,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "Control",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 486,
      "end": 500,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 499,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 499,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 506,
          "end": 507,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 520,
          "end": 522,
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 528,
          "end": 529,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 532,
      "end": 547,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 536,
          "end": 546,
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 546,
            "decorators": [],
            "name": "t",
            "optional": false,
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
                  "decorators": [],
                  "name": "TextBox",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 553,
          "end": 554,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 567,
          "end": 569,
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 575,
          "end": 576,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 579,
      "end": 596,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 583,
          "end": 595,
          "id": {
            "type": "Identifier",
            "start": 583,
            "end": 595,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "ImageBase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 602,
          "end": 603,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 609,
          "end": 610,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 616,
          "end": 618,
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 624,
          "end": 625,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 643,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 642,
            "decorators": [],
            "name": "i1",
            "optional": false,
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
                  "decorators": [],
                  "name": "Image1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 649,
          "end": 651,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 657,
          "end": 659,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 666,
          "end": 668,
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 675,
          "end": 676,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 679,
      "end": 696,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 683,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 683,
            "end": 695,
            "decorators": [],
            "name": "l",
            "optional": false,
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
                  "decorators": [],
                  "name": "Locations",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 702,
          "end": 703,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 709,
          "end": 710,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 716,
          "end": 718,
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 724,
          "end": 725,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 728,
      "end": 747,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 732,
          "end": 746,
          "id": {
            "type": "Identifier",
            "start": 732,
            "end": 746,
            "decorators": [],
            "name": "l1",
            "optional": false,
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
                  "decorators": [],
                  "name": "Locations1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 753,
          "end": 755,
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 761,
          "end": 763,
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 770,
          "end": 772,
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 779,
          "end": 780,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
