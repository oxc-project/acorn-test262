__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 172,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 172,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 25,
          "end": 172,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 29,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 35,
                  "end": 68,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 43,
                    "decorators": [],
                    "name": "composed",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 46,
                    "end": 68,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 65,
                      "end": 68,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 56,
                        "end": 63,
                        "argument": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 63,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 72,
              "end": 151,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 72,
                "end": 151,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 94,
                    "end": 102,
                    "decorators": [],
                    "name": "composed",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 104,
                    "end": 110,
                    "raw": "'name'",
                    "value": "name",
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 112,
                    "end": 150,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 118,
                        "end": 146,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 123,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "BinaryExpression",
                          "start": 125,
                          "end": 146,
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "start": 125,
                            "end": 136,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 125,
                              "end": 133,
                              "decorators": [],
                              "name": "composed",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 136,
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 139,
                            "end": 146,
                            "raw": "'_test'",
                            "value": "_test",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 72,
                  "end": 93,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 78,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 93,
                    "decorators": [],
                    "name": "defineProperty",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            },
            {
              "type": "ReturnStatement",
              "start": 155,
              "end": 170,
              "argument": {
                "type": "Identifier",
                "start": 162,
                "end": 170,
                "decorators": [],
                "name": "composed",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 21,
            "end": 23,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
