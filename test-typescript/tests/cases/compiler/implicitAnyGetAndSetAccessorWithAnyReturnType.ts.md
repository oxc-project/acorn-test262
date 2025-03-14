implicitAnyGetAndSetAccessorWithAnyReturnType.ts
```json
{
  "type": "Program",
  "start": 26,
  "end": 554,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 341,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 341,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 65,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "decorators": [],
              "name": "getAndSet",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 60,
              "end": 64,
              "raw": "null",
              "value": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 203,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 130,
              "decorators": [],
              "name": "haveGetAndSet",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 203,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 175,
                    "end": 197,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 182,
                      "end": 196,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 182,
                        "end": 186
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 196,
                        "decorators": [],
                        "name": "getAndSet",
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
            "type": "MethodDefinition",
            "start": 247,
            "end": 339,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 271,
              "decorators": [],
              "name": "haveGetAndSet",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 271,
              "end": 339,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 279,
                "end": 339,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 310,
                    "end": 333,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 310,
                      "end": 332,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 310,
                        "end": 324,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 310,
                          "end": 314
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 324,
                          "decorators": [],
                          "name": "getAndSet",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 332,
                        "decorators": [],
                        "name": "value",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 277,
                  "decorators": [],
                  "name": "value",
                  "optional": false
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
        "start": 32,
        "end": 41,
        "decorators": [],
        "name": "GetAndSet",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 343,
      "end": 447,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 360,
        "end": 447,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 445,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 388,
              "decorators": [],
              "name": "haveOnlySet",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 445,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 445,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 389,
                  "end": 398,
                  "decorators": [],
                  "name": "newXValue",
                  "optional": false
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
        "start": 349,
        "end": 359,
        "decorators": [],
        "name": "SetterOnly",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 449,
      "end": 554,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 466,
        "end": 554,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 472,
            "end": 552,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 494,
              "decorators": [],
              "name": "haveOnlyGet",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 494,
              "end": 552,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 497,
                "end": 552,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 534,
                    "end": 546,
                    "argument": {
                      "type": "Literal",
                      "start": 541,
                      "end": 545,
                      "raw": "null",
                      "value": null
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 465,
        "decorators": [],
        "name": "GetterOnly",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
