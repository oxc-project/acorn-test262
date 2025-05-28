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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "decorators": [],
        "name": "GetAndSet",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 341,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "decorators": [],
              "name": "getAndSet",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 60,
              "end": 64,
              "value": null,
              "raw": "null"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 203,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 130,
              "decorators": [],
              "name": "haveGetAndSet",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 203,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "getAndSet",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 339,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 271,
              "decorators": [],
              "name": "haveGetAndSet",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 271,
              "end": 339,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 277,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "getAndSet",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 332,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 343,
      "end": 447,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 359,
        "decorators": [],
        "name": "SetterOnly",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 360,
        "end": 447,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 445,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 388,
              "decorators": [],
              "name": "haveOnlySet",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 445,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 389,
                  "end": 398,
                  "decorators": [],
                  "name": "newXValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 445,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 449,
      "end": 554,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 465,
        "decorators": [],
        "name": "GetterOnly",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 466,
        "end": 554,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 472,
            "end": 552,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 494,
              "decorators": [],
              "name": "haveOnlyGet",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 494,
              "end": 552,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
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
