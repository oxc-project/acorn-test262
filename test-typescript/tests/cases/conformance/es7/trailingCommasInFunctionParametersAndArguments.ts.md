__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 455,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 18,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 27,
      "expression": {
        "type": "CallExpression",
        "start": 20,
        "end": 26,
        "arguments": [
          {
            "type": "Literal",
            "start": 23,
            "end": 24,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 20,
          "end": 22,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 53,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 53,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 40,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 41,
          "end": 48,
          "argument": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 91,
      "end": 128,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 111,
        "decorators": [],
        "name": "f25",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 112,
          "end": 119,
          "argument": {
            "type": "Identifier",
            "start": 115,
            "end": 119,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 121,
        "end": 127,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 123,
          "end": 127
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 140,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 133,
            "end": 138,
            "argument": {
              "type": "ArrayExpression",
              "start": 136,
              "end": 138,
              "elements": []
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 132,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 172,
      "end": 205,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 191,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 196,
        "end": 204,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 198,
          "end": 204
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 206,
      "end": 241,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 225,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 227,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 232,
        "end": 240,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 234,
          "end": 240
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 258,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 243,
        "end": 257,
        "expression": {
          "type": "CallExpression",
          "start": 251,
          "end": 257,
          "arguments": [
            {
              "type": "Literal",
              "start": 254,
              "end": 255,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 244,
          "end": 250
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 277,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 259,
        "end": 276,
        "expression": {
          "type": "CallExpression",
          "start": 267,
          "end": 276,
          "arguments": [
            {
              "type": "Literal",
              "start": 270,
              "end": 271,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 273,
              "end": 274,
              "raw": "2",
              "value": 2
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 260,
          "end": 266
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 309,
      "end": 403,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 317,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 323,
            "end": 342,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 334,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 334,
              "end": 342,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 339,
                "end": 342,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 384,
            "end": 401,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 389,
              "end": 401,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 398,
                "end": 401,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 390,
                  "end": 395,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 316,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 404,
      "end": 442,
      "body": {
        "type": "TSInterfaceBody",
        "start": 416,
        "end": 442,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 422,
            "end": 430,
            "params": [
              {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 435,
            "end": 440,
            "params": [
              {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 415,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 454,
      "expression": {
        "type": "NewExpression",
        "start": 444,
        "end": 453,
        "arguments": [
          {
            "type": "Literal",
            "start": 450,
            "end": 451,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 448,
          "end": 449,
          "decorators": [],
          "name": "X",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
