__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 67,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 67,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 36,
                    "end": 61,
                    "directive": null,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 36,
                      "end": 60,
                      "argument": {
                        "type": "CallExpression",
                        "start": 42,
                        "end": 60,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 58,
                            "end": 59,
                            "raw": "1",
                            "value": 1
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 42,
                          "end": 57,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 49,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 50,
                            "end": 57,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
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
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 130,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 77,
              "end": 130,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 130,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 99,
                    "end": 124,
                    "directive": null,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 99,
                      "end": 123,
                      "argument": {
                        "type": "CallExpression",
                        "start": 105,
                        "end": 123,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 121,
                            "end": 122,
                            "raw": "1",
                            "value": 1
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 105,
                          "end": 120,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 112,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 120,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
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
