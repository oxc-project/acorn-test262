__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1199,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 140,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 140,
        "body": [
          {
            "type": "IfStatement",
            "start": 29,
            "end": 66,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 54,
              "end": 66,
              "argument": {
                "type": "Literal",
                "start": 61,
                "end": 65,
                "raw": "true",
                "value": true
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 33,
              "end": 52,
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "start": 33,
                "end": 46,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 33,
                  "end": 44,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 37,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 44,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 49,
                "end": 52,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 22,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 15,
          "end": 22
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 142,
      "end": 167,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 156,
        "decorators": [],
        "name": "MyUnknown",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 159,
        "end": 166
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 168,
      "end": 308,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 308,
        "body": [
          {
            "type": "IfStatement",
            "start": 197,
            "end": 234,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 222,
              "end": 234,
              "argument": {
                "type": "Literal",
                "start": 229,
                "end": 233,
                "raw": "true",
                "value": true
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 201,
              "end": 220,
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "start": 201,
                "end": 214,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 201,
                  "end": 212,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 205,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 212,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 217,
                "end": 220,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 179,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 190,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 183,
          "end": 190
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 310,
      "end": 399,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 329,
        "end": 399,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 321,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 323,
        "end": 328,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 325,
          "end": 328
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 492,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 421,
        "end": 492,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 412,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 414,
        "end": 420,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 416,
          "end": 420
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 494,
      "end": 648,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 512,
        "end": 648,
        "body": [
          {
            "type": "IfStatement",
            "start": 518,
            "end": 553,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 543,
              "end": 553,
              "argument": {
                "type": "ObjectExpression",
                "start": 550,
                "end": 552,
                "properties": []
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 522,
              "end": 541,
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "start": 522,
                "end": 535,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 522,
                  "end": 533,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 522,
                    "end": 526,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 533,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 538,
                "end": 541,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 505,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 507,
        "end": 511,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 509,
          "end": 511,
          "members": []
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 650,
      "end": 873,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 685,
        "end": 873,
        "body": [
          {
            "type": "IfStatement",
            "start": 691,
            "end": 739,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 716,
              "end": 739,
              "argument": {
                "type": "ObjectExpression",
                "start": 723,
                "end": 738,
                "properties": [
                  {
                    "type": "Property",
                    "start": 725,
                    "end": 736,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 725,
                      "end": 730,
                      "raw": "\"foo\"",
                      "value": "foo"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 732,
                      "end": 736,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 695,
              "end": 714,
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "start": 695,
                "end": 708,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 695,
                  "end": 706,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 695,
                    "end": 699,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 700,
                    "end": 706,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 711,
                "end": 714,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 661,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 663,
        "end": 684,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 665,
          "end": 684,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 671,
            "end": 684,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 672,
                "end": 678
              },
              {
                "type": "TSAnyKeyword",
                "start": 680,
                "end": 683
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 665,
            "end": 671,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 875,
      "end": 1031,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 895,
        "end": 1031,
        "body": [
          {
            "type": "IfStatement",
            "start": 901,
            "end": 938,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 926,
              "end": 938,
              "argument": {
                "type": "Literal",
                "start": 933,
                "end": 937,
                "raw": "null",
                "value": null
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 905,
              "end": 924,
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "start": 905,
                "end": 918,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 905,
                  "end": 916,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 905,
                    "end": 909,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 910,
                    "end": 916,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 921,
                "end": 924,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 884,
        "end": 886,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 888,
        "end": 894,
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 890,
          "end": 894
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1033,
      "end": 1199,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1062,
        "end": 1199,
        "body": [
          {
            "type": "IfStatement",
            "start": 1068,
            "end": 1106,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 1093,
              "end": 1106,
              "argument": {
                "type": "Literal",
                "start": 1100,
                "end": 1105,
                "raw": "\"foo\"",
                "value": "foo"
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1072,
              "end": 1091,
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "start": 1072,
                "end": 1085,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1072,
                  "end": 1083,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1072,
                    "end": 1076,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1083,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 1088,
                "end": 1091,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1042,
        "end": 1044,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1046,
        "end": 1061,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1048,
          "end": 1061,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 1048,
              "end": 1054
            },
            {
              "type": "TSNullKeyword",
              "start": 1057,
              "end": 1061
            }
          ]
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
