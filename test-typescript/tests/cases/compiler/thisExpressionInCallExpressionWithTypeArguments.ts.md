__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 77,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 77,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 75,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 75,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 75,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 29,
                    "end": 74,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 29,
                      "end": 74,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 50,
                          "end": 73,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 57,
                            "end": 73,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 59,
                                "end": 71,
                                "argument": {
                                  "type": "ThisExpression",
                                  "start": 66,
                                  "end": 70
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 51,
                              "end": 52,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 29,
                        "end": 40,
                        "computed": false,
                        "object": {
                          "type": "ArrayExpression",
                          "start": 29,
                          "end": 36,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 30,
                              "end": 31,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 32,
                              "end": 33,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 34,
                              "end": 35,
                              "raw": "3",
                              "value": 3,
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 40,
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 40,
                        "end": 49,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 41,
                            "end": 44
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 45,
                            "end": 48
                          }
                        ]
                      }
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
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
