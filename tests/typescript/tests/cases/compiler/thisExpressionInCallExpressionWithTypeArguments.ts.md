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
        "end": 77,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 75,
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
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 75,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 75,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 29,
                    "end": 74,
                    "expression": {
                      "type": "CallExpression",
                      "start": 29,
                      "end": 74,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 29,
                        "end": 40,
                        "object": {
                          "type": "ArrayExpression",
                          "start": 29,
                          "end": 36,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 30,
                              "end": 31,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 32,
                              "end": 33,
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "start": 34,
                              "end": 35,
                              "value": 3,
                              "raw": "3"
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 40,
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
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
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 50,
                          "end": 73,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
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
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
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
            "accessibility": "public"
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
