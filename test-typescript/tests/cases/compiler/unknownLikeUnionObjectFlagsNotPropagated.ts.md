__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 315,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 57,
        "name": "MyType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 103,
            "name": "myVar",
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
                  "name": "MyType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "name": "MyType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "myVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 144,
            "name": "toLocaleString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
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
        "name": "myVar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "myUnusedFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 314,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 194,
            "end": 245,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 200,
                "end": 244,
                "id": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 206,
                  "name": "fetch1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 224,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
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
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 250,
            "end": 294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 256,
                "end": 293,
                "id": {
                  "type": "ArrayPattern",
                  "start": 256,
                  "end": 263,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 257,
                      "end": 262,
                      "name": "data1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
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
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 280,
                        "end": 283,
                        "name": "all",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
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
                            "name": "fetch1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
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
                "name": "data1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 305,
                "end": 311,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
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
