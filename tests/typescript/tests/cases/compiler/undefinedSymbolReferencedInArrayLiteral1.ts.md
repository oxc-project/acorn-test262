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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 42,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 16,
                      "end": 26,
                      "decorators": [],
                      "name": "startIndex",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 39,
                      "decorators": [],
                      "name": "deltaOffset",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 145,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 144,
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
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 73,
                  "end": 143,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 79,
                      "end": 109,
                      "expression": {
                        "type": "CallExpression",
                        "start": 79,
                        "end": 108,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 106,
                          "object": {
                            "type": "ArrayExpression",
                            "start": 79,
                            "end": 88,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 80,
                                "end": 81,
                                "value": 1,
                                "raw": "1"
                              },
                              {
                                "type": "Literal",
                                "start": 83,
                                "end": 84,
                                "value": 2,
                                "raw": "2"
                              },
                              {
                                "type": "Literal",
                                "start": 86,
                                "end": 87,
                                "value": 3,
                                "raw": "3"
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 89,
                            "end": 106,
                            "decorators": [],
                            "name": "NonexistantMethod",
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
                      "start": 114,
                      "end": 141,
                      "expression": {
                        "type": "CallExpression",
                        "start": 114,
                        "end": 140,
                        "callee": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 138,
                          "decorators": [],
                          "name": "anotherNonExistingMethod",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
