duplicateClassElements.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 530,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 37,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 60,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 60,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 83,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 83,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 83,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 97,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 136,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 136,
              "async": false,
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
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 166,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 166,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 166,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 157,
                  "decorators": [],
                  "name": "_x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 211,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 177,
              "end": 211,
              "async": false,
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
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 241,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 221,
              "end": 241,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 241,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 222,
                  "end": 232,
                  "decorators": [],
                  "name": "_y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 232,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 226,
                      "end": 232
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 265,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 255,
              "end": 265,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 265,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 309,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 309,
              "async": false,
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
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 314,
            "end": 339,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 319,
              "end": 339,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 339,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 320,
                  "end": 330,
                  "decorators": [],
                  "name": "_y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 322,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 324,
                      "end": 330
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 345,
            "end": 380,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 351,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 351,
              "end": 380,
              "async": false,
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
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 385,
            "end": 411,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 391,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 391,
              "end": 411,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 404,
                "end": 411,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 392,
                  "end": 402,
                  "decorators": [],
                  "name": "_x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 402,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 396,
                      "end": 402
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 416,
            "end": 426,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 425,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 432,
            "end": 472,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 438,
              "decorators": [],
              "name": "z2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 438,
              "end": 472,
              "async": false,
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
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 477,
            "end": 503,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 481,
              "end": 483,
              "decorators": [],
              "name": "z2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 483,
              "end": 503,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 496,
                "end": 503,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 484,
                  "end": 494,
                  "decorators": [],
                  "name": "_y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 486,
                    "end": 494,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 488,
                      "end": 494
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 508,
            "end": 527,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 515,
              "end": 517,
              "decorators": [],
              "name": "z2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 517,
              "end": 527,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 520,
                "end": 527,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
