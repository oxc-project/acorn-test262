__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 26,
            "end": 134,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 32,
                "end": 38,
                "argument": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 38,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 44,
                "end": 132,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 48,
                  "end": 132,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 51,
                    "end": 132,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 61,
                        "end": 126,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 68,
                          "end": 125,
                          "properties": [
                            {
                              "type": "SpreadElement",
                              "start": 82,
                              "end": 88,
                              "argument": {
                                "type": "Identifier",
                                "start": 85,
                                "end": 88,
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 102,
                              "end": 115,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 110,
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 112,
                                "end": 115,
                                "raw": "213",
                                "value": 213
                              }
                            }
                          ]
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
              }
            ]
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
