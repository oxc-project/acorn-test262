__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 65,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 13,
          "end": 63,
          "decorators": [],
          "optional": true,
          "properties": [
            {
              "type": "Property",
              "start": 15,
              "end": 16,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 18,
              "end": 19,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 21,
              "end": 22,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 63,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 27,
              "end": 63,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 29,
                  "end": 39,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 32,
                      "end": 38
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 50,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 51,
                  "end": 61,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 54,
                      "end": 61
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 66,
      "end": 99,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 95,
        "end": 99,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 78,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 79,
          "end": 93,
          "argument": {
            "type": "Identifier",
            "start": 82,
            "end": 86,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 93,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 88,
              "end": 93,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 88,
                "end": 91
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 132,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 131,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 105,
            "end": 130,
            "properties": [
              {
                "type": "Property",
                "start": 107,
                "end": 112,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 110,
                  "end": 112,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 114,
                "end": 118,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 118,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 120,
                "end": 128,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 123,
                  "end": 128,
                  "raw": "false",
                  "value": false,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 101,
          "end": 104,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 165,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 134,
        "end": 164,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 138,
            "end": 163,
            "properties": [
              {
                "type": "Property",
                "start": 140,
                "end": 148,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 143,
                  "end": 148,
                  "raw": "false",
                  "value": false,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 150,
                "end": 154,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 153,
                  "end": 154,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 156,
                "end": 161,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 161,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 134,
          "end": 137,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
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
