__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 123,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 123,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 123,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 30,
                    "end": 49,
                    "id": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 44,
                      "name": "other",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 47,
                      "end": 49,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 56,
                    "end": 112,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 60,
                        "end": 111,
                        "id": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 62,
                          "name": "fn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 65,
                          "end": 111,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": true,
                          "params": [],
                          "body": {
                            "type": "AwaitExpression",
                            "start": 77,
                            "end": 111,
                            "argument": {
                              "type": "CallExpression",
                              "start": 83,
                              "end": 111,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 83,
                                "end": 94,
                                "object": {
                                  "type": "Identifier",
                                  "start": 83,
                                  "end": 88,
                                  "name": "other",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 89,
                                  "end": 94,
                                  "name": "apply",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 95,
                                  "end": 99
                                },
                                {
                                  "type": "Identifier",
                                  "start": 101,
                                  "end": 110,
                                  "name": "arguments",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
