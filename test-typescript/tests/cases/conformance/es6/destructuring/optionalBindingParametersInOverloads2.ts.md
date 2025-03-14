optionalBindingParametersInOverloads2.ts
```json
{
  "type": "Program",
  "start": 2,
  "end": 167,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 2,
      "end": 67,
      "async": false,
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
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 101,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 81,
          "end": 95,
          "argument": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "rest",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 95,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 90,
              "end": 95,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 90,
                "end": 93
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 134,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 133,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 107,
            "end": 132,
            "properties": [
              {
                "type": "Property",
                "start": 109,
                "end": 114,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
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
                  "start": 112,
                  "end": 114,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 116,
                "end": 120,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
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
                  "start": 119,
                  "end": 120,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 122,
                "end": 130,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
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
                  "start": 125,
                  "end": 130,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 103,
          "end": 106,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 167,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 166,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 140,
            "end": 165,
            "properties": [
              {
                "type": "Property",
                "start": 142,
                "end": 150,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
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
                  "start": 145,
                  "end": 150,
                  "raw": "false",
                  "value": false
                }
              },
              {
                "type": "Property",
                "start": 152,
                "end": 156,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
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
                  "start": 155,
                  "end": 156,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 158,
                "end": 163,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
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
                  "start": 161,
                  "end": 163,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 139,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
