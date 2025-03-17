__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 18,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 20,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 59,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 59,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 59,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 47,
                    "end": 57,
                    "argument": {
                      "type": "Literal",
                      "start": 54,
                      "end": 56,
                      "value": "",
                      "raw": "''"
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
            "start": 62,
            "end": 125,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 125,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 125,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 123,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 82,
                      "end": 122,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 83,
                          "end": 95,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "TSTypeAssertion",
                            "start": 86,
                            "end": 95,
                            "expression": {
                              "type": "Literal",
                              "start": 91,
                              "end": 95,
                              "value": null,
                              "raw": "null"
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 87,
                              "end": 90,
                              "typeName": {
                                "type": "Identifier",
                                "start": 87,
                                "end": 90,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 97,
                          "end": 109,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 98,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 109,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 111,
                          "end": 120,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 112,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "UnaryExpression",
                            "start": 114,
                            "end": 120,
                            "operator": "void",
                            "prefix": true,
                            "argument": {
                              "type": "Literal",
                              "start": 119,
                              "end": 120,
                              "value": 4,
                              "raw": "4"
                            }
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
            "start": 128,
            "end": 170,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 170,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 137,
                  "end": 142,
                  "left": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 141,
                    "end": 142,
                    "value": 4,
                    "raw": "4"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 144,
                  "end": 152,
                  "left": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 148,
                    "end": 152,
                    "value": null,
                    "raw": "null"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 154,
                  "end": 160,
                  "left": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 158,
                    "end": 160,
                    "value": "",
                    "raw": "''"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 170,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 164,
                    "end": 168,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 164,
                      "end": 167,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "name": "x",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
