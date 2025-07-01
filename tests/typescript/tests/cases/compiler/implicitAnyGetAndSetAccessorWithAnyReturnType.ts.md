__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetAndSet",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getAndSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 57
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 60,
              "end": 64
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 48,
            "end": 65
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "haveGetAndSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 130
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 182,
                        "end": 186
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getAndSet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 196
                      },
                      "optional": false,
                      "computed": false,
                      "start": 182,
                      "end": 196
                    },
                    "start": 175,
                    "end": 197
                  }
                ],
                "start": 133,
                "end": 203
              },
              "expression": false,
              "start": 130,
              "end": 203
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 106,
            "end": 203
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "haveGetAndSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 271
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 277
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 310,
                          "end": 314
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getAndSet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 315,
                          "end": 324
                        },
                        "optional": false,
                        "computed": false,
                        "start": 310,
                        "end": 324
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 332
                      },
                      "start": 310,
                      "end": 332
                    },
                    "directive": null,
                    "start": 310,
                    "end": 333
                  }
                ],
                "start": 279,
                "end": 339
              },
              "expression": false,
              "start": 271,
              "end": 339
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 247,
            "end": 339
          }
        ],
        "start": 42,
        "end": 341
      },
      "abstract": false,
      "declare": false,
      "start": 26,
      "end": 341
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetterOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 359
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "haveOnlySet",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 388
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newXValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 398
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 400,
                "end": 445
              },
              "expression": false,
              "start": 388,
              "end": 445
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 366,
            "end": 445
          }
        ],
        "start": 360,
        "end": 447
      },
      "abstract": false,
      "declare": false,
      "start": 343,
      "end": 447
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetterOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 465
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "haveOnlyGet",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 494
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 541,
                      "end": 545
                    },
                    "start": 534,
                    "end": 546
                  }
                ],
                "start": 497,
                "end": 552
              },
              "expression": false,
              "start": 494,
              "end": 552
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 472,
            "end": 552
          }
        ],
        "start": 466,
        "end": 554
      },
      "abstract": false,
      "declare": false,
      "start": 449,
      "end": 554
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 554
}
```
