__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 335,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 58,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 56,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              }
            },
            "value": {
              "type": "Literal",
              "start": 42,
              "end": 55,
              "raw": "\"Hello world\"",
              "value": "Hello world"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 60,
      "end": 164,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 164,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 100,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            },
            "value": {
              "type": "Literal",
              "start": 86,
              "end": 99,
              "raw": "\"Hello world\"",
              "value": "Hello world"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 115,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 108,
                "end": 114
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 120,
            "end": 162,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 131,
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
              "start": 131,
              "end": 162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 162,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 144,
                    "end": 156,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 144,
                      "end": 155,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 144,
                        "end": 150,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 144,
                          "end": 148
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 153,
                        "end": 155,
                        "raw": "10",
                        "value": 10
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 166,
      "end": 209,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 183,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 189,
            "end": 207,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 199,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 192,
                "end": 199
              }
            },
            "value": {
              "type": "Literal",
              "start": 202,
              "end": 206,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 182,
        "end": 183,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 211,
      "end": 335,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 228,
        "end": 335,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 234,
            "end": 252,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 244,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 237,
                "end": 244
              }
            },
            "value": {
              "type": "Literal",
              "start": 247,
              "end": 251,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 257,
            "end": 267,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 266,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 272,
            "end": 333,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 283,
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
              "start": 283,
              "end": 333,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 333,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 296,
                    "end": 304,
                    "expression": {
                      "type": "CallExpression",
                      "start": 296,
                      "end": 303,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 296,
                        "end": 301
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 313,
                    "end": 327,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 313,
                      "end": 326,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 313,
                        "end": 319,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 313,
                          "end": 317
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 318,
                          "end": 319,
                          "decorators": [],
                          "name": "j",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 322,
                        "end": 326,
                        "raw": "\"HI\"",
                        "value": "HI"
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 227,
        "end": 228,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
