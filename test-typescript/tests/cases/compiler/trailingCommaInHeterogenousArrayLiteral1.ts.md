__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 196,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "arrTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 47,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 47,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 39,
                  "name": "arg1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 31,
                      "end": 39,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 47,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 193,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 60,
              "name": "callTest",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 193,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 193,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 150,
                    "expression": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 149,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 121,
                        "end": 130,
                        "object": {
                          "type": "ThisExpression",
                          "start": 121,
                          "end": 125
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 130,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 131,
                          "end": 148,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 132,
                              "end": 133,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 135,
                              "end": 136,
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "start": 138,
                              "end": 142,
                              "value": "hi",
                              "raw": "\"hi\""
                            },
                            {
                              "type": "Literal",
                              "start": 144,
                              "end": 145,
                              "value": 5,
                              "raw": "5"
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 159,
                    "end": 186,
                    "expression": {
                      "type": "CallExpression",
                      "start": 159,
                      "end": 185,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 159,
                        "end": 168,
                        "object": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 168,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 169,
                          "end": 184,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 170,
                              "end": 171,
                              "value": 1,
                              "raw": "1"
                            },
                            {
                              "type": "Literal",
                              "start": 173,
                              "end": 174,
                              "value": 2,
                              "raw": "2"
                            },
                            {
                              "type": "Literal",
                              "start": 176,
                              "end": 180,
                              "value": "hi",
                              "raw": "\"hi\""
                            },
                            {
                              "type": "Literal",
                              "start": 182,
                              "end": 183,
                              "value": 5,
                              "raw": "5"
                            }
                          ]
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
