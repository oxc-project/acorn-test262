__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 31,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 30,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 24,
          "end": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 63,
      "expression": {
        "type": "CallExpression",
        "start": 33,
        "end": 62,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 33,
          "end": 60,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 33,
            "end": 51,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 39,
                "end": 50,
                "expression": {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 44,
                  "end": 50
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 33,
              "end": 38,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 33,
                "end": 36,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 60,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 98,
      "expression": {
        "type": "CallExpression",
        "start": 65,
        "end": 97,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 65,
          "end": 95,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 65,
            "end": 86,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 74,
                "end": 85,
                "expression": {
                  "type": "Literal",
                  "start": 74,
                  "end": 75,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 65,
              "end": 70,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 65,
                "end": 68,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 131,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 130,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 100,
          "end": 128,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 100,
            "end": 119,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 107,
                "end": 118,
                "expression": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 112,
                  "end": 118
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 100,
              "end": 105,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 120,
            "end": 128,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 162,
      "expression": {
        "type": "CallExpression",
        "start": 133,
        "end": 161,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 133,
          "end": 159,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 133,
            "end": 150,
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 144,
                "end": 149,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 144,
                  "end": 145,
                  "raw": "1",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "start": 148,
                  "end": 149,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 133,
              "end": 138,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 133,
                "end": 136,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 151,
            "end": 159,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 197,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 196,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 164,
          "end": 194,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 164,
            "end": 185,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 175,
                "end": 184,
                "expression": {
                  "type": "Literal",
                  "start": 183,
                  "end": 184,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 176,
                  "end": 182
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 164,
              "end": 169,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 164,
                "end": 167,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 186,
            "end": 194,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
