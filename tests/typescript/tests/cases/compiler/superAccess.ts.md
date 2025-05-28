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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 41,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 28,
              "decorators": [],
              "name": "S1",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "value": 5,
              "raw": "5"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 74,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 56,
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 67,
              "end": 73,
              "value": "test",
              "raw": "\"test\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 91,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 83,
              "end": 90,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "value": 5,
                "raw": "5"
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 561,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 110,
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 125,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 126,
        "end": 561,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 559,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 559,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 559,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 148,
                    "end": 166,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 152,
                        "end": 165,
                        "id": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 154,
                          "decorators": [],
                          "name": "l3",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "S1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 286,
                    "end": 304,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 290,
                        "end": 303,
                        "id": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 292,
                          "decorators": [],
                          "name": "l4",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "S2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 424,
                    "end": 443,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 428,
                        "end": 442,
                        "id": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 430,
                          "decorators": [],
                          "name": "l5",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
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
