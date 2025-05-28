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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 172,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        "body": {
          "type": "BlockStatement",
          "start": 25,
          "end": 172,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 29,
              "end": 68,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 35,
                  "end": 68,
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
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 56,
                        "end": 63,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 63,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 65,
                      "end": 68,
                      "body": []
                    },
                    "expression": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 72,
              "end": 151,
              "expression": {
                "type": "CallExpression",
                "start": 72,
                "end": 151,
                "callee": {
                  "type": "MemberExpression",
                  "start": 72,
                  "end": 93,
                  "object": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 78,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 93,
                    "decorators": [],
                    "name": "defineProperty",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
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
                    "value": "name",
                    "raw": "'name'"
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 123,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "BinaryExpression",
                          "start": 125,
                          "end": 146,
                          "left": {
                            "type": "MemberExpression",
                            "start": 125,
                            "end": 136,
                            "object": {
                              "type": "Identifier",
                              "start": 125,
                              "end": 133,
                              "decorators": [],
                              "name": "composed",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 136,
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 139,
                            "end": 146,
                            "value": "_test",
                            "raw": "'_test'"
                          }
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false
              },
              "directive": null
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
