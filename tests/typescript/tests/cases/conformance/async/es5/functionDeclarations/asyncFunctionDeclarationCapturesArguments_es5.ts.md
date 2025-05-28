__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 138,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 138,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 30,
                    "end": 49,
                    "id": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 44,
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 47,
                      "end": 49,
                      "body": []
                    },
                    "expression": false
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 56,
                    "end": 133,
                    "id": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 73,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 77,
                      "end": 133,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 90,
                          "end": 125,
                          "expression": {
                            "type": "AwaitExpression",
                            "start": 90,
                            "end": 124,
                            "argument": {
                              "type": "CallExpression",
                              "start": 96,
                              "end": 124,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 96,
                                "end": 107,
                                "object": {
                                  "type": "Identifier",
                                  "start": 96,
                                  "end": 101,
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 102,
                                  "end": 107,
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 108,
                                  "end": 112
                                },
                                {
                                  "type": "Identifier",
                                  "start": 114,
                                  "end": 123,
                                  "decorators": [],
                                  "name": "arguments",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
