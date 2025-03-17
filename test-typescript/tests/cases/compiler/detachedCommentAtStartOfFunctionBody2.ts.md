__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 243,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 243,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 241,
            "accessibility": null,
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
              "end": 241,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 241,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 202,
                    "end": 235,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 209,
                      "end": 234,
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 215,
                        "end": 234,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 222,
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 225,
                          "end": 234,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 225,
                            "end": 229
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 234,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "expression": true,
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 40,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 43,
                  "end": 55,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 46,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 49,
                      "end": 55
                    }
                  },
                  "typeParameters": null
                }
              },
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
        "end": 14,
        "decorators": [],
        "name": "TestFile",
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
