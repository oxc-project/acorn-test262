__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
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
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 31,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 77,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 60,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 73,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 73,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 70,
                "end": 73,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 71,
                    "end": 72,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 74,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 76,
          "end": 77,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 176,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 79,
        "end": 175,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 83,
            "end": 174,
            "properties": [
              {
                "type": "Property",
                "start": 89,
                "end": 94,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 94,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 100,
                "end": 112,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 100,
                  "end": 101,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 103,
                  "end": 112,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 109,
                    "end": 112,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 118,
                "end": 138,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 119,
                  "end": 131,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 119,
                    "end": 123,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 126,
                    "end": 131,
                    "raw": "\"bye\"",
                    "value": "bye",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 138,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 144,
                "end": 154,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 145,
                  "end": 150,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 145,
                    "end": 146,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 149,
                    "end": 150,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
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
                "start": 160,
                "end": 172,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 161,
                  "end": 166,
                  "argument": {
                    "type": "Literal",
                    "start": 162,
                    "end": 166,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
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
                  "start": 169,
                  "end": 172,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 170,
                      "end": 171,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 79,
          "end": 82,
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
