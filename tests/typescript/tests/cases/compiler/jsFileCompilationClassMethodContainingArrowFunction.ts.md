__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 20
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 22
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 38,
                          "end": 39
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 42,
                              "end": 43
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 47,
                                "end": 51
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 52,
                                "end": 58
                              },
                              "optional": false,
                              "computed": false,
                              "start": 47,
                              "end": 58
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 59,
                                "end": 60
                              }
                            ],
                            "optional": false,
                            "start": 47,
                            "end": 61
                          },
                          "id": null,
                          "generator": false,
                          "start": 42,
                          "end": 61
                        },
                        "definite": false,
                        "start": 38,
                        "end": 61
                      }
                    ],
                    "declare": false,
                    "start": 34,
                    "end": 62
                  }
                ],
                "start": 24,
                "end": 68
              },
              "expression": false,
              "start": 20,
              "end": 68
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 68
          }
        ],
        "start": 8,
        "end": 70
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 70
}
```
