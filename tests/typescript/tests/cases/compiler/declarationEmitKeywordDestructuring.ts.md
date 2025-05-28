__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 471,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 135,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "decorators": [],
              "name": "enum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 21,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 52,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 42,
              "decorators": [],
              "name": "function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 75,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 65,
              "decorators": [],
              "name": "abstract",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 74,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 67,
                "end": 74
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 95,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 85,
              "decorators": [],
              "name": "async",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 94,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 87,
                "end": 94
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 100,
            "end": 115,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 105,
              "decorators": [],
              "name": "await",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 114,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 107,
                "end": 114
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 133,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 132,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 150,
          "end": 177,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 152,
              "end": 163,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 152,
                "end": 156,
                "decorators": [],
                "name": "enum",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 158,
                "end": 163,
                "decorators": [],
                "name": "_enum",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 165,
              "end": 172,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 168,
                "end": 172,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 177,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 199,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 185,
            "end": 197,
            "argument": {
              "type": "Identifier",
              "start": 192,
              "end": 196,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 201,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 212,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 213,
          "end": 248,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 215,
              "end": 234,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 215,
                "end": 223,
                "decorators": [],
                "name": "function",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 225,
                "end": 234,
                "decorators": [],
                "name": "_function",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 236,
              "end": 243,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 239,
                "end": 243,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 248,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 247,
              "end": 248,
              "typeName": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 250,
        "end": 270,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 256,
            "end": 268,
            "argument": {
              "type": "Identifier",
              "start": 263,
              "end": 267,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 341,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 283,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 284,
          "end": 319,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 286,
              "end": 305,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 286,
                "end": 294,
                "decorators": [],
                "name": "abstract",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 296,
                "end": 305,
                "decorators": [],
                "name": "_abstract",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 307,
              "end": 314,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 310,
                "end": 314,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 316,
            "end": 319,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 318,
              "end": 319,
              "typeName": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 321,
        "end": 341,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 327,
            "end": 339,
            "argument": {
              "type": "Identifier",
              "start": 334,
              "end": 338,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 343,
      "end": 406,
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 354,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 355,
          "end": 384,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 357,
              "end": 370,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 357,
                "end": 362,
                "decorators": [],
                "name": "async",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 364,
                "end": 370,
                "decorators": [],
                "name": "_async",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 372,
              "end": 379,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 375,
                "end": 379,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 381,
            "end": 384,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 383,
              "end": 384,
              "typeName": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 406,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 392,
            "end": 404,
            "argument": {
              "type": "Identifier",
              "start": 399,
              "end": 403,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 419,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 420,
          "end": 449,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 422,
              "end": 435,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 422,
                "end": 427,
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 429,
                "end": 435,
                "decorators": [],
                "name": "_await",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 437,
              "end": 444,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 440,
                "end": 444,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 446,
            "end": 449,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 448,
              "end": 449,
              "typeName": {
                "type": "Identifier",
                "start": 448,
                "end": 449,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 451,
        "end": 471,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 457,
            "end": 469,
            "argument": {
              "type": "Identifier",
              "start": 464,
              "end": 468,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
