__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 16
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 19,
                  "end": 20
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 20
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 23
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 26,
                  "end": 30
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 30
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 31
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              },
              "start": 33,
              "end": 41
            },
            "start": 31,
            "end": 41
          },
          "value": null,
          "start": 11,
          "end": 41
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 43,
        "end": 46
      },
      "expression": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 69
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 72,
                  "end": 74
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 74
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 75
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              },
              "start": 77,
              "end": 85
            },
            "start": 75,
            "end": 85
          },
          "value": null,
          "start": 59,
          "end": 85
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 87,
        "end": 90
      },
      "expression": false,
      "start": 48,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 102
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 107,
                  "end": 108
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 111
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 107,
                "end": 111
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 119
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 119
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 113,
                "end": 119
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 121,
                  "end": 122
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 125
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 121,
                "end": 125
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 126
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 128,
              "end": 153
            },
            "start": 126,
            "end": 153
          },
          "value": null,
          "start": 103,
          "end": 153
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 155,
        "end": 158
      },
      "expression": false,
      "start": 92,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              null,
              null,
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 183
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 184
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 186,
              "end": 211
            },
            "start": 184,
            "end": 211
          },
          "value": null,
          "start": 171,
          "end": 211
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 213,
        "end": 216
      },
      "expression": false,
      "start": 160,
      "end": 216
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 228
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 233,
                  "end": 234
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 237
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 240,
                    "end": 241
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 241
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 233,
                "end": 241
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 243,
                  "end": 244
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 247
                  },
                  "right": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 250,
                    "end": 254
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 254
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 243,
                "end": 254
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 263
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 256,
                "end": 269
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 270
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 272,
              "end": 297
            },
            "start": 270,
            "end": 297
          },
          "value": null,
          "start": 229,
          "end": 297
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 299,
        "end": 302
      },
      "expression": false,
      "start": 218,
      "end": 302
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 302
}
```
