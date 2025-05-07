__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 319,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 296,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 296,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 40,
              "end": 46,
              "name": "value"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 99,
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
              "start": 99,
              "end": 157,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 157,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 124,
                    "end": 151,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 124,
                      "end": 150,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 135,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 129,
                          "end": 135,
                          "name": "value"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 150,
                        "decorators": [],
                        "name": "initialValue",
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
                  "start": 100,
                  "end": 112,
                  "decorators": [],
                  "name": "initialValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 235,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 197,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 235,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 235,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 210,
                    "end": 229,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 217,
                      "end": 228,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 217,
                        "end": 221
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 222,
                        "end": 228,
                        "name": "value"
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
            "start": 241,
            "end": 294,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 250,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 250,
              "end": 294,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 294,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 268,
                    "end": 288,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 268,
                      "end": 287,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 268,
                        "end": 279,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 268,
                          "end": 272
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 273,
                          "end": 279,
                          "name": "value"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 287,
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
                  "start": 251,
                  "end": 256,
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
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 319,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 298,
        "end": 318,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 298,
          "end": 314,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 298,
            "end": 308,
            "arguments": [
              {
                "type": "Literal",
                "start": 306,
                "end": 307,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 309,
            "end": 314,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 317,
          "end": 318,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
