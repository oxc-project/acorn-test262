__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 121,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 121,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 72,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 72,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 72,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 53,
                    "end": 65,
                    "argument": {
                      "type": "Literal",
                      "start": 60,
                      "end": 64,
                      "raw": "null",
                      "value": null
                    }
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 65,
                    "end": 66
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 30,
                  "end": 42,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 36,
                      "end": 42
                    }
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 119,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 119,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 119,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 110,
                  "decorators": [],
                  "name": "aValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 98,
                      "end": 110,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 101,
                        "end": 110,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 104,
                          "end": 110
                        }
                      }
                    }
                  }
                }
              ]
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
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 170,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 169,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 157,
                "end": 169,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 169,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 163,
                    "end": 169
                  }
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 140,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
