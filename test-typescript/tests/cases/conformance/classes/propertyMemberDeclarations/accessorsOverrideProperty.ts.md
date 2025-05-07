__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 25,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
              "start": 18,
              "end": 23,
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
      "start": 26,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 76,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
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
              "start": 55,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 76,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 74,
                    "argument": {
                      "type": "Literal",
                      "start": 67,
                      "end": 74,
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
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
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
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
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
              "start": 105,
              "end": 108,
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
      "start": 111,
      "end": 246,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 246,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 136,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 143,
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
              "start": 146,
              "end": 148,
              "raw": "11",
              "value": 11,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 184,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
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
              "start": 158,
              "end": 184,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 184,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 163,
                    "end": 182,
                    "argument": {
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
            "start": 198,
            "end": 235,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
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
              "start": 203,
              "end": 235,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 211,
                "end": 235,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 213,
                    "end": 233,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 213,
                      "end": 233,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 213,
                        "end": 225,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 213,
                          "end": 217
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 225,
                          "decorators": [],
                          "name": "_secret",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 233,
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
                  "start": 204,
                  "end": 209,
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
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
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
