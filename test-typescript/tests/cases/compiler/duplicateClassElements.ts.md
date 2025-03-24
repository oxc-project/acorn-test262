__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 530,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 530,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "a",
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
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "a",
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
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 60,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 60,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 83,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 83,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 83,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 97,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "name": "x",
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
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 110,
                "end": 136,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 120,
                    "end": 130,
                    "argument": {
                      "type": "Literal",
                      "start": 127,
                      "end": 129,
                      "value": 10,
                      "raw": "10"
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
            "start": 141,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 166,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 157,
                  "name": "_x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 166,
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
          },
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 211,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 177,
              "end": 211,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 211,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 190,
                    "end": 205,
                    "argument": {
                      "type": "Literal",
                      "start": 197,
                      "end": 204,
                      "value": "Hello",
                      "raw": "\"Hello\""
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
            "start": 216,
            "end": 241,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 221,
              "end": 241,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 222,
                  "end": 232,
                  "name": "_y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 241,
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
          },
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 265,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 255,
              "end": 265,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 265,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 309,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 309,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 278,
                "end": 309,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 288,
                    "end": 303,
                    "argument": {
                      "type": "Literal",
                      "start": 295,
                      "end": 302,
                      "value": "Hello",
                      "raw": "\"Hello\""
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
            "start": 314,
            "end": 339,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 319,
              "end": 339,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 320,
                  "end": 330,
                  "name": "_y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 322,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 324,
                      "end": 330
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 339,
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
          },
          {
            "type": "MethodDefinition",
            "start": 345,
            "end": 380,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 351,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 351,
              "end": 380,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 354,
                "end": 380,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 364,
                    "end": 374,
                    "argument": {
                      "type": "Literal",
                      "start": 371,
                      "end": 373,
                      "value": 10,
                      "raw": "10"
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
            "start": 385,
            "end": 411,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 391,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 391,
              "end": 411,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 392,
                  "end": 402,
                  "name": "_x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 402,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 396,
                      "end": 402
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 404,
                "end": 411,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 416,
            "end": 426,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 425,
              "name": "x2",
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
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 432,
            "end": 472,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 438,
              "name": "z2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 438,
              "end": 472,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 441,
                "end": 472,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 451,
                    "end": 466,
                    "argument": {
                      "type": "Literal",
                      "start": 458,
                      "end": 465,
                      "value": "Hello",
                      "raw": "\"Hello\""
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
            "start": 477,
            "end": 503,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 481,
              "end": 483,
              "name": "z2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 483,
              "end": 503,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 484,
                  "end": 494,
                  "name": "_y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 486,
                    "end": 494,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 488,
                      "end": 494
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 496,
                "end": 503,
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
          },
          {
            "type": "MethodDefinition",
            "start": 508,
            "end": 527,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 515,
              "end": 517,
              "name": "z2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 517,
              "end": 527,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 520,
                "end": 527,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
