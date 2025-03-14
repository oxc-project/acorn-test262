autoAccessor2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 243,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 243,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 32,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 24,
              "end": 26,
              "name": "a"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              }
            },
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 37,
            "end": 53,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 46,
              "end": 48,
              "name": "b"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 51,
              "end": 52,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "AccessorProperty",
            "start": 58,
            "end": 82,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 74,
              "end": 76,
              "name": "c"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 81,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 78,
                "end": 81
              }
            },
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 87,
            "end": 110,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 103,
              "end": 105,
              "name": "d"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 108,
              "end": 109,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 179,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 127,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 179,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 140,
                    "end": 152,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 140,
                      "end": 151,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 140,
                        "end": 147,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 145,
                          "end": 147,
                          "name": "a"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 150,
                        "end": 151,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 161,
                    "end": 173,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 161,
                      "end": 172,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 161,
                        "end": 168,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 161,
                          "end": 165
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 166,
                          "end": 168,
                          "name": "b"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 171,
                        "end": 172,
                        "raw": "4",
                        "value": 4
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "StaticBlock",
            "start": 185,
            "end": 241,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 202,
                "end": 214,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 202,
                  "end": 213,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 202,
                    "end": 209,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 202,
                      "end": 206
                    },
                    "optional": false,
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 207,
                      "end": 209,
                      "name": "c"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 212,
                    "end": 213,
                    "raw": "5",
                    "value": 5
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 223,
                "end": 235,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 223,
                  "end": 234,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 223,
                    "end": 230,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 223,
                      "end": 227
                    },
                    "optional": false,
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 228,
                      "end": 230,
                      "name": "d"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 233,
                    "end": 234,
                    "raw": "6",
                    "value": 6
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
