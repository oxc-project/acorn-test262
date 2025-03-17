__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "name": "trans",
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
          "start": 26,
          "end": 45,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 45,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 29,
              "end": 45,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "name": "x",
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
                        "name": "T",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 54,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 48,
          "end": 54
        }
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
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 61,
          "name": "trans",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 62,
            "end": 72,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 63,
                "end": 66,
                "properties": [
                  {
                    "type": "Property",
                    "start": 64,
                    "end": 65,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 99,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 98,
        "callee": {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "name": "trans",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 97,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 82,
                "end": 87,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Literal",
              "start": 92,
              "end": 97,
              "value": "foo",
              "raw": "'foo'"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 129,
      "expression": {
        "type": "CallExpression",
        "start": 100,
        "end": 128,
        "callee": {
          "type": "Identifier",
          "start": 100,
          "end": 105,
          "name": "trans",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 106,
            "end": 127,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 107,
                "end": 117,
                "properties": [
                  {
                    "type": "Property",
                    "start": 108,
                    "end": 116,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayPattern",
                      "start": 111,
                      "end": 116,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 112,
                          "end": 113,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Literal",
              "start": 122,
              "end": 127,
              "value": "foo",
              "raw": "'foo'"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 158,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 157,
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 135,
          "name": "trans",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 136,
            "end": 156,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 137,
                "end": 146,
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 138,
                    "end": 141,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 139,
                        "end": 140,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "ObjectPattern",
                    "start": 142,
                    "end": 145,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 143,
                        "end": 144,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "name": "h",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "name": "h",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Literal",
              "start": 151,
              "end": 156,
              "value": "foo",
              "raw": "'foo'"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 184,
        "callee": {
          "type": "Identifier",
          "start": 159,
          "end": 164,
          "name": "trans",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 165,
            "end": 183,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 166,
                "end": 177,
                "properties": [
                  {
                    "type": "Property",
                    "start": 167,
                    "end": 168,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 170,
                    "end": 176,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 171,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 170,
                      "end": 176,
                      "left": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 171,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 174,
                        "end": 176,
                        "value": 10,
                        "raw": "10"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
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
