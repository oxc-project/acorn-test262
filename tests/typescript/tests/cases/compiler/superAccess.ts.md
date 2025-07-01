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
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "S1",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 39,
              "end": 40
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 19,
            "end": 41
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "value": {
              "type": "Literal",
              "value": "test",
              "raw": "\"test\"",
              "start": 67,
              "end": 73
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 46,
            "end": 74
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 89,
                "end": 90
              },
              "id": null,
              "generator": false,
              "start": 83,
              "end": 90
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 79,
            "end": 91
          }
        ],
        "start": 13,
        "end": 93
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 110
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 125
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 135
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 154
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 157,
                            "end": 162
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 165
                          },
                          "optional": false,
                          "computed": false,
                          "start": 157,
                          "end": 165
                        },
                        "definite": false,
                        "start": 152,
                        "end": 165
                      }
                    ],
                    "declare": false,
                    "start": 148,
                    "end": 166
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 292
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 295,
                            "end": 300
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 301,
                            "end": 303
                          },
                          "optional": false,
                          "computed": false,
                          "start": 295,
                          "end": 303
                        },
                        "definite": false,
                        "start": 290,
                        "end": 303
                      }
                    ],
                    "declare": false,
                    "start": 286,
                    "end": 304
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 428,
                          "end": 430
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 433,
                              "end": 438
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 439,
                              "end": 440
                            },
                            "optional": false,
                            "computed": false,
                            "start": 433,
                            "end": 440
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 433,
                          "end": 442
                        },
                        "definite": false,
                        "start": 428,
                        "end": 442
                      }
                    ],
                    "declare": false,
                    "start": 424,
                    "end": 443
                  }
                ],
                "start": 138,
                "end": 559
              },
              "expression": false,
              "start": 135,
              "end": 559
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 132,
            "end": 559
          }
        ],
        "start": 126,
        "end": 561
      },
      "abstract": false,
      "declare": false,
      "start": 95,
      "end": 561
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 561
}
```
