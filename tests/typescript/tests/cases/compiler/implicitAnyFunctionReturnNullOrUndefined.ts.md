__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullWidenFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 65,
              "end": 69
            },
            "start": 58,
            "end": 70
          }
        ],
        "start": 56,
        "end": 71
      },
      "expression": false,
      "start": 27,
      "end": 71
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefinedWidenFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 147
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 168
            },
            "start": 152,
            "end": 169
          }
        ],
        "start": 150,
        "end": 171
      },
      "expression": false,
      "start": 116,
      "end": 171
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 218
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
              "name": "nullWidenFuncOfC",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 241
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 293,
                      "end": 297
                    },
                    "start": 286,
                    "end": 298
                  }
                ],
                "start": 244,
                "end": 304
              },
              "expression": false,
              "start": 241,
              "end": 304
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 225,
            "end": 304
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "underfinedWidenFuncOfC",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 332
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 399
                    },
                    "start": 383,
                    "end": 400
                  }
                ],
                "start": 335,
                "end": 406
              },
              "expression": false,
              "start": 332,
              "end": 406
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 310,
            "end": 406
          }
        ],
        "start": 219,
        "end": 408
      },
      "abstract": false,
      "declare": false,
      "start": 211,
      "end": 408
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 454
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 458,
          "end": 461
        },
        "start": 456,
        "end": 461
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 471,
              "end": 475
            },
            "start": 464,
            "end": 476
          }
        ],
        "start": 462,
        "end": 478
      },
      "expression": false,
      "start": 441,
      "end": 478
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 492
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 496,
          "end": 499
        },
        "start": 494,
        "end": 499
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 518
            },
            "start": 502,
            "end": 519
          }
        ],
        "start": 500,
        "end": 521
      },
      "expression": false,
      "start": 479,
      "end": 521
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 537
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 541,
          "end": 547
        },
        "start": 539,
        "end": 547
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 557,
              "end": 558
            },
            "start": 550,
            "end": 559
          }
        ],
        "start": 548,
        "end": 561
      },
      "expression": false,
      "start": 522,
      "end": 561
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 571,
        "end": 577
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 589,
              "end": 590
            },
            "start": 582,
            "end": 591
          }
        ],
        "start": 580,
        "end": 593
      },
      "expression": false,
      "start": 562,
      "end": 593
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullWidenFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 663,
          "end": 680
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 663,
        "end": 682
      },
      "directive": null,
      "start": 663,
      "end": 683
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefinedWidenFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 684,
          "end": 706
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 684,
        "end": 708
      },
      "directive": null,
      "start": 684,
      "end": 709
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 709
}
```
