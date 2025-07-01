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
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 15,
        "end": 19
      },
      "declare": false,
      "start": 0,
      "end": 19
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
        "start": 27,
        "end": 30
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
              "start": 42,
              "end": 43
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
                      "start": 55,
                      "end": 57
                    },
                    "start": 48,
                    "end": 58
                  }
                ],
                "start": 46,
                "end": 60
              },
              "expression": false,
              "start": 43,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 35,
            "end": 60
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
              "start": 70,
              "end": 71
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
                            "start": 84,
                            "end": 85
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
                                "start": 88,
                                "end": 91
                              },
                              "typeArguments": null,
                              "start": 88,
                              "end": 91
                            },
                            "expression": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 92,
                              "end": 96
                            },
                            "start": 87,
                            "end": 96
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 84,
                          "end": 96
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
                            "start": 98,
                            "end": 99
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 101,
                            "end": 110
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 98,
                          "end": 110
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
                            "start": 112,
                            "end": 113
                          },
                          "value": {
                            "type": "UnaryExpression",
                            "operator": "void",
                            "argument": {
                              "type": "Literal",
                              "value": 4,
                              "raw": "4",
                              "start": 120,
                              "end": 121
                            },
                            "prefix": true,
                            "start": 115,
                            "end": 121
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 112,
                          "end": 121
                        }
                      ],
                      "start": 83,
                      "end": 123
                    },
                    "start": 76,
                    "end": 124
                  }
                ],
                "start": 74,
                "end": 126
              },
              "expression": false,
              "start": 71,
              "end": 126
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 63,
            "end": 126
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
              "start": 136,
              "end": 137
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
                    "start": 138,
                    "end": 139
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 142,
                    "end": 143
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 143
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
                    "start": 145,
                    "end": 146
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 149,
                    "end": 153
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 153
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
                    "start": 155,
                    "end": 156
                  },
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 159,
                    "end": 161
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 161
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
                        "start": 165,
                        "end": 166
                      },
                      "start": 165,
                      "end": 168
                    },
                    "directive": null,
                    "start": 165,
                    "end": 169
                  }
                ],
                "start": 163,
                "end": 171
              },
              "expression": false,
              "start": 137,
              "end": 171
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 129,
            "end": 171
          }
        ],
        "start": 31,
        "end": 173
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 173
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
