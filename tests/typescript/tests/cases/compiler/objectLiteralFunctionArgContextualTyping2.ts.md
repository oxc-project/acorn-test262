__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 69,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 45,
              "decorators": [],
              "name": "doStuff",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 68,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 47,
                "end": 68,
                "typeParameters": null,
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 95,
        "end": 98,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 116,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 116,
        "callee": {
          "type": "Identifier",
          "start": 100,
          "end": 102,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 110,
                  "decorators": [],
                  "name": "hello",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 112,
                  "end": 113,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 118,
        "end": 135,
        "callee": {
          "type": "Identifier",
          "start": 118,
          "end": 120,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 128,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 130,
                  "end": 132,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 162,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 162,
        "callee": {
          "type": "Identifier",
          "start": 136,
          "end": 138,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 146,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 148,
                  "end": 150,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 152,
                "end": 159,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 156,
                  "decorators": [],
                  "name": "what",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 159,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 190,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 190,
        "callee": {
          "type": "Identifier",
          "start": 164,
          "end": 166,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 177,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 179,
                  "end": 187,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 226,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 226,
        "callee": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 205,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 207,
                  "end": 223,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 270,
      "expression": {
        "type": "CallExpression",
        "start": 228,
        "end": 270,
        "callee": {
          "type": "Identifier",
          "start": 228,
          "end": 230,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 238,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 242,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 244,
                "end": 267,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 252,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 254,
                  "end": 267,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 256,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "start": 261,
                    "end": 267,
                    "object": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "decorators": [],
                      "name": "uhhh",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
