__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cache",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 60
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 70
            },
            "typeArguments": null,
            "arguments": [],
            "start": 63,
            "end": 72
          },
          "definite": false,
          "start": 55,
          "end": 72
        }
      ],
      "declare": false,
      "start": 49,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getStringGetter",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 153
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 160
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cache",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 218,
                                "end": 223
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 224,
                                "end": 227
                              },
                              "optional": false,
                              "computed": false,
                              "start": 218,
                              "end": 227
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 228,
                                "end": 231
                              }
                            ],
                            "optional": false,
                            "start": 218,
                            "end": 232
                          },
                          "start": 188,
                          "end": 233
                        }
                      ],
                      "start": 182,
                      "end": 237
                    },
                    "id": null,
                    "generator": false,
                    "start": 176,
                    "end": 237
                  },
                  "start": 169,
                  "end": 237
                }
              ],
              "start": 165,
              "end": 239
            },
            "id": null,
            "generator": false,
            "start": 156,
            "end": 239
          },
          "definite": false,
          "start": 138,
          "end": 239
        }
      ],
      "declare": false,
      "start": 132,
      "end": 239
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 49,
  "end": 239
}
```
