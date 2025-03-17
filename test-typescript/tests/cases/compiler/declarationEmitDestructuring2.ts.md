__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 11,
          "end": 80,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 11,
            "end": 51,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 18,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
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
                  "type": "AssignmentPattern",
                  "start": 12,
                  "end": 18,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 12,
                    "end": 13,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 16,
                    "end": 18,
                    "raw": "10",
                    "value": 10
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 20,
                "end": 50,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
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
                  "type": "AssignmentPattern",
                  "start": 23,
                  "end": 50,
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "start": 23,
                    "end": 35,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "start": 38,
                    "end": 50,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 39,
                        "end": 40,
                        "raw": "1",
                        "value": 1
                      },
                      {
                        "type": "Literal",
                        "start": 42,
                        "end": 43,
                        "raw": "2",
                        "value": 2
                      },
                      {
                        "type": "Literal",
                        "start": 45,
                        "end": 46,
                        "raw": "3",
                        "value": 3
                      },
                      {
                        "type": "Literal",
                        "start": 48,
                        "end": 49,
                        "raw": "4",
                        "value": 4
                      }
                    ]
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 54,
            "end": 80,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 61,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
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
                  "start": 59,
                  "end": 61,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 63,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
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
                  "type": "ArrayExpression",
                  "start": 66,
                  "end": 78,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 67,
                      "end": 68,
                      "raw": "2",
                      "value": 2
                    },
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 71,
                      "raw": "4",
                      "value": 4
                    },
                    {
                      "type": "Literal",
                      "start": 73,
                      "end": 74,
                      "raw": "6",
                      "value": 6
                    },
                    {
                      "type": "Literal",
                      "start": 76,
                      "end": 77,
                      "raw": "8",
                      "value": 8
                    }
                  ]
                }
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 129,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
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
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 97,
          "end": 124,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 97,
            "end": 109,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 112,
            "end": 124,
            "elements": [
              {
                "type": "Literal",
                "start": 113,
                "end": 114,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 122,
                "end": 123,
                "raw": "4",
                "value": 4
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 130,
      "end": 197,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 197,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 141,
          "end": 193,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 145,
              "end": 148,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 150,
              "end": 155,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 151,
                  "end": 154,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 152,
                      "end": 153,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ObjectPattern",
              "start": 157,
              "end": 192,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 158,
                  "end": 164,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
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
                    "type": "AssignmentPattern",
                    "start": 158,
                    "end": 164,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 162,
                      "end": 164,
                      "raw": "10",
                      "value": 10
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 166,
                  "end": 178,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
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
                    "type": "ArrayPattern",
                    "start": 169,
                    "end": 178,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 170,
                        "end": 171,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 180,
                  "end": 191,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 181,
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
                    "type": "ObjectPattern",
                    "start": 183,
                    "end": 191,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 184,
                        "end": 186,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 186,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 186,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 188,
                        "end": 190,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 190,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 190,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 198,
      "end": 267,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 267,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 209,
        "decorators": [],
        "name": "h1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 210,
          "end": 263,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 214,
              "end": 217,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 219,
              "end": 224,
              "decorators": [],
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 220,
                  "end": 223,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ObjectPattern",
              "start": 226,
              "end": 262,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 227,
                  "end": 233,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
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
                    "type": "AssignmentPattern",
                    "start": 227,
                    "end": 233,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 228,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 231,
                      "end": 233,
                      "raw": "10",
                      "value": 10
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 235,
                  "end": 248,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
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
                    "type": "AssignmentPattern",
                    "start": 235,
                    "end": 248,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 236,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ArrayExpression",
                      "start": 239,
                      "end": 248,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 240,
                          "end": 241,
                          "raw": "1",
                          "value": 1
                        },
                        {
                          "type": "Literal",
                          "start": 243,
                          "end": 244,
                          "raw": "2",
                          "value": 2
                        },
                        {
                          "type": "Literal",
                          "start": 246,
                          "end": 247,
                          "raw": "3",
                          "value": 3
                        }
                      ]
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 250,
                  "end": 261,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
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
                    "type": "ObjectPattern",
                    "start": 253,
                    "end": 261,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 254,
                        "end": 256,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 256,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 256,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 258,
                        "end": 260,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 260,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 260,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
