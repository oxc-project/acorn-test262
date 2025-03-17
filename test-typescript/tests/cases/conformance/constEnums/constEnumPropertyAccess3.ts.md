__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 92,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 92,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 25,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 23,
              "end": 25,
              "argument": {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "raw": "1",
                "value": 1
              },
              "operator": "~",
              "prefix": true
            }
          },
          {
            "type": "TSEnumMember",
            "start": 31,
            "end": 37,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 35,
              "end": 37,
              "argument": {
                "type": "Literal",
                "start": 36,
                "end": 37,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 55,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 47,
              "end": 55,
              "argument": {
                "type": "BinaryExpression",
                "start": 49,
                "end": 54,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 49,
                  "end": 50,
                  "raw": "1",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "start": 53,
                  "end": 54,
                  "raw": "1",
                  "value": 1
                }
              },
              "operator": "~",
              "prefix": true
            }
          },
          {
            "type": "TSEnumMember",
            "start": 61,
            "end": 73,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "UnaryExpression",
              "start": 65,
              "end": 73,
              "argument": {
                "type": "BinaryExpression",
                "start": 67,
                "end": 72,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 67,
                  "end": 68,
                  "raw": "1",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "start": 71,
                  "end": 72,
                  "raw": "2",
                  "value": 2
                }
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "TSEnumMember",
            "start": 79,
            "end": 89,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 83,
              "end": 89,
              "operator": "-",
              "left": {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 87,
                "end": 89,
                "raw": "10",
                "value": 10
              }
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 94,
        "end": 108,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 94,
          "end": 106,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 94,
            "end": 97,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 98,
            "end": 106,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 124,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 110,
          "end": 122,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 110,
            "end": 113,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 122,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 141,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 126,
        "end": 140,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 126,
          "end": 138,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 126,
            "end": 129,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 138,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 157,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 156,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 154,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 142,
            "end": 145,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 154,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 177,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 176,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 159,
          "end": 174,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 159,
            "end": 165,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 161,
              "end": 164,
              "raw": "\"A\"",
              "value": "A"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 166,
            "end": 174,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 196,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 195,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 193,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 178,
            "end": 184,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 180,
              "end": 183,
              "raw": "\"B\"",
              "value": "B"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 185,
            "end": 193,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 197,
      "end": 215,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 197,
        "end": 214,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 197,
          "end": 212,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 197,
            "end": 203,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 199,
              "end": 202,
              "raw": "\"C\"",
              "value": "C"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 204,
            "end": 212,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 234,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 216,
        "end": 233,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 216,
          "end": 231,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 216,
            "end": 222,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 218,
              "end": 221,
              "raw": "\"D\"",
              "value": "D"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 223,
            "end": 231,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 253,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 235,
        "end": 252,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 235,
          "end": 250,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 235,
            "end": 241,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 237,
              "end": 240,
              "raw": "\"E\"",
              "value": "E"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 250,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
