__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 67,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 66,
            "callee": {
              "type": "MemberExpression",
              "start": 8,
              "end": 56,
              "object": {
                "type": "CallExpression",
                "start": 8,
                "end": 41,
                "callee": {
                  "type": "MemberExpression",
                  "start": 8,
                  "end": 17,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 8,
                    "end": 10,
                    "elements": []
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 11,
                    "end": 17,
                    "decorators": [],
                    "name": "concat",
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
                    "start": 18,
                    "end": 28,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 19,
                        "end": 27,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 21,
                            "end": 25,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 21,
                              "end": 22,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 24,
                              "end": 25,
                              "value": 1,
                              "raw": "1"
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
                  {
                    "type": "ArrayExpression",
                    "start": 30,
                    "end": 40,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 31,
                        "end": 39,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 33,
                            "end": 37,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 33,
                              "end": 34,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 36,
                              "end": 37,
                              "value": 2,
                              "raw": "2"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 56,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 57,
                "end": 65,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 62,
                  "end": 65,
                  "object": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
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
