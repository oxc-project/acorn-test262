__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 237,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 40,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 40,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 24,
                    "end": 38,
                    "argument": {
                      "type": "Literal",
                      "start": 31,
                      "end": 38,
                      "raw": "'oh no'",
                      "value": "oh no",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 87,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 76,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 71,
              "end": 76,
              "raw": "'yep'",
              "value": "yep",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 194,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 194,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 102,
            "end": 114,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 109,
              "decorators": [],
              "name": "_secret",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 112,
              "end": 114,
              "raw": "11",
              "value": 11,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 150,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 150,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 148,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 136,
                      "end": 148,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 136,
                        "end": 140
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 148,
                        "decorators": [],
                        "name": "_secret",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 192,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 192,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 192,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 170,
                    "end": 190,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 170,
                      "end": 190,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 170,
                        "end": 182,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 170,
                          "end": 174
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 182,
                          "decorators": [],
                          "name": "_secret",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 190,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 161,
                  "end": 166,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 237,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 213,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 219,
            "end": 226,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 223,
              "end": 226,
              "raw": "101",
              "value": 101,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
