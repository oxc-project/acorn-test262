fallbackToBindingPatternForTypeInference.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 55,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "trans",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 45,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 45,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 29,
              "end": 45,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 33,
                      "end": 34,
                      "typeName": {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
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
                "start": 36,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 54,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 48,
          "end": 54
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
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
      "start": 56,
      "end": 74,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 73,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 72,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 63,
                "end": 66,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 64,
                    "end": 65,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 61,
          "decorators": [],
          "name": "trans",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 99,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 98,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 97,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 92,
              "end": 97,
              "raw": "'foo'",
              "value": "foo"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 82,
                "end": 87,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                ],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "decorators": [],
          "name": "trans",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 129,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 128,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 106,
            "end": 127,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 122,
              "end": 127,
              "raw": "'foo'",
              "value": "foo"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 107,
                "end": 117,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 108,
                    "end": 116,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "d",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayPattern",
                      "start": 111,
                      "end": 116,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 112,
                          "end": 113,
                          "decorators": [],
                          "name": "e",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "f",
                          "optional": false
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 100,
          "end": 105,
          "decorators": [],
          "name": "trans",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 158,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 157,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 136,
            "end": 156,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 151,
              "end": 156,
              "raw": "'foo'",
              "value": "foo"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 137,
                "end": 146,
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 138,
                    "end": 141,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 139,
                        "end": 140,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "decorators": [],
                          "name": "g",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "decorators": [],
                          "name": "g",
                          "optional": false
                        }
                      }
                    ]
                  },
                  {
                    "type": "ObjectPattern",
                    "start": 142,
                    "end": 145,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 143,
                        "end": 144,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "h",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "decorators": [],
                          "name": "h",
                          "optional": false
                        }
                      }
                    ]
                  }
                ],
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 135,
          "decorators": [],
          "name": "trans",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 184,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 165,
            "end": 183,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 166,
                "end": 177,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 167,
                    "end": 168,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 170,
                    "end": 176,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 171,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 170,
                      "end": 176,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 171,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 174,
                        "end": 176,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 159,
          "end": 164,
          "decorators": [],
          "name": "trans",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
