__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 137,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 2,
      "end": 71,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 71,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 15,
          "end": 65,
          "decorators": [],
          "optional": true,
          "properties": [
            {
              "type": "Property",
              "start": 17,
              "end": 18,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 20,
              "end": 21,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            {
              "type": "Property",
              "start": 23,
              "end": 24,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 29,
              "end": 65,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 31,
                  "end": 41,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 52,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 63,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 56,
                      "end": 63
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 104,
      "expression": {
        "type": "CallExpression",
        "start": 73,
        "end": 103,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 77,
            "end": 102,
            "properties": [
              {
                "type": "Property",
                "start": 79,
                "end": 84,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 82,
                  "end": 84,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 86,
                "end": 90,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 89,
                  "end": 90,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 92,
                "end": 100,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 95,
                  "end": 100,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 136,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 110,
            "end": 135,
            "properties": [
              {
                "type": "Property",
                "start": 112,
                "end": 120,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 115,
                  "end": 120,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "Property",
                "start": 122,
                "end": 126,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 125,
                  "end": 126,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 128,
                "end": 133,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 131,
                  "end": 133,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 106,
          "end": 109,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
