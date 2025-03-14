__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 30,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 14,
              "end": 20
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 21,
        "end": 29,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 23,
          "end": 29
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 61,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 51,
          "decorators": [],
          "name": "n",
          "optional": false,
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 60,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 54,
          "end": 60
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 62,
      "end": 85,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 80,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 81,
        "end": 84,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 83,
          "end": 84,
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 74,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
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
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 108,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 108,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 99,
        "end": 104,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 101,
          "end": 104
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 118,
            "end": 169,
            "properties": [
              {
                "type": "Property",
                "start": 124,
                "end": 134,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 125,
                  "end": 130,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 127,
                      "end": 129,
                      "raw": "\"\"",
                      "value": ""
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 133,
                  "end": 134,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 140,
                "end": 149,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 141,
                  "end": 145,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 143,
                      "end": 144,
                      "raw": "0",
                      "value": 0
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 148,
                  "end": 149,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 155,
                "end": 167,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 156,
                  "end": 163,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 158,
                      "end": 162,
                      "raw": "true",
                      "value": true
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 166,
                  "end": 167,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
