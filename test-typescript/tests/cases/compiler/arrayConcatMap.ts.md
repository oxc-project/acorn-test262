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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "name": "concat",
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 21,
                              "end": 22,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 24,
                              "end": 25,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 33,
                              "end": 34,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 36,
                              "end": 37,
                              "value": 2,
                              "raw": "2"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 56,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 57,
                "end": 65,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 62,
                  "end": 65,
                  "object": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
