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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "a",
              "start": 24,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              },
              "start": 26,
              "end": 31
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 15,
            "end": 32
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "b",
              "start": 46,
              "end": 48
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 51,
              "end": 52
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 37,
            "end": 53
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "c",
              "start": 74,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 78,
                "end": 81
              },
              "start": 76,
              "end": 81
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 58,
            "end": 82
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "d",
              "start": 103,
              "end": 105
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 108,
              "end": 109
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 87,
            "end": 110
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 127
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "a",
                          "start": 145,
                          "end": 147
                        },
                        "optional": false,
                        "computed": false,
                        "start": 140,
                        "end": 147
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 150,
                        "end": 151
                      },
                      "start": 140,
                      "end": 151
                    },
                    "directive": null,
                    "start": 140,
                    "end": 152
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 161,
                          "end": 165
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "b",
                          "start": 166,
                          "end": 168
                        },
                        "optional": false,
                        "computed": false,
                        "start": 161,
                        "end": 168
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 171,
                        "end": 172
                      },
                      "start": 161,
                      "end": 172
                    },
                    "directive": null,
                    "start": 161,
                    "end": 173
                  }
                ],
                "start": 130,
                "end": 179
              },
              "expression": false,
              "start": 127,
              "end": 179
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 116,
            "end": 179
          },
          {
            "type": "StaticBlock",
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
                      "start": 202,
                      "end": 206
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "name": "c",
                      "start": 207,
                      "end": 209
                    },
                    "optional": false,
                    "computed": false,
                    "start": 202,
                    "end": 209
                  },
                  "right": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 212,
                    "end": 213
                  },
                  "start": 202,
                  "end": 213
                },
                "directive": null,
                "start": 202,
                "end": 214
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 223,
                      "end": 227
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "name": "d",
                      "start": 228,
                      "end": 230
                    },
                    "optional": false,
                    "computed": false,
                    "start": 223,
                    "end": 230
                  },
                  "right": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 233,
                    "end": 234
                  },
                  "start": 223,
                  "end": 234
                },
                "directive": null,
                "start": 223,
                "end": 235
              }
            ],
            "start": 185,
            "end": 241
          }
        ],
        "start": 9,
        "end": 243
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
