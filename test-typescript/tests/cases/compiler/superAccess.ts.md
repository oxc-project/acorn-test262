__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 561,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "MyBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 41,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 28,
              "name": "S1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "value": 5,
              "raw": "5"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 74,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 56,
              "name": "S2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 67,
              "end": 73,
              "value": "test",
              "raw": "\"test\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 91,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 83,
              "end": 90,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "value": 5,
                "raw": "5"
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 110,
        "name": "MyDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 125,
        "name": "MyBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 126,
        "end": 561,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 559,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 559,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 559,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 148,
                    "end": 166,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 152,
                        "end": 165,
                        "id": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 154,
                          "name": "l3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 157,
                          "end": 165,
                          "object": {
                            "type": "Super",
                            "start": 157,
                            "end": 162
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 165,
                            "name": "S1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 286,
                    "end": 304,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 290,
                        "end": 303,
                        "id": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 292,
                          "name": "l4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 295,
                          "end": 303,
                          "object": {
                            "type": "Super",
                            "start": 295,
                            "end": 300
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 303,
                            "name": "S2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 424,
                    "end": 443,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 428,
                        "end": 442,
                        "id": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 430,
                          "name": "l5",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 433,
                          "end": 442,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 433,
                            "end": 440,
                            "object": {
                              "type": "Super",
                              "start": 433,
                              "end": 438
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 439,
                              "end": 440,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
