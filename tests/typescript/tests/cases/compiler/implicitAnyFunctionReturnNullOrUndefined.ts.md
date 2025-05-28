__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 709,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 53,
        "decorators": [],
        "name": "nullWidenFunction",
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
        "start": 56,
        "end": 71,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 58,
            "end": 70,
            "argument": {
              "type": "Literal",
              "start": 65,
              "end": 69,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 147,
        "decorators": [],
        "name": "undefinedWidenFunction",
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
        "start": 150,
        "end": 171,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 152,
            "end": 169,
            "argument": {
              "type": "Identifier",
              "start": 159,
              "end": 168,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 211,
      "end": 408,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 219,
        "end": 408,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 304,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 241,
              "decorators": [],
              "name": "nullWidenFuncOfC",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 304,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 304,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 286,
                    "end": 298,
                    "argument": {
                      "type": "Literal",
                      "start": 293,
                      "end": 297,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 406,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 332,
              "decorators": [],
              "name": "underfinedWidenFuncOfC",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 406,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 406,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 383,
                    "end": 400,
                    "argument": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 399,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 441,
      "end": 478,
      "id": {
        "type": "Identifier",
        "start": 450,
        "end": 454,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 456,
        "end": 461,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 458,
          "end": 461
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 462,
        "end": 478,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 464,
            "end": 476,
            "argument": {
              "type": "Literal",
              "start": 471,
              "end": 475,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 479,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 492,
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 494,
        "end": 499,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 496,
          "end": 499
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 500,
        "end": 521,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 502,
            "end": 519,
            "argument": {
              "type": "Identifier",
              "start": 509,
              "end": 518,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 522,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 531,
        "end": 537,
        "decorators": [],
        "name": "fooBar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 539,
        "end": 547,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 541,
          "end": 547
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 548,
        "end": 561,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 550,
            "end": 559,
            "argument": {
              "type": "Literal",
              "start": 557,
              "end": 558,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 562,
      "end": 593,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 577,
        "decorators": [],
        "name": "fooFoo",
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
        "start": 580,
        "end": 593,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 582,
            "end": 591,
            "argument": {
              "type": "Literal",
              "start": 589,
              "end": 590,
              "value": 5,
              "raw": "5"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 663,
      "end": 683,
      "expression": {
        "type": "CallExpression",
        "start": 663,
        "end": 682,
        "callee": {
          "type": "Identifier",
          "start": 663,
          "end": 680,
          "decorators": [],
          "name": "nullWidenFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 709,
      "expression": {
        "type": "CallExpression",
        "start": 684,
        "end": 708,
        "callee": {
          "type": "Identifier",
          "start": 684,
          "end": 706,
          "decorators": [],
          "name": "undefinedWidenFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
