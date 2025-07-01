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
        "name": "makeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 30
                },
                "typeArguments": null,
                "start": 29,
                "end": 30
              },
              "start": 29,
              "end": 32
            },
            "start": 27,
            "end": 32
          },
          "start": 22,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeArguments": null,
            "start": 35,
            "end": 36
          },
          "start": 35,
          "end": 38
        },
        "start": 33,
        "end": 38
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 53
            },
            "start": 41,
            "end": 54
          }
        ],
        "start": 39,
        "end": 56
      },
      "expression": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 66,
                "end": 67
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 69,
                "end": 71
              }
            ],
            "start": 65,
            "end": 72
          },
          "definite": false,
          "start": 61,
          "end": 72
        }
      ],
      "declare": false,
      "start": 57,
      "end": 73
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1G",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 81
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 93
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 94,
                "end": 95
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 97,
                "end": 99
              }
            ],
            "optional": false,
            "start": 84,
            "end": 100
          },
          "definite": false,
          "start": 78,
          "end": 100
        }
      ],
      "declare": false,
      "start": 74,
      "end": 101
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2G",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 126
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 138
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              }
            ],
            "optional": false,
            "start": 129,
            "end": 141
          },
          "definite": false,
          "start": 123,
          "end": 141
        }
      ],
      "declare": false,
      "start": 119,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeArray2",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 172
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 180,
                "end": 183
              },
              "start": 180,
              "end": 185
            },
            "start": 178,
            "end": 185
          },
          "start": 173,
          "end": 185
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "start": 188,
            "end": 191
          },
          "start": 188,
          "end": 193
        },
        "start": 186,
        "end": 193
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 208
            },
            "start": 196,
            "end": 209
          }
        ],
        "start": 194,
        "end": 211
      },
      "expression": false,
      "start": 153,
      "end": 211
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3G",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 219
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArray2",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 232
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 233,
                "end": 234
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 236,
                "end": 238
              }
            ],
            "optional": false,
            "start": 222,
            "end": 239
          },
          "definite": false,
          "start": 216,
          "end": 239
        }
      ],
      "declare": false,
      "start": 212,
      "end": 240
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 249
}
```
