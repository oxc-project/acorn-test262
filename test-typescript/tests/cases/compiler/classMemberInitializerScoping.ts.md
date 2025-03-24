__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 353,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "aaa",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 203,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 203,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              }
            },
            "value": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "aaa",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 79,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 64,
              "decorators": [],
              "name": "staticY",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 66,
                "end": 72
              }
            },
            "value": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "decorators": [],
              "name": "aaa",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 201,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 121,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 201,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 201,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 137,
                    "end": 149,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 137,
                      "end": 148,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 137,
                        "end": 143,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 137,
                          "end": 141
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 146,
                        "end": 148,
                        "raw": "''",
                        "value": ""
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
                  "start": 122,
                  "end": 125,
                  "decorators": [],
                  "name": "aaa",
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
        "start": 19,
        "end": 22,
        "decorators": [],
        "name": "CCC",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "decorators": [],
            "name": "aaaa",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 248,
            "end": 249,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 251,
      "end": 351,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 262,
        "end": 351,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 268,
            "end": 275,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 274,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 271,
                "end": 274
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 280,
            "end": 349,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 291,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 291,
              "end": 349,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 298,
                "end": 349,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 322,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 308,
                      "end": 321,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 308,
                        "end": 314,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 308,
                          "end": 312
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 314,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 321,
                        "decorators": [],
                        "name": "aaaa",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 331,
                    "end": 343,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 331,
                      "end": 342,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 331,
                        "end": 337,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 331,
                          "end": 335
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 336,
                          "end": 337,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 340,
                        "end": 342,
                        "raw": "''",
                        "value": ""
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
                  "start": 292,
                  "end": 296,
                  "decorators": [],
                  "name": "aaaa",
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
        "start": 257,
        "end": 261,
        "decorators": [],
        "name": "CCCC",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
