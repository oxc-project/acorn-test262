__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "tokens",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 13,
            "end": 42,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 14,
                "end": 41,
                "properties": [
                  {
                    "type": "Property",
                    "start": 16,
                    "end": 39,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 16,
                      "end": 26,
                      "decorators": [],
                      "name": "startIndex",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 39,
                      "decorators": [],
                      "name": "deltaOffset",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 58,
            "decorators": [],
            "name": "functions",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 61,
            "end": 144,
            "elements": [
              {
                "type": "FunctionExpression",
                "start": 62,
                "end": 143,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 73,
                  "end": 143,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 79,
                      "end": 109,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 79,
                        "end": 108,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 106,
                          "computed": false,
                          "object": {
                            "type": "ArrayExpression",
                            "start": 79,
                            "end": 88,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 80,
                                "end": 81,
                                "raw": "1",
                                "value": 1,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 83,
                                "end": 84,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              },
                              {
                                "type": "Literal",
                                "start": 86,
                                "end": 87,
                                "raw": "3",
                                "value": 3,
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 106,
                            "decorators": [],
                            "name": "NonexistantMethod",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 114,
                      "end": 141,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 114,
                        "end": 140,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 138,
                          "decorators": [],
                          "name": "anotherNonExistingMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
