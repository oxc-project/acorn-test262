__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 160,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 46,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 46,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 46,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 41,
                  "decorators": [],
                  "name": "store",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 35,
                      "end": 41
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 108,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
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
              "start": 62,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 101,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 82,
                      "end": 100,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 82,
                        "end": 93,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 82,
                          "end": 86
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 93,
                          "decorators": [],
                          "name": "_store",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 100,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 135,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 126,
              "decorators": [],
              "name": "_store",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Identifier",
              "start": 129,
              "end": 134,
              "decorators": [],
              "name": "store",
              "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 162,
      "end": 243,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 173,
        "end": 243,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 213,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 190,
              "decorators": [],
              "name": "Foo2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 213,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 202,
                    "end": 211,
                    "argument": {
                      "type": "Literal",
                      "start": 209,
                      "end": 210,
                      "raw": "0",
                      "value": 0
                    }
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
                "start": 192,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 193,
                  "end": 199
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
        "start": 168,
        "end": 172,
        "decorators": [],
        "name": "Foo2",
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
