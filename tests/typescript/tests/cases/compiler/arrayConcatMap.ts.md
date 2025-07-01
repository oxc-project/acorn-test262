__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 8,
                    "end": 10
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "concat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11,
                    "end": 17
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8,
                  "end": 17
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 21,
                              "end": 22
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 24,
                              "end": 25
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 21,
                            "end": 25
                          }
                        ],
                        "start": 19,
                        "end": 27
                      }
                    ],
                    "start": 18,
                    "end": 28
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 33,
                              "end": 34
                            },
                            "value": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 36,
                              "end": 37
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 33,
                            "end": 37
                          }
                        ],
                        "start": 31,
                        "end": 39
                      }
                    ],
                    "start": 30,
                    "end": 40
                  }
                ],
                "optional": false,
                "start": 8,
                "end": 41
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 56
              },
              "optional": false,
              "computed": false,
              "start": 8,
              "end": 56
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 58
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "optional": false,
                  "computed": false,
                  "start": 62,
                  "end": 65
                },
                "id": null,
                "generator": false,
                "start": 57,
                "end": 65
              }
            ],
            "optional": false,
            "start": 8,
            "end": 66
          },
          "definite": false,
          "start": 4,
          "end": 66
        }
      ],
      "declare": false,
      "start": 0,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 67
}
```
