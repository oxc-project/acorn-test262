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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 38,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 67,
            "end": 83,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 71,
                "end": 82,
                "id": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 75,
                  "end": 82,
                  "object": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
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
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 140,
                          "end": 149,
                          "id": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 145,
                            "decorators": [],
                            "name": "hello",
                            "optional": false,
                            "typeAnnotation": null
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
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 181,
            "end": 197,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 185,
                "end": 196,
                "id": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 189,
                  "end": 196,
                  "object": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 196,
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
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
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 213,
          "end": 218,
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
