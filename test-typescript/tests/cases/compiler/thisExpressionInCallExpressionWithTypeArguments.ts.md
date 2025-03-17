__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 77,
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
        "end": 77,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 75,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 75,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "map",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 50,
                          "end": 73,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 51,
                              "end": 52,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
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
                    },
                    "directive": null
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
            "accessibility": "public"
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
