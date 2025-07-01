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
        "name": "arrTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 24
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
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      },
                      "start": 31,
                      "end": 39
                    },
                    "start": 29,
                    "end": 39
                  },
                  "start": 25,
                  "end": 39
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 41,
                "end": 47
              },
              "expression": false,
              "start": 24,
              "end": 47
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 20,
            "end": 47
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "callTest",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 60
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 121,
                          "end": 125
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 130
                        },
                        "optional": false,
                        "computed": false,
                        "start": 121,
                        "end": 130
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 132,
                              "end": 133
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 135,
                              "end": 136
                            },
                            {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "\"hi\"",
                              "start": 138,
                              "end": 142
                            },
                            {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5",
                              "start": 144,
                              "end": 145
                            }
                          ],
                          "start": 131,
                          "end": 148
                        }
                      ],
                      "optional": false,
                      "start": 121,
                      "end": 149
                    },
                    "directive": null,
                    "start": 121,
                    "end": 150
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 168
                        },
                        "optional": false,
                        "computed": false,
                        "start": 159,
                        "end": 168
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 170,
                              "end": 171
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 173,
                              "end": 174
                            },
                            {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "\"hi\"",
                              "start": 176,
                              "end": 180
                            },
                            {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5",
                              "start": 182,
                              "end": 183
                            }
                          ],
                          "start": 169,
                          "end": 184
                        }
                      ],
                      "optional": false,
                      "start": 159,
                      "end": 185
                    },
                    "directive": null,
                    "start": 159,
                    "end": 186
                  }
                ],
                "start": 63,
                "end": 193
              },
              "expression": false,
              "start": 60,
              "end": 193
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 52,
            "end": 193
          }
        ],
        "start": 14,
        "end": 195
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```
