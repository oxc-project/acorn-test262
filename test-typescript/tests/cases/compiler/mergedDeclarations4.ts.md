__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 85,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 38,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 38,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 38,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExpressionStatement",
            "start": 43,
            "end": 47,
            "expression": {
              "type": "CallExpression",
              "start": 43,
              "end": 46,
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 52,
            "end": 58,
            "expression": {
              "type": "CallExpression",
              "start": 52,
              "end": 57,
              "callee": {
                "type": "MemberExpression",
                "start": 52,
                "end": 55,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 67,
            "end": 83,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 71,
                "end": 82,
                "id": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 75,
                  "end": 82,
                  "object": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "name": "hello",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 88,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 97,
        "end": 199,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 103,
            "end": 156,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 110,
              "end": 156,
              "id": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 119,
                "end": 156,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 129,
                    "end": 150,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 136,
                      "end": 150,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 140,
                          "end": 149,
                          "id": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 145,
                            "name": "hello",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 148,
                            "end": 149,
                            "value": 1,
                            "raw": "1"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExpressionStatement",
            "start": 161,
            "end": 165,
            "expression": {
              "type": "CallExpression",
              "start": 161,
              "end": 164,
              "callee": {
                "type": "Identifier",
                "start": 161,
                "end": 162,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 170,
            "end": 176,
            "expression": {
              "type": "CallExpression",
              "start": 170,
              "end": 175,
              "callee": {
                "type": "MemberExpression",
                "start": 170,
                "end": 173,
                "object": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 181,
            "end": 197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 185,
                "end": 196,
                "id": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 189,
                  "end": 196,
                  "object": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 196,
                    "name": "hello",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 208,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 207,
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 205,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 209,
      "end": 219,
      "expression": {
        "type": "MemberExpression",
        "start": 209,
        "end": 218,
        "object": {
          "type": "MemberExpression",
          "start": 209,
          "end": 212,
          "object": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 213,
          "end": 218,
          "name": "hello",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
