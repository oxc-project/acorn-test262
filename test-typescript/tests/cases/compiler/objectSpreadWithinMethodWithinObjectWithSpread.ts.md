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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 44,
                "end": 132,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 48,
                  "end": 132,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                                "name": "obj",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            {
                              "type": "Property",
                              "start": 102,
                              "end": 115,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 110,
                                "name": "metadata",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 112,
                                "end": 115,
                                "value": 213,
                                "raw": "213"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
