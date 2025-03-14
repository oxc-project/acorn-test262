__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 242,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 242,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 240,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 240,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 240,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 201,
                    "end": 234,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 208,
                      "end": 233,
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "start": 214,
                        "end": 233,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 221,
                          "decorators": [],
                          "name": "message",
                          "optional": false
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 224,
                          "end": 233,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 224,
                            "end": 228
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 233,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
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
                  }
                }
              }
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
