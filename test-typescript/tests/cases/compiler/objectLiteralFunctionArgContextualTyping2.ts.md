objectLiteralFunctionArgContextualTyping2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 71,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 33,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 69,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 45,
              "decorators": [],
              "name": "doStuff",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 68,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 47,
                "end": 68,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 57,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 59,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 98,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 95,
        "end": 98,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 85,
          "end": 93,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 93,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 93,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 93,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 116,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 116,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 103,
            "end": 115,
            "properties": [
              {
                "type": "Property",
                "start": 105,
                "end": 113,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 110,
                  "decorators": [],
                  "name": "hello",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 112,
                  "end": 113,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 100,
          "end": 102,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 118,
        "end": 135,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 121,
            "end": 134,
            "properties": [
              {
                "type": "Property",
                "start": 123,
                "end": 132,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 128,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 130,
                  "end": 132,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 118,
          "end": 120,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 162,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 162,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 139,
            "end": 161,
            "properties": [
              {
                "type": "Property",
                "start": 141,
                "end": 150,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 146,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 148,
                  "end": 150,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 152,
                "end": 159,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 156,
                  "decorators": [],
                  "name": "what",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 159,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 138,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 190,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 190,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 167,
            "end": 189,
            "properties": [
              {
                "type": "Property",
                "start": 169,
                "end": 187,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 177,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 179,
                  "end": 187,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 166,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 226,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 226,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 195,
            "end": 225,
            "properties": [
              {
                "type": "Property",
                "start": 197,
                "end": 223,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 205,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 207,
                  "end": 223,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 208,
                      "end": 217,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 209,
                        "end": 217,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 211,
                          "end": 217
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 270,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 270,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 231,
            "end": 269,
            "properties": [
              {
                "type": "Property",
                "start": 233,
                "end": 242,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 238,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 242,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 244,
                "end": 267,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 252,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 254,
                  "end": 267,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 261,
                    "end": 267,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "decorators": [],
                      "name": "uhhh",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 256,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 228,
          "end": 230,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
