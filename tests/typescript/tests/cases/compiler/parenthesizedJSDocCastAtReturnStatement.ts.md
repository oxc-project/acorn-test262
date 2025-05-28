__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 49,
  "end": 239,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 72,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "decorators": [],
            "name": "cache",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 63,
            "end": 72,
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 239,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 153,
            "decorators": [],
            "name": "getStringGetter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 156,
            "end": 239,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 157,
                "end": 160,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 239,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 169,
                  "end": 237,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 176,
                    "end": 237,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 182,
                      "end": 237,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 188,
                          "end": 233,
                          "argument": {
                            "type": "CallExpression",
                            "start": 218,
                            "end": 232,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 218,
                              "end": 227,
                              "object": {
                                "type": "Identifier",
                                "start": 218,
                                "end": 223,
                                "decorators": [],
                                "name": "cache",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 224,
                                "end": 227,
                                "decorators": [],
                                "name": "get",
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
                                "start": 228,
                                "end": 231,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "id": null,
            "generator": false
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
