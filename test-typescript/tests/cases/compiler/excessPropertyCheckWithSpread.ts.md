__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 39,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 19,
          "end": 32,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 21,
              "end": 30,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 24,
                "end": 30,
                "decorators": [],
                "name": "number",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 39,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 35,
          "end": 39
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 79,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 96,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 96,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 115,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 100,
            "end": 114,
            "properties": [
              {
                "type": "Property",
                "start": 102,
                "end": 106,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 108,
                "end": 112,
                "argument": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 118,
      "end": 150,
      "body": {
        "type": "TSInterfaceBody",
        "start": 130,
        "end": 150,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 136,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 151,
      "end": 182,
      "body": {
        "type": "TSInterfaceBody",
        "start": 163,
        "end": 182,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 180,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "decorators": [],
              "name": "opt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 174,
                "end": 180
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 162,
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 199,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 199,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 217,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 216,
                "end": 217,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 243,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 219,
        "end": 242,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 221,
            "end": 241,
            "properties": [
              {
                "type": "Property",
                "start": 223,
                "end": 227,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 226,
                  "end": 227,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 229,
                "end": 233,
                "argument": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 233,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 235,
                "end": 239,
                "argument": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
