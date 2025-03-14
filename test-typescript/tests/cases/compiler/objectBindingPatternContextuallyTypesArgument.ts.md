__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 32,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "id",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 27,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 27,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 26,
              "end": 27,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 31,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 30,
          "end": 31,
          "typeName": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 97,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 39,
            "end": 70,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 41,
                "end": 68,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 41,
                  "end": 68,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 45,
                    "end": 68,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 60,
                      "end": 68,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 68,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 46,
                        "end": 55,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 47,
                          "end": 55,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 49,
                            "end": 55
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          },
          "init": {
            "type": "CallExpression",
            "start": 73,
            "end": 97,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 76,
                "end": 96,
                "properties": [
                  {
                    "type": "Property",
                    "start": 78,
                    "end": 94,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 81,
                      "end": 94,
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "start": 86,
                        "end": 94,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 94,
                          "decorators": [],
                          "name": "charAt",
                          "optional": false
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
