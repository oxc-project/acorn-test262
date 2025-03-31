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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 11,
          "end": 80,
          "left": {
            "type": "ObjectPattern",
            "start": 11,
            "end": 51,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 18,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 12,
                  "end": 18,
                  "left": {
                    "type": "Identifier",
                    "start": 12,
                    "end": 13,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 16,
                    "end": 18,
                    "value": 10,
                    "raw": "10"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 20,
                "end": 50,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 23,
                  "end": 50,
                  "left": {
                    "type": "ArrayPattern",
                    "start": 23,
                    "end": 35,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 38,
                    "end": 50,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 39,
                        "end": 40,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 42,
                        "end": 43,
                        "value": 2,
                        "raw": "2"
                      },
                      {
                        "type": "Literal",
                        "start": 45,
                        "end": 46,
                        "value": 3,
                        "raw": "3"
                      },
                      {
                        "type": "Literal",
                        "start": 48,
                        "end": 49,
                        "value": 4,
                        "raw": "4"
                      }
                    ]
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
          },
          "right": {
            "type": "ObjectExpression",
            "start": 54,
            "end": 80,
            "properties": [
              {
                "type": "Property",
                "start": 56,
                "end": 61,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 59,
                  "end": 61,
                  "value": 10,
                  "raw": "10"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 63,
                "end": 78,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 66,
                  "end": 78,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 67,
                      "end": 68,
                      "value": 2,
                      "raw": "2"
                    },
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 71,
                      "value": 4,
                      "raw": "4"
                    },
                    {
                      "type": "Literal",
                      "start": 73,
                      "end": 74,
                      "value": 6,
                      "raw": "6"
                    },
                    {
                      "type": "Literal",
                      "start": 76,
                      "end": 77,
                      "value": 8,
                      "raw": "8"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 97,
          "end": 124,
          "left": {
            "type": "ArrayPattern",
            "start": 97,
            "end": 109,
            "elements": [
              {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 112,
            "end": 124,
            "elements": [
              {
                "type": "Literal",
                "start": 113,
                "end": 114,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 122,
                "end": 123,
                "value": 4,
                "raw": "4"
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 130,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "name": "h",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 141,
          "end": 193,
          "elements": [
            {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 145,
              "end": 148,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 150,
              "end": 155,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 151,
                  "end": 154,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 152,
                      "end": 153,
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
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ObjectPattern",
              "start": 157,
              "end": 192,
              "properties": [
                {
                  "type": "Property",
                  "start": 158,
                  "end": 164,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 158,
                    "end": 164,
                    "left": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 162,
                      "end": 164,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 166,
                  "end": 178,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrayPattern",
                    "start": 169,
                    "end": 178,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 170,
                        "end": 171,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "name": "c",
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
                },
                {
                  "type": "Property",
                  "start": 180,
                  "end": 191,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 181,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 183,
                    "end": 191,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 184,
                        "end": 186,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 186,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 186,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 188,
                        "end": 190,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 190,
                          "name": "b1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 190,
                          "name": "b1",
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
        "type": "BlockStatement",
        "start": 194,
        "end": 197,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 198,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 209,
        "name": "h1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 210,
          "end": 263,
          "elements": [
            {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ArrayPattern",
              "start": 214,
              "end": 217,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ArrayPattern",
              "start": 219,
              "end": 224,
              "elements": [
                {
                  "type": "ArrayPattern",
                  "start": 220,
                  "end": 223,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
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
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "ObjectPattern",
              "start": 226,
              "end": 262,
              "properties": [
                {
                  "type": "Property",
                  "start": 227,
                  "end": 233,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 227,
                    "end": 233,
                    "left": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 228,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 231,
                      "end": 233,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 235,
                  "end": 248,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 235,
                    "end": 248,
                    "left": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 236,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 239,
                      "end": 248,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 240,
                          "end": 241,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 243,
                          "end": 244,
                          "value": 2,
                          "raw": "2"
                        },
                        {
                          "type": "Literal",
                          "start": 246,
                          "end": 247,
                          "value": 3,
                          "raw": "3"
                        }
                      ]
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 250,
                  "end": 261,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 253,
                    "end": 261,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 254,
                        "end": 256,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 256,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 256,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 258,
                        "end": 260,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 260,
                          "name": "b1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 260,
                          "name": "b1",
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
        "type": "BlockStatement",
        "start": 264,
        "end": 267,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
