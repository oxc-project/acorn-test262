__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 47
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "optional",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 52,
            "end": 70
          }
        ],
        "start": 24,
        "end": 72
      },
      "declare": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 89
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
              "name": "baseMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 106
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
                "start": 109,
                "end": 112
              },
              "expression": false,
              "start": 106,
              "end": 112
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 96,
            "end": 112
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 129,
                "end": 135
              },
              "start": 127,
              "end": 135
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 117,
            "end": 136
          }
        ],
        "start": 90,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 74,
      "end": 138
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 155
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 177
          },
          "typeArguments": null,
          "start": 164,
          "end": 177
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "additional",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 194
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
              },
              "start": 194,
              "end": 202
            },
            "accessibility": null,
            "static": false,
            "start": 184,
            "end": 203
          }
        ],
        "start": 178,
        "end": 205
      },
      "declare": false,
      "start": 140,
      "end": 205
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 218
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 236
      },
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
              "name": "classNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 254
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 256,
                "end": 262
              },
              "start": 254,
              "end": 262
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 243,
            "end": 263
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 274
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
                "start": 277,
                "end": 280
              },
              "expression": false,
              "start": 274,
              "end": 280
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 268,
            "end": 280
          }
        ],
        "start": 237,
        "end": 282
      },
      "abstract": false,
      "declare": false,
      "start": 207,
      "end": 282
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChildNoBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 310
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 332
          },
          "typeArguments": null,
          "start": 319,
          "end": 332
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "additional2",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 350
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 352,
                "end": 358
              },
              "start": 350,
              "end": 358
            },
            "accessibility": null,
            "static": false,
            "start": 339,
            "end": 359
          }
        ],
        "start": 333,
        "end": 361
      },
      "declare": false,
      "start": 284,
      "end": 361
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChildNoBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 384
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
              "name": "classString",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 402
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 404,
                "end": 410
              },
              "start": 402,
              "end": 410
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 391,
            "end": 411
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 423
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
                "start": 426,
                "end": 429
              },
              "expression": false,
              "start": 423,
              "end": 429
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 416,
            "end": 429
          }
        ],
        "start": 385,
        "end": 431
      },
      "abstract": false,
      "declare": false,
      "start": 362,
      "end": 431
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Grandchild",
        "optional": false,
        "typeAnnotation": null,
        "start": 438,
        "end": 448
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChildNoBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 473
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 474,
        "end": 477
      },
      "abstract": false,
      "declare": false,
      "start": 432,
      "end": 477
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
            "name": "child",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Child",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 541
                },
                "typeArguments": null,
                "start": 536,
                "end": 541
              },
              "start": 534,
              "end": 541
            },
            "start": 528,
            "end": 541
          },
          "init": null,
          "definite": false,
          "start": 528,
          "end": 541
        }
      ],
      "declare": false,
      "start": 524,
      "end": 542
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null,
          "start": 543,
          "end": 548
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": null,
          "start": 549,
          "end": 557
        },
        "optional": false,
        "computed": false,
        "start": 543,
        "end": 557
      },
      "directive": null,
      "start": 543,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null,
          "start": 559,
          "end": 564
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "optional",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 573
        },
        "optional": false,
        "computed": false,
        "start": 559,
        "end": 573
      },
      "directive": null,
      "start": 559,
      "end": 574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null,
          "start": 575,
          "end": 580
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "additional",
          "optional": false,
          "typeAnnotation": null,
          "start": 581,
          "end": 591
        },
        "optional": false,
        "computed": false,
        "start": 575,
        "end": 591
      },
      "directive": null,
      "start": 575,
      "end": 592
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null,
          "start": 593,
          "end": 598
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "baseNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 599,
          "end": 609
        },
        "optional": false,
        "computed": false,
        "start": 593,
        "end": 609
      },
      "directive": null,
      "start": 593,
      "end": 610
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null,
          "start": 611,
          "end": 616
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "classNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 628
        },
        "optional": false,
        "computed": false,
        "start": 611,
        "end": 628
      },
      "directive": null,
      "start": 611,
      "end": 629
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "child",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 635
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baseMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 646
          },
          "optional": false,
          "computed": false,
          "start": 630,
          "end": 646
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 630,
        "end": 648
      },
      "directive": null,
      "start": 630,
      "end": 649
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "child",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 655
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 662
          },
          "optional": false,
          "computed": false,
          "start": 650,
          "end": 662
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 650,
        "end": 664
      },
      "directive": null,
      "start": 650,
      "end": 665
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
            "name": "grandchild",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Grandchild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 693
                },
                "typeArguments": null,
                "start": 683,
                "end": 693
              },
              "start": 681,
              "end": 693
            },
            "start": 671,
            "end": 693
          },
          "init": null,
          "definite": false,
          "start": 671,
          "end": 693
        }
      ],
      "declare": false,
      "start": 667,
      "end": 694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "grandchild",
          "optional": false,
          "typeAnnotation": null,
          "start": 695,
          "end": 705
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "required",
          "optional": false,
          "typeAnnotation": null,
          "start": 706,
          "end": 714
        },
        "optional": false,
        "computed": false,
        "start": 695,
        "end": 714
      },
      "directive": null,
      "start": 695,
      "end": 715
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "grandchild",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 726
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "optional",
          "optional": false,
          "typeAnnotation": null,
          "start": 727,
          "end": 735
        },
        "optional": false,
        "computed": false,
        "start": 716,
        "end": 735
      },
      "directive": null,
      "start": 716,
      "end": 736
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "grandchild",
          "optional": false,
          "typeAnnotation": null,
          "start": 737,
          "end": 747
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "additional2",
          "optional": false,
          "typeAnnotation": null,
          "start": 748,
          "end": 759
        },
        "optional": false,
        "computed": false,
        "start": 737,
        "end": 759
      },
      "directive": null,
      "start": 737,
      "end": 760
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "grandchild",
          "optional": false,
          "typeAnnotation": null,
          "start": 761,
          "end": 771
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "classString",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 783
        },
        "optional": false,
        "computed": false,
        "start": 761,
        "end": 783
      },
      "directive": null,
      "start": 761,
      "end": 784
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "grandchild",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 795
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method2",
            "optional": false,
            "typeAnnotation": null,
            "start": 796,
            "end": 803
          },
          "optional": false,
          "computed": false,
          "start": 785,
          "end": 803
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 785,
        "end": 805
      },
      "directive": null,
      "start": 785,
      "end": 806
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 806
}
```
