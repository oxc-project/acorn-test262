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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "TestFile",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 242,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 240,
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
              "end": 240,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 40,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BinaryExpression",
                        "start": 214,
                        "end": 233,
                        "left": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 221,
                          "name": "message",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "start": 224,
                          "end": 233,
                          "object": {
                            "type": "ThisExpression",
                            "start": 224,
                            "end": 228
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 233,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 55,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 43,
                  "end": 55,
                  "typeParameters": null,
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
