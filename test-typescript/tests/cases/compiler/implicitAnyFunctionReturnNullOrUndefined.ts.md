__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 710,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 53,
        "name": "nullWidenFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 147,
        "name": "undefinedWidenFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 211,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 219,
        "end": 408,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 304,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 225,
              "end": 241,
              "name": "nullWidenFuncOfC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 304,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 406,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 332,
              "name": "underfinedWidenFuncOfC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 406,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 441,
      "end": 478,
      "id": {
        "type": "Identifier",
        "start": 450,
        "end": 454,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 456,
        "end": 461,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 458,
          "end": 461
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 479,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 492,
        "name": "bar1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 494,
        "end": 499,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 496,
          "end": 499
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 522,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 531,
        "end": 537,
        "name": "fooBar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 539,
        "end": 547,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 541,
          "end": 547
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 562,
      "end": 593,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 577,
        "name": "fooFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "nullWidenFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "name": "undefinedWidenFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
