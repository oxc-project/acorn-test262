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
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "doStuff",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "t",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    },
                    "decorators": [],
                    "optional": false
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
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 85,
          "end": 93,
          "name": "args",
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
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 95,
        "end": 98,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 110,
                  "name": "hello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 112,
                  "end": 113,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 128,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 130,
                  "end": 132,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 146,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 148,
                  "end": 150,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 152,
                "end": 159,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 156,
                  "name": "what",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 158,
                  "end": 159,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 177,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 179,
                  "end": 187,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 205,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 207,
                  "end": 223,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 208,
                      "end": 217,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 209,
                        "end": 217,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 211,
                          "end": 217
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
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
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 238,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 242,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 244,
                "end": 267,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 252,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 254,
                  "end": 267,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 256,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "MemberExpression",
                    "start": 261,
                    "end": 267,
                    "object": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "name": "uhhh",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
