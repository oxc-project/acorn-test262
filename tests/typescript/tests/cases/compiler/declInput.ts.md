__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 14,
        "end": 18
      },
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 29
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
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
                      "value": "",
                      "raw": "''",
                      "start": 54,
                      "end": 56
                    },
                    "start": 47,
                    "end": 57
                  }
                ],
                "start": 45,
                "end": 59
              },
              "expression": false,
              "start": 42,
              "end": 59
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 34,
            "end": 59
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 83,
                            "end": 84
                          },
                          "value": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 87,
                                "end": 90
                              },
                              "typeArguments": null,
                              "start": 87,
                              "end": 90
                            },
                            "expression": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 91,
                              "end": 95
                            },
                            "start": 86,
                            "end": 95
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 83,
                          "end": 95
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 98
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 100,
                            "end": 109
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 97,
                          "end": 109
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 111,
                            "end": 112
                          },
                          "value": {
                            "type": "UnaryExpression",
                            "operator": "void",
                            "argument": {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4",
                              "start": 119,
                              "end": 120
                            },
                            "prefix": true,
                            "start": 114,
                            "end": 120
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 111,
                          "end": 120
                        }
                      ],
                      "start": 82,
                      "end": 122
                    },
                    "start": 75,
                    "end": 123
                  }
                ],
                "start": 73,
                "end": 125
              },
              "expression": false,
              "start": 70,
              "end": 125
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 62,
            "end": 125
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 138
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 141,
                    "end": 142
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 142
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 145
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 148,
                    "end": 152
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 152
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 155
                  },
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 158,
                    "end": 160
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 160
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 165
                      },
                      "start": 164,
                      "end": 167
                    },
                    "directive": null,
                    "start": 164,
                    "end": 168
                  }
                ],
                "start": 162,
                "end": 170
              },
              "expression": false,
              "start": 136,
              "end": 170
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 128,
            "end": 170
          }
        ],
        "start": 30,
        "end": 172
      },
      "abstract": false,
      "declare": false,
      "start": 20,
      "end": 172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
