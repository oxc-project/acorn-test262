__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 38,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 21,
            "end": 36,
            "parameters": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 77,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 60,
            "end": 75,
            "parameters": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 70,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 70,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 64,
                    "end": 70
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "J",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 50,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 51,
            "end": 52,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 79,
      "end": 117,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 112,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 112,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 112,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 109,
                "end": 112,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 113,
        "end": 116,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 115,
          "end": 116,
          "typeName": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 99,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 101,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 118,
      "end": 154,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 140,
          "end": 149,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 149,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 145,
              "end": 149,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 146,
                "end": 149,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 147,
                    "end": 148,
                    "typeName": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "J",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 150,
        "end": 153,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 152,
          "end": 153,
          "typeName": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 136,
        "end": 139,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 138,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 242,
      "expression": {
        "type": "CallExpression",
        "start": 156,
        "end": 241,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 160,
            "end": 240,
            "properties": [
              {
                "type": "Property",
                "start": 166,
                "end": 178,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 166,
                  "end": 167,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 169,
                  "end": 178,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 175,
                    "end": 178,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 184,
                "end": 204,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 185,
                  "end": 197,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 185,
                    "end": 189,
                    "raw": "\"hi\"",
                    "value": "hi"
                  },
                  "right": {
                    "type": "Literal",
                    "start": 192,
                    "end": 197,
                    "raw": "\"bye\"",
                    "value": "bye"
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 200,
                  "end": 204,
                  "raw": "true",
                  "value": true
                }
              },
              {
                "type": "Property",
                "start": 210,
                "end": 220,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 211,
                  "end": 216,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 211,
                    "end": 212,
                    "raw": "0",
                    "value": 0
                  },
                  "right": {
                    "type": "Literal",
                    "start": 215,
                    "end": 216,
                    "raw": "1",
                    "value": 1
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 219,
                  "end": 220,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 226,
                "end": 238,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 227,
                  "end": 232,
                  "argument": {
                    "type": "Literal",
                    "start": 228,
                    "end": 232,
                    "raw": "\"hi\"",
                    "value": "hi"
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 235,
                  "end": 238,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 236,
                      "end": 237,
                      "raw": "0",
                      "value": 0
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 156,
          "end": 159,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 257,
      "expression": {
        "type": "CallExpression",
        "start": 244,
        "end": 256,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 246,
            "end": 255,
            "properties": [
              {
                "type": "Property",
                "start": 248,
                "end": 253,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 251,
                  "end": 253,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 244,
          "end": 245,
          "decorators": [],
          "name": "g",
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
