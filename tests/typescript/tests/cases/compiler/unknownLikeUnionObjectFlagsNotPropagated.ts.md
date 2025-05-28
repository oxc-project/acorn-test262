__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 314,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 57,
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 60,
        "end": 81,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 60,
            "end": 62,
            "members": []
          },
          {
            "type": "TSNullKeyword",
            "start": 65,
            "end": 69
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 72,
            "end": 81
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 121,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 103,
            "decorators": [],
            "name": "myVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 103,
                  "decorators": [],
                  "name": "MyType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 106,
            "end": 120,
            "expression": {
              "type": "Literal",
              "start": 106,
              "end": 110,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 114,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 114,
                "end": 120,
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 145,
      "expression": {
        "type": "ChainExpression",
        "start": 123,
        "end": 144,
        "expression": {
          "type": "MemberExpression",
          "start": 123,
          "end": 144,
          "object": {
            "type": "Identifier",
            "start": 123,
            "end": 128,
            "decorators": [],
            "name": "myVar",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 144,
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": true,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 152,
      "expression": {
        "type": "Identifier",
        "start": 146,
        "end": 151,
        "decorators": [],
        "name": "myVar",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 154,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 185,
        "decorators": [],
        "name": "myUnusedFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 314,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 194,
            "end": 245,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 200,
                "end": 244,
                "id": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 206,
                  "decorators": [],
                  "name": "fetch1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 209,
                  "end": 244,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 209,
                    "end": 224,
                    "object": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 216,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 224,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "start": 225,
                      "end": 243,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 226,
                          "end": 233,
                          "value": "hello",
                          "raw": "'hello'"
                        },
                        {
                          "type": "Literal",
                          "start": 235,
                          "end": 242,
                          "value": "world",
                          "raw": "'world'"
                        }
                      ]
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 250,
            "end": 294,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 256,
                "end": 293,
                "id": {
                  "type": "ArrayPattern",
                  "start": 256,
                  "end": 263,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 257,
                      "end": 262,
                      "decorators": [],
                      "name": "data1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 266,
                  "end": 293,
                  "argument": {
                    "type": "CallExpression",
                    "start": 272,
                    "end": 293,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 272,
                      "end": 283,
                      "object": {
                        "type": "Identifier",
                        "start": 272,
                        "end": 279,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 280,
                        "end": 283,
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "start": 284,
                        "end": 292,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 285,
                            "end": 291,
                            "decorators": [],
                            "name": "fetch1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
                    ],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 299,
            "end": 312,
            "expression": {
              "type": "MemberExpression",
              "start": 299,
              "end": 311,
              "object": {
                "type": "Identifier",
                "start": 299,
                "end": 304,
                "decorators": [],
                "name": "data1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 305,
                "end": 311,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
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
