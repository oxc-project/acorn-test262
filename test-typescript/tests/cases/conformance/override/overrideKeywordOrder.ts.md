overrideKeywordOrder.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 643,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 125,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 24,
            "end": 38,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 33,
              "decorators": [],
              "name": "s1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 38,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 38,
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
            "start": 41,
            "end": 55,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 50,
              "decorators": [],
              "name": "s2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 55,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 55,
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
            "type": "TSAbstractMethodDefinition",
            "start": 58,
            "end": 78,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 69,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 69,
              "end": 78,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 71,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 73,
                  "end": 77
                }
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 81,
            "end": 101,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 92,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 92,
              "end": 101,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 94,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 96,
                  "end": 100
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 104,
            "end": 112,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 106,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 111,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 108,
                "end": 111
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 123,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 117,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 127,
      "end": 214,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 214,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 178,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 173,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 178,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 176,
                "end": 178,
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
            "start": 181,
            "end": 203,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 198,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 198,
              "end": 203,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 201,
                "end": 203,
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
        "start": 133,
        "end": 138,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 147,
        "end": 151,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 215,
      "end": 324,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 240,
        "end": 324,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 267,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 260,
              "end": 262,
              "decorators": [],
              "name": "s1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 267,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 265,
                "end": 267,
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
            "start": 279,
            "end": 302,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 297,
              "decorators": [],
              "name": "s2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 302,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 300,
                "end": 302,
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
            "start": 305,
            "end": 312,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 307,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 307,
              "end": 312,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 310,
                "end": 312,
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
            "start": 315,
            "end": 322,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 317,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 317,
              "end": 322,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 320,
                "end": 322,
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
        "start": 221,
        "end": 226,
        "decorators": [],
        "name": "Test2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 235,
        "end": 239,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 325,
      "end": 414,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 350,
        "end": 414,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 354,
            "end": 377,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 370,
              "end": 372,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 372,
              "end": 377,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 375,
                "end": 377,
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
            "start": 389,
            "end": 412,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 407,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 407,
              "end": 412,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 410,
                "end": 412,
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
        "start": 331,
        "end": 336,
        "decorators": [],
        "name": "Test3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 345,
        "end": 349,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 415,
      "end": 530,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 440,
        "end": 530,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 444,
            "end": 470,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 462,
              "end": 464,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": true,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 464,
              "end": 469,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 466,
                "end": 469
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 473,
            "end": 499,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 493,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "override": true,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 498,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 495,
                "end": 498
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 511,
            "end": 518,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 511,
              "end": 513,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 513,
              "end": 518,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 516,
                "end": 518,
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
            "start": 521,
            "end": 528,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 521,
              "end": 523,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 523,
              "end": 528,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 526,
                "end": 528,
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
        "start": 421,
        "end": 426,
        "decorators": [],
        "name": "Test4",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 435,
        "end": 439,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 532,
      "end": 642,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 566,
        "end": 642,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 570,
            "end": 599,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 588,
              "end": 590,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 590,
              "end": 599,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 592,
                "end": 598,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 594,
                  "end": 598
                }
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 611,
            "end": 640,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 629,
              "end": 631,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 631,
              "end": 640,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 633,
                "end": 639,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 635,
                  "end": 639
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 552,
        "decorators": [],
        "name": "Test5",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 561,
        "end": 565,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
