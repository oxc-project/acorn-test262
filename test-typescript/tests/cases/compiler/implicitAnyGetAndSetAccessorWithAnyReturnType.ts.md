__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "name": "GetAndSet",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 341,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 65,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "name": "getAndSet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 60,
              "end": 64,
              "value": null,
              "raw": "null"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 130,
              "name": "haveGetAndSet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 203,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 182,
                        "end": 186
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 196,
                        "name": "getAndSet",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 339,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 271,
              "name": "haveGetAndSet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 271,
              "end": 339,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 277,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 310,
                          "end": 314
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 324,
                          "name": "getAndSet",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 332,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
    },
    {
      "type": "ClassDeclaration",
      "start": 343,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 359,
        "name": "SetterOnly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 360,
        "end": 447,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 445,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 388,
              "name": "haveOnlySet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 445,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 389,
                  "end": 398,
                  "name": "newXValue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 445,
                "body": []
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
    },
    {
      "type": "ClassDeclaration",
      "start": 449,
      "end": 554,
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 465,
        "name": "GetterOnly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 466,
        "end": 554,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 472,
            "end": 552,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 494,
              "name": "haveOnlyGet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 494,
              "end": 552,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
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
