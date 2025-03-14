stringLiteralTypesOverloads05.ts
```json
{
  "type": "Program",
  "start": 24,
  "end": 360,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 55,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 55,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 53,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 49,
              "decorators": [],
              "name": "animal",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 51,
                "end": 53,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 40,
        "decorators": [],
        "name": "Animal",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 55,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 97,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 95,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "dog",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 93,
                "end": 95,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 79,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "decorators": [],
            "name": "Animal",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "Dog",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 138,
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 138,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 129,
            "end": 136,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "cat",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 134,
                "end": 136,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 126,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 126,
            "decorators": [],
            "name": "Animal",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 111,
        "decorators": [],
        "name": "Cat",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 139,
      "end": 183,
      "body": {
        "type": "TSInterfaceBody",
        "start": 170,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 172,
            "end": 181,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 177,
              "decorators": [],
              "name": "moose",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 179,
                "end": 181,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 163,
          "end": 169,
          "expression": {
            "type": "Identifier",
            "start": 163,
            "end": 169,
            "decorators": [],
            "name": "Animal",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 154,
        "decorators": [],
        "name": "Moose",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 185,
      "end": 217,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 201,
        "decorators": [],
        "name": "doThing",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 202,
          "end": 210,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 210,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 205,
              "end": 210,
              "literal": {
                "type": "Literal",
                "start": 205,
                "end": 210,
                "raw": "\"dog\"",
                "value": "dog"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 211,
        "end": 216,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 213,
          "end": 216,
          "typeName": {
            "type": "Identifier",
            "start": 213,
            "end": 216,
            "decorators": [],
            "name": "Dog",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 218,
      "end": 250,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 234,
        "decorators": [],
        "name": "doThing",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 235,
          "end": 243,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 243,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 238,
              "end": 243,
              "literal": {
                "type": "Literal",
                "start": 238,
                "end": 243,
                "raw": "\"cat\"",
                "value": "cat"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 244,
        "end": 249,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 246,
          "end": 249,
          "typeName": {
            "type": "Identifier",
            "start": 246,
            "end": 249,
            "decorators": [],
            "name": "Cat",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 251,
      "end": 287,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 267,
        "decorators": [],
        "name": "doThing",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 268,
          "end": 277,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 269,
            "end": 277,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 271,
              "end": 277
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 278,
        "end": 286,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 280,
          "end": 286,
          "typeName": {
            "type": "Identifier",
            "start": 280,
            "end": 286,
            "decorators": [],
            "name": "Animal",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 288,
      "end": 360,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 335,
        "end": 360,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 341,
            "end": 358,
            "argument": {
              "type": "Identifier",
              "start": 348,
              "end": 357,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 304,
        "decorators": [],
        "name": "doThing",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 305,
          "end": 314,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 314,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 308,
              "end": 314
            }
          }
        },
        {
          "type": "Identifier",
          "start": 316,
          "end": 326,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 318,
            "end": 326,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 320,
              "end": 326
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 327,
        "end": 334,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 329,
          "end": 334,
          "typeName": {
            "type": "Identifier",
            "start": 329,
            "end": 334,
            "decorators": [],
            "name": "Moose",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
