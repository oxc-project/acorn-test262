__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "name": "makeArray",
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
          "start": 22,
          "end": 32,
          "name": "items",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 32,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 29,
              "end": 32,
              "elementType": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 56,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 41,
            "end": 54,
            "argument": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "name": "items",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
        "start": 33,
        "end": 38,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 35,
          "end": 38,
          "elementType": {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 65,
            "end": 72,
            "elements": [
              {
                "type": "Literal",
                "start": 66,
                "end": 67,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 69,
                "end": 71,
                "value": "",
                "raw": "\"\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 81,
            "name": "b1G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 84,
            "end": 100,
            "callee": {
              "type": "Identifier",
              "start": 84,
              "end": 93,
              "name": "makeArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 94,
                "end": 95,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 97,
                "end": 99,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 126,
            "name": "b2G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 129,
            "end": 141,
            "callee": {
              "type": "Identifier",
              "start": 129,
              "end": 138,
              "name": "makeArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 172,
        "name": "makeArray2",
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
          "start": 173,
          "end": 185,
          "name": "items",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 185,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 180,
              "end": 185,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 180,
                "end": 183
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 211,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 196,
            "end": 209,
            "argument": {
              "type": "Identifier",
              "start": 203,
              "end": 208,
              "name": "items",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 186,
        "end": 193,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 188,
          "end": 193,
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 188,
            "end": 191
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 219,
            "name": "b3G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 222,
            "end": 239,
            "callee": {
              "type": "Identifier",
              "start": 222,
              "end": 232,
              "name": "makeArray2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 233,
                "end": 234,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 236,
                "end": 238,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
