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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 67,
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
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 67,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 67,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 36,
                    "end": 61,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 36,
                      "end": 60,
                      "argument": {
                        "type": "CallExpression",
                        "start": 42,
                        "end": 60,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 42,
                          "end": 57,
                          "object": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 49,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 50,
                            "end": 57,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 58,
                            "end": 59,
                            "value": 1,
                            "raw": "1"
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
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 130,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 77,
              "end": 130,
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 130,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 99,
                    "end": 124,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 99,
                      "end": 123,
                      "argument": {
                        "type": "CallExpression",
                        "start": 105,
                        "end": 123,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 105,
                          "end": 120,
                          "object": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 112,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 120,
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 121,
                            "end": 122,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
