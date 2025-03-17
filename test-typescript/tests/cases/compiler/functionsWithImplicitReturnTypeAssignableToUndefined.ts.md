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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
        "start": 23,
        "end": 140,
        "body": [
          {
            "type": "IfStatement",
            "start": 29,
            "end": 66,
            "test": {
              "type": "BinaryExpression",
              "start": 33,
              "end": 52,
              "left": {
                "type": "CallExpression",
                "start": 33,
                "end": 46,
                "callee": {
                  "type": "MemberExpression",
                  "start": 33,
                  "end": 44,
                  "object": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 37,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 44,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 49,
                "end": 52,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 54,
              "end": 66,
              "argument": {
                "type": "Literal",
                "start": 61,
                "end": 65,
                "value": true,
                "raw": "true"
              }
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 22,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 15,
          "end": 22
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 142,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 156,
        "name": "MyUnknown",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 159,
        "end": 166
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 168,
      "end": 308,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 179,
        "name": "f2",
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
        "start": 191,
        "end": 308,
        "body": [
          {
            "type": "IfStatement",
            "start": 197,
            "end": 234,
            "test": {
              "type": "BinaryExpression",
              "start": 201,
              "end": 220,
              "left": {
                "type": "CallExpression",
                "start": 201,
                "end": 214,
                "callee": {
                  "type": "MemberExpression",
                  "start": 201,
                  "end": 212,
                  "object": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 205,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 212,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 217,
                "end": 220,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 222,
              "end": 234,
              "argument": {
                "type": "Literal",
                "start": 229,
                "end": 233,
                "value": true,
                "raw": "true"
              }
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 181,
        "end": 190,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 183,
          "end": 190
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 310,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 321,
        "name": "f3",
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
        "start": 329,
        "end": 399,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 323,
        "end": 328,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 325,
          "end": 328
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 492,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 412,
        "name": "f4",
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
        "start": 421,
        "end": 492,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 414,
        "end": 420,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 416,
          "end": 420
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 494,
      "end": 648,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 505,
        "name": "f5",
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
        "start": 512,
        "end": 648,
        "body": [
          {
            "type": "IfStatement",
            "start": 518,
            "end": 553,
            "test": {
              "type": "BinaryExpression",
              "start": 522,
              "end": 541,
              "left": {
                "type": "CallExpression",
                "start": 522,
                "end": 535,
                "callee": {
                  "type": "MemberExpression",
                  "start": 522,
                  "end": 533,
                  "object": {
                    "type": "Identifier",
                    "start": 522,
                    "end": 526,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 533,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 538,
                "end": 541,
                "value": 0.5,
                "raw": "0.5"
              }
            },
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
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 650,
      "end": 873,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 661,
        "name": "f6",
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
        "start": 685,
        "end": 873,
        "body": [
          {
            "type": "IfStatement",
            "start": 691,
            "end": 739,
            "test": {
              "type": "BinaryExpression",
              "start": 695,
              "end": 714,
              "left": {
                "type": "CallExpression",
                "start": 695,
                "end": 708,
                "callee": {
                  "type": "MemberExpression",
                  "start": 695,
                  "end": 706,
                  "object": {
                    "type": "Identifier",
                    "start": 695,
                    "end": 699,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 700,
                    "end": 706,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 711,
                "end": 714,
                "value": 0.5,
                "raw": "0.5"
              }
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 725,
                      "end": 730,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 732,
                      "end": 736,
                      "value": true,
                      "raw": "true"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 663,
        "end": 684,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 665,
          "end": 684,
          "typeName": {
            "type": "Identifier",
            "start": 665,
            "end": 671,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 875,
      "end": 1031,
      "id": {
        "type": "Identifier",
        "start": 884,
        "end": 886,
        "name": "f7",
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
        "start": 895,
        "end": 1031,
        "body": [
          {
            "type": "IfStatement",
            "start": 901,
            "end": 938,
            "test": {
              "type": "BinaryExpression",
              "start": 905,
              "end": 924,
              "left": {
                "type": "CallExpression",
                "start": 905,
                "end": 918,
                "callee": {
                  "type": "MemberExpression",
                  "start": 905,
                  "end": 916,
                  "object": {
                    "type": "Identifier",
                    "start": 905,
                    "end": 909,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 910,
                    "end": 916,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 921,
                "end": 924,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 926,
              "end": 938,
              "argument": {
                "type": "Literal",
                "start": 933,
                "end": 937,
                "value": null,
                "raw": "null"
              }
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 888,
        "end": 894,
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 890,
          "end": 894
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1033,
      "end": 1199,
      "id": {
        "type": "Identifier",
        "start": 1042,
        "end": 1044,
        "name": "f8",
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
        "start": 1062,
        "end": 1199,
        "body": [
          {
            "type": "IfStatement",
            "start": 1068,
            "end": 1106,
            "test": {
              "type": "BinaryExpression",
              "start": 1072,
              "end": 1091,
              "left": {
                "type": "CallExpression",
                "start": 1072,
                "end": 1085,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1072,
                  "end": 1083,
                  "object": {
                    "type": "Identifier",
                    "start": 1072,
                    "end": 1076,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1083,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 1088,
                "end": 1091,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 1093,
              "end": 1106,
              "argument": {
                "type": "Literal",
                "start": 1100,
                "end": 1105,
                "value": "foo",
                "raw": "\"foo\""
              }
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
