__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 46,
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
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 11,
          "end": 41,
          "argument": {
            "type": "ArrayPattern",
            "start": 14,
            "end": 31,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 15,
                "end": 20,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 19,
                  "end": 20,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": null
              },
              {
                "type": "AssignmentPattern",
                "start": 22,
                "end": 30,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 26,
                  "end": 30,
                  "raw": "true",
                  "value": true
                },
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 41,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 33,
              "end": 41,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 90,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 90,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 59,
          "end": 85,
          "argument": {
            "type": "ArrayPattern",
            "start": 62,
            "end": 75,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 63,
                "end": 74,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 69,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ArrayExpression",
                  "start": 72,
                  "end": 74,
                  "elements": []
                },
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 85,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 77,
              "end": 85,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 92,
      "end": 158,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 155,
        "end": 158,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 103,
          "end": 153,
          "argument": {
            "type": "ObjectPattern",
            "start": 106,
            "end": 126,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 107,
                "end": 111,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 113,
                "end": 119,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 119,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 119,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 121,
                "end": 125,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 121,
                  "end": 122,
                  "raw": "3",
                  "value": 3
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 153,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 128,
              "end": 153,
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 129,
                  "end": 136
                },
                {
                  "type": "TSStringKeyword",
                  "start": 138,
                  "end": 144
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 146,
                  "end": 152
                }
              ]
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 160,
      "end": 216,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 213,
        "end": 216,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 170,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 171,
          "end": 211,
          "argument": {
            "type": "ArrayPattern",
            "start": 174,
            "end": 184,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              null,
              null,
              {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 184,
            "end": 211,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 186,
              "end": 211,
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 187,
                  "end": 194
                },
                {
                  "type": "TSStringKeyword",
                  "start": 196,
                  "end": 202
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 204,
                  "end": 210
                }
              ]
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 218,
      "end": 302,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 299,
        "end": 302,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 228,
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 229,
          "end": 297,
          "argument": {
            "type": "ObjectPattern",
            "start": 232,
            "end": 270,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 233,
                "end": 241,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 233,
                  "end": 234,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 236,
                  "end": 241,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 237,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 240,
                    "end": 241,
                    "raw": "1",
                    "value": 1
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 243,
                "end": 254,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 243,
                  "end": 244,
                  "raw": "1",
                  "value": 1
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 246,
                  "end": 254,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 247,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 250,
                    "end": 254,
                    "raw": "true",
                    "value": true
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 256,
                "end": 269,
                "argument": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 263,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 270,
            "end": 297,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 272,
              "end": 297,
              "elementTypes": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 273,
                  "end": 280
                },
                {
                  "type": "TSStringKeyword",
                  "start": 282,
                  "end": 288
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 290,
                  "end": 296
                }
              ]
            }
          },
          "value": null
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
