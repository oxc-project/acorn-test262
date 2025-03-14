__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 76,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "pick",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 44,
          "end": 53,
          "decorators": [],
          "name": "keys",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 53,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 50,
              "end": 53,
              "elementType": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 55,
          "end": 62,
          "decorators": [],
          "name": "obj",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 59,
            "end": 62,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 62,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "O",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 63,
        "end": 75,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 65,
          "end": 75,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 69,
            "end": 75,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "O",
                  "optional": false
                }
              },
              {
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
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "decorators": [],
            "name": "Pick",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 43,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 42,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 35,
              "end": 42,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 42,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "O",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
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
      "type": "VariableDeclaration",
      "start": 77,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "_",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 90,
            "end": 121,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 95,
                "end": 100,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 96,
                    "end": 99,
                    "raw": "'b'",
                    "value": "b"
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 102,
                "end": 120,
                "properties": [
                  {
                    "type": "Property",
                    "start": 104,
                    "end": 110,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 107,
                      "end": 110,
                      "raw": "'a'",
                      "value": "a"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 112,
                    "end": 118,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 115,
                      "end": 118,
                      "raw": "'b'",
                      "value": "b"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "decorators": [],
              "name": "pick",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 177,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 139,
            "end": 143,
            "decorators": [],
            "optional": false,
            "properties": []
          },
          "init": {
            "type": "CallExpression",
            "start": 146,
            "end": 177,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 151,
                "end": 156,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 152,
                    "end": 155,
                    "raw": "'b'",
                    "value": "b"
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 158,
                "end": 176,
                "properties": [
                  {
                    "type": "Property",
                    "start": 160,
                    "end": 166,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 161,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 163,
                      "end": 166,
                      "raw": "'a'",
                      "value": "a"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 168,
                    "end": 174,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 171,
                      "end": 174,
                      "raw": "'b'",
                      "value": "b"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 150,
              "decorators": [],
              "name": "pick",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
